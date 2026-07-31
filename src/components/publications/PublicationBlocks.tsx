import type { PublicationBlock } from "@/types";
import {
  IconAlertTriangle,
  IconCheck,
  IconCheckCircle,
  IconCode,
  IconDiagram,
  IconFormula,
  IconImage,
  IconInfo,
  IconPlay,
  IconQuote,
  IconXCircle,
} from "@/components/ui/icons";

function Alert({ variant, title, text }: { variant: string; title?: string; text: string }) {
  const styles: Record<string, { bg: string; text: string; icon: React.ReactNode }> = {
    info: { bg: "bg-info/10 border-info/30", text: "text-info", icon: <IconInfo size={18} /> },
    warning: {
      bg: "bg-warning/10 border-warning/30",
      text: "text-warning",
      icon: <IconAlertTriangle size={18} />,
    },
    success: {
      bg: "bg-success/10 border-success/30",
      text: "text-success",
      icon: <IconCheckCircle size={18} />,
    },
    error: { bg: "bg-error/10 border-error/30", text: "text-error", icon: <IconXCircle size={18} /> },
  };
  const style = styles[variant] ?? styles.info;
  return (
    <div className={`flex gap-3 rounded-box border p-4 ${style.bg}`}>
      <span className={`mt-0.5 shrink-0 ${style.text}`}>{style.icon}</span>
      <div className="text-sm leading-relaxed">
        {title && <p className="mb-0.5 font-bold">{title}</p>}
        <p className="text-base-content/85">{text}</p>
      </div>
    </div>
  );
}

export function PublicationBlocks({ blocks }: { blocks: PublicationBlock[] }) {
  return (
    <div className="flex flex-col gap-5 text-base leading-relaxed">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i} className="text-[17px] leading-8 text-base-content/90">
                {block.text}
              </p>
            );
          case "heading":
            return block.level === 2 ? (
              <h2
                key={i}
                className="mt-2 scroll-mt-24 text-2xl font-bold tracking-tight"
              >
                {block.text}
              </h2>
            ) : (
              <h3 key={i} className="mt-2 scroll-mt-24 text-xl font-bold tracking-tight">
                {block.text}
              </h3>
            );
          case "list":
            return block.ordered ? (
              <ol key={i} className="flex list-decimal flex-col gap-2 pl-6 marker:font-bold marker:text-primary">
                {block.items.map((item, j) => (
                  <li key={j} className="pl-1">
                    {item}
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="flex list-disc flex-col gap-2 pl-6 marker:text-primary">
                {block.items.map((item, j) => (
                  <li key={j} className="pl-1">
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "checklist":
            return (
              <ul key={i} className="flex flex-col gap-2 rounded-box border border-base-300/70 bg-base-200/40 p-4">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border ${
                        item.done
                          ? "border-success bg-success text-success-content"
                          : "border-base-300"
                      }`}
                    >
                      {item.done && <IconCheck size={13} />}
                    </span>
                    <span
                      className={`text-sm ${item.done ? "text-base-content/60 line-through" : ""}`}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "code":
            return (
              <div key={i} className="overflow-hidden rounded-box border border-base-300/70 bg-neutral text-neutral-content">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
                  <span className="flex gap-1.5">
                    <span className="size-2.5 rounded-full bg-error/70" />
                    <span className="size-2.5 rounded-full bg-warning/70" />
                    <span className="size-2.5 rounded-full bg-success/70" />
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide opacity-70">
                    <IconCode size={13} />
                    {block.language}
                  </span>
                </div>
                <pre className="scrollbar-thin overflow-x-auto p-4 text-[13px] leading-relaxed">
                  <code>{block.code}</code>
                </pre>
              </div>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="flex gap-3 rounded-r-box border-l-4 border-primary bg-primary/5 p-5"
              >
                <IconQuote size={22} className="mt-1 shrink-0 text-primary" />
                <div>
                  <p className="text-lg font-medium italic leading-relaxed">
                    {block.text}
                  </p>
                  {block.author && (
                    <cite className="mt-2 block text-sm not-italic text-base-content/60">
                      — {block.author}
                    </cite>
                  )}
                </div>
              </blockquote>
            );
          case "alert":
            return <Alert key={i} {...block} />;
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-box border border-base-300/70">
                <table className="table table-sm w-full">
                  <thead>
                    <tr>
                      {block.headers.map((header, j) => (
                        <th key={j} className="bg-base-200/70 font-bold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => (
                          <td key={k} className={k === 0 ? "font-semibold" : ""}>
                            {cell}
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
              <figure key={i}>
                <div
                  className="flex aspect-video items-center justify-center overflow-hidden rounded-box bg-gradient-to-br"
                  style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1, #d946ef)" }}
                >
                  <span className="flex flex-col items-center gap-2 text-white/80">
                    <IconImage size={36} />
                    <span className="text-xs">Imagen ilustrativa</span>
                  </span>
                </div>
                {block.caption && (
                  <figcaption className="mt-2 text-center text-xs text-base-content/50">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          case "video":
            return (
              <figure key={i} className="overflow-hidden rounded-box">
                <div className="relative flex aspect-video items-center justify-center bg-neutral text-neutral-content">
                  <button
                    type="button"
                    aria-label="Reproducir video"
                    className="btn btn-circle btn-lg border-0 bg-primary/90 text-primary-content shadow-lg transition-transform hover:scale-105"
                  >
                    <IconPlay size={28} />
                  </button>
                  <span className="absolute right-3 top-3 rounded-full bg-black/40 px-2 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                    {block.duration}
                  </span>
                </div>
                <figcaption className="bg-neutral px-4 py-3 text-sm font-medium text-neutral-content">
                  {block.title}
                </figcaption>
              </figure>
            );
          case "diagram":
            return (
              <div key={i} className="rounded-box border border-base-300/70 bg-base-200/40 p-5">
                <p className="mb-4 flex items-center gap-2 text-sm font-bold">
                  <IconDiagram size={17} className="text-primary" />
                  {block.title}
                </p>
                <div className="flex flex-col gap-2">
                  {block.nodes.map((node, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-content">
                        {j + 1}
                      </span>
                      <span className="rounded-lg border border-base-300/70 bg-base-100 px-4 py-2 text-sm">
                        {node}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          case "math":
            return (
              <div
                key={i}
                className="flex items-center gap-3 rounded-box border border-base-300/70 bg-base-200/40 p-4"
              >
                <IconFormula size={20} className="shrink-0 text-primary" />
                <span className="overflow-x-auto whitespace-nowrap font-mono text-lg">
                  {block.formula}
                </span>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
