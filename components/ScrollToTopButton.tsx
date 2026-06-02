"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    function detectTheme() {
      const themeText = [
        document.documentElement.getAttribute("data-theme") || "",
        document.body.getAttribute("data-theme") || "",
        document.documentElement.className || "",
        document.body.className || ""
      ].join(" ").toLowerCase();

      if (themeText.includes("dark")) return "dark";
      if (themeText.includes("light")) return "light";

      const toggle = Array.from(document.querySelectorAll("button, a, span, div")).find((el) => {
        const text = el.textContent ? el.textContent.trim().toUpperCase() : "";
        return text === "LIGHT" || text === "DARK";
      });

      if (toggle) {
        const label = toggle.textContent ? toggle.textContent.trim().toUpperCase() : "";
        if (label === "LIGHT") return "dark";
        if (label === "DARK") return "light";
      }

      return "light";
    }

    function updateButton() {
      const y = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const triggerPoint = Math.max(620, window.innerHeight * 0.78);

      setVisible(y > triggerPoint);
      setTheme(detectTheme());
    }

    updateButton();

    window.addEventListener("scroll", updateButton, { passive: true });
    window.addEventListener("resize", updateButton);
    document.addEventListener("scroll", updateButton, true);

    const timer = window.setInterval(updateButton, 500);

    return () => {
      window.removeEventListener("scroll", updateButton);
      window.removeEventListener("resize", updateButton);
      document.removeEventListener("scroll", updateButton, true);
      window.clearInterval(timer);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    document.body.scrollTo({ top: 0, behavior: "smooth" });

    document.querySelectorAll<HTMLElement>("main, section, div").forEach((el) => {
      if (el.scrollTop > 0) {
        el.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }

  return (
    <>
      <button
        className={`scroll-top-button theme-${theme} ${visible ? "show" : ""}`}
        aria-label="Go to top"
        title="Go to top"
        onClick={scrollToTop}
      >
        <span className="arrow-symbol">{"\u2191"}</span>
      </button>

      <style dangerouslySetInnerHTML={{
        __html: `
          .scroll-top-button {
            position: fixed !important;
            right: 22px !important;
            bottom: 22px !important;
            width: 40px !important;
            height: 40px !important;
            border-radius: 50% !important;
            font-size: 20px !important;
            font-weight: 700 !important;
            line-height: 38px !important;
            text-align: center !important;
            cursor: pointer !important;
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
            transition: opacity 0.25s ease, visibility 0.25s ease, background 0.25s ease, color 0.25s ease, border 0.25s ease !important;
            z-index: 2147483647 !important;
          }

          .scroll-top-button.theme-light {
            background: rgba(255, 255, 255, 0.96) !important;
            color: #0f172a !important;
            border: 1px solid rgba(15, 23, 42, 0.16) !important;
            box-shadow: 0 12px 28px rgba(15, 23, 42, 0.18) !important;
          }

          .scroll-top-button.theme-dark {
            background: rgba(15, 23, 42, 0.96) !important;
            color: #ffffff !important;
            border: 1px solid rgba(255, 255, 255, 0.2) !important;
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.36) !important;
          }

          .scroll-top-button.show {
            opacity: 1 !important;
            visibility: visible !important;
            pointer-events: auto !important;
          }

          .scroll-top-button .arrow-symbol {
            display: inline-block !important;
          }

          .scroll-top-button.show .arrow-symbol {
            animation: bounceUpSmall 1.15s infinite !important;
          }

          @keyframes bounceUpSmall {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-8px); }
            60% { transform: translateY(-4px); }
          }

          @media (max-width: 640px) {
            .scroll-top-button {
              right: 16px !important;
              bottom: 16px !important;
              width: 36px !important;
              height: 36px !important;
              font-size: 18px !important;
              line-height: 34px !important;
            }
          }
        `
      }} />
    </>
  );
}
