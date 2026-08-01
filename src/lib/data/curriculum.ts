import type { Semester, Subject } from "@/types";

export const START_YEAR = 2026;

export function gestionOf(semester: number): string {
  const base = START_YEAR + Math.floor((semester - 1) / 2);
  return semester % 2 === 1 ? `I-${base}` : `II-${base}`;
}

export const semesters: Semester[] = [
  {
    number: 1,
    gestion: gestionOf(1),
    subjects: [
      { code: "MAT101", name: "Cálculo I", semester: 1, type: "obligatoria", credits: 4, area: "Matemáticas", gradient: "from-indigo-500 to-violet-600", icon: "function" },
      { code: "INF110", name: "Introducción a la Informática", semester: 1, type: "obligatoria", credits: 4, area: "Informática", gradient: "from-sky-500 to-blue-600", icon: "cpu" },
      { code: "INF119", name: "Estructuras Discretas", semester: 1, type: "obligatoria", credits: 4, area: "Matemáticas", gradient: "from-violet-500 to-purple-600", icon: "diagram" },
      { code: "FIS100", name: "Física I", semester: 1, type: "obligatoria", credits: 4, area: "Ciencias Básicas", gradient: "from-cyan-500 to-sky-600", icon: "atom" },
      { code: "LIN100", name: "Inglés Técnico I", semester: 1, type: "obligatoria", credits: 2, area: "Idiomas", gradient: "from-pink-500 to-rose-600", icon: "language" },
    ],
  },
  {
    number: 2,
    gestion: gestionOf(2),
    subjects: [
      { code: "MAT102", name: "Cálculo II", semester: 2, type: "obligatoria", credits: 4, area: "Matemáticas", gradient: "from-indigo-500 to-violet-600", icon: "function" },
      { code: "INF120", name: "Programación I", semester: 2, type: "obligatoria", credits: 4, area: "Programación", gradient: "from-sky-500 to-blue-600", icon: "braces" },
      { code: "MAT103", name: "Álgebra Lineal", semester: 2, type: "obligatoria", credits: 4, area: "Matemáticas", gradient: "from-violet-500 to-purple-600", icon: "formula" },
      { code: "FIS102", name: "Física II", semester: 2, type: "obligatoria", credits: 4, area: "Ciencias Básicas", gradient: "from-cyan-500 to-sky-600", icon: "atom" },
      { code: "LIN101", name: "Inglés Técnico II", semester: 2, type: "obligatoria", credits: 2, area: "Idiomas", gradient: "from-pink-500 to-rose-600", icon: "language" },
    ],
  },
  {
    number: 3,
    gestion: gestionOf(3),
    subjects: [
      { code: "MAT207", name: "Ecuaciones Diferenciales", semester: 3, type: "obligatoria", credits: 4, area: "Matemáticas", gradient: "from-indigo-500 to-violet-600", icon: "formula" },
      { code: "INF210", name: "Programación II", semester: 3, type: "obligatoria", credits: 4, area: "Programación", gradient: "from-sky-500 to-blue-600", icon: "braces" },
      { code: "INF211", name: "Arquitectura de Computadoras", semester: 3, type: "obligatoria", credits: 4, area: "Hardware", gradient: "from-cyan-500 to-blue-600", icon: "cpu" },
      { code: "FIS200", name: "Física III", semester: 3, type: "obligatoria", credits: 4, area: "Ciencias Básicas", gradient: "from-cyan-500 to-sky-600", icon: "atom" },
      { code: "ADM100", name: "Administración", semester: 3, type: "obligatoria", credits: 3, area: "Gestión", gradient: "from-orange-500 to-amber-600", icon: "briefcase" },
    ],
  },
  {
    number: 4,
    gestion: gestionOf(4),
    subjects: [
      { code: "MAT202", name: "Probabilidad y Estadística I", semester: 4, type: "obligatoria", credits: 4, area: "Matemáticas", gradient: "from-indigo-500 to-violet-600", icon: "chart" },
      { code: "MAT205", name: "Métodos Numéricos", semester: 4, type: "obligatoria", credits: 4, area: "Matemáticas", gradient: "from-violet-500 to-purple-600", icon: "function" },
      { code: "INF220", name: "Estructuras de Datos I", semester: 4, type: "obligatoria", credits: 4, area: "Programación", gradient: "from-emerald-500 to-teal-600", icon: "layers" },
      { code: "INF221", name: "Programación Ensamblador", semester: 4, type: "obligatoria", credits: 4, area: "Hardware", gradient: "from-slate-500 to-gray-700", icon: "terminal" },
      { code: "ADM200", name: "Contabilidad", semester: 4, type: "obligatoria", credits: 3, area: "Gestión", gradient: "from-orange-500 to-amber-600", icon: "briefcase" },
    ],
  },
  {
    number: 5,
    gestion: gestionOf(5),
    subjects: [
      { code: "MAT302", name: "Probabilidad y Estadística II", semester: 5, type: "obligatoria", credits: 4, area: "Matemáticas", gradient: "from-indigo-500 to-violet-600", icon: "chart" },
      { code: "INF310", name: "Estructuras de Datos II", semester: 5, type: "obligatoria", credits: 4, area: "Programación", gradient: "from-emerald-500 to-teal-600", icon: "layers" },
      { code: "INF312", name: "Base de Datos I", semester: 5, type: "obligatoria", credits: 4, area: "Datos", gradient: "from-teal-500 to-emerald-600", icon: "database" },
      { code: "ECO300", name: "Economía para la Gestión", semester: 5, type: "obligatoria", credits: 3, area: "Gestión", gradient: "from-emerald-500 to-green-600", icon: "trending" },
      { code: "ADM330", name: "Organización y Métodos", semester: 5, type: "obligatoria", credits: 3, area: "Gestión", gradient: "from-orange-500 to-amber-600", icon: "briefcase" },
    ],
  },
  {
    number: 6,
    gestion: gestionOf(6),
    subjects: [
      { code: "MAT329", name: "Investigación Operativa I", semester: 6, type: "obligatoria", credits: 4, area: "Matemáticas", gradient: "from-indigo-500 to-violet-600", icon: "formula" },
      { code: "INF323", name: "Sistemas Operativos I", semester: 6, type: "obligatoria", credits: 4, area: "Informática", gradient: "from-blue-500 to-indigo-600", icon: "cpu" },
      { code: "INF322", name: "Base de Datos II", semester: 6, type: "obligatoria", credits: 4, area: "Datos", gradient: "from-teal-500 to-emerald-600", icon: "database" },
      { code: "INF342", name: "Sistemas de Información I", semester: 6, type: "obligatoria", credits: 4, area: "Informática", gradient: "from-amber-500 to-orange-600", icon: "inbox" },
      { code: "ADM320", name: "Finanzas para la Empresa", semester: 6, type: "obligatoria", credits: 3, area: "Gestión", gradient: "from-orange-500 to-amber-600", icon: "briefcase" },
    ],
  },
  {
    number: 7,
    gestion: gestionOf(7),
    subjects: [
      { code: "MAT419", name: "Investigación Operativa II", semester: 7, type: "obligatoria", credits: 4, area: "Matemáticas", gradient: "from-indigo-500 to-violet-600", icon: "formula" },
      { code: "INF433", name: "Redes I", semester: 7, type: "obligatoria", credits: 4, area: "Redes", gradient: "from-cyan-500 to-sky-600", icon: "network" },
      { code: "INF413", name: "Sistemas Operativos II", semester: 7, type: "obligatoria", credits: 4, area: "Informática", gradient: "from-blue-500 to-indigo-600", icon: "cpu" },
      { code: "INF412", name: "Sistemas de Información II", semester: 7, type: "obligatoria", credits: 4, area: "Informática", gradient: "from-amber-500 to-orange-600", icon: "inbox" },
      { code: "INF432", name: "Soporte para la Toma de Decisiones", semester: 7, type: "obligatoria", credits: 4, area: "Datos", gradient: "from-fuchsia-500 to-pink-600", icon: "chart" },
    ],
  },
  {
    number: 8,
    gestion: gestionOf(8),
    subjects: [
      { code: "ECO449", name: "Preparación y Evaluación de Proyectos", semester: 8, type: "obligatoria", credits: 3, area: "Gestión", gradient: "from-emerald-500 to-green-600", icon: "trending" },
      { code: "INF423", name: "Redes II", semester: 8, type: "obligatoria", credits: 4, area: "Redes", gradient: "from-cyan-500 to-sky-600", icon: "network" },
      { code: "INF442", name: "Sistemas de Información Geográfica", semester: 8, type: "obligatoria", credits: 4, area: "Datos", gradient: "from-green-500 to-emerald-600", icon: "map" },
      { code: "INF422", name: "Ingeniería de Software I", semester: 8, type: "obligatoria", credits: 4, area: "Ingeniería de Software", gradient: "from-violet-500 to-purple-600", icon: "code" },
      { code: "INF462", name: "Auditoría Informática", semester: 8, type: "obligatoria", credits: 4, area: "Seguridad", gradient: "from-rose-500 to-red-600", icon: "shield" },
    ],
  },
  {
    number: 9,
    gestion: gestionOf(9),
    subjects: [
      { code: "INF511", name: "Taller de Grado I", semester: 9, type: "obligatoria", credits: 4, area: "Investigación", gradient: "from-purple-500 to-fuchsia-600", icon: "graduation" },
      { code: "ING512", name: "Ingeniería de Software II", semester: 9, type: "obligatoria", credits: 4, area: "Ingeniería de Software", gradient: "from-violet-500 to-purple-600", icon: "code" },
      { code: "INF513", name: "Tecnología Web", semester: 9, type: "obligatoria", credits: 4, area: "Desarrollo Web", gradient: "from-amber-500 to-orange-600", icon: "globe" },
      { code: "INF552", name: "Arquitectura de Software", semester: 9, type: "obligatoria", credits: 4, area: "Ingeniería de Software", gradient: "from-indigo-500 to-blue-600", icon: "layers" },
    ],
  },
];

