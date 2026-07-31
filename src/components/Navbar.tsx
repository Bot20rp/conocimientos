"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Avatar } from "@/components/ui/Avatar";
import { NotificationsPanel } from "@/components/NotificationsPanel";
import {
  conversations,
  notifications,
  users,
} from "@/lib/data";
import {
  IconBell,
  IconBookmark,
  IconHome,
  IconHistory,
  IconLayers,
  IconLogout,
  IconMenu,
  IconMessage,
  IconPen,
  IconSearch,
  IconSettings,
  IconUserCircle,
  IconX,
} from "@/components/ui/icons";

const currentUser = users.find((u) => u.id === "u1") ?? users[0];
const unreadNotifications = notifications.filter((n) => !n.read).length;
const unreadMessages = conversations.reduce(
  (acc, c) => acc + c.unread,
  0,
);

export function Navbar() {
  return (
    <div className="drawer">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <header className="glass sticky top-0 z-40 border-b border-base-300/60">
          <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-4 sm:gap-3 sm:px-6">
            <label
              htmlFor="nav-drawer"
              aria-label="Abrir menú"
              className="btn btn-circle btn-ghost btn-sm lg:hidden"
            >
              <IconMenu size={20} />
            </label>

            <Logo size="md" className="mr-1" />

            <form
              action="/search"
              className="relative hidden max-w-md flex-1 md:block"
            >
              <label className="input input-sm w-full items-center gap-2 rounded-full border-base-300/70 bg-base-200/60 pl-3 focus-within:border-primary">
                <IconSearch size={16} className="opacity-50" />
                <input
                  type="search"
                  name="q"
                  placeholder="Buscar publicaciones, categorías, estudiantes..."
                  className="grow bg-transparent"
                />
              </label>
            </form>

            <div className="ml-auto flex items-center gap-1 sm:gap-1.5">
              <Link
                href="/explore"
                className="btn btn-ghost btn-sm hidden items-center gap-2 rounded-full text-base-content/80 xl:flex"
              >
                <IconSearch size={16} />
                Explorar
              </Link>

              <Link
                href="/publish"
                className="btn btn-primary btn-sm hidden items-center gap-1.5 rounded-full sm:inline-flex"
              >
                <IconPen size={15} />
                <span className="hidden lg:inline">Crear</span>
                <span className="lg:hidden">Publicar</span>
              </Link>

              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-circle btn-ghost btn-sm relative"
                  aria-label="Notificaciones"
                >
                  <IconBell size={20} />
                  <span className="absolute right-0 top-0 flex size-4 -translate-y-0.5 translate-x-0.5 items-center justify-center rounded-full bg-error text-[9px] font-bold text-error-content">
                    {unreadNotifications}
                  </span>
                </div>
                <div className="dropdown-content z-50 mt-2 w-96 max-w-[calc(100vw-2rem)] overflow-hidden rounded-box border border-base-300 bg-base-100 p-3 shadow-2xl">
                  <div className="flex items-center justify-between px-2 pb-2">
                    <h3 className="text-sm font-bold">Notificaciones</h3>
                    <Link
                      href="/notifications"
                      className="text-xs font-semibold text-primary hover:underline"
                    >
                      Marcar leídas
                    </Link>
                  </div>
                  <NotificationsPanel compact />
                </div>
              </div>

              <Link
                href="/messages"
                className="btn btn-circle btn-ghost btn-sm relative"
                aria-label="Mensajes"
              >
                <IconMessage size={20} />
                {unreadMessages > 0 && (
                  <span className="absolute right-0 top-0 flex size-4 -translate-y-0.5 translate-x-0.5 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-content">
                    {unreadMessages}
                  </span>
                )}
              </Link>

              <Link
                href="/saved"
                className="btn btn-circle btn-ghost btn-sm hidden sm:inline-flex"
                aria-label="Guardados"
              >
                <IconBookmark size={20} />
              </Link>

              <ThemeToggle className="btn-sm" />

              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm">
                  <Avatar
                    name={currentUser.name}
                    gradient={currentUser.gradient}
                    size="sm"
                  />
                </div>
                <ul className="dropdown-content menu z-50 mt-2 w-60 rounded-box border border-base-300 bg-base-100 p-2 shadow-2xl">
                  <li className="menu-title px-3">
                    <div className="flex flex-col">
                      <span className="font-bold text-base-content">
                        {currentUser.name}
                      </span>
                      <span className="text-xs font-normal text-base-content/60">
                        @{currentUser.username}
                      </span>
                    </div>
                  </li>
                  <li>
                    <Link href="/u/u1">
                      <IconUserCircle size={18} />
                      Mi perfil
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard">
                      <IconHome size={18} />
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link href="/saved">
                      <IconBookmark size={18} />
                      Guardados
                    </Link>
                  </li>
                  <li>
                    <Link href="/history">
                      <IconHistory size={18} />
                      Historial
                    </Link>
                  </li>
                  <li>
                    <Link href="/settings">
                      <IconSettings size={18} />
                      Ajustes
                    </Link>
                  </li>
                  <li>
                    <Link href="/design-system">
                      <IconLayers size={18} />
                      Sistema de diseño
                    </Link>
                  </li>
                  <li className="mt-1 border-t border-base-300 pt-1">
                    <Link href="/login" className="text-error">
                      <IconLogout size={18} />
                      Cerrar sesión
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="drawer-side z-50 lg:hidden">
        <label htmlFor="nav-drawer" aria-label="Cerrar menú" className="drawer-overlay" />
        <aside className="flex min-h-full w-80 max-w-[85vw] flex-col gap-2 bg-base-100 p-4 shadow-2xl">
          <div className="flex items-center justify-between">
            <Logo size="sm" />
            <label htmlFor="nav-drawer" className="btn btn-circle btn-ghost btn-sm">
              <IconX size={18} />
            </label>
          </div>
          <form action="/search" className="mt-2 md:hidden">
            <label className="input input-bordered flex items-center gap-2 rounded-full">
              <IconSearch size={16} className="opacity-50" />
              <input type="search" name="q" placeholder="Buscar..." className="grow" />
            </label>
          </form>
          <ul className="menu gap-1">
            <li>
              <Link href="/">
                <IconHome size={18} />
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/explore">
                <IconSearch size={18} />
                Explorar
              </Link>
            </li>
            <li>
              <Link href="/saved">
                <IconBookmark size={18} />
                Guardados
              </Link>
            </li>
            <li>
              <Link href="/history">
                <IconHistory size={18} />
                Historial
              </Link>
            </li>
            <li>
              <Link href="/messages">
                <IconMessage size={18} />
                Mensajes
                {unreadMessages > 0 && (
                  <span className="badge badge-primary badge-sm ml-auto">
                    {unreadMessages}
                  </span>
                )}
              </Link>
            </li>
          </ul>
          <div className="mt-auto flex flex-col gap-2 border-t border-base-300 pt-4">
            <Link href="/publish" className="btn btn-primary">
              <IconPen size={18} />
              Crear publicación
            </Link>
            <div className="flex items-center justify-between rounded-box bg-base-200/70 px-4 py-3">
              <div className="flex items-center gap-2">
                <Avatar
                  name={currentUser.name}
                  gradient={currentUser.gradient}
                  size="sm"
                />
                <div className="leading-tight">
                  <p className="text-sm font-semibold">{currentUser.name}</p>
                  <p className="text-xs text-base-content/60">@valentina.rios</p>
                </div>
              </div>
              <ThemeToggle className="btn-xs" />
            </div>
            <Link
              href="/login"
              className="btn btn-ghost btn-sm text-error"
            >
              <IconLogout size={18} />
              Cerrar sesión
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
