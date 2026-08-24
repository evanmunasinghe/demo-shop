import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { whatsappLink } from "@/lib/site";

const collections = [
  {
    title: "Signature Bouquets",
    text: "Hand-tied seasonal arrangements, styled fresh every morning.",
    image:
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Wedding Florals",
    text: "Bridal bouquets, centerpieces and venue styling told in blooms.",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Monthly Subscriptions",
    text: "A weekly dose of happiness delivered to your door.",
    image: "/floral-2.jpg",
  },
];

const perks = [
  {
    title: "Farm-Fresh Daily",
    text: "Stems arrive from local growers each morning — never stored, never wilted.",
    icon: (
      <path d="M12 22c5-4.5 8-8.5 8-12a8 8 0 1 0-16 0c0 3.5 3 7.5 8 12Zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
    ),
  },
  {
    title: "Same-Day Delivery",
    text: "Order by 2 PM and we hand-deliver within the city the very same day.",
    icon: <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7zM7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />,
  },
  {
    title: "Custom Designs",
    text: "Share your vision on WhatsApp and our florists craft it petal by petal.",
    icon: <path d="m15 5 4 4L8 20l-5 1 1-5L15 5Zm3-3 4 4 2-2-4-4-2 2Z" />,
  },
  {
    title: "Happiness Promise",
    text: "If your blooms don't wow you, we'll replace them — free of charge.",
    icon: <path d="M12 21s-7.5-4.7-10-9.3C.4 8.6 2.4 5 6 5c2.2 0 3.7 1.2 6 3.7C14.3 6.2 15.8 5 18 5c3.6 0 5.6 3.6 4 6.7C19.5 16.3 12 21 12 21Z" />,
  },
];

const testimonials = [
  {
    quote:
      "The wedding arch they built was beyond anything I imagined. Every guest asked who the florist was!",
    name: "Amara & Josh",
    role: "Wedding Clients",
  },
  {
    quote:
      "I've had a weekly subscription for a year now. The arrangements never repeat and always brighten my studio.",
    name: "Daniel K.",
    role: "Subscriber",
  },
  {
    quote:
      "Ordered on WhatsApp at noon, delivered by 4 PM — mom cried when she saw them. Flawless service.",
    name: "Priya S.",
    role: "Birthday Surprise",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <Image
          src="/floral-1.jpg"
          alt="Fresh flower arrangement"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/85 via-forest/60 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-xl text-white">
            <p className="mb-4 inline-block rounded-full border border-white/30 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em]">
              Est. 2009 · Garden District
            </p>
            <h1 className="text-4xl font-semibold font-display leading-tight sm:text-5xl lg:text-6xl">
              Say it beautifully,
              <span className="block text-petal-light">say it with flowers.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/85">
              Handcrafted bouquets, weddings and events — designed with farm-fresh
              blooms and delivered same day.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={whatsappLink("Hi! I'd like to order a bouquet.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-petal px-8 py-4 text-sm font-semibold uppercase tracking-widest transition hover:bg-petal-dark"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Order on WhatsApp
              </a>
              <Link
                href="/services"
                className="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest transition hover:bg-white hover:text-forest"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-forest/10 bg-cream-dark/60">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-forest/10 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
          {[
            ["4.9★", "500+ five-star reviews"],
            ["15 min", "Average WhatsApp reply"],
            ["Same Day", "Delivery before 2 PM"],
          ].map(([stat, label]) => (
            <div key={label} className="px-2 py-6 text-center">
              <p className="text-2xl font-semibold font-display text-petal-dark">
                {stat}
              </p>
              <p className="mt-1 text-sm text-forest/70">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-petal-dark">
            Fresh This Week
          </p>
          <h2 className="mt-3 text-3xl font-semibold font-display sm:text-4xl">
            Featured Collections
          </h2>
          <p className="mt-4 text-forest/70">
            Three of our most-loved styles, arranged this morning by our senior
            florists.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {collections.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <article className="group overflow-hidden rounded-3xl bg-white shadow-lg shadow-forest/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-display">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest/70">
                    {item.text}
                  </p>
                  <Link
                    href="/services"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-petal-dark transition group-hover:gap-2"
                  >
                    Explore <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-forest py-20 text-cream lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage">
              Why Petal & Bloom
            </p>
            <h2 className="mt-3 text-3xl font-semibold font-display sm:text-4xl">
              Loved by the city, one stem at a time
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk, i) => (
              <Reveal key={perk.title} delay={i * 100}>
                <div className="rounded-3xl bg-white/5 p-7 backdrop-blur transition hover:bg-white/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-10 w-10 text-petal-light"
                  >
                    {perk.icon}
                  </svg>
                  <h3 className="mt-5 text-lg font-semibold">{perk.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">
                    {perk.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-petal-dark">
            Kind Words
          </p>
          <h2 className="mt-3 text-3xl font-semibold font-display sm:text-4xl">
            What Our Customers Say
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-3xl border border-forest/10 bg-white p-7 shadow-sm">
                <div className="text-gold" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-forest/80">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-forest/10 pt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-forest/50">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-petal-light/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 py-16 text-center lg:flex-row lg:justify-between lg:px-8 lg:text-left">
          <div>
            <h2 className="text-3xl font-semibold font-display sm:text-4xl">
              Have something special in mind?
            </h2>
            <p className="mt-3 max-w-xl text-forest/70">
              Message us on WhatsApp — send us your inspiration and we&apos;ll
              design it together, usually replying within minutes.
            </p>
          </div>
          <a
            href={whatsappLink("Hi! I have a custom floral idea to discuss.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 rounded-full bg-forest px-8 py-4 text-sm font-semibold uppercase tracking-widest text-cream transition hover:bg-forest-light"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Start a Chat
          </a>
        </div>
      </section>
    </>
  );
}
