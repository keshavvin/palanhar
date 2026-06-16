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
          <span className="section-eyebrow">वी&rsquo;र हियर टू हेल्प</span>
          <h1 className="mb-4">कॉन्टैक्ट अस</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            क्वेश्चन्स अबाउट अवर प्रोडक्ट्स, सर्विसेज ऑर इन्वेस्टमेंट प्लान्स — रीच आउट एनीटाइम
          </p>
        </div>
      </motion.section>
      <Contact />
    </>
  );
}
