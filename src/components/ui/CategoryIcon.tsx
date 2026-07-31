import {
  IconBraces,
  IconBrain,
  IconChain,
  IconChartLine,
  IconCloud,
  IconCpu,
  IconDatabase,
  IconGitBranch,
  IconGlobe,
  IconNetwork,
  IconShieldCheck,
  IconSmartphone,
  IconBook,
  IconFunction,
  IconStar,
} from "./icons";

const categoryIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  braces: IconBraces,
  brain: IconBrain,
  chain: IconChain,
  chart: IconChartLine,
  cloud: IconCloud,
  cpu: IconCpu,
  database: IconDatabase,
  git: IconGitBranch,
  globe: IconGlobe,
  network: IconNetwork,
  shield: IconShieldCheck,
  smartphone: IconSmartphone,
  book: IconBook,
  function: IconFunction,
  star: IconStar,
};

export function CategoryIcon({
  name,
  size = 20,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = categoryIcons[name] ?? IconBook;
  return (
    <span className={className}>
      <Icon size={size} />
    </span>
  );
}
