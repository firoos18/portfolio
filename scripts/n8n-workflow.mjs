// Generates docs/n8n/article-draft.workflow.json. Edit this file, then run `npm run n8n`.
//
// Two ways in, one way out:
//   1. Article form      – you give a topic and the facts.
//   2. Weekly trends     – Monday 08:00 WIB, reads gym / tech / quant news and picks one topic
//                          that connects to Naufal's own work, citing the sources.
// Both end in the same place: a DRAFT pull request. Nothing is published without a merge.
import fs from "node:fs";

const OUT = "docs/n8n/article-draft.workflow.json";
const MODEL = "claude-opus-5-5";

const VOICE = `You draft articles for the portfolio of Naufal Firoos Asy Syarif. Every draft is reviewed and edited by Naufal before it is published.

Voice: first person, direct, technical, calm. Short paragraphs. Explain the decision, what it costs, and what you would change. No hype words (seamless, powerful, game-changing, revolutionary, unlock, leverage). No em dashes; use commas, colons, or full stops.

Format: Markdown body without an H1 (the title is rendered separately). Use ## for sections, lists where they help, \`code\` for identifiers. 500 to 900 words.

Languages: write the English article, then an Indonesian article with exactly the same facts and structure (natural Indonesian, technical terms may stay in English).

Fields: slug is lowercase-kebab-case English, at most 60 characters. description is 120 to 160 characters in each language and works as a search snippet. tags are 2 to 5 lowercase single words or short hyphenated terms.`;

// Facts already confirmed on the site or in the repositories. Personal statements may only use these.
// Bericuan, Infinity Gym, and DMS stay out of the articles by name; the technology behind them may be used.
const EXCLUDED = ["Bericuan", "Infinity Gym", "DMS"];
const PROFILE = `Confirmed facts about Naufal (the only personal facts you may use):
- Full-stack developer in Yogyakarta, Indonesia. Full Stack Developer at Berijalan Technocenter since Feb 2025: a digital e-signature platform (Next.js, Express.js, PostgreSQL, Docker, identity verification, SSO, MFA) and a React Native + NestJS field-survey app.
- Co-founded drunkcode.dev, a small software studio, with friends.
- Tempo: time tracking, approvals, and invoicing (.NET 10, PostgreSQL, transactional outbox for email, Next.js 15), deployed to his k3s homelab.
- Technology he has worked with on his own and studio projects (talk about the technique, never the project): .NET 10 modular monoliths, PostgreSQL, JWT in HttpOnly cookies with revocable sessions in Redis, Next.js 16 admin CMSs with token-based design systems, MinIO for media, TipTap content sanitized on save and on render, and directing an AI coding agent (omp) to build a mobile-first app from design frames while reviewing every change.
- Quant side: he builds trading research tooling in Python (event-driven, standard library only) and tests against exchange testnets. He treats fees and strict validity checks as the bar a strategy must pass before anything else. Do not state results, returns, win rates, or strategy counts.
- Runs a k3s homelab managed with Argo CD.
- Doing R&D on an AI-driven development workflow with Claude Code and omp: agents draft, he reviews at every handoff from planning to end-to-end testing.
- Has trained in the gym consistently for almost five years and believes in process. Learning German (A1). Mobile roots: Flutter and Kotlin (Bangkit Academy, IDCamp).

Never name these projects or repositories: ${EXCLUDED.join(", ")}. Describe the technique instead ("a gym management platform I worked on", "a trading research engine I am building").`;

const MANUAL_RULES = `Facts: use only the facts, numbers, names, and code details given in the request. Never invent metrics, clients, employers, dates, quotes, or outcomes. If the notes are thin, write a shorter article rather than filling it in. Mark anything you are unsure of with [CHECK: ...] so the reviewer sees it.\n\nNever name these projects even if the notes do: Bericuan, Infinity Gym, DMS Platform. Write about the technology and the decision instead.`;

