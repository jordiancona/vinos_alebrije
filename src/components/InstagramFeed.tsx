"use client";

import Image from "next/image";
import { Heart, ExternalLink } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { landingData } from "@/data/landingData";

export default function InstagramFeed() {
  const { instagramGallery, contact } = landingData;

  return (
    <section className="relative py-24 bg-[#0b0809] border-t border-b border-white/5 overflow-hidden">
      {/* Background ambient warmth */}
      <div className="absolute top-1/2 right-1/4 h-80 w-80 rounded-full bg-[#881632]/10 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#151013] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#d4af37] uppercase">
              <span className="flex h-2 w-2 rounded-full bg-[#25d366] animate-pulse" />
              <span>COMUNIDAD & REDES</span>
            </div>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              La Vibra en Instagram
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-400 font-light max-w-xl">
              Etiquétanos en tus historias con <strong className="text-[#f7e2a9] font-medium">#VinosAlebrije</strong> y comparte cómo disfrutas tus tardes de frizzante.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#651025] to-[#881632] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#651025]/40 transition hover:from-[#881632] hover:to-[#b01e42] hover:scale-105 active:scale-95"
            >
              <InstagramIcon className="h-4 w-4 text-[#f7e2a9]" />
              <span>Seguir {contact.instagramHandle}</span>
              <ExternalLink className="h-3 w-3 text-neutral-300" />
            </a>
          </div>
        </div>

        {/* Gallery Grid with interactive glowing cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {instagramGallery.map((post, idx) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-[#151013] shadow-lg transition-all duration-300 hover:border-[#d4af37]/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#651025]/30 block"
            >
              <Image
                src={post.imageUrl}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4">
                <div className="flex items-center gap-1.5 text-xs text-[#f7e2a9] font-bold mb-1.5">
                  <Heart className="h-3.5 w-3.5 fill-[#d4af37] text-[#d4af37]" />
                  <span>{post.likes} me gusta</span>
                </div>
                <p className="text-[11px] text-neutral-200 line-clamp-2 leading-relaxed font-light">
                  {post.caption}
                </p>
                <div className="mt-2.5 text-[10px] text-[#f7e2a9] uppercase tracking-wider font-semibold flex items-center gap-1">
                  <span>Ver en Instagram</span>
                  <span>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Micro Community Banner */}
        <div className="mt-8 rounded-2xl border border-white/5 bg-[#151013]/60 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <span className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0b0809] bg-[#420a17] text-[#f7e2a9] text-xs font-bold leading-8 text-center">🍷</span>
              <span className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0b0809] bg-[#651025] text-[#f7e2a9] text-xs font-bold leading-8 text-center">✨</span>
              <span className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0b0809] bg-[#881632] text-[#f7e2a9] text-xs font-bold leading-8 text-center">🥂</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Únete a la comunidad de amantes del Frizzante</p>
              <p className="text-[11px] text-neutral-400">Publicamos recetas de cócteles ligeros, fechas de eventos y promociones exclusivas.</p>
            </div>
          </div>
          <span className="text-xs font-semibold text-[#d4af37] tracking-wider uppercase">
            @vinos_alebrije
          </span>
        </div>
      </div>
    </section>
  );
}
