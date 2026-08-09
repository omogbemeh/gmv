import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { SiteHeader } from "@/components/SiteHeader";
import { buildWhatsAppLink, categories, getProduct, products } from "@/lib/catalog";

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
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const category = categories.find((item) => item.slug === product.category);
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

          <div className="mt-10 bg-white p-6 shadow-xl shadow-hot-pink/8">
            <p className="section-kicker">Ready to match it?</p>
            <p className="mt-4 leading-8 text-ink/68">{product.details.join(" ")}</p>
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
