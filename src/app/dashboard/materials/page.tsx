import { materials } from "@/lib/data/materials";
import { MaterialCard } from "@/components/MaterialCard";
import { IconFile, IconSearch } from "@/components/ui/icons";

export const metadata = {
  title: "Materiales",
};

const filters = ["Todos", "PDF", "Diapositivas", "Video", "Documento", "Enlace"];

export default async function DashboardMaterialsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; tipo?: string }>;
}) {
  const { q, tipo } = await searchParams;
  const query = (q ?? "").trim().toLowerCase();
  const type = tipo && tipo !== "Todos" ? tipo.toLowerCase() : null;

  const filtered = materials.filter((material) => {
    const matchesQuery =
      !query ||
      material.title.toLowerCase().includes(query) ||
      material.subject.toLowerCase().includes(query) ||
      material.description.toLowerCase().includes(query);
    const matchesType =
      !type ||
      (type === "pdf" && material.type === "pdf") ||
      (type === "diapositivas" && material.type === "slides") ||
      (type === "video" && material.type === "video") ||
      (type === "documento" && material.type === "doc") ||
      (type === "enlace" && material.type === "link");
    return matchesQuery && matchesType;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Materiales</h1>
          <p className="mt-1 opacity-60">
            Recursos compartidos por docentes y estudiantes.
          </p>
        </div>
        <button className="btn btn-primary rounded-full">Subir material</button>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <form action="/dashboard/materials" className="flex max-w-md flex-1 items-center gap-2 rounded-full border border-base-300 bg-base-100 p-1.5 shadow-sm">
          <div className="flex items-center gap-2 pl-4">
            <IconSearch size={16} className="opacity-40" />
            <input
              type="search"
              name="q"
              defaultValue={q}
              placeholder="Buscar por título o materia..."
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-sm rounded-full px-5">
            Buscar
          </button>
        </form>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {filters.map((f) => {
          const active = f === "Todos" ? !type : f.toLowerCase() === type;
          return (
            <a
              key={f}
              href={
                f === "Todos"
                  ? "/dashboard/materials"
                  : `/dashboard/materials?tipo=${f}`
              }
              className={`btn btn-sm rounded-full px-5 ${
                active ? "btn-primary" : "btn-outline"
              }`}
            >
              {f}
            </a>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-base-200">
            <IconFile size={28} className="opacity-40" />
          </div>
          <h2 className="mt-4 text-xl font-semibold">Sin resultados</h2>
          <p className="mt-1 opacity-60">
            No hay materiales que coincidan con tu búsqueda.
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-3">
          {filtered.map((material) => (
            <MaterialCard key={material.id} material={material} />
          ))}
        </div>
      )}
    </div>
  );
}
