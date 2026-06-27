import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { galleryImages } from "@/sections/galleryData";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Prayaas Classes Campus & Events" },
      { name: "description", content: "Browse moments from Prayaas Classes — classrooms, events, achievements and student life." },
      { property: "og:title", content: "Gallery — Prayaas Classes" },
      { property: "og:description", content: "A visual tour of campus life at Prayaas Classes." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const categories = ["All", "Classroom", "Events", "Achievements"];

function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const images = useMemo(
    () => (filter === "All" ? galleryImages : galleryImages.filter((g) => g.category === filter)),
    [filter],
  );

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Moments from <span className="gradient-text">Prayaas</span></>}
        description="From everyday learning to milestone celebrations — every photo tells a story."
      />

      <section className="pb-8">
        <div className="container-page flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition",
                filter === c ? "text-white border-transparent shadow-soft" : "border-border bg-card text-muted-foreground hover:text-foreground",
              )}
              style={filter === c ? { background: "var(--gradient-brand)" } : undefined}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page grid grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <Reveal key={img.src} delay={(i % 6) * 0.04}>
              <button onClick={() => setLightbox(i)} className="group relative w-full overflow-hidden rounded-2xl border border-border block">
                <img src={img.src} alt={img.alt} loading="lazy" width={1024} height={768} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition">{img.category}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm grid place-items-center p-4"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              key={images[lightbox].src}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-[92vw] max-h-[85vh] rounded-2xl shadow-elegant"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
