"use client";

import { useState } from "react";
import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  IconAlertTriangle,
  IconBell,
  IconCalendar,
  IconCheck,
  IconCheckCircle,
  IconComment,
  IconInfo,
  IconMail,
  IconSearch,
  IconShare,
  IconThumbsUp,
  IconX,
  IconXCircle,
} from "@/components/ui/icons";
import { cn } from "@/lib/utils";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-box border border-base-300/70 bg-base-100 p-6">
      <h2 className="mb-4 text-lg font-bold">{title}</h2>
      {children}
    </section>
  );
}

function Showcase({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-medium uppercase tracking-wide text-base-content/50">
        {label}
      </p>
      <div className="flex flex-wrap items-center gap-3 rounded-box bg-base-200/40 p-4">
        {children}
      </div>
    </div>
  );
}

const tabs = [
  { key: "desc", label: "Descripción" },
  { key: "code", label: "Código" },
  { key: "docs", label: "Documentación" },
];

export function DesignSystem() {
  const [tab, setTab] = useState("desc");
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<"success" | "error" | "info" | "warning">("success");

  function fireToast(type: "success" | "error" | "info" | "warning") {
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Sistema de diseño</h1>
          <p className="mt-1 text-sm text-base-content/60">
            Librería de componentes reutilizables de la plataforma Conocimientos.
          </p>
        </div>
        <ThemeToggle className="btn-lg" />
      </div>

      <div className="flex flex-col gap-6">
        <Section title="Botones">
          <div className="flex flex-col gap-6">
            <Showcase label="Estilos">
              <button type="button" className="btn btn-primary rounded-full">Primario</button>
              <button type="button" className="btn btn-secondary rounded-full">Secundario</button>
              <button type="button" className="btn btn-accent rounded-full">Acento</button>
              <button type="button" className="btn btn-outline rounded-full">Contorno</button>
              <button type="button" className="btn btn-ghost rounded-full">Fantasma</button>
              <button type="button" className="btn btn-neutral rounded-full">Neutral</button>
              <button type="button" className="btn btn-error rounded-full">Error</button>
            </Showcase>
            <Showcase label="Tamaños">
              <button type="button" className="btn btn-primary btn-xs rounded-full">XS</button>
              <button type="button" className="btn btn-primary btn-sm rounded-full">SM</button>
              <button type="button" className="btn btn-primary rounded-full">MD</button>
              <button type="button" className="btn btn-primary btn-lg rounded-full">LG</button>
            </Showcase>
            <Showcase label="Con icono y estados">
              <button type="button" className="btn btn-primary btn-sm rounded-full">
                <IconThumbsUp size={15} />
                Me gusta
              </button>
              <button type="button" className="btn btn-sm rounded-full" disabled>
                Deshabilitado
              </button>
              <button type="button" className="btn btn-circle btn-ghost btn-sm" aria-label="Campana">
                <IconBell size={17} />
              </button>
              <button type="button" className="btn btn-primary btn-sm rounded-full btn-wide">
                Ancho completo
              </button>
            </Showcase>
          </div>
        </Section>

        <Section title="Inputs y formularios">
          <div className="flex flex-col gap-6">
            <Showcase label="Textos">
              <label className="input input-bordered w-full max-w-xs rounded-full">
                <IconSearch size={16} className="opacity-50" />
                <input placeholder="Buscar..." />
              </label>
              <input type="text" placeholder="Nombre" className="input input-bordered w-full max-w-xs rounded-full" />
              <input type="text" placeholder="Enfocado" className="input input-primary w-full max-w-xs rounded-full" />
              <input type="text" placeholder="Error" className="input input-error w-full max-w-xs rounded-full" />
            </Showcase>
            <Showcase label="Áreas y selects">
              <textarea placeholder="Comentario..." rows={3} className="textarea textarea-bordered w-full max-w-sm rounded-2xl resize-none" />
              <select className="select select-bordered w-full max-w-xs rounded-full">
                <option>Programación</option>
                <option>Inteligencia Artificial</option>
                <option>Matemáticas</option>
              </select>
              <input type="checkbox" className="checkbox checkbox-primary" defaultChecked />
              <input type="radio" name="radio" className="radio radio-primary" defaultChecked />
              <input type="radio" name="radio" className="radio radio-primary" />
            </Showcase>
            <Showcase label="Toggles y progreso">
              <input type="checkbox" className="toggle toggle-primary" defaultChecked />
              <input type="range" className="range range-primary w-full max-w-xs" min="0" max="100" defaultValue="40" />
              <progress className="progress progress-primary w-full max-w-xs" value="60" max="100" />
            </Showcase>
          </div>
        </Section>

        <Section title="Badges, chips y etiquetas">
          <div className="flex flex-col gap-6">
            <Showcase label="Badges">
              <span className="badge badge-primary rounded-full">Primario</span>
              <span className="badge badge-secondary rounded-full">Secundario</span>
              <span className="badge badge-success rounded-full">Éxito</span>
              <span className="badge badge-warning rounded-full">Advertencia</span>
              <span className="badge badge-error rounded-full">Error</span>
              <span className="badge badge-info rounded-full">Info</span>
              <span className="badge badge-ghost rounded-full">Fantasma</span>
            </Showcase>
            <Showcase label="Tamaños">
              <span className="badge badge-xs rounded-full">XS</span>
              <span className="badge badge-sm rounded-full">SM</span>
              <span className="badge rounded-full">MD</span>
              <span className="badge badge-lg rounded-full">LG</span>
              <span className="badge badge-primary badge-outline rounded-full">Contorno</span>
              <span className="badge badge-primary badge-soft rounded-full">Suave</span>
            </Showcase>
            <Showcase label="Chips de etiquetas">
              <span className="badge badge-ghost rounded-full text-sm font-medium">#python</span>
              <span className="badge badge-ghost rounded-full text-sm font-medium">#react</span>
              <span className="badge badge-primary rounded-full text-sm font-medium">#IA</span>
            </Showcase>
          </div>
        </Section>

        <Section title="Tarjetas">
          <div className="flex flex-col gap-6">
            <Showcase label="Card básica">
              <div className="card w-72 border border-base-300/70 bg-base-100 card-glow">
                <figure className="h-28 bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                <div className="card-body p-4">
                  <h3 className="card-title text-base">Título de la tarjeta</h3>
                  <p className="text-sm text-base-content/70">
                    Descripción breve del contenido representado.
                  </p>
                  <div className="card-actions mt-2">
                    <button type="button" className="btn btn-primary btn-sm rounded-full">Acción</button>
                  </div>
                </div>
              </div>
            </Showcase>
            <Showcase label="Card de estadística">
              <div className="stat w-60 rounded-box border border-base-300/70 bg-base-100">
                <div className="stat-title">Seguidores</div>
                <div className="stat-value text-primary">1.240</div>
                <div className="stat-desc">+24% este mes</div>
              </div>
            </Showcase>
          </div>
        </Section>

        <Section title="Alerts y estados">
          <div className="flex flex-col gap-6">
            <Showcase label="Alerts">
              <div className="alert alert-info w-full max-w-md">
                <IconInfo size={18} />
                <span>Información útil para el usuario.</span>
              </div>
              <div className="alert alert-success w-full max-w-md">
                <IconCheckCircle size={18} />
                <span>¡Acción completada con éxito!</span>
              </div>
              <div className="alert alert-warning w-full max-w-md">
                <IconAlertTriangle size={18} />
                <span>Cuidado: esta acción es irreversible.</span>
              </div>
              <div className="alert alert-error w-full max-w-md">
                <IconXCircle size={18} />
                <span>Algo salió mal. Inténtalo de nuevo.</span>
              </div>
            </Showcase>
            <Showcase label="Toasts">
              <button type="button" className="btn btn-sm rounded-full" onClick={() => fireToast("success")}>
                Éxito
              </button>
              <button type="button" className="btn btn-sm rounded-full" onClick={() => fireToast("error")}>
                Error
              </button>
              <button type="button" className="btn btn-sm rounded-full" onClick={() => fireToast("info")}>
                Info
              </button>
              <button type="button" className="btn btn-sm rounded-full" onClick={() => fireToast("warning")}>
                Advertencia
              </button>
            </Showcase>
          </div>
        </Section>

        <Section title="Cargadores y estados de espera">
          <div className="flex flex-col gap-6">
            <Showcase label="Spinners">
              <span className="loading loading-spinner loading-xs" />
              <span className="loading loading-spinner loading-sm" />
              <span className="loading loading-spinner loading-md text-primary" />
              <span className="loading loading-spinner loading-lg text-secondary" />
              <span className="loading loading-dots loading-md text-primary" />
              <span className="loading loading-ring loading-lg text-accent" />
            </Showcase>
            <Showcase label="Skeleton loaders">
              <div className="flex w-full max-w-sm flex-col gap-3">
                <div className="skeleton h-28 w-full rounded-box" />
                <div className="skeleton h-4 w-3/4 rounded-full" />
                <div className="skeleton h-3 w-full rounded-full" />
                <div className="skeleton h-3 w-2/3 rounded-full" />
              </div>
            </Showcase>
          </div>
        </Section>

        <Section title="Avatares">
          <Showcase label="Tamaños">
            <Avatar name="Valentina Ríos" gradient="from-violet-500 to-fuchsia-500" size="xs" />
            <Avatar name="Andrés Morales" gradient="from-sky-500 to-indigo-500" size="sm" />
            <Avatar name="Camila Fernández" gradient="from-amber-500 to-orange-500" size="md" />
            <Avatar name="Lucía Paredes" gradient="from-emerald-500 to-teal-500" size="lg" />
            <Avatar name="Diego Huamán" gradient="from-rose-500 to-pink-500" size="xl" />
          </Showcase>
        </Section>

        <Section title="Acordeón y tabs">
          <div className="flex flex-col gap-6">
            <Showcase label="Acordeón">
              <div className="w-full max-w-md">
                {[
                  { q: "¿Cómo publico mi primer contenido?", a: "Entra a la sección Crear, escribe tu contenido y pulsa Publicar. Recuerda añadir categoría, etiquetas y un buen resumen." },
                  { q: "¿Puedo editar mis publicaciones?", a: "Sí, desde tu perfil puedes editar o eliminar cualquier publicación que hayas creado." },
                  { q: "¿Cómo funcionan los guardados?", a: "Guarda publicaciones en carpetas personalizadas para tener tu material organizado por tema." },
                ].map((item) => (
                  <div key={item.q} className="collapse collapse-arrow border border-base-300/70 bg-base-100">
                    <input type="radio" name="faq" />
                    <div className="collapse-title text-sm font-bold">{item.q}</div>
                    <div className="collapse-content text-sm text-base-content/70">{item.a}</div>
                  </div>
                ))}
              </div>
            </Showcase>
            <Showcase label="Tabs">
              <div className="w-full max-w-md">
                <div role="tablist" className="tabs tabs-box">
                  {tabs.map((t) => (
                    <button
                      key={t.key}
                      type="button"
                      role="tab"
                      onClick={() => setTab(t.key)}
                      className={cn("tab", tab === t.key && "tab-active")}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
                <div className="mt-3 rounded-box bg-base-200/50 p-4 text-sm text-base-content/70">
                  {tab === "desc" && "Esta pestaña muestra la descripción del componente."}
                  {tab === "code" && "Esta pestaña mostraría el código de ejemplo."}
                  {tab === "docs" && "Esta pestaña muestra la documentación de uso."}
                </div>
              </div>
            </Showcase>
          </div>
        </Section>

        <Section title="Carrusel, dropdown y paginación">
          <div className="flex flex-col gap-6">
            <Showcase label="Carrusel">
              <div className="carousel w-full max-w-md gap-3 rounded-box">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="carousel-item w-full">
                    <div className="flex h-32 w-full items-center justify-center rounded-box bg-gradient-to-br from-primary/70 to-secondary/70 text-2xl font-extrabold text-white">
                      Slide {n}
                    </div>
                  </div>
                ))}
              </div>
            </Showcase>
            <Showcase label="Dropdown">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-sm rounded-full border border-base-300/70">
                  Opciones
                </div>
                <ul className="dropdown-content menu z-40 mt-2 w-48 rounded-box border border-base-300 bg-base-100 p-2 shadow-xl">
                  <li><button type="button">Editar</button></li>
                  <li><button type="button">Compartir</button></li>
                  <li><button type="button" className="text-error">Eliminar</button></li>
                </ul>
              </div>
            </Showcase>
            <Showcase label="Paginación">
              <div className="join">
                <button type="button" className="btn btn-sm join-item rounded-l-full">«</button>
                <button type="button" className="btn btn-sm join-item btn-primary">1</button>
                <button type="button" className="btn btn-sm join-item">2</button>
                <button type="button" className="btn btn-sm join-item">3</button>
                <button type="button" className="btn btn-sm join-item rounded-r-full">»</button>
              </div>
            </Showcase>
          </div>
        </Section>

        <Section title="Estados vacíos y errores">
          <div className="flex flex-col gap-6">
            <Showcase label="Estado vacío">
              <div className="flex w-full max-w-md flex-col items-center gap-2 rounded-box border border-dashed border-base-300 p-8 text-center">
                <IconComment size={36} className="opacity-30" />
                <p className="font-semibold">Aún no hay comentarios</p>
                <p className="text-sm text-base-content/60">Sé la primera persona en aportar.</p>
                <button type="button" className="btn btn-primary btn-sm mt-2 rounded-full">Escribir comentario</button>
              </div>
            </Showcase>
            <Showcase label="Estado de error">
              <div className="flex w-full max-w-md flex-col items-center gap-2 rounded-box border border-error/30 bg-error/5 p-8 text-center">
                <IconXCircle size={36} className="text-error opacity-60" />
                <p className="font-semibold">No pudimos cargar el contenido</p>
                <p className="text-sm text-base-content/60">Revisa tu conexión e inténtalo de nuevo.</p>
                <button type="button" className="btn btn-outline btn-sm mt-2 rounded-full">
                  Reintentar
                </button>
              </div>
            </Showcase>
            <Showcase label="Estado sin resultados">
              <div className="flex w-full max-w-md flex-col items-center gap-2 rounded-box border border-dashed border-base-300 p-8 text-center">
                <IconSearch size={36} className="opacity-30" />
                <p className="font-semibold">Sin resultados para &ldquo;xyz&rdquo;</p>
                <p className="text-sm text-base-content/60">Prueba con otros términos de búsqueda.</p>
              </div>
            </Showcase>
          </div>
        </Section>

        <Section title="Modal y calendario">
          <div className="flex flex-col gap-6">
            <Showcase label="Modal">
              <button
                type="button"
                className="btn btn-sm rounded-full"
                onClick={() => (document.getElementById("demo-modal") as HTMLDialogElement | null)?.showModal()}
              >
                Abrir modal
              </button>
              <dialog id="demo-modal" className="modal">
                <div className="modal-box">
                  <h3 className="text-lg font-bold">Modal de ejemplo</h3>
                  <p className="py-4 text-sm text-base-content/70">
                    Los modales concentran la atención en una acción específica.
                  </p>
                  <div className="modal-action">
                    <button type="button" className="btn btn-sm rounded-full" onClick={() => (document.getElementById("demo-modal") as HTMLDialogElement | null)?.close()}>
                      <IconX size={15} />
                      Cerrar
                    </button>
                    <button type="button" className="btn btn-primary btn-sm rounded-full">
                      <IconCheck size={15} />
                      Confirmar
                    </button>
                  </div>
                </div>
              </dialog>
            </Showcase>
            <Showcase label="Calendario (estático)">
              <div className="w-72 rounded-box border border-base-300/70 bg-base-100 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <button type="button" className="btn btn-circle btn-ghost btn-xs">‹</button>
                  <p className="text-sm font-bold">Julio 2026</p>
                  <button type="button" className="btn btn-circle btn-ghost btn-xs">›</button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs text-base-content/50">
                  {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
                    <span key={i} className="py-1 font-semibold">{d}</span>
                  ))}
                  {Array.from({ length: 35 }, (_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "flex items-center justify-center rounded-full py-1.5",
                        i === 14 && "bg-primary font-bold text-primary-content",
                        i > 27 && "opacity-30",
                      )}
                    >
                      {(i % 31) + 1}
                    </span>
                  ))}
                </div>
              </div>
            </Showcase>
          </div>
        </Section>

        <Section title="Migas de pan y botones de acción">
          <div className="flex flex-col gap-6">
            <Showcase label="Breadcrumbs">
              <div className="breadcrumbs text-sm">
                <ul>
                  <li><Link href="/">Inicio</Link></li>
                  <li><Link href="/explore">Explorar</Link></li>
                  <li>Python desde cero</li>
                </ul>
              </div>
            </Showcase>
            <Showcase label="Acciones de contenido">
              <button type="button" className="btn btn-ghost btn-sm rounded-full">
                <IconThumbsUp size={16} />
                84
              </button>
              <button type="button" className="btn btn-ghost btn-sm rounded-full">
                <IconComment size={16} />
                46
              </button>
              <button type="button" className="btn btn-ghost btn-sm rounded-full">
                <IconShare size={16} />
                Compartir
              </button>
              <button type="button" className="btn btn-ghost btn-sm rounded-full">
                <IconCalendar size={16} />
                Calendario
              </button>
              <button type="button" className="btn btn-ghost btn-sm rounded-full">
                <IconMail size={16} />
                Contactar
              </button>
            </Showcase>
          </div>
        </Section>
      </div>

      {showToast && (
        <div className="toast toast-top toast-center z-50">
          <div
            className={cn(
              "animate-scale-in flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-xl",
              toastType === "success" && "border-success/40 bg-success text-success-content",
              toastType === "error" && "border-error/40 bg-error text-error-content",
              toastType === "info" && "border-info/40 bg-info text-info-content",
              toastType === "warning" && "border-warning/40 bg-warning text-warning-content",
            )}
          >
            {toastType === "success" && <IconCheckCircle size={16} />}
            {toastType === "error" && <IconXCircle size={16} />}
            {toastType === "info" && <IconInfo size={16} />}
            {toastType === "warning" && <IconAlertTriangle size={16} />}
            {toastType === "success" && "Acción completada"}
            {toastType === "error" && "Algo salió mal"}
            {toastType === "info" && "Información"}
            {toastType === "warning" && "Advertencia"}
          </div>
        </div>
      )}
    </div>
  );
}
