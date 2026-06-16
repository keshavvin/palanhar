import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import { divisions, BAR, ICON } from '../../data/divisions';
import LeafHeading from './LeafHeading';

function Tile({ item }) {
  const Icon = item.icon;
  return (
    <Link
      to={`/divisions/${item.slug}`}
      className="group block h-full snap-start shrink-0 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
    >
      <div className="h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl">
        <div className="flex h-24 items-center justify-center bg-gradient-to-b from-gray-50 to-white sm:h-28">
          <Icon
            className={`text-5xl transition-transform duration-300 group-hover:scale-110 ${ICON[item.color]}`}
            aria-hidden="true"
          />
        </div>
        <div className={`flex min-h-[3.25rem] items-center justify-center px-2 py-2.5 text-center ${BAR[item.color]}`}>
          <span className="text-[11px] font-bold leading-tight text-white sm:text-xs">{item.label}</span>
        </div>
      </div>
    </Link>
  );
}

export default function CategorySlider() {
  const trackRef = useRef(null);
  const pausedRef = useRef(false);

  const scrollByPage = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: 'smooth' });
  };

  // Auto-advance; pause on hover/touch and when the user prefers reduced motion.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;

    const id = setInterval(() => {
      if (pausedRef.current) return;
      const { scrollLeft, clientWidth, scrollWidth } = track;
      if (scrollLeft + clientWidth >= scrollWidth - 8) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: clientWidth * 0.8, behavior: 'smooth' });
      }
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <section className="section bg-cream-white/40">
      <div className="container-custom">
        <LeafHeading className="mb-3">हमारे व्यवसाय क्षेत्र</LeafHeading>
        <p className="mb-8 text-center text-base text-gray-600 md:text-lg">
          पालनहार समूह के विविध क्षेत्र — किसी भी क्षेत्र पर क्लिक करें
        </p>

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

          {/* Track */}
          <div
            ref={trackRef}
            onMouseEnter={pause}
            onMouseLeave={resume}
            onTouchStart={pause}
            onFocusCapture={pause}
            onBlurCapture={resume}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {divisions.map((item) => (
              <Tile key={item.slug} item={item} />
            ))}
          </div>

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

        <div className="mt-6 flex items-center justify-center">
          <Link to="/divisions" className="btn btn-outline inline-flex items-center gap-2">
            सभी {divisions.length} क्षेत्र देखें <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
