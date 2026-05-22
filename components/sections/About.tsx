import { personalInfo, certifications } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import { IconCertificate, IconBriefcase, IconCode } from "@tabler/icons-react";

export default function About() {
  const stats = [
    { label: "Years of experience", value: "4+" },
    { label: "Companies worked", value: "3" },
    { label: "Tech stack depth", value: "Full-Stack" },
    { label: "Azure certified", value: "AZ-204" },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-6">
      <SectionHeader
        label="// about"
        title="Who I am"
        subtitle="A little bit about my background, what I do, and what drives me."
      />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Bio */}
        <div className="space-y-4">
          <FadeIn delay={0.1}>
            <p className="text-[#a0a0a0] leading-relaxed">
              I&apos;m a Senior Software Engineer based in Colombo, Sri Lanka, with over 4 years of hands-on
              experience building full-stack systems. My primary stack revolves around{" "}
              <span className="text-[#a89de8]">ASP.NET Core</span>,{" "}
              <span className="text-[#a89de8]">React</span>, and{" "}
              <span className="text-[#a89de8]">Next.js</span>, with deep expertise in deploying
              scalable solutions on <span className="text-[#a89de8]">Microsoft Azure</span>.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[#a0a0a0] leading-relaxed">
              Currently at <span className="text-[#f0f0f0]">Avonet Technologies</span>, I focus on
              system architecture and integrating cutting-edge AI — particularly{" "}
              <span className="text-[#4ade80]">LLMs</span> and{" "}
              <span className="text-[#4ade80]">Retrieval-Augmented Generation (RAG)</span> — into
              production-grade applications using Python.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-[#a0a0a0] leading-relaxed">
              I care deeply about code quality, maintainability, and building systems that scale.
              When I&apos;m not shipping features, I&apos;m exploring the latest developments in
              applied AI and developer tooling.
            </p>
          </FadeIn>

          {/* Certifications */}
          <FadeIn delay={0.4}>
            <div className="mt-6 p-4 rounded-xl border border-[#1f1f1f] bg-[#111]">
              <div className="flex items-center gap-2 mb-3">
                <IconCertificate size={16} className="text-[#7c6fcd]" />
                <span className="text-xs text-[#666] font-mono uppercase tracking-wider">Certifications</span>
              </div>
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#f0f0f0]">{cert.name}</p>
                    <p className="text-xs text-[#555]">{cert.issuer}</p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-xs font-mono bg-[#1a1f2e] text-[#7c6fcd] border border-[#2a3050]">
                    {cert.badge}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Stats grid */}
        <div className="space-y-4">
          <FadeIn delay={0.1} direction="right">
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl border border-[#1f1f1f] bg-[#111] hover:border-[#2a2a3a] transition-colors"
                >
                  <p className="text-2xl font-medium text-[#f0f0f0] mb-1">{stat.value}</p>
                  <p className="text-xs text-[#555]">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Currently */}
          <FadeIn delay={0.2} direction="right">
            <div className="p-4 rounded-xl border border-[#1a3a24] bg-[#0d1f14]">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                <span className="text-xs text-[#4ade80] font-mono uppercase tracking-wider">Currently</span>
              </div>
              <p className="text-sm text-[#a0a0a0]">
                Senior Software Engineer at{" "}
                <span className="text-[#f0f0f0]">Avonet Technologies</span>
              </p>
              <p className="text-xs text-[#555] mt-1">Building AI-powered full-stack systems · Colombo, SL</p>
            </div>
          </FadeIn>

          {/* Interests */}
          <FadeIn delay={0.3} direction="right">
            <div className="p-4 rounded-xl border border-[#1f1f1f] bg-[#111]">
              <div className="flex items-center gap-2 mb-3">
                <IconCode size={16} className="text-[#7c6fcd]" />
                <span className="text-xs text-[#666] font-mono uppercase tracking-wider">Interests</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["LLMs", "RAG", "System Design", "Clean Architecture", "Developer Tools", "Open Source"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs text-[#7a7a8a] bg-[#16161e] border border-[#222230]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
