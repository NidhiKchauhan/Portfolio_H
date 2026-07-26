"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function AboutImage() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  // `useReducedMotion` resolves differently on the server (always false) vs. the client,
  // which would otherwise produce a hydration mismatch. Stay on the neutral, static range
  // until after mount, when the real client-side preference is known.
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- resolving `prefers-reduced-motion` only matters post-hydration; this avoids an SSR/client mismatch on the initial transform value.
    setMounted(true);
  }, []);
  const reduceMotion = !mounted || shouldReduceMotion;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Background drifts slower than the page scroll — the classic parallax depth cue.
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [1, 1, 1] : [1.12, 1.18, 1.12]);

  return (
    <div ref={containerRef} className="absolute inset-y-0 right-0 w-full md:w-[70%]" aria-hidden="true">
      <div
        className="h-full w-full overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, transparent 6%, black 42%, black 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, transparent 6%, black 42%, black 100%)",
        }}
      >
        <motion.div className="relative h-full w-full" style={{ y, scale }}>
          <Image
            src="/images/desk-illustration.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[65%_center] opacity-80 grayscale-[35%] dark:opacity-60 dark:grayscale-[45%]"
            loading="lazy"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-background/35" />
        <div className="absolute inset-0 shadow-[inset_0_0_120px_60px_var(--background)]" />
      </div>

      {/* viewfinder brackets — a restrained "this frame is annotated" accent, echoing the hero's coordinate marks */}
      <div className="absolute top-6 right-6 h-8 w-8 border-t-2 border-r-2 border-primary/70" />
      <div className="absolute right-6 bottom-6 h-8 w-8 border-r-2 border-b-2 border-primary/70" />
    </div>
  );
}
