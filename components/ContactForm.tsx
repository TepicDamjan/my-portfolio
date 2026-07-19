"use client";

import { useActionState } from "react";
import {
  sendContactMessage,
  type ContactFormState,
} from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle" };

const fieldClassName =
  "w-full rounded-none border-0 border-b border-on-primary/30 bg-transparent px-0 py-3 text-body-md text-on-primary placeholder:text-on-primary/40 focus:border-b-2 focus:border-on-primary focus:outline-none focus:ring-0 transition-colors";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState,
  );

  if (state.status === "success") {
    return (
      <p
        className="text-body-lg mx-auto max-w-md text-on-primary"
        role="status"
      >
        {state.message}
      </p>
    );
  }

  return (
    <form
      action={formAction}
      className="mx-auto flex w-full max-w-md flex-col gap-5 text-left"
    >
      <label className="flex flex-col gap-1">
        <span className="text-label-caps text-on-primary/70">Name</span>
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          className={fieldClassName}
          placeholder="Your name"
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-label-caps text-on-primary/70">Email</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          className={fieldClassName}
          placeholder="you@example.com"
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-label-caps text-on-primary/70">Message</span>
        <textarea
          name="message"
          required
          rows={4}
          maxLength={5000}
          className={`${fieldClassName} resize-y`}
          placeholder="What are you building?"
        />
      </label>

      {state.status === "error" && (
        <p className="text-body-md text-red-300" role="alert">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="text-label-caps mt-2 inline-flex min-h-11 items-center justify-center rounded bg-surface px-6 py-3 text-primary transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
