import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "reduce-motion";

function getInitial(): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored !== null) return stored === "true";
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

function apply(value: boolean) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("reduce-motion", value);
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState<boolean>(false);

  // Initialize on mount (avoid SSR mismatch)
  useEffect(() => {
    const initial = getInitial();
    setReduced(initial);
    apply(initial);
  }, []);

  // Follow OS changes only when user hasn't explicitly chosen
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem(STORAGE_KEY) === null) {
        setReduced(e.matches);
        apply(e.matches);
      }
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    setReduced((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, String(next));
      apply(next);
      return next;
    });
  }, []);

  return { reduced, toggle };
}
