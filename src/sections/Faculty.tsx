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
    <section className="py-16 lg:py-24 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
      <div className="container-page">
        <SectionHeader
          eyebrow="Meet the Mentors"
          title={<>Learn from <span className="gradient-text">India's finest educators</span></>}
          description="Our faculty are not just teachers — they are mentors who have themselves cleared the toughest exams."
        />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.07}>
              <div className="group rounded-3xl border border-border bg-card p-5 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
                <div className={`aspect-square w-full rounded-2xl bg-gradient-to-br ${f.color} grid place-items-center text-white text-4xl font-display font-bold mesh-bg`}>
                  {f.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="font-display text-lg font-bold leading-tight">{f.name}</h3>
                  <p className="text-sm text-muted-foreground">{f.role}</p>
                  <p className="text-xs font-medium text-primary mt-1">{f.exp} experience</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
