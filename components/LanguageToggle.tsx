"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

export default function LanguageToggle() {
  const [language, setLanguage] = useState("en");
  const [slot, setSlot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("siteLanguage") || "en";
    setLanguage(saved);

    window.googleTranslateElementInit = function () {
      if (!window.google?.translate?.TranslateElement) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,ne",
          autoDisplay: false
        },
        "google_translate_element"
      );
    };

    if (!document.querySelector('script[src*="translate_a/element.js"]')) {
      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    function findThemeButton() {
      const buttons = Array.from(document.querySelectorAll("button")) as HTMLButtonElement[];

      return (
        buttons.find((button) => {
          const text = button.textContent ? button.textContent.trim().toUpperCase() : "";
          const label = button.getAttribute("aria-label") || "";
          const title = button.getAttribute("title") || "";

          return (
            text === "DARK" ||
            text === "LIGHT" ||
            text.includes("DARK") ||
            text.includes("LIGHT") ||
            label.toLowerCase().includes("theme") ||
            title.toLowerCase().includes("theme")
          );
        }) ||
        buttons.find((button) => {
          const parentText = button.parentElement?.textContent || "";
          return parentText.includes("Contact Dr. Anuj Devkota") || parentText.includes("सम्पर्क");
        }) ||
        buttons[0]
      );
    }

    function placeLanguageButton() {
      const oldSlot = document.getElementById("language-toggle-inline-slot");
      if (oldSlot) {
        setSlot(oldSlot);
        return;
      }

      const themeButton = findThemeButton();

      if (!themeButton || !themeButton.parentElement) {
        return;
      }

      const inlineSlot = document.createElement("span");
      inlineSlot.id = "language-toggle-inline-slot";
      inlineSlot.className = "language-toggle-inline-slot";

      themeButton.parentElement.insertBefore(inlineSlot, themeButton.nextSibling);
      setSlot(inlineSlot);
    }

    const timers = [
      window.setTimeout(placeLanguageButton, 80),
      window.setTimeout(placeLanguageButton, 400),
      window.setTimeout(placeLanguageButton, 1000)
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  function setTranslateCookie(value: string) {
    const maxAge = 60 * 60 * 24 * 365;
    document.cookie = `googtrans=${value};path=/;max-age=${maxAge};SameSite=Lax`;

    const host = window.location.hostname;
    if (host.includes(".")) {
      document.cookie = `googtrans=${value};path=/;domain=.${host};max-age=${maxAge};SameSite=Lax`;
    }
  }

  function clearTranslateCookie() {
    document.cookie = "googtrans=;path=/;max-age=0;SameSite=Lax";

    const host = window.location.hostname;
    if (host.includes(".")) {
      document.cookie = `googtrans=;path=/;domain=.${host};max-age=0;SameSite=Lax`;
    }
  }

  function toggleLanguage() {
    const nextLanguage = language === "ne" ? "en" : "ne";

    window.localStorage.setItem("siteLanguage", nextLanguage);
    setLanguage(nextLanguage);

    if (nextLanguage === "ne") {
      setTranslateCookie("/en/ne");
    } else {
      clearTranslateCookie();
    }

    window.setTimeout(() => {
      window.location.reload();
    }, 120);
  }

  const button = (
    <button
      type="button"
      className="language-toggle-button notranslate" translate="no"
      aria-label={language === "ne" ? "Switch to English" : "Switch to Nepali"}
      title={language === "ne" ? "Switch to English" : "Switch to Nepali"}
      onClick={toggleLanguage}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="language-toggle-icon">
        <path
          d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18Zm0 0c2.1 2.2 3.1 5.1 3.1 9S14.1 18.8 12 21m0-18C9.9 5.2 8.9 8.1 8.9 12S9.9 18.8 12 21M3.8 9h16.4M3.8 15h16.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="language-toggle-current">
        {language === "ne" ? "EN" : "NP"}
      </span>
    </button>
  );

  return (
    <>
      {slot ? createPortal(button, slot) : <span className="language-toggle-fallback">{button}</span>}

      <div id="google_translate_element" aria-hidden="true" />

      <style>{`
        .language-toggle-inline-slot {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          margin-left: 0.45rem !important;
          margin-right: 0.45rem !important;
          flex: 0 0 auto !important;
        }

        .language-toggle-fallback {
          position: fixed;
          top: calc(env(safe-area-inset-top, 0px) + 1.35rem);
          left: 13.5rem;
          z-index: 2147483646;
        }

        .language-toggle-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          min-width: 4rem;
          height: 2.5rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(10, 10, 10, 0.52);
          color: rgba(255, 255, 255, 0.84);
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease, border 0.2s ease;
        }

        .language-toggle-button:hover {
          transform: translateY(-1px);
          background: rgba(255, 255, 255, 0.95);
          color: #111111;
          border-color: rgba(255, 255, 255, 0.45);
        }

        .language-toggle-icon {
          width: 1rem;
          height: 1rem;
        }

        .language-toggle-current {
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        #google_translate_element,
        .goog-te-banner-frame,
        .goog-te-gadget,
        .goog-te-balloon-frame,
        iframe.skiptranslate {
          display: none !important;
        }

        body {
          top: 0 !important;
        }

        @media (max-width: 760px) {
          .language-toggle-inline-slot {
            margin-left: 0.25rem !important;
            margin-right: 0.35rem !important;
          }

          .language-toggle-button {
            min-width: 3.65rem;
            height: 2.25rem;
            gap: 0.25rem;
          }

          .language-toggle-icon {
            width: 0.9rem;
            height: 0.9rem;
          }

          .language-toggle-current {
            font-size: 0.68rem;
          }
        }
      `}</style>
    </>
  );
}

