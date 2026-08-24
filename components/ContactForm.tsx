"use client";

import { useState } from "react";
import Icon from "./Icon";
import { site, whatsappLink } from "@/lib/site";

type FormState = {
  name: string;
  email: string;
  phone: string;
  occasion: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  occasion: "Just Because",
  message: "",
};

const occasions = [
  "Wedding",
  "Birthday",
  "Anniversary",
  "Sympathy",
  "Corporate Event",
  "Just Because",
];

const inputClass =
  "w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-base text-forest outline-none transition placeholder:text-forest/40 focus:border-petal focus:ring-2 focus:ring-petal/25 sm:text-sm";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [field]: e.target.value });
    setErrors({ ...errors, [field]: undefined });
  };

  const validate = () => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please enter a valid email address.";
    if (!form.message.trim()) next.message = "Tell us a little about your inquiry.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const lines = [
      `Hello ${site.name}! New inquiry from the website:`,
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      `Occasion: ${form.occasion}`,
      "",
      `Message: ${form.message}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-petal-light/60 p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white">
          <Icon name="whatsapp" className="h-8 w-8" />
        </span>
        <h3 className="mt-6 text-2xl font-semibold font-display">
          Opening WhatsApp…
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-forest/70">
          Thanks, {form.name.split(" ")[0]}! Your inquiry is ready to send.
          Prefer email instead? Reach us at{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-petal-dark">
            {site.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialState);
            setSent(false);
          }}
          className="mt-8 rounded-full border border-forest/20 px-6 py-2.5 text-sm font-semibold transition hover:border-petal hover:text-petal-dark"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl bg-white p-6 shadow-xl shadow-forest/5 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jane Doe"
            value={form.name}
            onChange={update("name")}
            className={inputClass}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email *
          </label>
          <input
            id="email"
            type="email"
            placeholder="jane@example.com"
            value={form.email}
            onChange={update("email")}
            className={inputClass}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
            Phone (optional)
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={form.phone}
            onChange={update("phone")}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="occasion" className="mb-1.5 block text-sm font-medium">
            Occasion
          </label>
          <select
            id="occasion"
            value={form.occasion}
            onChange={update("occasion")}
            className={inputClass}
          >
            {occasions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
            Your Message *
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Tell us about the flowers you have in mind…"
            value={form.message}
            onChange={update("message")}
            className={`${inputClass} resize-none`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">{errors.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-petal px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-petal-dark"
      >
        <Icon name="whatsapp" className="h-5 w-5" />
        Send Inquiry via WhatsApp
      </button>
      <p className="mt-3 text-center text-xs text-forest/50">
        Submitting opens WhatsApp with your message pre-filled. No account
        needed.
      </p>
    </form>
  );
}
