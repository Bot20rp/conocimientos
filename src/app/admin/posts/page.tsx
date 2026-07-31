import { posts } from "@/lib/data/posts";
import { getUserById } from "@/lib/data/users";
import { Avatar } from "@/components/ui/Avatar";
import { formatNumber } from "@/lib/utils";

export const metadata = {
  title: "Publicaciones",
};

export default function AdminPostsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Publicaciones</h1>
          <p className="mt-1 opacity-60">
            Modera el contenido compartido por la comunidad.
          </p>
        </div>
        <div className="flex gap-2">
          <input
            type="search"
            placeholder="Buscar publicación..."
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
                <th>Autor</th>
                <th>Contenido</th>
                <th>Tipo</th>
                <th className="text-right">Interacciones</th>
                <th className="text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => {
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
                        <div className="leading-tight">
                          <p className="text-sm font-medium">{author.name}</p>
                          <p className="text-xs opacity-50">{post.createdAt}</p>
                        </div>
                      </div>
                    </td>
                    <td className="max-w-md truncate text-sm opacity-70">
                      {post.content}
                    </td>
                    <td>
                      <span className="badge badge-ghost badge-sm">{post.type}</span>
                    </td>
                    <td className="text-right text-sm">
                      {formatNumber(post.likes + post.comments + post.shares)}
                    </td>
                    <td>
                      <div className="flex justify-end gap-2">
                        <button className="btn btn-xs btn-outline btn-success rounded-full">
                          Aprobar
                        </button>
                        <button className="btn btn-xs btn-outline btn-error rounded-full">
                          Eliminar
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

      <div className="mt-6 flex items-center justify-center gap-2 text-sm">
        <button className="btn btn-sm btn-ghost rounded-full">Anterior</button>
        <span className="badge badge-primary badge-lg">1</span>
        <button className="btn btn-sm btn-ghost rounded-full">Siguiente</button>
      </div>
    </div>
  );
}
