"use client";

import { useState } from "react";
import type { PublicationBlock } from "@/types";
import { categories } from "@/lib/data";
import { PublicationBlocks } from "@/components/publications/PublicationBlocks";
import { Avatar } from "@/components/ui/Avatar";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import {
  IconBold,
  IconCheck,
  IconEye,
  IconFormula,
  IconGrip,
  IconHeading,
  IconImage,
  IconItalic,
  IconLink,
  IconList,
  IconPlay,
  IconPlus,
  IconQuote,
  IconTable,
  IconTerminal,
  IconTrash,
  IconUpload,
} from "@/components/ui/icons";
import { cn, gradientOf } from "@/lib/utils";

const coverOptions = [
  "from-sky-500 via-blue-600 to-indigo-600",
  "from-violet-500 via-purple-600 to-fuchsia-600",
  "from-indigo-500 via-violet-600 to-purple-600",
  "from-teal-500 via-emerald-600 to-green-600",
  "from-rose-500 via-red-600 to-orange-600",
  "from-amber-500 via-orange-600 to-rose-600",
];

type Addable =
  | "paragraph"
  | "heading"
  | "list"
  | "checklist"
  | "code"
  | "quote"
  | "alert"
  | "table"
  | "image"
  | "video"
  | "diagram"
  | "math";

const addableBlocks: { key: Addable; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
  { key: "paragraph", label: "Texto", icon: IconItalic },
  { key: "heading", label: "Título", icon: IconHeading },
  { key: "list", label: "Lista", icon: IconList },
  { key: "checklist", label: "Checklist", icon: IconCheck },
  { key: "code", label: "Código", icon: IconTerminal },
  { key: "quote", label: "Cita", icon: IconQuote },
  { key: "alert", label: "Alerta", icon: IconBold },
  { key: "table", label: "Tabla", icon: IconTable },
  { key: "image", label: "Imagen", icon: IconImage },
  { key: "video", label: "Video", icon: IconPlay },
  { key: "diagram", label: "Diagrama", icon: IconFormula },
  { key: "math", label: "Fórmula", icon: IconFormula },
];

function emptyBlock(type: Addable): PublicationBlock {
  switch (type) {
    case "heading":
      return { type: "heading", level: 2, text: "Nuevo título" };
    case "list":
      return { type: "list", ordered: false, items: ["Nuevo elemento"] };
    case "checklist":
      return { type: "checklist", items: [{ text: "Tarea pendiente", done: false }] };
    case "code":
      return { type: "code", language: "python", code: "# tu código aquí" };
    case "quote":
      return { type: "quote", text: "Una frase memorable..." };
    case "alert":
      return { type: "alert", variant: "info", title: "Consejo", text: "Texto de la alerta" };
    case "table":
      return { type: "table", headers: ["Columna A", "Columna B"], rows: [["", ""]] };
    case "image":
      return { type: "image", caption: "Descripción de la imagen" };
    case "video":
      return { type: "video", title: "Título del video", duration: "12:30" };
    case "diagram":
      return { type: "diagram", title: "Flujo del proceso", nodes: ["Paso 1", "Paso 2", "Paso 3"] };
    case "math":
      return { type: "math", formula: "E = m·c²" };
    default:
      return { type: "paragraph", text: "Escribe un párrafo..." };
  }
}

