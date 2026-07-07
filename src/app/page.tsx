import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Experience />
    </SiteShell>
  );
}
