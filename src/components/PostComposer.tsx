"use client";

import { useState } from "react";
import { Avatar } from "@/components/ui/Avatar";
import { users } from "@/lib/data/users";
import { IconCalendar, IconFile, IconImage, IconPen } from "@/components/ui/icons";

const currentUser = users[0];

export function PostComposer() {
  const [value, setValue] = useState("");
  const [active, setActive] = useState(false);

  return (
    <div className="card border border-base-300/70 bg-base-100 shadow-sm">
      <div className="card-body gap-3 p-5">
        <div className="flex items-center gap-3">
          <Avatar name={currentUser.name} gradient={currentUser.gradient} size="md" />
          <input
            type="text"
            value={value}
            onFocus={() => setActive(true)}
            onChange={(e) => setValue(e.target.value)}
            placeholder="¿Qué quieres compartir con tu comunidad?"
            className="input input-bordered flex-1 rounded-full"
          />
        </div>

        {active && (
          <div className="flex items-center gap-2 overflow-x-auto border-t border-base-300/60 pt-3">
            <button
              type="button"
              onClick={() => setActive(false)}
              className="btn btn-sm btn-outline btn-primary gap-2 rounded-full"
            >
              <IconPen size={16} /> Publicar
            </button>
            <span className="ml-auto flex items-center gap-2 text-xs opacity-50">
              <span className="btn btn-ghost btn-sm gap-2 rounded-full">
                <IconImage size={16} /> Foto
              </span>
              <span className="btn btn-ghost btn-sm gap-2 rounded-full">
                <IconFile size={16} /> Material
              </span>
              <span className="btn btn-ghost btn-sm gap-2 rounded-full">
                <IconCalendar size={16} /> Evento
              </span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
