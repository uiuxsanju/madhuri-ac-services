export default function Loading() {
  return (
    <div className="container-page section" role="status" aria-live="polite">
      <span className="sr-only">Loading…</span>
      <div className="h-8 w-2/3 max-w-md animate-pulse rounded-lg bg-line" />
      <div className="mt-4 h-4 w-full max-w-2xl animate-pulse rounded bg-line" />
      <div className="mt-2 h-4 w-5/6 max-w-xl animate-pulse rounded bg-line" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-64 animate-pulse rounded-2xl bg-surface" />
        ))}
      </div>
    </div>
  );
}
