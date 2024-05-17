import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import initTranslations from "@/app/i18n";

export async function ProjectsCard({ name, banner, slug, locale }) {
  const { t } = await initTranslations(locale, ["common"]);
  return (
    <>
      <CardContainer key={name} className="inter-var">
        <CardBody className="relative group/card w-auto h-auto rounded-xl lg:p-10">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white overflow-hidden"
          >
            <Link
              href={`/projects/${slug}`}
              aria-label={`Pamatykite detalesnę informaciją apie projektą ${name}`}
            >
              {name}
            </Link>
          </CardItem>

          <CardItem translateZ="100" className="w-full">
            <img
              src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715444580/Appvil/logos/projects/projects-bg-ipad_xbg79y.png"
              className="object-cover w-full rounded-xl"
              alt={name}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <img
                className="rounded-xl h-28 sm:h-20 md:h-32 lg:h-44"
                src={banner}
                alt={name}
              />
            </div>
          </CardItem>

          <CardItem
            translateZ={20}
            as={Link}
            href={`/projects/${slug}`}
            className="flex items-start justify-startfont-normal uppercase"
          >
            {t("read_more")}
            <ArrowRight className="w-5 h-5 ml-2" />
          </CardItem>
        </CardBody>
      </CardContainer>
    </>
  );
}
