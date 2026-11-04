"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/data";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/novedades", label: "Novedades" },
  { href: "/contacto", label: "Contacto / Turnos" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-chapa-blue-dark text-white text-sm py-2 hidden sm:block">
        <div className="container-chapa flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-chapa-yellow transition-colors">
              <Phone className="w-4 h-4" />
              <span>{siteConfig.phone}</span>
            </a>
            <span className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-4 h-4" />
              <span>{siteConfig.address}</span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Clock className="w-4 h-4" />
            <span>{siteConfig.hours}</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container-chapa">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}

            <Link href="/">
              <Image
                src="/images/logo/logo_navbar.gif"
                alt="CHAPA ZETA - Reparación y pintura de carrocería"
                width={160}
                height={48}
                priority   // el logo está en pantalla desde el inicio
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? "bg-chapa-blue text-white"
                      : "text-gray-700 hover:bg-gray-100 hover:text-chapa-blue"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                WhatsApp
              </a>
              <Link href="/contacto" className="btn-primary text-sm">
                Sacar Turno
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="container-chapa py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-chapa-blue text-white"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center text-sm"
                >
                  WhatsApp
                </a>
                <Link href="/contacto" className="btn-primary w-full text-center text-sm" onClick={() => setIsOpen(false)}>
                  Sacar Turno
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
