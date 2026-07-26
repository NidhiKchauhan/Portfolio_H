import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { skillGroups } from "@/content/skills";

export function Toolchain() {
  return (
    <section id="toolchain" className="border-b border-border" aria-labelledby="toolchain-heading">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex items-center gap-3 font-mono text-[0.694rem] tracking-[0.1em] text-muted-foreground uppercase">
          <span className="text-primary">fig.05</span>
          <span>toolchain</span>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        <h2
          id="toolchain-heading"
          className="mb-4 font-[family-name:var(--font-display)] text-[length:var(--text-step-6)] leading-[1.1] font-bold tracking-[-0.02em]"
        >
          Toolchain
        </h2>
        <p className="mb-12 max-w-2xl text-[length:var(--text-step-1)] text-muted-foreground">
          Grouped by where each tool sits in how I actually work, not by logo — proficiency runs deepest
          at the protocol and automation layers.
        </p>

        <Tabs defaultValue={skillGroups[0].category} className="gap-8">
          <TabsList className="h-auto flex-wrap justify-start gap-1 rounded-none border border-border bg-transparent p-1 group-data-horizontal/tabs:h-auto">
            {skillGroups.map((group) => (
              <TabsTrigger
                key={group.category}
                value={group.category}
                className="h-auto rounded-none px-3 py-2.5 font-mono text-[0.694rem] tracking-[0.06em] uppercase group-data-horizontal/tabs:h-auto data-active:bg-primary data-active:text-primary-foreground dark:data-active:bg-primary dark:data-active:text-primary-foreground"
              >
                {group.category}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillGroups.map((group) => (
            <TabsContent key={group.category} value={group.category} className="border border-border p-6 sm:p-8">
              <p className="mb-6 max-w-xl text-[length:var(--text-step-1)] text-muted-foreground italic">
                {group.note}
              </p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-border px-3 py-1.5 font-mono text-[0.833rem] tracking-[0.02em] text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
