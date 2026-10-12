"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ShieldCheck, Wine } from "lucide-react";
import { landingData } from "@/data/landingData";

export default function AgeGateModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!landingData.brand.enableAgeGate) return;
    // Verificar si ya fue confirmado previamente
    const verified = localStorage.getItem("vinos_alebrije_age_verified");
    if (!verified) {
      setIsOpen(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem("vinos_alebrije_age_verified", "true");
    setIsOpen(false);
  };

  const handleReject = () => {
    window.location.href = "https://www.google.com";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[#420a17] bg-[#151013] p-8 text-center shadow-2xl shadow-[#420a17]/40">
        {/* Glow de fondo */}
        <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-[#651025]/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-[#d4af37]/20 blur-3xl pointer-events-none" />

        {/* Logo de la marca */}
        <div className="relative mx-auto mb-6 h-20 w-20 overflow-hidden rounded-full border-2 border-[#d4af37]/60 shadow-lg">
          <Image
            src={landingData.brand.logo}
            alt={landingData.brand.name}
            fill
            className="object-cover"
          />
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-3 py-1 text-xs font-medium tracking-widest text-[#f7e2a9] uppercase">
          <ShieldCheck className="h-3.5 w-3.5" />
          Verificación Legal
        </span>

        <h2 className="mt-4 font-serif text-2xl font-bold tracking-wide text-white sm:text-3xl">
          ¿Eres mayor de edad?
        </h2>

        <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
          Para ingresar a <strong className="text-white">{landingData.brand.name}</strong> debes tener la edad legal para consumir bebidas alcohólicas en tu país (+18 años).
        </p>

        <p className="mt-2 text-xs italic text-neutral-400">
          {landingData.brand.slogan} • {landingData.brand.tagline}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={handleConfirm}
            className="flex-1 rounded-xl bg-gradient-to-r from-[#651025] to-[#881632] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#651025]/50 transition duration-200 hover:from-[#881632] hover:to-[#b01e42] hover:scale-[1.02] active:scale-[0.98]"
          >
            Sí, soy mayor de 18
          </button>
          <button
            onClick={handleReject}
            className="rounded-xl border border-neutral-700 bg-neutral-900/60 px-5 py-3 text-sm font-medium text-neutral-400 transition hover:bg-neutral-800 hover:text-white"
          >
            No ingresar
          </button>
        </div>

        <p className="mt-6 text-[11px] text-neutral-500">
          {landingData.brand.legalNotice}
        </p>
      </div>
    </div>
  );
}
