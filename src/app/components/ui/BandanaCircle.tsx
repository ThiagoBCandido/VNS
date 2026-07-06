import { useMemo, type ReactNode } from "react";


export function BandanaCircle({
  children,
  size = 360,
  ringBackgroundSrc,
}: {
  children: ReactNode;
  size?: number;
  ringBackgroundSrc?: string;
}) {
  const { cx, cy, outerR, innerR, stitchOuterR, stitchInnerR } = useMemo(() => {
    const cx = size / 2;
    const cy = size / 2;
    const outerR = size / 2 - 3;
    const innerR = size / 2 - 26;
    const stitchOuterR = outerR - 9;
    const stitchInnerR = innerR + 9;

    return { cx, cy, outerR, innerR, stitchOuterR, stitchInnerR };
  }, [size]);

  const ringMask = `radial-gradient(circle at center, transparent ${innerR - 1}px, #000 ${innerR}px, #000 ${outerR}px, transparent ${outerR + 1}px)`;

  return (
    <div
      className="relative"
      style={{
        width: size,
        height: size,
        filter: "drop-shadow(0 18px 34px rgba(0,0,0,0.35))",
      }}
    >
      {ringBackgroundSrc ? (
        <img
          src={ringBackgroundSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full rounded-full object-cover"
          style={{
            zIndex: 1,
            opacity: 0.95,
            filter: "contrast(1.12) saturate(0.9)",
            WebkitMaskImage: ringMask,
            maskImage: ringMask,
          }}
        />
      ) : null}

      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full"
        style={{
          zIndex: 2,
          background:
            "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.18), transparent 32%), radial-gradient(circle at 65% 75%, rgba(0,0,0,0.3), transparent 38%)",
          mixBlendMode: "soft-light",
          WebkitMaskImage: ringMask,
          maskImage: ringMask,
        }}
      />

      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0"
        style={{ zIndex: 4 }}
      >
        <defs>
          <filter id="embroidered-thread" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="0.6" floodColor="#000000" floodOpacity="0.55" />
            <feDropShadow dx="0" dy="-0.4" stdDeviation="0.25" floodColor="#ffffff" floodOpacity="0.35" />
          </filter>
        </defs>

        <circle cx={cx} cy={cy} r={outerR} fill="none" stroke="rgba(245,246,248,0.85)" strokeWidth={2.2} />
        <circle cx={cx} cy={cy} r={innerR} fill="none" stroke="rgba(245,246,248,0.62)" strokeWidth={1.6} />

        <circle
          cx={cx}
          cy={cy}
          r={stitchOuterR}
          fill="none"
          stroke="rgba(245,246,248,0.82)"
          strokeWidth={3.2}
          strokeLinecap="round"
          strokeDasharray="1 9"
          filter="url(#embroidered-thread)"
        />
        <circle
          cx={cx}
          cy={cy}
          r={stitchInnerR}
          fill="none"
          stroke="rgba(245,246,248,0.7)"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeDasharray="1 8"
          strokeDashoffset="4"
          filter="url(#embroidered-thread)"
        />
      </svg>

      <div
        className="absolute overflow-hidden rounded-full"
        style={{
          top: 26,
          bottom: 26,
          left: 26,
          right: 26,
          zIndex: 3,
          background: "var(--cobalt)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.28), inset 0 18px 34px rgba(255,255,255,0.08), inset 0 -22px 38px rgba(0,0,0,0.32)",
        }}
      >
        {children}
      </div>
    </div>
  );
}