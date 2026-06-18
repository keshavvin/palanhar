import { motion } from 'framer-motion';
import {
  FaShieldHalved,
  FaChartLine,
  FaHandHoldingHeart,
  FaLeaf,
  FaFlag,
  FaStar,
  FaNewspaper,
} from 'react-icons/fa6';

// Reasons to invest, shown in the left dark panel.
const reasons = [
  {
    icon: FaShieldHalved,
    title: 'वास्तविक संपत्ति आधारित मॉडल',
    desc: 'हर निवेश जीवित गौधन एवं फार्म संपत्ति से जुड़ा।',
  },
  {
    icon: FaChartLine,
    title: 'बहु-स्रोत स्थिर आय',
    desc: '15+ आय स्रोत आय को स्थिर रखते हैं।',
  },
  {
    icon: FaLeaf,
    title: 'पूर्ण पारदर्शिता एवं रिपोर्टिंग',
    desc: 'लाइव डैशबोर्ड एवं मासिक रिपोर्ट।',
  },
  {
    icon: FaHandHoldingHeart,
    title: 'ग्रामीण समृद्धि एवं गौ कल्याण',
    desc: 'हर निवेश से गाँव एवं गौधन का कल्याण।',
  },
  {
    icon: FaFlag,
    title: 'आत्मनिर्भर भारत में योगदान',
    desc: 'देशी नस्ल एवं ग्रामीण अर्थव्यवस्था को बल।',
  },
];

// Media mentions, shown as styled text badges in the right panel.
const mediaNames = [
  'समाचार प्लस',
  'कृषि जागरण',
  'आज तक',
  'The Better India',
  'News18',
  'भारत पीढ़ी',
];

const NEWS_URL = 'https://app.samachar.plus/story/?id=27c16a80-ab91-4364-8d94-391b02b5a8bd';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyInvestMedia() {
  return (
    <section className="section bg-white">
      <div className="container-custom grid gap-6 lg:grid-cols-2">
        {/* LEFT — Why invest */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-2xl bg-dark-green p-6 text-white shadow-xl sm:p-8"
        >
          <motion.p variants={item} className="text-sm font-bold uppercase tracking-wide text-golden">
            क्यों पालनहार
          </motion.p>
          <motion.h2 variants={item} className="!text-white text-2xl">
            क्यों निवेश करें पालनहार में?
          </motion.h2>
          <motion.span
            variants={item}
            className="mt-3 block h-1 w-16 rounded-full bg-golden"
            aria-hidden="true"
          />

          <ul className="mt-6 space-y-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <motion.li key={reason.title} variants={item} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-golden/20 text-golden">
                    <Icon aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-bold text-white">{reason.title}</span>
                    <span className="block text-sm text-white/80">{reason.desc}</span>
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>

        {/* RIGHT — Media & recognition */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-2xl bg-dark-green p-6 text-white shadow-xl sm:p-8"
        >
          <motion.p variants={item} className="text-sm font-bold uppercase tracking-wide text-golden">
            हमारी पहचान
          </motion.p>
          <motion.h2 variants={item} className="!text-white text-2xl">
            मीडिया एवं पहचान
          </motion.h2>
          <motion.p variants={item} className="mt-3 text-sm text-white/80">
            अग्रणी मीडिया एवं संस्थानों द्वारा सराहा गया।
          </motion.p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {mediaNames.map((name) => (
              <motion.div
                key={name}
                variants={item}
                className="rounded-xl bg-white/10 px-4 py-3 text-center text-sm font-bold text-white ring-1 ring-white/15"
              >
                {name}
              </motion.div>
            ))}
          </div>

          <motion.a
            variants={item}
            href={NEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-golden px-5 py-3 text-sm font-bold text-dark-green transition-colors hover:bg-amber-500"
          >
            <FaNewspaper aria-hidden="true" /> समाचार में पढ़ें
          </motion.a>

          <motion.div variants={item} className="mt-5 flex flex-wrap items-center gap-3">
            <span className="flex gap-1 text-golden" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </span>
            <span className="text-sm text-white/80">हज़ारों निवेशकों एवं किसानों का भरोसा।</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
