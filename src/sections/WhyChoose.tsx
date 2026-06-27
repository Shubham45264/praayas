import { Brain, Users2, Sparkles, ClipboardCheck, LineChart, Compass } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";

const features = [
  { icon: Users2, title: "Expert Faculty", desc: "Mentors from IITs, AIIMS and top universities with 10+ years of teaching experience." },
  { icon: Sparkles, title: "Personalized Attention", desc: "Small batch sizes ensure every student gets dedicated mentorship and doubt-clearing." },
  { icon: Brain, title: "Smart Learning", desc: "Concept-first teaching backed by visual aids, summaries and curated practice material." },
  { icon: ClipboardCheck, title: "Regular Tests", desc: "Chapter-wise, weekly and full-syllabus tests modelled on the real exam pattern." },
  { icon: LineChart, title: "Performance Tracking", desc: "Detailed analytics, parent reports and goal-setting sessions every month." },
  { icon: Compass, title: "Career Guidance", desc: "1:1 counselling for stream selection, college choice and exam strategy." },
];

export function WhyChoose() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-transparent">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why Prayaas"
          title={<>Built for ambitious students, <span className="gradient-text">trusted by parents</span></>}
          description="Every part of our process — from teaching to testing — is engineered to help your child outperform."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="group h-full rounded-3xl border border-border bg-card p-7 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
                <div className="inline-grid h-14 w-14 place-items-center rounded-2xl text-white mb-5 transition-transform group-hover:scale-110" style={{ background: "var(--gradient-brand)" }}>
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
