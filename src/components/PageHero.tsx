import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function PageHero({ eyebrow, title, description, children }: { eyebrow?: string; title: ReactNode; description?: string; children?: ReactNode }) {
  return (
    <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 mesh-bg opacity-60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background" />
      <div className="container-page text-center max-w-3xl mx-auto">
        <Reveal>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium tracking-wide uppercase text-primary">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">{title}</h1>
          {description && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{description}</p>}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
