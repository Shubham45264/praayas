import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";

export const faculty = [
  { name: "Dr. Anil Kapoor", role: "Physics — IIT Delhi", exp: "18 yrs", color: "from-blue-500 to-indigo-600" },
  { name: "Dr. Meera Iyer", role: "Biology — AIIMS", exp: "15 yrs", color: "from-emerald-500 to-teal-600" },
  { name: "Prof. Ravi Sharma", role: "Mathematics — IIT Bombay", exp: "20 yrs", color: "from-purple-500 to-fuchsia-600" },
  { name: "Dr. Sneha Rao", role: "Chemistry — IISc Bangalore", exp: "14 yrs", color: "from-amber-500 to-orange-600" },
];

export function Faculty() {
  return (
    <section className="py-16 lg:py-24 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="container-page">
        <SectionHeader
          eyebrow="Meet the Mentors"
          title={<>Learn from <span className="gradient-text">India's finest educators</span></>}
          description="Our faculty are not just teachers — they are mentors who have themselves cleared the toughest exams."
        />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.07}>
              <div className="group rounded-2xl border border-border/50 bg-card/70 backdrop-blur-md p-5 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:border-accent/40">
                <div className={`aspect-square w-full rounded-xl bg-gradient-to-br from-primary/20 to-secondary/30 border border-primary/20 grid place-items-center text-primary text-4xl font-display font-bold mesh-bg`}>
                  {f.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="font-display text-lg font-bold leading-tight">{f.name}</h3>
                  <p className="text-sm text-muted-foreground">{f.role}</p>
                  <p className="text-xs font-semibold text-accent mt-1">{f.exp} experience</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
