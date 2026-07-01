import React from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/data/portfolio";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact via WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#D1FF00] rounded-full flex items-center justify-center text-[#080808] hover:scale-110 transition-transform duration-300 whatsapp-pulse"
    >
      <MessageCircle size={24} strokeWidth={2} />
    </a>
  );
}
