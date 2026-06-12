import { motion } from 'framer-motion';
import { FaShieldAlt, FaUniversity, FaFileContract, FaClipboardList } from 'react-icons/fa';

const items = [
  {
    icon: FaShieldAlt,
    title: 'PAN + Aadhaar KYC',
    desc: 'Every investor is verified before a single rupee is accepted.',
  },
  {
    icon: FaUniversity,
    title: 'Real Asset-Backed',
    desc: 'Investments are tied to living dairy and farm operations, with insured cattle.',
  },
  {
    icon: FaFileContract,
    title: 'Digital Share Register',
    desc: 'Numbered certificates recorded in a system-maintained register.',
  },
  {
    icon: FaClipboardList,
    title: 'Complete Audit Trail',
    desc: 'Every approval, declaration and payment is logged for compliance.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TrustCompliance() {
  return (
    <section className="border-y border-primary-green/10 bg-cream-white py-12 md:py-16">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item) => (
            <motion.div key={item.title} variants={itemVariants} className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-green text-white shadow-md">
                <item.icon size={20} aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
