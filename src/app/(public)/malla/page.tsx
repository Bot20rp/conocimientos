import type { Metadata } from "next";
import { MallaClient } from "@/components/malla/MallaClient";

export const metadata: Metadata = {
  title: "Malla curricular",
  description:
    "La malla de Ingeniería de Sistemas organizada por semestres y gestiones académicas.",
};

export default async function MallaPage({
  searchParams,
}: {
  searchParams: Promise<{ gestion?: string }>;
}) {
  const { gestion } = await searchParams;
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <MallaClient initialGestion={gestion} />
    </div>
  );
}
