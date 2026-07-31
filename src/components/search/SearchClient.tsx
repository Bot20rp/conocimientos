"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { categories, popularTags, publications, users } from "@/lib/data";
import type { Publication } from "@/types";
import { Avatar } from "@/components/ui/Avatar";
import {
  PublicationCard,
} from "@/components/publications/PublicationCard";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import {
  IconFilter,
  IconSearch,
  IconX,
} from "@/components/ui/icons";
import { cn, formatNumber } from "@/lib/utils";

type Tab = "all" | "publications" | "categories" | "tags" | "students";

function rankPublication(p: Publication, q: string): number {
  const query = q.toLowerCase();
  let score = 0;
  if (p.title.toLowerCase().includes(query)) score += 100;
  if (p.subtitle?.toLowerCase().includes(query)) score += 40;
  if (p.excerpt.toLowerCase().includes(query)) score += 30;
  if (p.tags.some((t) => t.toLowerCase().includes(query))) score += 20;
  return score;
}

export function SearchClient({ initialQuery }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery ?? "");
  const [tab, setTab] = useState<Tab>("all");
  const [category, setCategory] = useState("all");
  const q = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!q) {
      return { publications: [] as Publication[] };
    }

    const matchedPublications = publications
      .filter((p) => rankPublication(p, q) > 0)
      .sort((a, b) => rankPublication(b, q) - rankPublication(a, q));

    return { publications: matchedPublications };
  }, [q]);

  const matchedCategories = useMemo(() => {
    if (!q) return [];
    return categories.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q),
    );
  }, [q]);

  const matchedTags = useMemo(() => {
    if (!q) return [];
    return popularTags.filter((t) => t.name.toLowerCase().includes(q));
  }, [q]);

  const matchedUsers = useMemo(() => {
    if (!q) return [];
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.username.toLowerCase().includes(q) ||
        u.faculty.toLowerCase().includes(q),
    );
  }, [q]);

  const filteredPublications = useMemo(() => {
    if (!q) return [];
    let list = results.publications;
    if (category !== "all") {
      list = list.filter((p) => p.categoryId === category);
    }
    return list;
  }, [q, category, results.publications]);

  const counts = {
    all:
      filteredPublications.length +
      matchedCategories.length +
      matchedTags.length +
      matchedUsers.length,
    publications: filteredPublications.length,
    categories: matchedCategories.length,
    tags: matchedTags.length,
    students: matchedUsers.length,
  };

  const tabs: { key: Tab; label: string }[] = [
    { key: "all", label: "Todo" },
    { key: "publications", label: "Publicaciones" },
    { key: "categories", label: "Categorías" },
    { key: "tags", label: "Etiquetas" },
    { key: "students", label: "Estudiantes" },
  ];

  return (
    <div>
      <div className="mx-auto max-w-2xl">
        <form
          action="/search"
          className="flex items-center gap-2 rounded-full border border-base-300/70 bg-base-100 p-1.5 shadow-lg card-glow"
        >
          <IconSearch size={20} className="ml-3 shrink-0 opacity-40" />
          <input
            type="search"
            name="q"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Busca publicaciones, etiquetas, personas..."
            className="w-full bg-transparent text-sm outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="btn btn-circle btn-ghost btn-xs"
              aria-label="Limpiar búsqueda"
            >
              <IconX size={15} />
            </button>
          )}
          <button type="submit" className="btn btn-primary btn-sm rounded-full px-5">
            Buscar
          </button>
        </form>
      </div>

      {!q ? (
        <div className="mx-auto mt-16 flex max-w-lg flex-col items-center gap-3 text-center">
          <IconSearchBig />
          <p className="text-lg font-bold">Encuentra lo que buscas</p>
          <p className="text-sm text-base-content/60">
            Escribe una palabra clave para buscar en publicaciones, categorías,
            etiquetas y perfiles de estudiantes.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {popularTags.slice(0, 8).map((t) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setQuery(t.name)}
                className="badge badge-ghost rounded-full text-xs font-medium hover:badge-primary"
              >
                #{t.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {tabs.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                className={cn(
                  "btn btn-sm rounded-full border",
                  tab === t.key
                    ? "btn-primary"
                    : "border-base-300/70 bg-base-100",
                )}
              >
                {t.label}
                <span className={cn(tab === t.key ? "opacity-80" : "opacity-50")}>
                  {counts[t.key]}
                </span>
              </button>
            ))}
            <div className="ml-auto hidden items-center gap-2 sm:flex">
              <IconFilter size={16} className="text-base-content/50" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="select select-sm select-bordered rounded-full bg-base-100"
              >
                <option value="all">Todas las categorías</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-10">
            {(tab === "all" || tab === "publications") &&
              filteredPublications.length > 0 && (
                <section>
                  <h2 className="mb-4 text-lg font-bold">Publicaciones</h2>
                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredPublications.slice(0, 6).map((p) => (
                      <PublicationCard key={p.id} publication={p} />
                    ))}
                  </div>
                </section>
              )}

            {(tab === "all" || tab === "categories") &&
              matchedCategories.length > 0 && (
                <section>
                  <h2 className="mb-4 text-lg font-bold">Categorías</h2>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {matchedCategories.map((c) => (
                      <Link
                        key={c.id}
                        href={`/explore?category=${c.id}`}
                        className="flex items-center gap-3 rounded-box border border-base-300/70 bg-base-100 p-4 transition-colors hover:border-primary/50"
                      >
                        <span
                          className="flex size-10 items-center justify-center rounded-xl text-white"
                          style={{ background: `linear-gradient(135deg, ${c.gradient})` }}
                        >
                          <CategoryIcon name={c.icon} size={20} />
                        </span>
                        <div>
                          <p className="font-semibold">{c.name}</p>
                          <p className="text-xs text-base-content/60">
                            {formatNumber(c.count)} publicaciones
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

            {(tab === "all" || tab === "tags") && matchedTags.length > 0 && (
              <section>
                <h2 className="mb-4 text-lg font-bold">Etiquetas</h2>
                <div className="flex flex-wrap gap-2">
                  {matchedTags.map((t) => (
                    <Link
                      key={t.name}
                      href={`/explore?tag=${encodeURIComponent(t.name)}`}
                      className="badge badge-ghost badge-lg rounded-full text-sm font-medium hover:badge-primary"
                    >
                      #{t.name}
                      <span className="ml-1 opacity-60">{formatNumber(t.count)}</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {(tab === "all" || tab === "students") &&
              matchedUsers.length > 0 && (
                <section>
                  <h2 className="mb-4 text-lg font-bold">Estudiantes</h2>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {matchedUsers.map((u) => (
                      <Link
                        key={u.id}
                        href={`/u/${u.id}`}
                        className="flex items-center gap-3 rounded-box border border-base-300/70 bg-base-100 p-4 transition-colors hover:border-primary/50"
                      >
                        <Avatar name={u.name} gradient={u.gradient} size="md" />
                        <div className="min-w-0">
                          <p className="truncate font-semibold">{u.name}</p>
                          <p className="truncate text-xs text-base-content/60">
                            {u.faculty}
                          </p>
                          <p className="text-xs text-base-content/50">
                            {formatNumber(u.followers)} seguidores
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

            {counts[tab === "all" ? "all" : tab] === 0 && (
              <div className="flex flex-col items-center gap-3 rounded-box border border-dashed border-base-300 p-12 text-center">
                <IconSearchBig />
                <p className="font-semibold">Sin resultados para “{query}”</p>
                <p className="text-sm text-base-content/60">
                  Revisa la ortografía o prueba con términos más generales.
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function IconSearchBig() {
  return (
    <svg
      width="44"
      height="44"
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
