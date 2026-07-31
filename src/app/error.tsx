"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-error/10 text-error">
          <svg
            width={40}
            height={40}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
        </div>
        <h1 className="mt-6 text-2xl font-bold">Algo salió mal</h1>
        <p className="mt-2 opacity-60">
          Ocurrió un error inesperado al cargar esta página. Inténtalo de nuevo.
        </p>
        {error.digest && (
          <p className="mt-2 text-xs opacity-40">Código: {error.digest}</p>
        )}
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => unstable_retry()} className="btn btn-primary rounded-full">
            Reintentar
          </button>
          <Link href="/" className="btn btn-outline rounded-full">
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
