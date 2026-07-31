import type { Metadata } from "next";
import { SearchClient } from "@/components/search/SearchClient";

export const metadata: Metadata = {
  title: "Búsqueda",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <SearchClient initialQuery={q} />
    </div>
  );
}
