import Link from "next/link";
import { articles } from "@/lib/data/articles";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { IconBook, IconSearch } from "@/components/ui/icons";

export const metadata = {
  title: "Artículos",
  description:
    "Guías, apuntes y experiencias escritas por la comunidad estudiantil.",
};

const categories = [
  "Todos",
  "Métodos de estudio",
  "Tecnología",
  "Investigación",
  "Arquitectura",
  "Programación",
];

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; cat?: string }>;
}) {
  const { q, cat } = await searchParams;
  const query = (q ?? "").trim().toLowerCase();
  const category = cat === undefined || cat === "Todos" ? null : cat;

  const filtered = articles.filter((article) => {
    const matchesQuery =
      !query ||
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.tags.some((t) => t.toLowerCase().includes(query));
    const matchesCategory = !category || article.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <IconBook size={16} /> Biblioteca
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Artículos
        </h1>
        <p className="mt-3 text-lg opacity-60">
          Guías, apuntes y experiencias escritas por estudiantes y docentes de
          tu comunidad.
        </p>
      </div>

      <form action="/articles" className="mt-8 flex max-w-xl items-center gap-2 rounded-full border border-base-300 bg-base-100 p-1.5 shadow-sm">
        <div className="flex items-center gap-2 pl-4">
          <IconSearch size={18} className="opacity-40" />
          <input
            type="search"
            name="q"
            defaultValue={q}
            placeholder="Buscar en artículos..."
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-sm rounded-full px-6">
          Buscar
        </button>
      </form>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((c) => {
          const active = c === "Todos" ? !category : category === c;
          const href =
            c === "Todos"
              ? "/articles"
              : `/articles?cat=${encodeURIComponent(c)}`;
          return (
            <Link
              key={c}
              href={href}
              className={`btn btn-sm rounded-full px-5 ${
                active
                  ? "btn-primary"
                  : "btn-outline"
              }`}
            >
              {c}
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-base-200">
            <IconSearch size={28} className="opacity-40" />
          </div>
          <h2 className="mt-4 text-xl font-semibold">Sin resultados</h2>
          <p className="mt-1 opacity-60">
            No encontramos artículos para tu búsqueda.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
