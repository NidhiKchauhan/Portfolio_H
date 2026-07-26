import { profile } from "@/content/profile";
import { AboutImage } from "@/components/sections/about-image";

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-[560px] overflow-hidden border-b border-border md:min-h-[620px]"
      aria-labelledby="about-heading"
    >
      <AboutImage />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-background from-30% via-background/50 via-60% to-transparent md:from-background md:from-20% md:via-background/40 md:via-50%"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex items-center gap-3 font-mono text-[0.694rem] tracking-[0.1em] text-muted-foreground uppercase">
          <span className="text-primary">fig.02</span>
          <span>about</span>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        <h2
          id="about-heading"
          className="mb-6 font-[family-name:var(--font-display)] text-[length:var(--text-step-6)] leading-[1.1] font-bold tracking-[-0.02em]"
        >
          About
        </h2>
        <div className="max-w-xl space-y-5 text-[length:var(--text-step-1)] leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a Software Developer in Test based in {profile.location}, seven-plus years into
            building the automation that stands between a distributed system and a customer finding
            out it&apos;s broken.
          </p>
          <p>
            Most of that time has been spent close to the protocol layer — DNS, TCP/IP, routing — where
            bugs are quieter and more expensive. I architect agentic, self-healing test frameworks that
            repair their own selectors when a UI or API contract shifts, and I bring AI-assisted test
            generation into the workflow deliberately, only where it actually removes toil rather than
            adding a layer of guesswork.
          </p>
          <p>
            Day to day that means load-testing APIs at multiples of production traffic, hardening CI/CD
            quality gates, and carrying on-call for systems that are supposed to stay up 99.9% of the
            time — and making sure they do.
          </p>
        </div>

        <p className="mt-10 font-mono text-[0.694rem] tracking-[0.08em] text-muted-foreground/70 uppercase">
          fig.02a — decorative
        </p>
      </div>
    </section>
  );
}
