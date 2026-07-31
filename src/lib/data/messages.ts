import type { Conversation } from "@/types";

export const conversations: Conversation[] = [
  {
    id: "conv1",
    userId: "u5",
    online: true,
    lastMessage: "¡Claro! Te lo envío ahora mismo.",
    lastTime: "14:32",
    unread: 2,
    messages: [
      {
        id: "m1",
        authorId: "u5",
        content: "Oye Valen, ¿terminaste el taller de cálculo?",
        time: "14:05",
      },
      {
        id: "m2",
        authorId: "me",
        content: "Sí, casi. Me falta solo el último ejercicio de la parte de integrales.",
        time: "14:12",
      },
      {
        id: "m3",
        authorId: "u5",
        content: "¿Me pasas tu solución? La quiero comparar con la mía.",
        time: "14:15",
      },
      {
        id: "m4",
        authorId: "u5",
        content: "Es que el profe dijo que entrega el lunes y no quiero errarle jaja",
        time: "14:15",
      },
      {
        id: "m5",
        authorId: "me",
        content: "Va, te lo envío en PDF. Revisa la parte de sustitución, ahí me tardé.",
        time: "14:28",
      },
      {
        id: "m6",
        authorId: "u5",
        content: "¡Gracias! Eres la mejor 🙌",
        time: "14:30",
      },
      {
        id: "m7",
        authorId: "u5",
        content: "¿También me recomiendas el post de Python que hiciste?",
        time: "14:31",
      },
      {
        id: "m8",
        authorId: "me",
        content: "¡Claro! Te lo envío ahora mismo.",
        time: "14:32",
      },
    ],
  },
  {
    id: "conv2",
    userId: "u2",
    online: false,
    lastMessage: "Excelente, lo revisaré con el grupo.",
    lastTime: "Ayer",
    unread: 0,
    messages: [
      {
        id: "m1",
        authorId: "me",
        content: "Profesor, ¿el material de la guía de Python quedó aprobado?",
        time: "Ayer",
      },
      {
        id: "m2",
        authorId: "u2",
        content: "Sí, Valen. Muy buen nivel para el curso.",
        time: "Ayer",
      },
      {
        id: "m3",
        authorId: "me",
        content: "Gracias. Puedo preparar una parte 2 si al grupo le sirve.",
        time: "Ayer",
      },
      {
        id: "m4",
        authorId: "u2",
        content: "Excelente, lo revisaré con el grupo.",
        time: "Ayer",
      },
    ],
  },
  {
    id: "conv3",
    userId: "u3",
    online: true,
    lastMessage: "Jaja sí, fue un caos 😅",
    lastTime: "Hace 2 días",
    unread: 0,
    messages: [
      {
        id: "m1",
        authorId: "u3",
        content: "Valen, ¿viste el debate de ayer en la facultad?",
        time: "Hace 2 días",
      },
      {
        id: "m2",
        authorId: "me",
        content: "Sí, me llegó por las notificaciones. Tremendo intercambio.",
        time: "Hace 2 días",
      },
      {
        id: "m3",
        authorId: "u3",
        content: "Jaja sí, fue un caos 😅",
        time: "Hace 2 días",
      },
    ],
  },
  {
    id: "conv4",
    userId: "u7",
    online: false,
    lastMessage: "Te aviso cuando esté disponible la sala.",
    lastTime: "Hace 3 días",
    unread: 0,
    messages: [
      {
        id: "m1",
        authorId: "u7",
        content: "Hola, ¿todavía te interesa la sesión de estudio de IA?",
        time: "Hace 3 días",
      },
      {
        id: "m2",
        authorId: "me",
        content: "Sí, me interesa. ¿Para cuándo sería?",
        time: "Hace 3 días",
      },
      {
        id: "m3",
        authorId: "u7",
        content: "Te aviso cuando esté disponible la sala.",
        time: "Hace 3 días",
      },
    ],
  },
];

export function getConversationById(id: string): Conversation | undefined {
  return conversations.find((c) => c.id === id);
}
