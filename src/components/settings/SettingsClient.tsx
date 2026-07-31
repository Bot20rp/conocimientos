"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/Avatar";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  IconBell,
  IconGlobe,
  IconKey,
  IconLock,
  IconPalette,
  IconPen,
  IconUpload,
  IconUser,
  IconUserCircle,
} from "@/components/ui/icons";

type TabKey = "profile" | "personal" | "password" | "theme" | "language" | "notifications" | "privacy";

const tabs: { key: TabKey; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
  { key: "profile", label: "Mi perfil", icon: IconUserCircle },
  { key: "personal", label: "Datos personales", icon: IconUser },
  { key: "password", label: "Contraseña", icon: IconKey },
  { key: "theme", label: "Tema", icon: IconPalette },
  { key: "language", label: "Idioma", icon: IconGlobe },
  { key: "notifications", label: "Notificaciones", icon: IconBell },
  { key: "privacy", label: "Privacidad", icon: IconLock },
];

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium">{label}</span>
      {children}
      {hint && <span className="text-xs text-base-content/50">{hint}</span>}
    </label>
  );
}

const inputClass = "input input-bordered w-full rounded-full";
const selectClass = "select select-bordered w-full rounded-full";

export function SettingsClient() {
  const [tab, setTab] = useState<TabKey>("profile");
  const [prefs, setPrefs] = useState({
    emails: true,
    comments: true,
    follows: true,
    recommendations: true,
    messages: true,
    weekly: false,
  });

  function toggle(key: keyof typeof prefs) {
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">Ajustes</h1>

      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <aside className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:overflow-visible">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={cn(
                "btn btn-sm shrink-0 justify-start gap-2 rounded-full lg:rounded-xl",
                tab === key ? "btn-primary" : "btn-ghost",
              )}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </aside>

        <div className="rounded-box border border-base-300/70 bg-base-100 p-6">
          {tab === "profile" && (
            <div className="flex flex-col gap-6">
              <h2 className="text-lg font-bold">Mi perfil</h2>
              <div className="flex flex-wrap items-center gap-5">
                <div className="relative">
                  <Avatar
                    name="Valentina Ríos"
                    gradient="from-violet-500 to-fuchsia-500"
                    size="xl"
                  />
                  <button
                    type="button"
                    className="absolute -bottom-1 -right-1 flex size-8 items-center justify-center rounded-full border border-base-300 bg-base-100 shadow-sm"
                    aria-label="Cambiar foto"
                  >
                    <IconPen size={13} />
                  </button>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold">Foto de perfil</p>
                  <p className="text-sm text-base-content/60">
                    JPG o PNG. Máximo 2 MB.
                  </p>
                  <div className="mt-2 flex gap-2">
                    <button type="button" className="btn btn-outline btn-sm rounded-full">
                      <IconUpload size={15} />
                      Subir foto
                    </button>
                    <button type="button" className="btn btn-ghost btn-sm rounded-full">
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nombre público">
                  <input defaultValue="Valentina Ríos" className={inputClass} />
                </Field>
                <Field label="Usuario">
                  <input defaultValue="@valentina.rios" className={inputClass} />
                </Field>
                <Field label="Título / headline" hint="Aparece junto a tu nombre.">
                  <input
                    defaultValue="Estudiante · Apasionada por el desarrollo de software"
                    className={inputClass}
                  />
                </Field>
                <Field label="Bio">
                  <textarea
                    defaultValue="Aprendo compartiendo. Me encanta el desarrollo de software, la IA y las buenas guías para estudiantes."
                    rows={3}
                    className="textarea textarea-bordered w-full resize-none rounded-2xl"
                  />
                </Field>
              </div>
              <div className="flex justify-end border-t border-base-300/70 pt-4">
                <button type="button" className="btn btn-primary btn-sm rounded-full px-6">
                  Guardar cambios
                </button>
              </div>
            </div>
          )}

          {tab === "personal" && (
            <div className="flex flex-col gap-6">
              <h2 className="text-lg font-bold">Datos personales</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nombre completo">
                  <input defaultValue="Valentina Ríos Torres" className={inputClass} />
                </Field>
                <Field label="Correo electrónico">
                  <input type="email" defaultValue="valentina.rios@universidad.edu" className={inputClass} />
                </Field>
                <Field label="Universidad">
                  <input defaultValue="Universidad Nacional de Ingeniería" className={inputClass} />
                </Field>
                <Field label="Carrera">
                  <input defaultValue="Ingeniería de Sistemas" className={inputClass} />
                </Field>
                <Field label="Semestre">
                  <select defaultValue="6" className={selectClass}>
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        Semestre {i + 1}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Ciudad">
                  <input defaultValue="Lima, Perú" className={inputClass} />
                </Field>
              </div>
              <div className="flex justify-end border-t border-base-300/70 pt-4">
                <button type="button" className="btn btn-primary btn-sm rounded-full px-6">
                  Guardar cambios
                </button>
              </div>
            </div>
          )}

          {tab === "password" && (
            <div className="flex max-w-md flex-col gap-6">
              <h2 className="text-lg font-bold">Cambiar contraseña</h2>
              <Field label="Contraseña actual">
                <input type="password" placeholder="••••••••••" className={inputClass} />
              </Field>
              <Field label="Nueva contraseña" hint="Mínimo 8 caracteres.">
                <input type="password" placeholder="••••••••••" className={inputClass} />
              </Field>
              <Field label="Confirmar nueva contraseña">
                <input type="password" placeholder="••••••••••" className={inputClass} />
              </Field>
              <div className="flex justify-end border-t border-base-300/70 pt-4">
                <button type="button" className="btn btn-primary btn-sm rounded-full px-6">
                  Actualizar contraseña
                </button>
              </div>
            </div>
          )}

          {tab === "theme" && (
            <div className="flex flex-col gap-6">
              <h2 className="text-lg font-bold">Apariencia</h2>
              <div className="flex items-center justify-between rounded-box border border-base-300/70 p-4">
                <div>
                  <p className="font-semibold">Modo claro / oscuro</p>
                  <p className="text-sm text-base-content/60">
                    Se aplica a todo el sitio.
                  </p>
                </div>
                <ThemeToggle className="btn-lg" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { name: "Conocimientos", desc: "Violeta y limpio", swatch: "bg-gradient-to-br from-violet-500 to-fuchsia-500" },
                  { name: "Océano", desc: "Azul profundo", swatch: "bg-gradient-to-br from-sky-500 to-blue-600" },
                  { name: "Bosque", desc: "Verde calmado", swatch: "bg-gradient-to-br from-emerald-500 to-teal-600" },
                  { name: "Atardecer", desc: "Cálido y suave", swatch: "bg-gradient-to-br from-amber-500 to-rose-500" },
                ].map((t) => (
                  <button
                    key={t.name}
                    type="button"
                    className="flex items-center gap-3 rounded-box border border-base-300/70 p-3 text-left hover:border-primary/50"
                  >
                    <span className={cn("size-10 rounded-full", t.swatch)} />
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-base-content/60">{t.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {tab === "language" && (
            <div className="flex max-w-md flex-col gap-6">
              <h2 className="text-lg font-bold">Idioma</h2>
              <Field label="Idioma de la interfaz">
                <select defaultValue="es" className={selectClass}>
                  <option value="es">Español</option>
                  <option value="en">English</option>
                  <option value="pt">Português</option>
                </select>
              </Field>
              <div className="flex justify-end border-t border-base-300/70 pt-4">
                <button type="button" className="btn btn-primary btn-sm rounded-full px-6">
                  Guardar preferencias
                </button>
              </div>
            </div>
          )}

          {tab === "notifications" && (
            <div className="flex flex-col gap-6">
              <h2 className="text-lg font-bold">Notificaciones</h2>
              <div className="flex flex-col gap-3">
                {[
                  { key: "comments" as const, title: "Comentarios en mis publicaciones", desc: "Cuando alguien comente o responda." },
                  { key: "follows" as const, title: "Nuevos seguidores", desc: "Cuando alguien empiece a seguirte." },
                  { key: "recommendations" as const, title: "Recomendaciones", desc: "Contenido sugerido para ti." },
                  { key: "messages" as const, title: "Mensajes directos", desc: "Cuando recibas un mensaje nuevo." },
                  { key: "emails" as const, title: "Resumen por correo", desc: "Lo más importante de la semana en tu bandeja." },
                ].map(({ key, title, desc }) => (
                  <div
                    key={key}
                    className="flex items-center justify-between rounded-box border border-base-300/70 p-4"
                  >
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="text-sm text-base-content/60">{desc}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={prefs[key]}
                      onChange={() => toggle(key)}
                      className="toggle toggle-primary"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-end border-t border-base-300/70 pt-4">
                <button type="button" className="btn btn-primary btn-sm rounded-full px-6">
                  Guardar preferencias
                </button>
              </div>
            </div>
          )}

          {tab === "privacy" && (
            <div className="flex flex-col gap-6">
              <h2 className="text-lg font-bold">Privacidad</h2>
              <div className="flex flex-col gap-3">
                {[
                  { key: "public" as const, title: "Perfil público", desc: "Cualquier persona puede ver tu perfil y publicaciones." },
                  { key: "saved" as const, title: "Guardados privados", desc: "Tus carpetas de guardados solo son visibles para ti." },
                  { key: "activity" as const, title: "Mostrar mi actividad", desc: "Compartir tu historial de lecturas y favoritos con tus seguidores." },
                ].map(({ key, title, desc }) => (
                  <div
                    key={key}
                    className="flex items-center justify-between rounded-box border border-base-300/70 p-4"
                  >
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="text-sm text-base-content/60">{desc}</p>
                    </div>
                    <input type="checkbox" defaultChecked={key !== "activity"} className="toggle toggle-primary" />
                  </div>
                ))}
              </div>
              <div className="rounded-box border border-error/30 bg-error/5 p-4">
                <p className="text-sm font-semibold text-error">Zona de riesgo</p>
                <p className="mt-1 text-sm text-base-content/70">
                  Eliminar tu cuenta es irreversible: se borran tus publicaciones,
                  comentarios y guardados.
                </p>
                <button type="button" className="btn btn-error btn-sm mt-3 rounded-full">
                  Eliminar mi cuenta
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
