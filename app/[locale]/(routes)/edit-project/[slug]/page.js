import { unstable_noStore } from "next/cache";
import { fetchProject } from "@/lib/shared/fetchProject";
import { EditProjectBreadcrumb } from "./_components/edit-project-breadcrumb";
import { EditProjectForm } from "./_components/edit-project-form";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/translations-provider";

const i18mNamespaces = ["common", "adding", "page-meta"];

export default async function EditProjectPage({ params }) {
  unstable_noStore();
  const { slug, locale } = params;
  const { t, resources } = await initTranslations(locale, i18mNamespaces);
  const { project } = await fetchProject(slug);
  const {
    name,
    banner,
    description,
    firstImage,
    secondImage,
    thirdImage,
    fourthImage,
  } = project;

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18mNamespaces}
    >
      <div className="container mx-auto w-full items-center justify-center antialiased overflow-hidden drop-shadow-sm pt-24 md:pt-36">
        <EditProjectBreadcrumb locale={locale} />
        <div className="max-w-2xl text-start mb-8">
          <h1 className="text-3xl uppercase font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            {t("common:edit_project")}
          </h1>
        </div>
        <div className="space-y-8">
          <EditProjectForm
            name={name}
            banner={banner}
            description={description}
            firstImage={firstImage}
            secondImage={secondImage}
            thirdImage={thirdImage}
            fourthImage={fourthImage}
          />
        </div>
      </div>
    </TranslationsProvider>
  );
}

export async function generateMetadata({ params: { locale } }) {
  const { t } = await initTranslations(locale, i18mNamespaces);

  return {
    title: t("page-meta:edit_project_meta"),
  };
}
