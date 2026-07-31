import Link from "next/link";
import type { Category } from "@/types";
import { formatNumber, gradientOf } from "@/lib/utils";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { IconArrowRight } from "@/components/ui/icons";

export function CategoryCard({
  category,
  className,
}: {
  category: Category;
  className?: string;
}) {
  return (
    <Link
      href={`/explore?category=${category.id}`}
      className={`group relative flex flex-col gap-3 rounded-box border border-base-300/70 bg-base-100 p-5 card-glow transition-all hover:-translate-y-0.5 hover:border-primary/50 ${className ?? ""}`}
    >
      <div
        className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm"
        style={{ background: gradientOf(category.gradient) }}
      >
        <CategoryIcon name={category.icon} size={22} />
      </div>
      <div>
        <h3 className="font-bold">{category.name}</h3>
        <p className="text-xs text-base-content/60">{category.description}</p>
      </div>
      <div className="mt-auto flex items-center justify-between">
        <span className="text-xs font-medium text-base-content/70">
          {formatNumber(category.count)} publicaciones
        </span>
        <span className="text-base-content/40 transition-transform group-hover:translate-x-0.5 group-hover:text-primary">
          <IconArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
