"use client";

import { useState } from "react";
import { MessageCircle, Mail, MapPin, Clock, Send, Sparkles } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { landingData } from "@/data/landingData";

export default function ContactSection() {
  const { contact, wines } = landingData;
  const [selectedWine, setSelectedWine] = useState(wines[0]?.name || "Alebrije Frizzante Rosé");
  const [quantity, setQuantity] = useState("2");
  const [city, setCity] = useState("");
  const [customNotes, setCustomNotes] = useState("");

  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = contact.whatsappNumber.replace(/[^0-9]/g, "");
    const msg = `¡Hola Vinos Alebrije! 🍷\nMe gustaría hacer un pedido:\n\n• Vino: *${selectedWine}*\n• Cantidad: *${quantity} botella(s)*\n${city ? `• Destino/Ciudad: *${city}*\n` : ""}${customNotes ? `• Nota especial: ${customNotes}\n` : ""}\n¿Podrían indicarme el total y los datos de transferencia o pago? ¡Gracias!`;
    
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contacto" className="relative py-24 sm:py-32 bg-[#0d090c] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[#651025]/20 blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#d4af37] uppercase">
            ATENCIÓN DIRECTA & PEDIDOS
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Lleva Alebrije a tu Mesa
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light">
            Prepara tu pedido en segundos y coordina el despacho de forma directa con nosotros a través de WhatsApp.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Formulario Simulador de Pedido */}
          <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-[#151013] p-8 sm:p-10 shadow-2xl relative">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-2">
              <Sparkles className="h-4 w-4" />
              <span>Simulador de Pedido Rápido</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-6">
              Configura tu solicitud
            </h3>

            <form onSubmit={handleWhatsAppOrder} className="space-y-5">
              {/* Selección de Vino */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Selecciona la Variedad
                </label>
                <select
                  value={selectedWine}
                  onChange={(e) => setSelectedWine(e.target.value)}
                  className="w-full rounded-xl border border-neutral-700 bg-neutral-900/90 px-4 py-3 text-sm text-white focus:border-[#d4af37] focus:outline-none"
                >
                  {wines.map((wine) => (
                    <option key={wine.id} value={wine.name}>
                      {wine.name} ({wine.price})
                    </option>
                  ))}
                  {wines.length > 1 && (
                    <option value="Caja Mixta (Surtido Especial)">
                      Caja Mixta Especial (Surtido de Variedades)
                    </option>
                  )}
                </select>
              </div>

              {/* Cantidad de Botellas */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Selecciona tu Pack
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "2", label: "Pack x2", desc: "Cita / Terraza" },
                    { id: "6", label: "Caja x6", desc: "Juntada con amigos" },
                    { id: "12", label: "Caja x12", desc: "Fiesta / Evento" },
                  ].map((q) => (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setQuantity(q.id)}
                      className={`rounded-2xl p-3 text-center transition ${
                        quantity === q.id
                          ? "bg-[#651025] text-white border border-[#b01e42] shadow-lg shadow-[#651025]/40 scale-102"
                          : "border border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white"
                      }`}
                    >
                      <div className="text-xs font-bold uppercase tracking-wider">{q.label}</div>
                      <div className="text-[10px] text-neutral-400 mt-0.5">{q.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Ciudad o Comuna */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Ciudad o Comuna de Despacho
                </label>
                <input
                  type="text"
                  placeholder="Ej: Las Condes, Santiago / Viña del Mar / etc."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full rounded-xl border border-neutral-700 bg-neutral-900/90 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-[#d4af37] focus:outline-none"
                />
              </div>

              {/* Comentarios o Dudas */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Nota o Consulta Adicional (Opcional)
                </label>
                <textarea
                  rows={3}
                  placeholder="¿Es para regalo? ¿Requieres entrega en una fecha específica?"
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  className="w-full rounded-xl border border-neutral-700 bg-neutral-900/90 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-[#d4af37] focus:outline-none resize-none"
                />
              </div>

              {/* Botón WhatsApp */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#651025] to-[#881632] py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-xl shadow-[#651025]/40 transition duration-300 hover:from-[#881632] hover:to-[#b01e42] hover:scale-[1.01]"
              >
                <MessageCircle className="h-4 w-4 text-[#f7e2a9]" />
                <span>Enviar Pedido a WhatsApp</span>
              </button>

              <p className="text-center text-[11px] text-neutral-500">
                Al presionar, se abrirá tu aplicación de WhatsApp con el mensaje estructurado listo para enviar.
              </p>
            </form>
          </div>

          {/* Información de Contacto y Canales */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="rounded-3xl border border-white/10 bg-[#151013] p-8 shadow-xl space-y-6">
              <h3 className="font-serif text-2xl font-bold text-white border-b border-white/10 pb-4">
                Canales Oficiales
              </h3>

              <div className="space-y-5 text-sm">
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-neutral-300 hover:text-[#f7e2a9] transition group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-[#d4af37]/50 shrink-0">
                    <InstagramIcon className="h-5 w-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <strong className="block text-white">Instagram Oficial:</strong>
                    <span className="text-xs text-neutral-400 group-hover:underline">
                      {contact.instagramHandle}
                    </span>
                  </div>
                </a>

                <a
                  href={landingData.createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-neutral-300 hover:text-[#f7e2a9] transition group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-[#d4af37]/50 shrink-0">
                    <MessageCircle className="h-5 w-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <strong className="block text-white">WhatsApp Pedidos:</strong>
                    <span className="text-xs text-neutral-400 group-hover:underline">
                      {contact.whatsappDisplay}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-neutral-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 shrink-0">
                    <MapPin className="h-5 w-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <strong className="block text-white">Origen & Viñedos:</strong>
                    <span className="text-xs text-neutral-400">
                      {landingData.brand.originRegion}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-neutral-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 shrink-0">
                    <Clock className="h-5 w-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <strong className="block text-white">Horario de Atención:</strong>
                    <span className="text-xs text-neutral-400">
                      {contact.schedule}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Banner Garantía Artesanal */}
            <div className="rounded-3xl border border-[#420a17] bg-gradient-to-r from-[#2a0711] to-[#151013] p-7 shadow-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                Compromiso de Calidad
              </span>
              <h4 className="mt-1 font-serif text-xl font-bold text-white">
                Embalaje Especial Anti-Impacto
              </h4>
              <p className="mt-2 text-xs text-neutral-300 font-light leading-relaxed">
                Todas nuestras botellas viajan en cajas térmicas y reforzadas para garantizar que las burbujas y el vino lleguen en estado impecable a tu puerta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
