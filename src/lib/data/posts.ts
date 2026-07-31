import type { Post } from "@/types";

export const posts: Post[] = [
  {
    id: "p1",
    authorId: "u2",
    type: "publication",
    content:
      "Subí a la sección de materiales las diapositivas del tema de integrales múltiples. Recuerden que la práctica calificada es el viernes a las 9:00 a.m. en el aula B-203.",
    tags: ["cálculo", "integrales", "aviso"],
    likes: 148,
    comments: 32,
    shares: 24,
    createdAt: "hace 2 horas",
  },
  {
    id: "p2",
    authorId: "u1",
    type: "publication",
    content:
      "Comparto el roadmap que armé para aprender Python desde cero hasta Machine Learning. Les sirve mucho si van a postular a los grupos de investigación. Dejen en comentarios si quieren que profundice en algún tema.",
    cover: "from-violet-500 via-indigo-500 to-sky-500",
    tags: ["python", "machine-learning", "roadmap"],
    likes: 412,
    comments: 78,
    shares: 156,
    createdAt: "hace 5 horas",
  },
  {
    id: "p3",
    authorId: "u4",
    type: "material",
    content:
      "Publicaron el paper de mi grupo sobre CRISPR en cultivos andinos. Está en acceso abierto, lo dejo disponible en la sección de materiales para los interesados en biotecnología.",
    tags: ["biotecnología", "CRISPR", "investigación"],
    likes: 289,
    comments: 41,
    shares: 98,
    createdAt: "ayer",
  },
  {
    id: "p4",
    authorId: "u7",
    type: "question",
    content:
      "Alguien que ya haya llevado Anatomía II, ¿cuánto tiempo dedicaban semanalmente al estudio fuera de clases? Estoy armando mi horario y quiero ser realista.",
    tags: ["medicina", "anatomía", "consejos"],
    likes: 56,
    comments: 45,
    shares: 3,
    createdAt: "ayer",
  },
  {
    id: "p5",
    authorId: "u3",
    type: "publication",
    content:
      "Se arma el grupo de estudio para el examen de Derecho Constitucional. Nos reunimos los lunes y miércoles en la biblioteca central, piso 3. Los que quieran unirse escriban por interno.",
    tags: ["derecho", "grupo-de-estudio", "constitucional"],
    likes: 93,
    comments: 27,
    shares: 15,
    createdAt: "hace 1 día",
  },
  {
    id: "p6",
    authorId: "u5",
    type: "event",
    content:
      "Este sábado el taller de maquetación digital en el laboratorio de diseño. Cupos limitados, inscripción gratuita en la página del evento. Los esperamos.",
    cover: "from-rose-500 via-pink-500 to-fuchsia-500",
    tags: ["arquitectura", "taller", "diseño"],
    likes: 201,
    comments: 38,
    shares: 64,
    createdAt: "hace 1 día",
  },
  {
    id: "p7",
    authorId: "u6",
    type: "publication",
    content:
      "Consejo para la semana: antes de enviar un informe, revisen que la introducción responda al 'qué, cómo y para qué'. Ese simple check mejora el 80% de los trabajos que recibo.",
    tags: ["comunicación", "consejos", "redacción"],
    likes: 327,
    comments: 19,
    shares: 88,
    createdAt: "hace 2 días",
  },
  {
    id: "p8",
    authorId: "u8",
    type: "publication",
    content:
      "Recordatorio: la encuesta de satisfacción docente cierra este domingo. Es anónima y toma menos de 5 minutos. Su opinión nos ayuda a mejorar los cursos.",
    tags: ["aviso", "encuesta"],
    likes: 76,
    comments: 12,
    shares: 41,
    createdAt: "hace 2 días",
  },
];
