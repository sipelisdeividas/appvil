import { unstable_noStore } from "next/cache";
import { fetchProjects } from "@/lib/shared/fetchProjects";
import { ProjectsBreadcrumb } from "./_components/projects-breadcrumb";
import { ProjectsCard } from "./_components/projects-card";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/translations-provider";
import { ProjectsHeader } from "./_components/projects-header";

const i18mNamespaces = ["common", "page-meta"];

export default async function ProjectsPage({ params: { locale } }) {
  unstable_noStore();
  const { projects } = await fetchProjects();
  const { t, resources } = await initTranslations(locale, i18mNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18mNamespaces}
    >
      <div className="container mx-auto w-full items-center justify-center antialiased overflow-hidden drop-shadow-sm pt-24 md:pt-36">
        <ProjectsBreadcrumb locale={locale} />
        <ProjectsHeader />
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2">
          {projects.map((project) => (
            <div key={project._id}>
              <ProjectsCard
                name={project.name}
                banner={project.banner}
                slug={project.slug}
                locale={locale}
              />
            </div>
          ))}
        </div>
      </div>
    </TranslationsProvider>
  );
}

export async function generateMetadata({ params: { locale } }) {
  const { t } = await initTranslations(locale, i18mNamespaces);

  return {
    title: t("page-meta:projects_meta"),
  };
}
