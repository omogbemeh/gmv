import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { ProductCard } from "@/components/ProductCard";
import { SiteHeader } from "@/components/SiteHeader";
import { buildWhatsAppLink, getCollection, getProductsByOccasion, occasions } from "@/lib/catalog";

type OccasionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return occasions.map((occasion) => ({ slug: occasion.slug }));
}

export async function generateMetadata({ params }: OccasionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const occasion = getCollection("occasion", slug);

  if (!occasion) {
    return {};
  }

  return {
    title: `${occasion.name} Outfits | Goodness & Mercy Ventures`,
    description: occasion.description,
  };
}

export default async function OccasionPage({ params }: OccasionPageProps) {
  const { slug } = await params;
  const occasion = getCollection("occasion", slug);

  if (!occasion) {
    notFound();
  }

  const filteredProducts = getProductsByOccasion(slug);
  const whatsappHref = buildWhatsAppLink(`${occasion.name} styling`);

  return (
    <main className="min-h-screen bg-cream text-ink">
      <SiteHeader overlay />
      <section className="relative min-h-[62vh] overflow-hidden bg-ink text-cream">
        <Image src={occasion.image} alt={`${occasion.name} styling`} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink/62" />
        <div className="relative mx-auto flex min-h-[62vh] w-full max-w-7xl flex-col justify-end px-5 pb-14 pt-32 sm:px-8 lg:px-10">
          <p className="section-kicker text-hot-pink-light">{occasion.eyebrow}</p>
          <h1 className="mt-3 font-serif text-5xl leading-none sm:text-7xl">{occasion.name}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/76">{occasion.description}</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-5 border-b border-ink/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Selected for the event</p>
            <h2 className="section-title">Shop for {occasion.name}.</h2>
          </div>
          <a className="button-secondary" href={whatsappHref}>
            Ask on WhatsApp
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
      <FloatingWhatsAppButton href={whatsappHref} />
    </main>
  );
}
