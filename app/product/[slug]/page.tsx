import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { SiteHeader } from "@/components/SiteHeader";
import { buildWhatsAppLink, categories, getProduct, occasions, products } from "@/lib/catalog";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} | Goodness & Mercy Ventures`,
    description: product.summary,
    openGraph: {
      images: product.images.slice(0, 1),
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const category = categories.find((item) => item.slug === product.category);
  const productOccasions = occasions.filter((occasion) => product.occasions.includes(occasion.slug));
  const whatsappHref = buildWhatsAppLink(product.name);

  return (
    <main className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <div className="mx-auto flex w-full max-w-7xl justify-end px-5 pt-6 sm:px-8 lg:px-10">
        <Link className="button-secondary" href={category?.href ?? "/"}>
          Back to {category?.name ?? "shop"}
        </Link>
      </div>

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 pb-20 pt-8 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden bg-white sm:col-span-2">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 90vw"
              className="object-cover"
            />
          </div>
          {product.images.slice(1).map((image, index) => (
            <div key={image} className="relative aspect-[4/5] overflow-hidden bg-white">
              <Image
                src={image}
                alt={`${product.name} photo ${index + 2}`}
                fill
                sizes="(min-width: 1024px) 28vw, 45vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="lg:sticky lg:top-8 lg:self-start">
          <p className="section-kicker">{category?.name ?? "Product"}</p>
          <h1 className="mt-4 font-serif text-5xl leading-none sm:text-7xl">{product.name}</h1>
          <p className="mt-6 text-lg leading-8 text-ink/70">{product.description}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {productOccasions.map((occasion) => (
              <Link
                key={occasion.slug}
                href={occasion.href}
                className="rounded-full border border-hot-pink/20 px-4 py-2 text-sm font-semibold text-hot-pink transition hover:border-hot-pink"
              >
                {occasion.name}
              </Link>
            ))}
          </div>

          <div className="mt-10 border-y border-hot-pink/14">
            {product.details.map((detail) => (
              <p key={detail} className="border-b border-hot-pink/14 py-4 leading-7 text-ink/68 last:border-b-0">
                {detail}
              </p>
            ))}
          </div>

          <a className="button-primary mt-8 w-full sm:w-fit" href={whatsappHref}>
            Ask about this product on WhatsApp
          </a>
        </div>
      </section>
      <FloatingWhatsAppButton href={whatsappHref} />
    </main>
  );
}
