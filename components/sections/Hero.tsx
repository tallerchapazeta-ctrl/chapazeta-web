"use client";

import Link from "next/link";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-chapa-blue via-chapa-blue to-chapa-blue-dark">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-chapa relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
              <Award className="w-4 h-4 text-chapa-yellow" />
              <span className="text-sm font-medium">Líderes en reparación de chapa y pintura</span>
            </div>

            <h1 className="heading-xl mb-6">
              Tu vehículo en las{" "}
              <span className="text-chapa-yellow">mejores manos</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-xl leading-relaxed">
              {siteConfig.slogan}. Especialistas en siniestros, reparación de chapa, pintura y atención a flotas empresariales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contacto" className="btn-secondary text-base">
                Sacar Turno
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/nosotros" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200">
                Conocer más
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-chapa-yellow" />
                <span className="text-sm text-blue-100">Garantía de calidad</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-chapa-yellow" />
                <span className="text-sm text-blue-100">Entrega a tiempo</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-chapa-yellow" />
                <span className="text-sm text-blue-100">Técnicos certificados</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                  <div className="w-12 h-12 bg-chapa-yellow rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-chapa-dark" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Seguimiento en tiempo real</p>
                    <p className="text-blue-200 text-sm">Conocé el estado de tu reparación 24/7</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Presupuesto transparente</p>
                    <div className="edit invisible hover/item:visible">
                      <p className="hover/edit:text-blue-200 text-sm">Sin costos ocultos, aprobás antes de empezar</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Trabajamos con todas las aseguradoras</p>
                    <p className="text-blue-200 text-sm">Gestión completa del siniestro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
