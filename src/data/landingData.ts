/**
 * ==============================================================================
 * VINOS ALEBRIJE - ARCHIVO CENTRAL DE CONFIGURACIÓN Y CONTENIDO
 * ==============================================================================
 * Este archivo centraliza TODO el contenido de la landing page.
 * Cuando el dueño del negocio te comparta la información definitiva, textos,
 * precios o nuevas fotografías, solo tienes que editarlos aquí.
 *
 * Los componentes leerán automáticamente las modificaciones sin necesidad
 * de modificar el código HTML ni los componentes de React.
 * ==============================================================================
 */

export interface WineProduct {
  id: string;
  name: string;
  variety: string; // ej: "Frizzante Rosé", "Frizzante Tinto", etc.
  tagline: string;
  badge?: string; // ej: "Más Vendido", "Edición Limitada", "Cosecha 2025"
  price: string;
  priceNote?: string;
  image: string; // Ruta en /public/images/
  category: "all" | "rose" | "tinto" | "blanco" | "especial";
  specs: {
    alcohol: string; // ej: "10.5% Vol"
    temperature: string; // ej: "6°C - 8°C"
    sparkle: string; // ej: "Frizzante Natural (Aguja Fina)"
    terroir: string; // ej: "Valle Central, Chile"
  };
  tastingNotes: {
    view: string; // Color, brillo, burbuja
    nose: string; // Aromas
    mouth: string; // Sensación en paladar, final
  };
  pairing: string[]; // Maridajes sugeridos
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  city: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: string;
  link: string;
}

