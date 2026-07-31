import type { Metadata } from "next";
import { SavedClient } from "@/components/saved/SavedClient";

export const metadata: Metadata = {
  title: "Guardados",
};

export default function SavedPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <SavedClient />
    </div>
  );
}
