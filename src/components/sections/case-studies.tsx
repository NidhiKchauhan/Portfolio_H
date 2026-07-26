import { Network, GitBranch, Gauge, Radar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/content/case-studies";

const ICONS = [Network, GitBranch, Gauge, Radar];

export function CaseStudies() {
  return (
    <section id="case-studies" className="border-b border-border" aria-labelledby="case-studies-heading">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex items-center gap-3 font-mono text-[0.694rem] tracking-[0.1em] text-muted-foreground uppercase">
          <span className="text-primary">fig.04</span>
          <span>case studies</span>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        <h2
          id="case-studies-heading"
          className="mb-4 font-[family-name:var(--font-display)] text-[length:var(--text-step-6)] leading-[1.1] font-bold tracking-[-0.02em]"
        >
          Case studies
        </h2>
        <p className="mb-12 max-w-2xl text-[length:var(--text-step-1)] text-muted-foreground">
          Not side projects — production initiatives pulled straight from the work above, each one a
          protocol, a load, or a failure mode I had to prove correct.
        </p>

        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {caseStudies.map((study, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <article key={study.slug} className="flex flex-col bg-background p-6 sm:p-8">
                <div
                  aria-hidden="true"
                  className="bg-grid-schematic mb-6 flex h-32 items-center justify-center border border-border"
                >
                  <Icon className="size-8 text-primary" strokeWidth={1.25} />
                </div>

                <div className="mb-3 flex items-center justify-between font-mono text-[0.694rem] tracking-[0.08em] text-muted-foreground uppercase">
                  <span>{study.company}</span>
                  <span className="text-accent-pass">case {String(i + 1).padStart(2, "0")}</span>
                </div>

                <h3 className="mb-2 font-[family-name:var(--font-display)] text-[length:var(--text-step-3)] font-medium tracking-[-0.01em]">
                  {study.name}
                </h3>
                <p className="mb-5 text-[length:var(--text-step-0)] text-muted-foreground">{study.pitch}</p>

                <dl className="mb-5 space-y-3 text-[length:var(--text-step-0)]">
                  <div>
                    <dt className="font-mono text-[0.694rem] tracking-[0.08em] text-primary uppercase">
                      Problem
                    </dt>
                    <dd className="mt-1 text-muted-foreground">{study.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.694rem] tracking-[0.08em] text-primary uppercase">
                      Approach
                    </dt>
                    <dd className="mt-1 text-muted-foreground">{study.approach}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.694rem] tracking-[0.08em] text-accent-pass uppercase">
                      Outcome
                    </dt>
                    <dd className="mt-1 font-medium text-foreground">{study.outcome}</dd>
                  </div>
                </dl>

                <div className="mt-auto flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="rounded-none border-border font-mono text-[0.694rem] tracking-[0.04em] text-muted-foreground uppercase"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
