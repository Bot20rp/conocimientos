import { cn, gradientOf } from "@/lib/utils";
import {
  IconBriefcase,
  IconCode,
  IconFile,
  IconGraduation,
  IconPen,
  IconSparkles,
  IconStar,
  IconVideo,
} from "./icons";
import type { ReactElement } from "react";
import type { IconProps } from "./icons";

const iconMap: Record<string, (p: IconProps) => ReactElement> = {
  study: IconGraduation,
  ai: IconSparkles,
  research: IconFile,
  building: IconBriefcase,
  quote: IconPen,
  code: IconCode,
  math: IconStar,
  python: IconCode,
  write: IconPen,
  chemistry: IconVideo,
  design: IconPen,
};

interface CoverProps {
  gradient: string;
  icon?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Cover({ gradient, icon, className, children }: CoverProps) {
  const Icon = icon ? iconMap[icon] : undefined;
  return (
    <div
      className={cn(
        "relative overflow-hidden flex items-center justify-center text-white",
        className,
      )}
      style={{ background: gradientOf(gradient) }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,.35) 0, transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,255,255,.25) 0, transparent 40%)",
        }}
      />
      {Icon ? (
        <Icon size={48} className="relative opacity-90 drop-shadow-sm" />
      ) : (
        children
      )}
    </div>
  );
}