const TREND_RULES = `Task: pick ONE topic from this week's candidate headlines in three areas (gym and training, software and AI tooling, quant and algorithmic trading) and write an article that connects it to Naufal's own experience.

Picking:
- Prefer a topic where Naufal has a real angle from the confirmed facts. A trend with no honest link to his work is a bad pick.
- Skip anything already covered by the existing article titles you are given.
- Skip celebrity news, product promotions, price predictions, and anything that is only a rumour.
- Use web search to read the original sources behind the headline before writing. Cite at least two sources.

Accuracy:
- Claims about the trend must come from the sources you read; put the source links in a final "## Sources" section (Indonesian: "## Sumber").
- Personal statements must come from the confirmed facts below. Never invent anecdotes, numbers, lifts, returns, or results.
- Mark anything you could not confirm with [CHECK: ...].

Safety:
- Quant and trading: educational only. No buy or sell calls, no price targets, no promised returns. Be plain that most strategies fail after fees and that backtests are not live results.
- Gym and training: share experience and evidence, not medical advice. No supplement or drug dosing.

${PROFILE}`;

const articleShape = {
  type: "object",
  properties: { title: { type: "string" }, description: { type: "string" }, body: { type: "string" } },
  required: ["title", "description", "body"],
  additionalProperties: false,
};
const manualSchema = {
  type: "object",
  properties: { slug: { type: "string" }, tags: { type: "array", items: { type: "string" } }, en: articleShape, id: articleShape },
  required: ["slug", "tags", "en", "id"],
  additionalProperties: false,
};
const trendSchema = {
  type: "object",
  properties: {
    category: { type: "string", enum: ["gym", "tech", "quant"] },
    why_now: { type: "string" },
    sources: {
      type: "array",
      items: {
        type: "object",
        properties: { title: { type: "string" }, url: { type: "string" } },
        required: ["title", "url"],
        additionalProperties: false,
      },
    },
    ...manualSchema.properties,
  },
  required: ["category", "why_now", "sources", ...manualSchema.required],
  additionalProperties: false,
};

const anthropicHeaders = {
  parameters: [
    { name: "anthropic-version", value: "2023-06-01" },
    { name: "anthropic-beta", value: "server-side-fallback-2026-07-01" },
    { name: "content-type", value: "application/json" },
  ],
};

function claudeNode(name, position, bodyExpression) {
  return {
    parameters: {
      method: "POST",
      url: "https://api.anthropic.com/v1/messages",
      authentication: "genericCredentialType",
      genericAuthType: "httpHeaderAuth",
      sendHeaders: true,
      headerParameters: anthropicHeaders,
      sendBody: true,
      specifyBody: "json",
      jsonBody: bodyExpression,
      options: { timeout: 600000 },
    },
    name,
    type: "n8n-nodes-base.httpRequest",
    typeVersion: 4.2,
    position,
    credentials: { httpHeaderAuth: { id: "", name: "Anthropic API key" } },
  };
}

const manualBody =
  "={{ JSON.stringify({" +
  ` model: '${MODEL}', max_tokens: 16000, fallbacks: 'default',` +
  ` output_config: { effort: 'high', format: { type: 'json_schema', schema: ${JSON.stringify(manualSchema)} } },` +
  ` system: ${JSON.stringify(`${VOICE}\n\n${MANUAL_RULES}`)},` +
  " messages: [{ role: 'user', content: 'Topic: ' + $json.Topic + '\\n\\nFacts and notes (use only these):\\n' + $json['Facts and notes'] + ($json['Source links'] ? '\\n\\nSources:\\n' + $json['Source links'] : '') }]" +
  " }) }}";

const trendBody =
  "={{ JSON.stringify({" +
  ` model: '${MODEL}', max_tokens: 32000, fallbacks: 'default',` +
  " tools: [{ type: 'web_search_20260209', name: 'web_search', max_uses: 6 }]," +
  ` output_config: { effort: 'high', format: { type: 'json_schema', schema: ${JSON.stringify(trendSchema)} } },` +
  ` system: ${JSON.stringify(`${VOICE}\n\n${TREND_RULES}`)},` +
  " messages: [{ role: 'user', content: 'Today: ' + $json.today + '\\n\\nExisting article titles (do not repeat):\\n' + $json.existing + '\\n\\nCandidate headlines from the last 7 days:\\n' + $json.candidates }]" +
  " }) }}";

