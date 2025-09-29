"use client";

import Button from "@/ui/Button";
import scrollToSection from "@/utils/scrollToSection";
import { useEffect, useState } from "react";

export default function CTAFooter() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll(".hide-cta"); // 👈 all elements
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // hide if ANY element is in view
        const anyVisible = entries.some((entry) => entry.isIntersecting);
        setIsVisible(!anyVisible);
      },
      { threshold: 0.2 } // trigger when 20% is visible
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white pt-4 px-6 z-50 transition duration-500 shadow-2xl shadow-primary-dark ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="text-center">
        <p className="text-accent-green-base">
          No payment is required for an expert consultation!
        </p>
        <Button
          onClick={() => scrollToSection("form-2")}
          className="my-3 mx-auto"
        >
          GET FREE CONSULTATION
        </Button>
      </div>
    </div>
  );
}
