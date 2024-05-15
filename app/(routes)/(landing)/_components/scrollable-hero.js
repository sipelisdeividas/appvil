import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function ScrollableHero() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="font-semibold text-black dark:text-white md:mb-10">
              <span className="text-xl md:text-2xl text-primary uppercase font-extrabold leading-tight tracking-tight">
                Pasižymime
              </span>{" "}
              <br />
              <span className="text-3xl md:text-5xl mt-1 uppercase font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                Mobilių Aplikacijų Kūrimu
              </span>
            </h2>
          </>
        }
      >
        <Image
          src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715443872/Appvil/logos/home/appvil-mobilieji_zqvx9t.webp"
          alt="hero"
          height="1447"
          width="2048"
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
