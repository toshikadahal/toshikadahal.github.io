"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_SOURCES = [
  "frame_00001.webp?v=20260528120103",
  "frame_00002.webp?v=20260528120103",
  "frame_00003.webp?v=20260528120103",
  "frame_00004.webp?v=20260528120103",
  "frame_00005.webp?v=20260528120103",
  "frame_00006.webp?v=20260528120103",
  "frame_00007.webp?v=20260528120103",
  "frame_00008.webp?v=20260528120103",
  "frame_00009.webp?v=20260528120103",
  "frame_00010.webp?v=20260528120103",
  "frame_00011.webp?v=20260528120103",
  "frame_00012.webp?v=20260528120103",
  "frame_00013.webp?v=20260528120103",
  "frame_00014.webp?v=20260528120103",
  "frame_00015.webp?v=20260528120103",
  "frame_00016.webp?v=20260528120103",
  "frame_00017.webp?v=20260528120103",
  "frame_00018.webp?v=20260528120103",
  "frame_00019.webp?v=20260528120103",
  "frame_00020.webp?v=20260528120103",
  "frame_00021.webp?v=20260528120103",
  "frame_00022.webp?v=20260528120103",
  "frame_00023.webp?v=20260528120103",
  "frame_00024.webp?v=20260528120103",
  "frame_00025.webp?v=20260528120103",
  "frame_00026.webp?v=20260528120103",
  "frame_00027.webp?v=20260528120103",
  "frame_00028.webp?v=20260528120103",
  "frame_00029.webp?v=20260528120103",
  "frame_00030.webp?v=20260528120103",
  "frame_00031.webp?v=20260528120103",
  "frame_00032.webp?v=20260528120103",
  "frame_00033.webp?v=20260528120103",
  "frame_00034.webp?v=20260528120103",
  "frame_00035.webp?v=20260528120103",
  "frame_00036.webp?v=20260528120103",
  "frame_00037.webp?v=20260528120103",
  "frame_00038.webp?v=20260528120103",
  "frame_00039.webp?v=20260528120103",
  "frame_00040.webp?v=20260528120103"
];

function getFrameSrc(index: number) {
  return "/sequence/" + FRAME_SOURCES[index];
}

function drawCover(
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  canvasWidth: number,
  canvasHeight: number
) {
  const imageWidth = image.naturalWidth || image.width;
  const imageHeight = image.naturalHeight || image.height;
  const scale = Math.max(canvasWidth / imageWidth, canvasHeight / imageHeight);
  const width = imageWidth * scale;
  const height = imageHeight * scale;
  const x = (canvasWidth - width) / 2;
  const y = (canvasHeight - height) / 2;

  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.drawImage(image, x, y, width, height);
}

export default function ScrollyCanvas() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const [loadedCount, setLoadedCount] = useState(0);
  const [allReady, setAllReady] = useState(false);
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const image = imagesRef.current[index];

    if (!canvas || !image || !image.complete || image.naturalWidth === 0) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    currentFrameRef.current = index;
    drawCover(context, image, canvas.clientWidth, canvas.clientHeight);
  };

  const requestDrawFrame = (index: number) => {
    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = window.requestAnimationFrame(() => {
      animationFrameRef.current = null;
      drawFrame(index);
    });
  };

  useEffect(() => {
    let cancelled = false;
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    FRAME_SOURCES.forEach((source, index) => {
      const image = new Image();

      image.onload = () => {
        if (cancelled) {
          return;
        }

        loaded += 1;
        setLoadedCount(loaded);

        if (index === 0) {
          setFirstFrameReady(true);
          requestDrawFrame(0);
        }

        if (loaded === FRAME_SOURCES.length) {
          setAllReady(true);
          requestDrawFrame(currentFrameRef.current);
        }
      };

      image.onerror = () => {
        if (cancelled) {
          return;
        }

        loaded += 1;
        setLoadedCount(loaded);

        if (loaded === FRAME_SOURCES.length) {
          setAllReady(true);
          requestDrawFrame(currentFrameRef.current);
        }
      };

      image.src = getFrameSrc(index);
      images.push(image);
    });

    imagesRef.current = images;

    return () => {
      cancelled = true;
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      imagesRef.current = [];
    };
  }, []);

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;

      if (!canvas) {
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const parent = canvas.parentElement;
      const rect = parent?.getBoundingClientRect();
      const width = Math.round(rect?.width || window.innerWidth);
      const height = Math.round(rect?.height || window.innerHeight);

      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      const context = canvas.getContext("2d");

      if (!context) {
        return;
      }

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      requestDrawFrame(currentFrameRef.current);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.visualViewport?.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.visualViewport?.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", latest => {
    const nextFrame = Math.min(
      FRAME_SOURCES.length - 1,
      Math.max(0, Math.round(latest * (FRAME_SOURCES.length - 1)))
    );

    if (nextFrame !== currentFrameRef.current) {
      requestDrawFrame(nextFrame);
    }
  });

  const loadedPercent = Math.round((loadedCount / FRAME_SOURCES.length) * 100);

  return (
    <section ref={sectionRef} className="scrolly-hero relative h-[420svh] bg-[#121212] sm:h-[520vh]">
      <div className="sticky top-0 h-[100dvh] min-h-[100dvh] w-full overflow-hidden bg-[#121212] sm:min-h-[34rem]">
        <canvas
          ref={canvasRef}
          className={"absolute inset-0 h-full w-full transition-opacity duration-1000 " + (allReady ? "opacity-100" : "opacity-55")}
        />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.18)_44%,rgba(0,0,0,0.78)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/50" />

        {!firstFrameReady && (
          <div className="absolute inset-0 z-20 bg-[#121212]" />
        )}

        <Overlay progress={scrollYProgress} />

        {!allReady && (
          <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-6">
            <div className="w-full max-w-xs rounded-full border border-white/10 bg-black/40 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur-2xl">
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                <div className="min-w-0 flex-1">
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-white transition-all duration-500"
                      style={{ width: loadedPercent + "%" }}
                    />
                  </div>
                </div>
                <span className="shrink-0 text-[11px] font-semibold text-white/70">
                  {loadedPercent}%
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
