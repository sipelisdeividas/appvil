import { fetchProjects } from "@/shared/utils/fetchProjects";
import { ContactSection } from "./_components/conctact-section";
import { ScrollableHero } from "./_components/scrollable-hero";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { unstable_noStore } from "next/cache";

export default async function LandingPage() {
  unstable_noStore();
  const { projects } = await fetchProjects();
  return (
    <>
      <HeroParallax projects={projects} />
      <ScrollableHero />
      <ContactSection />
    </>
  );
}
