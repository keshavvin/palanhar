import { motion } from 'framer-motion';
import { FaShieldAlt } from 'react-icons/fa';

const actorChip = (actor) => {
  if (actor.includes('CMD')) return 'bg-golden/20 text-amber-800 border border-golden/50';
  if (actor.includes('Admin')) return 'bg-primary-green/10 text-primary-green border border-primary-green/30';
  return 'bg-gray-100 text-gray-600 border border-gray-200';
};

const dotColor = (actor) => {
  if (actor.includes('CMD')) return 'border-golden';
  if (actor.includes('Admin')) return 'border-primary-green';
  return 'border-gray-300';
};

export default function AdminAuditTrail({ entries }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      aria-labelledby="audit-trail-heading"
      className="rounded-xl bg-white shadow-lg border border-primary-green/10 p-5 sm:p-6"
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-green/10 text-primary-green"
        >
          <FaShieldAlt />
        </span>
        <div>
          <span className="section-eyebrow mb-0">कम्प्लायंस</span>
          <h2 id="audit-trail-heading" className="text-xl sm:text-2xl">
            ऑडिट ट्रेल
          </h2>
        </div>
      </div>

      <ol className="mt-6 ml-2 space-y-0 border-l-2 border-primary-green/15">
        {entries.map((entry, index) => (
          <motion.li
            key={entry.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
            className={`relative pb-6 pl-6 last:pb-1 ${entry.isNew ? 'rounded-r-lg bg-golden/5' : ''}`}
          >
            <span
              aria-hidden="true"
              className={`absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 bg-white ${dotColor(entry.actor)}`}
            />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <span className={`badge-status ${actorChip(entry.actor)}`}>{entry.actor}</span>
              <time className="text-xs text-gray-400">{entry.timestamp}</time>
              {entry.isNew && (
                <span className="badge-status bg-golden/20 text-amber-800">न्यू</span>
              )}
            </div>
            <p className="mt-1.5 text-sm text-gray-700">{entry.action}</p>
          </motion.li>
        ))}
      </ol>
      <p className="mt-4 text-xs text-gray-500">एवरी एक्शन इज़ लॉग्ड फॉर कम्प्लायंस.</p>
    </motion.section>
  );
}
