import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function ProjectImages({
  name,
  banner,
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
}) {
  return (
    <div>
      <div>
        <img className="rounded-lg h-auto w-[520px]" src={banner} alt={name} />
      </div>
      <div className="grid grid-cols-4 md:grid-cols-5 gap-2 mt-4">
        {[firstImage, secondImage, thirdImage, fourthImage].map(
          (image, index) =>
            image && (
              <Dialog key={index}>
                <DialogTrigger>
                  <Image
                    alt={name}
                    className="rounded-lg object-cover w-full aspect-square"
                    height="200"
                    src={image}
                    width="200"
                  />
                </DialogTrigger>
                <DialogContent>
                  <div className="flex justify-center items-center text-center">
                    <img alt={name} src={image} />
                  </div>
                </DialogContent>
              </Dialog>
            )
        )}
      </div>
    </div>
  );
}
