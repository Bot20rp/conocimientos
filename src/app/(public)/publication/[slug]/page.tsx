import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCategoryById,
  getPublicationBySlug,
  getUserById,
  publications,
} from "@/lib/data";
import { formatNumber, gradientOf } from "@/lib/utils";
import { Avatar } from "@/components/ui/Avatar";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { PublicationBlocks } from "@/components/publications/PublicationBlocks";
import { CommentsSection } from "@/components/publications/CommentsSection";
import { FloatingActions } from "@/components/publications/FloatingActions";
import { ReadingProgress } from "@/components/publications/ReadingProgress";
import { ReactionsBar } from "@/components/publications/ReactionsBar";
import { PublicationCard } from "@/components/publications/PublicationCard";
import {
  IconChevronRight,
  IconClock,
  IconShieldCheck,
  IconUsers,
} from "@/components/ui/icons";

export function generateStaticParams() {
  return publications.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const publication = getPublicationBySlug(slug);
  return {
    title: publication?.title ?? "Publicación",
    description: publication?.excerpt,
  };
}

export default async function PublicationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const publication = getPublicationBySlug(slug);
  if (!publication) notFound();

  const author = getUserById(publication.authorId);
  const category = getCategoryById(publication.categoryId);
  const related = publications
    .filter(
      (p) => p.categoryId === publication.categoryId && p.id !== publication.id,
    )
    .slice(0, 3);

  return (
    <article className="animate-fade-in">
      <ReadingProgress />

      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br"
          style={{ background: gradientOf(publication.gradient) }}
        />
        <div className="absolute inset-0 bg-grid text-white/15" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pt-16">
          <nav
            aria-label="Migas de pan"
            className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-white/80"
          >
            <Link href="/" className="hover:text-white">
              Inicio
            </Link>
            <IconChevronRight size={14} className="opacity-60" />
            <Link href="/explore" className="hover:text-white">
              Explorar
            </Link>
            <IconChevronRight size={14} className="opacity-60" />
            {category && (
              <>
                <Link
                  href={`/explore?category=${category.id}`}
                  className="hover:text-white"
                >
                  {category.name}
                </Link>
                <IconChevronRight size={14} className="opacity-60" />
              </>
            )}
            <span className="truncate text-white/70">{publication.title}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border-0 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              {category && <CategoryIcon name={category.icon} size={14} />}
              {category?.name}
              <span className="opacity-70">·</span>
              <span className="font-medium opacity-90">
                {publication.difficulty}
              </span>
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {publication.title}
            </h1>
            {publication.subtitle && (
              <p className="mt-3 max-w-2xl text-base text-white/80 sm:text-lg">
                {publication.subtitle}
              </p>
            )}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/85">
              <div className="flex items-center gap-2.5">
                <Avatar name={author.name} gradient={author.gradient} size="sm" />
                <div className="leading-tight">
                  <p className="font-semibold">{author.name}</p>
                  <p className="text-xs text-white/70">{author.headline}</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5">
                <IconClock size={15} />
                {publication.readTime} min de lectura
              </span>
              <span className="inline-flex items-center gap-1.5">
                <IconUsers size={15} />
                {formatNumber(publication.views)} lecturas
              </span>
              <span>{publication.publishedAt}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="min-w-0">
            <p className="mb-8 border-l-4 border-primary bg-base-200/40 p-4 text-lg font-medium italic leading-relaxed text-base-content/80">
              {publication.excerpt}
            </p>
            <PublicationBlocks blocks={publication.blocks} />

            <div className="mt-10 border-t border-base-300/70 pt-8">
              <ReactionsBar comments={publication.comments} />
            </div>

            <CommentsSection publicationId={publication.id} />

            <FloatingActions
              favorites={publication.favorites}
              slug={publication.slug}
            />
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 flex flex-col gap-6">
              <section className="rounded-box border border-base-300/70 bg-base-100 p-5">
                <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-base-content/70">
                  Sobre el autor
                </h2>
                <div className="flex flex-col items-center gap-3 text-center">
                  <Avatar name={author.name} gradient={author.gradient} size="xl" />
                  <div>
                    <p className="font-bold">{author.name}</p>
                    <p className="text-xs text-base-content/60">{author.headline}</p>
                  </div>
                  <button type="button" className="btn btn-outline btn-sm rounded-full w-full">
                    Seguir
                  </button>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 border-t border-base-300/70 pt-4 text-center">
                  <div>
                    <p className="text-lg font-extrabold text-primary">
                      {formatNumber(author.followers)}
                    </p>
                    <p className="text-xs text-base-content/60">seguidores</p>
                  </div>
                  <div>
                    <p className="text-lg font-extrabold text-primary">12</p>
                    <p className="text-xs text-base-content/60">publicaciones</p>
                  </div>
                </div>
              </section>

              <section className="flex items-start gap-3 rounded-box border border-base-300/70 bg-base-100 p-4 text-sm text-base-content/70">
                <IconShieldCheck size={20} className="mt-0.5 shrink-0 text-success" />
                <p>
                  ¿Detectaste contenido incorrecto o plagio? Usa el botón de
                  reportar para avisarnos.
                </p>
              </section>
            </div>
          </aside>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6">
          <h2 className="mb-5 text-xl font-bold tracking-tight">
            Publicaciones relacionadas
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PublicationCard key={p.id} publication={p} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
