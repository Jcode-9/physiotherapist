"use server";

import { Resend } from "resend";
import { contactSchema } from "./validations";
import type { ContactFormState } from "@/types/contact-form";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail(
  _previousState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  const result = contactSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { name, email, phone, message } = result.data;

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeMessage = escapeHtml(message);

  const { error } = await resend.emails.send({
    from: "PhysioPro <onboarding@resend.dev>",
    to: ["jakub.sza08@gmail.com"],
    replyTo: email,
    subject: `Nowa wiadomość od ${name}`,
    html: `
      <h2>Nowa wiadomość z formularza PhysioPro</h2>

      <p><strong>Imię:</strong> ${safeName}</p>
      <p><strong>E-mail:</strong> ${safeEmail}</p>
      <p><strong>Telefon:</strong> ${safePhone}</p>

      <h3>Wiadomość:</h3>
      <p>${safeMessage}</p>
    `,
  });

  if (error) {
    console.error(error);

    return {
      success: false,
      errors: {
        general: ["Nie udało się wysłać wiadomości. Spróbuj ponownie."],
      },
    };
  }

  return {
    success: true,
  };
}