import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/sections/Hero";
import { Stats } from "@/sections/Stats";
import { Courses } from "@/sections/Courses";
import { WhyChoose } from "@/sections/WhyChoose";
import { Testimonials } from "@/sections/Testimonials";
import { Faculty } from "@/sections/Faculty";
import { GalleryPreview } from "@/sections/GalleryPreview";
import { FAQ } from "@/sections/FAQ";
import { CTA } from "@/sections/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prayaas Classes — Premium Coaching for JEE, NEET & Boards" },
      { name: "description", content: "Premium coaching institute for JEE, NEET, Foundation and Board exams with expert faculty, smart learning and proven results." },
      { property: "og:title", content: "Prayaas Classes — Premium Coaching Institute" },
      { property: "og:description", content: "Transform your future with India's most trusted coaching for JEE, NEET and Boards." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Stats />
      <Courses limit={3} />
      <WhyChoose />
      <Testimonials />
      <Faculty />
      <GalleryPreview />
      <FAQ />
      <CTA />
    </>
  );
}
