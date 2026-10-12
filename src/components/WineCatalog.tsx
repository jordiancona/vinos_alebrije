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
  Clock,
  Compass,
  Zap,
} from "lucide-react";
import { landingData, WineProduct } from "@/data/landingData";

export default function WineCatalog() {
  const { wines } = landingData;
  const [activeTab, setActiveTab] = useState<"cata" | "maridaje" | "detalles">("cata");
  const [selectedPack, setSelectedPack] = useState<{ qty: number; label: string }>({
    qty: 2,
    label: "Pack x2 (Ideal para compartir)",
  });

  const featuredWine = wines[0];

  return (
    <section id="vinos" className="relative py-24 sm:py-32 bg-[#0b0809]">
      {/* Background Radiant Atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[#881632]/15 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#151013] px-3.5 py-1 text-xs font-semibold tracking-[0.2em] text-[#d4af37] uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            <span>EDICIÓN ARTESANAL</span>
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Nuestra Creación Insignia
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Un vino frizzante joven, vibrante y refrescante. Creado para quienes buscan disfrutar sin protocolos acartonados: burbujas vivaces, notas frutales y frescura pura.
          </p>
        </div>

        {/* FEATURED SPOTLIGHT SHOWCASE (Optimizado para el producto estrella) */}
        {featuredWine && (
          <div className="mt-16 mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#151013]/90 shadow-2xl backdrop-blur-xl relative">
            {/* Top Glowing Gradient Bar */}
            <div className="h-2 w-full bg-gradient-to-r from-[#420a17] via-[#d4af37] to-[#881632]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-center">
              {/* Columna Izquierda: Botella con Efecto Glow y Badges */}
              <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
                {/* Glow de la botella */}
                <div className="absolute inset-0 bg-radial-[at_center_center] from-[#881632]/40 via-transparent to-transparent blur-2xl" />

                <div className="relative h-80 sm:h-96 w-full max-w-xs overflow-hidden rounded-2xl bg-gradient-to-b from-[#20141a] to-[#0d090b] border border-white/10 shadow-2xl group flex items-center justify-center p-4">
                  <Image
                    src={featuredWine.image}
                    alt={featuredWine.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151013] via-transparent to-transparent opacity-60" />

                  {/* Stamp flotante sobre la foto */}
                  <div className="absolute top-4 left-4 rounded-full border border-[#d4af37]/60 bg-[#151013]/90 px-3 py-1 text-[11px] font-bold tracking-wider text-[#f7e2a9] uppercase shadow-lg">
                    {featuredWine.badge || "Insignia de la Casa"}
                  </div>
                </div>

                {/* Chips rápidos debajo de la botella */}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-neutral-300 font-medium">
                    🍷 {featuredWine.specs.alcohol}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-neutral-300 font-medium">
                    🧊 {featuredWine.specs.temperature}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-neutral-300 font-medium">
                    🫧 Frizzante Natural
                  </span>
                </div>
              </div>

              {/* Columna Derecha: Información, Perfil Sensorial y Opciones de Compra */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
                    <span>{featuredWine.variety}</span>
                    <span>•</span>
                    <span>{featuredWine.specs.terroir}</span>
                  </div>

                  <h3 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-white">
                    {featuredWine.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#f7e2a9] italic font-light">
                    “{featuredWine.tagline}”
                  </p>

                  <p className="mt-4 text-sm text-neutral-300 font-light leading-relaxed">
                    {featuredWine.description}
                  </p>

                  {/* Vibe / Sensación Meters */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                      <div className="text-[#f7e2a9] font-bold">12% Vol</div>
                      <div className="text-[10px] text-neutral-400 mt-0.5">Grado Óptimo</div>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                      <div className="text-[#f7e2a9] font-bold">6° a 8°C</div>
                      <div className="text-[10px] text-neutral-400 mt-0.5">Servir Muy Frío</div>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                      <div className="text-[#f7e2a9] font-bold">Aguja Fina</div>
                      <div className="text-[10px] text-neutral-400 mt-0.5">Burbuja Suave</div>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                      <div className="text-[#f7e2a9] font-bold">Andino</div>
                      <div className="text-[10px] text-neutral-400 mt-0.5">Chile</div>
                    </div>
                  </div>

                  {/* Ocasiones & Vibra Recomendada */}
                  <div className="mt-5 flex flex-wrap items-center gap-1.5 text-[11px]">
                    <span className="text-neutral-400 font-medium mr-1">Momentos top:</span>
                    {[
                      "🌅 Atardecer en Terraza",
                      "🍕 Pizza & Burgers",
                      "🥂 Brindis Relajado",
                      "🧀 Tablas de Queso",
                    ].map((m, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-neutral-300 font-medium"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Pestañas Interactivas: Notas de Cata vs Maridaje */}
                  <div className="mt-6">
                    <div className="flex border-b border-white/10 gap-4 text-xs font-semibold uppercase tracking-wider">
                      <button
                        onClick={() => setActiveTab("cata")}
                        className={`pb-2 transition ${
                          activeTab === "cata"
                            ? "text-[#f7e2a9] border-b-2 border-[#d4af37]"
                            : "text-neutral-400 hover:text-white"
                        }`}
                      >
                        Notas de Cata
                      </button>
                      <button
                        onClick={() => setActiveTab("maridaje")}
                        className={`pb-2 transition ${
                          activeTab === "maridaje"
                            ? "text-[#f7e2a9] border-b-2 border-[#d4af37]"
                            : "text-neutral-400 hover:text-white"
                        }`}
                      >
                        Maridajes Sugeridos
                      </button>
                    </div>

                    <div className="mt-4">
                      {activeTab === "cata" && (
                        <div className="space-y-2.5 text-xs text-neutral-300">
                          <div className="flex items-start gap-2 rounded-xl bg-white/[0.02] p-3 border border-white/5">
                            <Eye className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-white">A la Vista:</strong>{" "}
                              {featuredWine.tastingNotes.view}
                            </div>
                          </div>
                          <div className="flex items-start gap-2 rounded-xl bg-white/[0.02] p-3 border border-white/5">
                            <Sparkles className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-white">En Nariz:</strong>{" "}
                              {featuredWine.tastingNotes.nose}
                            </div>
                          </div>
                          <div className="flex items-start gap-2 rounded-xl bg-white/[0.02] p-3 border border-white/5">
                            <Wine className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-white">En Boca:</strong>{" "}
                              {featuredWine.tastingNotes.mouth}
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === "maridaje" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                          {featuredWine.pairing.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 rounded-xl bg-white/[0.02] p-3 border border-white/5"
                            >
                              <CheckCircle2 className="h-4 w-4 text-[#d4af37] shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Barra de Pedido Directo con Selección de Pack */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-xs text-neutral-400">Precio de Referencia:</div>
                      <div className="font-serif text-3xl font-bold text-white">
                        {featuredWine.price}
                      </div>
                      <div className="text-[11px] text-[#f7e2a9]">
                        {featuredWine.priceNote}
                      </div>
                    </div>

                    {/* Selector de Pack Rápido */}
                    <div className="flex items-center gap-2">
                      {[
                        { qty: 1, label: "1 Botella" },
                        { qty: 2, label: "Pack x2" },
                        { qty: 6, label: "Caja x6" },
                      ].map((pack) => (
                        <button
                          key={pack.qty}
                          onClick={() => setSelectedPack(pack)}
                          className={`rounded-xl px-3 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                            selectedPack.qty === pack.qty
                              ? "bg-[#651025] text-white border border-[#b01e42] shadow-md shadow-[#651025]/40"
                              : "border border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white"
                          }`}
                        >
                          {pack.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Botón WhatsApp de Acción Inmediata */}
                  <a
                    href={landingData.createWhatsAppLink(featuredWine.name, selectedPack.qty)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#651025] via-[#881632] to-[#b01e42] py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-[#651025]/50 transition duration-300 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <MessageCircle className="h-4 w-4 text-[#f7e2a9]" />
                    <span>Pedir {selectedPack.label} por WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Si en el futuro se agregan más vinos en landingData.ts (> 1), se despliegan automáticamente aquí */}
        {wines.length > 1 && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wines.slice(1).map((wine) => (
              <div
                key={wine.id}
                className="rounded-3xl border border-white/10 bg-[#151013] p-6 shadow-xl"
              >
                <h4 className="font-serif text-xl font-bold text-white">{wine.name}</h4>
                <p className="text-xs text-neutral-400 mt-1">{wine.variety}</p>
                <div className="font-serif text-2xl font-bold text-white mt-4">{wine.price}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
