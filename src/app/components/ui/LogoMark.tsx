import { memo } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logoWhiteImg from "@/imports/logo_venus_branco_vazado.png";

export const LogoMark = memo(function LogoMark({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <ImageWithFallback
      src={logoWhiteImg}
      alt="VênusArt"
      className={className}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
});

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="font-display text-white text-sm tracking-tight leading-none">
        VÊNUS<span style={{ color: "var(--cobalt-light)" }}>ART</span>
      </div>
    </div>
  );
}
