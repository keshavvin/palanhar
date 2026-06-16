import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaBell,
  FaCheckCircle,
  FaCoins,
  FaFileAlt,
  FaIdBadge,
  FaUserCheck,
  FaWallet,
} from 'react-icons/fa';
import { currentInvestor, investorNotifications } from '../../data/investorData';

const NOTIFICATION_STYLES = {
  dividend: { Icon: FaCoins, classes: 'bg-golden/15 text-amber-600' },
  document: { Icon: FaFileAlt, classes: 'bg-light-green/25 text-primary-green' },
  payment: { Icon: FaWallet, classes: 'bg-primary-green/10 text-primary-green' },
  kyc: { Icon: FaUserCheck, classes: 'bg-dark-green/10 text-dark-green' },
};

// Devanagari display labels keyed off the (Latin) KYC status enum.
const KYC_STATUS_LABELS = {
  Approved: 'स्वीकृत',
  Pending: 'लंबित',
  'Under Review': 'समीक्षाधीन',
  Rejected: 'अस्वीकृत',
};

export default function DashboardHeader() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(investorNotifications.length);
  const bellAreaRef = useRef(null);

  useEffect(() => {
    if (!panelOpen) return undefined;
    const onPointerDown = (event) => {
      if (bellAreaRef.current && !bellAreaRef.current.contains(event.target)) {
        setPanelOpen(false);
      }
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setPanelOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [panelOpen]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md border border-gray-100 p-5 sm:p-6"
    >
      <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <span className="section-eyebrow">निवेशक पोर्टल</span>
          <h1 className="text-2xl md:text-3xl mb-3">वापसी पर स्वागत है, {currentInvestor.name}</h1>
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge-status bg-primary-green/10 text-primary-green border border-primary-green/20">
              <FaIdBadge aria-hidden="true" /> {currentInvestor.investorId}
            </span>
            <span className="badge-status bg-primary-green text-white">
              <FaCheckCircle aria-hidden="true" /> KYC {KYC_STATUS_LABELS[currentInvestor.kycStatus] ?? currentInvestor.kycStatus}
            </span>
            <span className="text-sm text-gray-500">सदस्य बने {currentInvestor.memberSince}</span>
          </div>
        </div>

        <div className="relative self-end sm:self-auto shrink-0" ref={bellAreaRef}>
          <button
            type="button"
            onClick={() => setPanelOpen((open) => !open)}
            aria-label={`सूचनाएँ, ${unreadCount} अपठित`}
            aria-expanded={panelOpen}
            aria-haspopup="true"
            className="relative w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 bg-white text-dark-green hover:bg-cream-white hover:border-primary-green/40 transition-colors shadow-sm"
          >
            <FaBell className="text-lg" aria-hidden="true" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-golden text-dark-green text-[11px] font-bold flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          <AnimatePresence>
            {panelOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute right-0 top-full mt-2 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-2xl border border-gray-100 z-40 overflow-hidden"
              >
                <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 bg-cream-white">
                  <p className="font-semibold text-dark-green text-sm">सूचनाएँ</p>
                  <button
                    type="button"
                    onClick={() => setUnreadCount(0)}
                    className="text-xs font-semibold text-primary-green hover:text-dark-green px-2 py-3"
                  >
                    सभी को पठित चिह्नित करें
                  </button>
                </div>
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                  className="max-h-80 overflow-y-auto divide-y divide-gray-100"
                >
                  {investorNotifications.map((note) => {
                    const { Icon, classes } = NOTIFICATION_STYLES[note.type] ?? NOTIFICATION_STYLES.document;
                    return (
                      <motion.li
                        key={note.id}
                        variants={{
                          hidden: { opacity: 0, x: 12 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
                        }}
                        className="flex gap-3 px-4 py-3"
                      >
                        <span
                          className={`mt-0.5 w-9 h-9 shrink-0 rounded-full flex items-center justify-center ${classes}`}
                        >
                          <Icon aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-baseline justify-between gap-2">
                            <p className="text-sm font-semibold text-gray-800">{note.title}</p>
                            <span className="text-[11px] text-gray-400 whitespace-nowrap">{note.date}</span>
                          </div>
                          <p className="text-xs text-gray-600 mt-0.5">{note.text}</p>
                        </div>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
