import type { Post } from "@/types";
import { getUserById } from "@/lib/data/users";
import { Avatar } from "@/components/ui/Avatar";
import { cn, gradientOf, formatNumber } from "@/lib/utils";
import {
  IconComment,
  IconShare,
  IconThumbsUp,
  IconBookmark,
  IconFile,
  IconCalendar,
} from "@/components/ui/icons";

const typeMeta: Record<Post["type"], { label: string; badge: string }> = {
  publication: { label: "Publicación", badge: "badge-ghost" },
  material: { label: "Material", badge: "badge-primary" },
  event: { label: "Evento", badge: "badge-warning" },
  question: { label: "Pregunta", badge: "badge-info" },
};

export function PostCard({ post }: { post: Post }) {
  const author = getUserById(post.authorId);
  const meta = typeMeta[post.type];
  return (
    <article className="card border border-base-300/70 bg-base-100 shadow-sm">
      <div className="card-body gap-3 p-5">
        <div className="flex items-start gap-3">
          <Avatar name={author.name} gradient={author.gradient} size="md" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h4 className="font-semibold leading-tight">{author.name}</h4>
              <span
                className={cn(
                  "badge badge-ghost badge-sm border-0 text-xs font-medium",
                  meta.badge,
                )}
              >
                {meta.label}
              </span>
            </div>
            <p className="truncate text-xs opacity-50">
              {author.headline} · {post.createdAt}
            </p>
          </div>
          <button
            className="btn btn-circle btn-ghost btn-xs opacity-50"
            aria-label="Más opciones"
          >
            <IconBookmark size={16} />
          </button>
        </div>

        <p className="text-[15px] leading-relaxed">{post.content}</p>

        {post.cover && (
          <div
            className="flex h-40 items-center justify-center rounded-box text-white"
            style={{ background: gradientOf(post.cover) }}
          >
            {post.type === "event" ? (
              <IconCalendar size={44} className="opacity-80" />
            ) : (
              <IconFile size={44} className="opacity-80" />
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span key={tag} className="badge badge-ghost badge-sm">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-base-300/60 pt-3 text-xs opacity-60">
          <span className="inline-flex items-center gap-1.5">
            <span className="flex items-center gap-0.5">
              <IconThumbsUp size={14} className="text-primary" />
            </span>
            {formatNumber(post.likes)}
          </span>
          <span>{formatNumber(post.comments)} comentarios · {formatNumber(post.shares)} veces compartido</span>
        </div>

        <div className="flex items-center gap-1 border-t border-base-300/60 pt-1">
          <button className="btn btn-ghost btn-sm flex-1 gap-2 rounded-full hover:bg-base-200">
            <IconThumbsUp size={18} /> Me gusta
          </button>
          <button className="btn btn-ghost btn-sm flex-1 gap-2 rounded-full hover:bg-base-200">
            <IconComment size={18} /> Comentar
          </button>
          <button className="btn btn-ghost btn-sm flex-1 gap-2 rounded-full hover:bg-base-200">
            <IconShare size={18} /> Compartir
          </button>
        </div>
      </div>
    </article>
  );
}
