import FadeIn from "./FadeIn";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-14">
      <FadeIn>
        <p className="text-xs font-mono tracking-widest text-[#7c6fcd] uppercase mb-3">{label}</p>
        <h2 className="text-3xl md:text-4xl font-medium text-[#f0f0f0] mb-4">{title}</h2>
        {subtitle && <p className="text-[#666] text-base max-w-xl">{subtitle}</p>}
        <div className="mt-4 w-10 h-px bg-[#7c6fcd]" />
      </FadeIn>
    </div>
  );
}
