import { posts } from "@/lib/data/posts";
import { users } from "@/lib/data/users";
import { Avatar } from "@/components/ui/Avatar";
import { getUserById } from "@/lib/data/users";
import { formatNumber } from "@/lib/utils";
import {
  IconBook,
  IconCalendar,
  IconChart,
  IconFile,
  IconFlag,
  IconTrending,
  IconUsers,
} from "@/components/ui/icons";

export const metadata = {
  title: "Resumen",
};

const stats = [
  {
    label: "Usuarios activos",
    value: "12,480",
    delta: "+8.2%",
    up: true,
    icon: <IconUsers size={20} />,
    tint: "from-sky-500 to-indigo-500",
  },
  {
    label: "Publicaciones",
    value: "34,210",
    delta: "+12.4%",
    up: true,
    icon: <IconBook size={20} />,
    tint: "from-violet-500 to-fuchsia-500",
  },
  {
    label: "Materiales",
    value: "3,860",
    delta: "+5.1%",
    up: true,
    icon: <IconFile size={20} />,
    tint: "from-emerald-500 to-teal-500",
  },
  {
    label: "Eventos creados",
    value: "148",
    delta: "-2.3%",
    up: false,
    icon: <IconCalendar size={20} />,
    tint: "from-amber-500 to-orange-500",
  },
];

const chartBars = [42, 68, 55, 80, 62, 90, 74, 58, 85, 70, 96, 78];

const reports = [
  { id: "r1", reporterId: "u5", targetId: "u3", reason: "Contenido fuera de tema", time: "hace 20 min" },
  { id: "r2", reporterId: "u7", targetId: "u1", reason: "Spam en comentarios", time: "hace 1 hora" },
  { id: "r3", reporterId: "u6", targetId: "u2", reason: "Lenguaje inapropiado", time: "hace 3 horas" },
];

