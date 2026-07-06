import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useReveal } from "@/app/lib/hooks";

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
