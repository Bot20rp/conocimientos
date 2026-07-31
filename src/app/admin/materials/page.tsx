import { materials } from "@/lib/data/materials";
import { getUserById } from "@/lib/data/users";
import { Avatar } from "@/components/ui/Avatar";
import { formatNumber } from "@/lib/utils";
import { IconFile } from "@/components/ui/icons";

export const metadata = {
  title: "Materiales",
};

export default function AdminMaterialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Materiales</h1>
          <p className="mt-1 opacity-60">
            Recursos educativos subidos por la comunidad.
          </p>
        </div>
        <span className="badge badge-primary badge-lg gap-2">
          <IconFile size={14} /> {materials.length} materiales
        </span>
      </div>

      <div className="card mt-6 border border-base-300/70 bg-base-100 shadow-sm">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-xs opacity-50">
                <th>Material</th>
                <th>Materia</th>
                <th>Subido por</th>
                <th className="text-right">Descargas</th>
                <th className="text-right">Tamaño</th>
                <th className="text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((m) => {
                const uploader = getUserById(m.uploadedById);
                return (
                  <tr key={m.id} className="hover:bg-base-200/50">
                    <td>
                      <div className="max-w-xs">
                        <p className="truncate text-sm font-medium">{m.title}</p>
                        <p className="text-xs opacity-50">{m.uploadedAt}</p>
                      </div>
                    </td>
                    <td className="text-sm opacity-70">{m.subject}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <Avatar name={uploader.name} gradient={uploader.gradient} size="xs" />
                        <span className="text-sm">{uploader.name}</span>
                      </div>
                    </td>
                    <td className="text-right text-sm">{formatNumber(m.downloads)}</td>
                    <td className="text-right text-sm opacity-70">{m.size}</td>
                    <td>
                      <div className="flex justify-end gap-2">
                        <button className="btn btn-xs btn-outline btn-error rounded-full">
                          Quitar
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
