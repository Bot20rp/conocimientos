"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { notifications, getUserById } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/Avatar";
import {
  IconBell,
  IconCheck,
  IconComment,
  IconHeart,
  IconMessage,
  IconReply,
  IconSparkles,
  IconUser,
} from "@/components/ui/icons";

type Filter = "all" | "unread" | "comments" | "follows" | "recommendations";

const typeMeta: Record<
  string,
  { icon: React.ComponentType<{ size?: number }>; className: string }
> = {
  comment: { icon: IconComment, className: "bg-sky-500/15 text-sky-600 dark:text-sky-400" },
  reply: { icon: IconReply, className: "bg-violet-500/15 text-violet-600 dark:text-violet-400" },
  follow: { icon: IconUser, className: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" },
  publication: { icon: IconHeart, className: "bg-amber-500/15 text-amber-600 dark:text-amber-400" },
  recommendation: { icon: IconSparkles, className: "bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-400" },
  message: { icon: IconMessage, className: "bg-primary/15 text-primary" },
  system: { icon: IconHeart, className: "bg-rose-500/15 text-rose-600 dark:text-rose-400" },
};

export function NotificationsPageClient() {
  const [filter, setFilter] = useState<Filter>("all");
  const [items, setItems] = useState(notifications);

  const filtered = useMemo(() => {
    switch (filter) {
      case "unread":
        return items.filter((n) => !n.read);
      case "comments":
        return items.filter((n) => n.type === "comment" || n.type === "reply");
      case "follows":
        return items.filter((n) => n.type === "follow");
      case "recommendations":
        return items.filter((n) => n.type === "recommendation");
      default:
        return items;
    }
  }, [items, filter]);

  function markAllRead() {
    setItems((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  const unreadCount = items.filter((n) => !n.read).length;

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "Todas" },
    { key: "unread", label: "No leídas" },
    { key: "comments", label: "Comentarios" },
    { key: "follows", label: "Seguidores" },
    { key: "recommendations", label: "Recomendaciones" },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight sm:text-3xl">
          <IconBell size={26} className="text-primary" />
          Notificaciones
          {unreadCount > 0 && (
            <span className="badge badge-error badge-sm text-error-content">
              {unreadCount} nuevas
            </span>
          )}
        </h1>
        <button
          type="button"
          onClick={markAllRead}
          className="btn btn-ghost btn-sm rounded-full text-primary"
        >
          <IconCheck size={16} />
          Marcar todas como leídas
        </button>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={cn(
              "btn btn-sm rounded-full border",
              filter === f.key ? "btn-primary" : "border-base-300/70 bg-base-100",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2 rounded-box border border-base-300/70 bg-base-100 p-3">
        {filtered.map((n) => {
          const user = n.userId ? getUserById(n.userId) : undefined;
          const meta = typeMeta[n.type] ?? typeMeta.system;
          const Icon = meta.icon;
          const href = n.publicationSlug
            ? `/publication/${n.publicationSlug}`
            : n.userId
              ? `/u/${n.userId}`
              : "/notifications";
          return (
            <Link
              key={n.id}
              href={href}
              className={cn(
                "flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-base-200/70",
                !n.read && "bg-primary/5",
              )}
            >
              {user && n.type === "follow" ? (
                <Avatar name={user.name} gradient={user.gradient} size="md" />
              ) : (
                <span
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-full",
                    meta.className,
                  )}
                >
                  <Icon size={18} />
                </span>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold">{n.title}</p>
                  {!n.read && (
                    <span className="size-2 shrink-0 rounded-full bg-primary" />
                  )}
                </div>
                <p className="line-clamp-2 text-sm text-base-content/70">
                  {n.description}
                </p>
                <p className="mt-1 text-xs text-base-content/50">{n.time}</p>
              </div>
            </Link>
          );
        })}

        {filtered.length === 0 && (
          <div className="flex flex-col items-center gap-3 p-14 text-center">
            <IconBell size={44} className="opacity-30" />
            <p className="font-semibold">No hay notificaciones</p>
            <p className="text-sm text-base-content/60">
              Cuando alguien comente o te siga, lo verás aquí.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
