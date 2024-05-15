import { ContactForm } from "./_components/contact-form";
import { ContactBreadcrumb } from "./_components/contact-breadcrumb";
import { ContactLogo } from "./_components/contact-logo";
import { unstable_noStore } from "next/cache";

export default function ContactsPage() {
  unstable_noStore();
  return (
    <div className="container mx-auto w-full items-center justify-center antialiased relative overflow-hidden drop-shadow-sm pb-10 md:pb-0 pt-24 md:pt-36">
      <ContactBreadcrumb />
      <div className="md:flex w-full">
        <div className="md:w-1/2">
          <h1 className="text-3xl uppercase font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white w-full pb-2">
            Susisiekite su mumis
          </h1>

          <div className="py-2 text-neutral-600 dark:text-neutral-300 text-sm pb-10 md:pb-5">
            Aptarkime kaip mūsų komanda Jūsų sumanias idėjas galėtų paversti
            išmaniomis.
          </div>
          <ContactLogo />
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export const metadata = {
  title: "Susisiekimas",
};
