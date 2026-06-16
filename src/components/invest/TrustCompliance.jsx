import { motion } from 'framer-motion';
import { FaShieldAlt, FaUniversity, FaFileContract, FaClipboardList } from 'react-icons/fa';

const items = [
  {
    icon: FaShieldAlt,
    title: 'PAN + आधार KYC',
    desc: 'एक भी रुपया स्वीकार करने से पहले हर निवेशक का सत्यापन किया जाता है।',
  },
  {
    icon: FaUniversity,
    title: 'वास्तविक संपत्ति-आधारित',
    desc: 'निवेश जीवंत डेयरी और फार्म संचालनों से जुड़े हैं, बीमित पशुओं के साथ।',
  },
  {
    icon: FaFileContract,
    title: 'डिजिटल शेयर रजिस्टर',
    desc: 'क्रमांकित प्रमाणपत्र एक सिस्टम-संधारित रजिस्टर में दर्ज किए जाते हैं।',
  },
  {
    icon: FaClipboardList,
    title: 'पूरा ऑडिट रिकॉर्ड',
    desc: 'हर अनुमोदन, घोषणा और भुगतान अनुपालन के लिए लॉग किया जाता है।',
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
