"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { landingData } from "@/data/landingData";

export default function CarouselSection() {
  const { carousel } = landingData;
  const [active, setActive] = useState(0);

  const goTo = (idx: number) => {
    setActive(idx);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + carousel.length) % carousel.length);
  };

  const next = () => {
    setActive((prev) => (prev + 1) % carousel.length);
  };

  return (
    <section
      id="carrusel"
      className="relative py-24 sm:py-32 bg-[#0b0809] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#151013] px-3.5 py-1 text-xs font-semibold tracking-[0.2em] text-[#d4af37] uppercase">
            <span>Galería visual</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            El espíritu en cada fotograma
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light max-w-2xl mx-auto">
            Una selección de nuestras imágenes favoritas para contar la estética
            y la pasión que se refleja en cada etiqueta.
          </p>
        </div>

        {/* Slider main carousel */}
        <div className="relative mt-14 sm:mt-20">
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-[#651025]/20">
            {/* Horizontal track */}
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${active * (100 / carousel.length)}%)` }}
            >
              {carousel.map((item, idx) => (
                <div
                  key={item.id}
                  className="min-w-full flex-shrink-0 px-2"
                  style={{ perspective: "1000px" }}
                >
                  <div
                    className={`relative aspect-[4/3] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#151013] shadow-xl ${
                      idx === 0
                        ? "rotate-y-0 translate-z-0"
                        : idx === 1
                        ? "rotate-y-[-45deg] translate-z-[120px]"
                        : idx === 2
                        ? "rotate-y-[-20deg] translate-z-[80px]"
                        : idx === 3
                        ? "rotate-y-[20deg] translate-z-[80px]"
                        : idx === 4
                        ? "rotate-y-[45deg] translate-z-[120px]"
                        : "rotate-y-0 translate-z-0"
                    }`}
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.caption}
                      fill
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"
                      style={{ opacity: idx === 2 || idx === 3 ? 1 : idx === 1 || idx === 4 ? 0.7 : 0.45 }}
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white"
                      style={{ opacity: idx === 2 || idx === 3 ? 1 : idx === 1 || idx === 4 ? 0.7 : 0.45 }}
                    >
                      <p className="font-serif text-lg sm:text-xl text-[#f7e2a9] leading-snug">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev button */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0b0809]/80 text-white backdrop-blur-md transition hover:bg-[#151013] hover:text-[#d4af37]"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Next button */}
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0b0809]/80 text-white backdrop-blur-md transition hover:bg-[#151013] hover:text-[#d4af37]"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

// Preview: comma-separated titles of the 6 carousel images
export function getCarouselPreview() {
  return (
    <>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
        El Espíritu — Galería
      </h2>
      <p className="mt-4 max-w-xl text-lg text-neutral-300">
        Explora las imágenes que mejor representan la esencia del vino y el
        arte de Vinos Alebrije.
      </p>
      <ul className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-neutral-400">
        {[
          "Burbujas al atardecer",
          "Servicio perfecto a 6°C",
          "La cordillera vigila",
          "Uvas cosechadas a mano",
          "Manos artesanas",
          "Ritual del frizzante",
        ].map((cap, idx) => (
          <li key={idx}>{cap}</li>
        ))} 🍷
      </ul>
    </>
  );
}
