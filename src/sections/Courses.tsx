import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";

export const courses = [
  {
    slug: "jee",
    title: "JEE Main + Advanced",
    duration: "2 Years",
    fees: "₹1,20,000",
    tag: "Engineering",
    color: "from-blue-500 to-indigo-600",
    desc: "Comprehensive preparation for IIT-JEE with concept clarity, problem solving and mock test series.",
  },
  {
    slug: "neet",
    title: "NEET UG",
    duration: "2 Years",
    fees: "₹1,15,000",
    tag: "Medical",
    color: "from-emerald-500 to-teal-600",
    desc: "Crack NEET with structured Biology, Physics and Chemistry coverage and regular evaluations.",
  },
  {
    slug: "foundation",
    title: "Foundation (Class 8–10)",
    duration: "1 Year",
    fees: "₹45,000",
    tag: "Foundation",
    color: "from-purple-500 to-fuchsia-600",
    desc: "Build a rock-solid foundation early. Olympiad, NTSE and Board preparation under one roof.",
  },
  {
    slug: "boards",
    title: "Class 11 & 12 Boards",
    duration: "1 Year",
    fees: "₹60,000",
    tag: "Boards",
    color: "from-amber-500 to-orange-600",
    desc: "CBSE / State board mastery with chapter-wise tests, doubt sessions and revision sprints.",
  },
  {
    slug: "crash",
    title: "Crash Course",
    duration: "3 Months",
    fees: "₹25,000",
    tag: "Short-term",
    color: "from-rose-500 to-pink-600",
    desc: "Last-mile preparation with high-yield content, daily tests and personalised feedback.",
  },
  {
    slug: "olympiad",
    title: "Olympiad Prep",
    duration: "6 Months",
    fees: "₹30,000",
    tag: "Competitive",
    color: "from-cyan-500 to-sky-600",
    desc: "Sharpen logic and analytical skills for national and international Olympiad competitions.",
  },
];

export function Courses({ limit }: { limit?: number }) {
  const list = limit ? courses.slice(0, limit) : courses;
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our Programs"
          title={<>Courses designed for <span className="gradient-text">real results</span></>}
          description="From foundation to competitive entrance — every program is built around outcomes, mentorship and structured practice."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <article className="group h-full rounded-3xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
                <div className={`relative h-40 bg-gradient-to-br ${c.color} overflow-hidden`}>
                  <div className="absolute inset-0 mesh-bg opacity-30" />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-medium text-white">{c.tag}</span>
                  </div>
                  <BookOpen className="absolute -bottom-4 -right-4 h-32 w-32 text-white/15" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-display text-xl font-bold">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  <div className="flex items-center justify-between pt-2 text-sm">
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4" /> {c.duration}
                    </span>
                    <span className="font-semibold text-foreground">{c.fees}</span>
                  </div>
                  <Button asChild variant="ghost" className="w-full justify-between mt-2 group-hover:text-primary">
                    <Link to="/contact">
                      Enquire Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {limit && (
          <div className="mt-10 text-center">
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link to="/courses">View all courses <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
