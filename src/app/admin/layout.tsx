import Link from "next/link";
import { Sidebar } from "@/components/Sidebar";
import { Logo } from "@/components/ui/Logo";
import { Avatar } from "@/components/ui/Avatar";
import { users } from "@/lib/data/users";
import {
  IconChart,
  IconFile,
  IconHome,
  IconLogout,
  IconMenu,
  IconShield,
  IconUsers,
  IconFlag,
  IconX,
} from "@/components/ui/icons";

const currentUser = users[7];

const nav = [
  { href: "/admin", label: "Resumen", icon: <IconChart size={19} />, exact: true },
  { href: "/admin/posts", label: "Publicaciones", icon: <IconHome size={19} /> },
  { href: "/admin/users", label: "Usuarios", icon: <IconUsers size={19} /> },
  { href: "/admin/materials", label: "Materiales", icon: <IconFile size={19} /> },
  { href: "/admin/reports", label: "Reportes", icon: <IconFlag size={19} /> },
];

const footer = (
  <details className="dropdown dropdown-top">
    <summary className="flex cursor-pointer items-center gap-2 rounded-xl p-2 transition hover:bg-base-300/50">
      <Avatar name={currentUser.name} gradient={currentUser.gradient} size="sm" />
      <span className="min-w-0 flex-1 leading-tight">
        <span className="block truncate text-sm font-semibold">{currentUser.name}</span>
        <span className="block truncate text-xs opacity-50">Administradora</span>
      </span>
    </summary>
    <ul className="menu dropdown-content z-50 w-56 rounded-box border border-base-300/70 bg-base-100 p-2 shadow-lg">
      <li>
        <Link href="/dashboard">
          <IconShield size={17} /> Volver a mi espacio
        </Link>
      </li>
      <li className="mt-1 border-t border-base-300/60">
        <Link href="/login">
          <IconLogout size={17} /> Cerrar sesión
        </Link>
      </li>
    </ul>
  </details>
);

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="admin-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 flex h-16 items-center gap-3 border-b border-base-300/60 bg-base-100/85 px-4 backdrop-blur-md sm:px-6">
          <div className="lg:hidden">
            <label
              htmlFor="admin-drawer"
              aria-label="Abrir menú"
              className="btn btn-circle btn-ghost btn-sm"
            >
              <IconMenu size={20} />
            </label>
          </div>
          <Logo size="sm" className="lg:hidden" />
          <div className="flex items-center gap-2">
            <span className="badge badge-secondary badge-sm lg:badge-md">Panel de administración</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Link href="/dashboard" className="btn btn-ghost btn-sm rounded-full">
              Ver plataforma
            </Link>
            <details className="dropdown dropdown-end">
              <summary className="btn btn-ghost btn-circle btn-sm cursor-pointer list-none">
                <Avatar name={currentUser.name} gradient={currentUser.gradient} size="sm" />
              </summary>
              <ul className="menu dropdown-content z-50 mt-2 w-56 rounded-box border border-base-300/70 bg-base-100 p-2 shadow-lg">
                <li className="pointer-events-none px-3 py-2">
                  <p className="text-sm font-semibold">{currentUser.name}</p>
                  <p className="text-xs opacity-50">{currentUser.faculty}</p>
                </li>
                <li className="mt-1 border-t border-base-300/60">
                  <Link href="/dashboard">
                    <IconShield size={17} /> Volver a mi espacio
                  </Link>
                </li>
                <li className="border-t border-base-300/60">
                  <Link href="/login">
                    <IconLogout size={17} /> Cerrar sesión
                  </Link>
                </li>
              </ul>
            </details>
          </div>
        </header>

        <main className="flex-1">{children}</main>
      </div>

      <div className="drawer-side z-50 lg:sticky lg:top-0 lg:h-screen">
        <label htmlFor="admin-drawer" aria-label="Cerrar menú" className="drawer-overlay lg:hidden" />
        <div className="hidden h-full flex-col border-r border-base-300/60 bg-base-200/60 lg:flex">
          <div className="flex h-16 items-center gap-2 border-b border-base-300/60 px-5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-primary text-secondary-content">
              <IconShield size={18} />
            </span>
            <span className="font-bold">Conocimientos Admin</span>
          </div>
          <Sidebar nav={nav} title="Administración" footer={footer} />
        </div>

        <div className="lg:hidden">
          <div className="flex h-full flex-col bg-base-100">
            <div className="flex h-16 items-center justify-between border-b border-base-300/60 px-4">
              <Logo size="sm" />
              <label
                htmlFor="admin-drawer"
                aria-label="Cerrar menú"
                className="btn btn-circle btn-ghost btn-sm"
              >
                <IconX size={20} />
              </label>
            </div>
            <Sidebar nav={nav} title="Administración" footer={footer} />
          </div>
        </div>
      </div>
    </div>
  );
}
