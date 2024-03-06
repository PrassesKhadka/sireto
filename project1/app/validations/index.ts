import { z } from "zod";

export const apiResponseSchema = z.object({
  code: z.string().uuid(),
  description: z.string(),
  parents: z.array(z.string()),
});

export const validInputSchema = z.number();

export type TapiResponseSchema = z.infer<typeof apiResponseSchema>;
export type TvalidInputSchema = z.infer<typeof validInputSchema>;
