import { events } from "@/lib/data/events";
import { EventCard } from "@/components/EventCard";
import { IconCalendar } from "@/components/ui/icons";

export const metadata = {
  title: "Eventos",
};

export default function DashboardEventsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Eventos</h1>
          <p className="mt-1 opacity-60">
            Talleres, conferencias y actividades de tu universidad.
          </p>
        </div>
        <button className="btn btn-primary rounded-full">Crear evento</button>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-dashed border-base-300 bg-base-100/60 p-8 text-center">
        <IconCalendar size={28} className="mx-auto opacity-40" />
        <h3 className="mt-3 font-bold">¿Organizas una actividad?</h3>
        <p className="mx-auto mt-1 max-w-md text-sm opacity-60">
          Crea un evento y compártelo con toda tu facultad. Lleva un registro de
          asistentes desde la plataforma.
        </p>
        <button className="btn btn-outline btn-sm mt-4 rounded-full">
          Crear evento
        </button>
      </div>
    </div>
  );
}
