import { unstable_noStore } from "next/cache";
import { fetchProject } from "@/lib/shared/fetchProject";
import { EditProjectBreadcrumb } from "./_components/edit-project-breadcrumb";
import { EditProjectForm } from "./_components/edit-project-form";

export default async function AddProjectPage({ params }) {
  unstable_noStore();
  const { slug } = params;
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
    <div className="container mx-auto w-full items-center justify-center antialiased overflow-hidden drop-shadow-sm pt-24 md:pt-36">
      <EditProjectBreadcrumb />
      <div className="max-w-2xl text-start mb-8">
        <h1 className="text-3xl uppercase font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
          Projekto redagavimas
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
  );
}

export const metadata = {
  title: "Projekto Redagavimas",
};
