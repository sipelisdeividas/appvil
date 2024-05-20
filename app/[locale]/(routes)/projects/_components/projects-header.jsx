"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export function ProjectsHeader() {
  const { t } = useTranslation();
  const session = useSession();
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl uppercase font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
        {t("our_works")}
      </h1>
      {session.data && (
        <Button className="mr-3.5" variant="ghost" size="sm" asChild>
          <Link href="/add-project" aria-label="Pridėkite naują projektą">
            <Plus />
          </Link>
        </Button>
      )}
    </div>
  );
}
