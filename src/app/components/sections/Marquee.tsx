import { marqueeItems } from "@/app/lib/content";

export function Marquee() {
  // Duplicate the list once so the 50%-translate loop is seamless.
  const track = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className="relative overflow-hidden py-5 -rotate-1"
      style={{ background: "var(--cobalt)", boxShadow: "0 0 0 1px var(--cobalt-deep)" }}
    >
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {track.map((item, i) => (
          <span
            key={i}
            className="font-display text-white text-xl md:text-2xl uppercase mx-6 flex items-center gap-6"
          >
            {item}
            <span className="text-white/40">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
