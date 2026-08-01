import {
  IconAtom,
  IconBook,
  IconBraces,
  IconBriefcase,
  IconChartLine,
  IconCode,
  IconCpu,
  IconDatabase,
  IconDiagram,
  IconFormula,
  IconFunction,
  IconGlobe,
  IconGraduation,
  IconInbox,
  IconLanguage,
  IconLayers,
  IconMapPin,
  IconNetwork,
  IconShieldCheck,
  IconStar,
  IconTerminal,
  IconTrending,
} from "./icons";

const subjectIcons: Record<
  string,
  React.ComponentType<{ size?: number }>
> = {
  function: IconFunction,
  cpu: IconCpu,
  diagram: IconDiagram,
  atom: IconAtom,
  language: IconLanguage,
  braces: IconBraces,
  formula: IconFormula,
  chart: IconChartLine,
  layers: IconLayers,
  terminal: IconTerminal,
  database: IconDatabase,
  trending: IconTrending,
  inbox: IconInbox,
  network: IconNetwork,
  map: IconMapPin,
  code: IconCode,
  shield: IconShieldCheck,
  graduation: IconGraduation,
  globe: IconGlobe,
  star: IconStar,
  briefcase: IconBriefcase,
  book: IconBook,
};

export function SubjectIcon({
  name,
  size = 20,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = subjectIcons[name] ?? IconBook;
  return (
    <span className={className}>
      <Icon size={size} />
    </span>
  );
}
