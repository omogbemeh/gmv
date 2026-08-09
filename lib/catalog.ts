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

const imagePath = (path: string) => `/assets/images/${path}`;

export const whatsappNumber = "2348085813294";

export function buildWhatsAppLink(context: string) {
  const message = `Hello Goodness & Mercy Ventures, I would like to ask about ${context}. I am shopping for an event and would like help with options, colours, and availability.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const categories: Collection[] = [
  {
    slug: "lace",
    name: "Lace",
    eyebrow: "Owambe favourite",
    description: "Rich lace for weddings, birthdays, thanksgiving, mothers of the day, and stylish party guests.",
    image: imagePath("lace/lace-1.jpeg"),
    href: "/categories/lace",
  },
  {
    slug: "ankara",
    name: "Ankara",
    eyebrow: "Colourful everyday luxury",
    description: "Vibrant Ankara prints for birthdays, family events, church looks, and coordinated group outfits.",
    image: imagePath("ankara/ankara-1.jpeg"),
    href: "/categories/ankara",
  },
  {
    slug: "jewelry",
    name: "Jewelry",
    eyebrow: "Gele-friendly shine",
    description: "Necklaces, earrings, and statement pieces selected to lift lace, Ankara, and evening looks.",
    image: imagePath("accessories/jewelery/jewelry-1.jpeg"),
    href: "/categories/jewelry",
  },
  {
    slug: "bags",
    name: "Bags",
    eyebrow: "Occasion finish",
    description: "Structured bags and clutches for church, reception, birthday dinner, and owambe styling.",
    image: imagePath("accessories/bags/bag-1.jpeg"),
    href: "/categories/bags",
  },
];

export const occasions: Collection[] = [
  {
    slug: "weddings",
    name: "Weddings",
    eyebrow: "Engagement to reception",
    description: "Shop lace, aso-oke, jewelry, shoes, and bags for brides, mothers, friends, and wedding guests.",
    image: imagePath("lace/lace-10.jpeg"),
    href: "/occasions/weddings",
  },
  {
    slug: "aso-ebi-groups",
    name: "Aso-Ebi Groups",
    eyebrow: "Family and friend sets",
    description: "Coordinate colours, fabrics, and accessories for friends, family, societies, and event committees.",
    image: imagePath("ankara/ankara-8.jpeg"),
    href: "/occasions/aso-ebi-groups",
  },
  {
    slug: "birthdays",
    name: "Birthdays",
    eyebrow: "Birthday slay",
    description: "Statement lace, Ankara, jewelry, heels, and bags for celebrants, dinners, shoots, and parties.",
    image: imagePath("accessories/bags/bag-7.jpeg"),
    href: "/occasions/birthdays",
  },
];

export const products: Product[] = [
  {
    slug: "premium-lace-selection",
    name: "Premium Lace Selection",
    category: "lace",
    occasions: ["weddings", "aso-ebi-groups", "birthdays"],
    summary: "Lace options for owambe entrances, wedding guests, birthdays, and aso-ebi groups.",
    description:
      "A curated lace selection for customers who want colour, shine, and a polished Nigerian occasion look.",
    images: [imagePath("lace/lace-1.jpeg"), imagePath("lace/lace-10.jpeg"), imagePath("lace/lace-11.jpeg")],
    details: [
      "Send your event colour and we will confirm what is currently available, suggest matching jewelry or bags, and help you choose a polished option before you visit.",
    ],
  },
  {
    slug: "aso-ebi-lace-options",
    name: "Aso-Ebi Lace Options",
    category: "lace",
    occasions: ["weddings", "aso-ebi-groups"],
    summary: "Coordinated lace directions for family, friends, societies, and event committees.",
    description:
      "A practical starting point for groups choosing one fabric direction for a wedding, introduction, or party.",
    images: [imagePath("lace/lace-16.jpeg"), imagePath("lace/lace-7.jpeg"), imagePath("lace/lace-6.jpeg")],
    details: [
      "Share your group size, budget range, and preferred colour family on WhatsApp so we can guide you toward options that work for everyone.",
    ],
  },
  {
    slug: "ankara-occasion-prints",
    name: "Ankara Occasion Prints",
    category: "ankara",
    occasions: ["birthdays", "aso-ebi-groups"],
    summary: "Vibrant Ankara prints for birthdays, church events, and coordinated family looks.",
    description:
      "Colourful Ankara options for celebrants, family gatherings, thanksgiving, and friends who want a joyful look.",
    images: [imagePath("ankara/ankara-1.jpeg"), imagePath("ankara/ankara-2.jpeg"), imagePath("ankara/ankara-3.jpeg")],
    details: [
      "Send screenshots or colour inspiration and we will help narrow the options before you come to the Ikorodu store.",
    ],
  },
  {
    slug: "bold-ankara-selection",
    name: "Bold Ankara Selection",
    category: "ankara",
    occasions: ["birthdays", "aso-ebi-groups"],
    summary: "Stronger print directions for customers who want colour and personality.",
    description:
      "A confident Ankara edit for birthday looks, group outfits, and statement traditional styling.",
    images: [imagePath("ankara/ankara-8.jpeg"), imagePath("ankara/ankara-9.jpeg"), imagePath("ankara/ankara-12.jpeg")],
    details: [
      "Ask about current yardage, repeat pattern, and matching accessories so the full outfit feels complete.",
    ],
  },
  {
    slug: "statement-jewelry-set",
    name: "Statement Jewelry Set",
    category: "jewelry",
    occasions: ["weddings", "birthdays", "aso-ebi-groups"],
    summary: "Jewelry for finishing lace, iro and buba, gele, and evening occasion looks.",
    description:
      "A bright finishing set for customers who want their outfit, gele, bag, and shoes to feel coordinated without losing elegance.",
    images: [
      imagePath("accessories/jewelery/jewelry-1.jpeg"),
      imagePath("accessories/jewelery/jewelry-2.jpeg"),
      imagePath("accessories/jewelery/jewelry-3.jpeg"),
    ],
    details: ["Send a photo of your fabric, gele, or dress and we will help match the jewelry to the full look."],
  },
  {
    slug: "occasion-bags-selection",
    name: "Occasion Bags Selection",
    category: "bags",
    occasions: ["weddings", "birthdays"],
    summary: "Bags and clutches for church, receptions, birthday dinners, and party looks.",
    description:
      "A polished bag edit for wedding guests, celebrants, and customers completing a premium Nigerian occasion outfit.",
    images: [imagePath("accessories/bags/bag-1.jpeg"), imagePath("accessories/bags/bag-2.jpeg"), imagePath("accessories/bags/bag-3.jpeg")],
    details: [
      "Send your outfit colour and occasion type so we can suggest bags that finish the look without competing with it.",
    ],
  },
];

export const categoryPhotos: Record<string, string[]> = {
  lace: [
    "lace-1",
    "lace-2",
    "lace-3",
    "lace-4",
    "lace-5",
    "lace-6",
    "lace-7",
    "lace-8",
    "lace-9",
    "lace-10",
    "lace-11",
    "lace-12",
    "lace-13",
    "lace-14",
    "lace-15",
    "lace-16",
    "lace-17",
    "lace-18",
    "lace-19",
  ].map((name) => imagePath(`lace/${name}.jpeg`)),
  ankara: [
    "ankara-1",
    "ankara-2",
    "ankara-3",
    "ankara-4",
    "ankara-5",
    "ankara-6",
    "ankara-7",
    "ankara-8",
    "ankara-9",
    "ankara-10",
    "ankara-11",
    "ankara-12",
  ].map((name) => imagePath(`ankara/${name}.jpeg`)),
  jewelry: [
    "jewelry-1",
    "jewelry-2",
    "jewelry-3",
    "jewelry-4",
    "jewelry-5",
    "jewelry-6",
    "jewelry-7",
    "jewelry-8",
    "jewelry-9",
    "jewelry-10",
    "jewelry-11",
  ].map((name) => imagePath(`accessories/jewelery/${name}.jpeg`)),
  bags: [
    "bag-1",
    "bag-2",
    "bag-3",
    "bag-4",
    "bag-5",
    "bag-6",
    "bag-7",
    "bag-8",
    "bag-9",
  ].map((name) => imagePath(`accessories/bags/${name}.jpeg`)),
};

export const customerPhotos = [
  imagePath("customer-photos/customer-review-1.jpeg"),
  imagePath("customer-photos/customer-review-2.jpeg"),
  imagePath("customer-photos/customer-review-3.jpeg"),
];

const galleryProductCopy: Record<
  string,
  {
    name: string;
    occasions: string[];
    summary: string;
    description: string;
    details: string;
  }
> = {
  lace: {
    name: "Lace Option",
    occasions: ["weddings", "aso-ebi-groups", "birthdays"],
    summary: "A lace option for weddings, owambe, birthdays, and aso-ebi planning.",
    description:
      "A lace option from the Goodness & Mercy Ventures gallery. Message us with the option number so we can confirm colour, yardage, and current availability.",
    details:
      "Send this option on WhatsApp with your event date, colour preference, and quantity. We will help confirm availability and suggest matching jewelry or bags.",
  },
  ankara: {
    name: "Ankara Option",
    occasions: ["birthdays", "aso-ebi-groups"],
    summary: "An Ankara print option for birthdays, family events, and group outfits.",
    description:
      "An Ankara option from the Goodness & Mercy Ventures gallery. Message us with the option number so we can confirm current stock and styling ideas.",
    details:
      "Send this option on WhatsApp with your event type and preferred colour direction. We will help confirm yardage and matching accessories.",
  },
  jewelry: {
    name: "Jewelry Option",
    occasions: ["weddings", "birthdays", "aso-ebi-groups"],
    summary: "A jewelry option for finishing lace, Ankara, gele, and evening looks.",
    description:
      "A jewelry option from the Goodness & Mercy Ventures gallery. Message us with the option number and a photo of your outfit for matching help.",
    details:
      "Send this option on WhatsApp with your fabric, dress, or gele photo. We will help you choose a polished match for the full look.",
  },
  bags: {
    name: "Bag Option",
    occasions: ["weddings", "birthdays"],
    summary: "A bag option for church, receptions, birthday dinners, and owambe looks.",
    description:
      "A bag option from the Goodness & Mercy Ventures gallery. Message us with the option number so we can confirm availability and matching ideas.",
    details:
      "Send this option on WhatsApp with your outfit colour and occasion type. We will help you pick a bag that completes the look.",
  },
};

export const galleryProducts: Product[] = Object.entries(categoryPhotos).flatMap(([category, photos]) => {
  const copy = galleryProductCopy[category];

  return photos.map((photo, index) => {
    const optionNumber = index + 1;

    return {
      slug: `${category}-option-${optionNumber}`,
      name: `${copy.name} ${optionNumber}`,
      category,
      occasions: copy.occasions,
      summary: copy.summary,
      description: copy.description,
      images: [photo],
      details: [copy.details],
    };
  });
});

export const allProducts = [...products, ...galleryProducts];

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

export function getGalleryProductsByCategory(slug: string) {
  return galleryProducts.filter((product) => product.category === slug);
}

export function getProductsByOccasion(slug: string) {
  return allProducts.filter((product) => product.occasions.includes(slug));
}

export function getProduct(slug: string) {
  return allProducts.find((product) => product.slug === slug);
}

export function getCollection(type: CollectionType, slug: string) {
  const source = type === "category" ? categories : occasions;

  return source.find((collection) => collection.slug === slug);
}
