"use client";

import Image from "next/image";
import { Thermometer, Sparkles, Wine, Heart, CheckCircle2 } from "lucide-react";
import { landingData } from "@/data/landingData";

export default function FrizzanteRitual() {
  const { ritual } = landingData;

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "thermometer":
        return <Thermometer className="h-5 w-5 text-[#f7e2a9]" />;
      case "sparkle":
        return <Sparkles className="h-5 w-5 text-[#f7e2a9]" />;
      case "glass":
        return <Wine className="h-5 w-5 text-[#f7e2a9]" />;
      case "heart":
        return <Heart className="h-5 w-5 text-[#f7e2a9]" />;
      default:
        return <Sparkles className="h-5 w-5 text-[#f7e2a9]" />;
    }
  };

  return (
    <section id="ritual" className="relative py-24 sm:py-32 bg-[#0d090c] overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#651025]/15 blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#d4af37] uppercase">
            EXPERIENCIA SENSORIAL
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            {ritual.title}
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light">
            {ritual.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid with Visual Pouring Image */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Ritual Image Feature */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black aspect-[3/4] group">
              <Image
                src="/images/ritual-pour.jpg"
                alt="Servicio del vino frizzante Alebrije en copa de cristal"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#0b0809]/85 backdrop-blur-md p-5 text-center">
                <span className="font-serif text-lg font-bold text-[#f7e2a9]">
                  Burbujas Finas & Sutiles
                </span>
                <p className="text-xs text-neutral-400 mt-1">
                  Efervescencia natural que acaricia el paladar sin saturar.
                </p>
              </div>
            </div>
          </div>

          {/* Steps Column */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ritual.steps.map((s, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-[#151013]/90 p-6 backdrop-blur-sm transition duration-300 hover:border-[#d4af37]/40 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-[#d4af37]/40">
                      {s.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#420a17]/50 border border-[#651025]/60">
                      {getStepIcon(s.icon)}
                    </div>
                  </div>
                  <h3 className="mt-3 font-serif text-xl font-bold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-300 font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Explanatory Box: ¿Qué hace único al Frizzante? */}
            <div className="mt-4 rounded-2xl border border-[#420a17] bg-gradient-to-r from-[#200c14] to-[#151013] p-6 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                    ESPÍRITU MODERNO
                  </span>
                  <h4 className="font-serif text-lg font-bold text-white">
                    ¿Por qué el Frizzante conquista a las nuevas generaciones?
                  </h4>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#651025]/60 border border-[#b01e42]/60 px-3 py-1 text-xs font-semibold text-[#f7e2a9] shrink-0">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Sin Protocolos Rígidos</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-neutral-300">
                <div className="flex items-start gap-2.5 rounded-xl bg-white/[0.02] p-3 border border-white/5">
                  <CheckCircle2 className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Burbuja Amable:</strong>
                    Gas natural de baja presión que no llena ni cansa.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 rounded-xl bg-white/[0.02] p-3 border border-white/5">
                  <CheckCircle2 className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Aromas Vivos:</strong>
                    Frutillas, pétalos y cítricos que explotan al servir.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 rounded-xl bg-white/[0.02] p-3 border border-white/5">
                  <CheckCircle2 className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">En Copa o con Hielo:</strong>
                    Tómalo como más te guste, cuando más te guste.
                  </div>
                </div>
              </div>

              {/* Lifestyle Vibe Bar */}
              <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                <span className="text-[11px] text-neutral-400 font-medium">Vibras Ideales:</span>
                {[
                  "🌅 Sunset & Terrazas",
                  "🍕 Pizza & Serie",
                  "🏖️ Días de Sol",
                  "🥂 La Previa con Amigos",
                ].map((vibe, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-[#d4af37]/30 bg-[#151013] px-2.5 py-0.5 text-[11px] font-semibold text-[#f7e2a9]"
                  >
                    {vibe}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
