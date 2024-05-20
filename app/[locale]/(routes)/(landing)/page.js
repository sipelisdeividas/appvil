import { unstable_noStore } from "next/cache";
import { fetchProjects } from "@/lib/shared/fetchProjects";
import { ScrollableHero } from "./_components/scrollable-hero";
import { ContactSection } from "./_components/contact-section";
import { HeroParallax } from "@/components/ui/hero-parallax";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/translations-provider";
import { MobileHero } from "./_components/mob-hero";

const i18mNamespaces = ["home"];

export default async function LandingPage({ params: { locale } }) {
  unstable_noStore();
  const { projects } = await fetchProjects();
  const { t, resources } = await initTranslations(locale, i18mNamespaces);
  return (
    <>
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18mNamespaces}
      >
        {/* PC screens */}
        <div className="hidden lg:block">
          <HeroParallax projects={projects} />
        </div>
        {/* Mobile screens */}
        <div className="block lg:hidden">
          <MobileHero locale={locale} />
        </div>
        <ScrollableHero locale={locale} />
        <ContactSection locale={locale} />
      </TranslationsProvider>
    </>
  );
}
