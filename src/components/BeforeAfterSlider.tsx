import { useCallback, useRef, useState } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  /** Alt-Texte für Barrierefreiheit */
  beforeAlt?: string;
  afterAlt?: string;
  /** Startposition des Reglers in Prozent (0–100), Standard 50 */
  initialPosition?: number;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Vorher",
  afterAlt = "Nachher",
  initialPosition = 50,
  className = "",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(initialPosition);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setDragging(true);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    updateFromClientX(e.clientX);
  };

  const endDrag = () => setDragging(false);

  return (
    <div
      ref={containerRef}
      className={`group relative select-none overflow-hidden rounded-[16px] shadow-lg shadow-black/30 ${className}`}
      style={{ touchAction: "pan-y" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
    >
      {/* Vorher-Bild (volle Größe) */}
      <img
        src={beforeImage}
        alt={beforeAlt}
        draggable={false}
        className="block h-auto w-full"
      />

      {/* Nachher-Bild, rechts vom Regler freigegeben */}
      <img
        src={afterImage}
        alt={afterAlt}
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      />

      {/* Vertikale Trennlinie + runder Griff */}
      <div
        className="pointer-events-none absolute inset-y-0"
        style={{ left: `${position}%` }}
      >
        <div className="absolute inset-y-0 -left-px w-0.5 bg-white/70" />
        <div
          className={`absolute top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[#ff7a00] shadow-lg shadow-black/40 transition-transform ${
            dragging ? "scale-110" : "group-hover:scale-105"
          }`}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center gap-1 text-sm font-bold text-white"
          >
            <span className="-ml-0.5">‹</span>
            <span className="-mr-0.5">›</span>
          </span>
        </div>
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
        Vorher
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
        Nachher
      </span>
    </div>
  );
}
