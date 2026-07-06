import { useEffect, useRef, useState, useSyncExternalStore } from "react";

/**
 * Reveals an element once when it scrolls into view.
 * Uses IntersectionObserver (event-driven, no scroll-polling) and
 * disconnects after the first reveal so it costs nothing afterwards.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ── Shared scroll-past-threshold store ──────────────────────────────────────
// A single passive scroll listener shared by anything that only needs to know
// whether the page has scrolled past some pixel value (e.g. the nav bar).
let scrollY = typeof window !== "undefined" ? window.scrollY : 0;
const listeners = new Set<() => void>();
let ticking = false;

function handleScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    scrollY = window.scrollY;
    ticking = false;
    listeners.forEach((fn) => fn());
  });
}

function subscribe(fn: () => void) {
  if (listeners.size === 0) {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
    if (listeners.size === 0) window.removeEventListener("scroll", handleScroll);
  };
}

/** True once the page has scrolled past `threshold` px. Only re-renders on flip. */
export function useScrollPast(threshold: number) {
  return useSyncExternalStore(
    subscribe,
    () => scrollY > threshold,
    () => false
  );
}
