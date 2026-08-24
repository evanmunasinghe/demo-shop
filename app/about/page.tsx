import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Petal & Bloom — a family-run flower shop crafting handcrafted arrangements in the Garden District since 2009.",
};

const values = [
  {
    title: "Craft First",
    text: "Every arrangement is built by hand, never from a template. No two bouquets leave our studio alike.",
    icon: <path d="m12 2 2.4 7.2H22l-6 4.4 2.3 7.2-6.3-4.5-6.3 4.5L8 13.6l-6-4.4h7.6Z" />,
  },
  {
    title: "Grown Responsibly",
    text: "We partner with local, sustainable farms and wrap every order in plastic-free packaging.",
    icon: <path d="M12 22c5-4.5 8-8.5 8-12a8 8 0 1 0-16 0c0 3.5 3 7.5 8 12Z" />,
  },
  {
    title: "People Before Petals",
    text: "From first message to final delivery, a real florist stays with your order start to finish.",
    icon: <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4 0-8 2-8 5v3h16v-3c0-3-4-5-8-5Z" />,
  },
];

const team = [
  { name: "Elena Marsh", role: "Founder & Head Florist", image: "/floral-3.jpg" },
  { name: "Tomás Rivera", role: "Event Stylist", image: "/floral-1.jpg" },
  { name: "Aiko Tanaka", role: "Subscription Curator", image: "/floral-2.jpg" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Rooted in Passion"
        subtitle="The story behind the stems — who we are and why we do what we do."
        image="https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:gap-12 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <Image
              src="/floral-1.jpg"
              alt="Florist arranging a bouquet"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="rounded-[2rem] object-cover shadow-2xl shadow-forest/15"
            />
            <div className="absolute -bottom-6 -right-4 hidden rounded-3xl bg-petal px-8 py-6 text-white shadow-xl sm:block">
              <p className="text-4xl font-semibold font-display">15+</p>
              <p className="text-sm uppercase tracking-widest">Years of craft</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-petal-dark">
            Our Story
          </p>
          <h2 className="mt-3 text-3xl font-semibold font-display sm:text-4xl">
            From a market stall to the city&apos;s favourite florist
          </h2>
          <p className="mt-6 leading-relaxed text-forest/70">
            Petal &amp; Bloom began in 2009 with one flower cart, two buckets of
            peonies and a stubborn belief that flowers should feel personal.
            Today we&apos;re a team of nine florists, drivers and stylists — but
            every arrangement is still tied by hand, checked stem by stem, and
            sent out like it&apos;s for family.
          </p>
          <p className="mt-4 leading-relaxed text-forest/70">
            We source directly from growers within a two-hour drive, which means
            fresher blooms, fairer prices for farmers, and a smaller footprint
            for every bouquet that leaves our door.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-petal px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-petal-dark"
          >
            Come Say Hello
          </Link>
        </Reveal>
      </section>

      <section className="bg-cream-dark/60 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-petal-dark">
              Our Values
            </p>
            <h2 className="mt-3 text-3xl font-semibold font-display sm:text-4xl">
              What guides every bouquet
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 100}>
                <div className="h-full rounded-3xl bg-white p-8 text-center shadow-lg shadow-forest/5">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-petal-light text-petal-dark">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                      {value.icon}
                    </svg>
                  </span>
                  <h3 className="mt-5 text-xl font-semibold font-display">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-forest/70">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-petal-dark">
            The Team
          </p>
          <h2 className="mt-3 text-3xl font-semibold font-display sm:text-4xl">
            Meet the hands behind the petals
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 100}>
              <article className="group text-center">
                <div className="relative mx-auto h-72 w-full overflow-hidden rounded-3xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold font-display">
                  {member.name}
                </h3>
                <p className="text-sm text-petal-dark">{member.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
