# REFERENCES.md — Phase 1 Study

Studied live with Playwright MCP at 1440px (full-page) and 375px, with mid-scroll captures where initial full-page screenshots under-rendered scroll-triggered content. Screenshots saved to `/refs`.

---

## Component references (vocabulary, not sites to imitate wholesale)

### 1. `21st.dev` — Hero Block (shadcn/ui)
A generic "portfolio hero" template: dotted-grid background, centered circular avatar placeholder, giant bold black sans headline ("Full Stack Developer"), gray subhead, two pill CTAs ("Get in Touch" / "View Projects"). Zero color beyond black/white/gray.
**Vocabulary takeaway:** this is the *default* every AI-scaffolded portfolio starts from — dead center composition, generic role-as-headline, grid-paper background as the only texture. Useful as a picture of exactly what to avoid structurally (center-everything, no asymmetry, no specificity).

### 2. `21st.dev` — 3D Hero Section Boxes
Black background, oversized bold white slab-serif-adjacent sans ("We're Building Cool Experiences"), one cyan accent on a single icon, small floating particle dots implying a 3D/WebGL layer below the fold, pill nav, outlined + filled CTA pair.
**Vocabulary takeaway:** confirms the dark-canvas-plus-floating-particles pattern as an easy 3D "tell" — legible but shallow (motion implied, not demonstrated, in the static capture). Good reference for restrained micro-accent color use against black.

---

## Site references

