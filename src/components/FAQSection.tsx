"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { landingData } from "@/data/landingData";

export default function FAQSection() {
  const { faqs } = landingData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="preguntas" className="relative py-24 sm:py-32 bg-[#0b0809]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#d4af37] uppercase">
            RESOLVEMOS TUS DUDAS
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Preguntas Frecuentes
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light">
            Todo lo que necesitas saber sobre nuestros vinos, despachos y consumo óptimo.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#151013] transition-colors hover:border-[#d4af37]/30"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="font-serif text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#d4af37] transition-transform duration-300 shrink-0 ml-4 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-300 font-light leading-relaxed border-t border-white/5 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center text-sm text-neutral-400">
          ¿Tienes otra pregunta?{" "}
          <a
            href={landingData.createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f7e2a9] font-medium underline hover:text-white"
          >
            Pregúntanos directamente por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
