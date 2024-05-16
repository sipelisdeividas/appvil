import { CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function CarouselCard({
  _id,
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
}) {
  return (
    <>
      <CarouselItem key={_id} className="flex justify-center items-center">
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <Image
                className="rounded shadow-md"
                width="1000"
                height="1000"
                alt=""
                src={firstImage ?? ""}
              />
              <Image
                className="rounded shadow-md"
                width="1000"
                height="1000"
                alt=""
                src={secondImage ?? ""}
              />
              <Image
                className="rounded shadow-md"
                width="1000"
                height="1000"
                alt=""
                src={thirdImage ?? ""}
              />
              <Image
                className="rounded shadow-md"
                width="1000"
                height="1000"
                alt=""
                src={fourthImage ?? ""}
              />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </>
  );
}
