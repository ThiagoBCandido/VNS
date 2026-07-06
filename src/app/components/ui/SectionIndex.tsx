export function SectionIndex({
  index,
  label,
  light = false,
}: {
  index: string;
  label: string;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span
        className="font-display text-sm"
        style={{ color: "var(--cobalt-light)" }}
      >
        {index}
      </span>
      <span
        className={`h-px w-8 ${light ? "bg-ink/30" : "bg-paper/25"}`}
      />
      <span
        className={`font-body text-[11px] tracking-[0.32em] uppercase ${
          light ? "text-ink/60" : "text-paper/55"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
