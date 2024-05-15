import Image from "next/image";
import { ProjectCarousel } from "./project-carousel";

export function CarouselImages({ name, banner, description, firstImage }) {
  return (
    <div className="items-center">
      <div className="flex flex-col justify-between sm:flex-row relative">
        <div className="sm:w-2/5 lg:w-2/4 flex flex-col relative z-20 mb-8 sm:mb-0">
          <h1 className="font-bebas-neue uppercase text-3xl sm:text-3xl font-black flex flex-col leading-none dark:text-white text-gray-800 mb-6">
            {name}
          </h1>
          <Image
            className="rounded drop-shadow-md"
            width="240"
            height="240"
            src={banner ?? ""}
            alt={name ?? ""}
          />
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 pt-10">
            {description}
          </p>
        </div>
        <ProjectCarousel firstImage={firstImage ?? ""} />
      </div>
    </div>
  );
}
