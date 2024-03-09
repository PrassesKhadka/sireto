import { z } from "zod";

export const apiResponseSchema = z.object({
  code: z
    .string()
    .min(1)
    .regex(/^[0-9]*$/),
  description: z.string(),
  parents: z.array(z.string()),
});

export const hsCodeInputSchema = z
  .string()
  .min(1, { message: "Field is required" })
  .regex(/^[0-9]*$/, { message: "Should only be a number" });

export type TapiResponseSchema = z.infer<typeof apiResponseSchema>;
export type ThsCodeInputSchema = z.infer<typeof hsCodeInputSchema>;
