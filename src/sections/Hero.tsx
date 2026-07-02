import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden gradient-hero-bg">
      {/* background */}
      <div className="absolute inset-0 -z-10 mesh-bg opacity-40" />
      <div className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full blur-3xl" style={{ background: "color-mix(in oklab, var(--primary) 30%, transparent)" }} />
      <div className="absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full blur-3xl" style={{ background: "color-mix(in oklab, var(--secondary) 30%, transparent)" }} />

      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            <Sparkles className="h-4 w-4" /> Admissions open for 2026 batch
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Transform Your Future with{" "}
            <span className="gradient-text">Prayaas Academy</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Premium coaching for JEE, NEET, Foundation and Board exams — taught by India's most experienced mentors. Smart learning, personal attention, proven results.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full text-white shadow-elegant hover:scale-105 transition-transform" style={{ background: "var(--gradient-brand)" }}>
              <Link to="/contact">
                Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-border bg-card/50 hover:bg-card/80 text-foreground transition-all">
              <Link to="/courses">
                <PlayCircle className="mr-2 h-4 w-4" /> Explore Courses
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {[
                "from-blue-400 to-purple-500",
                "from-purple-400 to-pink-500",
                "from-cyan-400 to-blue-500",
                "from-pink-400 to-rose-500",
              ].map((g, i) => (
                <div key={i} className={`h-10 w-10 rounded-full ring-2 ring-background bg-gradient-to-br ${g}`} />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-2 text-sm font-semibold text-foreground">4.9/5</span>
              </div>
              <p className="text-xs text-muted-foreground">Rated by 2,000+ students & parents</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-elegant border border-border/50">
            <img src={heroImg} alt="Students learning at Prayaas Academy" width={1536} height={1152} className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/10" />
          </div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -left-4 sm:-left-8 top-10 glass-dark rounded-2xl px-4 py-3 shadow-soft hidden sm:block border-accent/20"
          >
            <p className="text-xs text-muted-foreground">Success Rate</p>
            <p className="font-display text-2xl font-bold gradient-text">98.7%</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-4 sm:-right-6 bottom-10 glass-dark rounded-2xl px-4 py-3 shadow-soft hidden sm:block border-accent/20"
          >
            <p className="text-xs text-muted-foreground">Top Rankers</p>
            <p className="font-display text-2xl font-bold gradient-text">500+</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
