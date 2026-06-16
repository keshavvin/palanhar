import { motion } from 'framer-motion';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import LeafHeading from './LeafHeading';

function StoreBadge({ icon: Icon, line1, line2 }) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 rounded-xl bg-gray-900 px-5 py-3 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-xl"
    >
      <Icon size={28} aria-hidden="true" />
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wide text-white/70">{line1}</span>
        <span className="block text-lg font-semibold">{line2}</span>
      </span>
    </a>
  );
}

export default function AppDownload() {
  return (
    <section className="py-12 md:py-16 bg-cream-white/60">
      <div className="container-custom">
        <LeafHeading className="mb-8">ऐप डाउनलोड करें</LeafHeading>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <StoreBadge icon={FaGooglePlay} line1="यहाँ से पाएँ" line2="गूगल प्ले" />
          <StoreBadge icon={FaApple} line1="यहाँ से डाउनलोड करें" line2="ऐप स्टोर" />
        </motion.div>
      </div>
    </section>
  );
}
