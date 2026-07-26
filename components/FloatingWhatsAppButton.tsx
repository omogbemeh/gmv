import { WhatsAppIcon } from "./WhatsAppIcon";

type FloatingWhatsAppButtonProps = {
  href: string;
};

export function FloatingWhatsAppButton({ href }: FloatingWhatsAppButtonProps) {
  return (
    <a
      href={href}
      className="fixed bottom-5 right-5 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-ink/25 transition hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
      aria-label="Send Goodness and Mercy Ventures a message on WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
