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
            <span className="section-eyebrow">गौ सेवा में निवेश</span>
            <h1 className="mb-5">गौ सेवा में निवेश करें. सकारात्मक बदलाव लाएँ.</h1>
            <p className="mb-8 max-w-xl text-lg text-gray-600 md:text-xl">
              हर योगदान पशु कल्याण, ग्रामीण विकास और
              पर्यावरणीय सततता को सहारा देता है।
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#plans" className="btn btn-outline">योजनाएँ देखें</a>
              <Link to="/investor/register" className="btn btn-primary">पंजीकरण शुरू करें</Link>
            </div>

            {/* Compact stats for small screens (snapshot card is lg+) */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:hidden">
              <div className="rounded-xl border border-primary-green/10 bg-white px-4 py-3 text-center shadow-sm">
                <p className="text-lg font-bold text-dark-green">{formatINRCompact(adminStats.totalFundsRaised)}</p>
                <p className="text-xs text-gray-500">जुटाई गई राशि</p>
              </div>
              <div className="rounded-xl border border-primary-green/10 bg-white px-4 py-3 text-center shadow-sm">
                <p className="text-lg font-bold text-dark-green">{adminStats.totalInvestors.toLocaleString('en-IN')}</p>
                <p className="text-xs text-gray-500">निवेशक</p>
              </div>
              <div className="rounded-xl border border-primary-green/10 bg-white px-4 py-3 text-center shadow-sm">
                <p className="text-lg font-bold text-golden">{dividendExample.boardApprovedRatePct}%</p>
                <p className="text-xs text-gray-500">{dividendExample.financialYear} लाभांश</p>
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
                <p className="font-bold text-dark-green">पालनहार गौ सेवा कोष</p>
                <span className="badge-status bg-green-100 text-primary-green">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-primary-green" aria-hidden="true" />
                  लाइव झलक
                </span>
              </div>
              <div className="space-y-3">
                <CountStat
                  icon={<FaRupeeSign />}
                  label="कुल जुटाई गई राशि"
                  target={adminStats.totalFundsRaised}
                  format={(v) => formatINRCompact(v)}
                />
                <CountStat
                  icon={<FaUsers />}
                  label="पंजीकृत निवेशक"
                  target={adminStats.totalInvestors}
                  format={(v) => Math.round(v).toLocaleString('en-IN')}
                />
                <CountStat
                  icon={<FaPercentage />}
                  label={`${dividendExample.financialYear} लाभांश दर`}
                  target={dividendExample.boardApprovedRatePct}
                  format={(v) => `${v.toFixed(0)}%`}
                />
              </div>
              <p className="mt-4 text-center text-xs text-gray-400">
                {formatINRCompact(dividendExample.netProfit)} शुद्ध लाभ पर बोर्ड-अनुमोदित लाभांश
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
