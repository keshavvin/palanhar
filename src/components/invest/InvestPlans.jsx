import { motion } from 'framer-motion';
import { investmentPlans } from '../../data/investorData';
import PlanCard from './PlanCard';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function InvestPlans() {
  return (
    <section id="plans" className="section scroll-mt-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="section-eyebrow">Seva Plans</span>
          <h2 className="mb-4">Choose Your Seva Plan</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            Three simple ways to join Gau Seva — every plan directly supports cow
            welfare and earns a numbered share certificate with annual dividend
            eligibility.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 lg:gap-8"
        >
          {investmentPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
