"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { DnsFieldFallback } from "@/components/three/dns-field-fallback";

const DnsFieldScene = dynamic(
  () => import("@/components/three/dns-field-scene").then((m) => m.DnsFieldScene),
  { ssr: false, loading: () => null }
);

const THEME_COLORS = {
  light: { accentSignal: "#b14a00", accentPass: "#095d63", lineColor: "#d7dce2", ink: "#10151f", bg: "#eef1f4" },
  dark: { accentSignal: "#ff8a3d", accentPass: "#37b6c4", lineColor: "#23304a", ink: "#e8edf4", bg: "#0b1220" },
} as const;

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

/** Full-bleed immersive 3D background for the hero — see DESIGN.md "DNS Resolution Trace". */
export function DnsField() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [canRender3D, setCanRender3D] = React.useState(false);
  const [deferredReady, setDeferredReady] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- capability checks (matchMedia, hardwareConcurrency, WebGL) only exist client-side; this is the standard SSR-safe detection pattern.
    setMounted(true);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lowEndDevice = (navigator.hardwareConcurrency ?? 8) < 4;
    setCanRender3D(!reducedMotion && !lowEndDevice && supportsWebGL());

    const ric = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 300));
    const cic = window.cancelIdleCallback ?? window.clearTimeout;
    const id = ric(() => setDeferredReady(true));
    return () => cic(id);
  }, []);

  const colors = THEME_COLORS[resolvedTheme === "dark" ? "dark" : "light"];

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {mounted && canRender3D && deferredReady ? (
        <React.Suspense fallback={null}>
          <DnsFieldScene
            accentSignal={colors.accentSignal}
            accentPass={colors.accentPass}
            lineColor={colors.lineColor}
            ink={colors.ink}
            bg={colors.bg}
          />
        </React.Suspense>
      ) : (
        <DnsFieldFallback />
      )}
    </div>
  );
}
