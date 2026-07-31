import { courses } from "@/lib/data/courses";
import { CourseCard } from "@/components/CourseCard";
import { IconGraduation } from "@/components/ui/icons";

export const metadata = {
  title: "Cursos",
  description:
    "Cursos y talleres para aprender junto a tu comunidad universitaria.",
};

const filters = [
  "Todos",
  "Matemáticas",
  "Programación",
  "Tecnología",
  "Investigación",
  "Ciencias Naturales",
  "Diseño",
];

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <IconGraduation size={16} /> Aula virtual
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Cursos
        </h1>
        <p className="mt-3 text-lg opacity-60">
          Aprende con cursos creados por docentes y estudiantes destacados de tu
          universidad.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <span
            key={f}
            className={`btn btn-sm rounded-full px-5 ${
              f === "Todos" ? "btn-primary" : "btn-outline"
            }`}
          >
            {f}
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}
