import Link from "next/link";
import { getPublicationBySlug, popularTags, users } from "@/lib/data";
import { Avatar } from "@/components/ui/Avatar";
import { formatNumber } from "@/lib/utils";
import {
  IconChevronRight,
  IconSparkles,
  IconTrending,
  IconUsers,
} from "@/components/ui/icons";

export function TrendsSidebar({ className }: { className?: string }) {
  const topAuthors = [...users].sort((a, b) => b.followers - a.followers).slice(0, 5);

  return (
    <aside className={`flex flex-col gap-6 ${className ?? ""}`}>
      <section className="rounded-box border border-base-300/70 bg-base-100 p-5">
        <h2 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-base-content/70">
          <IconTrending size={16} className="text-primary" />
          Etiquetas populares
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {popularTags.map((tag) => (
            <Link
              key={tag.name}
              href={`/explore?tag=${encodeURIComponent(tag.name)}`}
              className="badge badge-ghost rounded-full text-xs font-medium hover:badge-primary"
            >
              #{tag.name}
              <span className="ml-1 opacity-60">{formatNumber(tag.count)}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-box border border-base-300/70 bg-base-100 p-5">
        <h2 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-base-content/70">
          <IconSparkles size={16} className="text-primary" />
          Más leído de la semana
        </h2>
        <ul className="flex flex-col gap-3">
          {[0, 1, 2].map((i) => {
            const p = getPublicationBySlug(
              [
                "redes-neuronales-explicadas-con-dibujos",
                "guia-completa-python-para-estudiantes",
                "analisis-datos-con-pandas",
              ][i],
            );
            if (!p) return null;
            const author = users.find((u) => u.id === p.authorId);
            return (
              <li key={p.slug}>
                <Link
                  href={`/publication/${p.slug}`}
                  className="group flex gap-3"
                >
                  <span className="text-lg font-black text-primary/50">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="line-clamp-2 text-sm font-semibold leading-snug group-hover:text-primary">
                      {p.title}
                    </p>
                    <p className="text-xs text-base-content/60">
                      {formatNumber(p.views)} vistas · {author?.name}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="rounded-box border border-base-300/70 bg-base-100 p-5">
        <h2 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-base-content/70">
          <IconUsers size={16} className="text-primary" />
          Autores destacados
        </h2>
        <ul className="flex flex-col gap-3">
          {topAuthors.map((author) => (
            <li key={author.id}>
              <Link
                href={`/u/${author.id}`}
                className="group flex items-center gap-3"
              >
                <Avatar name={author.name} gradient={author.gradient} size="sm" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold group-hover:text-primary">
                    {author.name}
                  </p>
                  <p className="truncate text-xs text-base-content/60">
                    {author.headline}
                  </p>
                </div>
                <span className="flex items-center gap-1 text-xs text-base-content/60">
                  {formatNumber(author.followers)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Link
        href="/explore"
        className="btn btn-ghost btn-sm justify-between rounded-full text-base-content/70 hover:text-primary"
      >
        Ver todo el contenido
        <IconChevronRight size={16} />
      </Link>
    </aside>
  );
}
