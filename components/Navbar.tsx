"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


import Icon from "./Icon";
import { site, whatsappLink } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-cream/95 shadow-md shadow-forest/5 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold font-display tracking-tight"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-petal text-white">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 22c4.97 0 9-3.58 9-8 0-3.11-1.91-5.87-5.06-7.32L12 2l-3.94 4.68C4.91 8.13 3 10.89 3 14c0 4.42 4.03 8 9 8Z" />
            </svg>
          </span>
          {site.name}
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-petal-dark ${
                  pathname === link.href ? "text-petal-dark" : "text-forest"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={whatsappLink("Hi! I'd like to order flowers.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-petal px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-petal-dark"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Order Now
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/5 text-forest lg:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-6 w-6"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-96 border-t border-forest/10" : "max-h-0"
        }`}
      >
        <ul className="space-y-1 px-5 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-widest ${
                  pathname === link.href
                    ? "bg-petal-light text-petal-dark"
                    : "text-forest hover:bg-cream-dark"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={whatsappLink("Hi! I'd like to order flowers.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-petal px-5 py-3 text-sm font-semibold text-white"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Order on WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
