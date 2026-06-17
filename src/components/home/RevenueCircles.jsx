import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LeafHeading from './LeafHeading';

// एक गाय से जुड़ी विभिन्न आय धाराओं को दर्शाने वाली गोलाकार आइकन पट्टी।
const REVENUE_STREAMS = [
  { label: 'A2 दूध', emoji: '🥛' },
  { label: 'A2 घी', emoji: '🫙' },
  { label: 'पंचगव्य उत्पाद', emoji: '🌿' },
  { label: 'जैविक खाद', emoji: '🌱' },
  { label: 'जैविक खेती', emoji: '🌾' },
  { label: 'बायोगैस', emoji: '🔥' },
  { label: 'गोबर आधारित उत्पाद', emoji: '🧱' },
  { label: 'धूप एवं अगरबत्ती', emoji: '🪔' },
  { label: 'बायो पेंट', emoji: '🪣' },
  { label: 'ई-कॉमर्स', emoji: '🛒' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function RevenueCircles() {
  return (
    <section className="section bg-cream-white">
      <div className="container-custom">
        <LeafHeading className="mb-10">एक गाय से अनेक आय स्रोत</LeafHeading>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-5 lg:grid-cols-10"
        >
          {REVENUE_STREAMS.map((stream) => (
            <motion.div key={stream.label} variants={itemVariants}>
              <Link
                to="/products"
                className="group flex flex-col items-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-sm ring-2 ring-primary-green/20 transition group-hover:scale-105 sm:h-20 sm:w-20">
                  <span aria-hidden="true">{stream.emoji}</span>
                </span>
                <span className="mt-2 text-center text-xs font-semibold leading-tight text-dark-green sm:text-sm">
                  {stream.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
