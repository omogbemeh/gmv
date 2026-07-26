export type CollectionType = "category" | "occasion";

export type Collection = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  image: string;
  href: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  occasions: string[];
  summary: string;
  description: string;
  images: string[];
  details: string[];
};

export const whatsappNumber = "2348085813294";

export function buildWhatsAppLink(context: string) {
  const message = `Hello Goodness & Mercy Ventures, I would like to ask about ${context}. I am shopping for an event and would like help with options, colours, and availability.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const categories: Collection[] = [
  {
    slug: "aso-oke",
    name: "Aso-Oke",
    eyebrow: "Yoruba ceremony weave",
    description: "Aso-oke for brides, grooms, parents, family sets, engagement looks, and premium aso-ebi.",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=85",
    href: "/categories/aso-oke",
  },
  {
    slug: "lace",
    name: "Lace",
    eyebrow: "Owambe favourite",
    description: "Rich lace for weddings, birthdays, thanksgiving, mothers of the day, and stylish party guests.",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=85",
    href: "/categories/lace",
  },
  {
    slug: "ankara",
    name: "Ankara",
    eyebrow: "Colourful everyday luxury",
    description: "Vibrant Ankara prints for birthdays, family events, church looks, and coordinated group outfits.",
    image:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
    href: "/categories/ankara",
  },
  {
    slug: "accessories",
    name: "Accessories",
    eyebrow: "Full outfit finish",
    description: "Jewelry, bags, watches, gele-friendly pieces, and Italian shoes to complete the look.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85",
    href: "/categories/accessories",
  },
];

export const occasions: Collection[] = [
  {
    slug: "weddings",
    name: "Weddings",
    eyebrow: "Engagement to reception",
    description: "Shop lace, aso-oke, jewelry, shoes, and bags for brides, mothers, friends, and wedding guests.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",
    href: "/occasions/weddings",
  },
  {
    slug: "aso-ebi-groups",
    name: "Aso-Ebi Groups",
    eyebrow: "Family and friend sets",
    description: "Coordinate colours, fabrics, and accessories for friends, family, societies, and event committees.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85",
    href: "/occasions/aso-ebi-groups",
  },
  {
    slug: "birthdays",
    name: "Birthdays",
    eyebrow: "Birthday slay",
    description: "Statement lace, Ankara, jewelry, heels, and bags for celebrants, dinners, shoots, and parties.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=85",
    href: "/occasions/birthdays",
  },
];

export const products: Product[] = [
  {
    slug: "fuchsia-crystal-lace",
    name: "Fuchsia Crystal Lace",
    category: "lace",
    occasions: ["weddings", "birthdays"],
    summary: "Hot-pink lace with shine for owambe entrances, birthday shoots, and wedding guest looks.",
    description:
      "A bold luxury lace for Nigerian customers who want colour, shine, and a polished look for owambe, receptions, and milestone celebrations.",
    images: [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
    ],
    details: [
      "Ideal for weddings, birthdays, and Saturday owambe",
      "Pairs well with cream, gold, or silver gele and accessories",
      "Ask on WhatsApp for current yardage and matching pieces",
    ],
  },
  {
    slug: "cream-gold-aso-oke",
    name: "Cream & Gold Aso-Oke Set",
    category: "aso-oke",
    occasions: ["weddings", "aso-ebi-groups"],
    summary: "Cream and gold aso-oke for engagement, introduction, and elegant family styling.",
    description:
      "A classic Yoruba ceremony direction with a soft cream base and gold-toned richness, suited for coordinated family outfits and premium aso-ebi.",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    ],
    details: [
      "Strong choice for traditional weddings and introductions",
      "Works for bride, groom, parents, and family aso-ebi sets",
      "Available options may vary in-store, so confirm on WhatsApp",
    ],
  },
  {
    slug: "statement-jewelry-set",
    name: "Statement Jewelry Set",
    category: "accessories",
    occasions: ["weddings", "birthdays", "aso-ebi-groups"],
    summary: "Jewelry for finishing lace, iro and buba, gele, and evening occasion looks.",
    description:
      "A bright finishing set for customers who want their outfit, gele, bag, and shoes to feel coordinated without losing elegance.",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1506629905607-d9c297d4f5f5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85",
    ],
    details: [
      "Complements lace, aso-oke, Ankara, and adire looks",
      "Good for wedding guests, celebrants, and gifting",
      "Send a photo of your fabric or outfit for matching",
    ],
  },
  {
    slug: "italian-heels-and-clutch",
    name: "Italian Heels & Clutch",
    category: "accessories",
    occasions: ["weddings", "birthdays"],
    summary: "Italian shoes and clutch pairings for church, reception, dinner, and party looks.",
    description:
      "A polished accessory pairing for wedding guests, celebrants, and customers completing a premium Nigerian occasion outfit.",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=85",
    ],
    details: [
      "Best matched in-store or via WhatsApp photos",
      "Ask for current sizes before visiting",
      "Pairs well with lace, Ankara, aso-oke, and dinner dresses",
    ],
  },
  {
    slug: "ankara-celebration-fabric",
    name: "Ankara Celebration Fabric",
    category: "ankara",
    occasions: ["birthdays", "aso-ebi-groups"],
    summary: "Vibrant Ankara for birthday outfits, family events, and coordinated group styling.",
    description:
      "A colourful, expressive fabric option for celebrants, church groups, family events, and friends who want a joyful but elevated look.",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85",
    ],
    details: [
      "Great for birthdays, family parties, and aso-ebi groups",
      "Ask for matching accessories and colour ideas",
      "Colour options can be sourced based on your event theme",
    ],
  },
];

export const reviews = [
  {
    quote:
      "They helped us choose rich lace, gele-friendly jewelry, and shoes for my sister's wedding. Everything matched.",
    name: "T. Adeyemi",
    context: "Wedding guest",
  },
  {
    quote:
      "Our aso-ebi group needed one colour direction for the whole family. They made it easy on WhatsApp before we visited.",
    name: "M. Balogun",
    context: "Aso-ebi coordinator",
  },
  {
    quote:
      "The cream and gold aso-oke recommendation was classy. I got compliments from the introduction to the reception.",
    name: "K. Olowu",
    context: "Bride's family",
  },
];

export function getProductsByCategory(slug: string) {
  return products.filter((product) => product.category === slug);
}

export function getProductsByOccasion(slug: string) {
  return products.filter((product) => product.occasions.includes(slug));
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCollection(type: CollectionType, slug: string) {
  const source = type === "category" ? categories : occasions;

  return source.find((collection) => collection.slug === slug);
}
