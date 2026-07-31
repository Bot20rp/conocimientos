import { posts } from "@/lib/data/posts";
import { getUserById } from "@/lib/data/users";
import { Avatar } from "@/components/ui/Avatar";
import { IconFlag } from "@/components/ui/icons";

export const metadata = {
  title: "Reportes",
};

const reports = [
  { id: "r1", postId: posts[1].id, reporterId: "u5", reason: "Contenido fuera de tema", time: "hace 20 min", severity: "Baja" },
  { id: "r2", postId: posts[3].id, reporterId: "u7", reason: "Spam en comentarios", time: "hace 1 hora", severity: "Media" },
  { id: "r3", postId: posts[4].id, reporterId: "u6", reason: "Lenguaje inapropiado", time: "hace 3 horas", severity: "Alta" },
  { id: "r4", postId: posts[6].id, reporterId: "u1", reason: "Publicidad no autorizada", time: "hace 5 horas", severity: "Media" },
];

const severityBadge: Record<string, string> = {
  Baja: "badge-info",
  Media: "badge-warning",
  Alta: "badge-error",
};

export default function AdminReportsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Reportes</h1>
          <p className="mt-1 opacity-60">
            Contenido reportado por la comunidad pendiente de revisión.
          </p>
        </div>
        <span className="badge badge-error badge-lg gap-2">
          <IconFlag size={14} /> {reports.length} pendientes
        </span>
      </div>

      <div className="mt-6 space-y-3">
        {reports.map((report) => {
          const post = posts.find((p) => p.id === report.postId);
          const reporter = getUserById(report.reporterId);
          const author = post ? getUserById(post.authorId) : null;
          return (
            <div
              key={report.id}
              className="card border border-base-300/70 bg-base-100 p-5 shadow-sm"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex min-w-0 flex-1 gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-error/10 text-error">
                    <IconFlag size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold">{report.reason}</p>
                      <span
                        className={`badge badge-sm border-0 ${severityBadge[report.severity]}`}
                      >
                        {report.severity}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs opacity-50">
                      Reportado por {reporter.name} · {report.time}
                    </p>
                    {post && author && (
                      <div className="mt-3 rounded-xl border border-base-300/60 bg-base-200/40 p-3">
                        <div className="flex items-center gap-2">
                          <Avatar name={author.name} gradient={author.gradient} size="xs" />
                          <p className="text-xs font-medium">{author.name}</p>
                          <span className="text-xs opacity-40">· {post.createdAt}</span>
                        </div>
                        <p className="mt-2 text-sm opacity-70">{post.content}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex shrink-0 gap-2 sm:flex-col">
                  <button className="btn btn-sm btn-success rounded-full">
                    Descartar
                  </button>
                  <button className="btn btn-sm btn-outline btn-error rounded-full">
                    Eliminar publicación
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
