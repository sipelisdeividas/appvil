import { unstable_noStore } from "next/cache";
import { DashboardBreadcrumb } from "./_components/dashboard-breadcrumb";
import { DashboardHeader } from "./_components/dashboard-header";
import { DashboardTable } from "./_components/dashboard-table";
import initTranslations from "@/app/i18n";

const i18mNamespaces = ["common", "dashboard", "page-meta"];

export default async function DashboardPage({ params: { locale } }) {
  unstable_noStore();
  const { t, resources } = await initTranslations(locale, i18mNamespaces);
  return (
    <div className="container mx-auto w-full items-center justify-center antialiased overflow-hidden drop-shadow-sm pt-24 md:pt-36">
      <DashboardBreadcrumb locale={locale} />
      <DashboardHeader locale={locale} />
      <DashboardTable locale={locale} />
    </div>
  );
}

export async function generateMetadata({ params: { locale } }) {
  const { t } = await initTranslations(locale, i18mNamespaces);

  return {
    title: t("page-meta:dashboard_meta"),
  };
}
