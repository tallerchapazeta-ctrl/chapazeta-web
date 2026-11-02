"use client";

import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Testimonios() {
  return (
    <section className="py-20 bg-chapa-gray">
      <div className="container-chapa">
        <SectionHeader
          title="Lo que dicen nuestros clientes"
          subtitle="La confianza de quienes nos eligen es nuestro mayor orgullo. Conocé algunas de las experiencias de quienes ya pasaron por CHAPA ZETA."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="card relative">
              <Quote className="w-10 h-10 text-chapa-blue/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-chapa-yellow text-chapa-yellow" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-chapa-dark">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
