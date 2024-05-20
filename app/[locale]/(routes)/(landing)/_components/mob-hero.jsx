import initTranslations from "@/app/i18n";

export async function MobileHero({ locale }) {
  const { t } = await initTranslations(locale, ["home", "common"]);
  return (
    <section class="text-gray-600 body-font pt-36">
      <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div class="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="text-4xl sm:text-4xl md:text-5xl uppercase font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            {t("hero_title_1")}
            <br /> {t("hero_title_2")} <br />
            <span className="text-primary">{t("hero_title_3")}</span>
          </h1>
          <p class="max-w-2xl text-base md:text-lg mt-2 text-neutral-600 dark:text-neutral-300">
            {t("hero_description")}
          </p>
        </div>
        <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 w-3/7 sm:w-3/6 md:w-3/6">
          <img
            class="object-cover object-center rounded"
            alt="Appvil Hero Logo"
            src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715243512/Appvil/logos/piestas_eahlw0.png"
          />
        </div>
      </div>
    </section>
  );
}
