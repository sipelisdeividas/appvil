import { unstable_noStore } from "next/cache";
import { fetchProjects } from "@/lib/shared/fetchProjects";
import { ProjectsBreadcrumb } from "./_components/projects-breadcrumb";
import { ProjectsCard } from "./_components/projects-card";
import initTranslations from "@/app/i18n";

const i18mNamespaces = ["common", "page-meta"];

export default async function ProjectsPage({ params: { locale } }) {
  unstable_noStore();
  const { projects } = await fetchProjects();
  const { t, resources } = await initTranslations(locale, i18mNamespaces);

  return (
    <div className="container mx-auto w-full items-center justify-center antialiased overflow-hidden drop-shadow-sm pt-24 md:pt-36">
      <ProjectsBreadcrumb locale={locale} />
      <div className="max-w-2xl text-start ">
        <h1 className="text-3xl uppercase font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
          {t("our_works")}
        </h1>
      </div>
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
  );
}

export async function generateMetadata({ params: { locale } }) {
  const { t } = await initTranslations(locale, i18mNamespaces);

  return {
    title: t("page-meta:projects_meta"),
  };
}
