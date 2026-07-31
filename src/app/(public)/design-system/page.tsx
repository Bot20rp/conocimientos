import type { Metadata } from "next";
import { DesignSystem } from "@/components/design/DesignSystem";

export const metadata: Metadata = {
  title: "Sistema de diseño",
  description:
    "Librería de componentes reutilizables de la plataforma Conocimientos.",
};

export default function DesignSystemPage() {
  return <DesignSystem />;
}
