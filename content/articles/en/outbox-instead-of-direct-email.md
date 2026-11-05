---
title: "Why Tempo sends email through an outbox"
description: "A sign-up should not fail because SMTP is slow. How Tempo writes email to an outbox table in the same transaction and lets a background job deliver it."
date: 2026-11-05
tags: [dotnet, postgresql, reliability, tempo]
---

Tempo is a time-tracking and invoicing tool I built with a .NET 10 API and PostgreSQL. It sends a handful of emails: account verification, workspace invites, invoice notices. Calling the mail sender inside the request works until the mail server is slow, or down, or rate-limits you, and then a user's sign-up fails for a reason that has nothing to do with them.

## The rule

A business change and the email it causes are written together, or not at all. The request never talks to SMTP.

When a handler creates an invite, it adds an `OutboxMessage` row with a type and a JSON payload to the same `DbContext`, and `SaveChanges` commits both in one transaction. If the transaction rolls back, there is no orphaned email. If it commits, the email is guaranteed to be picked up later.

## The dispatcher

A hosted `BackgroundService` does the sending:

- Every 15 seconds it reads pending rows: not yet dispatched, fewer than five attempts, oldest first, 25 at a time.
- It drains the backlog in a loop until a batch comes back short. One batch per tick fell behind after a burst of sign-ups, and verification mail arrived minutes late.
- Each row is rendered into an email and sent. On success it gets a `DispatchedAt` timestamp. On failure the retry count goes up and the first 500 characters of the error are stored, so a stuck message explains itself.
- If no SMTP host is configured, the rows are only marked as dispatched. Local development and tests never need a mail server.

## What it costs

One more table, one background worker to keep healthy, and email that is a few seconds late instead of instant. In exchange, a request's success depends only on the database, retries happen without anyone noticing, and every message that failed five times is still in a table where I can read why.

## What I would add next

A dead-letter view in the admin area for rows that hit the retry limit, and a metric for the age of the oldest pending message. That number is the one that tells you the dispatcher has stopped.
