"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/catalog";
import { ProductCard } from "./ProductCard";

type ProductCarouselProps = {
  products: Product[];
};

export function ProductCarousel({ products }: ProductCarouselProps) {
  const [start, setStart] = useState(0);
  const visibleProducts = useMemo(
    () => [0, 1, 2].map((offset) => products[(start + offset) % products.length]),
    [products, start],
  );

  function move(direction: number) {
    setStart((current) => (current + direction + products.length) % products.length);
  }

  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="section-kicker">Featured products</p>
          <h2 className="section-title">Pieces to start with.</h2>
        </div>
        <div className="flex gap-2">
          <button className="carousel-button" type="button" onClick={() => move(-1)} aria-label="Previous products">
            ‹
          </button>
          <button className="carousel-button" type="button" onClick={() => move(1)} aria-label="Next products">
            ›
          </button>
        </div>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {visibleProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
