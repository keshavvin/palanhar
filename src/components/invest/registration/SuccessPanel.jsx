import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaAward, FaCheck, FaUserShield } from 'react-icons/fa';
import { KYC_STATUSES } from '../../../data/investorData';
import { Spinner } from './FormFields';

const TIMELINE = KYC_STATUSES.slice(0, 3); // Pending -> Under Review -> Approved

// Devanagari display labels keyed off the (Latin) KYC status enum.
const STATUS_LABELS = {
  Pending: 'लंबित',
  'Under Review': 'समीक्षाधीन',
  Approved: 'स्वीकृत',
};

function TimelineNode({ label, index, stage }) {
  const done = index < stage || (index === TIMELINE.length - 1 && stage === TIMELINE.length - 1);
  const active = index === stage;
  return (
    <li className="flex flex-1 flex-col items-center gap-2 text-center">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors duration-500 ${
          done
            ? 'bg-primary-green text-white'
            : active
              ? 'bg-golden text-dark-green ring-4 ring-golden/30'
              : 'border-2 border-gray-300 bg-white text-gray-400'
        }`}
        aria-hidden="true"
      >
        {done ? <FaCheck /> : index + 1}
      </span>
      <span
        className={`text-xs font-semibold sm:text-sm ${
          done ? 'text-primary-green' : active ? 'text-dark-green' : 'text-gray-400'
        }`}
      >
        {STATUS_LABELS[label] ?? label}
        {active && !done && <span className="sr-only"> (वर्तमान स्थिति)</span>}
      </span>
    </li>
  );
}

export default function SuccessPanel({ investorId, certificateNo, stage, approving, onSimulate }) {
  const approved = stage >= TIMELINE.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-2xl"
    >
      <div className="rounded-2xl border border-primary-green/10 bg-white p-6 text-center shadow-xl sm:p-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.15 }}
          className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-green to-dark-green shadow-lg"
        >
          <FaCheck className="text-3xl text-white" aria-hidden="true" />
        </motion.div>

        <span className="section-eyebrow">KYC जमा हो गया</span>
        <h2 className="mb-2 text-2xl sm:text-3xl">पालनहार परिवार में आपका स्वागत है</h2>
        <p className="mx-auto mb-6 max-w-md text-sm text-gray-500 sm:text-base">
          आपका पंजीकरण प्राप्त हो गया है। हमारी अनुपालन टीम आमतौर पर 24–48 घंटों के
          भीतर KYC आवेदनों की समीक्षा करती है।
        </p>

        <div className="mx-auto mb-8 inline-flex flex-wrap items-center justify-center gap-3 rounded-xl border border-golden/40 bg-cream-white px-5 py-3">
          <span className="text-sm font-semibold text-gray-500">आपकी निवेशक आईडी</span>
          <span className="font-mono text-lg font-bold tracking-wider text-dark-green">{investorId}</span>
        </div>

        {/* Status timeline */}
        <div className="mb-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
            आवेदन की स्थिति
          </p>
          <ol className="relative flex items-start" aria-label="KYC स्वीकृति समयरेखा">
            <span
              className="absolute top-5 right-[16.6%] left-[16.6%] h-0.5 bg-gray-200"
              aria-hidden="true"
            />
            <span
              className={`absolute top-5 left-[16.6%] h-0.5 bg-primary-green transition-all duration-700 ${
                stage >= 2 ? 'right-[16.6%]' : stage >= 1 ? 'right-1/2' : 'right-[83.4%]'
              }`}
              aria-hidden="true"
            />
            {TIMELINE.map((label, i) => (
              <TimelineNode key={label} label={label} index={i} stage={stage} />
            ))}
          </ol>
        </div>

        <AnimatePresence mode="wait">
          {!approved ? (
            <motion.div key="simulate" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
              <button
                type="button"
                onClick={onSimulate}
                className="btn btn-golden inline-flex min-h-11 items-center justify-center gap-2"
              >
                {approving ? (
                  <>
                    <Spinner light={false} /> स्वीकृत किया जा रहा है…
                  </>
                ) : (
                  <>
                    <FaUserShield aria-hidden="true" /> एडमिन स्वीकृति का अनुकरण करें
                  </>
                )}
              </button>
              <p className="mt-3 text-xs text-gray-400">
                केवल डेमो — वास्तविक उपयोग में यह चरण पालनहार अनुपालन टीम द्वारा पूरा किया जाता है।
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="approved"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 rounded-2xl border-2 border-golden/50 bg-gradient-to-br from-cream-white to-golden/10 p-5 sm:p-6">
                <FaAward className="mx-auto mb-2 text-3xl text-golden" aria-hidden="true" />
                <p className="text-sm font-semibold text-gray-600">
                  KYC स्वीकृत — आपका डिजिटल शेयर प्रमाणपत्र तैयार हो गया है
                </p>
                <p className="mt-1 font-mono text-lg font-bold tracking-wider text-dark-green sm:text-xl">
                  {certificateNo}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  पालनहार शेयर रजिस्टर में दर्ज · आपके डैशबोर्ड से डाउनलोड किया जा सकता है
                </p>
              </div>
              <Link
                to="/investor/dashboard"
                className="btn btn-primary inline-flex min-h-11 items-center justify-center gap-2"
              >
                डैशबोर्ड पर जाएँ <FaArrowRight aria-hidden="true" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
