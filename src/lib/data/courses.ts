import type { Course } from "@/types";

export const courses: Course[] = [
  {
    slug: "calculo-i",
    title: "Cálculo I: Límites y Derivadas",
    description:
      "Domina los fundamentos del cálculo diferencial con teoría clara, ejercicios resueltos paso a paso y evaluaciones simuladas.",
    category: "Matemáticas",
    level: "Básico",
    instructorId: "u2",
    duration: "12 semanas",
    lessons: 48,
    enrolled: 2350,
    rating: 4.8,
    reviews: 612,
    gradient: "from-sky-500 via-indigo-500 to-violet-500",
    icon: "math",
    price: 0,
    curriculum: [
      {
        title: "Funciones y sus propiedades",
        lessons: ["Funciones, dominio y rango", "Composición de funciones", "Límites al infinito"],
      },
      {
        title: "Límites y continuidad",
        lessons: ["Definición de límite", "Límites laterales", "Continuidad y teoremas"],
      },
      {
        title: "La derivada",
        lessons: ["Definición de derivada", "Reglas de derivación", "Regla de la cadena"],
      },
    ],
  },
  {
    slug: "python-desde-cero",
    title: "Python desde Cero hasta tus Primeros Proyectos",
    description:
      "El curso más práctico para empezar a programar: sintaxis, estructuras de datos, funciones y dos proyectos reales al final.",
    category: "Programación",
    level: "Básico",
    instructorId: "u1",
    duration: "8 semanas",
    lessons: 36,
    enrolled: 4120,
    rating: 4.9,
    reviews: 980,
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    icon: "python",
    price: 0,
    curriculum: [
      {
        title: "Fundamentos",
        lessons: ["Variables y tipos", "Condicionales y bucles", "Listas y diccionarios"],
      },
      {
        title: "Funciones y módulos",
        lessons: ["Definiendo funciones", "Errores y excepciones", "Archivos y módulos"],
      },
      {
        title: "Proyectos finales",
        lessons: ["Proyecto: organizador de tareas", "Proyecto: análisis de datos"],
      },
    ],
  },
  {
    slug: "introduccion-ia",
    title: "Introducción a la Inteligencia Artificial",
    description:
      "De los algoritmos clásicos al aprendizaje automático: lo esencial para entender y empezar a usar IA en tus proyectos.",
    category: "Tecnología",
    level: "Intermedio",
    instructorId: "u1",
    duration: "10 semanas",
    lessons: 42,
    enrolled: 1980,
    rating: 4.7,
    reviews: 480,
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    icon: "ai",
    price: 49,
    curriculum: [
      {
        title: "Conceptos base",
        lessons: ["Qué es la IA", "Historia y aplicaciones", "Ética y sesgos"],
      },
      {
        title: "Aprendizaje supervisado",
        lessons: ["Regresión lineal", "Clasificación", "Evaluación de modelos"],
      },
      {
        title: "Redes neuronales",
        lessons: ["Perceptrón", "Redes profundas", "Proyecto final"],
      },
    ],
  },
  {
    slug: "comunicacion-cientifica",
    title: "Comunicación Científica y Redacción Académica",
    description:
      "Estructura, estilo y citación para producir informes, artículos y presentaciones académicas de alto nivel.",
    category: "Investigación",
    level: "Básico",
    instructorId: "u6",
    duration: "6 semanas",
    lessons: 24,
    enrolled: 1560,
    rating: 4.6,
    reviews: 340,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    icon: "write",
    price: 0,
    curriculum: [
      {
        title: "Estructura del texto",
        lessons: ["Del tema a la tesis", "Introducción y marco", "Discusión y conclusiones"],
      },
      {
        title: "Estilo y citación",
        lessons: ["Voz académica", "Citas APA y Vancouver", "Gestores de referencias"],
      },
    ],
  },
  {
    slug: "quimica-organica",
    title: "Química Orgánica: Fundamentos y Reacciones",
    description:
      "Nomenclatura, isomería y los grupos funcionales más importantes con ejercicios de mecanismos paso a paso.",
    category: "Ciencias Naturales",
    level: "Intermedio",
    instructorId: "u4",
    duration: "14 semanas",
    lessons: 56,
    enrolled: 890,
    rating: 4.5,
    reviews: 210,
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    icon: "chemistry",
    price: 29,
    curriculum: [
      {
        title: "Estructura molecular",
        lessons: ["Enlaces y geometría", "Nomenclatura IUPAC", "Isomería estructural"],
      },
      {
        title: "Grupos funcionales",
        lessons: ["Alcanos y alquenos", "Alcoholes y éteres", "Ácidos carboxílicos"],
      },
      {
        title: "Mecanismos de reacción",
        lessons: ["Sustitución", "Eliminación", "Adición electrofílica"],
      },
    ],
  },
  {
    slug: "diseno-interfaces-ux",
    title: "Diseño de Interfaces y Experiencia de Usuario",
    description:
      "Principios de diseño visual, jerarquía, tipografía y prototipado para crear interfaces que se entiendan solas.",
    category: "Diseño",
    level: "Intermedio",
    instructorId: "u5",
    duration: "8 semanas",
    lessons: 32,
    enrolled: 1230,
    rating: 4.8,
    reviews: 405,
    gradient: "from-pink-500 via-rose-500 to-red-500",
    icon: "design",
    price: 39,
    curriculum: [
      {
        title: "Fundamentos del diseño",
        lessons: ["Jerarquía visual", "Color y contraste", "Tipografía"],
      },
      {
        title: "UX y usabilidad",
        lessons: ["Arquitectura de la información", "Pruebas con usuarios", "Accesibilidad"],
      },
      {
        title: "Prototipado",
        lessons: ["Wireframes", "Prototipo interactivo", "Entrega a desarrollo"],
      },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
