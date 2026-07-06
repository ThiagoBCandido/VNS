import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import characterImg from "@/imports/vns.png";
import { LogoMark } from "@/app/components/ui/LogoMark";

export function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: "var(--ink)" }}
    >
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "var(--cobalt)", opacity: 0.16, filter: "blur(120px)" }}
      />
      <div className="absolute pointer-events-none" style={{ top: 0, bottom: 0, right: 0, left: "42%" }}>
        <motion.div
          initial={{ opacity: 0, x: 50, filter: "blur(16px)" }}
          animate={ready ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="relative w-full h-full"
        >
          <img
            src={characterImg}
            alt="VênusArt mascot character"
            className="hero-mascot select-none"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-2 mb-8"
          >
            <LogoMark size={30} />
            <span className="font-body text-[11px] tracking-[0.32em] uppercase text-white/45">
              Estúdio de arte autoral
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="font-display text-white leading-[0.9] uppercase mb-7"
            style={{ fontSize: "clamp(2.8rem, 7.5vw, 6rem)" }}
          >
            Arte
            <br />
            <span style={{ color: "var(--cobalt-light)" }}>personalizada,</span>
            <br />
            feita à mão
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="font-body text-white/55 text-base md:text-lg max-w-md mb-10 leading-relaxed"
          >
            VênusArt cria pinturas manuais, personalizações artesanais e peças
            únicas feitas à mão — com identidade, estilo e muito afeto em cada
            detalhe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contato"
              className="px-8 py-4 text-white font-body font-bold text-xs tracking-[0.2em] uppercase transition-transform duration-300 hover:scale-105"
              style={{ background: "var(--cobalt)" }}
            >
              Solicitar orçamento
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 bg-transparent text-white font-body font-bold text-xs tracking-[0.2em] uppercase hover:border-white/40 transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.2)" }}
            >
              Ver trabalhos
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#sobre"
        aria-label="Rolar para baixo"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white transition-colors"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
}

