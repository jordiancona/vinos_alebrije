"use client";

import Image from "next/image";
import { Heart, ExternalLink } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { landingData } from "@/data/landingData";

export default function InstagramFeed() {
  const { instagramGallery, contact } = landingData;

  return (
    <section className="relative py-20 bg-[#0b0809] border-t border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#d4af37] uppercase">
              <InstagramIcon className="h-4 w-4" />
              <span>COMUNIDAD EN VIVO</span>
            </div>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-white">
              Sigue la historia en Instagram
            </h2>
            <p className="mt-2 text-sm text-neutral-400">
              Comparte tus momentos con el hashtag <strong className="text-[#f7e2a9]">#VinosAlebrije</strong> y etiquétanos.
            </p>
          </div>

          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/80 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:border-[#d4af37] hover:text-[#f7e2a9] hover:scale-105 shrink-0"
          >
            <InstagramIcon className="h-4 w-4 text-[#d4af37]" />
            <span>Seguir {contact.instagramHandle}</span>
            <ExternalLink className="h-3 w-3 text-neutral-400" />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {instagramGallery.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-[#151013] block"
            >
              <Image
                src={post.imageUrl}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4">
                <div className="flex items-center gap-1.5 text-xs text-[#f7e2a9] font-medium mb-1">
                  <Heart className="h-3.5 w-3.5 fill-[#d4af37] text-[#d4af37]" />
                  <span>{post.likes}</span>
                </div>
                <p className="text-[11px] text-neutral-200 line-clamp-2 leading-tight">
                  {post.caption}
                </p>
                <div className="mt-2 text-[10px] text-[#d4af37] uppercase tracking-wider font-semibold">
                  Ver en Instagram →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
