import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/lib/data/articles";
import { getUserById } from "@/lib/data/users";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { Avatar } from "@/components/ui/Avatar";
import { Cover } from "@/components/ui/Cover";
import {
  IconArrowLeft,
  IconClock,
  IconShare,
  IconThumbsUp,
} from "@/components/ui/icons";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  return {
    title: article ? article.title : "Artículo",
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const author = getUserById(article.authorId);
  const related = articles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 3);
  const fallback = articles.filter((a) => a.slug !== slug).slice(0, 3);
  const suggestions = related.length > 0 ? related : fallback;

  return (
    <article className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <Link
        href="/articles"
        className="inline-flex items-center gap-1.5 text-sm font-medium opacity-60 transition hover:opacity-100"
      >
        <IconArrowLeft size={16} /> Volver a artículos
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="min-w-0">
          <Cover
            gradient={article.gradient}
            icon={article.icon}
            className="h-56 rounded-2xl sm:h-72"
          >
            <span className="absolute left-4 top-4 rounded-full bg-black/25 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              {article.category}
            </span>
          </Cover>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {article.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-4 border-b border-base-300/60 pb-5">
            <div className="flex items-center gap-3">
              <Avatar name={author.name} gradient={author.gradient} size="md" />
              <div className="leading-tight">
                <p className="font-semibold">{author.name}</p>
                <p className="text-xs opacity-50">{author.headline}</p>
              </div>
            </div>
            <span className="ml-auto inline-flex items-center gap-1.5 text-sm opacity-60">
              <IconClock size={16} /> {article.readTime} min de lectura ·{" "}
              {article.publishedAt}
            </span>
          </div>

          <div className="mt-6 space-y-5 text-[17px] leading-relaxed opacity-80">
            <p className="text-lg font-medium text-base-content">
              {article.excerpt}
            </p>
            {article.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="badge badge-ghost badge-lg">
                #{tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-base-300/60 pt-6">
            <button className="btn btn-primary gap-2 rounded-full px-8">
              <IconThumbsUp size={18} /> Me gusta
            </button>
            <button className="btn btn-outline gap-2 rounded-full px-8">
              <IconShare size={18} /> Compartir
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="card border border-base-300/70 bg-base-100 shadow-sm">
            <div className="card-body p-5 text-center">
              <Avatar
                name={author.name}
                gradient={author.gradient}
                size="xl"
                className="mx-auto"
              />
              <h3 className="font-bold">{author.name}</h3>
              <p className="text-sm opacity-60">{author.faculty}</p>
              <div className="flex justify-center gap-6 text-sm">
                <div>
                  <p className="font-bold">{author.followers}</p>
                  <p className="opacity-50">Seguidores</p>
                </div>
                <div>
                  <p className="font-bold">{author.following}</p>
                  <p className="opacity-50">Siguiendo</p>
                </div>
              </div>
              <button className="btn btn-primary btn-sm rounded-full">
                Seguir
              </button>
            </div>
          </div>

          {suggestions.length > 0 && (
            <div>
              <h3 className="mb-4 font-bold">También te puede interesar</h3>
              <div className="space-y-4">
                {suggestions.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
}
