import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const stats = [
  { value: '₹4.25 करोड़', label: 'जुटाई गई राशि' },
  { value: '1,248', label: 'पंजीकृत निवेशक' },
  { value: '15%', label: 'FY 2025-26 लाभांश' },
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
          <span className="section-eyebrow">गौ सेवा निवेश</span>
          <h2 className="mb-4 !text-white">गौ सेवा में निवेश करें। सकारात्मक बदलाव लाएँ।</h2>
          <p className="mb-8 text-lg text-white/85 md:text-xl">
            आपका हर योगदान पशु कल्याण, ग्रामीण विकास और पर्यावरणीय
            स्थिरता को सहारा देता है — क्रमांकित शेयर प्रमाणपत्र,
            बोर्ड द्वारा घोषित लाभांश और पूरी तरह पारदर्शी डैशबोर्ड के साथ।
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
            <span>सेवा में निवेश करें</span>
            <FaArrowRight aria-hidden="true" className="text-golden" />
            <span>गायों की देखभाल होती है</span>
            <FaArrowRight aria-hidden="true" className="text-golden" />
            <span>लाभांश कमाएँ</span>
            <FaArrowRight aria-hidden="true" className="text-golden" />
            <span>पुनर्निवेश करें या निकासी करें</span>
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/invest" className="btn btn-golden">
              निवेश योजनाएँ देखें
            </Link>
            <Link
              to="/investor/dashboard"
              className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary-green"
            >
              निवेशक लॉगिन
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
