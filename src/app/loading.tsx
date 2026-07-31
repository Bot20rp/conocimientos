export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-4 sm:px-6">
      <div className="flex w-full max-w-md flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-primary" />
        <div className="w-full space-y-3">
          <div className="skeleton h-8 w-3/4 rounded-full" />
          <div className="skeleton h-4 w-full rounded-full" />
          <div className="skeleton h-4 w-5/6 rounded-full" />
          <div className="skeleton h-24 w-full rounded-2xl" />
        </div>
        <p className="text-sm opacity-50">Cargando tu contenido...</p>
      </div>
    </div>
  );
}
