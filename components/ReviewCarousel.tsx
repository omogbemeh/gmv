"use client";

import { useState } from "react";

type Review = {
  quote: string;
  name: string;
  context: string;
};

type ReviewCarouselProps = {
  reviews: Review[];
};

export function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  const [active, setActive] = useState(0);
  const review = reviews[active];

  function move(direction: number) {
    setActive(
      (current) => (current + direction + reviews.length) % reviews.length,
    );
  }

  return (
    <section className="bg-ink py-20 text-cream">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="section-kicker text-hot-pink-light">
              Customer Reviews{" "}
            </p>
            <h2 className="section-title text-cream">
              Chosen with confidence.
            </h2>
          </div>
          <div className="border-l border-hot-pink/40 pl-6">
            <p className="font-serif text-3xl leading-tight sm:text-4xl">
              “{review.quote}”
            </p>
            <div className="mt-8 flex items-center justify-between gap-4">
              <div>
                <p className="font-bold text-hot-pink-light">{review.name}</p>
                <p className="mt-1 text-sm text-cream/60">{review.context}</p>
              </div>
              <div className="flex gap-2">
                <button
                  className="carousel-button-dark"
                  type="button"
                  onClick={() => move(-1)}
                  aria-label="Previous review"
                >
                  ‹
                </button>
                <button
                  className="carousel-button-dark"
                  type="button"
                  onClick={() => move(1)}
                  aria-label="Next review"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
