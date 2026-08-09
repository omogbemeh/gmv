import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { ProductCard } from "@/components/ProductCard";
import { SiteHeader } from "@/components/SiteHeader";
import {
  buildWhatsAppLink,
  categories,
  categoryPhotos,
  getCollection,
  getProductsByCategory,
} from "@/lib/catalog";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCollection("category", slug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.name} | Goodness & Mercy Ventures`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCollection("category", slug);

  if (!category) {
    notFound();
  }

  const filteredProducts = getProductsByCategory(slug);
  const whatsappHref = buildWhatsAppLink(`${category.name} products`);
  const photos = categoryPhotos[slug] ?? [];

  return (
    <main className="min-h-screen bg-cream text-ink">
      <SiteHeader overlay />
      <section className="relative min-h-[62vh] overflow-hidden bg-ink text-cream">
        <Image src={category.image} alt={`${category.name} collection`} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink/62" />
        <div className="relative mx-auto flex min-h-[62vh] w-full max-w-7xl flex-col justify-end px-5 pb-14 pt-32 sm:px-8 lg:px-10">
          <p className="section-kicker text-hot-pink-light">{category.eyebrow}</p>
          <h1 className="mt-3 font-serif text-5xl leading-none sm:text-7xl">{category.name}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/76">{category.description}</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-5 border-b border-ink/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Available selections</p>
            <h2 className="section-title">Shop {category.name}.</h2>
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

      {photos.length > 0 ? (
        <section className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
          <div className="border-b border-ink/10 pb-8">
            <p className="section-kicker">Photo gallery</p>
            <h2 className="section-title">More {category.name} options.</h2>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {photos.map((photo, index) => (
              <div key={photo} className="relative aspect-[3/4] overflow-hidden bg-white">
                <Image
                  src={photo}
                  alt={`${category.name} option ${index + 1} at Goodness and Mercy Ventures`}
                  fill
                  sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}
      <FloatingWhatsAppButton href={whatsappHref} />
    </main>
  );
}
