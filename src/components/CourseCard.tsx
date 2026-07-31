import Link from "next/link";
import type { Course } from "@/types";
import { Cover } from "@/components/ui/Cover";
import { getUserById } from "@/lib/data/users";
import { formatNumber } from "@/lib/utils";
import { IconBook, IconStar, IconUsers } from "@/components/ui/icons";

export function CourseCard({ course }: { course: Course }) {
  const instructor = getUserById(course.instructorId);
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="card overflow-hidden border border-base-300/70 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg group"
    >
      <Cover gradient={course.gradient} icon={course.icon} className="h-36">
        <span className="absolute left-3 top-3 rounded-full bg-black/25 px-3 py-1 text-xs font-medium backdrop-blur-sm">
          {course.level}
        </span>
      </Cover>
      <div className="card-body gap-2 p-5">
        <h3 className="card-title text-base leading-snug line-clamp-1 transition group-hover:text-primary">
          {course.title}
        </h3>
        <p className="text-sm opacity-70 line-clamp-2">{course.description}</p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs opacity-60">
          <span className="inline-flex items-center gap-1">
            <IconBook size={14} /> {course.lessons} lecciones
          </span>
          <span className="inline-flex items-center gap-1 text-amber-500">
            <IconStar size={14} className="fill-current" /> {course.rating} (
            {formatNumber(course.reviews)})
          </span>
          <span className="inline-flex items-center gap-1">
            <IconUsers size={14} /> {formatNumber(course.enrolled)}
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-base-300/60 pt-3">
          <span className="truncate text-xs opacity-70">{instructor.name}</span>
          <span className="font-semibold text-primary">
            {course.price === 0 ? "Gratis" : `S/ ${course.price}`}
          </span>
        </div>
      </div>
    </Link>
  );
}
