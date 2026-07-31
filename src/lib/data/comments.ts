import type { Comment } from "@/types";

export const comments: Comment[] = [
  {
    id: "c1",
    publicationId: "p1",
    authorId: "u3",
    content:
      "Esto me habría ahorrado un semestre entero. El tip del gestor de paquetes es oro puro.",
    createdAt: "Hace 1 día",
    likes: 24,
    replies: [
      {
        id: "c1r1",
        authorId: "u1",
        content: "¡Gracias Camila! Si te quedas con dudas con las listas, escríbeme.",
        createdAt: "Hace 22 horas",
        likes: 8,
      },
    ],
  },
  {
    id: "c2",
    publicationId: "p1",
    authorId: "u2",
    content:
      "Muy buen material para el curso de Programación 1. Lo voy a dejar como lectura recomendada.",
    createdAt: "Hace 20 horas",
    likes: 41,
    replies: [
      {
        id: "c2r1",
        authorId: "u1",
        content: "¡Gracias profesor! Me alegra que le sirva al grupo.",
        createdAt: "Hace 18 horas",
        likes: 12,
      },
    ],
  },
  {
    id: "c3",
    publicationId: "p2",
    authorId: "u1",
    content:
      "Por fin entiendo para qué sirve cada función de activación. La tabla comparativa está perfecta.",
    createdAt: "Hace 2 días",
    likes: 19,
    replies: [],
  },
  {
    id: "c4",
    publicationId: "p2",
    authorId: "u7",
    content:
      "¿Alguien más quiere que hagan una parte 2 sobre CNN o transformers? Yo le entro.",
    createdAt: "Hace 1 día",
    likes: 33,
    replies: [
      {
        id: "c4r1",
        authorId: "u2",
        content: "Anotado. La próxima publicación será sobre convolución, prometido.",
        createdAt: "Hace 23 horas",
        likes: 27,
      },
    ],
  },
  {
    id: "c5",
    publicationId: "p4",
    authorId: "u5",
    content:
      "El orden de ejecución del diagrama es lo que me faltaba. Siempre me enredaba con HAVING vs WHERE.",
    createdAt: "Hace 3 días",
    likes: 15,
    replies: [],
  },
  {
    id: "c6",
    publicationId: "p5",
    authorId: "u3",
    content:
      "La analogía de la paquetería funcionó para explicarle a mi hermano menor qué estudio. 10/10.",
    createdAt: "Hace 1 día",
    likes: 22,
    replies: [],
  },
  {
    id: "c7",
    publicationId: "p6",
    authorId: "u1",
    content:
      "El punto del phishing con urgencia es muy real, casi me estafan así el año pasado. Gran contenido.",
    createdAt: "Hace 20 horas",
    likes: 28,
    replies: [],
  },
  {
    id: "c8",
    publicationId: "p7",
    authorId: "u6",
    content:
      "Me gusta que menciones accesibilidad desde el inicio. En comunicación digital deberíamos exigir lo mismo.",
    createdAt: "Hace 1 día",
    likes: 11,
    replies: [],
  },
];

export function getCommentsByPublication(publicationId: string): Comment[] {
  return comments.filter((c) => c.publicationId === publicationId);
}
