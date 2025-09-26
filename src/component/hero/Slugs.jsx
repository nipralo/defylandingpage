"use client";
import Wrapper from "@/ui/Wrapper";
import scrollToSection from "@/utils/scrollToSection";
import { useEffect, useState } from "react";

export default function Slugs() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolledPastHero(true);
      } else {
        setScrolledPastHero(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    { icon: "📚", label: "Courses", target: "courses" },
    { icon: "🎓", label: "Learn", target: "learn" },
    { icon: "❓", label: "Why Defy", target: "why-defy" },
    { icon: "💼", label: "Careers", target: "careers" },
    { icon: "📊", label: "Batches", target: "batches" },
  ];

  return (
    <div className="sticky top-3 z-50 -mt-11 lg:-mt-20 lg:mb-7 mb-2">
      <Wrapper className="flex flex-wrap gap-1 lg:gap-3 !py-0">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(item.target)}
            className={`backdrop-blur-sm border-1 justify-center items-center gap-1 text-white border-white/20 rounded-md px-1 lg:px-4 py-2 lg:py-3 flex lg:gap-3 text-[11px] text-nowrap lg:text-xl font-light tracking-wide
              ${
                scrolledPastHero
                  ? "bg-black/40 hover:bg-black/60"
                  : "bg-white/10 hover:bg-white/20"
              }`}
          >
            <img
              src="/svg/arrow_top_right.svg"
              alt="arrow top right icon"
              className="w-2.5 lg:w-4.5"
            />
            {item.label}
          </button>
        ))}
      </Wrapper>
    </div>
  );
}
