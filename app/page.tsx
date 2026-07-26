import Image from "next/image";
import { CollectionCard } from "@/components/CollectionCard";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { ProductCarousel } from "@/components/ProductCarousel";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { SiteHeader } from "@/components/SiteHeader";
import {
  buildWhatsAppLink,
  categories,
  occasions,
  products,
  reviews,
} from "@/lib/catalog";

const whatsappHref = buildWhatsAppLink(
  "your latest lace, aso-oke, Ankara, and accessories",
);

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <SiteHeader overlay />

      <section className="relative min-h-screen overflow-hidden bg-ink text-cream">
        <Image
          src="/assets/images/hero.webp"
          alt="Goodness and Mercy Ventures luxury fabric display"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/58" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(33,19,21,0.92),rgba(33,19,21,0.5),rgba(33,19,21,0.16))]" />
        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.36em] text-hot-pink-light">
              Ikorodu Luxury Fabrics
            </p>
            <h1 className="font-serif text-5xl leading-[0.96] sm:text-6xl lg:text-8xl">
              Goodness & Mercy Ventures
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/78">
              Premium lace, Ankara, Adire, Aso-Oke, jewelry, watches, Italian
              shoes, and bags for Nigerian weddings, birthdays, thanksgiving,
              owambe, and beautifully coordinated aso-ebi orders.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="button-primary" href={whatsappHref}>
                Send a Message on WhatsApp
              </a>
              <a className="button-ghost button-ghost-light" href="#occasions">
                Shop occasions
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="occasions"
        className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="flex flex-col justify-between gap-5 border-b border-ink/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Shop by occasion</p>
            <h2 className="section-title">Start with your event.</h2>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {occasions.map((occasion) => (
            <CollectionCard
              key={occasion.slug}
              collection={occasion}
              textFirst
            />
          ))}
        </div>
      </section>

      <section
        id="categories"
        className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 lg:px-10"
      >
        <div className="flex flex-col justify-between gap-5 border-b border-ink/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Shop by category</p>
            <h2 className="section-title">Fabrics for the full look.</h2>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CollectionCard key={category.slug} collection={category} />
          ))}
        </div>
      </section>

      <section
        id="products"
        className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 lg:px-10"
      >
        <ProductCarousel products={products} />
      </section>

      <ReviewCarousel reviews={reviews} />

      <section
        id="visit"
        className="border-t border-hot-pink/10 bg-white py-16"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-3 lg:px-10">
          <div className="md:col-span-2">
            <p className="section-kicker">Visit the store</p>
            <h2 className="section-title">32 NBC Road, Ikorodu, Lagos.</h2>
          </div>
          <div className="self-end">
            <p className="leading-7 text-ink/65">
              Come in with your colour inspiration, event date, aso-ebi brief,
              or style screenshots. For the fastest response, start with
              WhatsApp and include photos of what you have in mind.
            </p>
            <a
              className="button-secondary mt-6 w-fit"
              href={buildWhatsAppLink("visiting the Ikorodu store")}
            >
              Start on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <FloatingWhatsAppButton href={whatsappHref} />
    </main>
  );
}
