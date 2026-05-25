import FadeIn from "./FadeIn";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <FadeIn>
        <p className="text-xs font-mono tracking-widest text-[#7c6fcd] uppercase mb-3">
          {label}
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-3">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground text-base">{subtitle}</p>
        )}
        <div className="mt-4 w-10 h-px bg-[#7c6fcd]" />
      </FadeIn>
    </div>
  );
}
