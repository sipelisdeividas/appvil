import { unstable_noStore } from "next/cache";
import { AddProjectForm } from "./_components/add-project-form";
import { AddProjectBreadcrumb } from "./_components/add-project-breadcrumb";
import TranslationsProvider from "@/components/translations-provider";
import initTranslations from "@/app/i18n";

const i18mNamespaces = ["common", "adding"];

export default async function AddProjectPage({ params: { locale } }) {
  unstable_noStore();
  const { t, resources } = await initTranslations(locale, i18mNamespaces);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18mNamespaces}
    >
      <div className="container mx-auto w-full items-center justify-center antialiased overflow-hidden drop-shadow-sm pt-24 md:pt-36">
        <AddProjectBreadcrumb locale={locale} />
        <div className="max-w-2xl text-start mb-8">
          <h1 className="text-3xl uppercase font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            {t("common:add_project")}
          </h1>
        </div>
        <div className="space-y-8">
          <AddProjectForm />
        </div>
      </div>
    </TranslationsProvider>
  );
}

export const metadat = {
  title: "Projekto Pridėjimas",
};
