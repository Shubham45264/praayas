import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Courses, courses } from "@/sections/Courses";
import { CTA } from "@/sections/CTA";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Prayaas Academy" },
      { name: "description", content: "Explore Prayaas Academy's JEE, NEET, Foundation, Boards and Olympiad programs with detailed curriculum, duration and fees." },
      { property: "og:title", content: "Courses — Prayaas Academy" },
      { property: "og:description", content: "Programs designed for real results — concept clarity, mentorship and practice." },
      { property: "og:url", content: "/courses" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: CoursesPage,
});

const tags = ["All", ...Array.from(new Set(courses.map((c) => c.tag)))];

function CoursesPage() {
  const [active, setActive] = useState<string>("All");
  const filtered = useMemo(() => (active === "All" ? courses : courses.filter((c) => c.tag === active)), [active]);

  return (
    <>
      <PageHero
        eyebrow="Programs"
        title={<>Find the course that <span className="gradient-text">fits your goals</span></>}
        description="From foundation building to competitive exam mastery — pick the program that matches your ambition."
      />

      <section className="pb-4">
        <div className="container-page flex flex-wrap justify-center gap-2">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-all",
                active === t
                  ? "text-white border-transparent shadow-soft"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
              style={active === t ? { background: "var(--gradient-brand)" } : undefined}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      <CoursesList list={filtered} />
      <CTA />
    </>
  );
}

function CoursesList({ list }: { list: typeof courses }) {
  // reuse the Courses section style by re-mounting with a key per filter
  return (
    <div key={list.map((l) => l.slug).join("-")}>
      <CoursesGrid list={list} />
    </div>
  );
}

function CoursesGrid({ list }: { list: typeof courses }) {
  // Slim variant to avoid duplicating section header
  return (
    <section className="py-10 lg:py-16">
      <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((c) => (
          <article key={c.slug} className="group h-full rounded-3xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
            <div className={`relative h-40 bg-gradient-to-br ${c.color}`}>
              <div className="absolute inset-0 mesh-bg opacity-30" />
              <span className="absolute top-4 left-4 rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-medium text-white">{c.tag}</span>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="font-display text-xl font-bold">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              <ul className="text-sm text-muted-foreground space-y-1 pt-2">
                <li>• Live + recorded classes</li>
                <li>• Weekly mock tests</li>
                <li>• Personalised mentorship</li>
              </ul>
              <div className="flex items-center justify-between pt-3 border-t border-border text-sm">
                <span className="text-muted-foreground">{c.duration}</span>
                <span className="font-semibold">{c.fees}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// keep tree-shake happy
export { Courses };
