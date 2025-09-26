"use client";
import { useEffect, useState } from "react";

export default function useInView(
  id,
  options = { root: null, rootMargin: "-10% 0px -10% 0px", threshold: 0 }
) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [id, options]);

  return isInView;
}
