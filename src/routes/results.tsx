import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Medal, Award, Star } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/sections/CTA";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results — Prayaas Academy Top Rankers" },
      { name: "description", content: "Celebrating our top-ranking students across JEE, NEET and Board exams. See the Prayaas Academy results that speak for themselves." },
      { property: "og:title", content: "Results — Prayaas Academy" },
      { property: "og:description", content: "Top rankers, achievements and the proven impact of Prayaas Academy." },
      { property: "og:url", content: "/results" },
    ],
    links: [{ rel: "canonical", href: "/results" }],
  }),
  component: ResultsPage,
});

const toppers = [
  { name: "Aanya Sharma", rank: "AIR 412", exam: "JEE Advanced 2025", score: "320/360", color: "from-blue-500 to-indigo-600", icon: Trophy },
  { name: "Rahul Verma", rank: "AIR 89", exam: "NEET UG 2025", score: "685/720", color: "from-emerald-500 to-teal-600", icon: Medal },
  { name: "Priya Patel", rank: "AIR 1245", exam: "JEE Main 2025", score: "99.4 %ile", color: "from-purple-500 to-fuchsia-600", icon: Award },
  { name: "Ishaan Mehta", rank: "State Rank 7", exam: "Class 12 Boards", score: "98.6%", color: "from-amber-500 to-orange-600", icon: Star },
  { name: "Sneha Roy", rank: "AIR 654", exam: "NEET UG 2025", score: "672/720", color: "from-rose-500 to-pink-600", icon: Trophy },
  { name: "Karthik Iyer", rank: "AIR 2103", exam: "JEE Advanced 2025", score: "284/360", color: "from-cyan-500 to-sky-600", icon: Medal },
  { name: "Riya Singh", rank: "AIR 532", exam: "NEET UG 2025", score: "675/720", color: "from-violet-500 to-purple-600", icon: Award },
  { name: "Aditya Joshi", rank: "AIR 980", exam: "JEE Main 2025", score: "99.6 %ile", color: "from-green-500 to-emerald-600", icon: Star },
];

function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results 2025"
        title={<>Our students <span className="gradient-text">make us proud</span></>}
        description="Every rank is a story of dedication, mentorship and a system that works. Here are some of our shining stars."
      />

      <section className="py-8">
        <div className="container-page grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Top 100 ranks", value: "42+" },
            { label: "Selections", value: "1,200+" },
            { label: "Above 99 %ile", value: "380+" },
            { label: "Scholarships", value: "₹4 Cr+" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="rounded-2xl border border-border bg-card p-5 text-center shadow-soft">
                <p className="font-display text-2xl sm:text-3xl font-bold gradient-text">{s.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toppers.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 0.06}>
              <div className="group rounded-3xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
                <div className={`relative h-32 bg-gradient-to-br ${t.color} grid place-items-center text-white`}>
                  <div className="absolute inset-0 mesh-bg opacity-30" />
                  <t.icon className="relative h-12 w-12" />
                </div>
                <div className="p-5 text-center">
                  <p className="font-display font-bold text-lg">{t.name}</p>
                  <p className="text-sm gradient-text font-semibold mt-1">{t.rank}</p>
                  <p className="text-xs text-muted-foreground mt-2">{t.exam}</p>
                  <p className="mt-3 inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium">{t.score}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
