import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/catalog";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}`} className="group block bg-white">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 45vw, 90vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="border-x border-b border-hot-pink/12 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-hot-pink">{product.category}</p>
        <h3 className="mt-3 font-serif text-3xl leading-none">{product.name}</h3>
        <p className="mt-3 leading-7 text-ink/64">{product.summary}</p>
      </div>
    </Link>
  );
}
