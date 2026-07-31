import Link from "next/link";
import { Sidebar } from "@/components/Sidebar";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Avatar } from "@/components/ui/Avatar";
import { users } from "@/lib/data/users";
import {
  IconBell,
  IconBook,
  IconCalendar,
  IconFile,
  IconHome,
  IconLogout,
  IconMenu,
  IconSearch,
  IconShield,
  IconUser,
  IconUserCircle,
  IconX,
} from "@/components/ui/icons";

const currentUser = users[0];

const nav = [
  { href: "/dashboard", label: "Inicio", icon: <IconHome size={19} />, exact: true },
  { href: "/dashboard/courses", label: "Mis cursos", icon: <IconBook size={19} /> },
  { href: "/dashboard/materials", label: "Materiales", icon: <IconFile size={19} /> },
  { href: "/dashboard/events", label: "Eventos", icon: <IconCalendar size={19} /> },
  { href: "/dashboard/profile", label: "Mi perfil", icon: <IconUserCircle size={19} /> },
];

const footer = (
  <details className="dropdown dropdown-top">
    <summary className="flex cursor-pointer items-center gap-2 rounded-xl p-2 transition hover:bg-base-300/50">
      <Avatar name={currentUser.name} gradient={currentUser.gradient} size="sm" />
      <span className="min-w-0 flex-1 leading-tight">
        <span className="block truncate text-sm font-semibold">
          {currentUser.name}
        </span>
        <span className="block truncate text-xs opacity-50">
          {currentUser.faculty}
        </span>
      </span>
    </summary>
    <ul className="menu dropdown-content z-50 w-56 rounded-box border border-base-300/70 bg-base-100 p-2 shadow-lg">
      <li>
        <Link href="/dashboard/profile">
          <IconUser size={17} /> Mi perfil
        </Link>
      </li>
      <li>
        <Link href="/admin">
          <IconShield size={17} /> Panel de administración
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

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="dash-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 flex h-16 items-center gap-3 border-b border-base-300/60 bg-base-100/85 px-4 backdrop-blur-md sm:px-6">
          <div className="lg:hidden">
            <label
              htmlFor="dash-drawer"
              aria-label="Abrir menú"
              className="btn btn-circle btn-ghost btn-sm"
            >
              <IconMenu size={20} />
            </label>
          </div>

          <Logo size="sm" className="lg:hidden" />

          <form action="/dashboard/materials" className="hidden flex-1 justify-center sm:flex">
            <label className="input input-sm input-bordered flex w-full max-w-md items-center gap-2 rounded-full">
              <IconSearch size={15} className="opacity-50" />
              <input
                type="search"
                name="q"
                placeholder="Buscar en la comunidad..."
                className="grow"
              />
            </label>
          </form>

          <div className="ml-auto flex items-center gap-1.5">
            <ThemeToggle className="btn-sm" />
            <div className="indicator">
              <span className="badge indicator-item badge-primary badge-xs" />
              <button className="btn btn-circle btn-ghost btn-sm" aria-label="Notificaciones">
                <IconBell size={20} />
              </button>
            </div>
            <details className="dropdown dropdown-end">
              <summary className="btn btn-ghost btn-circle btn-sm cursor-pointer list-none">
                <Avatar name={currentUser.name} gradient={currentUser.gradient} size="sm" />
              </summary>
              <ul className="menu dropdown-content z-50 mt-2 w-56 rounded-box border border-base-300/70 bg-base-100 p-2 shadow-lg">
                <li className="pointer-events-none px-3 py-2">
                  <p className="text-sm font-semibold">{currentUser.name}</p>
                  <p className="text-xs opacity-50">@{currentUser.username}</p>
                </li>
                <li className="mt-1 border-t border-base-300/60">
                  <Link href="/dashboard/profile">
                    <IconUser size={17} /> Mi perfil
                  </Link>
                </li>
                <li>
                  <Link href="/admin">
                    <IconShield size={17} /> Panel de administración
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
        <label htmlFor="dash-drawer" aria-label="Cerrar menú" className="drawer-overlay lg:hidden" />
        <div className="hidden h-full flex-col border-r border-base-300/60 bg-base-200/60 lg:flex">
          <div className="flex h-16 items-center border-b border-base-300/60 px-5">
            <Logo size="sm" />
          </div>
          <Sidebar nav={nav} title="Menú" footer={footer} />
        </div>

        <div className="lg:hidden">
          <div className="flex h-full flex-col bg-base-100">
            <div className="flex h-16 items-center justify-between border-b border-base-300/60 px-4">
              <Logo size="sm" />
              <label
                htmlFor="dash-drawer"
                aria-label="Cerrar menú"
                className="btn btn-circle btn-ghost btn-sm"
              >
                <IconX size={20} />
              </label>
            </div>
            <Sidebar nav={nav} title="Menú" footer={footer} />
          </div>
        </div>
      </div>
    </div>
  );
}
