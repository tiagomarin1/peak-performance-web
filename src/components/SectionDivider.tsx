export default function SectionDivider({
  variant = "line",
}: {
  variant?: "line" | "fade";
}) {
  const peak = "rgba(var(--peak),0.34)"; // un toque más
  const white = "rgba(255,255,255,0.12)";

  if (variant === "fade") {
    return (
      <div aria-hidden className="relative h-12 w-full">
        <div
          className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2"
          style={{
            background: `linear-gradient(90deg, transparent, ${peak}, ${white}, ${peak}, transparent)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.22), rgba(0,0,0,0.0))",
          }}
        />
        {/* glow */}
        <div
          className="absolute left-1/2 top-1/2 h-10 w-[min(780px,86vw)] -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-35"
          style={{
            background: `radial-gradient(closest-side, ${peak}, transparent)`,
          }}
        />
      </div>
    );
  }

  return (
    <div aria-hidden className="relative h-10 w-full">
      <div
        className="absolute left-1/2 top-1/2 h-px w-[min(1100px,92vw)] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: `linear-gradient(90deg, transparent, ${white}, ${peak}, ${white}, transparent)`,
        }}
      />
      {/* glow sutil */}
      <div
        className="absolute left-1/2 top-1/2 h-10 w-[min(760px,86vw)] -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-25"
        style={{
          background: `radial-gradient(closest-side, ${peak}, transparent)`,
        }}
      />
    </div>
  );
}
