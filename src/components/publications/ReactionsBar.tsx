"use client";

import { useState } from "react";
import {
  IconComment,
  IconHeart,
  IconShare,
  IconSparkles,
  IconThumbsUp,
} from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface Reaction {
  key: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  count: number;
}

const initialReactions: Reaction[] = [
  { key: "like", label: "Me gusta", icon: IconThumbsUp, count: 84 },
  { key: "love", label: "Me encanta", icon: IconHeart, count: 37 },
  { key: "useful", label: "Muy útil", icon: IconSparkles, count: 52 },
];

export function ReactionsBar({
  comments,
}: {
  comments: number;
}) {
  const [reactions, setReactions] = useState(initialReactions);
  const [active, setActive] = useState<string | null>(null);

  function toggle(key: string) {
    setReactions((prev) =>
      prev.map((r) => {
        if (r.key !== key) return r;
        const isActive = active === key;
        return { ...r, count: r.count + (isActive ? -1 : 1) };
      }),
    );
    setActive((a) => (a === key ? null : key));
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {reactions.map((r) => {
        const isActive = active === r.key;
        const Icon = r.icon;
        return (
          <button
            key={r.key}
            type="button"
            onClick={() => toggle(r.key)}
            className={cn(
              "btn btn-sm rounded-full border",
              isActive
                ? "border-primary bg-primary text-primary-content"
                : "border-base-300/70 bg-base-100 hover:border-primary/50",
            )}
          >
            <Icon size={16} />
            {r.label}
            <span className={cn("ml-1", isActive ? "opacity-80" : "text-base-content/50")}>
              {r.count}
            </span>
          </button>
        );
      })}
      <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-base-content/50">
        <IconComment size={16} />
        {comments} comentarios
      </span>
      <span className="inline-flex items-center gap-1.5 text-sm text-base-content/50">
        <IconShare size={16} />
        Compartir
      </span>
    </div>
  );
}