export const landingData = {
  // ----------------------------------------------------------------------------
  // 1. INFORMACIÓN GENERAL Y MARCA
  // ----------------------------------------------------------------------------
  brand: {
    name: "Vinos Alebrije",
    slogan: "Arte • Tierra • Vino",
    tagline: "Despierta tu espíritu",
    description:
      "Vino frizzante artesanal nacido al pie de la cordillera en Chile. Burbujas vivas, notas frescas y el misterio de la tierra en cada copa.",
    logo: "/images/logo.jpg",
    country: "Chile",
    originRegion: "Valle del Maipo / Valle Central, Chile",
    legalNotice: "El consumo excesivo de alcohol es perjudicial para la salud. Venta exclusiva a mayores de 18 años.",
    enableAgeGate: true, // Ponlo en false si deseas desactivar la ventana de confirmación de edad
  },

  // ----------------------------------------------------------------------------
  // 2. ENLACES DE CONTACTO Y REDES SOCIALES
  // (Modifica con el teléfono real de WhatsApp y redes del cliente)
  // ----------------------------------------------------------------------------
  contact: {
    instagramUrl: "https://www.instagram.com/vinos_alebrije",
    instagramHandle: "@vinos_alebrije",
    whatsappNumber: "+56912345678", // Reemplazar con el número real (con código de país)
    whatsappDisplay: "+56 9 1234 5678",
    email: "contacto@vinosalebrije.com",
    address: "Valle Central, Chile",
    schedule: "Atención y Pedidos: Lunes a Sábado de 10:00 a 20:00 hrs",
  },

  // ----------------------------------------------------------------------------
  // 3. BARRA DE NAVEGACIÓN
  // ----------------------------------------------------------------------------
  navigation: [
    { label: "Inicio", href: "#hero" },
    { label: "El Espíritu", href: "#historia" },
    { label: "Nuestros Vinos", href: "#vinos" },
    { label: "El Ritual", href: "#ritual" },
    { label: "Cata & Maridaje", href: "#maridaje" },
    { label: "Opiniones", href: "#testimonios" },
    { label: "Preguntas", href: "#preguntas" },
    { label: "Contacto", href: "#contacto" },
  ],

  // ----------------------------------------------------------------------------
  // 4. SECCIÓN HERO (PORTADA PRINCIPAL)
  // ----------------------------------------------------------------------------
  hero: {
    badge: "Vino Frizzante Artesanal • Chile 📍",
    titleLine1: "El Arte del Vino que",
    titleHighlight: "Despierta tu Espíritu",
    subtitle:
      "Una creación efervescente inspirada en la mística del alebrije y la pureza de los valles chilenos. Burbujas sutiles, notas frutales irresistibles y el equilibrio perfecto para celebrar la vida.",
    primaryCtaText: "Pedir por WhatsApp",
    secondaryCtaText: "Ver Colección",
    backgroundImage: "/images/hero.jpg",
    stats: [
      { value: "100%", label: "Cosecha Manual" },
      { value: "6°-8°C", label: "Servir Muy Frío" },
      { value: "Frizzante", label: "Burbuja Fina & Natural" },
      { value: "Chile", label: "Terroir de Cordillera" },
    ],
  },

  // ----------------------------------------------------------------------------
  // 5. FILOSOFÍA / HISTORIA ("ARTE • TIERRA • VINO")
  // ----------------------------------------------------------------------------
  story: {
    pretitle: "NUESTRA RAÍZ",
    title: "La Fusión de la Fantasía y la Vid",
    lead: "Un alebrije es un ser fantástico nacido del arte y la imaginación. En Vinos Alebrije llevamos esa misma libertad creadora a cada botella.",
    paragraphs: [
      "Al pie de la imponente cordillera de los Andes, en Chile, encontramos el terroir perfecto: suelos minerales, mañanas frescas y tardes soleadas que concentran aromas y vivacidad en la uva.",
      "A diferencia de los vinos tradicionales, nuestro método frizzante conserva una burbuja suave, juguetona y elegante. Es un vino ligero, vibrante y refrescante, pensado para brindar sin pretensiones pero con profundo carácter.",
    ],
    pillars: [
      {
        title: "Arte",
        subtitle: "Inspiración Fantástica",
        description:
          "Cada etiqueta y cada mezcla nace como una pieza artística irrepetible que honra la pasión y el color.",
        icon: "sparkles",
      },
      {
        title: "Tierra",
        subtitle: "Nobleza de Chile",
        description:
          "Uvas seleccionadas en valles regados por deshielos andinos, respetando los ciclos naturales de la viña.",
        icon: "mountain",
      },
      {
        title: "Vino",
        subtitle: "Efervescencia Viva",
        description:
          "Fermentación cuidada que captura una aguja delicada, aromas florales y una acidez refrescante que despierta el alma.",
        icon: "glass",
      },
    ],
    quote: {
      text: "“No buscamos crear un vino solemne; creamos un instante de luz y magia que une a las personas.”",
      author: "Vinos Alebrije",
      location: "Chile",
    },
    imageHarvest: "/images/grapes-harvest.jpg",
    imagePour: "/images/ritual-pour.jpg",
  },

  // ----------------------------------------------------------------------------
  // 6. CATÁLOGO DE VINOS (PRODUCTOS)
  // (Edita o agrega los vinos que el dueño maneje en su portafolio)
  // ----------------------------------------------------------------------------
  wines: [
    {
      id: "alebrije-frizzante-rose",
      name: "Alebrije Frizzante Rosé",
      variety: "Vino Frizzante Rosado",
      tagline: "Fresco, floral y deliciosamente seductor.",
      badge: "Insignia de la Casa",
      price: "$14.990 CLP",
      priceNote: "Por botella / Descuento por caja de 6",
      image: "/images/bottle-frizzante.jpg",
      category: "rose",
      specs: {
        alcohol: "10.5% Vol",
        temperature: "6°C - 8°C",
        sparkle: "Frizzante Natural (Perlage fino)",
        terroir: "Valle Central, Chile",
      },
      tastingNotes: {
        view: "Tonalidad rosa frambuesa brillante con reflejos violáceos y corona de burbujas vivaces.",
        nose: "Intensos aromas a frutos rojos silvestres, fresa fresca, pétalos de rosa y sutil toque cítrico.",
        mouth: "Entrada chispeante, golosa y refrescante. Equilibrada acidez con un final frutal prolongado.",
      },
      pairing: [
        "Tablas de quesos suaves y frutos secos",
        "Ceviches frescos y mariscos",
        "Tapas mediterráneas y bruschettas",
        "Postres ligeros a base de frutos del bosque",
      ],
      description:
        "Nuestra creación más celebrada. Un vino frizzante que equilibra la dulzura natural de la uva con una acidez cítrica crujiente y una efervescencia chispeante que acompaña desde una tarde soleada hasta una cena íntima.",
    },
    {
      id: "alebrije-frizzante-tinto-joven",
      name: "Alebrije Frizzante Tinto",
      variety: "Vino Frizzante Tinto Joven",
      tagline: "El carácter del tinto con la ligereza de la burbuja.",
      badge: "Edición Limitada",
      price: "$15.990 CLP",
      priceNote: "Por botella / Cajas disponibles",
      image: "/images/bottle-frizzante.jpg",
      category: "tinto",
      specs: {
        alcohol: "11.0% Vol",
        temperature: "8°C - 10°C",
        sparkle: "Frizzante Ligero",
        terroir: "Valle del Maipo, Chile",
      },
      tastingNotes: {
        view: "Rojo rubí profundo y limpio con destellos carmesí.",
        nose: "Cereza negra, moras maduras, regaliz y una nota especiada sutil.",
        mouth: "Taninos aterciopelados suavizados por la chispa de la burbuja. Sensación envolvente y fresca.",
      },
      pairing: [
        "Pizzas artesanales y pastas con salsas rojas",
        "Hamburguesas gourmet y carnes magras a la parrilla",
        "Charcutería ibérica y quesos curados",
      ],
      description:
        "Una propuesta audaz y moderna: un vino tinto joven con burbuja fina que rompe con la seriedad convencional para ofrecer una experiencia festiva y con mucho cuerpo.",
    },
    {
      id: "alebrije-frizzante-blanco-del-valle",
      name: "Alebrije Frizzante Blanco",
      variety: "Vino Frizzante Blanco Aromático",
      tagline: "Cítrico, mineral y vigorizante.",
      badge: "Próximo Lanzamiento",
      price: "$14.990 CLP",
      priceNote: "Reserva anticipada disponible",
      image: "/images/bottle-frizzante.jpg",
      category: "blanco",
      specs: {
        alcohol: "10.0% Vol",
        temperature: "5°C - 7°C",
        sparkle: "Frizzante Cristalino",
        terroir: "Valle de Casablanca / Central, Chile",
      },
      tastingNotes: {
        view: "Amarillo pálido con destellos verdosos, límpido y radiante.",
        nose: "Manzana verde, lima, maracuyá y flores blancas de azahar.",
        mouth: "Acidez electrizante y vivaz. Muy seco, mineral y sumamente saciante.",
      },
      pairing: [
        "Sushi, sashimi y comida nikkei",
        "Tiraditos de pescado blanco",
        "Ensaladas verdes con queso de cabra",
      ],
      description:
        "La máxima expresión de frescura cordillerana. Ideal para aperitivos junto a la piscina o celebraciones bajo el sol.",
    },
  ] as WineProduct[],

  // ----------------------------------------------------------------------------
  // 7. EL RITUAL DEL FRIZZANTE (CÓMO DISFRUTARLO)
  // ----------------------------------------------------------------------------
  ritual: {
    title: "El Ritual del Frizzante",
    subtitle: "Cómo despertar todo su potencial en 4 pasos",
    steps: [
      {
        step: "01",
        title: "El Frío Perfecto",
        desc: "Llévalo a la hielera o refrigerador. El frizzante despliega su magia óptima entre los 6°C y 8°C.",
        icon: "thermometer",
      },
      {
        step: "02",
        title: "El Descorche Sereno",
        desc: "Abre suavemente con ligera inclinación. Escucharás un suspiro sutil que anuncia la vida de sus burbujas.",
        icon: "sparkle",
      },
      {
        step: "03",
        title: "La Copa Elegida",
        desc: "Sirve en copa tulipán o flauta amplia para que las notas florales respiren mientras la burbuja danza.",
        icon: "glass",
      },
      {
        step: "04",
        title: "El Brindis Compartido",
        desc: "Choca las copas, respira el aroma y celebra el instante presente. Despierta tu espíritu.",
        icon: "heart",
      },
    ],
  },

  // ----------------------------------------------------------------------------
  // 8. TESTIMONIOS Y CRÍTICAS
  // ----------------------------------------------------------------------------
  testimonials: [
    {
      id: "1",
      quote:
        "El balance del Frizzante Rosé es increíble. Tiene la frescura de un espumoso veraniego pero con la complejidad y elegancia que esperas de un gran vino chileno. En mi restaurante vuela cada fin de semana.",
      author: "Camila Valenzuela",
      role: "Sommelier & Restauradora",
      city: "Santiago, Chile",
      rating: 5,
    },
    {
      id: "2",
      quote:
        "Pedí dos cajas para el cumpleaños de mi pareja y fue el protagonista indiscutible. Las burbujas son súper finas y el diseño de la botella tiene un misterio que enamora a todos los invitados.",
      author: "Rodrigo Morales",
      role: "Wine Enthusiast",
      city: "Viña del Mar",
      rating: 5,
    },
    {
      id: "3",
      quote:
        "Vinos Alebrije rompe con el aburrimiento del vino tradicional. Es fresco, vibrante, con una estética impecable y la atención directa por WhatsApp fue rápida y muy cercana.",
      author: "Sofía Méndez",
      role: "Diseñadora & Foodie",
      city: "Valparaíso",
      rating: 5,
    },
  ] as Testimonial[],

  // ----------------------------------------------------------------------------
  // 9. GALERÍA DE INSTAGRAM Y COMUNIDAD
  // ----------------------------------------------------------------------------
  instagramGallery: [
    {
      id: "ig-1",
      imageUrl: "/images/bottle-frizzante.jpg",
      caption: "Burbujas al atardecer. Cada botella guarda un instante irrepetible. #ArteTierraVino",
      likes: "184",
      link: "https://www.instagram.com/vinos_alebrije",
    },
    {
      id: "ig-2",
      imageUrl: "/images/ritual-pour.jpg",
      caption: "El servicio perfecto: 6° a 8°C de frescura pura. ¿Ya probaste nuestro Rosé?",
      likes: "245",
      link: "https://www.instagram.com/vinos_alebrije",
    },
    {
      id: "ig-3",
      imageUrl: "/images/hero.jpg",
      caption: "La cordillera vigila nuestros viñedos. De la tierra chilena a tu copa.",
      likes: "312",
      link: "https://www.instagram.com/vinos_alebrije",
    },
    {
      id: "ig-4",
      imageUrl: "/images/grapes-harvest.jpg",
      caption: "Manos artesanas que seleccionan solo los racimos más puros en cosecha.",
      likes: "198",
      link: "https://www.instagram.com/vinos_alebrije",
    },
  ] as InstagramPost[],

  // ----------------------------------------------------------------------------
  // 10. PREGUNTAS FRECUENTES (FAQ)
  // ----------------------------------------------------------------------------
  faqs: [
    {
      question: "¿Qué es exactamente un vino frizzante?",
      answer:
        "Un vino frizzante es un vino con una efervescencia suave y natural (también conocida como aguja). A diferencia de un champagne o espumoso tradicional, la presión de gas es menor (entre 1 y 2.5 atmósferas), lo que genera una textura de burbujas sumamente finas, delicadas y muy fáciles de beber.",
    },
    {
      question: "¿Cómo puedo realizar un pedido?",
      answer:
        "Puedes ordenar directamente a través de nuestro botón de WhatsApp o completando el formulario de pedido en esta página. Te atenderemos personalmente para coordinar la cantidad de botellas, método de pago y despacho.",
    },
    {
      question: "¿Hacen envíos a todo Chile?",
      answer:
        "Sí, realizamos despachos con empaque protector especial para botellas a Santiago y regiones de todo Chile. Los tiempos habituales de entrega son de 24 a 72 horas hábiles.",
    },
    {
      question: "¿Tienen venta por caja o para eventos?",
      answer:
        "Ofrecemos cajas de 6 y 12 unidades con precios preferenciales, así como opciones para matrimonios, cumpleaños, regalos corporativos y catas privadas. Consúltanos directamente por WhatsApp para cotizaciones por volumen.",
    },
    {
      question: "¿A qué temperatura se recomienda consumir?",
      answer:
        "Recomendamos servirlo bien frío, idealmente entre los 6°C y 8°C. Si estás en un día caluroso, una hielera con hielo y agua mantendrá las burbujas vivas y crujientes durante toda la velada.",
    },
  ] as FAQItem[],

  // ----------------------------------------------------------------------------
  // 11. GENERADOR DE MENSAJE PARA WHATSAPP
  // ----------------------------------------------------------------------------
  createWhatsAppLink: (productName?: string, quantity: number = 2) => {
    const phone = "56912345678"; // Reemplazar con el número del dueño
    const text = productName
      ? `¡Hola Vinos Alebrije! 🍷 Me gustaría hacer un pedido de ${quantity} botella(s) de *${productName}*. ¿Podrían confirmarme disponibilidad y costo de envío?`
      : `¡Hola Vinos Alebrije! 🍷 Quisiera consultar por su catálogo de vinos frizzante y opciones de despacho. ¡Muchas gracias!`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  },
};
