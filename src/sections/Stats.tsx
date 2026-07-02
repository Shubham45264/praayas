import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Users, Trophy, GraduationCap, CalendarDays } from "lucide-react";

const stats = [
  { icon: Users, value: 12000, suffix: "+", label: "Students Enrolled" },
  { icon: Trophy, value: 98, suffix: "%", label: "Success Rate" },
  { icon: GraduationCap, value: 80, suffix: "+", label: "Expert Faculty" },
  { icon: CalendarDays, value: 15, suffix: "+", label: "Years of Experience" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container-page">
        <div className="rounded-2xl border border-border/50 bg-card/70 backdrop-blur-md shadow-soft p-6 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 hover:shadow-elegant transition-all duration-500 hover:border-accent/30 relative overflow-hidden">
          <div className="absolute inset-0 mesh-bg opacity-20 -z-10" />
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:text-left">
              <div className="inline-grid h-12 w-12 place-items-center rounded-2xl text-foreground mb-3 shadow-soft" style={{ background: "var(--gradient-gold)" }}>
                <s.icon className="h-6 w-6" />
              </div>
              <p className="font-display text-3xl sm:text-4xl font-bold gradient-text pb-1">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
