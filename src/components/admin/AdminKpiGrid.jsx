import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaUsers,
  FaUserCheck,
  FaCoins,
  FaUserClock,
  FaBalanceScale,
  FaCheckCircle,
  FaHourglassHalf,
} from 'react-icons/fa';
import { adminStats, formatINRCompact } from '../../data/investorData';

const formatCount = (v) => v.toLocaleString('en-IN');

function CountUp({ value, format = formatCount, duration = 1200 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return <span ref={ref}>{format(display)}</span>;
}

const primaryKpis = [
  { label: 'Total Investors', value: adminStats.totalInvestors, icon: FaUsers },
  { label: 'Active Investors', value: adminStats.activeInvestors, icon: FaUserCheck },
  { label: 'Total Funds Raised', value: adminStats.totalFundsRaised, icon: FaCoins, format: formatINRCompact },
  { label: 'Pending Approvals', value: adminStats.pendingApprovals, icon: FaUserClock },
];

const dividendKpis = [
  { label: 'Dividend Liability', value: adminStats.dividendLiability, icon: FaBalanceScale, format: formatINRCompact },
  { label: 'Dividend Paid', value: adminStats.dividendPaid, icon: FaCheckCircle, format: formatINRCompact },
  { label: 'Pending Payments', value: adminStats.pendingPayments, icon: FaHourglassHalf, format: formatINRCompact },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function KpiCard({ kpi, golden = false }) {
  const Icon = kpi.icon;
  return (
    <motion.div
      variants={itemVariants}
      className={`stat-card ${golden ? 'border-golden' : ''}`}
    >
      <div className="flex items-start justify-between gap-2">
        <dt className="text-xs sm:text-sm font-medium text-gray-500">{kpi.label}</dt>
        <span
          aria-hidden="true"
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
            golden ? 'bg-golden/15 text-amber-700' : 'bg-primary-green/10 text-primary-green'
          }`}
        >
          <Icon />
        </span>
      </div>
      <dd className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold text-dark-green">
        <CountUp value={kpi.value} format={kpi.format} />
      </dd>
    </motion.div>
  );
}

export default function AdminKpiGrid() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <h2 className="sr-only">Key metrics</h2>
      <motion.dl
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        {primaryKpis.map((kpi) => (
          <KpiCard key={kpi.label} kpi={kpi} />
        ))}
      </motion.dl>
      <motion.dl
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
      >
        {dividendKpis.map((kpi) => (
          <KpiCard key={kpi.label} kpi={kpi} golden />
        ))}
      </motion.dl>
    </div>
  );
}
