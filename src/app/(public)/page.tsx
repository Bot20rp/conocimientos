import Link from "next/link";
import { Metadata } from "next";
import {
  categories,
  getFeaturedPublications,
  gestionOf,
  popularTags,
  publications,
  semesters,
  users,
} from "@/lib/data";
import { CategoryCard } from "@/components/CategoryCard";
import { TrendsSidebar } from "@/components/TrendsSidebar";
import { SubjectIcon } from "@/components/ui/SubjectIcon";
import {
  FeaturedPublicationCard,
  PublicationListRow,
} from "@/components/publications/PublicationCard";
import {
  IconArrowRight,
  IconCalendar,
  IconGraduation,
  IconLayers,
  IconSearch,
  IconSparkles,
} from "@/components/ui/icons";
import { gradientOf } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Inicio",
};

const featured = getFeaturedPublications();
const recent = [...publications]
  .sort((a, b) => (a.views > b.views ? -1 : 1))
  .slice(0, 5);

export default function HomePage() {
  const currentUser = users.find((u) => u.id === "u1") ?? users[0];

  return (
    <div className="animate-fade-in">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-grid text-primary/10"
          aria-hidden
        />
        <div
          className="absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge badge-ghost badge-lg gap-2 rounded-full border-base-300/70 bg-base-100/60">
              <IconSparkles size={15} className="text-primary" />
              Comunidad estudiantil de conocimiento abierto
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Bienvenido de nuevo,{" "}
              <span className="text-gradient">{currentUser.name.split(" ")[0]}</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-base-content/70 sm:text-lg">
              &ldquo;El conocimiento se multiplica cuando se comparte.&rdquo;
              Publica, organiza y descubre el mejor contenido hecho por y para
              estudiantes.
            </p>

            <form
              action="/search"
              className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-full border border-base-300/70 bg-base-100 p-1.5 shadow-lg card-glow"
            >
              <IconSearch size={20} className="ml-3 shrink-0 opacity-40" />
              <input
                type="search"
                name="q"
                placeholder="¿Qué quieres aprender hoy?"
                className="w-full bg-transparent text-sm outline-none"
              />
              <button type="submit" className="btn btn-primary btn-sm rounded-full px-5">
                Buscar
              </button>
            </form>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs text-base-content/50">Populares:</span>
              {popularTags.slice(0, 5).map((tag) => (
                <Link
                  key={tag.name}
                  href={`/explore?tag=${encodeURIComponent(tag.name)}`}
                  className="badge badge-ghost rounded-full text-xs font-medium hover:badge-primary"
                >
                  #{tag.name}
                </Link>
              ))}
            </div>

            <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-4">
              {[
                { value: "4,2k", label: "publicaciones" },
                { value: "12", label: "categorías" },
                { value: "18k", label: "estudiantes" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-box border border-base-300/70 bg-base-100/70 p-3 backdrop-blur-sm"
                >
                  <p className="text-xl font-extrabold text-primary">{stat.value}</p>
                  <p className="text-xs text-base-content/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Categorías populares</h2>
            <p className="text-sm text-base-content/60">
              Explora el contenido por área de conocimiento
            </p>
          </div>
          <Link
            href="/explore"
            className="btn btn-ghost btn-sm hidden rounded-full text-primary sm:inline-flex"
          >
            Ver todas
            <IconArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Tu malla curricular</h2>
            <p className="text-sm text-base-content/60">
              Tu carrera organizada por semestres y gestiones académicas
            </p>
          </div>
          <Link
            href="/malla"
            className="btn btn-ghost btn-sm hidden rounded-full text-primary sm:inline-flex"
          >
            Ver malla completa
            <IconArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-box border border-base-300/70 bg-base-100 p-6 card-glow lg:col-span-1">
            <div
              className="absolute inset-0 bg-gradient-to-br opacity-90"
              style={{ background: "linear-gradient(135deg, #8b5cf6, #6d28d9, #d946ef)" }}
            />
            <div className="absolute inset-0 bg-grid text-white/15" aria-hidden />
            <div className="relative flex h-full flex-col justify-between gap-6 text-white">
              <div>
                <span className="badge border-0 bg-white/15 backdrop-blur-sm">
                  <IconCalendar size={13} />
                  Gestión {gestionOf(1)}
                </span>
                <h3 className="mt-3 text-2xl font-extrabold leading-tight">
                  Tu semestre actual
                </h3>
                <p className="mt-1 text-sm text-white/80">
                  Semestre 1 de 9 · 5 materias · 18 créditos
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {semesters[0].subjects.map((subject) => (
                  <Link
                    key={subject.code}
                    href={`/materia/${subject.code}`}
                    className="flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm transition-colors hover:bg-white/25"
                  >
                    <SubjectIcon name={subject.icon} size={14} />
                    {subject.code}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {semesters.slice(1, 4).map((semester) => (
              <div
                key={semester.number}
                className="rounded-box border border-base-300/70 bg-base-100 p-5 card-glow"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="flex items-center gap-2 font-bold">
                    <IconLayers size={17} className="text-primary" />
                    Semestre {semester.number}
                  </h3>
                  <span className="badge badge-ghost badge-sm rounded-full">
                    {semester.gestion}
                  </span>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {semester.subjects.slice(0, 3).map((subject) => (
                    <li key={subject.code}>
                      <Link
                        href={`/materia/${subject.code}`}
                        className="group flex items-center gap-2 rounded-lg p-1.5 transition-colors hover:bg-base-200/70"
                      >
                        <span
                          className="flex size-7 shrink-0 items-center justify-center rounded-md text-white"
                          style={{ background: gradientOf(subject.gradient) }}
                        >
                          <SubjectIcon name={subject.icon} size={14} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium group-hover:text-primary">
                            {subject.name}
                          </span>
                          <span className="block font-mono text-[11px] text-base-content/50">
                            {subject.code}
                          </span>
                        </span>
                        <IconGraduation size={14} className="text-base-content/40" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/malla?gestion=${semester.gestion}`}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                >
                  Ver semestre completo
                  <IconArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Publicaciones destacadas</h2>
            <p className="text-sm text-base-content/60">
              Lo mejor de la comunidad esta semana
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {featured.slice(0, 2).map((publication) => (
            <FeaturedPublicationCard
              key={publication.id}
              publication={publication}
            />
          ))}
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {featured.slice(2, 4).map((publication) => (
            <FeaturedPublicationCard
              key={publication.id}
              publication={publication}
              className="md:aspect-[2/1]"
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="mb-6 flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Recientes</h2>
                <p className="text-sm text-base-content/60">
                  Las publicaciones más leídas de la comunidad
                </p>
              </div>
              <Link
                href="/explore"
                className="btn btn-ghost btn-sm hidden rounded-full text-primary sm:inline-flex"
              >
                Ver más
                <IconArrowRight size={16} />
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {recent.map((publication, i) => (
                <PublicationListRow
                  key={publication.id}
                  publication={publication}
                  index={i}
                />
              ))}
            </div>
          </div>
          <TrendsSidebar className="lg:sticky lg:top-24 lg:self-start" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-4 sm:px-6">
        <div className="relative overflow-hidden rounded-box bg-gradient-to-r from-primary via-secondary to-accent p-8 text-center text-primary-content sm:p-12">
          <div className="absolute inset-0 bg-grid text-white/10" aria-hidden />
          <div className="relative">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              ¿Tienes algo que enseñar?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm opacity-90 sm:text-base">
              Tus apuntes, guías y experiencias valen más de lo que crees.
              Compártelos y ayuda a miles de estudiantes.
            </p>
            <Link
              href="/publish"
              className="btn btn-lg mt-6 rounded-full border-0 bg-white text-neutral hover:bg-base-100"
            >
              Crear tu primera publicación
              <IconArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
