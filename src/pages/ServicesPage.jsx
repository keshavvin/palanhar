import { motion } from 'framer-motion';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-b from-light-green/20 to-transparent pb-10 pt-16 md:pt-20"
      >
        <div className="container-custom text-center">
          <span className="section-eyebrow">हम क्या करते हैं</span>
          <h1 className="mb-4">हमारी सेवाएँ</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            डेयरी पालन एवं सतत कृषि के लिए सम्पूर्ण समाधान
          </p>
        </div>
      </motion.section>
      <Services />
    </>
  );
}
