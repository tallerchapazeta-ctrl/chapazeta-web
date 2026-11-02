"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, Loader2, Car, User, Phone, Mail, MessageSquare, Wrench, Calendar } from "lucide-react";

const turnoSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  apellido: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresá un email válido"),
  telefono: z.string().min(8, "Ingresá un teléfono válido"),
  tipoServicio: z.string().min(1, "Seleccioná un tipo de servicio"),
  vehiculo: z.string().min(2, "Ingresá el modelo de tu vehículo"),
  patente: z.string().min(6, "Ingresá una patente válida"),
  fechaPreferida: z.string().min(1, "Seleccioná una fecha"),
  mensaje: z.string().optional(),
});

type TurnoFormData = z.infer<typeof turnoSchema>;

const servicios = [
  { value: "", label: "Seleccioná un servicio" },
  { value: "chapa", label: "Reparación" },
  { value: "pintura", label: "Pintura" },
  { value: "siniestro", label: "Siniestro" },
  { value: "mecanica", label: "Cristales" },
  { value: "detailing", label: "Estética" },
  { value: "flota", label: "Atención a Flotas" },
  { value: "presupuesto", label: "Presupuesto / Consulta" },
  { value: "otro", label: "Otro" },
];

export function TurnoForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TurnoFormData>({
    resolver: zodResolver(turnoSchema),
  });

  const onSubmit = async (data: TurnoFormData) => {
    setIsSubmitting(true);

    // Simulación de envío - En producción conectar con API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Turno solicitado:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-chapa-dark mb-3">¡Turno solicitado con éxito!</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Gracias {isSubmitting ? "" : "por contactarnos"}. Te enviaremos una confirmación por email o WhatsApp en las próximas 24 horas.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn-outline"
        >
          Solicitar otro turno
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              {...register("nombre")}
              type="text"
              placeholder="Juan"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chapa-blue focus:border-transparent outline-none transition-all"
            />
          </div>
          {errors.nombre && (
            <p className="mt-1 text-sm text-red-600">{errors.nombre.message}</p>
          )}
        </div>

        {/* Apellido */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Apellido *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              {...register("apellido")}
              type="text"
              placeholder="Pérez"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chapa-blue focus:border-transparent outline-none transition-all"
            />
          </div>
          {errors.apellido && (
            <p className="mt-1 text-sm text-red-600">{errors.apellido.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              {...register("email")}
              type="email"
              placeholder="juan@email.com"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chapa-blue focus:border-transparent outline-none transition-all"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Teléfono *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              {...register("telefono")}
              type="tel"
              placeholder="11 1234-5678"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chapa-blue focus:border-transparent outline-none transition-all"
            />
          </div>
          {errors.telefono && (
            <p className="mt-1 text-sm text-red-600">{errors.telefono.message}</p>
          )}
        </div>

        {/* Tipo de servicio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de servicio *
          </label>
          <div className="relative">
            <Wrench className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              {...register("tipoServicio")}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chapa-blue focus:border-transparent outline-none transition-all appearance-none bg-white"
            >
              {servicios.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>
          {errors.tipoServicio && (
            <p className="mt-1 text-sm text-red-600">{errors.tipoServicio.message}</p>
          )}
        </div>

        {/* Fecha preferida */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fecha preferida *
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              {...register("fechaPreferida")}
              type="date"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chapa-blue focus:border-transparent outline-none transition-all"
            />
          </div>
          {errors.fechaPreferida && (
            <p className="mt-1 text-sm text-red-600">{errors.fechaPreferida.message}</p>
          )}
        </div>

        {/* Vehículo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Modelo del vehículo *
          </label>
          <div className="relative">
            <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              {...register("vehiculo")}
              type="text"
              placeholder="Toyota Corolla 2020"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chapa-blue focus:border-transparent outline-none transition-all"
            />
          </div>
          {errors.vehiculo && (
            <p className="mt-1 text-sm text-red-600">{errors.vehiculo.message}</p>
          )}
        </div>

        {/* Patente */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Patente *
          </label>
          <div className="relative">
            <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              {...register("patente")}
              type="text"
              placeholder="ABC 123"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chapa-blue focus:border-transparent outline-none transition-all uppercase"
            />
          </div>
          {errors.patente && (
            <p className="mt-1 text-sm text-red-600">{errors.patente.message}</p>
          )}
        </div>
      </div>

      {/* Mensaje */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Mensaje adicional
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <textarea
            {...register("mensaje")}
            rows={4}
            placeholder="Contanos más sobre lo que necesitás..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chapa-blue focus:border-transparent outline-none transition-all resize-none"
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Solicitar turno
          </>
        )}
      </button>
    </form>
  );
}
