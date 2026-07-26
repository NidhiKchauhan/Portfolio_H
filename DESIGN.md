# DESIGN.md — Phase 2

Input: `REFERENCES.md`. Every decision below either adopts or explicitly rejects something documented there.

---

## 2.1 Direction

### A — Protocol Schematic *(recommended, built out below)*
A blueprint/engineering-drawing register — flat, precise vector linework, dashed measurement guides, crosshair markers, coordinate and packet-field annotations — applied to the actual shape of DNS/TCP-IP protocol testing: hops, headers, TTLs, pass/fail states. No blur, no glow, no glass.

```
┌──────────────────────────────────────────────────────────┐
│ HB·        ABOUT   EXPERIENCE   CASE STUDIES   CONTACT  ⌗ │
│┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄│
│ fig.01                                        querytype: A│
│                                                            │
│   HARDIK BARAIYA                                          │
│   Software Developer in Test — DNS · TCP/IP · CI/CD       │
│                                                            │
│   ┌────┐ ┄┄▶ ┌────┐ ┄┄▶ ┌────┐ ┄┄▶ ┌────┐  ← 3D signature│
│   │CLIENT│    │RESOLVE│   │ AUTH │   │200 OK│   (live trace)│
│   └────┘     └────┘     └────┘     └────┘                │
│                                                            │
│   [ view case studies ]     [ résumé ↓ ]                  │
│                                                            │
│   x:039.2  y:011.7                 status 200 · up 99.9%  │
└──────────────────────────────────────────────────────────┘
```
**Builds on:** the two-accent discipline of harshbanka.tech (adopt — restraint over decoration). **Reacts against:** the glow/glassmorphism convergence of harshbanka.tech, mdkhalidmahmud.com and component #2 (reject blur/blob entirely), and the pill-button/rounded-everything habit common to all six references (reject — corners stay mostly sharp, pills reserved for status badges only).

### B — Terminal / Test-Runner Console
CLI chrome: monospace as the *display* face, a typed `whoami` / `run --tests` sequence, pass/fail ticks standing in for job bullets.

```
┌────────────────────────────────────────┐
│ hb@portfolio:~$                     _   │
│ home  experience  case-studies  contact │
│────────────────────────────────────────│
│ $ whoami                                │
│ > Hardik Baraiya — SDET, 7+ yrs         │
│ $ run --tests                           │
│ > ✓ dns_pivot.spec        995ms  PASS   │
│ > ✓ selfheal_e2e.spec     412ms  PASS   │
│ > ✓ load_2x_prod.spec    1240ms  PASS   │
│ $ _                                     │
│ [ view case studies ]   [ résumé.pdf ]  │
└────────────────────────────────────────┘
```
**Builds on:** harshbanka.tech's cyan-on-near-black restraint. **Reacts against:** the sans-only typography habit shared by all six references, by making mono the display face. **Risk:** the "hacker terminal portfolio" is arguably a *more* worn genre than the one in REFERENCES.md — it just isn't sampled in these six.

### C — Oscilloscope / Signal Telemetry
Hero as a live instrument read-out: waveform trace, SLI gauges, scanline texture — a direct visualization of the Datadog/Splunk/SRE side of the resume.

```
┌────────────────────────────────────────┐
│ HB     ABOUT  WORK  CASES  CONTACT   ⏻  │
│──┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄──│
│ ╭╮  ╭╮      SLI · uptime   99.9%        │
│╱  ╲╱  ╲___  Hardik Baraiya               │
│  (waveform)  SDET — protocols, scale, SRE│
│              [ view work ]  [ contact ]  │
│ latency ▂▃▅▂▁▂▇▂▁▂        p95 120ms      │
└────────────────────────────────────────┘
```
**Builds on:** the same dark-canvas-plus-restraint logic. **Reacts against:** the static-hero convention of aakash-sharma and component #1, by making the hero itself a live readout. **Risk:** gauges/waveforms read as "borrowed from Datadog's own product," closer to skinning a monitoring tool than establishing a personal identity.

### Recommendation: A — Protocol Schematic

B and C are both viable and I considered them seriously, but A is the only direction that ties to the *single most specific* line on the resume — hand-built DNS/TCP-IP protocol validation — rather than to the general SDET/observability theme that also fits B or C. A also gives the Experience section an **earned** structural device (protocol hops as job stops) instead of a decorative one, which the brief specifically calls for. And it supports a real 3D signature (a resolution path through space) without leaning on glow or blur to look "techie" — the two other directions would need either fake terminal chrome (B) or dashboard-borrowed gauge widgets (C) to feel dimensional. Building out A only, per instructions.

**Dialect chosen:** CAD/blueprint drafting conventions fused with network-packet/protocol-diagram annotation (Wireshark-style field labels, traceroute hops, status codes). This is a specific enough dialect that it cannot be confused with the CRT, oscilloscope, or brutalist-IDE alternatives listed in the brief, and it is not the look any of the six references converged on.

