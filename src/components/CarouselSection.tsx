"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Sparkles } from "lucide-react";
import { landingData } from "@/data/landingData";

const AUTO_PLAY_INTERVAL = 4000; // 4s por slide

export default function CarouselSection() {
  const { carousel } = landingData;
  const total = carousel.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Touch and drag tracking
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx: number) => {
    setActiveIndex(idx);
  };

  // Autoplay effect
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const timer = setInterval(() => {
      nextSlide();
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, nextSlide, activeIndex]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    } else if (e.key === " ") {
      e.preventDefault();
      setIsPlaying((prev) => !prev);
    }
  };

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (diff > minSwipeDistance) {
      nextSlide();
    } else if (diff < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  /**
   * Calcula el desplazamiento relativo en un carrusel circular.
   * Retorna una distancia entre -total/2 y total/2 para centrar al activo.
   */
  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section
      id="galeria"
      className="relative py-24 sm:py-32 bg-[#0b0809] overflow-hidden select-none"
      aria-roledescription="carousel"
      aria-label="Galería visual de Vinos Alebrije"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Luces y destellos ambientales en el fondo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#651025]/20 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#d4af37]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabecera de la sección */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-gradient-to-r from-[#151013] via-[#420a17]/50 to-[#151013] px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-[#f7e2a9] uppercase shadow-lg shadow-[#651025]/20">
            <Sparkles className="h-3.5 w-3.5 text-[#d4af37]" />
            <span>Galería</span>
          </div>

          <h2 className="mt-5 font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            El espíritu en cada fotograma
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
            Una mirada exclusiva a la mística, el terroir y la pasión detrás de cada botella de <span className="text-[#d4af37]">Vinos Alebrije</span>.
          </p>
        </div>

        {/* Escenario 3D CoverFlow */}
        <div
          className="relative mt-12 sm:mt-16 w-full h-[380px] sm:h-[480px] md:h-[540px] flex items-center justify-center"
          style={{ perspective: "1200px" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {carousel.map((item, idx) => {
            const offset = getOffset(idx);
            const isActive = offset === 0;
            const isPrev = offset === -1;
            const isNext = offset === 1;

            // Clases de transformación 3D fluidas
            let transformStyles = "";
            let opacity = 0;
            let zIndex = 10;
            let pointerEvents: "auto" | "none" = "none";

            if (isActive) {
              transformStyles = "translateX(0%) translateZ(0px) rotateY(0deg) scale(1)";
              opacity = 1;
              zIndex = 30;
              pointerEvents = "auto";
            } else if (isPrev) {
              transformStyles =
                "translateX(-55%) sm:translateX(-58%) md:translateX(-62%) translateZ(-90px) rotateY(20deg) scale(0.86)";
              opacity = 0.55;
              zIndex = 20;
              pointerEvents = "auto";
            } else if (isNext) {
              transformStyles =
                "translateX(55%) sm:translateX(58%) md:translateX(62%) translateZ(-90px) rotateY(-20deg) scale(0.86)";
              opacity = 0.55;
              zIndex = 20;
              pointerEvents = "auto";
            } else if (offset === -2) {
              transformStyles = "translateX(-95%) translateZ(-180px) rotateY(30deg) scale(0.72)";
              opacity = 0.15;
              zIndex = 10;
            } else if (offset === 2) {
              transformStyles = "translateX(95%) translateZ(-180px) rotateY(-30deg) scale(0.72)";
              opacity = 0.15;
              zIndex = 10;
            } else {
              transformStyles = `translateX(${offset > 0 ? "130%" : "-130%"}) scale(0.6)`;
              opacity = 0;
              zIndex = 5;
            }

            return (
              <div
                key={item.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${idx + 1} de ${total}: ${item.caption}`}
                aria-hidden={!isActive}
                onClick={() => {
                  if (!isActive) goToSlide(idx);
                }}
                className={`absolute w-[86%] sm:w-[70%] md:w-[62%] lg:w-[56%] max-w-3xl aspect-[16/10] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform ${
                  !isActive ? "cursor-pointer hover:opacity-80" : ""
                }`}
                style={{
                  transform: transformStyles,
                  opacity,
                  zIndex,
                  pointerEvents,
                }}
              >
                {/* Contenedor de la tarjeta con borde sutil dorado y resplandor */}
                <div
                  className={`group relative h-full w-full overflow-hidden rounded-2xl sm:rounded-3xl border transition-all duration-500 bg-[#151013] ${
                    isActive
                      ? "border-[#d4af37]/50 shadow-2xl shadow-[#651025]/40 ring-1 ring-[#d4af37]/30"
                      : "border-white/10 shadow-lg shadow-black/60"
                  }`}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 800px"
                    className={`object-cover object-center transition-transform duration-1000 ${
                      isActive ? "scale-105 group-hover:scale-110" : "scale-100"
                    }`}
                    priority={idx === 0}
                  />

                  {/* Degradado cinematográfico oscuro */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />

                  {/* Texto y detalles del slide activo */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 z-20">
                    <div className="h-0.5 w-12 bg-gradient-to-r from-[#d4af37] to-transparent mb-3" />
                    <p className="font-serif text-lg sm:text-2xl md:text-3xl text-white font-medium leading-snug drop-shadow-md">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Botón Anterior */}
          <button
            onClick={prevSlide}
            aria-label="Ver imagen anterior"
            className="absolute left-1 sm:left-4 z-40 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/20 bg-[#151013]/85 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#d4af37] hover:bg-[#651025] hover:text-[#f7e2a9] active:scale-95 shadow-xl shadow-black/50"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Botón Siguiente */}
          <button
            onClick={nextSlide}
            aria-label="Ver imagen siguiente"
            className="absolute right-1 sm:right-4 z-40 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/20 bg-[#151013]/85 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#d4af37] hover:bg-[#651025] hover:text-[#f7e2a9] active:scale-95 shadow-xl shadow-black/50"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Barra de progreso y control de reproducción */}
        <div className="mt-8 flex items-center justify-between max-w-3xl mx-auto px-4 text-xs text-neutral-400">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying((prev) => !prev)}
              aria-label={isPlaying ? "Pausar reproducción automática" : "Reanudar reproducción automática"}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[#151013] px-3 py-1.5 text-xs font-medium text-neutral-300 transition-colors hover:border-[#d4af37]/50 hover:text-white"
            >
              {isPlaying ? (
                <>
                  <Pause className="h-3.5 w-3.5 text-[#d4af37]" />
                  <span>Pausar</span>
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5 text-[#d4af37]" />
                  <span>Reproducir</span>
                </>
              )}
            </button>
            <span className="hidden sm:inline text-neutral-500">• Desliza o usa las flechas del teclado</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Preview auxiliar para meta o vistas resumidas
export function getCarouselPreview() {
  return (
    <>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
        El Espíritu — Galería Cinematográfica
      </h2>
      <p className="mt-4 max-w-xl text-lg text-neutral-300">
        Explora las imágenes que mejor representan la esencia del vino y el arte de Vinos Alebrije.
      </p>
    </>
  );
}
