"use client";

import useInView from "@/hooks/useInView";
import scrollToSection from "@/utils/scrollToSection";

export default function NavItems({ item, isDark }) {
  const isActive = useInView(item.target, {
    root: null,
    rootMargin: "-10% 0px -100% 0px",
    threshold: 0,
  });

  return (
    <button
      onClick={() => scrollToSection(item.target)}
      className={`backdrop-blur-sm border-1 justify-center items-center gap-1 text-white border-white/20 rounded-md px-1 lg:px-4 py-2 lg:py-3 flex lg:gap-3 text-[11px] text-nowrap lg:text-xl font-light tracking-wide transition-all
                ${
                  isDark
                    ? "bg-black/40 hover:bg-black/60"
                    : "bg-white/10 hover:bg-white/20"
                }
                ${isActive ? "ring-2 ring-accent-gold" : ""}`}
    >
      <img
        src="/svg/arrow_top_right.svg"
        alt="arrow top right icon"
        className="w-2.5 lg:w-4.5"
      />
      {item.label}
    </button>
  );
}
