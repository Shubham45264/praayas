import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

export function CTA() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center text-white shadow-elegant gradient-hero-bg">
            <div className="absolute inset-0 mesh-bg opacity-30" />
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-sm font-medium">
                <Sparkles className="h-4 w-4" /> Limited seats — 2026 batch
              </span>
              <h2 className="mt-5 font-display text-3xl sm:text-5xl font-bold leading-tight max-w-2xl mx-auto">
                Start your success journey today
              </h2>
              <p className="mt-4 text-white/85 max-w-xl mx-auto">
                Book a free counselling session with our mentors and find the program that fits your goals.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90">
                  <Link to="/contact">Enroll Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20">
                  <Link to="/courses">Browse Courses</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
