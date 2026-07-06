import { useState } from "react";
import { Instagram, Send } from "lucide-react";
import { brand, contactOptions } from "@/app/lib/content";
import { Reveal } from "@/app/components/ui/Reveal";
import { SectionIndex } from "@/app/components/ui/SectionIndex";

const inputStyle: React.CSSProperties = {
  background: "var(--ink-3)",
  border: "1px solid var(--line)",
  color: "var(--paper)",
};

const contactEmail = "venusart43@gmail.com";

type FormState = { nome: string; contato: string; tipo: string; descricao: string };

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormState>({ nome: "", contato: "", tipo: "", descricao: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const selectedType = contactOptions.find((opt) => opt.value === form.tipo)?.label ?? form.tipo;
    const subject = `Pedido de orçamento - ${form.nome}`;
    const body = [
      "Novo pedido enviado pela página VênusArt:",
      "",
      `Nome: ${form.nome}`,
      `Contato: ${form.contato}`,
      `Tipo de arte desejada: ${selectedType}`,
      "",
      "Descrição do pedido:",
      form.descricao,
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contato" className="relative py-32 px-6" style={{ background: "var(--ink)" }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <Reveal>
          <SectionIndex index="05" label="Contato" />
          <h2
            className="font-display text-white uppercase leading-[0.92] mb-7"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)" }}
          >
            Bora criar <span style={{ color: "var(--cobalt-light)" }}>juntos?</span>
          </h2>
          <p className="font-body text-white/50 text-[15px] leading-relaxed mb-10">
            Conta sua ideia, manda referências, descreve o que você tem em
            mente — e a VênusArt transforma em arte feita à mão. Não existe
            pedido pequeno demais nem ideia louca demais.
          </p>
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-4 font-body text-xs font-bold tracking-[0.18em] uppercase text-white/75 hover:text-white transition-colors"
            style={{ border: "1px solid var(--line-strong)" }}
          >
            <Instagram size={16} />
            Falar pelo Instagram
          </a>
          <div className="mt-14 pl-5" style={{ borderLeft: "2px solid var(--cobalt)" }}>
            <p className="font-body text-white/35 text-sm italic leading-relaxed">
              "Toda grande arte começou com alguém que simplesmente perguntou:{" "}
              <em>e se...?</em>"
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {sent ? (
            <div className="p-12 text-center" style={{ background: "var(--ink-3)", border: "1px solid var(--cobalt-deep)" }}>
              <div className="text-5xl mb-5">✓</div>
              <h3 className="font-display text-2xl text-white uppercase mb-3">Pedido preparado!</h3>
              <p className="font-body text-white/45 text-sm">
                Seu aplicativo de e-mail foi aberto com a mensagem endereçada para {contactEmail}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {(
                [
                  { key: "nome", label: "Nome", placeholder: "Seu nome" },
                  { key: "contato", label: "E-mail ou WhatsApp", placeholder: "E-mail ou número com DDD" },
                ] as const
              ).map(({ key, label, placeholder }) => (
                <div key={key}>
                  <label className="block font-body text-[10px] tracking-[0.28em] uppercase text-white/40 mb-2">
                    {label}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={placeholder}
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full text-sm px-4 py-3.5 placeholder:text-white/20 outline-none transition-all duration-200"
                    style={inputStyle}
                  />
                </div>
              ))}

              <div>
                <label className="block font-body text-[10px] tracking-[0.28em] uppercase text-white/40 mb-2">
                  Tipo de arte desejada
                </label>
                <select
                  required
                  value={form.tipo}
                  onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                  className="w-full text-sm px-4 py-3.5 outline-none appearance-none transition-all duration-200"
                  style={{ ...inputStyle, color: form.tipo ? "var(--paper)" : "rgba(245,246,248,0.25)" }}
                >
                  <option value="" disabled>Selecione o tipo...</option>
                  {contactOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-body text-[10px] tracking-[0.28em] uppercase text-white/40 mb-2">
                  Descrição do pedido
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Descreva sua ideia, estilo desejado, referências..."
                  value={form.descricao}
                  onChange={(e) => setForm({ ...form, descricao: e.target.value })}
                  className="w-full text-sm px-4 py-3.5 placeholder:text-white/20 outline-none resize-none transition-all duration-200"
                  style={inputStyle}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-white font-body font-bold text-xs tracking-[0.22em] uppercase flex items-center justify-center gap-3 transition-opacity duration-300 hover:opacity-85"
                style={{ background: "var(--cobalt)" }}
              >
                <Send size={15} />
                Enviar pedido de orçamento
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}