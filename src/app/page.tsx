import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { BrandCarousel } from "@/components/sections/BrandCarousel";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Experience />
      <SelectedWork />
      <Services />
      <TechStack />
      <BrandCarousel />
      <Process />
      <Contact />
      <Faq />
    </SiteShell>
  );
}
