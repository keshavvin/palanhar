import { FaLocationDot, FaPhone, FaCalendarCheck } from 'react-icons/fa6';

// Slim utility strip above the main navbar.
export default function TopBar() {
  return (
    <div className="bg-dark-green text-white">
      <div className="container-custom flex flex-wrap items-center justify-center gap-x-6 gap-y-1 py-1.5 text-center text-[11px] font-semibold sm:justify-between sm:text-xs">
        <span className="hidden items-center gap-2 text-white/90 sm:flex">
          <span>वास्तविक फार्म</span><span className="text-golden">•</span>
          <span>देशी गायें</span><span className="text-golden">•</span>
          <span>शुद्ध उत्पाद</span><span className="text-golden">•</span>
          <span>ग्रामीण समृद्धि</span>
        </span>
        <span className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
          <span className="inline-flex items-center gap-1.5 text-white/90">
            <FaLocationDot className="text-golden" aria-hidden="true" /> सतना, मध्य प्रदेश
          </span>
          <a href="/contact" className="inline-flex items-center gap-1.5 text-white/90 transition-colors hover:text-golden">
            <FaCalendarCheck className="text-golden" aria-hidden="true" /> फार्म विज़िट
          </a>
          <a href="tel:+917999309930" className="inline-flex items-center gap-1.5 text-white/90 transition-colors hover:text-golden">
            <FaPhone className="text-golden" aria-hidden="true" /> हेल्पलाइन: 79993 09930
          </a>
        </span>
      </div>
    </div>
  );
}