### 3. aakash-sharma.netlify.app
- **Structure:** Classic one-pager: hero → About → Technologies grid → Services (empty in practice) → Projects (empty in practice) → Contact form → footer. Anchor-nav across all sections, no breathing room — sections touch edge to edge with flat color-block backgrounds alternating white/gray.
- **Type:** System sans (looks like default Bootstrap/Inter stack) for body, a display cursive/handwriting font used only for the logotype "‹aakash sharma›" — an odd, uncommitted flourish that appears nowhere else on the page.
- **Color:** Sky-blue gradient hero (#4FC3F7 → #B3E5FC roughly), white cloud SVG silhouettes, blue link/button accent (#3B5FE0-ish), otherwise white/gray neutral sections. One accent color total.
- **Motion:** A blinking text cursor after the rotating role title; nothing else appears to animate — this is a static, JS-light page.
- **Depth:** None. Everything is flat vector illustration and solid fills — no shadows, no layering, no parallax.
- **Best thing:** The flat illustration in the hero (character at a desk) gives immediate, legible personality with zero performance cost.
- **Worst thing:** Services and Projects sections render structurally empty (headers with no content beneath) — a half-finished build shipped as done. Also a 20-icon "logo soup" skill grid with no grouping or hierarchy.

### 4. gutierrez-cv.vercel.app
- **Structure:** Hero (name + role + location badges) → Toolbox (filterable pill categories) → Experience (colored logo-block cards in a vertical list) → Education → GitHub Repos (live-fetched cards) → About Me (closing, not opening) → footer. Notably puts About *last*, after proof, not first.
- **Type:** Heavy rounded sans, bold and playful; body copy uses inline color-highlighted keywords (yellow/green marker-style highlights on words like "recognition," "efforts," "skills") — a distinctive, editorial-highlighter technique used for hierarchy instead of size/weight changes.
- **Color:** White base, saturated multi-color accents (purple, orange, teal, yellow) applied via pill badges, decorative scattered shapes (stars, blobs, dotted grids) rather than a restrained 2-accent system — closer to 5–6 accents in simultaneous play.
- **Motion:** Scattered decorative shapes are likely floating/parallax (their asymmetric placement around empty space strongly implies idle animation); marker-highlight text may animate in on scroll.
- **Depth:** Faux-collage/cutout paper depth — circular photo with a soft drop shadow and offset decorative stickers around it, not true 3D, but reads dimensional through layering and shadow.
- **Best thing:** The inline highlighter-text technique for emphasis is genuinely distinctive and not seen on the other five references — a real signature device.
- **Worst thing:** Too many simultaneous accent colors and decorative doodles compete with the content; "About Me" as the very last section buries the most human part of the page beneath GitHub repo cards.

### 5. harshbanka.tech
- **Structure:** Fixed pill nav floating at top → hero (name, role, contact, CTA) → very long dead space (~2,400px) before an "Experience" timeline of glass-panel cards on a connecting vertical line with dot markers → skills grid (Programming Languages / GenAI & Agent Tools / Dev & Cloud Tools).
- **Type:** Bold geometric sans headline, cyan for the name, muted violet/gray for subtext and section titles — restrained two-tone type coloring.
- **Color:** Near-black (#0a0a0f-ish) base throughout, soft purple/blue radial glow blooms behind the hero, cyan (#22d3ee-ish) as the single strong accent, violet (#8b5cf6-ish) as secondary. Two accents, disciplined.
- **Motion:** The huge dead-space gaps between hero and timeline strongly indicate scroll-triggered reveals (content fades/slides in only once scrolled into view — my static capture rendered it blank until I forced a scroll position). This is a real risk: on a fast scroll, a visitor could hit long stretches of nothing.
- **Depth:** Glassmorphic cards (translucent panel, subtle border, blur) floating over the glow — soft, not true dimensional depth.
- **Best thing:** The two-accent restraint (cyan + violet only) against near-black is genuinely clean and legible — proof that "techie dark" doesn't need to be busy.
- **Worst thing:** The scroll pacing is a real usability problem — ~2,400px of near-empty viewport between hero and first content is exactly the "animation delays reading" failure mode the brief warns against.

### 6. mdkhalidmahmud.com
- **Structure:** Sticky nav with search (⌘K-style) → hero (greeting, name, rotating role, circular photo, social row) → similarly long dead space → Experience as bordered cards with chevron-bulleted achievements and violet date ranges → Skills → Certificates → Contact → footer.
- **Type:** Bold rounded sans for name/headlines, two-tone gradient text (white → blue → violet) spanning "MD Khalid Mahmud" — a gradient-text treatment none of the other references use as boldly.
- **Color:** Deep navy-to-violet gradient background (#0f172a-ish → #4c1d95-ish), blue/violet duotone accents, white circular photo frame as the one high-contrast element breaking the dark field.
- **Motion:** Same pattern as #5 — large vertical gaps imply scroll-triggered fade/slide reveals for each section.
- **Depth:** A faint decorative line-art illustration bleeds through behind the hero at low opacity — a nice subtle depth cue without spending on true 3D.
- **Best thing:** The circular photo with a solid white frame is the single highest-contrast element on the page and immediately anchors the eye — effective use of one deliberate contrast break in an otherwise low-contrast dark scene.
- **Worst thing:** A real responsive bug — at 375px, body copy overflows its container and gets clipped at both edges ("omputer Science graduate..." with the leading "C" cut off, and words truncated on the right). A shipped, uncaught horizontal-overflow bug.

---

## Synthesis

**Common across all six (the genre convention):**
- A hero that is: name → role line → one-line pitch → 1–2 CTA pills. Every single reference does this, in this order.
- A circular or centered avatar as the dominant hero visual (photo, illustration, or placeholder circle) — 4 of 6 use a literal circle.
- Experience/timeline as bordered or glass cards in a vertical list, most recent first.
- A skills section as a grid or pill cluster, grouped by category in the better ones (gutierrez, harshbanka, mdkhalid), ungrouped logo-soup in the weaker one (aakash).
- Sticky top nav with anchor links to page sections.

**Load-bearing vs. habit:**
- *Load-bearing* (keep): name/role/pitch/CTA hero order — it's load-bearing because it answers "who is this and why should I keep scrolling" in under two seconds, which is the actual job of a portfolio hero. Grouped skills-by-category (not logo soup) is load-bearing — it communicates how someone thinks, not just what logos they've seen. Vertical timeline for experience is load-bearing — chronology is real information here.
- *Just habit* (free to break): the circular avatar. Nothing about a portfolio requires a circle; it's cargo-culted from social-media profile pictures. Sticky pill-shaped nav is habit, not requirement. Gradient gray-to-violet text on the name is pure decoration with no informational job.

**Where they converge into sameness (the trap):**
Two of the four site references (harshbanka.tech, mdkhalidmahmud.com) — plus the second component reference — independently landed on: near-black background, one violet/cyan accent pair, soft radial glow, glassmorphic cards, and long scroll-triggered reveal gaps. This is precisely dialect (a) the brief warns against — "near-black background with one acid-green or electric-violet accent and a glow." It is the current default aesthetic for any AI-scaffolded "techie developer portfolio," to the point that two independently-built personal sites produced nearly the same lighting design. **I will not propose this back.** Whatever direction I recommend in Phase 2 has to earn its dark-mode-ness with something more specific than glow-behind-glass, or it should commit to a different techie dialect entirely (the brief lists CRT phosphor, CAD/blueprint, oscilloscope, terminal, wireframe topography, circuit substrate, spacecraft telemetry, brutalist IDE, print-shop schematic — none of the six references touch any of these more specific dialects).

**The gap — what none of these six do:**
None of the six treat the *subject matter of the work itself* as a design material. Every one of them is generic "developer portfolio" skin — the same hero/timeline/skills shape would work unchanged for a backend engineer, a mobile dev, or a data scientist. Nothing in these six sites is shaped by what its owner actually builds. Hardik's actual domain is protocol-level testing infrastructure: DNS/TCP-IP stack validation, self-healing test frameworks that detect and repair themselves, distributed load simulation at 2x production traffic, CI/CD quality gates. That is a domain with its own native visual language — signal traces, pass/fail state, packet flow, oscilloscope-style waveforms, terminal test-runner output, network topology — that no developer-portfolio template reaches for because most developers aren't in this specific niche. My site's opening should look like it was built by someone who tests distributed systems for a living, not by someone who skinned a generic hero-block-shadcnui component. That's the differentiation this brief is actually asking for, and it's the one thing none of the six references can hand me — it has to come from the resume, not from genre convention.
