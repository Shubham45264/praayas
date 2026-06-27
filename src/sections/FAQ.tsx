import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const faqs = [
  { q: "What courses does Prayaas Classes offer?", a: "We offer JEE (Main + Advanced), NEET UG, Foundation (Class 8–10), Class 11 & 12 Boards, crash courses and Olympiad preparation programs." },
  { q: "How are batches structured?", a: "Each batch has a maximum of 30 students to ensure personalised attention, doubt-clearing and faculty mentorship." },
  { q: "Do you provide study material?", a: "Yes — every student receives our printed concept books, formula booklets, daily practice problems and topic-wise test papers." },
  { q: "Are mock tests included?", a: "Absolutely. We conduct weekly, monthly and full-syllabus exam-pattern mock tests with detailed analytics for every student." },
  { q: "Can parents track their child's progress?", a: "Yes. We share monthly performance reports and host parent-teacher meetings every quarter." },
  { q: "Is there a scholarship test?", a: "Yes, we conduct a merit scholarship test every quarter. Top scorers receive up to 100% fee waivers." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page max-w-3xl">
        <SectionHeader eyebrow="FAQs" title={<>Questions, <span className="gradient-text">answered</span></>} />
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="grid h-8 w-8 place-items-center rounded-full text-white shrink-0" style={{ background: "var(--gradient-brand)" }}>
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
