import { unstable_noStore } from "next/cache";
import { fetchProjects } from "@/shared/utils/fetchProjects";
import { ScrollableHero } from "./_components/scrollable-hero";
import { ContactSection } from "./_components/contact-section";
import { HeroParallax } from "@/components/ui/hero-parallax";

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
