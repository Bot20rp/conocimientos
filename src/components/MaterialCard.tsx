import type { Material, MaterialType } from "@/types";
import { formatNumber } from "@/lib/utils";
import { getUserById } from "@/lib/data/users";
import { Avatar } from "@/components/ui/Avatar";
import {
  IconDownload,
  IconFile,
  IconLink,
  IconVideo,
} from "@/components/ui/icons";

const typeMeta: Record<
  MaterialType,
  { label: string; badge: string; Icon: typeof IconFile }
> = {
  pdf: { label: "PDF", badge: "badge-error", Icon: IconFile },
  slides: { label: "Diapositivas", badge: "badge-warning", Icon: IconFile },
  video: { label: "Video", badge: "badge-info", Icon: IconVideo },
  doc: { label: "Documento", badge: "badge-success", Icon: IconFile },
  link: { label: "Enlace", badge: "badge-secondary", Icon: IconLink },
};

export function MaterialCard({ material }: { material: Material }) {
  const meta = typeMeta[material.type];
  const uploader = getUserById(material.uploadedById);
  return (
    <div className="flex flex-col gap-3 rounded-box border border-base-300/70 bg-base-100 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-center">
      <div
        className={`flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${uploader.gradient} text-white`}
      >
        <meta.Icon size={22} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="text-sm font-semibold">{material.title}</h4>
          <span className={`badge border-0 ${meta.badge} badge-sm`}>{meta.label}</span>
        </div>
        <p className="mt-0.5 line-clamp-1 text-xs opacity-60">
          {material.description}
        </p>
        <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs opacity-60">
          <span>{material.subject}</span>
          <span>·</span>
          <span>{material.size}</span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <IconDownload size={12} /> {formatNumber(material.downloads)}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-base-300/60 pt-3 sm:flex-col sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
        <div className="flex items-center gap-2">
          <Avatar name={uploader.name} gradient={uploader.gradient} size="xs" />
          <div className="leading-tight">
            <p className="text-xs font-medium">{uploader.name}</p>
            <p className="text-[11px] opacity-50">{material.uploadedAt}</p>
          </div>
        </div>
        <button className="btn btn-sm btn-outline btn-primary rounded-full">
          {material.type === "link" ? "Abrir" : "Descargar"}
        </button>
      </div>
    </div>
  );
}