const topPosts = [...posts].sort((a, b) => b.likes - a.likes).slice(0, 4);

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Resumen general</h1>
          <p className="mt-1 opacity-60">
            Actividad de la plataforma en los últimos 30 días.
          </p>
        </div>
        <div className="join">
          <button className="btn btn-sm join-item rounded-l-full border border-base-300 bg-base-100">
            Hoy
          </button>
          <button className="btn btn-sm join-item btn-primary rounded-none">
            30 días
          </button>
          <button className="btn btn-sm join-item rounded-r-full border border-base-300 bg-base-100">
            Este año
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="card border border-base-300/70 bg-base-100 shadow-sm"
          >
            <div className="card-body gap-3 p-5">
              <div className="flex items-center justify-between">
                <span
                  className={`flex size-10 items-center justify-center rounded-xl bg-gradient-to-br text-white ${stat.tint}`}
                >
                  {stat.icon}
                </span>
                <span
                  className={`badge badge-sm border-0 ${
                    stat.up ? "badge-success" : "badge-error"
                  }`}
                >
                  {stat.delta}
                </span>
              </div>
              <div>
                <p className="text-2xl font-extrabold">{stat.value}</p>
                <p className="text-sm opacity-60">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        {/* Chart */}
        <div className="card border border-base-300/70 bg-base-100 shadow-sm">
          <div className="card-body p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-bold">Publicaciones por semana</h2>
              <span className="inline-flex items-center gap-1 text-xs opacity-60">
                <IconChart size={14} /> Últimos 12 meses
              </span>
            </div>
            <div className="mt-4 flex h-48 items-end gap-2">
              {chartBars.map((bar, i) => (
                <div
                  key={i}
                  className="group flex flex-1 flex-col items-center gap-1"
                >
                  <div className="tooltip tooltip-top" data-tip={`${bar * 40} publicaciones`}>
                    <div
                      className={`w-full rounded-t-md transition-all duration-300 group-hover:opacity-90 ${
                        i === 10
                          ? "bg-gradient-to-t from-primary to-secondary"
                          : "bg-primary/30"
                      }`}
                      style={{ height: `${bar}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[11px] opacity-40">
              <span>Ene</span>
              <span>Mar</span>
              <span>May</span>
              <span>Jul</span>
              <span>Sep</span>
              <span>Nov</span>
            </div>
          </div>
        </div>

        {/* Reports */}
        <div className="card border border-base-300/70 bg-base-100 shadow-sm">
          <div className="card-body p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-bold">Reportes recientes</h2>
              <span className="badge badge-error badge-sm">3 pendientes</span>
            </div>
            <div className="mt-3 space-y-3">
              {reports.map((report) => {
                const reporter = getUserById(report.reporterId);
                const target = getUserById(report.targetId);
                return (
                  <div
                    key={report.id}
                    className="flex items-center gap-3 rounded-xl border border-base-300/60 bg-base-200/40 p-3"
                  >
                    <Avatar
                      name={target.name}
                      gradient={target.gradient}
                      size="sm"
                    />
                    <div className="min-w-0 flex-1 leading-tight">
                      <p className="truncate text-sm font-medium">
                        Publicación de {target.name}
                      </p>
                      <p className="truncate text-xs opacity-50">
                        {report.reason} · reportado por {reporter.name}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[11px] opacity-40">{report.time}</span>
                      <button className="btn btn-ghost btn-xs text-error">
                        Revisar
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="btn btn-ghost btn-sm mt-2 gap-2 rounded-full">
              <IconFlag size={15} /> Ver todos los reportes
            </button>
          </div>
        </div>
      </div>

      {/* Top posts table */}
      <div className="card mt-6 border border-base-300/70 bg-base-100 shadow-sm">
        <div className="card-body p-5">
          <div className="flex items-center justify-between">
            <h2 className="inline-flex items-center gap-2 font-bold">
              <IconTrending size={18} className="text-primary" /> Publicaciones más
              populares
            </h2>
            <button className="btn btn-ghost btn-sm rounded-full">Exportar</button>
          </div>
          <div className="mt-3 overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="text-xs opacity-50">
                  <th>Autor</th>
                  <th>Publicación</th>
                  <th>Tipo</th>
                  <th className="text-right">Me gusta</th>
                  <th className="text-right">Comentarios</th>
                  <th className="text-right">Compartidos</th>
                </tr>
              </thead>
              <tbody>
                {topPosts.map((post) => {
                  const author = getUserById(post.authorId);
                  return (
                    <tr key={post.id} className="hover:bg-base-200/50">
                      <td>
                        <div className="flex items-center gap-2.5">
                          <Avatar
                            name={author.name}
                            gradient={author.gradient}
                            size="sm"
                          />
                          <span className="whitespace-nowrap text-sm font-medium">
                            {author.name}
                          </span>
                        </div>
                      </td>
                      <td className="max-w-xs truncate text-sm opacity-70">
                        {post.content}
                      </td>
                      <td>
                        <span className="badge badge-ghost badge-sm">{post.type}</span>
                      </td>
                      <td className="text-right text-sm">{formatNumber(post.likes)}</td>
                      <td className="text-right text-sm">{formatNumber(post.comments)}</td>
                      <td className="text-right text-sm">{formatNumber(post.shares)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Users snapshot */}
      <div className="card mt-6 border border-base-300/70 bg-base-100 shadow-sm">
        <div className="card-body p-5">
          <div className="flex items-center justify-between">
            <h2 className="inline-flex items-center gap-2 font-bold">
              <IconUsers size={18} className="text-primary" /> Usuarios destacados
            </h2>
            <button className="btn btn-ghost btn-sm rounded-full">Gestionar</button>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {users.slice(0, 4).map((u) => (
              <div
                key={u.id}
                className="flex items-center gap-3 rounded-xl border border-base-300/60 bg-base-200/40 p-3"
              >
                <Avatar name={u.name} gradient={u.gradient} size="md" />
                <div className="min-w-0 leading-tight">
                  <p className="truncate text-sm font-semibold">{u.name}</p>
                  <p className="truncate text-xs opacity-50">
                    {formatNumber(u.followers)} seguidores
                  </p>
                  <span className="badge badge-ghost badge-xs mt-1">{u.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
