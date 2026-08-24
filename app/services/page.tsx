import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bouquets, wedding florals, event styling, subscriptions and corporate arrangements — explore our full range of floral services.",
};

const services = [
  {
    title: "Signature Bouquets",
    price: "From $45",
    text: "Hand-tied, market-fresh arrangements for birthdays, thank-yous and everyday joy. Same-day delivery available.",
    features: ["Seasonal blooms", "Free handwritten note", "Same-day delivery"],
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Wedding Florals",
    price: "From $1,200",
    text: "Full-service wedding design: bouquets, boutonnieres, ceremony arches and reception styling.",
    features: ["Design consultation", "Setup & teardown", "Dedicated stylist"],
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Event Styling",
    price: "Custom quote",
    text: "Galas, launches, showers — we transform venues with installations, centerpieces and statement pieces.",
    features: ["Venue walk-through", "Custom installations", "On-site team"],
    image:
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Flower Subscriptions",
    price: "From $35/week",
    text: "A fresh arrangement on your doorstep every week. Pause, skip or gift anytime — no contracts.",
    features: ["Weekly or bi-weekly", "Vase included first box", "Cancel anytime"],
    image: "/floral-2.jpg",
  },
  {
    title: "Corporate Accounts",
    price: "Custom quote",
    text: "Lobby displays, client gifts and event flowers for offices, hotels and restaurants on one simple invoice.",
    features: ["Monthly invoicing", "Priority delivery", "Account manager"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Sympathy Flowers",
    price: "From $60",
    text: "Gentle, dignified tributes handled with care and delivered directly to services or homes.",
    features: ["Sensitive handling", "Direct service delivery", "Rush options"],
    image:
      "https://images.unsplash.com/photo-1508881598441-324f3974994b?auto=format&fit=crop&w=900&q=80",
  },
];

const steps = [
  { step: "01", title: "Tell Us Your Vision", text: "Message us on WhatsApp or send the inquiry form with your ideas, date and budget." },
  { step: "02", title: "We Design Together", text: "Your florist shares a mood board and palette within 24 hours, then refines it with you." },
  { step: "03", title: "We Craft It Fresh", text: "Stems arrive from local growers and are arranged by hand hours before delivery." },
  { step: "04", title: "Delivered With Care", text: "Our drivers hand-deliver every order — photographed on arrival so you know it landed perfectly." },
];

const faqs = [
  {
    q: "Do you offer same-day delivery?",
    a: "Yes! Order any bouquet by 2 PM local time and we'll deliver it the same day within the city. Subscriptions and events require advance notice.",
  },
  {
    q: "Can I request specific flowers?",
    a: "Absolutely. Send us photos or a list on WhatsApp and we'll confirm availability. If a stem is out of season, we'll suggest the closest match in look and feel.",
  },
  {
    q: "How far in advance should I book wedding flowers?",
    a: "We recommend 3–6 months for peak season (May–October), but we keep space each month for shorter timelines — just ask.",
  },
  {
    q: "What areas do you deliver to?",
    a: "We cover the entire metro area. Same-day applies to the city centre; surrounding suburbs typically arrive next day.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="From single stems to full venue transformations — everything we do is designed around you."
        image="https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-petal-dark">
            What We Offer
          </p>
          <h2 className="mt-3 text-3xl font-semibold font-display sm:text-4xl">
            Floral services for every occasion
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-forest/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-petal-dark backdrop-blur">
                    {service.price}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-semibold font-display">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-forest/70">
                    {service.text}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-forest/10 pt-4">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-forest/80"
                      >
                        <span className="text-sage">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(
                      `Hi! I'm interested in ${service.title}. Can you help?`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-petal-light px-5 py-2.5 text-sm font-semibold text-petal-dark transition hover:bg-petal hover:text-white"
                  >
                    <Icon name="whatsapp" className="h-4 w-4" />
                    Ask About This
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-forest py-16 text-cream sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-semibold font-display sm:text-4xl">
              From message to doorstep in four steps
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, i) => (
              <Reveal key={item.step} delay={i * 100}>
                <div className="relative">
                  <span className="text-5xl font-semibold font-display text-petal/40">
                    {item.step}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:py-20 lg:px-8 lg:py-28">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-petal-dark">
            Good to Know
          </p>
          <h2 className="mt-3 text-3xl font-semibold font-display sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-forest/10 bg-white p-5 shadow-sm open:shadow-md sm:p-6"
            >
              <summary className="cursor-pointer list-none text-left font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="mr-3 inline-block text-petal-dark transition group-open:rotate-45">+</span>
                {faq.q}
              </summary>
              <p className="mt-4 pl-8 text-sm leading-relaxed text-forest/70">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        <Reveal className="mt-16 rounded-3xl bg-petal-light/50 p-10 text-center">
          <h3 className="text-2xl font-semibold font-display">
            Ready when you are 🌸
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-forest/70">
            Get a free, no-obligation quote within 24 hours.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappLink("Hi! I'd like a quote for my event.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:brightness-95"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              WhatsApp Quote
            </a>
            <Link
              href="/contact"
              className="rounded-full bg-forest px-7 py-3 text-sm font-semibold uppercase tracking-widest text-cream transition hover:bg-forest-light"
            >
              Use Contact Form
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
