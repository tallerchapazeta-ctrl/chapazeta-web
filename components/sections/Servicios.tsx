"use client";

import { Wrench, SprayCan, Shield, Truck, Sparkles, Cog, CarFront, createLucideIcon } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

const PaintGunIcon = createLucideIcon('PaintGun', [
  ["path",{"d":"M11 10v-.172a2 2 0 0 1 .586-1.414l.828-.828A2 2 0 0 0 13 6.172V3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3.172a2 2 0 0 0 .586 1.414l.828.828A2 2 0 0 1 7 9.828V10"}],
  ["path",{"d":"M12 14H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H7"}],
  ["path",{"d":"M13 12h1"}],
  ["path",{"d":"M18 12h.01"}],
  ["path",{"d":"M22 12h.01"}],
  ["path",{"d":"M22 16h.01"}],
  ["path",{"d":"M22 8h.01"}],
  ["path",{"d":"m4 14-1.845 7.379A.5.5 0 0 0 2.64 22h2.58a1 1 0 0 0 .97-.758L8 14"}]
])

const FrontGlassIcon = createLucideIcon('FrontGlass', [
  ["path",{"d":"M16.5 12.5 L12.128 18.322"}],
  ["path",{"d":"M17.146 20 A12 12 0 0 0 6.5 19.74"}],
  ["path",{"d":"M2.255 11.5 A12 12 0 0 1 22 11.5"}],
  ["path",{"d":"M22 11.5 L17.146 20"}],
  ["path",{"d":"M6.5 19.74 L2.255 11.5"}],
])

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-8 h-8" />,
  SprayCan: <SprayCan className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  Truck: <Truck className="w-8 h-8" />,
  Sparkles: <Sparkles className="w-8 h-8" />,
  Cog: <Cog className="w-8 h-8" />,
  FrontGlass: <FrontGlassIcon className="w-8 h-8" />,
  PaintGun: <PaintGunIcon className="w-8 h-8" />,
};

export function Servicios() {
  return (
    <section className="py-20 bg-white">
      <div className="container-chapa">
        <SectionHeader
          title="Nuestros Servicios"
          subtitle="Ofrecemos soluciones integrales para la reparación, mantenimiento y estética de tu vehículo, con la más alta tecnología y personal certificado."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="card group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-chapa-blue/10 rounded-2xl flex items-center justify-center text-chapa-blue mb-6 group-hover:bg-chapa-blue group-hover:text-white transition-colors duration-300">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold text-chapa-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
