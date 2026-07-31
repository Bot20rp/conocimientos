import { cn } from "@/lib/utils";

interface AvatarProps {
  name: string;
  gradient: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizes: Record<NonNullable<AvatarProps["size"]>, string> = {
  xs: "size-6 text-[10px]",
  sm: "size-8 text-xs",
  md: "size-10 text-sm",
  lg: "size-14 text-lg",
  xl: "size-20 text-2xl",
};

export function initialsOf(name: string) {
  return name
    .split(" ")
    .filter((w) => /^[A-Za-zÁÉÍÓÚáéíóúÑñ]/.test(w))
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export function Avatar({
  name,
  gradient,
  size = "md",
  className,
}: AvatarProps) {
  return (
    <div
      className={cn(
        "avatar placeholder shrink-0",
        className,
      )}
    >
      <div
        className={cn(
          "rounded-full bg-gradient-to-br text-white font-semibold flex items-center justify-center",
          gradient,
          sizes[size],
        )}
      >
        <span>{initialsOf(name)}</span>
      </div>
    </div>
  );
}
