"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Eraser } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { deleteProject } from "@/lib/shared/deleteProject";
import { useTranslation } from "react-i18next";

export function RemoveButton({ _id }) {
  const router = useRouter();
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleRemoveProject = async () => {
    try {
      await deleteProject(_id);
      router.refresh();
      toast({
        title: t("dashboard:delete_toast_success"),
        description: t("dashboard:delete_toast_description"),
      });
    } catch (error) {
      console.error("Error removing project:", error);
    }
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" size="sm">
            <Eraser className="h-5 w-5" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("dashboard:delete_title")}</AlertDialogTitle>
            <AlertDialogDescription>
              {t("dashboard:delete_description")}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>
              {t("dashboard:delete_cancel")}
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleRemoveProject}>
              {t("dashboard:delete_submit")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
