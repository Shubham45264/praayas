import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { galleryImages } from "./galleryData";

export function GalleryPreview() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-transparent">
      <div className="container-page">
        <SectionHeader
          eyebrow="Campus Life"
          title={<>A glimpse into <span className="gradient-text">our world</span></>}
          description="Classrooms, labs, events and achievements that make Prayaas more than just a coaching institute."
        />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.slice(0, 6).map((img, i) => (
            <Reveal key={i} delay={i * 0.04} className={i === 0 ? "lg:row-span-2 lg:col-span-1" : ""}>
              <div className="group relative overflow-hidden rounded-2xl border border-border h-full">
                <img src={img.src} alt={img.alt} loading="lazy" width={1024} height={768} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${i === 0 ? "min-h-[24rem]" : "min-h-[12rem]"}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition">{img.category}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link to="/gallery">View full gallery <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
