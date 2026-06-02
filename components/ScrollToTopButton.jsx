"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    function getScrollTop() {
      const values = [
        window.pageYOffset || 0,
        document.documentElement ? document.documentElement.scrollTop || 0 : 0,
        document.body ? document.body.scrollTop || 0 : 0
      ];

      document.querySelectorAll("main, section, div, body, html").forEach((el) => {
        if (el && el.scrollTop) {
          values.push(el.scrollTop);
        }
      });

      return Math.max.apply(null, values);
    }

    function detectTheme() {
      const text = [
        document.documentElement.getAttribute("data-theme") || "",
        document.body.getAttribute("data-theme") || "",
        document.documentElement.className || "",
        document.body.className || ""
      ].join(" ").toLowerCase();

      if (text.indexOf("dark") !== -1) {
        return "dark";
      }

      if (text.indexOf("light") !== -1) {
        return "light";
      }

      const themeToggle = Array.from(document.querySelectorAll("button, a, span, div")).find((el) => {
        const t = el.textContent ? el.textContent.trim().toUpperCase() : "";
        return t === "LIGHT" || t === "DARK";
      });

      if (themeToggle) {
        const label = themeToggle.textContent.trim().toUpperCase();

        if (label === "LIGHT") {
          return "dark";
        }

        if (label === "DARK") {
          return "light";
        }
      }

      const bg = window.getComputedStyle(document.body).backgroundColor;
      const nums = bg.match(/\d+/g);

      if (nums && nums.length >= 3) {
        const r = parseInt(nums[0], 10);
        const g = parseInt(nums[1], 10);
        const b = parseInt(nums[2], 10);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;

        return brightness < 128 ? "dark" : "light";
      }

      return "light";
    }

    function updateButton() {
      const y = getScrollTop();
      const triggerPoint = Math.max(620, window.innerHeight * 0.78);

      setVisible(y > triggerPoint);
      setTheme(detectTheme());
    }

    updateButton();

    window.addEventListener("scroll", updateButton, { passive: true });
    document.addEventListener("scroll", updateButton, { passive: true, capture: true });
    window.addEventListener("resize", updateButton);

    const timer = window.setInterval(updateButton, 500);

    return () => {
      window.removeEventListener("scroll", updateButton);
      document.removeEventListener("scroll", updateButton, { capture: true });
      window.removeEventListener("resize", updateButton);
      window.clearInterval(timer);
    };
  }, []);

  function scrollEverythingToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    if (document.documentElement) {
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    if (document.body) {
      document.body.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    document.querySelectorAll("main, section, div").forEach((el) => {
      if (el && el.scrollTop > 0) {
        try {
          el.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        } catch {
          el.scrollTop = 0;
        }
      }
    });
  }

  return (
    <>
      <button
        id="scrollTopButtonOnly"
        className={`scroll-top-button-only theme-${theme} ${visible ? "show" : ""}`}
        aria-label="Go to top"
        title="Go to top"
        onClick={scrollEverythingToTop}
      >
        <span className="arrow-symbol">↑</span>
      </button>

      <style dangerouslySetInnerHTML={{
        __html: `
          .scroll-top-button-only {
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

          .scroll-top-button-only.theme-light {
            background: rgba(255, 255, 255, 0.96) !important;
            color: #0f172a !important;
            border: 1px solid rgba(15, 23, 42, 0.16) !important;
            box-shadow: 0 12px 28px rgba(15, 23, 42, 0.18) !important;
          }

          .scroll-top-button-only.theme-dark {
            background: rgba(15, 23, 42, 0.96) !important;
            color: #ffffff !important;
            border: 1px solid rgba(255, 255, 255, 0.20) !important;
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.36) !important;
          }

          .scroll-top-button-only.show {
            opacity: 1 !important;
            visibility: visible !important;
            pointer-events: auto !important;
          }

          .scroll-top-button-only .arrow-symbol {
            display: inline-block !important;
          }

          .scroll-top-button-only.show .arrow-symbol {
            animation: bounceUpSmall 1.15s infinite !important;
          }

          @keyframes bounceUpSmall {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-8px);
            }
            60% {
              transform: translateY(-4px);
            }
          }

          @media (max-width: 640px) {
            .scroll-top-button-only {
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
