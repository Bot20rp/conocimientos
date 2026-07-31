"use client";

import { useEffect, useRef, useState } from "react";
import { conversations, getUserById } from "@/lib/data";
import { Avatar } from "@/components/ui/Avatar";
import {
  IconFile,
  IconImage,
  IconMenu,
  IconPhone,
  IconSearch,
  IconSend,
  IconVideo,
  IconX,
} from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function MessagesClient() {
  const [activeId, setActiveId] = useState(conversations[0]?.id);
  const [query, setQuery] = useState("");
  const [text, setText] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const active = conversations.find((c) => c.id === activeId);
  const otherUser = active ? getUserById(active.userId) : null;

  const list = conversations.filter((c) => {
    const u = getUserById(c.userId);
    return (
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      c.lastMessage.toLowerCase().includes(query.toLowerCase())
    );
  });

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeId]);

  function send(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    setText("");
    requestAnimationFrame(() =>
      endRef.current?.scrollIntoView({ behavior: "smooth" }),
    );
  }

  return (
    <div className="mx-auto flex h-[calc(100vh-4rem)] max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6">
      <div className="flex min-h-0 flex-1 overflow-hidden rounded-box border border-base-300/70 bg-base-100 card-glow">
        <aside
          className={cn(
            "flex w-full max-w-full flex-col border-r border-base-300/70 sm:w-80 sm:max-w-xs lg:w-96",
            sidebarOpen ? "absolute inset-0 z-20 bg-base-100 sm:relative sm:z-auto" : "hidden sm:flex",
          )}
        >
          <div className="flex items-center justify-between gap-2 border-b border-base-300/70 p-4">
            <h1 className="text-lg font-bold">Mensajes</h1>
            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="btn btn-circle btn-ghost btn-xs sm:hidden"
              aria-label="Cerrar lista"
            >
              <IconX size={16} />
            </button>
          </div>
          <div className="p-3">
            <label className="input input-bordered flex items-center gap-2 rounded-full text-sm">
              <IconSearch size={15} className="opacity-50" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar conversación..."
                className="grow"
              />
            </label>
          </div>
          <div className="scrollbar-thin flex-1 overflow-y-auto p-2">
            {list.map((c) => {
              const u = getUserById(c.userId);
              const isActive = c.id === activeId;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setActiveId(c.id);
                    setSidebarOpen(false);
                  }}
                  className={cn(
                    "mb-1 flex w-full items-center gap-3 rounded-xl p-2.5 text-left transition-colors",
                    isActive ? "bg-primary/10" : "hover:bg-base-200/70",
                  )}
                >
                  <div className="relative">
                    <Avatar name={u.name} gradient={u.gradient} size="md" />
                    {c.online && (
                      <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-base-100 bg-success" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-semibold">{u.name}</p>
                      <span className="shrink-0 text-[11px] text-base-content/50">
                        {c.lastTime}
                      </span>
                    </div>
                    <p className="truncate text-xs text-base-content/60">
                      {c.lastMessage}
                    </p>
                  </div>
                  {c.unread > 0 && (
                    <span className="badge badge-primary badge-sm">{c.unread}</span>
                  )}
                </button>
              );
            })}
            {list.length === 0 && (
              <p className="p-4 text-center text-sm text-base-content/50">
                Sin resultados
              </p>
            )}
          </div>
        </aside>

        <section className="flex min-w-0 flex-1 flex-col">
          {active && otherUser ? (
            <>
              <header className="flex items-center gap-3 border-b border-base-300/70 p-4">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(true)}
                  className="btn btn-circle btn-ghost btn-xs sm:hidden"
                  aria-label="Abrir conversaciones"
                >
                  <IconMenu size={16} />
                </button>
                <div className="relative">
                  <Avatar name={otherUser.name} gradient={otherUser.gradient} size="sm" />
                  {active.online && (
                    <span className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-base-100 bg-success" />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold">{otherUser.name}</p>
                  <p className="text-xs text-base-content/50">
                    {active.online ? "En línea" : "Conectado recientemente"}
                  </p>
                </div>
                <div className="ml-auto flex gap-1">
                  <button
                    type="button"
                    className="btn btn-circle btn-ghost btn-sm"
                    aria-label="Llamada de voz"
                  >
                    <IconPhone size={17} />
                  </button>
                  <button
                    type="button"
                    className="btn btn-circle btn-ghost btn-sm"
                    aria-label="Videollamada"
                  >
                    <IconVideo size={17} />
                  </button>
                </div>
              </header>

              <div className="scrollbar-thin flex-1 space-y-3 overflow-y-auto p-4">
                {active.messages.map((m) => {
                  const mine = m.authorId === "me";
                  return (
                    <div
                      key={m.id}
                      className={cn("flex", mine ? "justify-end" : "justify-start")}
                    >
                      <div className="flex max-w-[75%] items-end gap-2">
                        {!mine && (
                          <Avatar
                            name={otherUser.name}
                            gradient={otherUser.gradient}
                            size="xs"
                          />
                        )}
                        <div>
                          {m.type === "file" ? (
                            <div
                              className={cn(
                                "flex items-center gap-3 rounded-2xl px-4 py-3",
                                mine
                                  ? "rounded-br-md bg-primary text-primary-content"
                                  : "rounded-bl-md bg-base-200",
                              )}
                            >
                              <IconFile size={20} />
                              <div>
                                <p className="text-sm font-semibold">{m.fileName}</p>
                                <p className="text-xs opacity-70">{m.fileSize}</p>
                              </div>
                            </div>
                          ) : (
                            <p
                              className={cn(
                                "rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                                mine
                                  ? "rounded-br-md bg-primary text-primary-content"
                                  : "rounded-bl-md bg-base-200",
                              )}
                            >
                              {m.content}
                            </p>
                          )}
                          <p className={cn("mt-1 text-[10px] text-base-content/40", mine && "text-right")}>
                            {m.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div ref={endRef} />
              </div>

              <form onSubmit={send} className="flex items-end gap-2 border-t border-base-300/70 p-3">
                <label className="btn btn-circle btn-ghost btn-sm" title="Adjuntar archivo">
                  <IconFile size={17} />
                  <input type="file" className="hidden" />
                </label>
                <label className="btn btn-circle btn-ghost btn-sm" title="Adjuntar imagen">
                  <IconImage size={17} />
                  <input type="file" accept="image/*" className="hidden" />
                </label>
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder={`Mensaje para @${otherUser.username}`}
                  className="input input-bordered input-sm flex-1 rounded-full"
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-sm rounded-full px-4"
                  disabled={!text.trim()}
                  aria-label="Enviar mensaje"
                >
                  <IconSend size={16} />
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center gap-3 p-10 text-center">
              <IconMessagePlaceholder />
              <p className="font-bold">Selecciona una conversación</p>
              <p className="text-sm text-base-content/60">
                Tus mensajes con estudiantes y docentes aparecerán aquí.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function IconMessagePlaceholder() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-30"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-9 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.2a8.5 8.5 0 0 1-1.9-5.3 8.38 8.38 0 0 1 9-8.5 8.38 8.38 0 0 1 9 8.5Z" />
    </svg>
  );
}
