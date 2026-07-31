import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourseBySlug } from "@/lib/data/courses";
import { materials } from "@/lib/data/materials";
import { getUserById } from "@/lib/data/users";
import { Cover } from "@/components/ui/Cover";
import { Avatar } from "@/components/ui/Avatar";
import { MaterialCard } from "@/components/MaterialCard";
import {
  IconArrowLeft,
  IconBook,
  IconCheck,
  IconClock,
  IconGraduation,
  IconStar,
  IconUsers,
} from "@/components/ui/icons";
import { formatNumber } from "@/lib/utils";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const instructor = getUserById(course.instructorId);
  const courseMaterials = materials.filter((m) => m.courseSlug === slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <Link
        href="/courses"
        className="inline-flex items-center gap-1.5 text-sm font-medium opacity-60 transition hover:opacity-100"
      >
        <IconArrowLeft size={16} /> Volver a cursos
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0">
          <Cover gradient={course.gradient} icon={course.icon} className="h-56 rounded-2xl sm:h-64">
            <span className="absolute left-4 top-4 rounded-full bg-black/25 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              {course.category} · {course.level}
            </span>
          </Cover>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {course.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed opacity-70">
            {course.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm opacity-70">
            <span className="inline-flex items-center gap-1.5">
              <IconClock size={16} /> {course.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <IconBook size={16} /> {course.lessons} lecciones
            </span>
            <span className="inline-flex items-center gap-1.5">
              <IconUsers size={16} /> {formatNumber(course.enrolled)} estudiantes
            </span>
            <span className="inline-flex items-center gap-1.5 text-amber-500">
              <IconStar size={16} className="fill-current" /> {course.rating} (
              {course.reviews} reseñas)
            </span>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold">Contenido del curso</h2>
            <p className="mt-1 text-sm opacity-60">
              Estructura pensada para avanzar paso a paso con práctica constante.
            </p>
            <div className="mt-5 space-y-4">
              {course.curriculum.map((module, i) => (
                <div
                  key={module.title}
                  className="rounded-2xl border border-base-300/70 bg-base-100 p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                      {i + 1}
                    </span>
                    <h3 className="font-semibold">{module.title}</h3>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {module.lessons.map((lesson) => (
                      <li
                        key={lesson}
                        className="flex items-center gap-2 pl-11 text-sm opacity-70"
                      >
                        <IconCheck size={15} className="text-success" />
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {courseMaterials.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xl font-bold">Materiales del curso</h2>
              <div className="mt-4 space-y-3">
                {courseMaterials.map((material) => (
                  <MaterialCard key={material.id} material={material} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="card border border-base-300/70 bg-base-100 shadow-sm">
            <div className="card-body gap-4 p-6">
              <div className="text-center">
                <p className="text-4xl font-extrabold text-primary">
                  {course.price === 0 ? "Gratis" : `S/ ${course.price}`}
                </p>
                <p className="mt-1 text-sm opacity-50">
                  Acceso de por vida al contenido
                </p>
              </div>
              <button className="btn btn-primary btn-lg rounded-full">
                {course.price === 0 ? "Inscribirme gratis" : "Comprar curso"}
              </button>
              <ul className="space-y-2 text-sm opacity-70">
                <li className="flex items-center gap-2">
                  <IconCheck size={16} className="text-success" /> Certificado
                  de participación
                </li>
                <li className="flex items-center gap-2">
                  <IconCheck size={16} className="text-success" /> Acceso a la
                  comunidad del curso
                </li>
                <li className="flex items-center gap-2">
                  <IconCheck size={16} className="text-success" /> Materiales
                  descargables
                </li>
              </ul>
              <div className="flex items-center gap-3 border-t border-base-300/60 pt-4">
                <Avatar name={instructor.name} gradient={instructor.gradient} size="md" />
                <div className="leading-tight">
                  <p className="text-xs opacity-50">Instructor</p>
                  <p className="font-semibold">{instructor.name}</p>
                </div>
                <IconGraduation size={20} className="ml-auto text-primary" />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
