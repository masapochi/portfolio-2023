import { z } from "zod";
import { contactSchema } from "./schema";

export type ContactType = z.infer<typeof contactSchema>;
