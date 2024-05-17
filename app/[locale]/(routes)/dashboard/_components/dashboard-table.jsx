import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableItem } from "./table-item";
import { fetchProjects } from "@/lib/shared/fetchProjects";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/translations-provider";

export async function DashboardTable({ locale }) {
  const { projects } = await fetchProjects();
  const { t, resources } = await initTranslations(locale, ["dashboard"]);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces="dashboard"
    >
      <Table>
        {projects.length === 0 && (
          <TableCaption>{t("dashboard:table_empty")}.</TableCaption>
        )}

        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>{t("dashboard:table_title")}</TableHead>
            <TableHead>{t("dashboard:table_logo")}</TableHead>
            <TableHead className="text-right">
              {t("dashboard:table_actions")}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableItem
              key={project._id}
              _id={project._id}
              name={project.name}
              banner={project.banner}
              slug={project.slug}
              locale={locale}
            />
          ))}
        </TableBody>
      </Table>
    </TranslationsProvider>
  );
}
