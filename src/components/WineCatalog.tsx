"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MessageCircle,
  Sparkles,
  Thermometer,
  Wine,
  Eye,
  Info,
  Utensils,
  CheckCircle2,
  X,
} from "lucide-react";
import { landingData, WineProduct } from "@/data/landingData";

export default function WineCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedWine, setSelectedWine] = useState<WineProduct | null>(null);

  const filteredWines =
    activeCategory === "all"
      ? landingData.wines
      : landingData.wines.filter((wine) => wine.category === activeCategory);

  return (
    <section id="vinos" className="relative py-24 sm:py-32 bg-[#0b0809]">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/3 left-0 h-96 w-96 rounded-full bg-[#881632]/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#d4af37] uppercase">
            COLECCIÓN ARTESANAL
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Nuestros Vinos Frizzante
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light">
            Efervescencia natural nacida para refrescar tus sentidos. Cada variedad es un homenaje al color, la tierra y el gozo de compartir.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: "all", label: "Toda la Colección" },
              { id: "rose", label: "Frizzante Rosé" },
              { id: "tinto", label: "Frizzante Tinto" },
              { id: "blanco", label: "Frizzante Blanco" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-5 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-[#881632] text-white shadow-lg shadow-[#881632]/40 scale-105 border border-[#b01e42]"
                    : "border border-neutral-800 bg-[#151013]/60 text-neutral-400 hover:border-neutral-700 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWines.map((wine) => (
            <div
              key={wine.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#151013] transition-all duration-500 hover:border-[#d4af37]/50 hover:shadow-2xl hover:shadow-[#651025]/30 hover:-translate-y-2"
            >
              {/* Top Accent Gradient */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#420a17] via-[#d4af37] to-[#881632]" />

              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                {/* Badge & Category */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                    {wine.variety}
                  </span>
                  {wine.badge && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/15 px-2.5 py-0.5 text-[11px] font-medium text-[#f7e2a9]">
                      <Sparkles className="h-3 w-3 text-[#d4af37]" />
                      {wine.badge}
                    </span>
                  )}
                </div>

                {/* Product Title */}
                <h3 className="mt-3 font-serif text-2xl font-bold text-white transition-colors group-hover:text-[#f7e2a9]">
                  {wine.name}
                </h3>
                <p className="mt-1 text-xs italic text-neutral-400 font-light">
                  {wine.tagline}
                </p>

                {/* Image Showcase */}
                <div className="relative my-6 h-64 w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#20141a] to-[#0d090b] flex items-center justify-center p-3">
                  <Image
                    src={wine.image}
                    alt={wine.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151013] via-transparent to-transparent opacity-80" />
                </div>

                {/* Quick Specs Chips */}
                <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300">
                  <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-2">
                    <Wine className="h-4 w-4 text-[#d4af37] shrink-0" />
                    <span>{wine.specs.alcohol}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-2">
                    <Thermometer className="h-4 w-4 text-[#d4af37] shrink-0" />
                    <span>{wine.specs.temperature}</span>
                  </div>
                </div>

                {/* Description Excerpt */}
                <p className="mt-4 text-xs text-neutral-300 leading-relaxed font-light line-clamp-3">
                  {wine.description}
                </p>

                {/* Interactive Action: Ver Ficha Técnica */}
                <button
                  type="button"
                  onClick={() => setSelectedWine(wine)}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#f7e2a9] hover:underline font-medium cursor-pointer"
                >
                  <Info className="h-3.5 w-3.5" />
                  <span>Ver notas de cata y maridaje</span>
                </button>
              </div>

              {/* Price & Purchase Bar */}
              <div className="border-t border-white/10 bg-[#0e0a0c] p-6 flex items-center justify-between gap-3">
                <div>
                  <div className="font-serif text-2xl font-bold text-white">
                    {wine.price}
                  </div>
                  {wine.priceNote && (
                    <div className="text-[10px] text-neutral-400">
                      {wine.priceNote}
                    </div>
                  )}
                </div>

                <a
                  href={landingData.createWhatsAppLink(wine.name, 2)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#651025] to-[#881632] px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-white shadow-lg shadow-[#651025]/30 transition duration-300 hover:from-[#881632] hover:to-[#b01e42] hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-[#f7e2a9]" />
                  <span>Pedir</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL DETALLES Y FICHA TÉCNICA */}
      {selectedWine && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-[#420a17] bg-[#151013] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Botón Cerrar */}
            <button
              onClick={() => setSelectedWine(null)}
              className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/80 text-neutral-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
              <span>{selectedWine.variety}</span>
              {selectedWine.badge && <span>• {selectedWine.badge}</span>}
            </div>

            <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-white">
              {selectedWine.name}
            </h3>
            <p className="mt-1 text-sm text-neutral-400 italic">
              {selectedWine.tagline}
            </p>

            {/* Ficha Técnica: Notas de Cata */}
            <div className="mt-6 space-y-4">
              <h4 className="font-serif text-lg font-bold text-white border-b border-white/10 pb-2">
                Notas de Cata
              </h4>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#f7e2a9]">
                  <Eye className="h-4 w-4 text-[#d4af37]" /> A la Vista
                </div>
                <p className="mt-1 text-xs text-neutral-300">
                  {selectedWine.tastingNotes.view}
                </p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#f7e2a9]">
                  <Sparkles className="h-4 w-4 text-[#d4af37]" /> En Nariz
                </div>
                <p className="mt-1 text-xs text-neutral-300">
                  {selectedWine.tastingNotes.nose}
                </p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#f7e2a9]">
                  <Wine className="h-4 w-4 text-[#d4af37]" /> En Boca
                </div>
                <p className="mt-1 text-xs text-neutral-300">
                  {selectedWine.tastingNotes.mouth}
                </p>
              </div>
            </div>

            {/* Maridaje Recomendado */}
            <div className="mt-6">
              <h4 className="font-serif text-lg font-bold text-white border-b border-white/10 pb-2 flex items-center gap-2">
                <Utensils className="h-4 w-4 text-[#d4af37]" />
                Maridajes Sugeridos
              </h4>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                {selectedWine.pairing.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#d4af37] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Footer CTA */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-neutral-400">Precio Botella:</span>
                <div className="font-serif text-2xl font-bold text-white">
                  {selectedWine.price}
                </div>
              </div>

              <a
                href={landingData.createWhatsAppLink(selectedWine.name, 2)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#651025] to-[#881632] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-[#881632] hover:to-[#b01e42]"
              >
                <MessageCircle className="h-4 w-4 text-[#f7e2a9]" />
                <span>Pedir este vino por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
