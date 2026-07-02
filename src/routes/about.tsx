import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Trophy, Award } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { Faculty } from "@/sections/Faculty";
import { CTA } from "@/sections/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Prayaas Academy — Our Mission & Vision" },
      { name: "description", content: "Learn how Prayaas Academy empowers students through expert mentorship, modern pedagogy and a results-driven culture." },
      { property: "og:title", content: "About Prayaas Academy" },
      { property: "og:description", content: "Our story, mission and the people behind India's most trusted coaching institute." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2010", title: "Founded with a vision", desc: "Started as a small classroom with 12 students and a single faculty." },
  { year: "2014", title: "First IIT-JEE topper", desc: "Our student secured AIR 67 in JEE Advanced." },
  { year: "2018", title: "Multi-city expansion", desc: "Opened branches across three states with 2,000+ students." },
  { year: "2022", title: "Hybrid learning launch", desc: "Live + recorded sessions with personalised dashboards." },
  { year: "2025", title: "12,000+ alumni", desc: "Trusted by students and parents across India for 15 years." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Building bright futures, <span className="gradient-text">one student at a time</span></>}
        description="Prayaas Academy is a premium coaching institute built on three principles — concept mastery, personal mentorship and consistent practice."
      />

      <section className="py-12 lg:py-16">
        <div className="container-page grid lg:grid-cols-2 gap-6">
          {[
            { icon: Target, title: "Our Mission", desc: "To empower every ambitious student with the right mentorship, resources and confidence to achieve their academic dreams." },
            { icon: Eye, title: "Our Vision", desc: "To become India's most trusted coaching institute by setting new benchmarks in teaching quality and student care." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft h-full">
                <div className="inline-grid h-14 w-14 place-items-center rounded-2xl text-white" style={{ background: "var(--gradient-brand)" }}>
                  <c.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold">{c.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-page">
          <SectionHeader eyebrow="Our Journey" title={<>15 years of <span className="gradient-text">consistent excellence</span></>} />
          <div className="mt-14 relative max-w-3xl mx-auto">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.06}>
                  <div className={`relative grid sm:grid-cols-2 gap-6 items-center ${i % 2 === 0 ? "" : "sm:[&>div:first-child]:order-2"}`}>
                    <div className="pl-12 sm:pl-0 sm:pr-12 sm:text-right">
                      <p className="font-display text-3xl font-bold gradient-text">{t.year}</p>
                      <h3 className="mt-1 font-semibold text-lg">{t.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
                    </div>
                    <div className="hidden sm:block" />
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 grid h-4 w-4 place-items-center rounded-full ring-4 ring-background" style={{ background: "var(--gradient-brand)" }} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container-page">
          <SectionHeader eyebrow="Achievements" title={<>Recognised for <span className="gradient-text">excellence</span></>} />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Trophy, value: "500+", label: "Top 1000 ranks" },
              { icon: Award, value: "25+", label: "National awards" },
              { icon: Target, value: "98%", label: "Selection ratio" },
              { icon: Eye, value: "12K+", label: "Happy alumni" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft">
                  <div className="inline-grid h-12 w-12 place-items-center rounded-2xl text-white mb-3" style={{ background: "var(--gradient-brand)" }}>
                    <s.icon className="h-5 w-5" />
                  </div>
                  <p className="font-display text-3xl font-bold">{s.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Faculty />
      <CTA />
    </>
  );
}
