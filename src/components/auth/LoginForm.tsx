"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IconEye, IconEyeOff } from "@/components/ui/icons";

export function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="card-body gap-4 p-6 sm:p-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Bienvenido de nuevo</h1>
        <p className="mt-1 text-sm opacity-60">
          Ingresa con tu cuenta institucional
        </p>
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
          defaultValue="valentina@university.edu"
        />
      </label>

      <label className="form-control">
        <span className="label-text mb-1.5 text-sm font-medium">
          Contraseña
        </span>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="input input-bordered w-full rounded-xl pr-11"
            required
            defaultValue="prototipo123"
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

      <div className="flex items-center justify-between text-sm">
        <label className="flex cursor-pointer items-center gap-2">
          <input type="checkbox" className="checkbox checkbox-sm" defaultChecked />
          <span className="opacity-70">Recordarme</span>
        </label>
        <button type="button" className="font-medium text-primary">
          ¿Olvidaste tu contraseña?
        </button>
      </div>

      <button type="submit" className="btn btn-primary btn-lg rounded-xl">
        Ingresar
      </button>

      <div className="divider my-1 text-xs opacity-50">o continúa con</div>

      <div className="grid grid-cols-2 gap-3">
        <button type="button" className="btn btn-outline rounded-xl">
          Google
        </button>
        <button type="button" className="btn btn-outline rounded-xl">
          Microsoft
        </button>
      </div>

      <p className="mt-2 text-center text-sm opacity-60">
        ¿Aún no tienes cuenta?{" "}
        <a href="/register" className="font-semibold text-primary">
          Regístrate gratis
        </a>
      </p>
    </form>
  );
}
