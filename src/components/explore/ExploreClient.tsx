"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Publication } from "@/types";
import { categories, getCategoryById } from "@/lib/data";
import {
  PublicationCard,
  PublicationListRow,
} from "@/components/publications/PublicationCard";
import {
  IconFilter,
  IconGrid,
  IconList,
  IconSort,
  IconX,
} from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type SortKey =
  | "recent"
  | "popular"
  | "mostCommented"
  | "mostSaved";

const sortOptions: { key: SortKey; label: string }[] = [
  { key: "recent", label: "Más recientes" },
  { key: "popular", label: "Más populares" },
  { key: "mostCommented", label: "Más comentados" },
  { key: "mostSaved", label: "Más guardados" },
];

export function ExploreClient({
  publications,
  initialCategory,
  initialTag,
}: {
  publications: Publication[];
  initialCategory?: string;
  initialTag?: string;
}) {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [category, setCategory] = useState<string>(initialCategory ?? "all");
  const [tag, setTag] = useState<string | null>(initialTag ?? null);
  const [sort, setSort] = useState<SortKey>("recent");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = publications;
    if (category !== "all") {
      result = result.filter((p) => p.categoryId === category);
    }
    if (tag) {
      result = result.filter((p) =>
        p.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase())),
      );
    }
    const sorted = [...result];
    switch (sort) {
      case "popular":
        sorted.sort((a, b) => b.views - a.views);
        break;
      case "mostCommented":
        sorted.sort((a, b) => b.comments - a.comments);
        break;
      case "mostSaved":
        sorted.sort((a, b) => b.favorites - a.favorites);
        break;
      default:
        break;
    }
    return sorted;
  }, [publications, category, tag, sort]);

  const activeCategory = getCategoryById(category);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Explorar</h1>
          <p className="text-sm text-base-content/60">
            {filtered.length} publicaciones{" "}
            {activeCategory && `en ${activeCategory.name}`}
            {tag && ` con #${tag}`}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowFilters((v) => !v)}
            className={cn(
              "btn btn-sm rounded-full border lg:hidden",
              showFilters
                ? "border-primary bg-primary text-primary-content"
                : "border-base-300/70",
            )}
          >
            <IconFilter size={15} />
            Filtros
          </button>
          <div className="join rounded-full border border-base-300/70 bg-base-100">
            <button
              type="button"
              onClick={() => setView("grid")}
              className={cn(
                "join-item btn btn-sm rounded-l-full",
                view === "grid" ? "btn-primary" : "btn-ghost",
              )}
              aria-label="Vista de cuadrícula"
            >
              <IconGrid size={16} />
            </button>
            <button
              type="button"
              onClick={() => setView("list")}
              className={cn(
                "join-item btn btn-sm rounded-r-full",
                view === "list" ? "btn-primary" : "btn-ghost",
              )}
              aria-label="Vista de lista"
            >
              <IconList size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <aside className={cn("flex-col gap-4 lg:flex", showFilters ? "flex" : "hidden")}>
          <section className="rounded-box border border-base-300/70 bg-base-100 p-4">
            <h2 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-base-content/70">
              <IconFilter size={14} />
              Categorías
            </h2>
            <div className="flex flex-wrap gap-1.5 lg:flex-col lg:flex-nowrap">
              <button
                type="button"
                onClick={() => setCategory("all")}
                className={cn(
                  "btn btn-sm justify-start rounded-full lg:rounded-xl",
                  category === "all" ? "btn-primary" : "btn-ghost",
                )}
              >
                Todas
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCategory(c.id)}
                  className={cn(
                    "btn btn-sm justify-start rounded-full lg:rounded-xl",
                    category === c.id ? "btn-primary" : "btn-ghost",
                  )}
                >
                  {c.name}
                  <span className="ml-auto opacity-60">{c.count}</span>
                </button>
              ))}
            </div>
          </section>

          {tag && (
            <section className="rounded-box border border-base-300/70 bg-base-100 p-4">
              <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-base-content/70">
                Etiqueta activa
              </h2>
              <div className="flex items-center gap-2">
                <span className="badge badge-lg badge-primary rounded-full">#{tag}</span>
                <button
                  type="button"
                  onClick={() => setTag(null)}
                  className="btn btn-circle btn-ghost btn-xs"
                  aria-label="Quitar etiqueta"
                >
                  <IconX size={14} />
                </button>
              </div>
            </section>
          )}

          <Link
            href="/publish"
            className="btn btn-outline btn-sm hidden rounded-full border-base-300/70 lg:flex"
          >
            ¿Tienes algo que compartir?
          </Link>
        </aside>

        <div>
          <div className="mb-4 flex items-center justify-end">
            <label className="flex items-center gap-2 text-sm text-base-content/70">
              <IconSort size={16} />
              Ordenar por:
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="select select-sm select-bordered rounded-full bg-base-100"
              >
                {sortOptions.map((o) => (
                  <option key={o.key} value={o.key}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-3 rounded-box border border-dashed border-base-300 p-12 text-center">
              <IconSearchBig />
              <p className="font-semibold">Sin resultados</p>
              <p className="text-sm text-base-content/60">
                No encontramos publicaciones con esos filtros. Prueba a
                quitarlos o usa otra combinación.
              </p>
              <button
                type="button"
                onClick={() => {
                  setCategory("all");
                  setTag(null);
                }}
                className="btn btn-primary btn-sm rounded-full"
              >
                Limpiar filtros
              </button>
            </div>
          ) : view === "grid" ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p) => (
                <PublicationCard key={p.id} publication={p} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {filtered.map((p, i) => (
                <PublicationListRow key={p.id} publication={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function IconSearchBig() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-30"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
