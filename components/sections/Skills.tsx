import { skills } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/badge";
import {
  IconCode,
  IconServer,
  IconBrain,
  IconCloud,
  IconDatabase,
  IconTool,
} from "@tabler/icons-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <IconCode size={15} />,
  Backend: <IconServer size={15} />,
  "AI / ML": <IconBrain size={15} />,
  "Cloud & DevOps": <IconCloud size={15} />,
  Databases: <IconDatabase size={15} />,
  Tools: <IconTool size={15} />,
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto px-8">
      <SectionHeader
        label="// skills"
        title="Technical stack"
        subtitle="Technologies and tools I use to build production-ready systems."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((group, i) => (
          <FadeIn key={group.category} delay={i * 0.07}>
            <div className="p-5 rounded-xl border border-border bg-card hover:border-[#7c6fcd]/30 hover:shadow-sm transition-all duration-200 h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#7c6fcd]">
                  {categoryIcons[group.category]}
                </span>
                <p className="text-xs font-mono text-[#7c6fcd] tracking-widest uppercase">
                  {group.category}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="text-xs px-2.5 py-1 rounded-lg cursor-default hover:bg-[#7c6fcd]/10 hover:text-[#a89de8] hover:border-[#7c6fcd]/30 transition-all duration-150 border border-border"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
