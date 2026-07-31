import Link from "next/link";
import type { Metadata } from "next";
import { getPublicationBySlug, readingHistory } from "@/lib/data";
import { IconClock, IconHistory, IconTrash } from "@/components/ui/icons";
import { gradientOf } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Historial",
};

export default function HistoryPage() {
  const entries = readingHistory
    .map((h) => ({ entry: h, publication: getPublicationBySlug(h.publicationSlug) }))
    .filter((x) => x.publication);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight sm:text-3xl">
            <IconHistory size={26} className="text-primary" />
            Historial de lectura
          </h1>
          <p className="mt-1 text-sm text-base-content/60">
            Sigue leyendo donde te quedaste.
          </p>
        </div>
        <button type="button" className="btn btn-ghost btn-sm rounded-full text-base-content/60">
          <IconTrash size={16} />
          Limpiar historial
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {entries.map(({ entry, publication }) => {
          return (
            <article
              key={entry.id}
              className="group relative flex gap-4 rounded-box border border-base-300/70 bg-base-100 p-4 transition-colors hover:border-primary/40"
            >
              <Link
                href={`/publication/${publication!.slug}`}
                className="absolute inset-0 z-10"
                aria-label={publication!.title}
              />
              <div
                className="hidden size-24 shrink-0 items-center justify-center overflow-hidden rounded-xl text-white sm:flex"
                style={{ background: gradientOf(publication!.gradient) }}
              >
                <IconClock size={28} className="opacity-70" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-xs text-base-content/50">
                  <span>{entry.lastReadAt}</span>
                  {entry.progress === 100 ? (
                    <span className="badge badge-success badge-xs">Completado</span>
                  ) : (
                    <span className="badge badge-ghost badge-xs">
                      {entry.progress}% leído
                    </span>
                  )}
                </div>
                <h2 className="mt-1 line-clamp-1 text-base font-bold group-hover:text-primary">
                  {publication!.title}
                </h2>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <div className="w-full max-w-xs">
                    <progress
                      className="progress progress-primary h-1.5 w-full"
                      value={entry.progress}
                      max="100"
                    />
                  </div>
                  <span className="text-xs font-semibold text-primary">
                    {entry.progress === 100 ? "Releer" : "Continuar"}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {entries.length === 0 && (
        <div className="flex flex-col items-center gap-3 rounded-box border border-dashed border-base-300 p-14 text-center">
          <IconHistory size={44} className="opacity-30" />
          <p className="font-semibold">Aún no hay historial</p>
          <p className="text-sm text-base-content/60">
            Las publicaciones que leas aparecerán aquí para que sigas donde lo
            dejaste.
          </p>
        </div>
      )}
    </div>
  );
}
