import AgeGateModal from "@/components/AgeGateModal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import WineCatalog from "@/components/WineCatalog";
import FrizzanteRitual from "@/components/FrizzanteRitual";
import PairingSection from "@/components/PairingSection";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0b0809] text-[#f5f2f0]">
      {/* Verificación de edad legal (18+) */}
      <AgeGateModal />

      {/* Barra de navegación superior con efecto de scroll y branding */}
      <Navbar />

      {/* Portada / Hero cinematográfico con viñedos andinos y llamado a la acción */}
      <Hero />

      {/* Filosofía de la marca: Arte • Tierra • Vino */}
      <StorySection />

      {/* Catálogo interactivo de vinos frizzante con filtros y notas de cata */}
      <WineCatalog />

      {/* El Ritual del Frizzante: 4 pasos para servir y disfrutar */}
      <FrizzanteRitual />

      {/* Guía gastronómica interactiva de maridajes y sommeliers */}
      <PairingSection />

      {/* Opiniones y testimonios de clientes */}
      <Testimonials />

      {/* Galería de Instagram conectada a @vinos_alebrije */}
      <InstagramFeed />

      {/* Preguntas frecuentes con acordeón interactivo */}
      <FAQSection />

      {/* Simulador rápido de pedidos por WhatsApp y canales de contacto */}
      <ContactSection />

      {/* Pie de página con créditos, navegación y consumo responsable */}
      <Footer />

      {/* Botón flotante de contacto directo por WhatsApp */}
      <FloatingWhatsApp />
    </main>
  );
}
