"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // Show once the user has scrolled past a full viewport height.
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollTop = () => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  const primary = "#6366f1";

  return (
    <button
      onClick={scrollTop}
      aria-label="Scroll back to top"
      title="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`
        fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50
        w-11 h-11 rounded-xl flex items-center justify-center
        text-white shadow-lg shadow-indigo-500/25
        transition-all duration-300 ease-out
        hover:opacity-90 hover:-translate-y-0.5
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-indigo-400 focus-visible:ring-offset-2
        focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900
        ${
          visible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        }
      `}
      style={{ backgroundColor: primary }}
    >
      <ArrowUp size={20} />
    </button>
  );
}
