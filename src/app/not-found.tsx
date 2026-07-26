import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="bg-grid-schematic flex min-h-screen flex-1 flex-col items-center justify-center px-5 text-center">
      <p className="mb-4 font-mono text-[0.833rem] tracking-[0.1em] text-primary uppercase">status 404</p>
      <h1 className="mb-4 font-[family-name:var(--font-display)] text-[length:var(--text-step-6)] font-bold tracking-[-0.02em]">
        Route not resolved
      </h1>
      <p className="mb-10 max-w-md text-[length:var(--text-step-1)] text-muted-foreground">
        This query returned NXDOMAIN. The page you&apos;re looking for doesn&apos;t exist at this address.
      </p>
      <Button className="rounded-none font-mono text-sm tracking-[0.04em] uppercase" render={<Link href="/" />} nativeButton={false}>
        Back to home
      </Button>
    </main>
  );
}
