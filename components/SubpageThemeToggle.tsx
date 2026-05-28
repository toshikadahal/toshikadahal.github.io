"use client";

import { useEffect, useState } from "react";

export default function SubpageThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("site-theme");
    const initialTheme = saved === "light" ? "light" : "dark";

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    window.localStorage.setItem("site-theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark theme"
      data-theme-toggle="true"
      className={`theme-mode-toggle fixed left-8 top-6 z-[9999] flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-extrabold uppercase tracking-[0.18em] shadow-2xl backdrop-blur-2xl transition ${
        theme === "dark"
          ? "border-white/25 bg-black/65 text-white ring-1 ring-white/20 hover:bg-black/85"
          : "border-slate-950/25 bg-white/95 text-slate-950 ring-1 ring-slate-950/10 hover:bg-white"
      }`}
    >
      <span
        className={`grid h-9 w-9 place-items-center rounded-full transition ${
          theme === "dark"
            ? "bg-amber-300 text-slate-950 shadow-[0_0_30px_rgba(252,211,77,0.75)]"
            : "bg-slate-950 text-white shadow-[0_0_26px_rgba(15,23,42,0.50)]"
        }`}
      >
        {theme === "dark" ? (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="M4.93 4.93l1.41 1.41" />
            <path d="M17.66 17.66l1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="M6.34 17.66l-1.41 1.41" />
            <path d="M19.07 4.93l-1.41 1.41" />
            <circle cx="12" cy="12" r="4.3" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white">
            <path d="M21.2 14.15c-1.15.55-2.43.85-3.79.85A8.42 8.42 0 0 1 9 6.59c0-1.36.3-2.64.85-3.79A9.53 9.53 0 1 0 21.2 14.15Z" />
            <circle cx="16.4" cy="6.1" r="1.1" fill="white" opacity="0.85" />
            <circle cx="19.2" cy="9.1" r="0.75" fill="white" opacity="0.75" />
          </svg>
        )}
      </span>

      <span className="theme-mode-label hidden sm:inline">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  );
}