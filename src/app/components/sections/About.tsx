import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logoSquareImg from "@/imports/IMG_2574.jpg";
import bandanaImg from "@/imports/badge.jpg";
import { stats } from "@/app/lib/content";
import { Reveal } from "@/app/components/ui/Reveal";
import { SectionIndex } from "@/app/components/ui/SectionIndex";
import { BandanaCircle } from "@/app/components/ui/BandanaCircle";

export function About() {
  return (
    <section id="sobre" className="relative py-32 px-6" style={{ background: "var(--ink)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SectionIndex index="01" label="Sobre" />
            <h2
              className="font-display text-white uppercase leading-[0.92] mb-7"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)" }}
            >
              Arte que fala
              <br />
              <span style={{ color: "var(--cobalt-light)" }}>por si só</span>
            </h2>
            <p className="font-body text-white/55 text-[15px] leading-relaxed mb-5">
              VênusArt não é mais uma marca de artesanato. É uma expressão
              criativa com personalidade própria — manual, original e
              inconfundível. Cada peça nasce de uma conversa, um sentimento,
              uma ideia que merece ganhar forma nas mãos.
            </p>
            <p className="font-body text-white/55 text-[15px] leading-relaxed mb-10">
              Das tintas ao tecido, das flores artesanais às peças decorativas,
              cada encomenda é feita com cuidado, atenção e identidade própria.
              Não existe cópia. Existe arte feita para você.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6" style={{ borderTop: "1px solid var(--line)" }}>
              {stats.map(({ num, label }) => (
                <div key={label}>
                  <div
                    className="font-display text-3xl mb-1"
                    style={{ color: "var(--cobalt-light)" }}
                  >
                    {num}
                  </div>
                  <div className="font-body text-white/35 text-[10px] tracking-[0.2em] uppercase">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative flex flex-col items-center md:items-start">
              <BandanaCircle size={340} ringBackgroundSrc={bandanaImg}>
                <ImageWithFallback
                  src={logoSquareImg}
                  alt="VênusArt — identidade visual"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </BandanaCircle>

              <div
                className="mt-6 p-6 relative w-full max-w-[340px]"
                style={{ background: "var(--ink-3)", border: "1px solid var(--line)" }}
              >
                <div className="font-display text-5xl leading-none mb-3" style={{ color: "var(--cobalt-light)" }}>
                  "
                </div>
                <p className="font-body text-white/80 text-base italic leading-relaxed">
                  Arte não é decoração. É identidade. É a maneira mais honesta
                  de dizer quem você é.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}