"use client";

import NavItems from "@/component/hero/NavItems";
import useActiveSection from "@/hooks/useActiveSection";
import useInView from "@/hooks/useInView";
import Wrapper from "@/ui/Wrapper";

const items = [
  { icon: "📊", label: "Batches", target: "batches" },
  { icon: "❓", label: "Why Defy", target: "why-defy" },
  { icon: "📚", label: "Courses", target: "courses" },
  { icon: "💼", label: "FAQ", target: "faq" },
  { icon: "🎓", label: "Location", target: "location" },
];
export default function StickyNav() {
  const heroInView = useInView("hero"); // hero section id
  const activeSection = useActiveSection(items, 0.5); // middle of viewport
  return (
    <div className="sticky top-3 z-50 -mt-11 lg:-mt-20 [@media(max-width:375px)]:-mt-20 lg:mb-7 mb-2">
      <Wrapper className="flex flex-wrap gap-1 lg:gap-3 !py-0">
        {items.map((item, index) => (
          <NavItems
            key={index}
            item={item}
            isDark={!heroInView} // optional, can keep heroInView logic if needed
            isActive={activeSection === item.target}
          />
        ))}
      </Wrapper>
    </div>
  );
}
