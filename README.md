# CHAPA ZETA - Web Institucional (Etapa 1)

Web institucional completa y funcional para CHAPA ZETA, reparacion y pintura de carrocería.

## 🚀 Tecnologías

- **Next.js 14** (App Router)
- **React 18** + TypeScript
- **TailwindCSS** + shadcn/ui
- **React Hook Form** + Zod (validación)
- **Lucide React** (iconos)

## 📁 Estructura del Proyecto

```
chapazeta-web/
├── app/                    # Rutas de Next.js (App Router)
│   ├── layout.tsx          # Layout raíz con Navbar y Footer
│   ├── page.tsx            # Home (Hero, Servicios, Stats, Testimonios, Blog, CTA)
│   ├── nosotros/           # Página "Sobre Nosotros"
│   ├── novedades/          # Blog / Novedades
│   │   └── [slug]/         # Artículo individual (SSG)
│   └── contacto/           # Contacto + Formulario de turnos
├── components/
│   ├── Navbar.tsx          # Navegación responsive
│   ├── Footer.tsx          # Footer completo
│   ├── TurnoForm.tsx       # Formulario de turnos con validación
│   ├── ui/                 # Componentes UI reutilizables
│   └── sections/           # Secciones de la Home
├── lib/
│   ├── data.ts             # Datos del sitio (servicios, blog, config)
│   └── utils.ts            # Utilidades (formatDate, cn)
├── public/                 # Assets estáticos
├── Dockerfile              # Container para producción
└── docker-compose.yml      # Orquestación local
```

## 🛠️ Instalación Local

### Requisitos
- Node.js 20+
- npm o yarn

### Pasos

```bash
# 1. Clonar o extraer el proyecto
cd chapazeta-web

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus datos

# 4. Iniciar en modo desarrollo
npm run dev

# 5. Abrir en el navegador
http://localhost:3000
```

## 🐳 Deployment con Docker

### Opción 1: Docker Compose (Recomendado)

```bash
cd chapazeta-web

# Construir y levantar
docker-compose up --build -d

# Ver logs
docker-compose logs -f web

# Detener
docker-compose down
```

### Opción 2: Docker manual

```bash
# Build
docker build -t chapazeta-web .

# Run
docker run -p 3000:3000 -e NODE_ENV=production chapazeta-web
```

### Opción 3: Vercel (Serverless)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 📄 Páginas incluidas

| Página | Ruta | Descripción |
|--------|------|-------------|
| **Home** | `/` | Hero, servicios, estadísticas, testimonios, preview de blog, CTA |
| **Nosotros** | `/nosotros` | Historia, valores, diferenciales, compromiso |
| **Novedades** | `/novedades` | Listado de artículos con filtros por categoría |
| **Artículo** | `/novedades/[slug]` | Artículo individual con contenido en markdown-like |
| **Contacto** | `/contacto` | Info de contacto + formulario de turnos funcional |

## ✅ Funcionalidades implementadas

- [x] Diseño responsive (mobile-first)
- [x] Navegación sticky con top bar
- [x] Hero con CTA y badges de confianza
- [x] Sección de servicios (6 tarjetas)
- [x] Estadísticas animadas
- [x] Testimonios de clientes
- [x] Preview de blog (3 artículos)
- [x] Página de blog completa (4 artículos)
- [x] Artículos individuales con SSG (`generateStaticParams`)
- [x] Formulario de turnos con validación (React Hook Form + Zod)
- [x] Estados de éxito/error en el formulario
- [x] SEO completo (meta tags, Open Graph, Twitter Cards, robots)
- [x] Footer con links, contacto y redes sociales
- [x] Paleta de colores corporativa (azul, amarillo, blanco)
- [x] Docker + Docker Compose listos para deploy

## 🔮 Próximos pasos (Etapa 2)

- Conectar formulario de turnos a backend (API NestJS)
- Agregar autenticación (Portal de Clientes)
- Integrar Google Maps en la página de contacto
- Agregar animaciones con Framer Motion
- Sistema de comentarios en artículos
- Newsletter / suscripción a novedades

## 📞 Contacto

**CHAPA ZETA**
- Email: info@chapazeta.com
- Tel: +54 3492 462004
- Web: https://chapazeta.com

---

Desarrollado con ❤️ para CHAPA ZETA - 2026
