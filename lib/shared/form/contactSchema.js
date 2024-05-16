import * as z from "zod";

export const contactSchema = z.object({
  first_name: z
    .string()
    .min(4, {
      message: "Laukelį privalo sudaryti bent 4 simboliai",
    })
    .max(50, {
      message: "Laukelį privalo sudaryti ne daugiau kaip 50 simbolių",
    }),
  last_name: z
    .string()
    .min(4, {
      message: "Laukelį privalo sudaryti bent 4 simboliai",
    })
    .max(50, {
      message: "Laukelį privalo sudaryti ne daugiau kaip 50 simbolių",
    }),
  email: z
    .string()
    .email({
      message: "Įveskite el. paštą",
    })
    .min(10, {
      message: "Laukelį privalo sudaryti bent 10 simbolių",
    })
    .max(50, {
      message: "Laukelį privalo sudaryti ne daugiau kaip 50 simbolių",
    }),
  message: z
    .string()
    .min(10, {
      message: "Laukelį privalo sudaryti bent 10 simbolių",
    })
    .max(500, {
      message: "Laukelį privalo sudaryti ne daugiau kaip 500 simbolių",
    }),
});
