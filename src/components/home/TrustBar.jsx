import { motion } from 'framer-motion';
import { FaCow, FaSeedling, FaDroplet, FaPeopleGroup, FaChartLine, FaShieldHalved } from 'react-icons/fa6';

// Headline farm metrics — the credibility strip directly under the hero.
const stats = [
  { icon: FaCow, value: '400+', label: 'देशी गायें' },
  { icon: FaSeedling, value: '25+', label: 'एकड़ जैविक खेती' },
  { icon: FaDroplet, value: '3500+', label: 'लीटर दूध / दिन' },
  { icon: FaPeopleGroup, value: '150+', label: 'ग्रामीण परिवार जुड़े' },
  { icon: FaChartLine, value: '15+', label: 'आय स्रोत' },
  { icon: FaShieldHalved, value: '100%', label: 'पारदर्शिता' },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function TrustBar() {
  return (
    <section className="border-y border-golden/20 bg-dark-green">
      <div className="container-custom">
        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-x-4 gap-y-6 py-8 sm:grid-cols-3 lg:grid-cols-6"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <motion.li variants={fadeUp} key={label} className="flex flex-col items-center text-center">
              <Icon className="mb-2 text-2xl text-golden" aria-hidden="true" />
              <span className="font-display text-2xl font-extrabold text-white sm:text-3xl">{value}</span>
              <span className="mt-0.5 text-xs font-semibold text-white/80 sm:text-sm">{label}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
