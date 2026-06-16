import { motion } from 'framer-motion';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-b from-light-green/20 to-transparent pb-10 pt-16 md:pt-20"
      >
        <div className="container-custom text-center">
          <span className="section-eyebrow">हम आपकी सहायता के लिए हैं</span>
          <h1 className="mb-4">संपर्क करें</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            हमारे उत्पादों, सेवाओं या निवेश योजनाओं के बारे में प्रश्न — कभी भी संपर्क करें
          </p>
        </div>
      </motion.section>
      <Contact />
    </>
  );
}
