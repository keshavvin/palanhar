import { motion } from 'framer-motion';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaCow, FaSeedling, FaShieldHalved, FaHandHoldingHeart, FaPeopleGroup } from 'react-icons/fa6';

// "Bigger than farming" — the five forces that converge into lasting change.
const forces = [
  { icon: FaCow, label: 'गौ सेवा' },
  { icon: FaPeopleGroup, label: 'ग्रामीण समृद्धि' },
  { icon: FaSeedling, label: 'सततता' },
  { icon: FaShieldHalved, label: 'पारदर्शिता' },
  { icon: FaHandHoldingHeart, label: 'सामाजिक प्रभाव' },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function BeyondFarming() {
  return (
    <section className="section bg-gradient-to-b from-golden/10 to-cream-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="section-eyebrow">खेती या डेयरी से कहीं बड़ा</span>
          <h2 className="mb-4 font-display text-3xl font-extrabold leading-tight text-dark-green sm:text-4xl">
            यह सिर्फ़ खेती या डेयरी नहीं —
            <span className="block text-primary-green">यह एक बेहतर भविष्य का निर्माण है।</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
            पालनहार एक ऐसा भविष्य बना रहा है जहाँ <b className="text-dark-green">गौ सेवा, ग्रामीण समृद्धि,
            सततता, पारदर्शिता</b> एवं <b className="text-dark-green">सामाजिक प्रभाव</b> — सब एक साथ मिलकर
            स्थायी एवं सकारात्मक बदलाव लाते हैं।
          </p>
        </motion.div>

        {/* Five forces → lasting change */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 flex flex-wrap items-stretch justify-center gap-3 sm:gap-4"
        >
          {forces.map(({ icon: Icon, label }) => (
            <motion.div
              variants={fadeUp}
              key={label}
              className="flex w-28 flex-col items-center gap-2 rounded-2xl border border-primary-green/10 bg-white p-4 text-center shadow-sm sm:w-32"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-green/10 text-primary-green">
                <Icon className="text-xl" aria-hidden="true" />
              </span>
              <span className="text-xs font-bold leading-tight text-dark-green sm:text-sm">{label}</span>
            </motion.div>
          ))}

          {/* equals → result */}
          <motion.div variants={fadeUp} className="flex items-center">
            <FaArrowRightLong className="mx-1 hidden text-2xl text-golden sm:block" aria-hidden="true" />
            <div className="flex w-full flex-col items-center justify-center gap-1 rounded-2xl bg-dark-green px-6 py-5 text-center shadow-lg sm:w-44">
              <span className="text-2xl" aria-hidden="true">🌱</span>
              <span className="font-display text-base font-bold leading-tight text-golden">स्थायी बदलाव</span>
              <span className="text-[11px] text-white/80">गायों • गाँवों • पीढ़ियों के लिए</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
