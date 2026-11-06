import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { TurnoForm } from "@/components/TurnoForm";

import MapaUbicacionWrapper from "@/components/MapaUbicacionWrapper";

export const metadata: Metadata = {
  title: "Contacto y Turnos",
  description: "Contactá a CHAPA ZETA para solicitar un turno, hacer una consulta o gestionar un siniestro. Atención en Rafaela, Santa Fe.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="bg-chapa-blue pt-20 pb-32 relative">
        <div className="container-chapa text-center text-white">
          <h1 className="heading-xl mb-6">Contacto y Turnos</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Estamos para ayudarte. Solicitá un turno, hacé una consulta o gestioná tu siniestro. 
            Respondemos en menos de 24 horas.
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
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info de contacto */}
            <div className="lg:col-span-1">
              <h2 className="heading-md mb-8">Información de contacto</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-chapa-blue/10 rounded-xl flex items-center justify-center text-chapa-blue shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-chapa-dark mb-1">Dirección</h3>
                    <p className="text-gray-600">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-chapa-blue/10 rounded-xl flex items-center justify-center text-chapa-blue shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-chapa-dark mb-1">Teléfono</h3>
                    <a href={`tel:${siteConfig.phone}`} className="text-gray-600 hover:text-chapa-blue transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-chapa-blue/10 rounded-xl flex items-center justify-center text-chapa-blue shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-chapa-dark mb-1">Email</h3>
                    <a href={`mailto:${siteConfig.email}`} className="text-gray-600 hover:text-chapa-blue transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-chapa-blue/10 rounded-xl flex items-center justify-center text-chapa-blue shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-chapa-dark mb-1">Horarios</h3>
                    <p className="text-gray-600">{siteConfig.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-chapa-dark mb-1">WhatsApp</h3>
                    <a 
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Escribinos por WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-chapa-gray rounded-2xl h-120 flex items-center justify-center">
                <div className="mt-4 text-center w-full h-full px-4">
                  <section className="my-4">
                    <h2 className="heading-md mb-2">Dónde encontrarnos</h2>
                    <MapaUbicacionWrapper />
                  </section>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h2 className="heading-md mb-2">Solicitar turno</h2>
                <p className="text-gray-600 mb-8">
                  Completá el formulario y nos pondremos en contacto para confirmar tu turno. 
                  Los campos marcados con * son obligatorios.
                </p>
                <TurnoForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
