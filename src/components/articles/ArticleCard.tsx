import Link from "next/link";
import type { Article } from "@/types";
import { Cover } from "@/components/ui/Cover";
import { Avatar } from "@/components/ui/Avatar";
import { getUserById } from "@/lib/data/users";
import { IconClock, IconEye } from "@/components/ui/icons";

export function ArticleCard({ article }: { article: Article }) {
  const author = getUserById(article.authorId);
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="card overflow-hidden border border-base-300/70 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg group"
    >
      <Cover
        gradient={article.gradient}
        icon={article.icon}
        className="h-40"
      >
        <span className="absolute left-3 top-3 rounded-full bg-black/25 px-3 py-1 text-xs font-medium backdrop-blur-sm">
          {article.category}
        </span>
      </Cover>
      <div className="card-body gap-2 p-5">
        <h3 className="card-title text-base leading-snug transition group-hover:text-primary line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm opacity-70 line-clamp-2">{article.excerpt}</p>
        <div className="mt-3 flex items-center gap-2 text-xs opacity-60">
          <Avatar name={author.name} gradient={author.gradient} size="xs" />
          <span className="font-medium opacity-90">{author.name}</span>
          <span>·</span>
          <span>{article.publishedAt}</span>
        </div>
        <div className="mt-1 flex items-center gap-3 text-xs opacity-60">
          <span className="inline-flex items-center gap-1">
            <IconClock size={14} /> {article.readTime} min
          </span>
          <span className="inline-flex items-center gap-1">
            <IconEye size={14} /> {article.tags.join(" · ")}
          </span>
        </div>
      </div>
    </Link>
  );
}
