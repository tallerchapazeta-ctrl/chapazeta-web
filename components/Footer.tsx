import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/data";

const footerLinks = {
  servicios: [
    { label: "Reparación de Carrocería", href: "/nosotros" },
    { label: "Pintura", href: "/nosotros" },
    { label: "Gestión de Siniestros", href: "/nosotros" },
    { label: "Atención a Flotas", href: "/nosotros" },
    { label: "Detailing", href: "/nosotros" },
  ],
  empresa: [
    { label: "Sobre Nosotros", href: "/nosotros" },
    { label: "Novedades", href: "/novedades" },
    { label: "Contacto", href: "/contacto" },
    { label: "Portal de Clientes", href: "#" },
  ],
  legal: [
    { label: "Términos y Condiciones", href: "#" },
    { label: "Política de Privacidad", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-chapa-dark text-white">
      <div className="container-chapa py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-lg flex items-center justify-center"> 
                {/* w-10 h-10 bg-chapa-blue */}
                <img src="/image/logo/logo.svg" alt="Chapa Zeta Logo" className="w-200 h-200" />
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-chapa-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-chapa-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-chapa-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-chapa-yellow transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-chapa-yellow transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-chapa-yellow shrink-0 mt-0.5" />
                <span className="text-gray-400">{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-chapa-yellow shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="text-gray-400 hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-chapa-yellow shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-chapa-yellow shrink-0 mt-0.5" />
                <span className="text-gray-400">{siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-chapa py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CHAPA ZETA. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.label} href={link.href} className="text-gray-500 hover:text-white text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
