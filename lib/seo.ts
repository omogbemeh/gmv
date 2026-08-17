export const siteConfig = {
  name: "Goodness & Mercy Ventures",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://goodnessandmercyventures.com",
  description:
    "Luxury Nigerian fabrics and accessories from Ikorodu, Lagos, with international shipping from Nigeria.",
  address: "32 NBC Road, Ikorodu, Lagos, Nigeria",
  phone: "+234 808 581 3294",
  markets: ["Nigeria", "Lagos", "Abuja", "Port Harcourt", "United Kingdom", "United States", "Canada", "Europe"],
};

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) {
    return path;
  }

  return `${siteConfig.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