export const electives: Subject[] = [
  { code: "ELC001", name: "Administración de Recursos Humanos", semester: 0, type: "electiva", credits: 3, area: "Gestión", gradient: "from-rose-500 to-pink-600", icon: "star" },
  { code: "ELC002", name: "Costos y Presupuestos", semester: 0, type: "electiva", credits: 3, area: "Gestión", gradient: "from-rose-500 to-pink-600", icon: "star" },
  { code: "ELC003", name: "Producción y Marketing", semester: 0, type: "electiva", credits: 3, area: "Gestión", gradient: "from-rose-500 to-pink-600", icon: "star" },
  { code: "ELC004", name: "Reingeniería", semester: 0, type: "electiva", credits: 3, area: "Gestión", gradient: "from-rose-500 to-pink-600", icon: "star" },
  { code: "ELC005", name: "Ingeniería de la Calidad", semester: 0, type: "electiva", credits: 3, area: "Gestión", gradient: "from-rose-500 to-pink-600", icon: "star" },
  { code: "ELC006", name: "Benchmarking", semester: 0, type: "electiva", credits: 3, area: "Gestión", gradient: "from-rose-500 to-pink-600", icon: "star" },
  { code: "ELC007", name: "Macroeconomía", semester: 0, type: "electiva", credits: 3, area: "Economía", gradient: "from-rose-500 to-pink-600", icon: "star" },
  { code: "ELC008", name: "Legislación en Ciencias de la Computación", semester: 0, type: "electiva", credits: 3, area: "Legal", gradient: "from-rose-500 to-pink-600", icon: "star" },
];

export const allSubjects: Subject[] = [
  ...semesters.flatMap((s) => s.subjects),
  ...electives,
];

export function getSubjectByCode(code: string): Subject | undefined {
  return allSubjects.find((s) => s.code === code);
}

export function getSubjectsBySemester(semester: number): Subject[] {
  return semesters.find((s) => s.number === semester)?.subjects ?? [];
}

export function getSemesterByGestion(gestion: string): Semester | undefined {
  return semesters.find((s) => s.gestion === gestion);
}
