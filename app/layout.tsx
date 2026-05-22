import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roobeshwara Sharma | Senior Software Engineer",
  description:
    "Senior Software Engineer with 4+ years of full-stack experience in ASP.NET Core, Next.js, React, and Azure. Currently working with LLMs and RAG.",
  keywords: ["Software Engineer", "Full-Stack", "ASP.NET Core", "React", "Azure", "LLMs", "RAG", "Sri Lanka"],
  authors: [{ name: "Roobeshwara Sharma" }],
  openGraph: {
    title: "Roobeshwara Sharma | Senior Software Engineer",
    description: "Full-stack engineer specializing in ASP.NET Core, React, Azure & AI/LLMs.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-[#0a0a0a] text-[#f0f0f0]`}>
        {children}
      </body>
    </html>
  );
}
