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
          <span className="section-eyebrow">फाइनेंशियल स्ट्रेंथ &amp; ग्रोथ</span>
          <h2 className="mb-4">अवर ग्रोथ रोडमैप</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            अ स्टेबल डेयरी यूनिट ऑफ {financialTargets.cowCount} काउज़ प्रोड्यूसिंग{' '}
            {financialTargets.dailyMilkLitres.toLocaleString('en-IN')} लीटर्स डेली —
            स्केलिंग टुवर्ड्स {formatINRCompact(financialTargets.fiveYearRevenueTarget)} रेवेन्यू
            इन फाइव ईयर्स।
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
              <p className="mb-3 text-xs uppercase tracking-wide text-gray-500">प्रोजेक्टेड रेवेन्यू</p>
              <div className="mx-auto mb-3 h-px w-16 bg-primary-green/20" aria-hidden="true" />
              <p className="text-xl font-bold text-primary-green">{formatINRCompact(p.profit)}</p>
              <p className="text-xs uppercase tracking-wide text-gray-500">प्रोजेक्टेड प्रॉफिट</p>
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
              <p className="text-sm text-white/85">5-ईयर रेवेन्यू टारगेट — फ्रॉम ₹2 Cr टू ₹80 Cr</p>
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
              <p className="text-sm text-gray-600">स्ट्रॉन्ग एवरेज डेट सर्विस कवरेज — हाई रीपेमेंट कैपेसिटी</p>
            </div>
          </motion.div>
        </motion.div>

        <p className="mt-6 text-center text-xs text-gray-400">
          प्रोजेक्शन्स आर फ्रॉम द कंपनी बिज़नेस प्लान एंड डिपेंड ऑन ऑपरेशनल परफॉर्मेंस।
        </p>
      </div>
    </section>
  );
}
