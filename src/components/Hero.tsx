"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Sparkles, ChevronDown, Wine, Flame, Heart } from "lucide-react";
import { landingData } from "@/data/landingData";

export default function Hero() {
  const { hero } = landingData;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 sm:pt-44 pb-20"
    >
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.backgroundImage}
          alt="Viñedos Vinos Alebrije Cordillera de los Andes"
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Gradients: dark wine tones with subtle radiant vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0809] via-[#0b0809]/60 to-[#0b0809]/30" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[450px] w-[450px] rounded-full bg-[#881632]/25 blur-[130px] pointer-events-none animate-pulse-glow z-0" />
      <div className="absolute top-1/3 left-10 h-72 w-72 rounded-full bg-[#d4af37]/15 blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-gradient-to-r from-[#420a17]/90 via-[#151013]/90 to-[#420a17]/90 backdrop-blur-md px-4 py-1.5 text-xs font-semibold tracking-widest text-[#f7e2a9] uppercase shadow-lg shadow-[#420a17]/30 hover:scale-105 transition-transform duration-300">
          <Sparkles className="h-3.5 w-3.5 text-[#d4af37] animate-spin [animation-duration:8s]" />
          <span>{hero.badge}</span>
        </div>

        {/* Main Headline */}
        <h1 className="mt-6 font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.08]">
          {hero.titleLine1}{" "}
          <span className="block mt-2 bg-gradient-to-r from-[#f7e2a9] via-[#ffffff] to-[#d4af37] bg-clip-text text-transparent italic animate-shimmer">
            {hero.titleHighlight}
          </span>
        </h1>

        {/* Subtitle with punchy, youthful flow */}
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed font-light">
          {hero.subtitle}
        </p>

        {/* Dynamic Lifestyle Tags */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
          {[
            "🌅 Atardeceres & Terrazas",
            "🥂 Cero Poses, Puro Disfrute",
            "🍇 Uva Frizzante Chilena",
            "✨ Frescura Efervescente",
          ].map((tag, i) => (
            <span
              key={i}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-neutral-300 backdrop-blur-sm transition hover:border-[#d4af37]/40 hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={landingData.createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#651025] via-[#881632] to-[#b01e42] px-8 py-4 text-sm font-bold tracking-wider uppercase text-white shadow-xl shadow-[#651025]/50 transition duration-300 hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            <MessageCircle className="h-4 w-4 text-[#f7e2a9] relative z-10 transition-transform group-hover:rotate-12" />
            <span className="relative z-10">{hero.primaryCtaText}</span>
          </a>

          <Link
            href="#vinos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/70 backdrop-blur-md px-8 py-4 text-sm font-semibold tracking-wider uppercase text-neutral-200 transition duration-300 hover:border-[#d4af37]/60 hover:bg-neutral-800 hover:text-white hover:scale-105"
          >
            <Wine className="h-4 w-4 text-[#d4af37]" />
            <span>{hero.secondaryCtaText}</span>
          </Link>
        </div>

        {/* Modern Bento-style Metric Cards */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 pt-8 border-t border-white/10">
          {hero.stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#151013]/70 backdrop-blur-md p-4 transition-all duration-300 hover:border-[#d4af37]/50 hover:bg-[#151013]/95 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#651025]/20"
            >
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#f7e2a9] group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-neutral-400 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-neutral-400 hover:text-white transition z-10">
        <Link href="#historia" aria-label="Ir a sección de historia">
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
