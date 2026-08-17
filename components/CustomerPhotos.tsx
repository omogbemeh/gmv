import Image from "next/image";

type CustomerPhotosProps = {
  photos: string[];
};

export function CustomerPhotos({ photos }: CustomerPhotosProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-5 border-b border-hot-pink/12 pb-8 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Customer photos</p>
            <h2 className="section-title">Styled for real occasions.</h2>
          </div>
          <p className="max-w-sm leading-7 text-ink/62">
            Real wedding, aso-ebi, and occasion styling from customers. More styles are available in-store and on
            WhatsApp.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((photo, index) => (
            <div key={photo} className="relative aspect-[3/4] overflow-hidden bg-cream">
              <Image
                src={photo}
                alt={`Goodness and Mercy Ventures customer style ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
