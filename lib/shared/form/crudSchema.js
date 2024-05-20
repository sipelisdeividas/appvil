import * as z from "zod";

export const crudSchema = z.object({
  name: z
    .string()
    .min(4, {
      message: "Laukelį privalo sudaryti bent 4 simboliai",
    })
    .max(300, {
      message: "Laukelį privalo sudaryti ne daugiau kaip 300 simbolių",
    }),
  banner: z
    .string()
    .min(10, {
      message: "Laukelį privalo sudaryti bent 10 simbolių",
    })
    .max(500, {
      message: "Laukelį privalo sudaryti ne daugiau kaip 500 simbolių",
    }),
  descriptionLt: z
    .string()
    .min(10, {
      message: "Laukelį privalo sudaryti bent 10 simbolių",
    })
    .max(1000, {
      message: "Laukelį privalo sudaryti ne daugiau kaip 1000 simbolių",
    }),
  descriptionEn: z
    .string()
    .min(10, {
      message: "Laukelį privalo sudaryti bent 10 simbolių",
    })
    .max(1000, {
      message: "Laukelį privalo sudaryti ne daugiau kaip 1000 simbolių",
    }),
  firstImage: z.string(),
  secondImage: z.string(),
  thirdImage: z.string(),
  fourthImage: z.string(),
});
