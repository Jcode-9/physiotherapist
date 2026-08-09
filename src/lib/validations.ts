import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Imię musi mieć co najmniej 2 znaki"),

  email: z
    .string()
    .trim()
    .email("Podaj poprawny adres e-mail"),

  phone: z
    .string()
    .trim()
    .min(9, "Podaj poprawny numer telefonu"),

  message: z
    .string()
    .trim()
    .min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
});