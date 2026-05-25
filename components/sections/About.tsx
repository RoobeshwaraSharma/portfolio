import { certifications } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconCertificate, IconCode } from "@tabler/icons-react";

export default function About() {
  const stats = [
    { label: "Years of experience", value: "4+" },
    { label: "Companies worked", value: "3" },
    { label: "Tech stack depth", value: "Full-Stack" },
    { label: "Azure certified", value: "AZ-204" },
  ];

  return (
    <section id="about" className="mx-auto px-8">
      <SectionHeader
        label="// about"
        title="Who I am"
        subtitle="A little bit about my background, what I do, and what drives me."
      />

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Bio */}
        <div className="space-y-4">
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a Senior Software Engineer based in Colombo, Sri Lanka,
              with over 4 years of hands-on experience building full-stack
              systems. My primary stack revolves around{" "}
              <span className="text-[#a89de8]">ASP.NET Core</span>,{" "}
              <span className="text-[#a89de8]">React</span>, and{" "}
              <span className="text-[#a89de8]">Next.js</span>, with deep
              expertise in deploying scalable solutions on{" "}
              <span className="text-[#a89de8]">Microsoft Azure</span>.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground leading-relaxed">
              Currently at{" "}
              <span className="text-foreground font-medium">
                Avonet Technologies
              </span>
              , I focus on system architecture and integrating cutting-edge AI —
              particularly <span className="text-[#4ade80]">LLMs</span> and{" "}
              <span className="text-[#4ade80]">
                Retrieval-Augmented Generation (RAG)
              </span>{" "}
              — into production-grade applications using Python.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-muted-foreground leading-relaxed">
              I care deeply about code quality, maintainability, and building
              systems that scale. When I&apos;m not shipping features, I&apos;m
              exploring the latest developments in applied AI and developer
              tooling.
            </p>
          </FadeIn>

          {/* Certifications */}
          <FadeIn delay={0.4}>
            <Card className="border-border bg-card mt-2">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <IconCertificate size={16} className="text-[#7c6fcd]" />
                  <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                    Certifications
                  </span>
                </div>
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm text-foreground">{cert.name}</p>
                      <p className="text-xs text-muted-foreground/70">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="px-2 py-0.5 rounded text-xs font-mono bg-[#7c6fcd]/10 text-[#7c6fcd] border border-[#7c6fcd]/20">
                      {cert.badge}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* Stats grid + Currently + Interests */}
        <div className="space-y-4">
          <FadeIn delay={0.1} direction="right">
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="border-border bg-card hover:border-[#7c6fcd]/30 transition-colors"
                >
                  <CardContent className="p-4">
                    <p className="text-2xl font-medium text-foreground mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </FadeIn>

          {/* Currently */}
          <FadeIn delay={0.2} direction="right">
            <div className="p-4 rounded-xl border border-[#1a3a24] dark:bg-[#0d1f14] bg-[#dcfce7]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                <span className="text-xs text-[#4ade80] font-mono uppercase tracking-wider">
                  Currently
                </span>
              </div>
              <p className="text-sm text-foreground">
                Senior Software Engineer at{" "}
                <span className="font-medium">Avonet Technologies</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Building AI-powered full-stack systems · Colombo, SL
              </p>
            </div>
          </FadeIn>

          {/* Interests */}
          <FadeIn delay={0.3} direction="right">
            <Card className="border-border bg-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <IconCode size={16} className="text-[#7c6fcd]" />
                  <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                    Interests
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "LLMs",
                    "RAG",
                    "System Design",
                    "Clean Architecture",
                    "Developer Tools",
                    "Open Source",
                  ].map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs border border-border"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
