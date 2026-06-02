"use client";

import { MotionValue, motion, useTransform } from "framer-motion";

type OverlayProps = {
  progress: MotionValue<number>;
};

export default function Overlay({ progress }: OverlayProps) {
  const firstOpacity = useTransform(progress, [0, 0.16, 0.28], [1, 1, 0]);
  const firstY = useTransform(progress, [0, 0.28], [0, -120]);

  const secondOpacity = useTransform(progress, [0.2, 0.32, 0.48], [0, 1, 0]);
  const secondY = useTransform(progress, [0.22, 0.48], [90, -90]);

  const thirdOpacity = useTransform(progress, [0.5, 0.64, 0.82], [0, 1, 0]);
  const thirdY = useTransform(progress, [0.5, 0.82], [110, -110]);

  const finalOpacity = useTransform(progress, [0.82, 0.92, 1], [0, 1, 1]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <motion.div
        style={{ opacity: firstOpacity, y: firstY }}
        className="absolute inset-0 flex items-center justify-center px-4 text-center sm:px-6"
      >
        <div>
          <p className="hero-light-text hero-kicker mx-auto mb-4 max-w-[min(34rem,92vw)] text-[clamp(0.82rem,2.4vw,1.45rem)] font-semibold uppercase tracking-[0.28em] text-white/72 drop-shadow-lg sm:mb-6 sm:tracking-[0.35em]">
            ENT Head and Neck Surgeon
          </p>
          <h1 className="hero-light-text hero-title text-[clamp(3.35rem,13.5vw,8rem)] font-normal leading-[0.92] tracking-[-0.06em] text-white drop-shadow-2xl sm:leading-[0.95] md:text-8xl lg:text-9xl" style={{ fontFamily: '"Canva Sans", Inter, Aptos, "Segoe UI", sans-serif', fontWeight: 400 }}>Dr. Anuj Devkota</h1>
          <p className="hero-light-text mt-4 text-[clamp(1rem,3.4vw,1.5rem)] text-white/72 md:mt-5 md:text-2xl">
            Teaching Hospital, Maharajgunj
          </p>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: secondOpacity, y: secondY }}
        className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-20"
      >
        <div className="hero-copy-card max-w-xl rounded-[1.5rem] border border-white/10 bg-black/25 p-5 shadow-glow backdrop-blur-xl sm:rounded-[2rem] sm:p-8">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/45">
            Patient care
          </p>
          <h2 className="hero-copy-title text-[clamp(2rem,7vw,3.75rem)] font-semibold leading-[1.02] tracking-tight">
            Clear ENT care for adults and children.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/68 sm:mt-5 sm:text-lg sm:leading-8">
            Ear, nose, throat, sinus, voice, thyroid, head and neck evaluation with a patient-focused approach.
          </p>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: thirdOpacity, y: thirdY }}
        className="absolute inset-0 flex items-center justify-end px-4 sm:px-6 md:px-20"
      >
        <div className="hero-copy-card max-w-xl rounded-[1.5rem] border border-white/10 bg-black/30 p-5 text-left shadow-glow backdrop-blur-xl sm:rounded-[2rem] sm:p-8 md:text-right">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/45">
            Surgery and teaching
          </p>
          <h2 className="hero-copy-title text-[clamp(2rem,7vw,3.75rem)] font-semibold leading-[1.02] tracking-tight">
            Bridging anatomy, surgery and education.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/68 sm:mt-5 sm:text-lg sm:leading-8">
            Academic ENT practice with surgical learning, patient information and evidence-based guidance.
          </p>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: finalOpacity }}
        className="absolute inset-0 flex items-end justify-center px-4 pb-[max(3rem,env(safe-area-inset-bottom))] text-center sm:px-6 sm:pb-16"
      >
        <div className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white/84 backdrop-blur-xl sm:px-6">
          Scroll to explore services
        </div>
      </motion.div>
    </div>
  );
}