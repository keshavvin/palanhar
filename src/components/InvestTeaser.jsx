import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const stats = [
  { value: '₹4.25 Cr', label: 'Funds Raised' },
  { value: '1,248', label: 'Registered Investors' },
  { value: '15%', label: 'FY 2025-26 Dividend' },
];

export default function InvestTeaser() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark-green via-primary-green to-dark-green py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-12 top-8 text-8xl"
        >
          🌾
        </motion.div>
        <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-8 left-12 text-8xl"
        >
          🐄
        </motion.div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center text-white"
        >
          <span className="section-eyebrow">Gau Seva Investment</span>
          <h2 className="mb-4 !text-white">Invest in Gau Seva. Create Positive Change.</h2>
          <p className="mb-8 text-lg text-white/85 md:text-xl">
            Every contribution supports animal welfare, rural development and
            environmental sustainability — with numbered share certificates,
            board-declared dividends and a fully transparent dashboard.
          </p>

          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm"
              >
                <p className="text-2xl font-bold text-golden">{stat.value}</p>
                <p className="text-sm text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <p className="mb-8 flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-white/90">
            <span>Invest in Seva</span>
            <FaArrowRight aria-hidden="true" className="text-golden" />
            <span>Cows Are Cared For</span>
            <FaArrowRight aria-hidden="true" className="text-golden" />
            <span>Earn Dividends</span>
            <FaArrowRight aria-hidden="true" className="text-golden" />
            <span>Reinvest or Withdraw</span>
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/invest" className="btn btn-golden">
              View Investment Plans
            </Link>
            <Link
              to="/investor/dashboard"
              className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary-green"
            >
              Investor Login
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
