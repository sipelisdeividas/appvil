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
import { deleteProject } from "@/shared/utils/deleteProject";

export function RemoveButton({ _id }) {
  const router = useRouter();
  const { toast } = useToast();

  const handleRemoveProject = async () => {
    try {
      await deleteProject(_id ?? "");
      router.refresh();
      toast({
        title: "Projektas pašalintas",
        description: "Projektas buvo sėkmingai pašalintas!",
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
            <AlertDialogTitle>Ar esate visiškai tikri?</AlertDialogTitle>
            <AlertDialogDescription>
              Šio veiksmo anuliuoti negalima. Tai visam laikui ištrins projektą
              ir pašalins duomenis iš mūsų serverių.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Atšaukti</AlertDialogCancel>
            <AlertDialogAction onClick={handleRemoveProject}>
              Pašalinti
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
