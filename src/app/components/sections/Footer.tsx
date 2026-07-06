import { Instagram } from "lucide-react";
import { brand, navLinks } from "@/app/lib/content";
import { LogoMark, Wordmark } from "@/app/components/ui/LogoMark";

export function Footer() {
  return (
    <footer className="relative py-14 px-6" style={{ background: "#030405", borderTop: "1px solid var(--cobalt-deep)" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <LogoMark size={40} />
          <Wordmark />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-body text-xs tracking-[0.14em] uppercase text-white/45 hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href={brand.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
          style={{ border: "1px solid var(--line)" }}
          aria-label="Instagram"
        >
          <Instagram size={16} />
        </a>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid var(--line)" }}>
        <p className="font-body text-white/25 text-xs">
          © {new Date().getFullYear()} {brand.name}{brand.suffix}. Todos os direitos reservados.
        </p>
        <p className="font-body text-white/25 text-xs">Arte com personalidade.</p>
      </div>
    </footer>
  );
}
