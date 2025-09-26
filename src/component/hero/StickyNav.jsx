"use client";

import NavItems from "@/component/hero/NavItems";
import useInView from "@/hooks/useInView";
import Wrapper from "@/ui/Wrapper";

export default function StickyNav() {
  const heroInView = useInView("hero"); // hero section id

  const items = [
    { icon: "📊", label: "Batches", target: "batches" },
    { icon: "❓", label: "Why Defy", target: "why-defy" },
    { icon: "📚", label: "Courses", target: "courses" },
    { icon: "💼", label: "FAQ", target: "faq" },
    { icon: "🎓", label: "Location", target: "location" },
  ];

  return (
    <div className="sticky top-3 z-50 -mt-11 lg:-mt-20 lg:mb-7 mb-2">
      <Wrapper className="flex flex-wrap gap-1 lg:gap-3 !py-0">
        {items.map((item, index) => (
          <NavItems key={index} item={item} isDark={!heroInView} />
        ))}
      </Wrapper>
    </div>
  );
}
