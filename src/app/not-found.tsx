import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { IconArrowRight, IconBook, IconHome } from "@/components/ui/icons";

const suggestions = [
  { href: "/explore", label: "Explorar publicaciones" },
  { href: "/courses", label: "Ver cursos" },
  { href: "/search", label: "Buscar contenido" },
];

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-16 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-base-100 to-base-100" />
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 text-primary/10" />

      <div className="relative mb-8">
        <p className="text-8xl font-extrabold tracking-tight text-gradient sm:text-9xl">
          404
        </p>
        <div className="absolute -right-16 top-6 hidden animate-float sm:block">
          <span className="flex size-16 items-center justify-center rounded-full border border-base-300 bg-base-100 text-primary shadow-lg">
            <IconBook size={28} />
          </span>
        </div>
        <div className="absolute -left-20 top-24 hidden animate-float-delay sm:block">
          <span className="flex size-12 items-center justify-center rounded-full border border-base-300 bg-base-100 text-primary shadow-lg">
            <IconHome size={20} />
          </span>
        </div>
      </div>

      <h1 className="text-2xl font-bold sm:text-3xl">
        ¡Ups! Te perdiste entre los apuntes
      </h1>
      <p className="mt-3 max-w-md text-base-content/60">
        La página que buscas fue movida, renombrada o tal vez solo fue una
        distracción de estudiar. No pasa nada, aquí tienes por dónde seguir:
      </p>

      <div className="mt-8 flex flex-col items-center gap-3">
        <Link href="/" className="btn btn-primary btn-lg rounded-full px-8">
          Volver al inicio
          <IconArrowRight size={18} />
        </Link>
        <div className="mt-2 flex flex-wrap justify-center gap-2">
          {suggestions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="badge badge-ghost badge-lg rounded-full text-sm font-medium hover:badge-primary"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12 flex items-center gap-2 opacity-40">
        <Logo size="sm" />
      </div>
    </div>
  );
}
