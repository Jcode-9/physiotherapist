"use client";

import { useActionState } from "react";
import { sendContactEmail } from "@/lib/actions";
import Input from "./Input";
import Button from "./Button";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    null
  );

  return (
    <form action={formAction} className="flex flex-col gap-6">
      {state?.success && (
        <div className="rounded-xl bg-green-50 p-4 text-sm text-green-700">
          Wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce.
        </div>
      )}

      {state?.errors?.general && (
        <div className="rounded-xl bg-red-50 p-4 text-sm text-red-600">
          {state.errors.general[0]}
        </div>
      )}

      <div>
        <Input
          label="Imię"
          name="name"
          placeholder="Jan Kowalski"
        />

        {state?.errors?.name && (
          <p className="mt-2 text-sm text-red-500">
            {state.errors.name[0]}
          </p>
        )}
      </div>

      <div>
        <Input
          label="E-mail"
          name="email"
          type="email"
          placeholder="jan@email.com"
        />

        {state?.errors?.email && (
          <p className="mt-2 text-sm text-red-500">
            {state.errors.email[0]}
          </p>
        )}
      </div>

      <div>
        <Input
          label="Telefon"
          name="phone"
          type="tel"
          placeholder="+48 123 456 789"
        />

        {state?.errors?.phone && (
          <p className="mt-2 text-sm text-red-500">
            {state.errors.phone[0]}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-slate-700"
        >
          Wiadomość
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Opisz krótko, w czym możemy Ci pomóc..."
          className="
            resize-none
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            py-3
            text-slate-800
            placeholder:text-slate-400
            outline-none
            transition-all
            duration-200
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
          "
        />

        {state?.errors?.message && (
          <p className="text-sm text-red-500">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        className="w-full justify-center"
        disabled={isPending}
      >
        {isPending ? "Wysyłanie..." : "Wyślij wiadomość"}
      </Button>
    </form>
  );
}