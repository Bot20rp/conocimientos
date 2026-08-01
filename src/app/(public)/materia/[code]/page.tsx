import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getMaterialsBySubject,
  getSubjectByCode,
  getSubjectsBySemester,
  gestionOf,
  publications,
} from "@/lib/data";
import { MaterialCard } from "@/components/MaterialCard";
import { PublicationCard } from "@/components/publications/PublicationCard";
import { SubjectIcon } from "@/components/ui/SubjectIcon";
import {
  IconBook,
  IconCalendar,
  IconChevronRight,
  IconFile,
  IconGraduation,
  IconLayers,
  IconUsers,
} from "@/components/ui/icons";
import { gradientOf } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>;
}): Promise<Metadata> {
  const { code } = await params;
  const subject = getSubjectByCode(code);
  return {
    title: subject ? `${subject.code} · ${subject.name}` : "Materia",
    description: subject
      ? `Materiales y publicaciones de ${subject.name} (${subject.code}) del semestre ${subject.semester}.`
      : undefined,
  };
}

export default async function MateriaPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const subject = getSubjectByCode(code.toUpperCase());
  if (!subject) notFound();

  const materials = getMaterialsBySubject(subject.code);
  const subjectPublications = publications.filter(
    (p) => p.courseCode === subject.code,
  );
  const related =
    subject.type === "electiva"
      ? []
      : getSubjectsBySemester(subject.semester).filter(
          (s) => s.code !== subject.code,
        );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <nav
        aria-label="Migas de pan"
        className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-base-content/60"
      >
        <Link href="/" className="hover:text-primary">
          Inicio
        </Link>
        <IconChevronRight size={14} className="opacity-50" />
        <Link href="/malla" className="hover:text-primary">
          Malla curricular
        </Link>
        <IconChevronRight size={14} className="opacity-50" />
        <span className="font-medium text-base-content">{subject.code}</span>
      </nav>

      <header className="relative overflow-hidden rounded-box border border-base-300/70 bg-base-100 card-glow">
        <div
          className="absolute inset-0 bg-gradient-to-br opacity-90"
          style={{ background: gradientOf(subject.gradient) }}
        />
        <div className="absolute inset-0 bg-grid text-white/15" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-transparent" />
        <div className="relative flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-10">
          <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
            <SubjectIcon name={subject.icon} size={34} />
          </span>
          <div className="min-w-0 flex-1 text-white">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge border-0 bg-white/15 font-mono backdrop-blur-sm">
                {subject.code}
              </span>
              <span className="badge border-0 bg-white/15 backdrop-blur-sm">
                {subject.area}
              </span>
              {subject.type === "electiva" ? (
                <span className="badge border-0 bg-white/15 backdrop-blur-sm">
                  Electiva
                </span>
              ) : (
                <span className="badge border-0 bg-white/15 backdrop-blur-sm">
                  Semestre {subject.semester} · {gestionOf(subject.semester)}
                </span>
              )}
            </div>
            <h1 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-4xl">
              {subject.name}
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-col sm:items-end">
            {[
              { icon: IconGraduation, value: `${subject.credits}`, label: "créditos" },
              { icon: IconFile, value: materials.length, label: "materiales" },
              { icon: IconBook, value: subjectPublications.length, label: "publicaciones" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 rounded-box bg-white/10 px-3 py-2 backdrop-blur-sm"
              >
                <s.icon size={16} className="text-white/80" />
                <div className="leading-tight">
                  <p className="text-sm font-extrabold text-white">{s.value}</p>
                  <p className="text-[10px] text-white/70">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0">
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold tracking-tight">
              <IconFile size={20} className="text-primary" />
              Materiales de estudio
              <span className="text-base-content/50">({materials.length})</span>
            </h2>
            {materials.length > 0 ? (
              <div className="flex flex-col gap-3">
                {materials.map((material) => (
                  <MaterialCard key={material.id} material={material} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 rounded-box border border-dashed border-base-300 p-10 text-center">
                <IconFile size={36} className="opacity-30" />
                <p className="font-semibold">Aún no hay materiales</p>
                <p className="text-sm text-base-content/60">
                  ¿Tienes apuntes o diapositivas de esta materia? Sube el
                  primero.
                </p>
                <Link href="/publish" className="btn btn-primary btn-sm mt-2 rounded-full">
                  Compartir material
                </Link>
              </div>
            )}
          </section>

          <section className="mt-10">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold tracking-tight">
              <IconBook size={20} className="text-primary" />
              Publicaciones de la comunidad
              <span className="text-base-content/50">({subjectPublications.length})</span>
            </h2>
            {subjectPublications.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {subjectPublications.map((p) => (
                  <PublicationCard key={p.id} publication={p} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 rounded-box border border-dashed border-base-300 p-10 text-center">
                <IconBook size={36} className="opacity-30" />
                <p className="font-semibold">Sin publicaciones todavía</p>
                <p className="text-sm text-base-content/60">
                  Sé la primera persona en escribir una guía para esta materia.
                </p>
              </div>
            )}
          </section>
        </div>

        <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
          <section className="rounded-box border border-base-300/70 bg-base-100 p-5">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-base-content/70">
              <IconCalendar size={15} />
              Ubicación en la malla
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              {subject.type !== "electiva" && (
                <>
                  <li className="flex items-center justify-between">
                    <span className="text-base-content/60">Semestre</span>
                    <span className="font-semibold">
                      {subject.semester} de 9
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-base-content/60">Gestión</span>
                    <span className="font-semibold">{gestionOf(subject.semester)}</span>
                  </li>
                </>
              )}
              <li className="flex items-center justify-between">
                <span className="text-base-content/60">Créditos</span>
                <span className="font-semibold">{subject.credits}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-base-content/60">Área</span>
                <span className="font-semibold">{subject.area}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-base-content/60">Tipo</span>
                <span className="font-semibold capitalize">{subject.type}</span>
              </li>
            </ul>
          </section>

          {related.length > 0 && (
            <section className="rounded-box border border-base-300/70 bg-base-100 p-5">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-base-content/70">
                <IconLayers size={15} />
                Materias del semestre
              </h3>
              <ul className="flex flex-col gap-2">
                {related.map((s) => (
                  <li key={s.code}>
                    <Link
                      href={`/materia/${s.code}`}
                      className="group flex items-center gap-2 rounded-lg p-1.5 transition-colors hover:bg-base-200/70"
                    >
                      <span
                        className="flex size-7 shrink-0 items-center justify-center rounded-md text-white"
                        style={{ background: gradientOf(s.gradient) }}
                      >
                        <SubjectIcon name={s.icon} size={14} />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium group-hover:text-primary">
                          {s.name}
                        </span>
                        <span className="block font-mono text-[11px] text-base-content/50">
                          {s.code}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <Link
            href="/malla"
            className="btn btn-outline btn-sm rounded-full border-base-300/70"
          >
            <IconUsers size={15} />
            Ver toda la malla
          </Link>
        </aside>
      </div>
    </div>
  );
}
