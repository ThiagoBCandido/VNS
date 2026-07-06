import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { portfolioItems } from "@/app/lib/content";
import { Reveal } from "@/app/components/ui/Reveal";
import { SectionIndex } from "@/app/components/ui/SectionIndex";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 px-6" style={{ background: "var(--ink)" }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionIndex index="03" label="Portfólio" />
          <h2
            className="font-display text-white uppercase leading-[0.92] mb-16 max-w-2xl"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)" }}
          >
            Trabalhos <span style={{ color: "var(--cobalt-light)" }}>autorais</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-3">
          {portfolioItems.map((item, i) => (
            <Reveal
              key={item.alt}
              delay={i * 0.05}
              className={
                item.span === "wide"
                  ? "col-span-2 row-span-2"
                  : item.span === "tall"
                    ? "col-span-1 row-span-2"
                    : "col-span-1 row-span-1"
              }
            >
              <div className="group relative w-full h-full overflow-hidden" style={{ border: "1px solid var(--line)" }}>
                <ImageWithFallback
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-full duotone group-hover:scale-105 transition-transform duration-700 ${item.fit === "contain" ? "object-contain p-3" : "object-cover"}`}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{ background: "linear-gradient(180deg, transparent 40%, rgba(5,6,8,0.85) 100%)" }}
                >
                  <span className="font-body text-white text-xs tracking-[0.12em] uppercase">
                    {item.label}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

