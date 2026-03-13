export default function BackgroundFX() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-50 isolate overflow-hidden bg-black"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_620px_at_50%_-12%,rgba(var(--peak),0.24),transparent_66%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_8%_90%,rgba(var(--peak-light),0.18),transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(780px_520px_at_92%_32%,rgba(var(--peak),0.16),transparent_64%)]" />
      </div>

      {/* noise */}
      <div className="peak-noise absolute inset-0 opacity-[0.085]" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(0,0,0,0.62)_78%,rgba(0,0,0,0.88)_100%)]" />
    </div>
  );
}
