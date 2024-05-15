import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function ProjectCarousel({ firstImage }) {
  return (
    <div className="sm:w-2/5 lg:w-2/4 relative flex items-center justify-center px-6 sm:px-6 md:mx-auto">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {/* {photos.map((photo) => (
              <> */}
          <CarouselItem
            // key={photo.id}
            className="flex justify-center items-center"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    className="rounded shadow-md "
                    width="1200"
                    height="1000"
                    alt=""
                    src={firstImage ?? ""}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          {/* </>
            ))} */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
