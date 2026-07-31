import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
}

const textSize: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-3xl",
};

const iconSize: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "size-7",
  md: "size-9",
  lg: "size-12",
};

export function Logo({ size = "md", className, href = "/" }: LogoProps) {
  const content = (
    <>
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent text-primary-content shadow-sm",
          iconSize[size],
        )}
      >
        <svg
          width={size === "lg" ? 26 : size === "md" ? 20 : 16}
          height={size === "lg" ? 26 : size === "md" ? 20 : 16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 10 12 5 2 10l10 5 10-5Z" />
          <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
          <path d="M22 10v6" />
        </svg>
      </span>
      <span className={cn("font-bold tracking-tight", textSize[size])}>
        Conocimientos
      </span>
    </>
  );

  return (
    <Link href={href} className={cn("flex items-center gap-2", className)}>
      {content}
    </Link>
  );
}
