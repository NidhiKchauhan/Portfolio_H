import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { CaseStudies } from "@/components/sections/case-studies";
import { Toolchain } from "@/components/sections/toolchain";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Experience />
        <CaseStudies />
        <Toolchain />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
