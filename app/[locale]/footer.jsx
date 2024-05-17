import { Facebook, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import initTranslations from "../i18n";

export async function Footer({ locale }) {
  const currentYear = new Date().getFullYear();
  const { t } = await initTranslations(locale, ["common"]);
  return (
    <footer className="w-full pt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 flex flex-col gap-8 lg:flex-row items-center justify-center lg:justify-between">
          <Link href="/" aria-label="Grįžti į pagrindinį">
            <Image
              priority
              src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715239489/Appvil/logos/logo_grey_frnmyw.png"
              alt="Appvil Logo"
              width="159"
              height="53"
            />
          </Link>
          <ul className="text-base text-center sm:flex items-center justify-center uppercase space-y-4 md:space-y-0 gap-14 lg:gap-7 xl:gap-7 transition-all text-neutral-600 dark:text-white duration-500">
            <li>
              <Link
                href="/projects"
                className="hover:text-primary"
                aria-label="Pamatykite mūsų atliktus darbus"
              >
                {t("our_works")}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-primary"
                aria-label="Susisiekite su mumis"
              >
                {t("communication")}
              </Link>
            </li>
          </ul>
          <div className="flex space-x-1 sm:justify-center lg:justify-end text-neutral-600 dark:text-white">
            <Link
              className="w-9 h-9 rounded-full flex justify-center items-center hover:bg-primary"
              href="https://www.facebook.com/appvil.eu/"
              target="_blank"
              aria-label="Apsilankykite mūsų Facebook puslapį"
            >
              <Facebook />
            </Link>
            <Link
              className="w-9 h-9 rounded-full  flex justify-center items-center hover:bg-primary"
              href="https://lt.linkedin.com/in/appvil-appvil-19a666110"
              target="_blank"
              aria-label="Apsilankykite mūsų Linkedin puslapyje"
            >
              <Linkedin />
            </Link>
            <Link
              className="w-9 h-9 rounded-full  flex justify-center items-center hover:bg-primary"
              href="mailto:info@appvil.eu"
              aria-label="Susisiekite su mumis el. paštu"
            >
              <Mail />
            </Link>
            <Link
              className="w-9 h-9 rounded-full  flex justify-center items-center hover:bg-primary"
              href="tel:+37061226080"
              aria-label="Susisiekite su mumis telefonu"
            >
              <Phone />
            </Link>
          </div>
        </div>
        <div className="py-7 border-t border-gray-400 text-center">
          <span className="text-gray-400 text-sm uppercase">
            {t("footer_rights")} ©{" "}
            <Link
              className="hover:text-primary"
              href="/"
              aria-label="Grįžti į pagrindinį"
            >
              Appvil,
            </Link>{" "}
            {currentYear}.
          </span>
        </div>
      </div>
    </footer>
  );
}
