import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { ProductCard } from "@/components/ProductCard";
import { SiteHeader } from "@/components/SiteHeader";
import {
  buildWhatsAppLink,
  categories,
  getCollection,
  getGalleryProductsByCategory,
  getProductsByCategory,
} from "@/lib/catalog";
import { absoluteUrl, siteConfig } from "@/lib/seo";

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

  const title = `${category.name} in Nigeria - Shop with International Shipping`;
  const description = `${category.description} Shop from Goodness & Mercy Ventures in Ikorodu, Lagos, with delivery across Nigeria and international shipping from Nigeria.`;

  return {
    title,
    description,
    alternates: {
      canonical: category.href,
    },
    openGraph: {
      type: "website",
      url: category.href,
      title,
      description,
      images: [
        {
          url: absoluteUrl(category.image),
          alt: `${category.name} at ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(category.image)],
    },
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
  const galleryProducts = getGalleryProductsByCategory(slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: category.name,
        item: absoluteUrl(category.href),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-cream text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
        <div className="mt-8 bg-white p-6">
          <h2 className="font-serif text-3xl leading-none">Available in Nigeria and overseas.</h2>
          <p className="mt-4 leading-8 text-ink/66">
            Shop {category.name.toLowerCase()} from Ikorodu, Lagos, with delivery support for customers in Nigeria,
            the UK, USA, Canada, Europe, and other international markets. Send your event date, colour direction,
            and quantity on WhatsApp for current options.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {galleryProducts.length > 0 ? (
        <section className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
          <div className="border-b border-ink/10 pb-8">
            <p className="section-kicker">Photo gallery</p>
            <h2 className="section-title">More {category.name} options.</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {galleryProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
      ) : null}
      <FloatingWhatsAppButton href={whatsappHref} />
    </main>
  );
}
