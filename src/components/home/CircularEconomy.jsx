import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Radial cow-based circular-economy diagram. The 1000×760 stage scales to fit
// width on tablet/desktop; phones get a clean stacked layout.
const CENTER = { x: 500, y: 400 };

const NODES = [
  { x: 500, y: 96, sx: 500, sy: 150, title: 'Milk', sub: 'दूध · dairy products', emoji: '🥛', type: 'rev' },
  { x: 760, y: 210, sx: 730, sy: 232, title: 'Organic Fertilizer', sub: 'जैविक खाद · from cow dung', emoji: '🌱', type: 'rev' },
  { x: 838, y: 400, sx: 818, sy: 400, title: 'Bio-Pesticides', sub: 'जैव कीटनाशक · from cow urine', emoji: '🧪', type: 'rev' },
  { x: 700, y: 632, sx: 690, sy: 612, title: 'Bio-Paint', sub: 'प्राकृतिक रंग · dung-based coating', emoji: '🎨', type: 'rev' },
  { x: 300, y: 632, sx: 310, sy: 612, title: 'Compressed Biogas', sub: 'CBG · from cow waste', emoji: '🛢️', type: 'rev' },
  { x: 162, y: 400, sx: 182, sy: 400, title: 'Processing', sub: 'प्रसंस्करण · & manufacturing', emoji: '🏭', type: 'plat' },
  { x: 240, y: 210, sx: 270, sy: 232, title: 'E-Commerce', sub: 'D2C sales platform', emoji: '🛒', type: 'plat' },
];

const REV_STYLE = { background: 'linear-gradient(180deg,#fffdf6,#fdf3dd)', border: '1.5px solid #f0d493' };
const PLAT_STYLE = { background: 'linear-gradient(180deg,#f4faf2,#e7f2e4)', border: '1.5px solid #bcd9b6' };

function NodeCard({ node }) {
  const isRev = node.type === 'rev';
  return (
    <div
      className="rounded-2xl p-4 shadow-[0_16px_34px_rgba(27,94,32,0.10)]"
      style={isRev ? REV_STYLE : PLAT_STYLE}
    >
      <div className="flex items-center gap-3.5">
        <span
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl"
          style={{ background: isRev ? '#fff8ea' : '#fff', border: isRev ? '1px solid #f0d493' : '1px solid #bcd9b6' }}
          aria-hidden="true"
        >
          {node.emoji}
        </span>
        <div className="min-w-0">
          <div className="text-base font-bold leading-tight" style={{ color: isRev ? '#8a5a12' : '#1B5E20' }}>
            {node.title}
          </div>
          <div className="text-[13px]" style={{ color: isRev ? '#9a7a48' : '#5d7a58' }}>{node.sub}</div>
        </div>
      </div>
    </div>
  );
}

export default function CircularEconomy() {
  const wrapRef = useRef(null);
  const stageRef = useRef(null);
  const [cowOk, setCowOk] = useState(true);

  useEffect(() => {
    const fit = () => {
      const wrap = wrapRef.current;
      const stage = stageRef.current;
      if (!wrap || !stage) return;
      const scale = Math.min(1, wrap.clientWidth / 1000);
      stage.style.transform = `scale(${scale})`;
      wrap.style.height = `${760 * scale}px`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    if (wrapRef.current) ro.observe(wrapRef.current);
    window.addEventListener('resize', fit);
    return () => { ro.disconnect(); window.removeEventListener('resize', fit); };
  }, []);

  const CowImg = (
    <>
      {cowOk ? (
        <img
          src="/hero-banner-1.jpg"
          alt="गाय · Cow"
          onError={() => setCowOk(false)}
          className="h-full w-full rounded-full object-cover"
          draggable="false"
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center rounded-full bg-primary-green/10 text-6xl" aria-hidden="true">🐄</span>
      )}
    </>
  );

  return (
    <section className="section" style={{ background: 'radial-gradient(130% 100% at 50% 0%, #ffffff 0%, #f1f6ed 55%, #e8f0e2 100%)' }}>
      <div className="container-custom">
        {/* Header */}
        <div className="mx-auto mb-6 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e0e8d8] bg-white px-4 py-1.5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-golden" />
            <span className="text-xs font-semibold uppercase tracking-[2.5px] text-primary-green">गौ आधारित अर्थव्यवस्था</span>
          </span>
          <h2 className="mt-4 mb-2">गौ-आधारित चक्रीय अर्थव्यवस्था</h2>
          <p className="text-gray-600">निवेश से बाज़ार तक — एक गाय, अनेक आय स्रोत।</p>
        </div>

        {/* Radial diagram (sm and up) */}
        <div ref={wrapRef} className="relative mx-auto hidden w-full max-w-[1000px] sm:block">
          <div ref={stageRef} className="absolute left-0 top-0 h-[760px] w-[1000px] origin-top-left">
            {/* Spokes */}
            <svg viewBox="0 0 1000 760" width="1000" height="760" className="absolute inset-0 overflow-visible" aria-hidden="true">
              <g stroke="#cdb27a" strokeWidth="2.4" fill="none" opacity="0.7">
                {NODES.map((n) => (
                  <line key={n.title} x1={CENTER.x} y1={CENTER.y} x2={n.sx} y2={n.sy} />
                ))}
              </g>
            </svg>

            {/* Center cow */}
            <div className="absolute z-[3] -translate-x-1/2 -translate-y-1/2" style={{ left: CENTER.x, top: CENTER.y }}>
              <div className="absolute -inset-6 rounded-full" style={{ background: 'radial-gradient(circle, rgba(249,168,37,.20) 0%, rgba(249,168,37,0) 70%)' }} />
              <div className="relative flex h-[248px] w-[248px] items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_26px_60px_rgba(27,94,32,.20)]" style={{ border: '4px solid #F9A825' }}>
                <div className="h-[224px] w-[224px] overflow-hidden rounded-full">{CowImg}</div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-dark-green px-6 py-1.5 font-display text-base tracking-wider text-white shadow-lg">
                गाय · COW
              </div>
            </div>

            {/* Nodes */}
            {NODES.map((n) => (
              <div key={n.title} className="absolute z-[2] w-[252px] -translate-x-1/2 -translate-y-1/2" style={{ left: n.x, top: n.y }}>
                <NodeCard node={n} />
              </div>
            ))}
          </div>
        </div>

        {/* Stacked layout (phones) */}
        <div className="sm:hidden">
          <div className="mx-auto mb-6 flex flex-col items-center">
            <div className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg" style={{ border: '4px solid #F9A825' }}>
              <div className="h-36 w-36 overflow-hidden rounded-full">{CowImg}</div>
            </div>
            <span className="mt-2 rounded-full bg-dark-green px-5 py-1 font-display text-sm tracking-wider text-white">गाय · COW</span>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            className="grid gap-3"
          >
            {NODES.map((n) => (
              <motion.div key={n.title} variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
                <NodeCard node={n} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2">
          <span className="flex items-center gap-2.5">
            <span className="h-4 w-6 rounded" style={REV_STYLE} />
            <span className="text-sm text-gray-600">Revenue streams · उत्पाद</span>
          </span>
          <span className="flex items-center gap-2.5">
            <span className="h-4 w-6 rounded" style={PLAT_STYLE} />
            <span className="text-sm text-gray-600">Platform &amp; operations · संचालन</span>
          </span>
        </div>
      </div>
    </section>
  );
}
