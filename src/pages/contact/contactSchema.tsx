import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string()
  .regex(/^(\+)?[0-9]{10,15}$/, "Invalid phone address"),
  email: z.email("Invalid email address").optional().or(z.literal("")),
  message: z.string().min(1, "Message is required"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
