import type { Event } from "@/types";
import { gradientOf, formatNumber } from "@/lib/utils";
import { getUserById } from "@/lib/data/users";
import { Avatar } from "@/components/ui/Avatar";
import { IconCalendar, IconClock, IconMapPin, IconUsers } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const typeBadge: Record<Event["type"], string> = {
  webinar: "badge-info",
  taller: "badge-warning",
  conferencia: "badge-success",
  feria: "badge-secondary",
};

export function EventCard({ event }: { event: Event }) {
  const organizer = getUserById(event.organizerId);
  return (
    <div className="card overflow-hidden border border-base-300/70 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div
        className="relative flex h-28 items-center justify-center text-white"
        style={{ background: gradientOf(event.gradient) }}
      >
        <div className="absolute left-3 top-3 flex flex-col items-center rounded-xl bg-white/20 px-3 py-1.5 backdrop-blur-sm">
          <span className="text-lg font-bold leading-none">{event.date}</span>
        </div>
        <span className={cn("badge absolute right-3 top-3 border-0 font-medium", typeBadge[event.type])}>
          {event.type}
        </span>
        <IconUsers size={36} className="opacity-80" />
      </div>
      <div className="card-body gap-2 p-5">
        <h3 className="card-title text-base leading-snug">{event.title}</h3>
        <p className="text-sm opacity-70 line-clamp-2">{event.description}</p>
        <div className="mt-1 grid grid-cols-1 gap-1.5 text-xs opacity-70 sm:grid-cols-2">
          <span className="inline-flex items-center gap-1.5">
            <IconClock size={14} /> {event.time} · {event.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <IconMapPin size={14} /> {event.location}
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-base-300/60 pt-3">
          <div className="flex items-center gap-2 text-xs">
            <Avatar name={organizer.name} gradient={organizer.gradient} size="xs" />
            <span className="opacity-70">{organizer.name}</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1 opacity-70">
              <IconCalendar size={14} /> {formatNumber(event.attendees)}
            </span>
            <button className="btn btn-primary btn-sm rounded-full">
              {event.price === 0 ? "Inscribirme" : `S/ ${event.price}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
