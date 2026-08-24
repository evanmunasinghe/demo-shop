export const site = {
  name: "Petal & Bloom",
  tagline: "Handcrafted floral artistry for every moment",
  phone: "+1 (555) 123-4567",
  whatsappNumber: "15551234567",
  email: "hello@petalandbloom.com",
  address: "128 Rosewood Lane, Garden District, New York, NY 10012",
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
    { days: "Saturday", time: "9:00 AM – 6:00 PM" },
    { days: "Sunday", time: "10:00 AM – 4:00 PM" },
  ],
  mapEmbed:
    "https://www.google.com/maps?q=Rosewood+Lane+New+York+NY&output=embed",
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const socials = [
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "Pinterest", href: "https://pinterest.com", icon: "pinterest" },
  { label: "X", href: "https://x.com", icon: "x" },
] as const;
