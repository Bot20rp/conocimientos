import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { categories } from "@/lib/data";
import {
  IconGithub,
  IconInstagram,
  IconLifebuoy,
  IconMail,
  IconPhone,
  IconTwitter,
  IconYoutube,
} from "@/components/ui/icons";

const helpLinks = [
  { href: "/about", label: "Acerca de" },
  { href: "/help", label: "Centro de ayuda" },
  { href: "/community", label: "Normas de la comunidad" },
  { href: "/privacy", label: "Privacidad" },
  { href: "/terms", label: "Términos de servicio" },
];

const categoryLinks = categories.slice(0, 6);

export function Footer() {
  return (
    <footer className="mt-16 border-t border-base-300/60 bg-base-200/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Logo size="md" />
          <p className="max-w-xs text-sm text-base-content/70">
            La plataforma donde cualquier estudiante publica, organiza, descubre
            y aprende contenido creado por su propia comunidad.
          </p>
          <div className="flex gap-2">
            {[
              { icon: IconTwitter, label: "Twitter" },
              { icon: IconGithub, label: "GitHub" },
              { icon: IconInstagram, label: "Instagram" },
              { icon: IconYoutube, label: "YouTube" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="btn btn-circle btn-ghost btn-sm border border-base-300/70"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Categorías">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-base-content/70">
            Categorías
          </h3>
          <ul className="flex flex-col gap-2.5">
            {categoryLinks.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/explore?category=${category.id}`}
                  className="text-sm text-base-content/80 transition-colors hover:text-primary"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Ayuda">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-base-content/70">
            Ayuda
          </h3>
          <ul className="flex flex-col gap-2.5">
            {helpLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-base-content/80 transition-colors hover:text-primary"
                >
                  <IconLifebuoy size={15} className="text-base-content/40" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-base-content/70">
            Contacto
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-base-content/80">
            <li className="flex items-center gap-2">
              <IconMail size={16} className="text-base-content/40" />
              hola@conocimientos.edu
            </li>
            <li className="flex items-center gap-2">
              <IconPhone size={16} className="text-base-content/40" />
              +51 900 123 456
            </li>
          </ul>
          <div className="mt-6 rounded-box border border-base-300/70 bg-base-100 p-4">
            <p className="text-sm font-semibold">¿Eres docente?</p>
            <p className="mt-1 text-xs text-base-content/70">
              Publica guías y materiales para tus estudiantes en minutos.
            </p>
            <Link
              href="/register"
              className="btn btn-outline btn-sm mt-3 rounded-full"
            >
              Únete gratis
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-base-300/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-base-content/60 sm:flex-row sm:px-6">
          <p>© 2026 Conocimientos. Hecho con cariño por estudiantes.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary">
              Privacidad
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Términos
            </Link>
            <Link href="/cookies" className="hover:text-primary">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
