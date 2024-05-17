import initTranslations from "@/app/i18n";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export async function DashboardHeader({ locale }) {
  const { t } = await initTranslations(locale, ["common"]);
  return (
    <div className="flex justify-between mb-8">
      <h1 className="text-3xl uppercase font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
        {t("common:dashboard")}
      </h1>
      <Button className="mr-3.5" variant="ghost" size="sm" asChild>
        <Link href="/add-project" aria-label="Pridėkite naują projektą">
          <Plus />
        </Link>
      </Button>
    </div>
  );
}