function BlockEditor({
  block,
  onChange,
  onDelete,
  onMove,
  index,
}: {
  block: PublicationBlock;
  onChange: (block: PublicationBlock) => void;
  onDelete: () => void;
  onMove: (dir: -1 | 1) => void;
  index: number;
}) {
  const inputClass =
    "w-full rounded-lg border border-base-300/60 bg-transparent px-3 py-2 text-sm outline-none focus:border-primary/60";

  function render() {
    switch (block.type) {
      case "paragraph":
        return (
          <textarea
            value={block.text}
            onChange={(e) => onChange({ ...block, text: e.target.value })}
            className={cn(inputClass, "min-h-14 resize-y leading-relaxed")}
          />
        );
      case "heading":
        return (
          <input
            value={block.text}
            onChange={(e) => onChange({ ...block, text: e.target.value })}
            className={cn(inputClass, block.level === 2 ? "text-xl font-bold" : "text-base font-semibold")}
          />
        );
      case "list":
        return (
          <div className="flex flex-col gap-2">
            {block.items.map((item, i) => (
              <input
                key={i}
                value={item}
                onChange={(e) => {
                  const items = [...block.items];
                  items[i] = e.target.value;
                  onChange({ ...block, items });
                }}
                className={cn(inputClass, "rounded-full")}
              />
            ))}
          </div>
        );
      case "checklist":
        return (
          <div className="flex flex-col gap-2">
            {block.items.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={(e) => {
                    const items = [...block.items];
                    items[i] = { ...item, done: e.target.checked };
                    onChange({ ...block, items });
                  }}
                  className="checkbox checkbox-sm"
                />
                <input
                  value={item.text}
                  onChange={(e) => {
                    const items = [...block.items];
                    items[i] = { ...item, text: e.target.value };
                    onChange({ ...block, items });
                  }}
                  className={cn(inputClass, "rounded-full")}
                />
              </div>
            ))}
          </div>
        );
      case "code":
        return (
          <div className="overflow-hidden rounded-lg border border-base-300/60">
            <div className="flex items-center justify-between border-b border-base-300/60 bg-base-200/60 px-3 py-1.5">
              <span className="flex items-center gap-1.5 text-xs font-medium text-base-content/60">
                <IconTerminal size={13} />
                {block.language}
              </span>
              <select
                value={block.language}
                onChange={(e) => onChange({ ...block, language: e.target.value })}
                className="select select-xs border-0 bg-transparent text-xs"
              >
                {["python", "javascript", "typescript", "sql", "html", "css", "bash", "json"].map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </div>
            <textarea
              value={block.code}
              onChange={(e) => onChange({ ...block, code: e.target.value })}
              spellCheck={false}
              className="min-h-24 w-full bg-base-100 p-3 font-mono text-[13px] outline-none"
            />
          </div>
        );
      case "quote":
        return (
          <textarea
            value={block.text}
            onChange={(e) => onChange({ ...block, text: e.target.value })}
            className={cn(inputClass, "border-l-4 border-l-primary text-base italic")}
          />
        );
      case "alert":
        return (
          <div className="flex gap-2">
            <select
              value={block.variant}
              onChange={(e) =>
                onChange({ ...block, variant: e.target.value as "info" | "warning" | "success" | "error" })
              }
              className="select select-sm select-bordered rounded-full"
            >
              {["info", "warning", "success", "error"].map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
            <input
              value={block.title}
              onChange={(e) => onChange({ ...block, title: e.target.value })}
              placeholder="Título"
              className={cn(inputClass, "w-40 rounded-full")}
            />
            <textarea
              value={block.text}
              onChange={(e) => onChange({ ...block, text: e.target.value })}
              className={cn(inputClass, "min-h-12")}
            />
          </div>
        );
      case "table":
        return (
          <div className="overflow-x-auto">
            <table className="table table-sm">
              <thead>
                <tr>
                  {block.headers.map((h, i) => (
                    <th key={i}>
                      <input
                        value={h}
                        onChange={(e) => {
                          const headers = [...block.headers];
                          headers[i] = e.target.value;
                          onChange({ ...block, headers });
                        }}
                        className="w-full bg-transparent font-semibold outline-none"
                      />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, r) => (
                  <tr key={r}>
                    {row.map((cell, c) => (
                      <td key={c}>
                        <input
                          value={cell}
                          onChange={(e) => {
                            const rows = block.rows.map((r2, i2) =>
                              i2 === r ? r2.map((v, i3) => (i3 === c ? e.target.value : v)) : r2,
                            );
                            onChange({ ...block, rows });
                          }}
                          className="w-full bg-transparent outline-none"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "image":
        return (
          <div className="flex items-center gap-2">
            <div
              className="flex h-24 w-40 items-center justify-center rounded-lg bg-gradient-to-br text-white/80"
              style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1, #d946ef)" }}
            >
              <IconImage size={24} />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label className="btn btn-sm btn-outline justify-start rounded-full">
                <IconUpload size={14} />
                Subir imagen
                <input type="file" accept="image/*" className="hidden" />
              </label>
              <input
                value={block.caption}
                onChange={(e) => onChange({ ...block, caption: e.target.value })}
                placeholder="Pie de foto"
                className={cn(inputClass, "rounded-full")}
              />
            </div>
          </div>
        );
      case "video":
        return (
          <div className="flex gap-2">
            <div className="flex h-24 w-40 items-center justify-center rounded-lg bg-neutral text-neutral-content">
              <IconPlay size={26} />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <input
                value={block.title}
                onChange={(e) => onChange({ ...block, title: e.target.value })}
                className={cn(inputClass, "rounded-full")}
              />
              <label className="btn btn-sm btn-outline justify-start rounded-full">
                <IconLink size={14} />
                Pegar URL del video
                <input type="text" className="hidden" />
              </label>
            </div>
          </div>
        );
      case "diagram":
        return (
          <div className="flex flex-col gap-2">
            <input
              value={block.title}
              onChange={(e) => onChange({ ...block, title: e.target.value })}
              className={cn(inputClass, "rounded-full")}
            />
            {block.nodes.map((node, i) => (
              <input
                key={i}
                value={node}
                onChange={(e) => {
                  const nodes = [...block.nodes];
                  nodes[i] = e.target.value;
                  onChange({ ...block, nodes });
                }}
                className={cn(inputClass, "rounded-full")}
              />
            ))}
          </div>
        );
      case "math":
        return (
          <input
            value={block.formula}
            onChange={(e) => onChange({ ...block, formula: e.target.value })}
            className={cn(inputClass, "font-mono text-base")}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className="group relative flex gap-2 rounded-xl p-1.5 transition-colors hover:bg-base-200/50">
      <div className="flex flex-col items-center justify-center gap-0.5 opacity-0 transition-opacity group-hover:opacity-100">
        <button
          type="button"
          onClick={() => onMove(-1)}
          disabled={index === 0}
          className="btn btn-circle btn-ghost btn-xs"
          aria-label="Mover arriba"
        >
          <IconChevronUp />
        </button>
        <IconGrip size={14} className="text-base-content/40" />
        <button
          type="button"
          onClick={() => onMove(1)}
          className="btn btn-circle btn-ghost btn-xs"
          aria-label="Mover abajo"
        >
          <IconChevronDown />
        </button>
      </div>
      <div className="min-w-0 flex-1">{render()}</div>
      <button
        type="button"
        onClick={onDelete}
        className="absolute -right-2 -top-2 btn btn-circle btn-ghost btn-xs hidden bg-base-100 opacity-0 shadow group-hover:opacity-100 sm:inline-flex"
        aria-label="Eliminar bloque"
      >
        <IconTrash size={13} />
      </button>
    </div>
  );
}

function IconChevronUp() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

function IconChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function Editor() {
  const [blocks, setBlocks] = useState<PublicationBlock[]>([
    { type: "paragraph", text: "Empieza escribiendo aquí..." },
  ]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [category, setCategory] = useState(categories[0].id);
  const [tags, setTags] = useState("");
  const [cover, setCover] = useState(coverOptions[0]);
  const [difficulty, setDifficulty] = useState("Principiante");
  const [mode, setMode] = useState<"write" | "preview">("write");
  const [published, setPublished] = useState(false);
  const currentUser = {
    name: "Valentina Ríos",
    gradient: "from-violet-500 to-fuchsia-500",
    headline: "Estudiante · Apasionada por el desarrollo de software",
  };

  function updateBlock(index: number, block: PublicationBlock) {
    setBlocks((prev) => prev.map((b, i) => (i === index ? block : b)));
  }

  function moveBlock(index: number, dir: -1 | 1) {
    setBlocks((prev) => {
      const next = [...prev];
      const target = index + dir;
      if (target < 0 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  function addBlock(type: Addable) {
    setBlocks((prev) => [...prev, emptyBlock(type)]);
  }

  function publish() {
    setPublished(true);
    setTimeout(() => setPublished(false), 3000);
  }

  return (
    <div className="animate-fade-in">
      {published && (
        <div className="fixed inset-x-0 top-20 z-50 flex justify-center">
          <div className="animate-scale-in flex items-center gap-2 rounded-full border border-success/40 bg-success px-4 py-2 text-sm font-semibold text-success-content shadow-xl">
            <IconCheck size={16} />
            ¡Publicación creada! (demo)
          </div>
        </div>
      )}

      <div className="sticky top-16 z-30 border-b border-base-300/60 bg-base-100/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-3 sm:px-6">
          <div className="join rounded-full border border-base-300/70">
            <button
              type="button"
              onClick={() => setMode("write")}
              className={cn("join-item btn btn-sm", mode === "write" ? "btn-primary" : "btn-ghost")}
            >
              <IconBold size={15} />
              Escribir
            </button>
            <button
              type="button"
              onClick={() => setMode("preview")}
              className={cn("join-item btn btn-sm", mode === "preview" ? "btn-primary" : "btn-ghost")}
            >
              <IconEye size={15} />
              Vista previa
            </button>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button type="button" className="btn btn-ghost btn-sm rounded-full">
              Guardar borrador
            </button>
            <button
              type="button"
              onClick={publish}
              className="btn btn-primary btn-sm rounded-full px-6"
            >
              <IconCheck size={15} />
              Publicar
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_300px]">
        <div>
          <button
            type="button"
            onClick={() => setCover(coverOptions[(coverOptions.indexOf(cover) + 1) % coverOptions.length])}
            className="group relative mb-6 flex h-40 w-full items-end overflow-hidden rounded-box p-5 text-white"
            style={{ background: gradientOf(cover) }}
          >
            <div className="absolute inset-0 bg-grid text-white/15" aria-hidden />
            <span className="relative flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm">
              <IconImage size={14} />
              Cambiar portada
            </span>
          </button>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título de tu publicación..."
            className="w-full border-0 bg-transparent text-3xl font-extrabold tracking-tight outline-none placeholder:text-base-content/30 sm:text-4xl"
          />

          {mode === "write" ? (
            <div className="mt-6 flex flex-col gap-3">
              {blocks.map((block, i) => (
                <BlockEditor
                  key={i}
                  index={i}
                  block={block}
                  onChange={(b) => updateBlock(i, b)}
                  onDelete={() => setBlocks((prev) => prev.filter((_, j) => j !== i))}
                  onMove={(dir) => moveBlock(i, dir)}
                />
              ))}

              <div className="dropdown mt-2">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-sm rounded-full border border-dashed border-base-300">
                  <IconPlus size={15} />
                  Añadir bloque
                </div>
                <ul className="dropdown-content menu z-40 mt-2 grid w-72 grid-cols-2 gap-1 rounded-box border border-base-300 bg-base-100 p-2 shadow-2xl">
                  {addableBlocks.map(({ key, label, icon: Icon }) => (
                    <li key={key}>
                      <button type="button" onClick={() => addBlock(key)}>
                        <Icon size={16} />
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="mt-6">
              <article className="rounded-box border border-base-300/70 bg-base-100 p-6 sm:p-8">
                <span className="badge badge-ghost">{category}</span>
                <h2 className="mt-3 text-2xl font-bold">
                  {title || "Título de la publicación"}
                </h2>
                <p className="mb-6 border-l-4 border-primary bg-base-200/40 p-3 text-base italic text-base-content/80">
                  {summary || "Resumen de tu publicación..."}
                </p>
                <PublicationBlocks blocks={blocks} />
              </article>
            </div>
          )}
        </div>

        <aside className="flex flex-col gap-4 lg:sticky lg:top-36 lg:self-start">
          <section className="rounded-box border border-base-300/70 bg-base-100 p-4">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-base-content/70">
              Configuración
            </h3>
            <div className="flex flex-col gap-3">
              <label className="flex flex-col gap-1 text-xs font-medium text-base-content/70">
                Categoría
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="select select-bordered select-sm rounded-full"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1 text-xs font-medium text-base-content/70">
                Etiquetas (separadas por comas)
                <input
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="python, tutorial"
                  className="input input-bordered input-sm rounded-full"
                />
              </label>
              <label className="flex flex-col gap-1 text-xs font-medium text-base-content/70">
                Dificultad
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="select select-bordered select-sm rounded-full"
                >
                  {["Principiante", "Intermedio", "Avanzado"].map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1 text-xs font-medium text-base-content/70">
                Resumen
                <textarea
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder="Un resumen breve y atractivo..."
                  rows={3}
                  className="textarea textarea-bordered textarea-sm resize-none rounded-2xl"
                />
              </label>
            </div>
          </section>

          <section className="rounded-box border border-base-300/70 bg-base-100 p-4">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-base-content/70">
              Portada
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {coverOptions.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCover(c)}
                  className={cn(
                    "h-14 rounded-lg ring-2 ring-offset-2 ring-offset-base-100 transition-all",
                    cover === c ? "ring-primary" : "ring-transparent hover:ring-base-300",
                  )}
                  style={{ background: gradientOf(c) }}
                  aria-label="Elegir portada"
                />
              ))}
            </div>
          </section>

          <section className="rounded-box border border-base-300/70 bg-base-100 p-4">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-base-content/70">
              Autor
            </h3>
            <div className="flex items-center gap-3">
              <Avatar name={currentUser.name} gradient={currentUser.gradient} size="md" />
              <div>
                <p className="text-sm font-semibold">{currentUser.name}</p>
                <p className="text-xs text-base-content/60">{currentUser.headline}</p>
              </div>
            </div>
          </section>

          <section className="flex items-start gap-3 rounded-box border border-base-300/70 bg-base-200/50 p-4 text-xs text-base-content/70">
            <CategoryIcon name="book" size={16} className="mt-0.5 shrink-0 text-primary" />
            <p>
              Tu borrador se guarda automáticamente. Solo tú puedes verlo hasta
              que pulses Publicar.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
