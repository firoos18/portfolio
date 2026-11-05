import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Naufal Firoos – Full-stack engineer",
  description:
    "Full-stack engineer in Yogyakarta. Interface, API, data, and infrastructure.",
};

export default function RedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
