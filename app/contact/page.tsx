import type { Metadata } from "next";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site, socials, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit our shop, call, email or send an inquiry — we usually reply on WhatsApp within 15 minutes.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Questions, custom orders or just say hello — we'd love to hear from you."
        image="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <div className="h-full rounded-3xl bg-white p-7 shadow-lg shadow-forest/5">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-petal-light text-petal-dark">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 22c5-4.5 8-8.5 8-12a8 8 0 1 0-16 0c0 3.5 3 7.5 8 12Zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                </svg>
              </span>
              <h3 className="mt-4 font-semibold">Visit the Shop</h3>
              <p className="mt-2 text-sm leading-relaxed text-forest/70">
                {site.address}
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-3xl bg-white p-7 shadow-lg shadow-forest/5">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/15 text-[#128C7E]">
                <Icon name="whatsapp" />
              </span>
              <h3 className="mt-4 font-semibold">Call / WhatsApp</h3>
              <a
                href={`tel:${site.phone}`}
                className="mt-2 block text-sm text-forest/70 hover:text-petal-dark"
              >
                {site.phone}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-petal-dark"
              >
                Message us anytime →
              </a>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="h-full rounded-3xl bg-white p-7 shadow-lg shadow-forest/5">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/20 text-forest-light">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M4 4h16a2 2 0 0 1 2 2v.4l-10 6L2 6.4V6a2 2 0 0 1 2-2Zm18 4.7V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.7l10 6 10-6Z" />
                </svg>
              </span>
              <h3 className="mt-4 font-semibold">Email Us</h3>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block break-all text-sm text-forest/70 hover:text-petal-dark"
              >
                {site.email}
              </a>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="h-full rounded-3xl bg-white p-7 shadow-lg shadow-forest/5">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 22a10 10 0 1 1 10-10c0 1.7-1.3 3-3 3h-2a2 2 0 0 0-1.5 3.3c.3.4.5.8.5 1.2 0 .8-.7 1.5-2 1.5H12Zm-5.5-9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm3.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                </svg>
              </span>
              <h3 className="mt-4 font-semibold">Opening Hours</h3>
              <ul className="mt-2 space-y-1 text-sm text-forest/70">
                {site.hours.map((slot) => (
                  <li key={slot.days}>
                    <span className="font-medium">{slot.days}:</span> {slot.time}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <h2 className="text-3xl font-semibold font-display">
                Send an Inquiry
              </h2>
            </div>
            <ContactForm />
            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm font-medium text-forest/60">
                Follow along:
              </span>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-forest shadow-sm transition hover:bg-petal hover:text-white"
                  >
                    <Icon name={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col">
              <h2 className="mb-8 text-3xl font-semibold font-display">
                Find the Shop
              </h2>
              <div className="relative flex-1 overflow-hidden rounded-3xl shadow-xl shadow-forest/10">
                <iframe
                  src={site.mapEmbed}
                  title={`${site.name} location on Google Maps`}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full min-h-[420px] w-full border-0"
                />
              </div>
              <p className="mt-4 rounded-2xl bg-petal-light/50 px-5 py-3 text-sm text-forest/70">
                📍 Free parking behind the shop · 2 min walk from Rosewood
                Station
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
