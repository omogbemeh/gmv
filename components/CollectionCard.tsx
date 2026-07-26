import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/lib/catalog";

type CollectionCardProps = {
  collection: Collection;
  textFirst?: boolean;
};

export function CollectionCard({ collection, textFirst = false }: CollectionCardProps) {
  const image = (
    <div className="relative aspect-[4/5] overflow-hidden">
      <Image
        src={collection.image}
        alt={`${collection.name} collection at Goodness and Mercy Ventures`}
        fill
        sizes="(min-width: 1024px) 24vw, (min-width: 768px) 45vw, 90vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-80" />
    </div>
  );

  const copy = (
    <div className="border-x border-hot-pink/12 p-6">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-hot-pink">{collection.eyebrow}</p>
      <h3 className="mt-3 font-serif text-3xl">{collection.name}</h3>
      <p className="mt-3 leading-7 text-ink/64">{collection.description}</p>
      {textFirst ? (
        <span className="mt-6 inline-flex text-sm font-bold text-hot-pink">
          Plan your {collection.name.toLowerCase()} look
        </span>
      ) : null}
    </div>
  );

  return (
    <Link href={collection.href} className="group block bg-white">
      {textFirst ? copy : image}
      {textFirst ? image : copy}
      <div className="border-b border-hot-pink/12" />
    </Link>
  );
}
