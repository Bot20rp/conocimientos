"use client";

import { useState } from "react";
import {
  IconBookmark,
  IconCheck,
  IconCopy,
  IconFlag,
  IconShare,
  IconTrash,
} from "@/components/ui/icons";

export function FloatingActions({
  favorites,
  slug,
}: {
  favorites: number;
  slug: string;
}) {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [reported, setReported] = useState(false);

  function copyLink() {
    const url = `${window.location.origin}/publication/${slug}`;
    navigator.clipboard?.writeText(url).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function report() {
    setReported(true);
    setTimeout(() => setReported(false), 3000);
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {reported && (
        <div className="animate-scale-in rounded-full border border-success/40 bg-success px-4 py-2 text-sm font-semibold text-success-content shadow-lg">
          Gracias, recibimos tu reporte.
        </div>
      )}
      <div className="glass sticky bottom-4 z-30 mx-auto flex w-fit items-center gap-1 rounded-full border border-base-300/70 px-2 py-1.5 shadow-xl">
        <button
          type="button"
          onClick={() => navigator.share?.({ title: document.title }).catch(() => {})}
          className="btn btn-ghost btn-sm rounded-full"
          title="Compartir"
        >
          <IconShare size={17} />
          <span className="hidden sm:inline">Compartir</span>
        </button>
        <button
          type="button"
          onClick={() => setSaved((v) => !v)}
          className={`btn btn-ghost btn-sm rounded-full ${saved ? "text-primary" : ""}`}
          title="Guardar"
        >
          <IconBookmark size={17} />
          {saved ? "Guardado" : "Guardar"}
          <span className="hidden text-xs opacity-60 sm:inline">{favorites}</span>
        </button>
        <button
          type="button"
          onClick={copyLink}
          className={`btn btn-ghost btn-sm rounded-full ${copied ? "text-success" : ""}`}
          title="Copiar enlace"
        >
          {copied ? <IconCheck size={17} /> : <IconCopy size={17} />}
          <span className="hidden sm:inline">{copied ? "Copiado" : "Copiar enlace"}</span>
        </button>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm rounded-full">
            <IconFlag size={17} />
            <span className="hidden sm:inline">Reportar</span>
          </div>
          <ul className="dropdown-content menu z-50 mt-2 w-56 rounded-box border border-base-300 bg-base-100 p-2 shadow-xl">
            <li className="menu-title">¿Qué quieres reportar?</li>
            <li>
              <button type="button" onClick={report}>
                <IconTrash size={16} />
                Contenido inapropiado
              </button>
            </li>
            <li>
              <button type="button" onClick={report}>
                <IconCopy size={16} />
                Plagio o copyright
              </button>
            </li>
            <li>
              <button type="button" onClick={report}>
                <IconFlag size={16} />
                Spam
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
