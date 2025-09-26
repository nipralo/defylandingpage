"use client";

import Button from "@/ui/Button";
import { useEffect, useState } from "react";

export default function CTABanner() {
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
      className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg pt-4 px-6 z-50 transition duration-500 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="text-center">
        <p className="text-accent-green-base">
          No payment is required for an expert consultation!
        </p>
        <Button className="my-3" >GET FREE CONSULTATION</Button>
      </div>
    </div>
  );
}
