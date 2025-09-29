"use client";
import { useEffect, useState } from "react";

export default function useInView(
  id,
  options = {
    root: null,
    rootMargin: "0px 0px 0px 0px", // safer for iOS
    threshold: 0.1, // more reliable than 0
  }
) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect(); // safer than unobserve on iOS
    };
  }, [id, options]);

  return isInView;
}
