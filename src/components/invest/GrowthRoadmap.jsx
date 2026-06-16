import { motion } from 'framer-motion';
import { FaArrowTrendUp, FaScaleBalanced } from 'react-icons/fa6';
import { growthProjections, financialTargets, formatINRCompact } from '../../data/investorData';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function GrowthRoadmap() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="section-eyebrow">वित्तीय मज़बूती और विकास</span>
          <h2 className="mb-4">हमारी विकास रूपरेखा</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            {financialTargets.cowCount} गायों की एक स्थिर डेयरी इकाई जो प्रतिदिन{' '}
            {financialTargets.dailyMilkLitres.toLocaleString('en-IN')} लीटर दूध देती है —
            पाँच वर्षों में {formatINRCompact(financialTargets.fiveYearRevenueTarget)} राजस्व
            की ओर बढ़ती हुई।
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {growthProjections.map((p) => (
            <motion.div
              key={p.year}
              variants={itemVariants}
              className="rounded-xl border border-primary-green/10 bg-cream-white/60 p-6 text-center shadow-sm"
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-golden">{p.year}</p>
              <p className="text-3xl font-extrabold text-dark-green">{formatINRCompact(p.revenue)}</p>
              <p className="mb-3 text-xs uppercase tracking-wide text-gray-500">अनुमानित राजस्व</p>
              <div className="mx-auto mb-3 h-px w-16 bg-primary-green/20" aria-hidden="true" />
              <p className="text-xl font-bold text-primary-green">{formatINRCompact(p.profit)}</p>
              <p className="text-xs uppercase tracking-wide text-gray-500">अनुमानित लाभ</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 rounded-xl bg-gradient-to-r from-primary-green to-dark-green p-6 text-white shadow-lg"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15" aria-hidden="true">
              <FaArrowTrendUp size={22} />
            </div>
            <div>
              <p className="text-2xl font-extrabold">{formatINRCompact(financialTargets.fiveYearRevenueTarget)}</p>
              <p className="text-sm text-white/85">5-वर्षीय राजस्व लक्ष्य — ₹2 Cr से ₹80 Cr तक</p>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 rounded-xl border-2 border-golden/50 bg-cream-white p-6 shadow-lg"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-golden/15 text-golden" aria-hidden="true">
              <FaScaleBalanced size={22} />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-dark-green">DSCR {financialTargets.dscr}</p>
              <p className="text-sm text-gray-600">मज़बूत औसत ऋण सेवा कवरेज — उच्च पुनर्भुगतान क्षमता</p>
            </div>
          </motion.div>
        </motion.div>

        <p className="mt-6 text-center text-xs text-gray-400">
          अनुमान कंपनी की व्यावसायिक योजना से लिए गए हैं और परिचालन प्रदर्शन पर निर्भर करते हैं।
        </p>
      </div>
    </section>
  );
}
