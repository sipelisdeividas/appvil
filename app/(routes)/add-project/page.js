import { unstable_noStore } from "next/cache";
import { AddProjectForm } from "./_components/add-project-form";
import { AddProjectBreadcrumb } from "./_components/add-project-breadcrumb";

export default function AddProjectPage() {
  unstable_noStore();
  return (
    <div className="container mx-auto w-full items-center justify-center antialiased overflow-hidden drop-shadow-sm pt-24 md:pt-36">
      <AddProjectBreadcrumb />
      <div className="max-w-2xl text-start mb-8">
        <h1 className="text-3xl uppercase font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
          Projekto Pridėjimas
        </h1>
      </div>
      <div className="space-y-8">
        <AddProjectForm />
      </div>
    </div>
  );
}

export const metadat = {
  title: "Projekto Pridėjimas",
};