const COLLECT = `
// Headlines from the four feeds, newest first, last 7 days only, 12 per area at most.
const week = Date.now() - 7 * 24 * 3600 * 1000;
const take = (node, area) => $(node).all()
  .map((i) => i.json)
  .filter((j) => j.title && (!j.isoDate || Date.parse(j.isoDate) >= week))
  .slice(0, 12)
  .map((j) => '- [' + area + '] ' + j.title.replace(/\\s+/g, ' ').trim() + ' (' + (j.isoDate || '').slice(0, 10) + ') ' + j.link);

const candidates = [
  ...take('Gym news', 'gym'),
  ...take('Tech news', 'tech'),
  ...take('Hacker News', 'tech'),
  ...take('Quant news', 'quant'),
];
if (candidates.length === 0) throw new Error('No headlines this week; check the feed nodes.');

const existing = $('Existing articles').all()
  .map((i) => i.json.name)
  .filter((n) => typeof n === 'string' && n.endsWith('.md'))
  .map((n) => '- ' + n.replace(/\\.md$/, ''))
  .join('\\n') || '- (none)';

return [{ json: {
  today: new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Jakarta' }).format(new Date()),
  candidates: candidates.join('\\n'),
  existing,
} }];
`;

const BUILD = `
const res = $input.first().json;
if (res.stop_reason === 'refusal') throw new Error('Claude declined: ' + JSON.stringify(res.stop_details));
if (res.stop_reason === 'max_tokens') throw new Error('Draft hit max_tokens; run again or narrow the topic.');
if (res.stop_reason === 'pause_turn') throw new Error('Claude paused mid-research; run the workflow again.');

const text = (res.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('');
const draft = JSON.parse(text);

const slug = String(draft.slug).toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60);
if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error('Bad slug: ' + draft.slug);

const category = draft.category || 'manual';
const notes = {
  quant: {
    en: '*This article is for education only and is not financial advice. Backtests are not live results, and most strategies fail after fees.*',
    id: '*Artikel ini hanya untuk edukasi dan bukan saran keuangan. Hasil backtest bukan hasil live, dan sebagian besar strategi gagal setelah biaya.*',
  },
  gym: {
    en: '*This is my experience, not medical advice. Talk to a professional before changing your training around an injury or condition.*',
    id: '*Ini pengalaman saya, bukan saran medis. Konsultasikan dengan profesional sebelum mengubah latihan karena cedera atau kondisi tertentu.*',
  },
};

const date = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Jakarta' }).format(new Date());
const tags = (draft.tags || []).map((t) => String(t).toLowerCase().replace(/[^a-z0-9-]+/g, '-')).filter(Boolean).slice(0, 5);
const q = (s) => '"' + String(s).replace(/\\\\/g, '\\\\\\\\').replace(/"/g, '\\\\"').replace(/\\r?\\n/g, ' ') + '"';
const file = (a, lang) => [
  '---',
  'title: ' + q(a.title),
  'description: ' + q(a.description),
  'date: ' + date,
  'tags: [' + tags.join(', ') + ']',
  '---',
  '',
  a.body.trim(),
  ...(notes[category] ? ['', notes[category][lang]] : []),
  '',
].join('\\n');

const b64 = (s) => Buffer.from(s, 'utf8').toString('base64');
const sources = (draft.sources || []).map((s) => '- [' + s.title + '](' + s.url + ')');
const checks = (draft.en.body + '\\n' + draft.id.body).match(/\\[CHECK:[^\\]]*\\]/g) || [];
const allText = [draft.en.title, draft.en.description, draft.en.body, draft.id.title, draft.id.description, draft.id.body].join('\\n');
const named = ${JSON.stringify(EXCLUDED)}.filter((n) => allText.toLowerCase().includes(n.toLowerCase()));

const body = [
  (category === 'manual' ? 'Drafted by Claude (' + res.model + ') from the n8n article form.' : 'Drafted by Claude (' + res.model + ') from the weekly trend scan. Category: **' + category + '**.'),
  ...(draft.why_now ? ['', '**Why now:** ' + draft.why_now] : []),
  ...(sources.length ? ['', '**Sources read:**', ...sources] : []),
  '',
  'Review before merging:',
  '- [ ] Every claim about the trend matches the linked sources',
  '- [ ] Every personal statement is true and mine to share',
  '- [ ] No mention of Bericuan, Infinity Gym, or DMS',
  '- [ ] EN and ID say the same thing',
  '- [ ] Title and description read well in search results',
  '- [ ] No [CHECK: ...] markers left (CI fails if there are)',
  ...(checks.length ? ['', 'Markers to resolve:', ...checks.map((c) => '- ' + c)] : []),
  ...(named.length ? ['', '**Excluded project named, rewrite before merging:** ' + named.join(', ')] : []),
].join('\\n');

return [{ json: {
  slug,
  branch: 'article/' + slug + '-' + Date.now().toString(36),
  title: (named.length ? '[rename] ' : '') + (category === 'manual' ? '' : '[' + category + '] ') + draft.en.title,
  enPath: 'content/articles/en/' + slug + '.md',
  idPath: 'content/articles/id/' + slug + '.md',
  enContent: b64(file(draft.en, 'en')),
  idContent: b64(file(draft.id, 'id')),
  prBody: body,
} }];
`;

