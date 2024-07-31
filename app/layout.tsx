import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./header";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Firoos",
  description: "This is Naufal Firoos' Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.className} px-[14px] pt-4`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
