import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

// Pitch-deck style cover slide — the aspirational opener above the main Hero.
// Mirrors the investor-deck cover: PALANHAR wordmark, twin tagline, ecosystem
// badge and an emblem lockup over a golden-hour farmer-family-and-cows scene.

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function DeckCover() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      {/* Golden-hour field, farmer family and grazing desi cows */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/hero-banner-3.jpg"
          alt=""
          className="h-full w-full object-cover"
          draggable="false"
        />
        {/* Left scrim keeps the forest-green text legible over the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream-white via-cream-white/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-green/35 via-transparent to-transparent" />
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Wordmark */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-6xl font-extrabold uppercase tracking-tight text-dark-green sm:text-7xl lg:text-8xl"
          >
            पालनहार
          </motion.h1>

          {/* Twin tagline */}
          <motion.p
            variants={itemVariants}
            className="mt-4 font-display text-2xl font-bold leading-snug text-primary-green sm:text-3xl"
          >
            हर घर पालनहार
            <span className="block">हर गाँव समृद्ध भारत</span>
          </motion.p>

          {/* Ecosystem badge */}
          <motion.div variants={itemVariants} className="mt-6">
            <span className="inline-block max-w-xl rounded-2xl bg-primary-green px-5 py-2.5 text-sm font-bold leading-snug text-white shadow-md sm:rounded-full sm:text-base">
              भारत का पहला एकीकृत कृषि + डेयरी + निवेश इकोसिस्टम
            </span>
          </motion.div>

          {/* Emblem lockup */}
          <motion.div variants={itemVariants} className="mt-10 flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-golden/50 bg-white shadow-md sm:h-20 sm:w-20">
              <img
                src="/logo-palanhar.png"
                alt=""
                className="h-12 w-12 object-contain sm:h-16 sm:w-16"
                draggable="false"
              />
            </span>
            <span className="leading-tight">
              <span className="block text-xs font-bold uppercase tracking-wide text-dark-green sm:text-sm">
                पालनहार — डेयरी एंड एग्रीकल्चरल फार्म Pvt. Ltd.
              </span>
              <span className="block text-sm font-semibold text-golden">www.palanhar.com</span>
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-green"
      >
        <FaChevronDown size={22} />
      </motion.div>
    </section>
  );
}
