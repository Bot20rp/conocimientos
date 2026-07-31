import type { Metadata } from "next";
import { publications } from "@/lib/data";
import { ExploreClient } from "@/components/explore/ExploreClient";

export const metadata: Metadata = {
  title: "Explorar",
  description:
    "Explora publicaciones por categoría, popularidad y etiquetas en Conocimientos.",
};

export default async function ExplorePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; tag?: string }>;
}) {
  const { category, tag } = await searchParams;
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <ExploreClient
        publications={publications}
        initialCategory={category}
        initialTag={tag}
      />
    </div>
  );
}
