import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { profile } from "@/content/profile";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-4 px-5 py-8 font-mono text-[0.694rem] tracking-[0.06em] text-muted-foreground uppercase sm:flex-row md:px-8">
        <p>
          © {year} {profile.name} · built with Next.js, R3F &amp; Tailwind
        </p>
        <Link
          href="#top"
          className="inline-flex items-center gap-2 text-foreground hover:text-primary focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2"
        >
          Back to top
          <ArrowUp className="size-3.5" />
        </Link>
      </div>
    </footer>
  );
}
