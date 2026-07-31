import type { Metadata } from "next";
import { Editor } from "@/components/publish/Editor";

export const metadata: Metadata = {
  title: "Crear publicación",
  description:
    "Escribe y publica contenido enriquecedor con el editor de Conocimientos.",
};

export default function PublishPage() {
  return <Editor />;
}
