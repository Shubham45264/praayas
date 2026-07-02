import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const testimonials = [
  { name: "Aanya Sharma", role: "AIR 412, JEE Advanced 2025", text: "Prayaas didn't just teach me physics — they taught me how to think under pressure. The mock test strategy was a game-changer.", initials: "AS", color: "from-blue-500 to-purple-500" },
  { name: "Rahul Verma", role: "NEET 2025 — 685/720", text: "The biology faculty here is unmatched. Personalised doubt sessions every week made the difference for my final score.", initials: "RV", color: "from-emerald-500 to-teal-500" },
  { name: "Mrs. Kapoor", role: "Parent of Aarav, Class 12", text: "We finally found a coaching that actually communicates. The monthly reports and parent meetings keep us informed every step.", initials: "MK", color: "from-rose-500 to-pink-500" },
  { name: "Ishaan Mehta", role: "Foundation Batch 2024", text: "Started in Class 9 and never looked back. The Olympiad training gave me a serious head-start for boards and beyond.", initials: "IM", color: "from-amber-500 to-orange-500" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);
  const t = testimonials[i];

  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Stories from our <span className="gradient-text">students & parents</span></>}
        />
        <div className="mt-12 mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-border/50 bg-card/70 backdrop-blur-md p-8 sm:p-12 shadow-elegant overflow-hidden hover:border-accent/30 transition-all duration-500">
            <div className="absolute inset-0 mesh-bg opacity-30" />
            <Quote className="relative h-10 w-10 text-primary/30" />
            <AnimatePresence mode="wait">
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5 }}
                className="relative mt-4 space-y-6"
              >
                <p className="text-lg sm:text-xl leading-relaxed font-medium">"{t.text}"</p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary border border-primary/20 grid place-items-center text-primary-foreground font-bold shadow-soft">{t.initials}</div>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={() => setI((v) => (v - 1 + testimonials.length) % testimonials.length)} className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-primary/10 transition" aria-label="Previous">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, k) => (
                <button key={k} onClick={() => setI(k)} className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-border"}`} aria-label={`Slide ${k + 1}`} />
              ))}
            </div>
            <button onClick={() => setI((v) => (v + 1) % testimonials.length)} className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-primary/10 transition" aria-label="Next">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
