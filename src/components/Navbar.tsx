"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { landingData } from "@/data/landingData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0b0809]/95 backdrop-blur-md border-b border-[#420a17]/60 shadow-2xl py-3"
            : "bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo & Name */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#d4af37]/60 shadow-md transition-transform duration-300 group-hover:scale-105">
              <Image
                src={landingData.brand.logo}
                alt={landingData.brand.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.2em] font-bold text-white transition-colors group-hover:text-[#f7e2a9]">
                VINOS ALEBRIJE
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase">
                {landingData.brand.slogan}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {landingData.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs uppercase tracking-widest text-neutral-300 transition-colors duration-200 hover:text-[#f7e2a9]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={landingData.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Vinos Alebrije"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700/60 bg-neutral-900/60 text-neutral-300 transition hover:border-[#d4af37]/50 hover:text-[#f7e2a9] hover:scale-105"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>

            <a
              href={landingData.createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#651025] to-[#881632] px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white shadow-lg shadow-[#651025]/30 transition duration-200 hover:from-[#881632] hover:to-[#b01e42] hover:scale-105 active:scale-95"
            >
              <MessageCircle className="h-4 w-4 text-[#f7e2a9]" />
              <span>Pedir por WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/80 text-white lg:hidden"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 pb-8">
          <nav className="flex flex-col gap-5 text-center my-auto">
            {landingData.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-xl tracking-wider text-neutral-200 transition hover:text-[#f7e2a9]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 mt-6">
            <a
              href={landingData.createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#651025] to-[#881632] py-3 text-sm font-semibold text-white shadow-lg"
            >
              <MessageCircle className="h-4 w-4 text-[#f7e2a9]" />
              <span>Pedir por WhatsApp</span>
            </a>

            <a
              href={landingData.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/60 py-3 text-sm text-neutral-300 hover:text-white"
            >
              <InstagramIcon className="h-4 w-4" />
              <span>{landingData.contact.instagramHandle}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
