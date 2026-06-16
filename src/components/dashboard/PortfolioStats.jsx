import { useEffect, useState } from 'react';
import { animate, motion } from 'framer-motion';
import {
  FaArrowUp,
  FaChartLine,
  FaCoins,
  FaHandHoldingUsd,
  FaHourglassHalf,
  FaPiggyBank,
} from 'react-icons/fa';
import { currentInvestor, formatINR } from '../../data/investorData';

function CountUpINR({ value, delay = 0 }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.2,
      delay,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [value, delay]);

  return <>{formatINR(display)}</>;
}

const growthPct = (
  ((currentInvestor.currentValue - currentInvestor.totalInvestment) /
    currentInvestor.totalInvestment) *
  100
).toFixed(1);

const STATS = [
  {
    label: 'टोटल इन्वेस्टमेंट',
    value: currentInvestor.totalInvestment,
    Icon: FaPiggyBank,
    iconClasses: 'bg-primary-green/10 text-primary-green',
  },
  {
    label: 'करंट वैल्यू',
    value: currentInvestor.currentValue,
    Icon: FaChartLine,
    iconClasses: 'bg-primary-green/10 text-primary-green',
    delta: `+${growthPct}%`,
  },
  {
    label: 'डिविडेंड अर्न्ड',
    value: currentInvestor.dividendEarned,
    Icon: FaCoins,
    iconClasses: 'bg-light-green/25 text-primary-green',
  },
  {
    label: 'डिविडेंड पेड',
    value: currentInvestor.dividendPaid,
    Icon: FaHandHoldingUsd,
    iconClasses: 'bg-dark-green/10 text-dark-green',
  },
  {
    label: 'पेंडिंग डिविडेंड',
    value: currentInvestor.dividendPending,
    Icon: FaHourglassHalf,
    iconClasses: 'bg-golden/15 text-amber-600',
    wide: true,
  },
];

export default function PortfolioStats() {
  return (
    <section aria-label="पोर्टफोलियो समरी">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {STATS.map(({ label, value, Icon, iconClasses, delta, wide }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className={`stat-card ${wide ? 'col-span-2 sm:col-span-1' : ''}`}
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span
                className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center ${iconClasses}`}
              >
                <Icon aria-hidden="true" />
              </span>
              {delta && (
                <span className="badge-status bg-primary-green/10 text-primary-green">
                  <FaArrowUp className="text-[10px]" aria-hidden="true" />
                  {delta}
                </span>
              )}
            </div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              {label}
            </p>
            <p className="text-lg sm:text-xl font-bold text-dark-green mt-1">
              <CountUpINR value={value} delay={index * 0.08} />
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
