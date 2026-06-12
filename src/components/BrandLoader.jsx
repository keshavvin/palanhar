import { useState } from 'react';

/**
 * Animated brand loader. Shows the Palanhar mother-cow-and-calf logo
 * (public/cow-loader.png) with a gentle breathing pulse inside a rotating
 * gradient arc. Falls back to an inline SVG mark if the image is missing.
 * Honours prefers-reduced-motion.
 */

const styles = `
  @keyframes plb-rot { to { transform: rotate(360deg); } }
  @keyframes plb-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.04); }
  }
  @keyframes plb-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }
  .plb-rot-a, .plb-rot-b { transform-origin: 100px 100px; }
  .plb-rot-a { animation: plb-rot 1.6s linear infinite; }
  .plb-rot-b { animation: plb-rot 2.4s linear infinite; }
  .plb-pulse { animation: plb-pulse 2.6s ease-in-out infinite; }
  .plb-pulse-svg { transform-origin: 100px 110px; animation: plb-pulse 2.6s ease-in-out infinite; }
  .plb-float { animation: plb-float 2s ease-in-out infinite; }
  @media (prefers-reduced-motion: reduce) {
    .plb-rot-a, .plb-rot-b, .plb-pulse, .plb-pulse-svg, .plb-float { animation: none; }
  }
`;

function SpinnerRing() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="plb-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2E7D32" />
          <stop offset="100%" stopColor="#81C784" />
        </linearGradient>
      </defs>
      <circle
        className="plb-rot-a"
        cx="100"
        cy="100"
        r="96"
        stroke="url(#plb-grad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="150 453"
      />
      <circle
        className="plb-rot-b"
        cx="100"
        cy="100"
        r="96"
        stroke="#F9A825"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="40 563"
        strokeDashoffset="-300"
        opacity="0.9"
      />
    </svg>
  );
}

function FallbackMark() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="84" stroke="#81C784" strokeOpacity="0.25" strokeWidth="6" />
      <g className="plb-float">
        <path d="M103 86 q-6 -8 0 -14 q6 6 0 14 z" fill="#F9A825" />
      </g>
      <g className="plb-pulse-svg">
        <g fill="#1B5E20">
          <path d="M31 92 q-7 2 -6 14 q0 6 5 9" stroke="#1B5E20" strokeWidth="4" strokeLinecap="round" fill="none" />
          <rect x="30" y="84" width="58" height="36" rx="17" />
          <ellipse cx="85" cy="87" rx="6" ry="3.5" transform="rotate(-35 85 87)" />
          <circle cx="92" cy="100" r="13" />
          <ellipse cx="101" cy="106" rx="7.5" ry="6" />
          <rect x="37" y="116" width="8" height="20" rx="4" />
          <rect x="72" y="116" width="8" height="20" rx="4" />
        </g>
        <circle cx="94" cy="96" r="1.8" fill="#FFFDF5" />
        <g fill="#2E7D32">
          <path d="M161 106 q6 2 5 12" stroke="#2E7D32" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <rect x="120" y="100" width="42" height="27" rx="13" />
          <ellipse cx="122" cy="103" rx="4.5" ry="2.8" transform="rotate(30 122 103)" />
          <circle cx="117" cy="111" r="9.5" />
          <ellipse cx="110" cy="114" rx="5.5" ry="4.5" />
          <rect x="126" y="122" width="6" height="15" rx="3" />
          <rect x="150" y="122" width="6" height="15" rx="3" />
        </g>
        <circle cx="115" cy="108" r="1.4" fill="#FFFDF5" />
        <path d="M40 140 Q100 150 160 140" stroke="#81C784" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      </g>
    </svg>
  );
}

export default function BrandLoader({ size = 120, label = 'Loading…', showWordmark = false }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3" role="status" aria-label={label}>
      <style>{styles}</style>
      <div className="relative" style={{ width: size, height: size }}>
        <SpinnerRing />
        {imageFailed ? (
          <FallbackMark />
        ) : (
          <img
            src="/cow-loader.png"
            alt=""
            onError={() => setImageFailed(true)}
            className="plb-pulse absolute inset-[7%] h-[86%] w-[86%] select-none object-contain"
            draggable="false"
          />
        )}
      </div>
      {showWordmark && (
        <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-dark-green">
          Palanhar
        </span>
      )}
      <span className="sr-only">{label}</span>
    </div>
  );
}
