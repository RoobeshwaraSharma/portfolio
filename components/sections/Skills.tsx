import { skills } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6">
      <SectionHeader
        label="// skills"
        title="Technical stack"
        subtitle="Technologies and tools I use to build production-ready systems."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((group, i) => (
          <FadeIn key={group.category} delay={i * 0.07}>
            <div className="p-5 rounded-xl border border-[#1f1f1f] bg-[#111] hover:border-[#2a2a3a] hover:bg-[#121218] transition-all duration-200 h-full">
              <p className="text-xs font-mono text-[#7c6fcd] tracking-widest uppercase mb-4">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg text-sm text-[#c0c0c0] bg-[#18181f] border border-[#2a2a35] hover:border-[#7c6fcd]/40 hover:text-[#a89de8] transition-all duration-150 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
