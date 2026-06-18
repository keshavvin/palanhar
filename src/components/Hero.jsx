import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaArrowRightLong, FaChevronLeft, FaChevronRight, FaCow, FaShieldHalved, FaSeedling,
} from 'react-icons/fa6';

// Emotional story slides — each carries a pillar of the Palanhar movement.
const slides = [
  {
    image: '/banner-hero.jpg',
    eyebrow: 'गौ सेवा',
    line1: 'जहाँ हर गाय परिवार है,',
    line2: 'और हर सेवा एक संकल्प।',
    sub: 'गौ माता की निःस्वार्थ सेवा — पालनहार की आत्मा। 400+ देशी गायों की देखभाल में भागीदार बनें।',
  },
  {
    image: '/hero-banner-1.jpg',
    eyebrow: 'भारतीय विरासत',
    line1: 'हमारी देशी गाय,',
    line2: 'हमारी पहचान, हमारा गौरव।',
    sub: 'सदियों पुरानी देशी नस्लों का संरक्षण — आने वाली पीढ़ियों के लिए अमूल्य धरोहर।',
  },
  {
    image: '/hero-banner-2.jpg',
    eyebrow: 'ग्रामीण सशक्तिकरण',
    line1: 'हर गाँव समृद्ध,',
    line2: 'हर परिवार आत्मनिर्भर।',
    sub: 'रोज़गार, महिला सशक्तिकरण एवं आजीविका — गाँवों की समृद्धि का आंदोलन।',
  },
  {
    image: '/gallery-herd.jpg',
    eyebrow: 'सतत विकास',
    line1: 'प्रकृति के साथ,',
    line2: 'सच्ची एवं सतत समृद्धि।',
    sub: 'जैविक खेती, पंचगव्य एवं स्वच्छ ऊर्जा — पर्यावरण के साथ संतुलन में।',
  },
  {
    image: '/hero-banner-3.jpg',
    eyebrow: 'पारदर्शिता एवं भरोसा',
    line1: 'हर कदम पारदर्शी,',
    line2: 'हर भरोसा सुरक्षित।',
    sub: 'लाइव डैशबोर्ड, नियमित रिपोर्ट एवं वास्तविक गौशाला — पूर्ण विश्वास के साथ।',
  },
  {
    image: '/gallery-seva.jpg',
    eyebrow: 'राष्ट्र निर्माण',
    line1: 'एक गाय से,',
    line2: 'आत्मनिर्भर भारत तक।',
    sub: 'आपका हर योगदान — गायों, गाँवों एवं आने वाली पीढ़ियों के लिए एक बेहतर भारत।',
  },
  {
    image: '/naari/group-photo.jpg',
    eyebrow: 'नारी शक्ति',
    line1: 'नारी के हाथों,',
    line2: 'गाँव की समृद्धि।',
    sub: 'महिला सशक्तिकरण एवं स्वरोज़गार — आत्मनिर्भर नारी से सशक्त समाज का निर्माण।',
  },
  {
    image: '/gallery-care.jpg',
    eyebrow: 'देखभाल एवं प्रेम',
    line1: 'हर गाय को,',
    line2: 'अपनों जैसा प्रेम।',
    sub: 'रोज़ की देखभाल, स्वच्छता एवं पशु-चिकित्सा — गौ माता के प्रति हमारा कर्तव्य।',
  },
  {
    image: '/naari/skill-class.jpg',
    eyebrow: 'कौशल एवं प्रशिक्षण',
    line1: 'कौशल से जुड़ाव,',
    line2: 'रोज़गार की राह।',
    sub: 'ग्रामीण युवाओं एवं महिलाओं के लिए कौशल प्रशिक्षण एवं आत्मनिर्भरता के अवसर।',
  },
];

const trust = [
  { icon: FaCow, label: '400+ देशी गायें' },
  { icon: FaShieldHalved, label: 'पूर्ण पारदर्शिता' },
  { icon: FaSeedling, label: 'वास्तविक गौशाला' },
];

function SlideBg({ src }) {
  const [bg, setBg] = useState(src);
  return (
    <motion.img
      key={src}
      src={bg}
      alt=""
      onError={() => setBg('/hero-banner-3.jpg')}
      initial={{ opacity: 0, scale: 1.08 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.1, ease: 'easeOut' }}
      className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
      draggable="false"
    />
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index];

  // Any manual control click stops the auto-slide so the user can navigate freely.
  const go = (dir) => {
    setPaused(true);
    setIndex((i) => (i + dir + slides.length) % slides.length);
  };
  const goTo = (i) => {
    setPaused(true);
    setIndex(i);
  };

  useEffect(() => {
    if (paused) return undefined;
    const t = setTimeout(() => setIndex((i) => (i + 1) % slides.length), 5 * 60 * 1000);
    return () => clearTimeout(t);
  }, [index, paused]);

  return (
    <section
      className="relative flex min-h-[60vh] items-center overflow-hidden bg-black sm:min-h-[70vh] lg:min-h-[82vh]"
      aria-roledescription="carousel"
    >
      {/* Sliding backgrounds */}
      <div className="absolute inset-0" aria-hidden="true">
        <AnimatePresence>
          <SlideBg key={slide.image} src={slide.image} />
        </AnimatePresence>
      </div>

      <div className="container-custom relative z-10 max-w-3xl py-20 md:py-28 [&_h1]:[text-shadow:0_2px_10px_rgba(0,0,0,0.55)] [&_p]:[text-shadow:0_1px_8px_rgba(0,0,0,0.55)]">
        {/* Rotating story content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-golden/40 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-golden backdrop-blur-sm">
              <FaSeedling aria-hidden="true" /> {slide.eyebrow}
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              {slide.line1}
              <span className="mt-1 block text-golden">{slide.line2}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">{slide.sub}</p>
          </motion.div>
        </AnimatePresence>

        {/* Constant trust + CTAs */}
        <div className="mt-7 flex flex-wrap gap-3">
          {trust.map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur-sm">
              <Icon className="text-golden" aria-hidden="true" /> {label}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/invest/start" className="btn btn-golden group flex items-center gap-2.5 text-base font-bold shadow-xl">
            इस सेवा से जुड़ें
            <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <Link to="/gallery" className="btn group flex items-center gap-2.5 border-2 border-white bg-transparent text-base text-white hover:bg-white hover:text-dark-green">
            <FaCow aria-hidden="true" /> फार्म देखें
          </Link>
        </div>

        {/* Dots */}
        <div className="mt-10 flex items-center gap-2.5">
          {slides.map((s, i) => (
            <button
              key={s.eyebrow}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`स्लाइड ${i + 1}: ${s.eyebrow}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-golden' : 'w-2 bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="पिछली स्लाइड"
        className="absolute left-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30 sm:flex"
      >
        <FaChevronLeft aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="अगली स्लाइड"
        className="absolute right-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30 sm:flex"
      >
        <FaChevronRight aria-hidden="true" />
      </button>
    </section>
  );
}