const REPO = "https://api.github.com/repos/{{ $vars.PORTFOLIO_REPO || 'firoos18/portfolio' }}";
const githubHeaders = {
  parameters: [
    { name: "Accept", value: "application/vnd.github+json" },
    { name: "X-GitHub-Api-Version", value: "2022-11-28" },
  ],
};

function githubNode(name, method, url, body, position) {
  const node = {
    parameters: {
      method,
      url: "=" + url,
      authentication: "genericCredentialType",
      genericAuthType: "httpHeaderAuth",
      sendHeaders: true,
      headerParameters: githubHeaders,
      options: {},
    },
    name,
    type: "n8n-nodes-base.httpRequest",
    typeVersion: 4.2,
    position,
    credentials: { httpHeaderAuth: { id: "", name: "GitHub portfolio token" } },
  };
  if (body) Object.assign(node.parameters, { sendBody: true, specifyBody: "json", jsonBody: body });
  return node;
}

const rss = (name, url, position) => ({
  parameters: { url, options: {} },
  name,
  type: "n8n-nodes-base.rssFeedRead",
  typeVersion: 1.1,
  position,
});
const news = (query) =>
  `https://news.google.com/rss/search?q=${encodeURIComponent(`${query} when:7d`)}&hl=en-US&gl=US&ceid=US:en`;

