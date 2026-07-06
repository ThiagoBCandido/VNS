import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollPast } from "@/app/lib/hooks";
import { navLinks } from "@/app/lib/content";
import { LogoMark, Wordmark } from "@/app/components/ui/LogoMark";

export function Nav() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollPast(60);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        background: scrolled ? "rgba(5,6,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--cobalt)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#hero" className="flex items-center gap-3">
          <LogoMark size={36} />
          <Wordmark />
        </a>

        <div className="hidden md:flex items-center gap-9">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-body text-xs tracking-[0.18em] uppercase text-white/60 hover:text-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contato"
            className="px-6 py-3 font-body font-semibold text-xs tracking-[0.18em] uppercase text-white transition-transform duration-200 hover:scale-105"
            style={{ background: "var(--cobalt)" }}
          >
            Orçamento
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden px-6 pb-8 pt-2 flex flex-col gap-1"
          style={{ background: "rgba(5,6,8,0.98)", borderTop: "1px solid var(--line)" }}
        >
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-body text-sm uppercase tracking-wide text-white/70 hover:text-white py-3 border-b border-white/5"
            >
              {label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-5 px-5 py-3.5 text-white font-body font-semibold text-sm text-center"
            style={{ background: "var(--cobalt)" }}
          >
            Solicitar orçamento
          </a>
        </div>
      )}
    </nav>
  );
}
