import { unstable_noStore } from "next/cache";
import { fetchProject } from "@/shared/utils/fetchProject";
import { ProjectBreadcrumb } from "./_components/project-breadcrumb";
import { CarouselImages } from "./_components/carousel-images";
import { NoCarousel } from "./_components/no-carousel";

export default async function ProjectPage({ params }) {
  unstable_noStore();
  const { name } = params;
  const { project } = await fetchProject(name);

  return (
    <div className="container mx-auto w-full items-center justify-center antialiased pb-8 md:pb-0 pt-24 md:pt-36">
      <ProjectBreadcrumb name={project.name ?? ""} />
      {project.firstImage ? (
        <CarouselImages
          name={project.name ?? ""}
          banner={project.banner ?? ""}
          description={project.description ?? ""}
          firstImage={project.firstImage ?? ""}
        />
      ) : (
        <>
          <NoCarousel
            name={project.name ?? ""}
            banner={project.banner ?? ""}
            description={project.description ?? ""}
          />
        </>
      )}
    </div>
  );
}

// export async function generateMetadata({ params }) {
//   const { name } = params;
//   const { project } = await fetchProject(name);

//   return {
//     title: project.name,
//   };
// }
