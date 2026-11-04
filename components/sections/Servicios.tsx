"use client";

import { Wrench, Paintbrush, Shield, Truck, Sparkles, Cog,  } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-8 h-8" />,
  Paintbrush: <Paintbrush className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  Truck: <Truck className="w-8 h-8" />,
  Sparkles: <Sparkles className="w-8 h-8" />,
  Cog: <Cog className="w-8 h-8" />,
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
