"use client";

import { useMemo, useState } from "react";
import { getPublicationBySlug, publications, users } from "@/lib/data";
import { Avatar } from "@/components/ui/Avatar";
import {
  PublicationCard,
  PublicationListRow,
} from "@/components/publications/PublicationCard";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import {
  IconBookmark,
  IconComment,
  IconGraduation,
  IconHeart,
  IconHistory,
  IconMapPin,
  IconShare,
  IconSparkles,
  IconUsers,
} from "@/components/ui/icons";
import { cn, formatNumber, gradientOf } from "@/lib/utils";

type TabKey = "publications" | "saved" | "comments" | "history" | "favorites";

const interestTags = [
  "Python", "Machine Learning", "Desarrollo Web", "Cálculo", "SQL", "UI/UX", "Git",
];

const favTechnologies = ["Python", "React", "TypeScript", "PostgreSQL", "Figma"];

export function ProfileClient({ userId }: { userId: string }) {
  const user = users.find((u) => u.id === userId) ?? users[0];
  const [tab, setTab] = useState<TabKey>("publications");

  const userPublications = useMemo(
    () => publications.filter((p) => p.authorId === user.id),
    [user.id],
  );

  const tabs: { key: TabKey; label: string; icon: React.ComponentType<{ size?: number }>; count?: number }[] = [
    { key: "publications", label: "Publicaciones", icon: IconSparkles, count: userPublications.length },
    { key: "saved", label: "Guardados", icon: IconBookmark, count: 12 },
    { key: "comments", label: "Comentarios", icon: IconComment, count: 48 },
    { key: "history", label: "Historial", icon: IconHistory, count: 5 },
    { key: "favorites", label: "Favoritos", icon: IconHeart, count: 26 },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="relative overflow-hidden rounded-box border border-base-300/70 bg-base-100 card-glow">
        <div
          className="h-40 bg-gradient-to-br"
          style={{ background: gradientOf(user.gradient) }}
        />
        <div className="relative -mt-14 flex flex-col gap-4 px-6 pb-6 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="rounded-full border-4 border-base-100">
              <Avatar name={user.name} gradient={user.gradient} size="xl" />
            </div>
            <div className="pb-1">
              <h1 className="text-2xl font-extrabold tracking-tight">{user.name}</h1>
              <p className="text-sm text-base-content/60">@{user.username}</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm font-medium">
                <IconGraduation size={16} className="text-primary" />
                {user.headline}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 pb-1">
            <button type="button" className="btn btn-primary btn-sm rounded-full px-5">
              <IconUsers size={15} />
              Seguir
            </button>
            <button type="button" className="btn btn-ghost btn-sm rounded-full" aria-label="Compartir perfil">
              <IconShare size={16} />
            </button>
          </div>
        </div>

        <div className="grid gap-6 border-t border-base-300/70 px-6 py-5 sm:grid-cols-3 sm:px-8">
          <div className="flex items-center gap-2 text-sm text-base-content/70">
            <IconGraduation size={17} className="text-primary" />
            <span className="font-semibold">{user.faculty}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-base-content/70">
            <IconMapPin size={17} className="text-primary" />
            <span className="font-semibold">Lima, Perú</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center sm:text-right">
            {[
              { value: user.followers, label: "seguidores" },
              { value: user.following, label: "siguiendo" },
              { value: userPublications.length, label: "publicaciones" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-lg font-extrabold text-primary">
                  {formatNumber(s.value)}
                </p>
                <p className="text-xs text-base-content/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 border-t border-base-300/70 px-6 py-5 sm:grid-cols-2 sm:px-8">
          <div>
            <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-base-content/70">
              Intereses
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {interestTags.map((t) => (
                <span key={t} className="badge badge-ghost badge-sm rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-base-content/70">
              Tecnologías favoritas
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {favTechnologies.map((t) => (
                <span key={t} className="badge badge-primary badge-soft badge-sm rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-base-300/70 px-6 pt-4 sm:px-8">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map(({ key, label, icon: Icon, count }) => (
              <button
                key={key}
                type="button"
                onClick={() => setTab(key)}
                className={cn(
                  "btn btn-sm shrink-0 gap-2 rounded-t-xl border-b-2",
                  tab === key
                    ? "border-primary text-primary"
                    : "border-transparent text-base-content/60",
                )}
              >
                <Icon size={15} />
                {label}
                {count !== undefined && (
                  <span className="opacity-60">{count}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        {tab === "publications" && (
          <>
            {userPublications.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {userPublications.map((p) => (
                  <PublicationCard key={p.id} publication={p} />
                ))}
              </div>
            ) : (
              <EmptyState text="Este usuario aún no publica contenido." />
            )}
          </>
        )}

        {tab === "saved" && <EmptyState text="Tus publicaciones guardadas aparecen aquí." />}
        {tab === "comments" && (
          <div className="flex flex-col gap-4">
            {[0, 1].map((i) => {
              const p = userPublications[i] ?? publications[0];
              return (
                <div key={i} className="rounded-box border border-base-300/70 bg-base-100 p-4">
                  <p className="text-sm leading-relaxed">
                    “{p.excerpt.slice(0, 90)}...”
                  </p>
                  <p className="mt-2 text-xs text-base-content/50">
                    en{" "}
                    <a href={`/publication/${p.slug}`} className="font-semibold text-primary hover:underline">
                      {p.title}
                    </a>
                  </p>
                </div>
              );
            })}
          </div>
        )}
        {tab === "history" && (
          <div className="flex flex-col gap-4">
            {userPublications.slice(0, 3).map((p, i) => (
              <PublicationListRow key={p.id} publication={p} index={i} />
            ))}
          </div>
        )}
        {tab === "favorites" && (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {publications.slice(0, 3).map((p) => {
              const pub = getPublicationBySlug(p.slug);
              return pub ? <PublicationCard key={pub.id} publication={pub} /> : null;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function EmptyState({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-box border border-dashed border-base-300 p-14 text-center">
      <CategoryIcon name="book" size={40} className="opacity-30" />
      <p className="text-sm text-base-content/60">{text}</p>
    </div>
  );
}
