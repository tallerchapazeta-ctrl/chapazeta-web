"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function CTA() {
  return (
    <section className="py-20 bg-chapa-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="container-chapa relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg text-white mb-6">
            ¿Necesitás reparar tu vehículo?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Contactanos hoy mismo y recibí un presupuesto sin cargo. Atendemos siniestros de todas las aseguradoras y ofrecemos prioridad para flotas empresariales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-secondary text-base">
              Solicitar Turno
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
