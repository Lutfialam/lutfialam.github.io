"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#mobile-projects", label: "Mobile Apps" },
  { href: "#web-projects", label: "Web Projects" },
  { href: "#education", label: "Education" },
  { href: "#cv", label: "CV" },
  { href: "#contact", label: "Contact" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Close sidebar on resize to lg+
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) setOpen(false);
    };
    handler(mq);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) =>
        document.getElementById(l.href.slice(1)),
      );
      let current = "home";
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = navLinks[i].href.slice(1);
            break;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const primary = "#6366f1";

  return (
    <>
      {/* Hamburger - always visible */}
      <button
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-opacity hover:opacity-80"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={24} color={primary} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-64
          bg-white dark:bg-gray-800
          border-r border-gray-200 dark:border-gray-700
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          flex flex-col
        `}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between p-7 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-xl font-bold" style={{ color: primary }}>
              Lutfi
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-light">
              Frontend Developer
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close menu"
          >
            <X
              size={20}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1 px-4">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg text-sm font-medium
                      transition-all duration-300
                      ${
                        isActive
                          ? "text-white"
                          : "text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
                      }
                    `}
                    style={isActive ? { backgroundColor: primary } : {}}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-7 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Lutfi Alamsyah
          </p>
        </div>
      </aside>
    </>
  );
}
