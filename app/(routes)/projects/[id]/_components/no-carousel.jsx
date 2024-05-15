import Image from "next/image";

export function NoCarousel({ name, banner, description }) {
  return (
    <div className="flex items-center">
      <div className="flex justify-between">
        <div className="flex flex-col mb-8 sm:mb-0 w-2/4 lg:w-2/6">
          <Image
            className="rounded drop-shadow-md"
            width="400"
            height="340"
            src={banner ?? ""}
            alt={name ?? ""}
          />
        </div>
        <div className="w-2/5 lg:w-2/3">
          <h1 className="font-bebas-neue uppercase text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-black leading-none dark:text-white text-gray-800 mb-4">
            {name}
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 lg:w-1/2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
