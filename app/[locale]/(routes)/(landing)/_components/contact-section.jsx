import initTranslations from "@/app/i18n";

export async function ContactSection({ locale }) {
  const { t } = await initTranslations(locale, ["home"]);
  return (
    <section className="body-font relative drop-shadow-sm ">
      <div className="absolute inset-0 ">
        <iframe
          width="100%"
          height="100%"
          title="map"
          allowFullScreen
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          src="https://maps.google.com/maps?q=32566,+J.+Žemgulio+g.+46+-108,+35239+Panevėžys&output=embed"
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex ">
        <div className="lg:w-1/3 md:w-1/2 bg-white dark:bg-black rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 border drop-shadow-md">
          <h3 className="text-3xl md:text-4xl uppercase font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            {t("contact_title")}
          </h3>
          <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-white mt-2">
            {t("contact_address")}
          </h3>
          <p className="mt-1 text-sm md:text-base text-gray-600 dark:text-gray-400">
            {t("contact_street")}
          </p>
          <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-white mt-2">
            {t("contact_time")}
          </h3>
          <p className="text-sm md:text-base mt-1 text-gray-600 dark:text-gray-400">
            {t("working_days")}: {t("contact_time_west")}
          </p>
          <p className="text-sm md:text-base mt-1 text-gray-600 dark:text-gray-400">
            {t("rest_days")}
          </p>
          <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-white mt-2">
            {t("contact_contacts")}
          </h3>

          <p className="text-sm md:text-base mt-1 text-gray-600 dark:text-gray-400">
            {t("contact_email")}
          </p>

          <p className="text-sm md:text-base mt-1 text-gray-600 dark:text-gray-400">
            {t("contact_phone")}
          </p>
        </div>
      </div>
    </section>
  );
}
