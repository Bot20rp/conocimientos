import { users } from "@/lib/data/users";
import { Avatar } from "@/components/ui/Avatar";
import { formatNumber } from "@/lib/utils";

export const metadata = {
  title: "Usuarios",
};

const roleBadge: Record<string, string> = {
  student: "badge-ghost",
  professor: "badge-primary",
  admin: "badge-secondary",
};

export default function AdminUsersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Usuarios</h1>
          <p className="mt-1 opacity-60">
            Estudiantes, docentes y administradores de la plataforma.
          </p>
        </div>
        <div className="flex gap-2">
          <input
            type="search"
            placeholder="Buscar usuario..."
            className="input input-bordered input-sm rounded-full"
          />
          <button className="btn btn-sm btn-primary rounded-full">Filtrar</button>
        </div>
      </div>

      <div className="card mt-6 border border-base-300/70 bg-base-100 shadow-sm">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-xs opacity-50">
                <th>Usuario</th>
                <th>Facultad</th>
                <th>Rol</th>
                <th className="text-right">Seguidores</th>
                <th className="text-right">Estado</th>
                <th className="text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-base-200/50">
                  <td>
                    <div className="flex items-center gap-2.5">
                      <Avatar name={u.name} gradient={u.gradient} size="sm" />
                      <div className="leading-tight">
                        <p className="text-sm font-medium">{u.name}</p>
                        <p className="text-xs opacity-50">@{u.username}</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-sm opacity-70">{u.faculty}</td>
                  <td>
                    <span className={`badge badge-sm border-0 ${roleBadge[u.role]}`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="text-right text-sm">{formatNumber(u.followers)}</td>
                  <td className="text-right">
                    <span className="badge badge-success badge-sm border-0">Activo</span>
                  </td>
                  <td>
                    <div className="flex justify-end gap-2">
                      <button className="btn btn-xs btn-ghost rounded-full">Editar</button>
                      <button className="btn btn-xs btn-outline btn-error rounded-full">
                        Suspender
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
