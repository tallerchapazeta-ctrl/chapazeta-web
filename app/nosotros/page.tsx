import type { Metadata } from "next";
import { CheckCircle, Users, Target, Heart, Award, Shield } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conocé la historia, valores y equipo de CHAPA ZETA. Más de 15 años de experiencia en reparación y pintura de carrocerías en Rafaela, Santa Fe. Compromiso con la calidad y la satisfacción del cliente.",
};

const valores = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Transparencia",
    description: "Creemos en la información clara y honesta. Nuestros clientes saben exactamente qué se hace, cuánto cuesta y cuánto tarda.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Excelencia",
    description: "No nos conformamos con 'bien'. Buscamos la perfección en cada soldadura, cada capa de pintura y cada entrega.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Compromiso",
    description: "Tu vehículo es importante para vos, y para nosotros también. Cumplimos los plazos y respetamos tu presupuesto.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Trabajo en equipo",
    description: "Desde el recepcionista hasta el pintor, todos compartimos el mismo objetivo: devolverte tu auto como nuevo.",
  },
];

const diferenciales = [
  "Más de 15 años de experiencia en el rubro",
  "Cabina de pintura con control de temperatura y humedad",
  "Técnicos certificados y en constante capacitación",
  "Trabajamos con todas las compañías de seguro",
  "Sistema de seguimiento online para clientes",
  "Atención personalizada a flotas empresariales",
  "Presupuestos detallados y sin costos ocultos",
];

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-chapa-blue pt-20 pb-32 relative">
        <div className="container-chapa text-center text-white">
          <h1 className="heading-xl mb-6">Sobre Nosotros</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Más de una década dedicada a la búsqueda de la excelencia en el servicio de reparación y pintura de carrocerías de Rafaela y Santa Fe. 
            Somos el taller que eligen quienes valoran la calidad y la transparencia.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-chapa">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-chapa-blue font-semibold text-sm uppercase tracking-wider">Nuestra Historia</span>
              <h2 className="heading-lg mt-2 mb-6">De un pequeño taller a referentes del sector</h2>
              <div className="space-y-4 text-body">
                <p>
                  CHAPA ZETA nació en 2008 con una misión clara: transformar la experiencia de reparación de vehículos 
                  en Rafaela. Lo que comenzó como un modesto taller de chapa, hoy es un centro de reparación 
                  integral que atiende a particulares y flotas empresariales de toda la región del centro-oeste santafesino.
                </p>
                <p>
                  A lo largo de estos años, invertimos constantemente en tecnología: cabina de pintura, 
                  banco de enderezado, más y mejores herramientas, y capacitación continua de nuestro equipo técnico.
                </p>
                <p>
                  Pero más allá de la tecnología, lo que nos define es nuestra relación con los clientes. Entendemos 
                  que dejar tu vehículo en un taller genera incertidumbre. Por eso estamos desarrollando un Portal de Clientes, 
                  donde podrás seguir el paso a paso de la reparación en tiempo real.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-chapa-gray rounded-2xl p-8 flex items-center justify-center h-48">
                  <Award className="w-16 h-16 text-chapa-blue/30" />
                </div>
                <div className="bg-chapa-blue rounded-2xl p-8 flex items-center justify-center h-64">
                  <Users className="w-16 h-16 text-white/30" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-chapa-yellow rounded-2xl p-8 flex items-center justify-center h-64">
                  <Shield className="w-16 h-16 text-chapa-dark/30" />
                </div>
                <div className="bg-chapa-gray rounded-2xl p-8 flex items-center justify-center h-48">
                  <Target className="w-16 h-16 text-chapa-blue/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-chapa-gray">
        <div className="container-chapa">
          <SectionHeader
            title="Nuestros Valores"
            subtitle="Los principios que guían cada decisión y cada reparación en CHAPA ZETA."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((v, i) => (
              <div key={i} className="card text-center">
                <div className="w-16 h-16 bg-chapa-blue/10 rounded-2xl flex items-center justify-center text-chapa-blue mx-auto mb-4">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-chapa-dark mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-chapa">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-chapa-blue font-semibold text-sm uppercase tracking-wider">¿Por qué elegirnos?</span>
              <h2 className="heading-lg mt-2 mb-6">Diferenciales que nos destacan</h2>
              <p className="text-body mb-8">
                No todos los talleres son iguales. En CHAPA ZETA combinamos experiencia, tecnología y 
                un compromiso real con la satisfacción del cliente.
              </p>
              <ul className="space-y-4">
                {diferenciales.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-chapa-blue rounded-3xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Nuestro compromiso con vos</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Diagnóstico preciso</h4>
                    <p className="text-blue-200 text-sm">Cada siniestro tiene sus particularidades por eso evaluamos tu vehículo minuciosamente y te damos un presupuesto detallado.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Reparación con seguimiento</h4>
                    <p className="text-blue-200 text-sm">Accedé al estado de tu reparación en tiempo real a través de nuestro portal de clientes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Entrega garantizada</h4>
                    <p className="text-blue-200 text-sm">Control de calidad exhaustivo antes de la entrega. Garantía de 1 año en pintura.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
