import { users } from "@/lib/data/users";
import { posts } from "@/lib/data/posts";
import { courses } from "@/lib/data/courses";
import { PostCard } from "@/components/PostCard";
import { Avatar } from "@/components/ui/Avatar";
import { CourseCard } from "@/components/CourseCard";
import {
  IconGraduation,
  IconMapPin,
  IconSettings,
} from "@/components/ui/icons";

export const metadata = {
  title: "Mi perfil",
};

export default function DashboardProfilePage() {
  const profile = users[0];
  const myPosts = posts.filter((p) => p.authorId === profile.id);
  const myCourses = courses.slice(0, 2);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="card overflow-hidden border border-base-300/70 bg-base-100 shadow-sm">
        <div className="relative h-36 bg-gradient-to-r from-primary via-secondary to-accent sm:h-44">
          <div className="absolute inset-0 opacity-20 bg-grid text-white" />
        </div>
        <div className="card-body p-5 sm:p-6">
          <div className="-mt-20 flex flex-wrap items-end gap-4 sm:-mt-24">
            <Avatar
              name={profile.name}
              gradient={profile.gradient}
              size="xl"
              className="ring-4 ring-base-100"
            />
            <div className="flex-1 pb-1">
              <h1 className="text-2xl font-extrabold tracking-tight">
                {profile.name}
              </h1>
              <p className="text-sm opacity-60">@{profile.username}</p>
            </div>
            <button className="btn btn-primary btn-sm rounded-full">
              <IconSettings size={16} /> Editar perfil
            </button>
          </div>

          <p className="mt-3 text-sm font-medium">{profile.headline}</p>

          <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm opacity-60">
            <span className="inline-flex items-center gap-1.5">
              <IconGraduation size={16} /> {profile.faculty}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <IconMapPin size={16} /> Campus Central
            </span>
          </div>

          <div className="mt-4 flex gap-8 border-t border-base-300/60 pt-4">
            <div>
              <p className="text-xl font-bold">{profile.followers}</p>
              <p className="text-xs opacity-50">Seguidores</p>
            </div>
            <div>
              <p className="text-xl font-bold">{profile.following}</p>
              <p className="text-xs opacity-50">Siguiendo</p>
            </div>
            <div>
              <p className="text-xl font-bold">12</p>
              <p className="text-xs opacity-50">Publicaciones</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="min-w-0 space-y-4">
          <h2 className="text-lg font-bold">Mis publicaciones</h2>
          {myPosts.length > 0 ? (
            myPosts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <p className="text-sm opacity-60">
              Aún no has publicado nada. ¡Anímate a compartir tu primer post!
            </p>
          )}
        </div>

        <aside className="space-y-6">
          <div>
            <h2 className="text-lg font-bold">Mis cursos</h2>
            <div className="mt-4 grid gap-4">
              {myCourses.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
