export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatNumber(n: number): string {
  if (n >= 1000) {
    return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(".", ",")}k`;
  }
  return String(n);
}

export const gradients: Record<string, string> = {
  "from-violet-500 to-fuchsia-500":
    "linear-gradient(135deg, #8b5cf6, #d946ef)",
  "from-sky-500 to-indigo-500":
    "linear-gradient(135deg, #0ea5e9, #6366f1)",
  "from-amber-500 to-orange-500":
    "linear-gradient(135deg, #f59e0b, #f97316)",
  "from-emerald-500 to-teal-500":
    "linear-gradient(135deg, #10b981, #14b8a6)",
  "from-rose-500 to-pink-500":
    "linear-gradient(135deg, #f43f5e, #ec4899)",
  "from-cyan-500 to-blue-500":
    "linear-gradient(135deg, #06b6d4, #3b82f6)",
  "from-lime-500 to-green-500":
    "linear-gradient(135deg, #84cc16, #22c55e)",
  "from-fuchsia-500 to-purple-500":
    "linear-gradient(135deg, #d946ef, #a855f7)",
};

const tailwindColors: Record<string, string> = {
  "sky-500": "#0ea5e9",
  "sky-600": "#0284c7",
  "blue-500": "#3b82f6",
  "blue-600": "#2563eb",
  "violet-500": "#8b5cf6",
  "violet-600": "#7c3aed",
  "purple-500": "#a855f7",
  "purple-600": "#9333ea",
  "fuchsia-500": "#d946ef",
  "fuchsia-600": "#c026d3",
  "indigo-500": "#6366f1",
  "indigo-600": "#4f46e5",
  "teal-500": "#14b8a6",
  "teal-600": "#0d9488",
  "emerald-500": "#10b981",
  "emerald-600": "#059669",
  "green-500": "#22c55e",
  "green-600": "#16a34a",
  "cyan-500": "#06b6d4",
  "cyan-600": "#0891b2",
  "rose-500": "#f43f5e",
  "rose-600": "#e11d48",
  "red-500": "#ef4444",
  "red-600": "#dc2626",
  "amber-500": "#f59e0b",
  "amber-600": "#d97706",
  "orange-500": "#f97316",
  "orange-600": "#ea580c",
  "pink-500": "#ec4899",
  "pink-600": "#db2777",
  "slate-500": "#64748b",
  "slate-600": "#475569",
  "gray-700": "#374151",
  "lime-500": "#84cc16",
  "light-600": "#65a30d",
};

export function gradientOf(key: string | undefined): string {
  if (!key) return "linear-gradient(135deg, #6366f1, #8b5cf6)";
  if (gradients[key]) return gradients[key];

  const from = key.match(/from-(\S+)/);
  const via = key.match(/via-(\S+)/);
  const to = key.match(/to-(\S+)/);
  const stop = (c: string | undefined) =>
    (c && tailwindColors[c]) || "#8b5cf6";

  if (from || to) {
    const stops = [stop(from?.[1]), via ? stop(via[1]) : null, stop(to?.[1])]
      .filter(Boolean) as string[];
    if (stops.length >= 2) return `linear-gradient(135deg, ${stops.join(", ")})`;
  }
  return "linear-gradient(135deg, #6366f1, #8b5cf6)";
}
