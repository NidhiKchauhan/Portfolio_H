import Link from "next/link";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DnsField } from "@/components/three/dns-field";
import { profile } from "@/content/profile";

const HOPS = ["CLIENT", "RESOLVER", "ROOT", "TLD", "AUTH"];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden border-b border-border"
      aria-label="Introduction"
    >
      <DnsField />

      {/* Vignette: keeps the text zone readable while letting the 3D field breathe on the sides/below. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(to right, var(--background) 0%, color-mix(in srgb, var(--background) 82%, transparent) 38%, color-mix(in srgb, var(--background) 30%, transparent) 62%, transparent 82%)," +
            "linear-gradient(to bottom, color-mix(in srgb, var(--background) 55%, transparent) 0%, transparent 20%, transparent 72%, color-mix(in srgb, var(--background) 70%, transparent) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, var(--background) 0%, color-mix(in srgb, var(--background) 85%, transparent) 30%, color-mix(in srgb, var(--background) 45%, transparent) 55%, color-mix(in srgb, var(--background) 80%, transparent) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 py-16 md:px-8 md:py-24">
        <div className="mb-6 flex items-center justify-between font-mono text-[0.694rem] tracking-[0.1em] text-muted-foreground uppercase">
          <span>fig.01 — resolution trace</span>
          <span>x:039.2 y:011.7</span>
        </div>

        <p className="mb-4 font-mono text-[0.833rem] tracking-[0.1em] text-primary uppercase">
          {profile.tagline}
        </p>

        <h1 className="mb-6 max-w-3xl font-[family-name:var(--font-display)] text-[length:var(--text-step-7)] leading-[1.05] font-bold tracking-[-0.02em] text-balance">
          {profile.name}
        </h1>

        <p className="mb-10 max-w-xl text-[length:var(--text-step-1)] leading-relaxed text-muted-foreground">
          {profile.title} based in {profile.location}. I build the automation
          that proves distributed systems actually work — before customers
          find out otherwise.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button
            size="lg"
            nativeButton={false}
            className="rounded-none font-mono text-sm tracking-[0.04em] uppercase"
            render={<Link href="#case-studies" />}
          >
            View case studies
            <ArrowDown className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            nativeButton={false}
            className="rounded-none border-border bg-background/70 font-mono text-sm tracking-[0.04em] uppercase backdrop-blur-xs"
            render={<a href={profile.resumeHref} download />}
          >
            Résumé
            <Download className="size-4" />
          </Button>
        </div>

        <div
          className="mt-auto flex items-center justify-between border-t border-border bg-background/70 px-3 py-3 font-mono text-[0.694rem] tracking-[0.06em] text-muted-foreground uppercase backdrop-blur-xs sm:text-[0.833rem]"
          role="img"
          aria-label="DNS resolution path: client, resolver, root, TLD, authoritative name server, response 200 OK, uptime 99.9 percent"
        >
          <span aria-hidden="true" className="hidden sm:inline">{HOPS.join(" → ")}</span>
          <span aria-hidden="true" className="sm:hidden">{HOPS[0]} → … → {HOPS[HOPS.length - 1]}</span>
          <span aria-hidden="true" className="text-accent-pass">status 200 · up 99.9%</span>
        </div>
      </div>
    </section>
  );
}
