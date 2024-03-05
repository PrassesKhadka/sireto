import { z } from "zod";

const mySchema = z.object({
  code: z.string().uuid(),
  description: z.string(),
  parents: z.array(z.string()),
});

export type TmySchema = z.infer<typeof mySchema>;
