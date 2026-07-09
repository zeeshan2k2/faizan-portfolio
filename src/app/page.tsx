import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { SelectedWork } from "@/components/sections/SelectedWork";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Experience />
      <SelectedWork />
    </SiteShell>
  );
}
