"use client";

import Image from "next/image";
import { Sparkles, Mountain, Wine, Quote } from "lucide-react";
import { landingData } from "@/data/landingData";

export default function StorySection() {
  const { story } = landingData;

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "sparkles":
        return <Sparkles className="h-6 w-6 text-[#f7e2a9]" />;
      case "mountain":
        return <Mountain className="h-6 w-6 text-[#f7e2a9]" />;
      case "glass":
        return <Wine className="h-6 w-6 text-[#f7e2a9]" />;
      default:
        return <Sparkles className="h-6 w-6 text-[#f7e2a9]" />;
    }
  };

  return (
    <section id="historia" className="relative py-24 sm:py-32 bg-[#0b0809] overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#651025]/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#d4af37]/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#d4af37] uppercase">
            {story.pretitle}
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            {story.title}
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <p className="mt-6 text-lg text-neutral-300 font-light leading-relaxed">
            {story.lead}
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative & Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="space-y-4 text-neutral-300 font-light leading-relaxed">
              {story.paragraphs.map((p, idx) => (
                <p key={idx} className="text-base sm:text-lg">
                  {p}
                </p>
              ))}
            </div>

            {/* 3 Pillars Cards (Arte • Tierra • Vino) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {story.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-[#151013]/80 p-5 backdrop-blur-sm transition duration-300 hover:border-[#d4af37]/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#651025]/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#420a17] to-[#151013] border border-[#651025]/50 shadow-inner">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-bold text-white">
                    {pillar.title}
                  </h3>
                  <div className="text-xs text-[#d4af37] font-medium tracking-wider uppercase mt-0.5">
                    {pillar.subtitle}
                  </div>
                  <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote Block */}
            <div className="relative mt-4 rounded-2xl border border-[#420a17] bg-gradient-to-r from-[#1f0a10] to-[#151013] p-6 shadow-lg">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-[#d4af37]/20" />
              <p className="font-serif italic text-base sm:text-lg text-[#f7e2a9] leading-relaxed">
                {story.quote.text}
              </p>
              <div className="mt-3 text-xs tracking-widest uppercase text-neutral-400">
                — {story.quote.author} ({story.quote.location})
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 aspect-[4/5] group">
              <Image
                src={story.imageHarvest}
                alt="Cosecha artesanal de uvas para Vinos Alebrije en Chile"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Floating Badge on Photo */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#0b0809]/85 backdrop-blur-md p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full border border-[#d4af37] overflow-hidden relative shrink-0">
                    <Image
                      src={landingData.brand.logo}
                      alt={landingData.brand.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-white">
                      Terroir Andino Seleccionado
                    </h4>
                    <p className="text-xs text-neutral-400">
                      Uvas cuidadas con aguas de deshielo cordillerano
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inset Decorative Element */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 rounded-2xl border border-[#d4af37]/40 bg-[#151013] p-4 shadow-2xl">
              <span className="text-xs font-semibold text-[#f7e2a9] tracking-wider uppercase">
                Edición de Autor
              </span>
              <div className="text-xs text-neutral-400 mt-0.5">
                Producción en lotes pequeños
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
