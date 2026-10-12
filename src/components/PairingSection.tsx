"use client";

import { useState } from "react";
import { Utensils, Fish, Flame, Sparkles, Check } from "lucide-react";

export default function PairingSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pairings = [
    {
      category: "Tablas & Quesos",
      icon: Utensils,
      title: "La Armonía de los Lácteos y Frutos Secos",
      desc: "La acidez chispeante del vino frizzante corta suavemente la grasa de los quesos, limpiando el paladar en cada bocado.",
      recommendations: [
        "Queso brie y camembert con toques de miel",
        "Queso de cabra fresco con hierbas finas",
        "Almendras tostadas, nueces y prosciutto",
        "Focaccia tibia con aceite de oliva extra virgen",
      ],
      idealWine: "Alebrije Frizzante Rosé (Servido a 7°C)",
    },
    {
      category: "Cocina del Mar",
      icon: Fish,
      title: "La Frescura de las Costas Chilenas",
      desc: "El perlage fino exalta las texturas delicadas de los pescados y mariscos, ofreciendo una experiencia revitalizante.",
      recommendations: [
        "Ceviche clásico de reineta con leche de tigre",
        "Ostras frescas con unas gotas de limón",
        "Camarones al pil pil o a la plancha",
        "Tiraditos de salmón con toques cítricos",
      ],
      idealWine: "Alebrije Frizzante Blanco Aromático (Servido a 6°C)",
    },
    {
      category: "Tapas & Asados",
      icon: Flame,
      title: "El Encuentro entre Grasa y Burbuja",
      desc: "Para quienes disfrutan picoteos intensos o carnes ligeras, un frizzante tinto aporta frescor sin perder presencia.",
      recommendations: [
        "Pizzas a la piedra con rúcula y jamón serrano",
        "Hamburguesas artesanales con cebolla caramelizada",
        "Brochetas de carne con pimientos asados",
        "Empanadas de pino en masa fina",
      ],
      idealWine: "Alebrije Frizzante Tinto Joven (Servido a 9°C)",
    },
    {
      category: "Dulces & Brindis",
      icon: Sparkles,
      title: "El Cierre Dulce del Encuentro",
      desc: "Equilibra postres frutales sin resultar empalagoso, convirtiendo el final de la comida en una fiesta ligera.",
      recommendations: [
        "Cheesecake con coulis de frambuesa silvestre",
        "Pavlova con frutos rojos frescos",
        "Macedonia de frutas de estación",
        "Trufas de chocolate negro 70%",
      ],
      idealWine: "Alebrije Frizzante Rosé (Servido a 6°C)",
    },
  ];

  const current = pairings[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section id="maridaje" className="relative py-24 sm:py-32 bg-[#0b0809]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#d4af37] uppercase">
            ARTE GASTRONÓMICO
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Guía de Maridajes
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light">
            Descubre con qué acompañar tu botella de Alebrije para potenciar cada aroma y transformar cualquier velada.
          </p>

          {/* Tab Selector */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
            {pairings.map((p, idx) => {
              const Icon = p.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                    isActive
                      ? "bg-[#651025] text-white border border-[#b01e42] shadow-lg shadow-[#651025]/50 scale-105"
                      : "border border-neutral-800 bg-[#151013] text-neutral-400 hover:text-white hover:border-neutral-700"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-[#f7e2a9]" : "text-neutral-500"}`} />
                  <span>{p.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Card Display */}
        <div className="mt-12 mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#151013] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#881632]/10 blur-3xl pointer-events-none" />

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#420a17] border border-[#651025]">
              <CurrentIcon className="h-6 w-6 text-[#f7e2a9]" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Sugerencia Sommelier
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {current.title}
              </h3>
            </div>
          </div>

          <p className="mt-4 text-base text-neutral-300 font-light leading-relaxed">
            {current.desc}
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {current.recommendations.map((rec, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-sm text-neutral-200"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d4af37]/20 text-[#f7e2a9] shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>{rec}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-400">Maridaje recomendado con:</span>
              <span className="text-sm font-semibold text-[#f7e2a9]">
                {current.idealWine}
              </span>
            </div>

            <a
              href="#vinos"
              className="inline-flex items-center justify-center rounded-xl border border-[#d4af37]/40 bg-[#d4af37]/10 px-5 py-2 text-xs font-medium uppercase tracking-wider text-[#f7e2a9] hover:bg-[#d4af37]/20 transition"
            >
              Ver este vino en catálogo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
