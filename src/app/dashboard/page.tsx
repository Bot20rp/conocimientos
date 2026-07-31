import Link from "next/link";
import { posts } from "@/lib/data/posts";
import { events } from "@/lib/data/events";
import { materials } from "@/lib/data/materials";
import { users } from "@/lib/data/users";
import { courses } from "@/lib/data/courses";
import { PostCard } from "@/components/PostCard";
import { PostComposer } from "@/components/PostComposer";
import { Avatar } from "@/components/ui/Avatar";
import { EventCard } from "@/components/EventCard";
import { MaterialCard } from "@/components/MaterialCard";
import {
  IconArrowRight,
  IconBook,
  IconCalendar,
  IconFile,
  IconFolder,
  IconGraduation,
  IconStar,
} from "@/components/ui/icons";

export const metadata = {
  title: "Inicio",
};

const shortcuts = [
  { href: "/dashboard/courses", label: "Mis cursos", icon: <IconBook size={18} /> },
  { href: "/dashboard/materials", label: "Materiales", icon: <IconFile size={18} /> },
  { href: "/dashboard/events", label: "Eventos", icon: <IconCalendar size={18} /> },
  { href: "/dashboard/profile", label: "Mi perfil", icon: <IconFolder size={18} /> },
];

export default function DashboardPage() {
  const upcoming = events.slice(0, 2);
  const recentMaterials = materials.slice(0, 2);
  const course = courses[1];

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)_320px]">
        {/* ======== Left column ======== */}
        <aside className="hidden space-y-6 lg:block">
          <div className="card border border-base-300/70 bg-base-100 shadow-sm">
            <div className="card-body p-4">
              <div className="flex items-center gap-3">
                <Avatar name={users[0].name} gradient={users[0].gradient} size="lg" />
                <div className="leading-tight">
                  <p className="font-bold">{users[0].name}</p>
                  <p className="text-xs opacity-50">@{users[0].username}</p>
                </div>
              </div>
              <div className="mt-3 flex justify-around border-t border-base-300/60 pt-3 text-center text-xs">
                <div>
                  <p className="text-base font-bold">{users[0].followers}</p>
                  <p className="opacity-50">Seguidores</p>
                </div>
                <div>
                  <p className="text-base font-bold">{users[0].following}</p>
                  <p className="opacity-50">Siguiendo</p>
                </div>
                <div>
                  <p className="text-base font-bold">12</p>
                  <p className="opacity-50">Cursos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card border border-base-300/70 bg-base-100 shadow-sm">
            <div className="card-body gap-1 p-4">
              <h3 className="mb-1 text-sm font-bold uppercase tracking-wide opacity-50">
                Atajos
              </h3>
              {shortcuts.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex items-center gap-3 rounded-xl px-2 py-2 text-sm font-medium transition hover:bg-base-200"
                >
                  <span className="text-primary">{s.icon}</span>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="card border border-base-300/70 bg-base-100 shadow-sm">
            <div className="card-body p-4">
              <h3 className="text-sm font-bold uppercase tracking-wide opacity-50">
                Comunidades
              </h3>
              <div className="mt-2 space-y-3">
                {users.slice(2, 5).map((u) => (
                  <div key={u.id} className="flex items-center gap-2.5">
                    <Avatar name={u.name} gradient={u.gradient} size="sm" />
                    <div className="min-w-0 flex-1 leading-tight">
                      <p className="truncate text-sm font-medium">{u.name}</p>
                      <p className="truncate text-xs opacity-50">{u.faculty}</p>
                    </div>
                    <button className="btn btn-outline btn-xs rounded-full">
                      Seguir
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* ======== Feed ======== */}
        <div className="min-w-0 space-y-4">
          <PostComposer />
          <div className="flex items-center gap-2 text-sm opacity-60">
            <IconGraduation size={16} />
            <span>
              Mostrando publicaciones de <strong>Ingeniería de Sistemas</strong> y
              otras facultades
            </span>
          </div>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* ======== Right column ======== */}
        <aside className="hidden space-y-6 xl:block">
          <div className="card border border-base-300/70 bg-base-100 shadow-sm">
            <div className="card-body gap-4 p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-bold">Mi progreso</h3>
                <span className="badge badge-primary badge-sm">En curso</span>
              </div>
              <div
                className="flex h-14 items-center gap-3 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 p-2.5 text-white"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/20">
                  <IconStar size={18} />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{course.title}</p>
                  <p className="text-xs opacity-80">68% completado</p>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs opacity-60">
                  <span>Módulo 3 de 5</span>
                  <span className="font-semibold text-primary">68%</span>
                </div>
                <progress
                  className="progress progress-primary mt-1.5 h-2"
                  value="68"
                  max="100"
                />
              </div>
              <Link
                href="/dashboard/courses"
                className="btn btn-ghost btn-sm gap-2 rounded-full"
              >
                Continuar curso <IconArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between px-1">
              <h3 className="font-bold">Próximos eventos</h3>
              <Link
                href="/dashboard/events"
                className="link link-primary link-hover text-sm"
              >
                Ver todos
              </Link>
            </div>
            <div className="mt-3 space-y-3">
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between px-1">
              <h3 className="font-bold">Materiales recientes</h3>
              <Link
                href="/dashboard/materials"
                className="link link-primary link-hover text-sm"
              >
                Ver todos
              </Link>
            </div>
            <div className="mt-3 space-y-3">
              {recentMaterials.map((material) => (
                <MaterialCard key={material.id} material={material} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
