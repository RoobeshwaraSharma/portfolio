import { personalInfo } from "@/data";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="mx-auto px-8 py-10 mt-8 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-mono text-sm text-[#7c6fcd]">
            <span className="text-muted-foreground">{"<"}</span>
            RS
            <span className="text-muted-foreground">{" />"}</span>
          </p>
          <p className="text-xs text-muted-foreground/60 mt-1">
            Built with Next.js 16 · Deployed on Vercel
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground/60 hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <IconBrandGithub size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground/60 hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <IconBrandLinkedin size={18} />
          </a>
          <span className="text-muted-foreground/50 text-xs">
            © {new Date().getFullYear()} Roobeshwara Sharma
          </span>
        </div>
      </div>
    </footer>
  );
}
