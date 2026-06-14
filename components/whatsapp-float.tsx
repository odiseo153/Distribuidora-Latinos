import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site-config";

export function WhatsappFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-15 items-center justify-center rounded-full bg-[#1fa855] text-white shadow-[0_20px_40px_-18px_rgba(31,168,85,0.8)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <img
        src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-whatsapp-icon-png-image_3584844.jpg"
        alt=""
        className="rounded-2xl"
      />
      <span className="sr-only">Escríbenos por WhatsApp</span>
    </a>
  );
}
