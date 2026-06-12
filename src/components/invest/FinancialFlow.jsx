import { motion } from 'framer-motion';
import { financialFlow } from '../../data/investorData';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FinancialFlow() {
  return (
    <section className="section bg-gradient-to-b from-white to-cream-white/60">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="section-eyebrow">Transparent by Design</span>
          <h2 className="mb-4">How Your Money Flows</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            From registration to payout, every rupee is tracked, certified and
            visible — at every step.
          </p>
        </motion.div>

        {/* Desktop: 7-step horizontal journey */}
        <motion.ol
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="relative hidden lg:grid lg:grid-cols-7 lg:gap-4"
        >
          <div
            aria-hidden="true"
            className="absolute left-[7%] right-[7%] top-7 h-0.5 bg-gradient-to-r from-light-green via-primary-green to-golden"
          />
          {financialFlow.map((item) => (
            <motion.li key={item.step} variants={itemVariants} className="relative text-center">
              <div className="relative z-10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary-green bg-white text-2xl shadow-md">
                <span aria-hidden="true">{item.icon}</span>
              </div>
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-golden">
                Step {item.step}
              </span>
              <h3 className="mb-1.5 text-sm font-bold leading-snug">{item.title}</h3>
              <p className="text-xs leading-relaxed text-gray-600">{item.desc}</p>
            </motion.li>
          ))}
        </motion.ol>

        {/* Mobile/tablet: vertical timeline */}
        <motion.ol
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="relative space-y-6 lg:hidden"
        >
          <div
            aria-hidden="true"
            className="absolute bottom-7 left-7 top-7 w-0.5 bg-gradient-to-b from-light-green via-primary-green to-golden"
          />
          {financialFlow.map((item) => (
            <motion.li key={item.step} variants={itemVariants} className="relative flex gap-4 pl-0">
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-primary-green bg-white text-2xl shadow-md">
                <span aria-hidden="true">{item.icon}</span>
              </div>
              <div className="pt-1">
                <span className="mb-0.5 block text-xs font-bold uppercase tracking-wider text-golden">
                  Step {item.step}
                </span>
                <h3 className="mb-1 text-base font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
