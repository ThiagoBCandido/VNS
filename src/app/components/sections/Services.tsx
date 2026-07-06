import { services } from "@/app/lib/content";
import { Reveal } from "@/app/components/ui/Reveal";
import { SectionIndex } from "@/app/components/ui/SectionIndex";

export function Services() {
  return (
    <section id="servicos" className="relative py-32 px-6" style={{ background: "var(--ink-2)" }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionIndex index="02" label="Serviços" />
          <h2
            className="font-display text-white uppercase leading-[0.92] mb-16 max-w-2xl"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)" }}
          >
            O que a gente <span style={{ color: "var(--cobalt-light)" }}>cria</span>
          </h2>
        </Reveal>

        <div>
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <div
                className="group relative grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_auto_auto] items-center gap-4 md:gap-8 py-7 md:py-8 overflow-hidden"
                style={{ borderTop: i === 0 ? "1px solid var(--line)" : "none", borderBottom: "1px solid var(--line)" }}
              >
                <span
                  className="absolute left-0 top-0 bottom-0 w-1 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"
                  style={{ background: "var(--cobalt)" }}
                />
                <span className="font-display text-white/25 text-xl md:text-2xl pl-4">
                  {service.index}
                </span>
                <div className="pl-2">
                  <h3 className="font-display text-white text-lg md:text-2xl uppercase mb-1.5">
                    {service.title}
                  </h3>
                  <p className="font-body text-white/45 text-sm leading-relaxed max-w-xl">
                    {service.desc}
                  </p>
                </div>
                <span
                  className="hidden md:inline-block font-body text-[10px] tracking-[0.24em] uppercase px-3 py-1.5"
                  style={{ color: "var(--cobalt-light)", border: "1px solid var(--cobalt-deep)" }}
                >
                  {service.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
