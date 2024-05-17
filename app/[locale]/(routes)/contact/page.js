import { ContactForm } from "./_components/contact-form";
import { ContactBreadcrumb } from "./_components/contact-breadcrumb";
import { ContactLogo } from "./_components/contact-logo";
import { unstable_noStore } from "next/cache";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/translations-provider";

const i18mNamespaces = ["contact", "common"];

export default async function ContactsPage({ params: { locale } }) {
  unstable_noStore();
  const { t, resources } = await initTranslations(locale, i18mNamespaces);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18mNamespaces}
    >
      <div className="container mx-auto w-full items-center justify-center antialiased relative overflow-hidden drop-shadow-sm pb-10 md:pb-0 pt-24 md:pt-36">
        <ContactBreadcrumb locale={locale} />
        <div className="md:flex w-full">
          <div className="md:w-1/2">
            <h1 className="text-3xl uppercase font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white w-full pb-2">
              {t("contact:contact_us")}
            </h1>

            <div className="py-2 text-neutral-600 dark:text-neutral-300 text-sm pb-10 md:pb-5">
              {t("contact:contact_description")}
            </div>
            <ContactLogo />
          </div>
          <ContactForm />
        </div>
      </div>
    </TranslationsProvider>
  );
}

export const metadata = {
  title: "Susisiekimas",
};
