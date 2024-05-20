import initTranslations from "@/app/i18n";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export async function ScrollableHero({ locale }) {
  const { t } = await initTranslations(locale, ["home"]);
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="font-semibold text-black dark:text-white md:mb-10">
              <span className="text-xl md:text-2xl text-primary uppercase font-extrabold leading-tight tracking-tight">
                {t("tablet_span")}
              </span>{" "}
              <br />
              <span className="text-3xl md:text-5xl mt-1 uppercase font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                {t("tablet_title")}
              </span>
            </h2>
          </>
        }
      >
        <Image
          src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1716219836/Appvil/logos/home/appvil_about_by_ds_hoqkb6.webp"
          alt="Appvil Services"
          height="1447"
          width="2048"
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
