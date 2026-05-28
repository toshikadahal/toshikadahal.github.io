"use client";

import { useEffect, useState } from "react";

export default function ScrollDownHint() {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowHint(window.scrollY < 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`fixed bottom-6 left-1/2 z-[9997] -translate-x-1/2 transition-all duration-500 ${
        showHint ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
      }`}
    >
      <div className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/30 text-white shadow-xl shadow-black/35 ring-1 ring-white/10 backdrop-blur-2xl">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 animate-bounce drop-shadow-[0_0_14px_rgba(255,255,255,0.65)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 4v14" />
          <path d="m17 13-5 5-5-5" />
        </svg>
      </div>
    </div>
  );
}