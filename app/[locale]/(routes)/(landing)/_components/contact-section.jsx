import initTranslations from "@/app/i18n";

export async function ContactSection({ locale }) {
  const { t } = await initTranslations(locale, ["home"]);
  return (
    <section className="drop-shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl uppercase font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            {t("contact_title")}
          </h3>
        </div>
        <div className="mt-8 lg:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <iframe
                title="Mūsų vietovė"
                className="border-0"
                src="https://maps.google.com/maps?q=32566,+J.+Žemgulio+g.+46+-108,+35239+Panevėžys&output=embed"
                width="100%"
                height="480"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-white">
                    {t("contact_address")}
                  </h3>
                  <p className="mt-1 text-sm md:text-base text-gray-600 dark:text-gray-400">
                    {t("contact_street")}
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-white">
                    {t("contact_time")}
                  </h3>
                  <p className="text-sm md:text-base mt-1 text-gray-600 dark:text-gray-400">
                    {t("working_days")}: {t("contact_time_west")}
                  </p>
                  <p className="text-sm md:text-base mt-1 text-gray-600 dark:text-gray-400">
                    {t("rest_days")}
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-white">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
