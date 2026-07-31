import Link from "next/link";
import { notifications, getUserById } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/Avatar";
import {
  IconComment,
  IconHeart,
  IconInbox,
  IconMessage,
  IconReply,
  IconSparkles,
  IconUser,
} from "@/components/ui/icons";

const typeMeta: Record<
  string,
  { icon: React.ComponentType<{ size?: number }>; className: string }
> = {
  comment: { icon: IconComment, className: "bg-sky-500/15 text-sky-600 dark:text-sky-400" },
  reply: { icon: IconReply, className: "bg-violet-500/15 text-violet-600 dark:text-violet-400" },
  follow: { icon: IconUser, className: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" },
  publication: { icon: IconHeart, className: "bg-amber-500/15 text-amber-600 dark:text-amber-400" },
  recommendation: { icon: IconSparkles, className: "bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-400" },
  message: { icon: IconMessage, className: "bg-primary/15 text-primary" },
  system: { icon: IconHeart, className: "bg-rose-500/15 text-rose-600 dark:text-rose-400" },
};

function NotificationIcon({ type }: { type: string }) {
  const meta = typeMeta[type] ?? typeMeta.system;
  const Icon = meta.icon;
  return (
    <span
      className={cn(
        "flex size-9 shrink-0 items-center justify-center rounded-full",
        meta.className,
      )}
    >
      <Icon size={16} />
    </span>
  );
}

export function NotificationsPanel({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  const list = compact ? notifications.slice(0, 5) : notifications;

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {list.map((n) => {
        const user = n.userId ? getUserById(n.userId) : undefined;
        const href = n.publicationSlug
          ? `/publication/${n.publicationSlug}`
          : n.userId
            ? `/u/${n.userId}`
            : "/notifications";
        return (
          <Link
            key={n.id}
            href={href}
            className={cn(
              "flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-base-200/70",
              !n.read && "bg-primary/5",
            )}
          >
            {user && n.type === "follow" ? (
              <Avatar name={user.name} gradient={user.gradient} size="sm" />
            ) : (
              <NotificationIcon type={n.type} />
            )}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="line-clamp-1 text-sm font-semibold">{n.title}</p>
                {!n.read && (
                  <span className="size-2 shrink-0 rounded-full bg-primary" />
                )}
              </div>
              <p className="line-clamp-2 text-xs text-base-content/70">
                {n.description}
              </p>
              <p className="mt-0.5 text-[11px] text-base-content/50">{n.time}</p>
            </div>
          </Link>
        );
      })}
      <Link
        href="/notifications"
        className="mt-2 flex items-center justify-center gap-1 rounded-xl border-t border-base-300 pt-3 text-sm font-semibold text-primary hover:underline"
      >
        <IconInbox size={15} />
        Ver todas las notificaciones
      </Link>
    </div>
  );
}
