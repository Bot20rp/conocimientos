import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "programacion",
    name: "Programación",
    icon: "braces",
    description: "Lenguajes, algoritmos y lógica",
    gradient: "from-sky-500 to-blue-600",
    count: 284,
  },
  {
    id: "ia",
    name: "Inteligencia Artificial",
    icon: "brain",
    description: "ML, LLMs y agentes",
    gradient: "from-violet-500 to-purple-600",
    count: 356,
  },
  {
    id: "matematicas",
    name: "Matemáticas",
    icon: "function",
    description: "Cálculo, álgebra y estadística",
    gradient: "from-indigo-500 to-violet-600",
    count: 198,
  },
  {
    id: "bases-datos",
    name: "Bases de Datos",
    icon: "database",
    description: "SQL, NoSQL y modelado",
    gradient: "from-teal-500 to-emerald-600",
    count: 142,
  },
  {
    id: "redes",
    name: "Redes",
    icon: "network",
    description: "TCP/IP, protocolos e infra",
    gradient: "from-cyan-500 to-sky-600",
    count: 97,
  },
  {
    id: "seguridad",
    name: "Seguridad Informática",
    icon: "shield",
    description: "Ciberseguridad y ética",
    gradient: "from-rose-500 to-red-600",
    count: 121,
  },
  {
    id: "desarrollo-web",
    name: "Desarrollo Web",
    icon: "globe",
    description: "Frontend, backend y fullstack",
    gradient: "from-amber-500 to-orange-600",
    count: 231,
  },
  {
    id: "ciencia-datos",
    name: "Ciencia de Datos",
    icon: "chart",
    description: "Análisis, pandas y ML",
    gradient: "from-fuchsia-500 to-pink-600",
    count: 164,
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: "smartphone",
    description: "Android, iOS y cross-platform",
    gradient: "from-emerald-500 to-green-600",
    count: 88,
  },
  {
    id: "devops",
    name: "DevOps",
    icon: "git",
    description: "CI/CD, Docker y automatización",
    gradient: "from-slate-500 to-gray-700",
    count: 76,
  },
  {
    id: "cloud",
    name: "Cloud Computing",
    icon: "cloud",
    description: "AWS, Azure y GCP",
    gradient: "from-blue-500 to-indigo-600",
    count: 109,
  },
  {
    id: "blockchain",
    name: "Blockchain",
    icon: "chain",
    description: "Web3, contratos y cripto",
    gradient: "from-orange-500 to-amber-600",
    count: 54,
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
