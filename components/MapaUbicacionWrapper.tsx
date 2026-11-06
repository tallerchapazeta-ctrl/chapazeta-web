"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";

const destino = {
  lat: -31.263399964229205,
  lng: -61.47994450372067
};

const url_como_llegar = `https://www.google.com/maps/dir/?api=1&destination=${destino.lat},${destino.lng}&travelmode=driving`;

export default function MapaUbicacionWrapper() {
  const [Mapa, setMapa] = useState<ComponentType | null>(null);

  useEffect(() => {
    let cancelado = false;
    import("./MapaUbicacion").then((mod) => {
      if (!cancelado) setMapa(() => mod.default);
    });
    return () => {
      cancelado = true;
    };
  }, []);

  return (
    <div className="w-full">
      {/* Contenedor del mapa: horizontal y responsivo */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden shadow-lg">
        {Mapa ? (
          <Mapa />
        ) : (
          <div className="h-full w-full bg-slate-800 animate-pulse flex items-center justify-center text-slate-400 text-sm">
            Cargando mapa...
          </div>
        )}
      </div>

      {/* Botón debajo del mapa, alineado a la derecha */}
      <div className="mt-3 flex justify-end">
        <a
          href={url_como_llegar}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-chapa-blue px-4 py-2 text-sm font-semibold text-white shadow-md transition-colors hover:bg-chapa-blue-light focus:outline-none focus:ring-2 focus:ring-chapa-blue focus:ring-offset-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 heading-md"
            aria-hidden="true"
          >
            <path d="M21.71 11.29 12.7 2.29a1 1 0 0 0-1.41 0l-9 9a1 1 0 0 0 0 1.41l9 9a1 1 0 0 0 1.41 0l9-9a1 1 0 0 0 0-1.41ZM14 14.5V12h-4v3H8v-4a1 1 0 0 1 1-1h5V7.5l3.5 3.5-3.5 3.5Z" />
          </svg>
          Cómo llegar
        </a>
      </div>
    </div>
  );
}