# 🍷 Vinos Alebrije — Landing Page Template

Plantilla premium para la landing page de **Vinos Alebrije** (*Arte • Tierra • Vino*), creada con **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4** y **TypeScript**.

Diseñada especialmente para que puedas reemplazar toda la información, precios, fotografías y redes sociales del negocio de forma rápida e intuitiva cuando el dueño te entregue el material.

---

## 🚀 Inicio Rápido

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

3. **Construir para producción:**
   ```bash
   npm run build
   npm run start
   ```

---

## ⚙️ ¿Cómo actualizar el contenido cuando el dueño te pase la información?

Todo el contenido del sitio está desacoplado y centralizado en un único archivo maestro:

👉 **[`src/data/landingData.ts`](./src/data/landingData.ts)**

No necesitas tocar los componentes de React para cambiar:
- **Datos de la marca:** Nombre, slogan, historia, región y toggle para activar/desactivar la verificación de edad (`enableAgeGate`).
- **Contacto y WhatsApp:** Número de teléfono del dueño, mensaje automático predeterminado, enlace de Instagram oficial (`@vinos_alebrije`), horarios y correo.
- **Catálogo de Vinos:** Nombre de cada vino, variedad, precios, etiquetas promocionales, grados de alcohol, notas de cata (vista, nariz, boca) y maridajes recomendados.
- **Testimonios y Críticas:** Opiniones de clientes y sommeliers.
- **Preguntas Frecuentes (FAQ):** Preguntas y respuestas sobre despacho, conservación, cajas y eventos.
- **Galería de Instagram:** Enlaces y publicaciones destacadas.

---

## 📸 ¿Cómo agregar o cambiar las imágenes?

Las imágenes se ubican dentro de la carpeta:
👉 **[`public/images/`](./public/images/)**

Actualmente la plantilla ya cuenta con fotografías de demostración hiperrealistas de alta gama:
- `logo.jpg`: Logo oficial de Vinos Alebrije obtenido de su perfil de Instagram.
- `hero.jpg`: Viñedos chilenos al atardecer frente a la cordillera de los Andes con un cóndor volando.
- `bottle-frizzante.jpg`: Botella de vino frizzante helada con condensación y copa de cristal.
- `grapes-harvest.jpg`: Cosecha manual de uvas en el viñedo andino.
- `ritual-pour.jpg`: Servicio de vino frizzante con burbujas finas en cava de barricas.

Para cambiarlas, simplemente sustituye los archivos dentro de `public/images/` manteniendo los nombres, o sube imágenes nuevas y actualiza su ruta en `src/data/landingData.ts`.

---

## 🧩 Estructura del Proyecto

```
vinos_alebrije/
├── public/
│   └── images/              # Logo y fotografías de alta resolución
├── src/
│   ├── app/
│   │   ├── globals.css      # Tokens de Tailwind CSS v4, fuentes y animaciones
│   │   ├── layout.tsx       # Fuentes (Playfair Display + Plus Jakarta Sans) y SEO
│   │   └── page.tsx         # Ensamblado de la Landing Page
│   ├── components/
│   │   ├── AgeGateModal.tsx     # Modal legal de verificación de edad (+18)
│   │   ├── Navbar.tsx           # Barra superior con efecto glassmorphism y menú móvil
│   │   ├── Hero.tsx             # Portada cinematográfica con métricas clave y CTAs
│   │   ├── StorySection.tsx     # Filosofía de marca (Arte • Tierra • Vino)
│   │   ├── WineCatalog.tsx      # Catálogo con filtros y modal de ficha técnica
│   │   ├── FrizzanteRitual.tsx  # Guía en 4 pasos para servir vino frizzante
│   │   ├── PairingSection.tsx   # Guía interactiva de cata y maridaje
│   │   ├── Testimonials.tsx     # Opiniones con valoración de 5 estrellas
│   │   ├── InstagramFeed.tsx    # Galería conectada a @vinos_alebrije
│   │   ├── FAQSection.tsx       # Acordeón interactivo de preguntas frecuentes
│   │   ├── ContactSection.tsx   # Simulador de pedidos directos a WhatsApp
│   │   ├── Footer.tsx           # Pie de página y disclaimer legal
│   │   ├── FloatingWhatsApp.tsx # Botón flotante animado de WhatsApp
│   │   └── icons/               # Íconos personalizados (Instagram)
│   └── data/
│       └── landingData.ts   # ⭐️ ARCHIVO MAESTRO DE DATOS Y TEXTOS
└── package.json
```

---

## 🥂 Características Destacadas

- **Estética Ultra Premium:** Paleta de tonos vino borgoña/carmesí (`#420a17`, `#651025`), negros aterciopelados y detalles dorados (`#d4af37`, `#f7e2a9`).
- **Simulador de Pedido por WhatsApp:** Permite a los clientes elegir variedad, cantidad (2 botellas, caja de 6 o 12) y destino, generando un mensaje listo en WhatsApp con 1 solo clic.
- **Verificación de Mayoría de Edad (18+):** Cumple con la normativa para venta de bebidas con alcohol, con persistencia en `localStorage`.
- **Responsive 100%:** Experiencia fluida tanto en teléfonos móviles como en pantallas de escritorio.
