import { experience, education } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/badge";
import { IconBriefcase, IconSchool } from "@tabler/icons-react";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto px-8">
      <SectionHeader
        label="// experience"
        title="Career journey"
        subtitle="My professional path and educational background."
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Work experience */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <IconBriefcase size={16} className="text-[#7c6fcd]" />
            <span className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
              Work
            </span>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

            <div className="space-y-6">
              {experience.map((job, i) => (
                <FadeIn key={`${job.company}-${job.role}`} delay={i * 0.1}>
                  <div className="relative pl-7">
                    {/* Dot with company initial */}
                    <div
                      className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center ${
                        i === 0
                          ? "border-[#7c6fcd] bg-[#7c6fcd]/20"
                          : "border-border bg-background"
                      }`}
                    />

                    <div className="rounded-xl border border-border bg-card p-4 hover:border-[#7c6fcd]/30 transition-colors">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {job.role}
                          </p>
                          <p className="text-xs text-[#7c6fcd]">
                            {job.company}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-xs text-muted-foreground font-mono">
                            {job.period}
                          </p>
                          <p className="text-xs text-muted-foreground/60">
                            {job.duration}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {job.tech.map((t) => (
                          <Badge
                            key={t}
                            variant="outline"
                            className="px-2 py-0.5 text-xs border-border text-muted-foreground"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <IconSchool size={16} className="text-[#7c6fcd]" />
            <span className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
              Education
            </span>
          </div>

          <div className="space-y-4">
            {education.map((edu, i) => (
              <FadeIn key={edu.institution + edu.degree} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-card p-4 hover:border-[#7c6fcd]/30 transition-colors">
                  <p className="text-sm font-medium text-foreground mb-1">
                    {edu.degree}
                  </p>
                  <p className="text-xs text-[#7c6fcd] mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono">
                    {edu.period}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
