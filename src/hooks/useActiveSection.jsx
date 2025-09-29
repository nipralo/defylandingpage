import { useEffect, useState } from "react";

/**
 * Tracks which section is currently active based on scroll position
 * @param {Array<{target: string}>} sections - Array of sections with target IDs
 * @param {number} offset - fraction of viewport height to trigger active (0.5 = middle)
 */
export default function useActiveSection(sections, offset = 0.5) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      sections.forEach((item) => {
        const section = document.getElementById(item.target);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;

        // Activation point in viewport
        const activationPoint = window.innerHeight * offset;

        if (
          sectionTop <= activationPoint &&
          sectionTop + sectionHeight > activationPoint
        ) {
          current = item.target;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, offset]);

  return active;
}
