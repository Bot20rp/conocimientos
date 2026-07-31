export type UserRole = "student" | "professor" | "admin";

export interface User {
  id: string;
  name: string;
  username: string;
  role: UserRole;
  faculty: string;
  initials: string;
  gradient: string;
  followers: number;
  following: number;
  headline: string;
}

export type PostType = "publication" | "material" | "event" | "question";

export interface Post {
  id: string;
  authorId: string;
  type: PostType;
  content: string;
  cover?: string;
  tags: string[];
  likes: number;
  comments: number;
  shares: number;
  createdAt: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  authorId: string;
  readTime: number;
  publishedAt: string;
  tags: string[];
  gradient: string;
  icon: string;
  featured?: boolean;
}

export interface Course {
  slug: string;
  title: string;
  description: string;
  category: string;
  level: "Básico" | "Intermedio" | "Avanzado";
  instructorId: string;
  duration: string;
  lessons: number;
  enrolled: number;
  rating: number;
  reviews: number;
  gradient: string;
  icon: string;
  price: number;
  curriculum: { title: string; lessons: string[] }[];
}

export type EventType = "webinar" | "taller" | "conferencia" | "feria";

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  type: EventType;
  attendees: number;
  organizerId: string;
  gradient: string;
  capacity: number;
  price: number;
}

export type MaterialType = "pdf" | "slides" | "video" | "doc" | "link";

export interface Material {
  id: string;
  title: string;
  subject: string;
  type: MaterialType;
  size: string;
  downloads: number;
  uploadedAt: string;
  uploadedById: string;
  courseSlug?: string;
  description: string;
}

/* ============ Plataforma nueva: publicaciones enriquecidas ============ */

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  gradient: string;
  count: number;
}

export type PublicationBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "checklist"; items: { text: string; done: boolean }[] }
  | { type: "code"; language: string; code: string }
  | { type: "quote"; text: string; author?: string }
  | {
      type: "alert";
      variant: "info" | "warning" | "success" | "error";
      title?: string;
      text: string;
    }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "image"; caption?: string }
  | { type: "video"; title: string; duration: string }
  | { type: "diagram"; title: string; nodes: string[] }
  | { type: "math"; formula: string };

export interface Publication {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  categoryId: string;
  authorId: string;
  readTime: number;
  publishedAt: string;
  views: number;
  comments: number;
  favorites: number;
  tags: string[];
  gradient: string;
  featured?: boolean;
  difficulty: "Principiante" | "Intermedio" | "Avanzado";
  blocks: PublicationBlock[];
}

export interface Tag {
  name: string;
  count: number;
}

export interface CommentReply {
  id: string;
  authorId: string;
  content: string;
  createdAt: string;
  likes: number;
}

export interface Comment {
  id: string;
  publicationId: string;
  authorId: string;
  content: string;
  createdAt: string;
  likes: number;
  replies: CommentReply[];
}

export interface AppNotification {
  id: string;
  type:
    | "comment"
    | "reply"
    | "follow"
    | "publication"
    | "recommendation"
    | "message"
    | "system";
  title: string;
  description: string;
  time: string;
  read: boolean;
  userId?: string;
  publicationSlug?: string;
}

export interface Message {
  id: string;
  authorId: string;
  content: string;
  time: string;
  type?: "text" | "file";
  fileName?: string;
  fileSize?: string;
}

export interface Conversation {
  id: string;
  userId: string;
  online?: boolean;
  lastMessage: string;
  lastTime: string;
  unread: number;
  messages: Message[];
}

export interface SavedFolder {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface SavedItem {
  id: string;
  publicationSlug: string;
  folderId: string;
  savedAt: string;
}

export interface HistoryEntry {
  id: string;
  publicationSlug: string;
  lastReadAt: string;
  progress: number;
}
