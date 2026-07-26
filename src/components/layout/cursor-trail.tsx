"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  token: string;
  accent: "signal" | "pass";
  rotate: number;
  drift: number;
};

const TOKENS = ["{ }", "< >", "01", "OK", "$_", "::", "→", "#!", "200", "ping", "/dev", "0x1F"];
const SPAWN_INTERVAL_MS = 70;
const LIFETIME_MS = 850;

let idCounter = 0;

export function CursorTrail() {
  const [enabled, setEnabled] = React.useState(false);
  const [particles, setParticles] = React.useState<Particle[]>([]);
  const lastSpawnRef = React.useRef(0);

  React.useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const evaluate = () => setEnabled(finePointer.matches && !reducedMotion.matches);
    evaluate();

    finePointer.addEventListener("change", evaluate);
    reducedMotion.addEventListener("change", evaluate);
    return () => {
      finePointer.removeEventListener("change", evaluate);
      reducedMotion.removeEventListener("change", evaluate);
    };
  }, []);

  React.useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastSpawnRef.current < SPAWN_INTERVAL_MS) return;
      lastSpawnRef.current = now;

      const id = idCounter++;
      const particle: Particle = {
        id,
        x: e.clientX,
        y: e.clientY,
        token: TOKENS[Math.floor(Math.random() * TOKENS.length)],
        accent: Math.random() > 0.5 ? "signal" : "pass",
        rotate: (Math.random() - 0.5) * 24,
        drift: (Math.random() - 0.5) * 40,
      };

      setParticles((prev) => [...prev, particle]);
      window.setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, LIFETIME_MS);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] overflow-hidden" aria-hidden="true">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className={
              "absolute border font-mono text-[10px] tracking-[0.04em] select-none " +
              (p.accent === "signal"
                ? "border-accent-signal/50 bg-background/70 text-accent-signal"
                : "border-accent-pass/50 bg-background/70 text-accent-pass")
            }
            style={{ left: p.x, top: p.y, padding: "1px 4px", borderRadius: 2 }}
            initial={{ opacity: 0, scale: 0.6, x: -8, y: -8, rotate: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: 1,
              x: p.drift,
              y: -28,
              rotate: p.rotate,
              transition: { duration: LIFETIME_MS / 1000, times: [0, 0.15, 0.7, 1], ease: "easeOut" },
            }}
            exit={{ opacity: 0 }}
          >
            {p.token}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
