"use client";
import { useEffect, useRef, type ReactNode } from "react";

// Content starts visible. Only an observed entrance gets animated, so SSR,
// disabled JavaScript, reduced motion and unsupported browsers remain readable.
export function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || typeof node.animate !== "function") return;
    // Never make already-visible content disappear during hydration or scroll restoration.
    if (node.getBoundingClientRect().top < window.innerHeight) return;
    let animation: Animation | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        if (!preference.matches && typeof node.animate === "function")
          animation = node.animate(
            [
              { opacity: 0, transform: "translateY(16px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 500, easing: "cubic-bezier(.22,1,.36,1)" },
          );
        observer.disconnect();
      },
      { rootMargin: "0px 0px -60px 0px" },
    );
    const reduce = () => {
      if (preference.matches) animation?.cancel();
    };
    preference.addEventListener("change", reduce);
    observer.observe(node);
    return () => {
      observer.disconnect();
      animation?.cancel();
      preference.removeEventListener("change", reduce);
    };
  }, []);
  return <div ref={ref}>{children}</div>;
}
