import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/catalog";
import { WhatsAppIcon } from "./WhatsAppIcon";

type SiteHeaderProps = {
  overlay?: boolean;
};

export function SiteHeader({ overlay = false }: SiteHeaderProps) {
  const whatsappHref = buildWhatsAppLink("your latest fabrics and accessories");
  const headerClassName = overlay
    ? "absolute left-0 right-0 top-0 z-20 text-cream"
    : "border-b border-hot-pink/10 bg-cream/95 text-ink";
  const brandClassName = overlay ? "text-hot-pink-light" : "text-hot-pink";
  const navClassName = overlay ? "text-cream/78" : "text-ink/68";
  const hoverClassName = overlay ? "hover:text-hot-pink-light" : "hover:text-hot-pink";

  return (
    <header className={headerClassName}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Link href="/" className={`text-sm font-semibold uppercase tracking-[0.28em] ${brandClassName}`}>
          GMV
        </Link>
        <nav aria-label="Primary navigation" className={`hidden items-center gap-8 text-sm md:flex ${navClassName}`}>
          <Link className={`transition ${hoverClassName}`} href="/#occasions">
            Occasions
          </Link>
          <Link className={`transition ${hoverClassName}`} href="/#categories">
            Categories
          </Link>
          <Link className={`transition ${hoverClassName}`} href="/#products">
            Products
          </Link>
        </nav>
        <a className="button-primary gap-2" href={whatsappHref}>
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </header>
  );
}
