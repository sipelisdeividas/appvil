import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProjectsCard({ _id, name, banner }) {
  return (
    <>
      <CardContainer key={name} className="inter-var">
        <CardBody className="relative group/card w-auto h-auto rounded-xl p-6">
          <div className="md:h-16">
            <CardItem
              translateZ="50"
              className="text-xl md:text-lg font-bold text-neutral-600 dark:text-white overflow-hidden"
            >
              {name}
            </CardItem>
          </div>

          <CardItem translateZ="100" className="w-full">
            <Image
              priority
              src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715444580/Appvil/logos/projects/projects-bg-ipad_xbg79y.png"
              height="1000"
              width="1000"
              className="h-60 object-cover rounded-xl"
              alt={name ?? ""}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                className="rounded-xl shadow-md"
                src={banner ?? ""}
                height="110"
                width="110"
                alt={name ?? ""}
              />
              {/* <img
                className="rounded-lg shadow-md w-[90px] h-[90px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] xl:h-[160px] xl:w-[160px]"
                src={banner}
                alt={name}
              /> */}
            </div>
          </CardItem>

          {/* <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-10 dark:text-neutral-300"
          >
            {description}
          </CardItem> */}

          <div className="flex justify-start text-start items-start mt-10">
            <CardItem
              translateZ={20}
              as={Link}
              href={`/projects/${_id}`}
              className="flex items-start justify-start px-4 py-2 rounded-xl font-normal"
            >
              SKAITYTI DAUGIAU
              <ArrowRight className="w-5 h-5 ml-2" />
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
}
