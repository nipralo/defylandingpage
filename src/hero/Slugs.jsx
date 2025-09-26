"use client";
import Wrapper from "@/ui/Wrapper";
import { useEffect, useState } from "react";

export default function Slugs() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // when scroll position passes 100dvh
      if (window.scrollY > window.innerHeight) {
        setScrolledPastHero(true);
      } else {
        setScrolledPastHero(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-30 z-50 -translate-y-[120%] md:-translate-y-[170%]">
      <Wrapper className="flex flex-wrap gap-1 md:gap-3 !py-0">
        {[
          { icon: "📚", label: "Courses" },
          { icon: "🎓", label: "Learn" },
          { icon: "❓", label: "Why Defy" },
          { icon: "💼", label: "Careers" },
          { icon: "📊", label: "Batches" },
        ].map((item, index) => (
          <button
            key={index}
            className={`backdrop-blur-sm border-2 justify-center items-center gap-1 text-white border-white/20 rounded-md px-2 md:px-4 py-3 flex md:gap-4 text-xs text-nowrap md:text-xl font-light tracking-wide
            ${
              scrolledPastHero
                ? "bg-black/40 hover:bg-black/60"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            <img
              src="/svg/arrow_top_right.svg"
              alt="arrow top right icon"
              className="w-3 md:w-auto"
            />
            {item.label}
          </button>
        ))}
      </Wrapper>
    </div>
  );
}
