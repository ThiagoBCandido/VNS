import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/app/lib/content";
import { Reveal } from "@/app/components/ui/Reveal";
import { SectionIndex } from "@/app/components/ui/SectionIndex";

const INITIALS = ["A", "B", "C", "D", "E"];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  const scroll = useCallback((dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  return (
    <section id="feedbacks" className="relative py-32" style={{ background: "var(--ink-2)" }}>
      <div className="max-w-6xl mx-auto px-6 flex items-end justify-between mb-14 flex-wrap gap-6">
        <Reveal>
          <SectionIndex index="04" label="Feedbacks" />
          <h2
            className="font-display text-white uppercase leading-[0.92] max-w-xl"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)" }}
          >
            Quem já <span style={{ color: "var(--cobalt-light)" }}>fez arte</span> com a gente
          </h2>
        </Reveal>

        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canLeft}
            aria-label="Anterior"
            className="w-11 h-11 flex items-center justify-center disabled:opacity-25 transition-opacity"
            style={{ border: "1px solid var(--line)" }}
          >
            <ChevronRight size={16} className="rotate-180 text-white" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canRight}
            aria-label="Próximo"
            className="w-11 h-11 flex items-center justify-center disabled:opacity-25 transition-opacity"
            style={{ border: "1px solid var(--line)" }}
          >
            <ChevronRight size={16} className="text-white" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="feedback-track flex gap-5 overflow-x-auto px-6 pb-4 max-w-6xl mx-auto"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {testimonials.map((t, i) => (
          <div
            key={t.quote}
            className="shrink-0 w-[300px] md:w-[340px] p-7 flex flex-col"
            style={{ background: "var(--ink-3)", border: "1px solid var(--line)", scrollSnapAlign: "start" }}
          >
            <Quote size={26} style={{ color: "var(--cobalt-light)" }} className="mb-5" />
            <p className="font-body text-white/75 text-[15px] leading-relaxed mb-8 grow">
              {t.quote}
            </p>
            <div className="flex items-center gap-3 pt-5" style={{ borderTop: "1px solid var(--line)" }}>
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center font-display text-xs text-white shrink-0"
                style={{ background: "var(--cobalt)" }}
              >
                {INITIALS[i % INITIALS.length]}
              </div>
              <div>
                <div className="font-body text-white text-sm font-semibold leading-tight">{t.name}</div>
                <div className="font-body text-white/40 text-xs">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
