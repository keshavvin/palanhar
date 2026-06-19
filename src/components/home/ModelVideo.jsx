import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaYoutube, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Video gallery — click-to-play YouTube facades in a 3-up slider.
const VIDEOS = [
  { id: 'Zkw8VxBEre8', title: 'गौ सेवा की महिमा' },
  { id: 'gUmkQcvpSP4', title: 'पालनहार — परिचय' },
  { id: 'odAX_yQUe24', title: 'गौ-आधारित मॉडल' },
  { id: 'MLZA53a5SaI', title: 'पालनहार दर्शन' },
  { id: 'qy7FljaAaDg', title: 'समृद्धि की ओर' },
];

function VideoCard({ id, title }) {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`);

  return (
    <div className="snap-start shrink-0 basis-[86%] sm:basis-1/2 lg:basis-1/3">
      <div className="relative aspect-video overflow-hidden rounded-2xl border-4 border-white bg-dark-green shadow-xl ring-1 ring-black/10">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} aria-label={`${title} — वीडियो चलाएँ`} className="group absolute inset-0">
            <img
              src={thumb}
              onError={() => setThumb(`https://img.youtube.com/vi/${id}/hqdefault.jpg`)}
              alt={`${title} थंबनेल`}
              className="absolute inset-0 h-full w-full object-cover"
              draggable="false"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-green/80 via-dark-green/10 to-dark-green/25" />
            <span className="absolute left-3 top-2.5 flex items-center gap-1.5">
              <img src="/logo-palanhar.png" alt="" className="h-6 w-6 object-contain drop-shadow" draggable="false" />
              <span className="font-display text-xs font-bold text-white drop-shadow">पालनहार</span>
            </span>
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-red-600 shadow-xl transition-transform duration-300 group-hover:scale-110">
              <FaPlay className="ml-1 text-2xl" aria-hidden="true" />
            </span>
            <span className="absolute inset-x-3 bottom-3 truncate text-sm font-bold text-white drop-shadow">{title}</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default function ModelVideo() {
  const trackRef = useRef(null);

  const scrollByPage = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * track.clientWidth * 0.9, behavior: 'smooth' });
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="mb-8 text-center">
          <span className="section-eyebrow">
            <FaYoutube className="mr-1 inline text-red-500" aria-hidden="true" /> वीडियो
          </span>
          <h2>देखें — पालनहार कैसे काम करता है</h2>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">
            एक गाय से अनेक आय स्रोत तक का सफर — हमारे वीडियो में।
          </p>
        </div>

        {/* Featured local video — drop the file at public/palanhar-model.mp4 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-4xl"
        >
          <div className="relative aspect-video overflow-hidden rounded-2xl border-4 border-white bg-dark-green shadow-xl ring-1 ring-black/10">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/video_1.mp4"
              poster="/hero-banner-1.jpg"
              controls
              preload="metadata"
              playsInline
            >
              आपका ब्राउज़र वीडियो प्लेबैक सपोर्ट नहीं करता।
            </video>
          </div>
          <p className="mt-3 text-center text-sm font-semibold text-dark-green">
            पालनहार — गौ-आधारित आत्मनिर्भर मॉडल
          </p>
        </motion.div>

        <div className="relative">
          {/* Prev */}
          <button
            type="button"
            onClick={() => scrollByPage(-1)}
            aria-label="पिछला"
            className="absolute -left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary-green shadow-lg ring-1 ring-gray-200 transition-colors hover:bg-primary-green hover:text-white sm:flex"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>

          {/* Track — 3 per view on desktop */}
          <motion.div
            ref={trackRef}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {VIDEOS.map((v) => (
              <VideoCard key={v.id} id={v.id} title={v.title} />
            ))}
          </motion.div>

          {/* Next */}
          <button
            type="button"
            onClick={() => scrollByPage(1)}
            aria-label="अगला"
            className="absolute -right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary-green shadow-lg ring-1 ring-gray-200 transition-colors hover:bg-primary-green hover:text-white sm:flex"
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>

        <p className="mt-4 text-center text-xs text-gray-400">
          ← स्वाइप या एरो से स्लाइड करें · {VIDEOS.length} वीडियो
        </p>
      </div>
    </section>
  );
}
