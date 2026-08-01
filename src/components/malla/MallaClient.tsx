"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  electives,
  getMaterialsBySubject,
  gestionOf,
  publications,
  semesters,
} from "@/lib/data";
import type { Subject } from "@/types";
import { SubjectIcon } from "@/components/ui/SubjectIcon";
import {
  IconBook,
  IconCalendar,
  IconFile,
  IconGraduation,
  IconLayers,
  IconSparkles,
} from "@/components/ui/icons";
import { cn, gradientOf } from "@/lib/utils";

function SubjectCard({
  subject,
  highlight = false,
}: {
  subject: Subject;
  highlight?: boolean;
}) {
  const materialCount = getMaterialsBySubject(subject.code).length;
  const publicationCount = publications.filter(
    (p) => p.courseCode === subject.code,
  ).length;

  return (
    <Link
      href={`/materia/${subject.code}`}
      className={cn(
        "group relative flex flex-col gap-3 overflow-hidden rounded-box border bg-base-100 p-4 transition-all hover:-translate-y-0.5 card-glow",
        highlight
          ? "border-primary ring-2 ring-primary/30"
          : "border-base-300/70 hover:border-primary/50",
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <span
          className="flex size-10 items-center justify-center rounded-xl text-white shadow-sm"
          style={{ background: gradientOf(subject.gradient) }}
        >
          <SubjectIcon name={subject.icon} size={20} />
        </span>
        <span className="badge badge-ghost badge-sm rounded-full font-mono text-[11px]">
          {subject.code}
        </span>
      </div>
      <div>
        <h3 className="text-sm font-bold leading-snug group-hover:text-primary">
          {subject.name}
        </h3>
        <p className="mt-0.5 text-xs text-base-content/60">{subject.area}</p>
      </div>
      <div className="mt-auto flex items-center gap-3 border-t border-base-300/50 pt-2.5 text-[11px] text-base-content/60">
        <span className="flex items-center gap-1">
          <IconGraduation size={12} />
          {subject.credits} cr.
        </span>
        <span className="flex items-center gap-1">
          <IconFile size={12} />
          {materialCount}
        </span>
        <span className="flex items-center gap-1">
          <IconBook size={12} />
          {publicationCount}
        </span>
      </div>
    </Link>
  );
}

export function MallaClient({ initialGestion }: { initialGestion?: string }) {
  const [gestion, setGestion] = useState(
    initialGestion && semesters.some((s) => s.gestion === initialGestion)
      ? initialGestion
      : gestionOf(1),
  );

  const currentSemester = useMemo(
    () => semesters.find((s) => s.gestion === gestion),
    [gestion],
  );

  const totalSubjects = semesters.reduce(
    (acc, s) => acc + s.subjects.length,
    0,
  );
  const totalCredits = semesters.reduce(
    (acc, s) => acc + s.subjects.reduce((a, b) => a + b.credits, 0),
    0,
  );

  return (
    <div className="animate-fade-in">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight sm:text-3xl">
            <IconLayers size={26} className="text-primary" />
            Malla curricular
          </h1>
          <p className="mt-1 text-sm text-base-content/60">
            Ingeniería de Sistemas · 9 semestres · organizada por gestión
            académica.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Materias", value: totalSubjects },
            { label: "Créditos", value: totalCredits },
            { label: "Electivas", value: electives.length },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-box border border-base-300/70 bg-base-100 px-4 py-2 text-center"
            >
              <p className="text-lg font-extrabold text-primary">{s.value}</p>
              <p className="text-[11px] text-base-content/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <p className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-base-content/70">
          <IconCalendar size={15} />
          Tu gestión académica
        </p>
        <div className="flex flex-wrap gap-2">
          {semesters.map((s) => (
            <button
              key={s.gestion}
              type="button"
              onClick={() => setGestion(s.gestion)}
              className={cn(
                "btn btn-sm rounded-full border",
                gestion === s.gestion
                  ? "btn-primary"
                  : "border-base-300/70 bg-base-100",
              )}
            >
              {s.gestion}
              <span className={cn(gestion === s.gestion ? "opacity-80" : "opacity-50")}>
                · S{s.number}
              </span>
            </button>
          ))}
        </div>
      </div>

      {currentSemester && (
        <section className="mb-10 rounded-box border border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 p-5 sm:p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="badge badge-primary rounded-full">Gestión {gestion}</span>
              <h2 className="mt-2 text-lg font-bold sm:text-xl">
                Semestre {currentSemester.number} de 9
              </h2>
              <p className="text-sm text-base-content/60">
                Las materias que cursarás este período.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-base-content/70">
              <span className="flex items-center gap-1.5">
                <IconSparkles size={15} className="text-primary" />
                {currentSemester.subjects.length} materias
              </span>
              <span className="flex items-center gap-1.5">
                <IconGraduation size={15} className="text-primary" />
                {currentSemester.subjects.reduce((a, b) => a + b.credits, 0)} créditos
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {currentSemester.subjects.map((subject) => (
              <SubjectCard key={subject.code} subject={subject} highlight />
            ))}
          </div>
        </section>
      )}

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <h2 className="text-xl font-bold tracking-tight">Malla completa</h2>
        <div className="flex flex-wrap gap-1">
          {semesters.map((s) => (
            <a
              key={s.number}
              href={`#semestre-${s.number}`}
              className={cn(
                "badge rounded-full",
                gestion === s.gestion
                  ? "badge-primary"
                  : "badge-ghost",
              )}
            >
              S{s.number}
            </a>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {semesters.map((semester) => {
          const isCurrent = semester.gestion === gestion;
          return (
            <section
              key={semester.number}
              id={`semestre-${semester.number}`}
              className={cn(
                "scroll-mt-24 rounded-box border p-4",
                isCurrent
                  ? "border-primary/40 bg-base-100"
                  : "border-base-300/70 bg-base-100",
              )}
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-bold">Semestre {semester.number}</h3>
                <span
                  className={cn(
                    "badge rounded-full text-[11px]",
                    isCurrent ? "badge-primary" : "badge-ghost",
                  )}
                >
                  {semester.gestion}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {semester.subjects.map((subject) => (
                  <SubjectCard key={subject.code} subject={subject} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <section className="mt-10 rounded-box border border-base-300/70 bg-base-100 p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight">
              <IconStar2 />
              Materias electivas
            </h2>
            <p className="text-sm text-base-content/60">
              Elige las electivas que complementen tu perfil profesional.
            </p>
          </div>
          <span className="badge badge-ghost rounded-full">
            {electives.length} opciones
          </span>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {electives.map((subject) => (
            <SubjectCard key={subject.code} subject={subject} />
          ))}
        </div>
      </section>
    </div>
  );
}

function IconStar2() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
    </svg>
  );
}