---

## 2.2 Tokens

### Color

Two full themes. Contrast ratios below are measured (WCAG relative-luminance formula), not estimated.

| Role | Dark theme | Ratio vs. dark surface | Light theme | Ratio vs. light surface |
|---|---|---|---|---|
| Surface | `#0B1220` | — | `#EEF1F4` | — |
| Raised surface | `#121B2E` | — | `#FFFFFF` | — |
| Ink (body text) | `#E8EDF4` | **15.91:1** (≥4.5 ✅) | `#10151F` | **16.12:1** (≥4.5 ✅) |
| Muted ink (secondary text) | `#93A2B8` | **7.22:1** (≥4.5 ✅) | `#48566B` | **6.57:1** (≥4.5 ✅) |
| Accent (signal-amber) | `#FF8A3D` | **7.98:1** (≥4.5 ✅) | `#B14A00` | **4.81:1** (≥4.5 ✅) |
| Accent-secondary (pass-teal) | `#37B6C4` | **7.71:1** (≥4.5 ✅) | `#095D63` | **6.72:1** (≥4.5 ✅) |

All six text pairs clear the 4.5:1 body-text floor (several comfortably — that's a floor, not a target). Accent is used for large text/UI/CTAs at minimum, so the 3:1 large-text bar is moot; it's held to the stricter 4.5:1 bar anyway since it also carries small mono labels.

Rationale for the palette itself: amber (not violet/cyan) as primary accent reads as a **status-LED/signal color**, not a "glow" — it's applied only to thin flat geometry (traces, node rings, active nav tick), never behind blur. Teal is reserved strictly for "pass/200/healthy" states, amber for brand/CTA/active — so color also carries semantic meaning (pass vs. identity), which none of the six references do. Both themes respect `prefers-color-scheme` with a manual toggle override stored in `localStorage`.

### Type

Three roles, self-hosted via `next/font` (zero render-blocking external requests):

- **Display — Space Grotesk.** Slightly mechanical, single-story, flat-terminal letterforms — reads engineered, not humanist. Used with restraint: hero name, section titles only. Weights 500/700 only.
- **Body — IBM Plex Sans.** Chosen because it was designed by IBM specifically for technical/engineering product communication — a considered fit for a protocol-testing portfolio, not a reflex pick. Weights 400/600.
- **Mono — IBM Plex Mono.** Same type family as body (cohesive, not the Inter+JetBrains reflex pairing) but given real structural weight here, not just code blocks: nav items, dates, stack chips, coordinate/status annotations, all set in mono with wide tracking to read like schematic callouts.

None of the six references use a monospace face structurally (all lean fully sans) — that's the deliberate point of difference.

Modular scale, ratio 1.2, base 16px = step 0:

| Step | rem | px | Role | Weight | Tracking | Line-height | Fluid (desktop→mobile) |
|---|---|---|---|---|---|---|---|
| −2 | 0.694rem | 11.1px | micro / eyebrow labels (mono) | 500 | +0.12em | 1.4 | fixed |
| −1 | 0.833rem | 13.3px | caption / meta (mono) | 400–500 | +0.08em | 1.4 | fixed |
| 0 | 1rem | 16px | body base (sans) | 400 | 0 | 1.6 | fixed |
| 1 | 1.2rem | 19.2px | lead paragraph (sans) | 400 | 0 | 1.6 | fixed |
| 2 | 1.44rem | 23px | card title / H4 (display) | 500 | −0.01em | 1.3 | fixed |
| 3 | 1.728rem | 27.6px | H3 / section subhead | 500 | −0.01em | 1.25 | `clamp(1.5rem, 1.3rem + 0.9vw, 1.728rem)` |
| 4 | 2.074rem | 33.2px | H2 / section title | 600 | −0.015em | 1.2 | `clamp(1.75rem, 1.4rem + 1.6vw, 2.074rem)` |
| 5 | 2.488rem | 39.8px | H1 secondary / stat display | 700 | −0.02em | 1.15 | `clamp(2rem, 1.5rem + 2.3vw, 2.488rem)` |
| 6 | 2.986rem | 47.8px | display small (About/Contact H1) | 700 | −0.02em | 1.1 | `clamp(2.25rem, 1.6rem + 3vw, 2.986rem)` |
| 7 | 3.583rem | 57.3px | display hero H1 | 700 | −0.02em | 1.05 | `clamp(2.5rem, 1.7rem + 4vw, 3.583rem)` |

### Space & radius

8px base spacing scale: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128` (px), exposed as `--space-0_5` … `--space-16`.

Radius — deliberately mostly sharp, rejecting the rounded-pill habit all six references share:
- `--radius-none: 0` — panels, section containers, primary buttons
- `--radius-sm: 2px` — inputs, tags
- `--radius-md: 4px` — cards
- `--radius-lg: 8px` — modals/sheets
- `--radius-full: 999px` — reserved *only* for status dots/badges (pass/fail, uptime), so a pill reads as "state," never as generic chrome

### Motion

| Token | Duration | Easing | Named curve | Use |
|---|---|---|---|---|
| Fast | 120ms | `cubic-bezier(.4,0,.2,1)` | **signal** | hover/focus state toggles |
| Medium | 320ms | `cubic-bezier(.16,1,.3,1)` | **trace** | scroll reveals, panel transitions |
| Slow | 2800ms | `cubic-bezier(.45,0,.55,1)` | **carrier** | ambient loops (idle packet pulse) — never on content, only the 3D scene |

### Grid

Breakpoints: `375, 640, 768, 1024, 1280, 1536, 1920`. Max content width `1200px`. Gutters: `20px` mobile, `32px` tablet (≥768), `64px` desktop (≥1280).

---

## 2.3 Signature: DNS Resolution Trace

The 3D moment: a small R3F scene rendering the actual shape of a DNS lookup as geometry — four or five node markers (Client → Recursive Resolver → Root → TLD → Authoritative NS) connected by thin schematic line segments in 3D space, gently parallaxing with the cursor. On load, a single glowing pulse (amber) travels the path once, settles at the final node, and prints a small `200 OK` / TTL annotation in mono type next to it — then goes still except for a slow, low-amplitude ambient drift (the "carrier" motion token). Hovering a node reveals its protocol role as a tooltip in mono type.

**Why this fits specifically:** this is literally what the DNS PIVOT line on the resume is — a protocol-stack migration and validation project — turned into geometry instead of prose. It is not a generic "3D card tilt" or "floating shapes" effect; it only makes sense because of this résumé.

**Degraded fallback:** `prefers-reduced-motion: reduce`, no-WebGL, and `navigator.hardwareConcurrency` below a low-end threshold all render the same static SVG of the identical trace — nodes and lines in their resolved end-state, pulse frozen at the final node with the `200 OK` label already printed. Same information, zero motion, not a "slower" version of the animation. Canvas is `aria-hidden`; the resolved facts (role, DNS/TCP-IP expertise) are also present as real text nearby, so nothing meaningful lives only in the 3D layer.

---

## MCP usage log

| Server | Phase used | What for |
|---|---|---|
| Playwright MCP | Phase 1 | Navigated and screenshotted all 6 references + 2 component refs at 1440/375, forced mid-scroll captures to reveal scroll-triggered content on harshbanka.tech / mdkhalidmahmud.com. |
| context7 | Phase 3 (pending) | Will pull current Next.js App Router, R3F/drei, Framer Motion, Tailwind, shadcn/ui docs before writing any code against them. |
| shadcn MCP | Phase 3 (pending) | Base primitives only: button, card, dialog, sheet, tabs, badge, tooltip, form, sonner — re-tokenized to the palette/type above. |
| magic (21st-dev) | Phase 3 (pending) | Composed hero/bento/timeline blocks as structural starting points, restyled fully to these tokens — never shipped as-is. |
| aceternityui-mcp | Phase 3 (pending) | Max 3–4 motion pieces (candidates: spotlight → retextured as the crosshair/reticle hover state; 3D card effect → case-study cards). |
| UI UX MAX | Phase 5 (pending) | Critique pass on finished sections. |

---

## 2.4 Self-critique — where this could read as templated

1. **A vertical timeline with connected dots is still, structurally, the same shape all six references use for Experience**, no matter how it's skinned. *Change made:* Experience is reframed as a horizontal **route** — each job is a "hop" with mono-annotated metadata (dates as latency-style stamps, achievements as resolved status codes) — rather than a vertical card stack, so the schematic motif is load-bearing here, not a paint job on the genre-standard timeline.
2. **A monospace-forward technical aesthetic risks becoming "yet another terminal-hacker portfolio"** — arguably a more worn genre than the neon-glow one identified in REFERENCES.md, it just didn't happen to appear in these six samples. *Change made:* mono is confined to labels/data/annotations and never used for the display face or full paragraphs; there's no fake terminal chrome, no blinking `>` prompt, no window-control dots — the differentiator is blueprint/schematic framing (crosshairs, coordinate labels, dashed guides), not a CLI skin.
3. **Amber-on-dark could slide toward the "terracotta on warm neutral" direction the brief also warns against** if handled loosely. *Change made:* amber is confined to thin flat geometry (traces, active states, node rings) and never appears against a warm/cream surface or inside soft/organic shapes — it's paired exclusively with cool dark or cool light neutrals so it reads as a signal/status color, not an editorial warm accent.

---

**Stopping here per the working agreement — waiting for approval before Phase 3 (code).**
