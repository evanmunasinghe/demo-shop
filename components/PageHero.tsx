import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle: string;
  image: string;
};

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden pt-24">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-forest/70" />
      <div className="relative z-10 mx-auto max-w-3xl px-5 py-16 text-center text-white">
        <h1 className="text-4xl font-semibold font-display sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
