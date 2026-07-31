import type { HistoryEntry, SavedFolder, SavedItem } from "@/types";

export const savedFolders: SavedFolder[] = [
  {
    id: "f1",
    name: "Programación",
    icon: "braces",
    color: "from-sky-500 to-blue-600",
    description: "Guías y tutoriales de código",
  },
  {
    id: "f2",
    name: "Parciales",
    icon: "book",
    color: "from-amber-500 to-orange-600",
    description: "Material para estudiar exámenes",
  },
  {
    id: "f3",
    name: "IA y datos",
    icon: "brain",
    color: "from-violet-500 to-purple-600",
    description: "Machine learning y análisis",
  },
  {
    id: "f4",
    name: "Inspiración",
    icon: "star",
    color: "from-rose-500 to-pink-600",
    description: "Para leer sin prisa",
  },
];

export const savedItems: SavedItem[] = [
  {
    id: "s1",
    publicationSlug: "redes-neuronales-explicadas-con-dibujos",
    folderId: "f3",
    savedAt: "Hace 3 días",
  },
  {
    id: "s2",
    publicationSlug: "analisis-datos-con-pandas",
    folderId: "f3",
    savedAt: "Hace 4 días",
  },
  {
    id: "s3",
    publicationSlug: "sql-desde-cero-hasta-joins-avanzados",
    folderId: "f1",
    savedAt: "Hace 1 semana",
  },
  {
    id: "s4",
    publicationSlug: "guia-completa-python-para-estudiantes",
    folderId: "f1",
    savedAt: "Hace 2 semanas",
  },
  {
    id: "s5",
    publicationSlug: "seguridad-contrasenas-2fa-y-phishing",
    folderId: "f2",
    savedAt: "Hace 2 semanas",
  },
  {
    id: "s6",
    publicationSlug: "derivadas-integrales-que-si-usaras",
    folderId: "f2",
    savedAt: "Hace 3 semanas",
  },
  {
    id: "s7",
    publicationSlug: "html-css-moderno-primeros-pasos",
    folderId: "f4",
    savedAt: "Hace 1 mes",
  },
];

export const readingHistory: HistoryEntry[] = [
  {
    id: "h1",
    publicationSlug: "redes-neuronales-explicadas-con-dibujos",
    lastReadAt: "Hace 1 hora",
    progress: 65,
  },
  {
    id: "h2",
    publicationSlug: "guia-completa-python-para-estudiantes",
    lastReadAt: "Hace 2 días",
    progress: 100,
  },
  {
    id: "h3",
    publicationSlug: "analisis-datos-con-pandas",
    lastReadAt: "Hace 3 días",
    progress: 40,
  },
  {
    id: "h4",
    publicationSlug: "modelo-tcp-ip-en-10-minutos",
    lastReadAt: "Hace 5 días",
    progress: 80,
  },
  {
    id: "h5",
    publicationSlug: "seguridad-contrasenas-2fa-y-phishing",
    lastReadAt: "Hace 1 semana",
    progress: 100,
  },
];
