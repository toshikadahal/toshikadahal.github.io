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
        className="absolute inset-0 flex items-center justify-center px-6 text-center"
      >
        <div>
          <p className="hero-light-text mb-6 text-2xl font-semibold uppercase tracking-[0.35em] text-white/70 drop-shadow-lg">
            ENT Head and Neck Surgeon
          </p>
          <h1 className="hero-light-text text-6xl font-normal tracking-[-0.045em] text-white drop-shadow-2xl md:text-8xl lg:text-9xl" style={{ fontFamily: '"Canva Sans", Inter, Aptos, "Segoe UI", sans-serif', fontWeight: 400 }}>Dr. Anuj Devkota</h1>
          <p className="hero-light-text mt-5 text-xl text-white/60 md:text-2xl">
            Teaching Hospital, Maharajgunj
          </p>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: secondOpacity, y: secondY }}
        className="absolute inset-0 flex items-center px-6 md:px-20"
      >
        <div className="max-w-xl rounded-[2rem] border border-white/10 bg-black/25 p-8 shadow-glow backdrop-blur-xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/45">
            Patient care
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Clear ENT care for adults and children.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/65">
            Ear, nose, throat, sinus, voice, thyroid, head and neck evaluation with a patient-focused approach.
          </p>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: thirdOpacity, y: thirdY }}
        className="absolute inset-0 flex items-center justify-end px-6 md:px-20"
      >
        <div className="max-w-xl rounded-[2rem] border border-white/10 bg-black/30 p-8 text-left shadow-glow backdrop-blur-xl md:text-right">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/45">
            Surgery and teaching
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Bridging anatomy, surgery and education.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/65">
            Academic ENT practice with surgical learning, patient information and evidence-based guidance.
          </p>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: finalOpacity }}
        className="absolute inset-0 flex items-end justify-center px-6 pb-16 text-center"
      >
        <div className="rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-medium text-white/80 backdrop-blur-xl">
          Scroll to explore services
        </div>
      </motion.div>
    </div>
  );
}