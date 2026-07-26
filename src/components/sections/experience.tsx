import { experience } from "@/content/experience";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parseMonth(value: string): number | null {
  if (value === "Present") return null;
  const [monthStr, yearStr] = value.split(" ");
  const monthIndex = MONTHS.indexOf(monthStr);
  if (monthIndex === -1) return null;
  return parseInt(yearStr, 10) * 12 + monthIndex;
}

function duration(start: string, end: string): string {
  const startVal = parseMonth(start);
  const now = new Date();
  const endVal = end === "Present" ? now.getFullYear() * 12 + now.getMonth() : parseMonth(end);
  if (startVal === null || endVal === null) return "";
  const months = endVal - startVal;
  const years = Math.floor(months / 12);
  const remMonths = months % 12;
  const parts = [];
  if (years > 0) parts.push(`${years}y`);
  if (remMonths > 0) parts.push(`${remMonths}mo`);
  return parts.join(" ") || "<1mo";
}

export function Experience() {
  return (
    <section id="experience" className="border-b border-border" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex items-center gap-3 font-mono text-[0.694rem] tracking-[0.1em] text-muted-foreground uppercase">
          <span className="text-primary">fig.03</span>
          <span>experience — traceroute</span>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        <h2
          id="experience-heading"
          className="mb-12 font-[family-name:var(--font-display)] text-[length:var(--text-step-6)] leading-[1.1] font-bold tracking-[-0.02em]"
        >
          Experience
        </h2>

        <ol className="relative border-l border-border pl-8 md:pl-10">
          {experience.map((job, i) => (
            <li key={`${job.company}-${job.start}`} className="relative pb-14 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-1 -left-8 flex h-4 w-4 -translate-x-1/2 items-center justify-center border border-primary bg-background md:-left-10"
              >
                <span className="h-1.5 w-1.5 bg-primary" />
              </span>

              <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-[0.694rem] tracking-[0.08em] text-muted-foreground uppercase sm:text-[0.833rem]">
                <span className="text-primary">hop {String(i + 1).padStart(2, "0")}</span>
                <span>
                  {job.start} — {job.end}
                </span>
                <span className="text-accent-pass">{duration(job.start, job.end)}</span>
              </div>

              <h3 className="mb-1 font-[family-name:var(--font-display)] text-[length:var(--text-step-3)] font-medium tracking-[-0.01em]">
                {job.role}
              </h3>
              <p className="mb-4 text-[length:var(--text-step-0)] text-muted-foreground">
                {job.company} · {job.location}
              </p>

              <ul className="max-w-3xl space-y-2.5 text-[length:var(--text-step-0)] leading-relaxed">
                {job.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.6em] h-1 w-1 shrink-0 bg-muted-foreground" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
