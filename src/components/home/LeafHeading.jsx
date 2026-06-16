import { motion } from 'framer-motion';
import { FaLeaf } from 'react-icons/fa';

// Centred section title flanked by leaf-sprig flourishes — the recurring
// heading motif from the reference design (हमारे उत्पाद, ऐप डाउनलोड करें…).
export default function LeafHeading({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex items-center justify-center gap-3 sm:gap-4 ${className}`}
    >
      <span className="flex items-center gap-1.5 text-light-green" aria-hidden="true">
        <FaLeaf className="rotate-[200deg] text-sm opacity-60" />
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-light-green sm:w-14" />
        <FaLeaf className="rotate-[160deg]" />
      </span>
      <h2 className="text-center text-2xl md:text-3xl">{children}</h2>
      <span className="flex items-center gap-1.5 text-light-green" aria-hidden="true">
        <FaLeaf className="-rotate-[20deg]" />
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-light-green sm:w-14" />
        <FaLeaf className="-rotate-[60deg] text-sm opacity-60" />
      </span>
    </motion.div>
  );
}
