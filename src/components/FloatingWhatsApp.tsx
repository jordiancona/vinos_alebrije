"use client";

import { MessageCircle } from "lucide-react";
import { landingData } from "@/data/landingData";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Contacto directo" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">

      {/* Floating button */}
      <a
        href={landingData.createWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Vinos Alebrije por WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#25d366] to-[#128c7e] text-white shadow-2xl shadow-[#25d366]/40 transition duration-300 hover:scale-110 active:scale-95 group"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25d366]/40 animate-ping pointer-events-none" />
        <MessageCircle className="h-8 w-8 transition-transform group-hover:rotate-12" />
      </a>
    </aside>
  );
}
