import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto w-full pt-24 md:pt-36 pb-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div>
              <h1 className="my-2 text-gray-900 dark:text-white font-bold text-3xl">
                Atrodo, kad radote duris, kurios veda į niekur
              </h1>
              <p className="my-2 text-neutral-600 dark:text-neutral-300">
                Nuoširdžiai atsiprašome! Apsilankykite mūsų pagrindiniame
                puslapyje, gal būt nuspręsite, kas Jus domina.
              </p>
              <Button
                className="sm:w-full lg:w-auto my-2 py-3 px-3 md:py-6 md:px-8"
                asChild
              >
                <Link href="/" aria-label="Grįžti į pagrindinį">
                  Nuvesti mane ten!
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715439483/Appvil/logos/404/404-sign_fmoyyt.png"
              width="516"
              height="190"
              alt="404 Sign"
            />
          </div>
        </div>
      </div>
      <div className="">
        <Image
          width="600"
          height="600"
          src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715438960/Appvil/logos/404/404_piestas_aj7l7u.webp"
          alt="Appvil 404 Logo"
        />
      </div>
    </div>
  );
}
