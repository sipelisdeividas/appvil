import { unstable_noStore } from "next/cache";
import { fetchProject } from "@/lib/shared/fetchProject";
import { ProjectBreadcrumb } from "./_components/project-breadcrumb";
import { ProjectImages } from "./_components/project-images";
import initTranslations from "@/app/i18n";

const i18mNamespaces = ["common"];

export default async function ProjectPage({ params }) {
  unstable_noStore();
  const { slug, locale } = params;
  const { project } = await fetchProject(slug);
  const { t, resources } = await initTranslations(locale, i18mNamespaces);

  return (
    <div className="container mx-auto w-full items-center justify-center antialiased pb-8 md:pb-0 pt-24 md:pt-36">
      <ProjectBreadcrumb name={project.name} locale={locale} />
      <section className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-0 items-start">
          <ProjectImages
            name={project.name}
            banner={project.banner}
            firstImage={project.firstImage}
            secondImage={project.secondImage}
            thirdImage={project.thirdImage}
            fourthImage={project.fourthImage}
          />
          <div>
            <h1 className="text-3xl font-bold">{project.name}</h1>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400">
              {project.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const { project } = await fetchProject(slug);

  return {
    title: project.name,
  };
}
