import Link from "next/link";
import type { Publication } from "@/types";
import { getCategoryById, getUserById } from "@/lib/data";
import { cn, formatNumber, gradientOf } from "@/lib/utils";
import { Avatar } from "@/components/ui/Avatar";
import {
  IconBookmark,
  IconClock,
  IconComment,
  IconEye,
} from "@/components/ui/icons";

export function PublicationMeta({
  publication,
  className,
}: {
  publication: Publication;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-x-4 gap-y-1", className)}>
      <span className="inline-flex items-center gap-1 text-xs text-base-content/60">
        <IconClock size={14} />
        {publication.readTime} min
      </span>
      <span className="inline-flex items-center gap-1 text-xs text-base-content/60">
        <IconEye size={14} />
        {formatNumber(publication.views)}
      </span>
      <span className="inline-flex items-center gap-1 text-xs text-base-content/60">
        <IconComment size={14} />
        {publication.comments}
      </span>
      <span className="inline-flex items-center gap-1 text-xs text-base-content/60">
        <IconBookmark size={14} />
        {formatNumber(publication.favorites)}
      </span>
    </div>
  );
}

export function PublicationTags({
  tags,
  className,
  limit,
}: {
  tags: string[];
  className?: string;
  limit?: number;
}) {
  const shown = limit ? tags.slice(0, limit) : tags;
  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {shown.map((tag) => (
        <Link
          key={tag}
          href={`/explore?tag=${encodeURIComponent(tag)}`}
          className="badge badge-ghost badge-sm rounded-full text-[11px] font-medium hover:badge-primary"
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
}

export function PublicationAuthor({
  authorId,
  date,
}: {
  authorId: string;
  date: string;
}) {
  const author = getUserById(authorId);
  return (
    <div className="flex items-center gap-2">
      <Avatar name={author.name} gradient={author.gradient} size="sm" />
      <div className="leading-tight">
        <p className="text-sm font-semibold">{author.name}</p>
        <p className="text-xs text-base-content/60">{date}</p>
      </div>
    </div>
  );
}

export function FeaturedPublicationCard({
  publication,
  className,
}: {
  publication: Publication;
  className?: string;
}) {
  const author = getUserById(publication.authorId);
  const category = getCategoryById(publication.categoryId);

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-box card-glow border border-base-300/70 bg-base-100",
        className,
      )}
    >
      <Link
        href={`/publication/${publication.slug}`}
        className="absolute inset-0 z-10"
        aria-label={publication.title}
      />
      <div
        className="relative flex aspect-[2/1] items-end overflow-hidden bg-gradient-to-br sm:aspect-[16/6]"
        style={{ background: gradientOf(category?.gradient) }}
      >
        <div
          className="absolute inset-0 bg-grid text-white/20"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="relative z-10 p-5 sm:p-8">
          <span className="badge badge-lg border-0 bg-white/15 text-white backdrop-blur-sm">
            {category?.name}
          </span>
          <h3 className="mt-3 max-w-3xl text-xl font-bold leading-snug text-white sm:text-3xl">
            {publication.title}
          </h3>
          <p className="mt-2 hidden max-w-2xl text-sm text-white/85 sm:block">
            {publication.excerpt}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 p-4 sm:px-8 sm:py-5">
        <div className="flex items-center gap-2">
          <Avatar name={author.name} gradient={author.gradient} size="sm" />
          <div className="leading-tight">
            <p className="text-sm font-semibold">{author.name}</p>
            <p className="text-xs text-base-content/60">
              {publication.publishedAt}
            </p>
          </div>
        </div>
        <PublicationMeta publication={publication} className="gap-3" />
        <PublicationTags
          tags={publication.tags}
          className="ml-auto hidden md:flex"
          limit={3}
        />
      </div>
    </article>
  );
}

export function PublicationCard({
  publication,
  className,
}: {
  publication: Publication;
  className?: string;
}) {
  const author = getUserById(publication.authorId);
  const category = getCategoryById(publication.categoryId);

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-box border border-base-300/70 bg-base-100 card-glow",
        className,
      )}
    >
      <Link
        href={`/publication/${publication.slug}`}
        className="absolute inset-0 z-10"
        aria-label={publication.title}
      />
      <div
        className="relative flex aspect-[16/8] items-center justify-center overflow-hidden bg-gradient-to-br"
        style={{ background: gradientOf(category?.gradient) }}
      >
        <div className="absolute inset-0 bg-grid text-white/20" aria-hidden />
        <span className="badge relative border-0 bg-white/15 text-white backdrop-blur-sm">
          {category?.name}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="line-clamp-2 text-base font-bold leading-snug">
          {publication.title}
        </h3>
        <p className="line-clamp-2 text-sm text-base-content/70">
          {publication.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <div className="flex items-center gap-2">
            <Avatar name={author.name} gradient={author.gradient} size="xs" />
            <span className="text-xs font-medium">{author.name}</span>
          </div>
          <PublicationMeta publication={publication} className="gap-2.5" />
        </div>
      </div>
    </article>
  );
}

export function PublicationListRow({
  publication,
  index,
}: {
  publication: Publication;
  index: number;
}) {
  const author = getUserById(publication.authorId);
  const category = getCategoryById(publication.categoryId);

  return (
    <article className="group relative flex gap-4 rounded-box border border-base-300/70 bg-base-100 p-4 transition-colors hover:border-primary/40">
      <Link
        href={`/publication/${publication.slug}`}
        className="absolute inset-0 z-10"
        aria-label={publication.title}
      />
      <div className="hidden w-20 shrink-0 flex-col items-center justify-center rounded-lg text-lg font-black sm:flex">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="badge badge-sm rounded-full border-0 font-medium text-white"
            style={{ background: gradientOf(category?.gradient) }}
          >
            {category?.name}
          </span>
          <span className="text-xs text-base-content/50">
            {publication.publishedAt}
          </span>
        </div>
        <h3 className="line-clamp-2 text-base font-bold leading-snug group-hover:text-primary">
          {publication.title}
        </h3>
        <p className="line-clamp-2 text-sm text-base-content/70">
          {publication.excerpt}
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
          <div className="flex items-center gap-1.5">
            <Avatar name={author.name} gradient={author.gradient} size="xs" />
            <span className="text-xs font-medium">{author.name}</span>
          </div>
          <PublicationMeta publication={publication} className="gap-3" />
          <PublicationTags tags={publication.tags} className="ml-auto hidden lg:flex" limit={2} />
        </div>
      </div>
    </article>
  );
}