const B = "$('Build files').first().json";
const nodes = [
  {
    parameters: {
      formTitle: "Draft a portfolio article",
      formDescription:
        "Claude drafts EN + ID from your notes and opens a draft pull request. Nothing is published until you merge it.",
      formFields: {
        values: [
          { fieldLabel: "Topic", requiredField: true, placeholderText: "Why Redis owns the session" },
          {
            fieldLabel: "Facts and notes",
            fieldType: "textarea",
            requiredField: true,
            placeholderText: "The real details: code, decisions, tradeoffs, numbers you can stand behind.",
          },
          { fieldLabel: "Source links", fieldType: "textarea", placeholderText: "Optional: repo paths, PRs, docs" },
        ],
      },
      options: {},
    },
    name: "Article form",
    type: "n8n-nodes-base.formTrigger",
    typeVersion: 2.2,
    position: [0, 0],
  },
  claudeNode("Claude draft", [240, 0], manualBody),

  {
    parameters: {
      rule: { interval: [{ field: "weeks", triggerAtDay: [1], triggerAtHour: 8 }] },
    },
    name: "Every Monday",
    type: "n8n-nodes-base.scheduleTrigger",
    typeVersion: 1.2,
    position: [-480, 400],
  },
  rss("Gym news", news("strength training OR hypertrophy OR gym research"), [-240, 240]),
  rss("Tech news", news("AI coding agents OR software engineering OR developer tools"), [-240, 360]),
  rss("Hacker News", "https://hnrss.org/best", [-240, 480]),
  rss("Quant news", news("algorithmic trading OR quantitative trading OR crypto trading bot"), [-240, 600]),
  githubNode("Existing articles", "GET", `${REPO}/contents/content/articles/en`, null, [-240, 720]),
  {
    parameters: { numberInputs: 5 },
    name: "Wait for all feeds",
    type: "n8n-nodes-base.merge",
    typeVersion: 3,
    position: [0, 400],
  },
  {
    parameters: { mode: "runOnceForAllItems", jsCode: COLLECT.trim() },
    name: "Collect trends",
    type: "n8n-nodes-base.code",
    typeVersion: 2,
    position: [0, 600],
    executeOnce: true,
  },
  claudeNode("Claude trend draft", [240, 400], trendBody),

  { parameters: { jsCode: BUILD.trim() }, name: "Build files", type: "n8n-nodes-base.code", typeVersion: 2, position: [480, 200] },
  githubNode("Get main", "GET", `${REPO}/git/ref/heads/main`, null, [720, 200]),
  githubNode(
    "Create branch",
    "POST",
    `${REPO}/git/refs`,
    `={{ JSON.stringify({ ref: 'refs/heads/' + ${B}.branch, sha: $json.object.sha }) }}`,
    [960, 200],
  ),
  githubNode(
    "Add EN file",
    "PUT",
    `${REPO}/contents/{{ ${B}.enPath }}`,
    `={{ JSON.stringify({ message: 'content: draft article ' + ${B}.slug + ' (en)', content: ${B}.enContent, branch: ${B}.branch }) }}`,
    [1200, 200],
  ),
  githubNode(
    "Add ID file",
    "PUT",
    `${REPO}/contents/{{ ${B}.idPath }}`,
    `={{ JSON.stringify({ message: 'content: draft article ' + ${B}.slug + ' (id)', content: ${B}.idContent, branch: ${B}.branch }) }}`,
    [1440, 200],
  ),
  githubNode(
    "Open draft PR",
    "POST",
    `${REPO}/pulls`,
    `={{ JSON.stringify({ title: 'Article: ' + ${B}.title, head: ${B}.branch, base: 'main', draft: true, body: ${B}.prBody }) }}`,
    [1680, 200],
  ),
];

const link = (to, index = 0) => ({ node: to, type: "main", index });
const connections = {
  "Article form": { main: [[link("Claude draft")]] },
  "Claude draft": { main: [[link("Build files")]] },
  "Every Monday": {
    main: [[link("Gym news"), link("Tech news"), link("Hacker News"), link("Quant news"), link("Existing articles")]],
  },
  "Gym news": { main: [[link("Wait for all feeds", 0)]] },
  "Tech news": { main: [[link("Wait for all feeds", 1)]] },
  "Hacker News": { main: [[link("Wait for all feeds", 2)]] },
  "Quant news": { main: [[link("Wait for all feeds", 3)]] },
  "Existing articles": { main: [[link("Wait for all feeds", 4)]] },
  "Wait for all feeds": { main: [[link("Collect trends")]] },
  "Collect trends": { main: [[link("Claude trend draft")]] },
  "Claude trend draft": { main: [[link("Build files")]] },
  "Build files": { main: [[link("Get main")]] },
  "Get main": { main: [[link("Create branch")]] },
  "Create branch": { main: [[link("Add EN file")]] },
  "Add EN file": { main: [[link("Add ID file")]] },
  "Add ID file": { main: [[link("Open draft PR")]] },
};

const workflow = {
  name: "Portfolio article drafts (form + weekly trends, review-first)",
  nodes,
  connections,
  settings: { executionOrder: "v1", timezone: "Asia/Jakarta" },
  pinData: {},
};

fs.mkdirSync("docs/n8n", { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(workflow, null, 2) + "\n");
console.log(`wrote ${OUT}: ${nodes.length} nodes`);
