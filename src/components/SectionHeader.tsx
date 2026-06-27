import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium tracking-wide uppercase text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  );
}
