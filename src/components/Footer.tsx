"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Heart } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { landingData } from "@/data/landingData";

export default function Footer() {
  const { brand, contact, navigation } = landingData;
  const [year, setYear] = useState("2025");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="border-t border-[#420a17]/50 bg-[#070506] text-neutral-400 text-xs py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#d4af37]/60">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-widest text-white block">
                  {brand.name}
                </span>
                <span className="text-[11px] tracking-widest text-[#d4af37] uppercase">
                  {brand.slogan}
                </span>
              </div>
            </div>

            <p className="text-neutral-400 font-light leading-relaxed max-w-sm">
              {brand.description}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-[#d4af37] hover:text-[#f7e2a9] transition"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={landingData.createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-[#d4af37] hover:text-[#f7e2a9] transition"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold tracking-wider text-white uppercase">
              Navegación
            </h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-[#f7e2a9] transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal and Disclaimer */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold tracking-wider text-white uppercase">
              Consumo Responsable
            </h4>
            <p className="text-[11px] text-neutral-400 leading-relaxed">
              {brand.legalNotice}
            </p>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-[11px] text-neutral-400">
              📍 Hecho con pasión vitivinícola en {brand.originRegion}.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            © {year} {brand.name}. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-1">
            Plantilla diseñada para <span className="text-[#f7e2a9] font-medium">{brand.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
