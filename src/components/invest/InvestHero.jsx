import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRupeeSign, FaUsers, FaPercentage } from 'react-icons/fa';
import { adminStats, dividendExample, formatINRCompact } from '../../data/investorData';
import useCountUp from './useCountUp';

function CountStat({ icon, label, target, format }) {
  const { ref, value } = useCountUp(target);
  return (
    <div className="flex items-center gap-3 rounded-xl bg-cream-white px-4 py-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-green/10 text-primary-green" aria-hidden="true">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</p>
        <p ref={ref} className="text-xl font-bold text-dark-green tabular-nums">
          {format(value)}
        </p>
      </div>
    </div>
  );
}

export default function InvestHero() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-light-green/20 via-cream-white to-white pt-16 pb-14 md:pt-20 md:pb-20">
      <div className="container-custom">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: headline + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">Investor Module</span>
            <h1 className="mb-5">Invest in Real Farming. Earn Real Dividends.</h1>
            <p className="mb-8 max-w-xl text-lg text-gray-600 md:text-xl">
              Transparent investment tracking and structured dividend distribution from
              Palanhar&rsquo;s dairy &amp; agricultural profit — from your first rupee to
              your yearly payout, everything is recorded and visible.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#plans" className="btn btn-outline">View Plans</a>
              <Link to="/investor/register" className="btn btn-primary">Start Registration</Link>
            </div>

            {/* Compact stats for small screens (snapshot card is lg+) */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:hidden">
              <div className="rounded-xl border border-primary-green/10 bg-white px-4 py-3 text-center shadow-sm">
                <p className="text-lg font-bold text-dark-green">{formatINRCompact(adminStats.totalFundsRaised)}</p>
                <p className="text-xs text-gray-500">Funds Raised</p>
              </div>
              <div className="rounded-xl border border-primary-green/10 bg-white px-4 py-3 text-center shadow-sm">
                <p className="text-lg font-bold text-dark-green">{adminStats.totalInvestors.toLocaleString('en-IN')}</p>
                <p className="text-xs text-gray-500">Investors</p>
              </div>
              <div className="rounded-xl border border-primary-green/10 bg-white px-4 py-3 text-center shadow-sm">
                <p className="text-lg font-bold text-golden">{dividendExample.boardApprovedRatePct}%</p>
                <p className="text-xs text-gray-500">{dividendExample.financialYear} Dividend</p>
              </div>
            </div>
          </motion.div>

          {/* Right: live snapshot card (lg+) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -top-8 -right-8 h-44 w-44 rounded-full bg-golden/20 blur-2xl" aria-hidden="true" />
            <div className="absolute -bottom-10 -left-6 h-40 w-40 rounded-full bg-primary-green/15 blur-2xl" aria-hidden="true" />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative mx-auto max-w-sm rounded-2xl border border-primary-green/10 bg-white p-6 shadow-2xl"
            >
              <div className="mb-5 flex items-center justify-between">
                <p className="font-bold text-dark-green">Palanhar Investor Pool</p>
                <span className="badge-status bg-green-100 text-primary-green">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-primary-green" aria-hidden="true" />
                  Live Snapshot
                </span>
              </div>
              <div className="space-y-3">
                <CountStat
                  icon={<FaRupeeSign />}
                  label="Total Funds Raised"
                  target={adminStats.totalFundsRaised}
                  format={(v) => formatINRCompact(v)}
                />
                <CountStat
                  icon={<FaUsers />}
                  label="Registered Investors"
                  target={adminStats.totalInvestors}
                  format={(v) => Math.round(v).toLocaleString('en-IN')}
                />
                <CountStat
                  icon={<FaPercentage />}
                  label={`${dividendExample.financialYear} Dividend Rate`}
                  target={dividendExample.boardApprovedRatePct}
                  format={(v) => `${v.toFixed(0)}%`}
                />
              </div>
              <p className="mt-4 text-center text-xs text-gray-400">
                Board-approved dividend on {formatINRCompact(dividendExample.netProfit)} net profit
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
