import { experience, education } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import { IconBriefcase, IconSchool } from "@tabler/icons-react";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6">
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
            <span className="text-sm text-[#666] font-mono uppercase tracking-wider">Work</span>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#1f1f1f]" />

            <div className="space-y-8">
              {experience.map((job, i) => (
                <FadeIn key={`${job.company}-${job.role}`} delay={i * 0.1}>
                  <div className="relative pl-7">
                    {/* Dot */}
                    <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                      i === 0
                        ? "border-[#7c6fcd] bg-[#7c6fcd]/20"
                        : "border-[#2a2a2a] bg-[#0a0a0a]"
                    }`} />

                    <div className="p-4 rounded-xl border border-[#1f1f1f] bg-[#111] hover:border-[#2a2a3a] transition-colors">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <p className="text-sm font-medium text-[#f0f0f0]">{job.role}</p>
                          <p className="text-xs text-[#7c6fcd]">{job.company}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-xs text-[#555] font-mono">{job.period}</p>
                          <p className="text-xs text-[#444]">{job.duration}</p>
                        </div>
                      </div>
                      <p className="text-xs text-[#666] leading-relaxed mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {job.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-xs bg-[#18181f] text-[#7a7a8a] border border-[#222230]"
                          >
                            {t}
                          </span>
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
            <span className="text-sm text-[#666] font-mono uppercase tracking-wider">Education</span>
          </div>

          <div className="space-y-4">
            {education.map((edu, i) => (
              <FadeIn key={edu.institution + edu.degree} delay={i * 0.1}>
                <div className="p-4 rounded-xl border border-[#1f1f1f] bg-[#111] hover:border-[#2a2a3a] transition-colors">
                  <p className="text-sm font-medium text-[#f0f0f0] mb-1">{edu.degree}</p>
                  <p className="text-xs text-[#7c6fcd] mb-1">{edu.institution}</p>
                  <p className="text-xs text-[#555] font-mono">{edu.period}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
