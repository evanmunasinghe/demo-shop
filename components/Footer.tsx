import Link from "next/link";
import Icon from "./Icon";
import { site, socials, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 sm:gap-12 sm:py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-semibold font-display"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-petal text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 22c4.97 0 9-3.58 9-8 0-3.11-1.91-5.87-5.06-7.32L12 2l-3.94 4.68C4.91 8.13 3 10.89 3 14c0 4.42 4.03 8 9 8Z" />
              </svg>
            </span>
            {site.name}
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            {site.tagline}. Serving the Garden District with fresh blooms and
            heartfelt designs since 2009.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-petal"
              >
                <Icon name={social.icon} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-petal-light">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-cream/70 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-petal-light">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li>{site.address}</li>
            <li>
              <a href={`tel:${site.phone}`} className="transition hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition hover:text-white"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink("Hi! I have a question about your flowers.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-petal-light">
            Opening Hours
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            {site.hours.map((slot) => (
              <li key={slot.days} className="flex flex-col">
                <span className="font-medium text-cream">{slot.days}</span>
                {slot.time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
