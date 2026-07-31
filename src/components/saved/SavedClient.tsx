"use client";

import { useMemo, useState } from "react";
import { getPublicationBySlug, savedFolders, savedItems } from "@/lib/data";
import {
  PublicationCard,
  PublicationListRow,
} from "@/components/publications/PublicationCard";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import {
  IconBookmark,
  IconFolder,
  IconGrid,
  IconList,
} from "@/components/ui/icons";
import { cn, gradientOf } from "@/lib/utils";

export function SavedClient() {
  const [folder, setFolder] = useState("all");
  const [view, setView] = useState<"grid" | "list">("grid");

  const items = useMemo(() => {
    const filtered =
      folder === "all"
        ? savedItems
        : savedItems.filter((s) => s.folderId === folder);
    return filtered
      .map((s) => ({ saved: s, publication: getPublicationBySlug(s.publicationSlug) }))
      .filter((x) => x.publication);
  }, [folder]);

  const activeFolder = savedFolders.find((f) => f.id === folder);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight sm:text-3xl">
            <IconBookmark size={26} className="text-primary" />
            Guardados
          </h1>
          <p className="mt-1 text-sm text-base-content/60">
            Tus publicaciones favoritas, organizadas en carpetas.
          </p>
        </div>
        <div className="join self-start rounded-full border border-base-300/70 bg-base-100 sm:self-auto">
          <button
            type="button"
            onClick={() => setView("grid")}
            className={cn("join-item btn btn-sm rounded-l-full", view === "grid" ? "btn-primary" : "btn-ghost")}
            aria-label="Vista de cuadrícula"
          >
            <IconGrid size={16} />
          </button>
          <button
            type="button"
            onClick={() => setView("list")}
            className={cn("join-item btn btn-sm rounded-r-full", view === "list" ? "btn-primary" : "btn-ghost")}
            aria-label="Vista de lista"
          >
            <IconList size={16} />
          </button>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        <button
          type="button"
          onClick={() => setFolder("all")}
          className={cn(
            "flex flex-col items-start gap-2 rounded-box border p-4 text-left transition-all",
            folder === "all"
              ? "border-primary bg-primary/5"
              : "border-base-300/70 bg-base-100 hover:border-primary/40",
          )}
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-base-200 text-base-content/70">
            <IconFolder size={18} />
          </span>
          <div>
            <p className="text-sm font-bold">Todo</p>
            <p className="text-xs text-base-content/60">{savedItems.length} guardados</p>
          </div>
        </button>
        {savedFolders.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFolder(f.id)}
            className={cn(
              "flex flex-col items-start gap-2 rounded-box border p-4 text-left transition-all",
              folder === f.id
                ? "border-primary bg-primary/5"
                : "border-base-300/70 bg-base-100 hover:border-primary/40",
            )}
          >
            <span
              className="flex size-9 items-center justify-center rounded-lg text-white"
              style={{ background: gradientOf(f.color) }}
            >
              <CategoryIcon name={f.icon} size={18} />
            </span>
            <div>
              <p className="text-sm font-bold">{f.name}</p>
              <p className="text-xs text-base-content/60">{f.description}</p>
            </div>
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-box border border-dashed border-base-300 p-14 text-center">
          <IconBookmark className="opacity-30" size={44} />
          <p className="font-semibold">Nada guardado aquí todavía</p>
          <p className="max-w-sm text-sm text-base-content/60">
            {activeFolder
              ? `La carpeta "${activeFolder.name}" está vacía.`
              : "Aún no tienes guardados. Usa el botón de guardar en cualquier publicación."}
          </p>
        </div>
      ) : view === "grid" ? (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map(({ saved, publication }) => (
            <div key={saved.id} className="relative">
              <PublicationCard publication={publication!} />
              <span className="absolute right-3 top-3 z-20 badge badge-ghost bg-base-100/80 text-xs backdrop-blur-sm">
                {activeFolder && folder !== "all" ? activeFolder.name : "Guardado"}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {items.map(({ saved, publication }, i) => (
            <div key={saved.id} className="relative">
              <PublicationListRow publication={publication!} index={i} />
              <span className="absolute right-3 top-3 z-20 badge badge-ghost bg-base-100/80 text-xs backdrop-blur-sm">
                {saved.savedAt}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
