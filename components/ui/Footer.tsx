import { personalInfo } from "@/data";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-12 mt-16 border-t border-[#1a1a1a]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-mono text-sm text-[#555]">
            <span className="text-[#7c6fcd]">{"<"}</span>
            RS
            <span className="text-[#7c6fcd]">{" />"}</span>
          </p>
          <p className="text-xs text-[#444] mt-1">
            Built with Next.js 16 · Deployed on Vercel
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-[#444] hover:text-[#f0f0f0] transition-colors"
            aria-label="GitHub"
          >
            <IconBrandGithub size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[#444] hover:text-[#f0f0f0] transition-colors"
            aria-label="LinkedIn"
          >
            <IconBrandLinkedin size={18} />
          </a>
          <span className="text-[#333] text-xs">© {new Date().getFullYear()} Roobeshwara Sharma</span>
        </div>
      </div>
    </footer>
  );
}
