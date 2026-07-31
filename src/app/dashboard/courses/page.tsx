import Link from "next/link";
import { courses } from "@/lib/data/courses";
import { Cover } from "@/components/ui/Cover";
import { Avatar } from "@/components/ui/Avatar";
import { getUserById } from "@/lib/data/users";
import { formatNumber } from "@/lib/utils";
import {
  IconArrowRight,
  IconBook,
  IconStar,
  IconUsers,
} from "@/components/ui/icons";

export const metadata = {
  title: "Mis cursos",
};

export default function DashboardCoursesPage() {
  const enrolled = [courses[1], courses[0], courses[3], courses[5]];
  const progress = [68, 42, 15, 90];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Mis cursos</h1>
          <p className="mt-1 opacity-60">
            Continúa donde lo dejaste o explora nuevos temas.
          </p>
        </div>
        <Link href="/courses" className="btn btn-primary rounded-full">
          Explorar catálogo
        </Link>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {enrolled.map((course, i) => {
          const instructor = getUserById(course.instructorId);
          return (
            <div
              key={course.slug}
              className="card overflow-hidden border border-base-300/70 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative">
                <Cover gradient={course.gradient} icon={course.icon} className="h-32" />
                <span className="absolute bottom-3 left-3 right-3">
                  <div className="flex justify-between text-xs font-medium">
                    <span>{course.level}</span>
                    <span>{progress[i]}%</span>
                  </div>
                  <progress
                    className="progress progress-primary h-2"
                    value={progress[i]}
                    max="100"
                  />
                </span>
              </div>
              <div className="card-body gap-2 p-5">
                <h3 className="card-title text-base leading-snug">{course.title}</h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs opacity-60">
                  <span className="inline-flex items-center gap-1">
                    <IconBook size={14} /> {course.lessons} lecciones
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <IconUsers size={14} /> {formatNumber(course.enrolled)}
                  </span>
                  <span className="inline-flex items-center gap-1 text-amber-500">
                    <IconStar size={14} className="fill-current" /> {course.rating}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-base-300/60 pt-3">
                  <div className="flex items-center gap-2 text-xs">
                    <Avatar
                      name={instructor.name}
                      gradient={instructor.gradient}
                      size="xs"
                    />
                    <span className="opacity-70">{instructor.name}</span>
                  </div>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="btn btn-primary btn-sm gap-1 rounded-full"
                  >
                    Continuar <IconArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
