"use client";

import { useEffect, useState } from "react";

type Props = {
  bpm?: number;
  colorHex?: string;
  className?: string;
};

const GREEN_FALLBACK = "#00E676";

export default function LivePulseBackground({
  bpm = 25,
  colorHex = GREEN_FALLBACK,
  className = "",
}: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Timing
  const periodMs = Math.max(400, Math.floor(60000 / bpm));

  // Geometry
  const baseR = 150;
  const targetR = 350;

  return (
    <div
      className={`absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden ${className}`}
    >
      <style jsx>{`
        @keyframes auraPulse {
          0%, 100% {
            transform: scale(1);
          }
          10% {
            transform: scale(1.08);
          }
          40% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.06);
          }
          80% {
            transform: scale(1);
          }
        }

        @keyframes rippleExpand {
          0% {
            transform: scale(1);
            opacity: 0;
          }
          5% {
            opacity: 0.4;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        .aura {
          width: ${baseR * 2}px;
          height: ${baseR * 2}px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            ${colorHex}B3 0%,
            ${colorHex}47 40%,
            ${colorHex}0D 70%,
            transparent 100%
          );
          animation: auraPulse ${periodMs}ms ease-in-out infinite;
        }

        .ripple {
          position: absolute;
          width: ${baseR * 2}px;
          height: ${baseR * 2}px;
          border-radius: 50%;
          border: 3px solid ${colorHex};
          opacity: 0;
          animation: rippleExpand ${periodMs}ms ease-out infinite;
        }

        .ripple-1 {
          animation-delay: 0ms;
        }

        .ripple-2 {
          animation-delay: ${Math.floor(periodMs * 0.3)}ms;
        }
      `}</style>

      {/* Container for centered elements */}
      <div className="relative flex items-center justify-center">
        {/* Aura (pulsing glow) */}
        <div className="aura" />

        {/* Ripple waves */}
        <div className="ripple ripple-1" />
        <div className="ripple ripple-2" />
      </div>
    </div>
  );
}
