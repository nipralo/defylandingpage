"use client"; // if you're using Next.js 13+ with app router

import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[9999] p-2 md:p-3 rounded-full shadow-md transition-opacity duration-300 cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0"
      } bg-[#0f182c] hover:bg-[#192a4d] text-white`}
      aria-label="Scroll to top"
    >
      <IoIosArrowBack className="text-[#F7BE68] rotate-90 shadow-xl w-6 h-6 sm:w-8 sm:h-8 sm:min-w-8 sm:min-h-8" />
    </button>
  );
}
