import { useEffect, useRef, useState, useSyncExternalStore } from "react";


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


export function useScrollPast(threshold: number) {
  return useSyncExternalStore(
    subscribe,
    () => scrollY > threshold,
    () => false
  );
}
