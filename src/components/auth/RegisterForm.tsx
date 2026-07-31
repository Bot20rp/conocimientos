"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IconEye, IconEyeOff } from "@/components/ui/icons";

const faculties = [
  "Ingeniería de Sistemas",
  "Medicina Humana",
  "Derecho",
  "Arquitectura",
  "Biotecnología",
  "Ciencias de la Comunicación",
  "Matemáticas Aplicadas",
  "Otra",
];

export function RegisterForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="card-body gap-4 p-6 sm:p-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Crea tu cuenta</h1>
        <p className="mt-1 text-sm opacity-60">
          Únete a tu comunidad en menos de 2 minutos
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label className="form-control">
          <span className="label-text mb-1.5 text-sm font-medium">Nombres</span>
          <input
            type="text"
            placeholder="Valentina"
            className="input input-bordered rounded-xl"
            required
          />
        </label>
        <label className="form-control">
          <span className="label-text mb-1.5 text-sm font-medium">Apellidos</span>
          <input
            type="text"
            placeholder="Ríos"
            className="input input-bordered rounded-xl"
            required
          />
        </label>
      </div>

      <label className="form-control">
        <span className="label-text mb-1.5 text-sm font-medium">
          Correo institucional
        </span>
        <input
          type="email"
          placeholder="tucorreo@universidad.edu"
          className="input input-bordered rounded-xl"
          required
        />
      </label>

      <label className="form-control">
        <span className="label-text mb-1.5 text-sm font-medium">
          Facultad
        </span>
        <select className="select select-bordered rounded-xl" defaultValue="Ingeniería de Sistemas">
          {faculties.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
      </label>

      <label className="form-control">
        <span className="label-text mb-1.5 text-sm font-medium">
          Contraseña
        </span>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Mínimo 8 caracteres"
            className="input input-bordered w-full rounded-xl pr-11"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            aria-label="Mostrar contraseña"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 opacity-50 hover:opacity-100"
          >
            {showPassword ? <IconEyeOff size={18} /> : <IconEye size={18} />}
          </button>
        </div>
      </label>

      <label className="flex cursor-pointer items-start gap-2 text-sm">
        <input type="checkbox" className="checkbox checkbox-sm mt-0.5" required />
        <span className="opacity-70">
          Acepto los{" "}
          <span className="font-medium text-primary">términos de uso</span> y la{" "}
          <span className="font-medium text-primary">política de privacidad</span>.
        </span>
      </label>

      <button type="submit" className="btn btn-primary btn-lg rounded-xl">
        Crear cuenta
      </button>

      <p className="mt-2 text-center text-sm opacity-60">
        ¿Ya tienes cuenta?{" "}
        <a href="/login" className="font-semibold text-primary">
          Inicia sesión
        </a>
      </p>
    </form>
  );
}
