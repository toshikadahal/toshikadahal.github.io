"use client";

import { useEffect } from "react";

export default function HideIntroNameOnScroll() {
  useEffect(() => {
    const normalize = (value: string) =>
      value.replace(/\s+/g, " ").trim().toUpperCase();

    const compact = (value: string) =>
      normalize(value).replace(/[^A-Z0-9]/g, "");

    const isIntroText = (node: HTMLElement) => {
      const rawText = node.textContent || "";
      const cleanText = normalize(rawText);
      const compactText = compact(rawText);
      const style = window.getComputedStyle(node);
      const fontSize = Number.parseFloat(style.fontSize || "0");

      const isDoctorName =
        compactText === "DRANUJDEVKOTA" &&
        fontSize >= 36;

      const isHospitalLine =
        compactText === "TEACHINGHOSPITALMAHARAJGUNJ" &&
        fontSize >= 14;

      const isEntLine =
        compactText === "ENTHEADANDNECKSURGEON" &&
        fontSize >= 8;

      const isOnlySmallText =
        cleanText.length > 0 &&
        cleanText.length <= 45;

      return isOnlySmallText && (isDoctorName || isHospitalLine || isEntLine);
    };

    const update = () => {
      const shouldHide = window.scrollY > 42;
      const nodes = Array.from(document.querySelectorAll<HTMLElement>("body *"));

      for (const node of nodes) {
        if (!isIntroText(node)) {
          continue;
        }

        node.style.transition = "opacity 420ms ease, transform 420ms ease";
        node.style.opacity = shouldHide ? "0" : "";
        node.style.transform = shouldHide ? "translateY(-14px)" : "";
        node.style.pointerEvents = shouldHide ? "none" : "";
      }
    };

    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const timer = window.setInterval(update, 350);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.clearInterval(timer);
    };
  }, []);

  return null;
}