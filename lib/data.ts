export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
  readTime: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const siteConfig = {
  name: "CHAPA ZETA",
  slogan: "Transparencia y calidad en cada reparación",
  description: "Reparación y pintura de carrocería. Especialistas en reparación de vehículos, siniestros y restauración. Atención a particulares y flotas empresariales.",
  url: "https://chapazeta.com.ar",
  email: "info@chapazeta.com.ar",
  phone: "+54 3492 462004",
  whatsapp: "5493492462004",
  address: "A. Aguado 1198, Rafaela, Santa Fe, Argentina",
  hours: "Lun a Jue: 7:00 - 16:00 | Vie: 6:00 - 14:00",
  social: {
    facebook: "https://facebook.com/chapazeta",
    instagram: "https://instagram.com/tallerchapazeta",
    linkedin: "https://linkedin.com/company/chapazeta",
  },
};

export const services: Service[] = [
  {
    id: "chapa",
    title: "Reparación de Carrocería",
    description: "Recuperamos la estructura original de tu vehículo con técnicas avanzadas de enderezado y soldadura. Garantizamos la seguridad y estética de tu auto.",
    icon: "Wrench",
  },
  {
    id: "pintura",
    title: "Pinturas y Acabados",
    description: "Cabina de pintura. Colores originales. Devolvemos el brillo y la protección a tu vehículo con acabados de primera calidad.",
    icon: "Paintbrush",
  },
  {
    id: "siniestros",
    title: "Gestión de Siniestros",
    description: "Nos ocupamos de todo el trámite con tu aseguradora. Desde el primer contacto hasta la entrega del vehículo, con seguimiento en tiempo real.",
    icon: "Shield",
  },
  {
    id: "flotas",
    title: "Atención a Flotas",
    description: "Soluciones integrales para empresas con flotas de vehículos. Reportes consolidados, prioridad en turnos y descuentos por volumen.",
    icon: "Truck",
  },
  {
    id: "detailing",
    title: "Estética Automotriz",
    description: "Tratamientos de abrillantado, pulido y encerado. Devolvemos el brillo original a tu vehículo con productos de primera línea.",
    icon: "Sparkles",
  },
  {
    id: "Cristales",
    title: "Reemplazo y Reparación de Cristales",
    description: "Servicio especializado en el reemplazo de parabrisas, lunetas y otros cristales del vehículo. Garantía en todos nuestros trabajos.",
    icon: "Glass",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "María González",
    role: "Cliente particular",
    content: "Excelente servicio. Me mantuvieron informada de todo el proceso de reparación de mi auto después del choque. El portal de seguimiento es genial.",
    rating: 5,
  },
  {
    id: "2",
    name: "Carlos Martínez",
    role: "Gerente de Flota - Transportes del Sur",
    content: "Llevamos 3 años trabajando con CHAPA ZETA. Su atención a flotas es impecable y los reportes mensuales nos ayudan mucho en la gestión.",
    rating: 5,
  },
  {
    id: "3",
    name: "Lucía Fernández",
    role: "Cliente particular",
    content: "Me recomendaron el taller y superó mis expectativas. Quedó como nuevo y el presupuesto fue justo. Muy profesionales.",
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "que-hacer-despues-un-choque",
    title: "¿Qué hacer después de un choque? Guía paso a paso",
    excerpt: "Los primeros minutos después de un accidente son cruciales. Te contamos los pasos exactos para protegerte y agilizar el trámite del siniestro.",
    content: `Un accidente de tránsito siempre genera estrés y confusión. Sin embargo, actuar con calma y seguir un protocolo claro puede marcar la diferencia entre un siniestro resuelto en días y uno que se extienda por meses.

## 1. Verificar la seguridad de todos

Antes que nada, asegurate de que todos los ocupantes de tu vehículo estén bien. Si hay heridos, llamá inmediatamente al SAME (107) o al 911.

## 2. No te hagas cargo de culpas

En el momento del accidente, es natural querer disculparse. Sin embargo, cualquier admisión de culpa puede complicar tu reclamo ante la aseguradora. Limitate a intercambiar datos.

## 3. Documentá todo

Sacá fotos de:
- Los daños de ambos vehículos
- La posición de los autos en la calle
- Señales de tránsito cercanas
- Cualquier detalle relevante (clima, hora, testigos)

## 4. Intercambiá información

Pedí y entregá:
- Nombre completo y DNI
- Datos del seguro (compañía, póliza, vigencia)
- Patente del otro vehículo
- Teléfono de contacto

## 5. Denunciá el siniestro

Contactá a tu aseguradora dentro de las 72 horas. Tené a mano:
- Número de póliza
- Lugar, fecha y hora del hecho
- Descripción de los daños
- Datos del tercero

## 6. Elegí un taller de confianza

Tenés derecho a elegir el taller donde reparar tu vehículo. CHAPA ZETA trabaja con todas las aseguradoras y te acompañamos en todo el proceso.

## Conclusión

Un accidente no tiene que ser una pesadilla. Con estos pasos claros y un taller confiable, tu vehículo volverá a la ruta en el menor tiempo posible.

¿Tenés dudas sobre tu siniestro? Contactanos y te asesoramos sin cargo.`,
    date: "2026-07-15",
    category: "Consejos",
    image: "/images/blog-choque.jpg",
    author: "Equipo CHAPA ZETA",
    readTime: "5 min",
  },
  {
    slug: "importancia-pintura-original",
    title: "La importancia de la pintura original en la reventa",
    excerpt: "Muchos no lo saben, pero mantener la pintura de fábrica puede aumentar significativamente el valor de reventa de tu vehículo. Te explicamos por qué.",
    content: `La pintura de un vehículo no es solo estética. Es una capa protectora que previene la oxidación, protege de los rayos UV y mantiene la integridad estructural de las chapas.

## ¿Por qué la pintura original vale más?

Los compradores de autos usados valoran la pintura de fábrica porque:
- Indica que el vehículo no tuvo choques graves
- Garantiza que los colores coinciden exactamente
- Asegura la calidad del acabado y durabilidad

## Nuestro compromiso

En CHAPA ZETA usamos cabina de pintura con control de temperatura y humedad, y productos de primera línea. Cada reparación incluye garantía de color y acabado.

## Consejo final

Si vas a vender tu auto, tené a mano los comprobantes de reparación. Un historial transparente con un taller reconocido aumenta la confianza del comprador.`,
    date: "2026-07-08",
    category: "Consejos",
    image: "/images/blog-pintura.jpg",
    author: "Equipo CHAPA ZETA",
    readTime: "4 min",
  },
  {
    slug: "nuevo-portal-clientes",
    title: "Lanzamos el nuevo Portal de Clientes",
    excerpt: "Ahora podés seguir el estado de tu siniestro y el presupuesto de reparación en tiempo real desde tu celular o computadora.",
    content: `En CHAPA ZETA creemos en la transparencia total. Por eso lanzamos nuestro Portal de Clientes, una herramienta digital que te permite:

## Funcionalidades principales

- **Seguimiento de siniestro**: Sabé en qué etapa está tu vehículo en tiempo real
- **Presupuestos online**: Recibí, aprobá o rechazá presupuestos desde tu celular
- **Fotos del proceso**: Accedé a imágenes de cada etapa de la reparación
- **Notificaciones automáticas**: Recibí alertas cuando tu auto avanza de etapa
- **Historial completo**: Consultá todas las reparaciones de tu vehículo

## ¿Cómo acceder?

Solicitá tu usuario en el taller o registrate en nuestra web. Es gratis y está disponible las 24 horas.

## Próximos pasos

Pronto sumaremos la tienda de repuestos y la gestión de turnos online. Seguimos trabajando para acercarte la mejor experiencia.`,
    date: "2026-06-20",
    category: "Novedades",
    image: "/images/blog-portal.jpg",
    author: "Equipo CHAPA ZETA",
    readTime: "3 min",
  },
  {
    slug: "mantenimiento-flotas-empresariales",
    title: "Mantenimiento predictivo para flotas empresariales",
    excerpt: "Las empresas con flotas de vehículos pierden millones por mantenimientos reactivos. Te contamos cómo el mantenimiento predictivo reduce costos hasta un 30%.",
    content: `Las empresas con flotas enfrentan un desafío constante: mantener los vehículos en la calle al menor costo posible. El mantenimiento tradicional (esperar a que falle) es caro e impredecible.

## ¿Qué es el mantenimiento predictivo?

Es un enfoque basado en datos que permite anticipar fallas antes de que ocurran. Mediante:
- Análisis de patrones de uso
- Monitoreo de desgaste de componentes
- Programación inteligente de service

## Beneficios medibles

- **Reducción de costos**: Hasta 30% menos en reparaciones de emergencia
- **Menor downtime**: Los vehículos pasan menos tiempo en el taller
- **Mayor vida útil**: El cuidado preventivo alarga la vida del vehículo
- **Presupuestos planificados**: Sabés cuánto vas a gastar y cuándo

## Nuestra propuesta para flotas

En CHAPA ZETA ofrecemos:
- Reportes mensuales consolidados
- Alertas de mantenimiento por vehículo
- Prioridad en turnos
- Descuentos por volumen
- Dashboard de gestión online

Contactanos para una evaluación gratuita de tu flota.`,
    date: "2026-06-10",
    category: "Empresas",
    image: "/images/blog-flotas.jpg",
    author: "Equipo CHAPA ZETA",
    readTime: "6 min",
  },
];

export const stats = [
  { value: "15+", label: "Años de experiencia" },
  { value: "12.000+", label: "Vehículos reparados" },
  { value: "98%", label: "Clientes satisfechos" },
  { value: "24h", label: "Respuesta en siniestros" },
];
