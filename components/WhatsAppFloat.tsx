import Icon from "./Icon";
import { whatsappLink } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Hi Petal & Bloom! I'd like to ask about your flowers.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-lg shadow-black/20 transition hover:scale-105 hover:shadow-xl"
    >
      <Icon name="whatsapp" className="h-7 w-7" />
      <span className="hidden text-sm font-semibold sm:block">
        Chat with us
      </span>
    </a>
  );
}
