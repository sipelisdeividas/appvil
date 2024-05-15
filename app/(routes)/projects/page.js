import { unstable_noStore } from "next/cache";
import { fetchProjects } from "@/shared/utils/fetchProjects";
import { Separator } from "@/components/ui/separator";
import { ProjectsBreadcrumb } from "./_components/projects-breadcrumb";
import { ProjectsCard } from "./_components/projects-card";

export default async function ProjectsPage() {
  unstable_noStore();
  const { projects } = await fetchProjects();

  return (
    <div className="container mx-auto w-full items-center justify-center antialiased overflow-hidden drop-shadow-sm pt-24 md:pt-36">
      <ProjectsBreadcrumb />
      <div className="max-w-2xl text-start mb-8">
        <h1 className="text-3xl uppercase font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
          Atlikti darbai
        </h1>
      </div>
      <Separator />
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project._id}>
            <ProjectsCard
              _id={project._id}
              name={project.name}
              banner={project.banner}
              description={project.description}
              firstImage={project.firstImage}
              secondImage={project.secondImage}
              thirdImage={project.thirdImage}
              fourthImage={project.fourthImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export const metadata = {
  title: "Atlikti Darbai",
};
