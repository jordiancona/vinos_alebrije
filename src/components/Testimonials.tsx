"use client";

import { Star, Quote } from "lucide-react";
import { landingData } from "@/data/landingData";

export default function Testimonials() {
  const { testimonials } = landingData;

  return (
    <section id="testimonios" className="relative py-24 sm:py-32 bg-[#0d090c] overflow-hidden">
      <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-[#651025]/15 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#d4af37] uppercase">
            REPUTACIÓN & PALADAR
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Lo que dicen de Alebrije
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light">
            Historias y opiniones de quienes ya han compartido un brindis con nuestras burbujas.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#151013] p-8 shadow-xl transition duration-300 hover:border-[#d4af37]/40 hover:-translate-y-1 hover:shadow-2xl"
            >
              <Quote className="h-8 w-8 text-[#d4af37]/30 mb-4" />

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#d4af37] text-[#d4af37]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="flex-1 text-sm text-neutral-300 leading-relaxed font-light italic">
                “{t.quote}”
              </p>

              {/* Author Info */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="font-serif text-base font-bold text-white">
                  {t.author}
                </div>
                <div className="text-xs text-[#d4af37]">{t.role}</div>
                <div className="text-[11px] text-neutral-500 mt-0.5">{t.city}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
