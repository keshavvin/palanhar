import { motion } from 'framer-motion';
import About from '../components/About';
import Leadership from '../components/Leadership';

export default function AboutPage() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-b from-light-green/20 to-transparent pb-10 pt-16 md:pt-20"
      >
        <div className="container-custom text-center">
          <span className="section-eyebrow">अवर स्टोरी</span>
          <h1 className="mb-4">अबाउट पालनहार</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            अ डिकेड ऑफ प्योर डेयरी, ऑर्गेनिक एग्रीकल्चर एंड सस्टेनेबल ग्रोथ
          </p>
        </div>
      </motion.section>
      <About />
      <Leadership />
    </>
  );
}
