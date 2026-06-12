import { motion } from 'framer-motion';
import About from '../components/About';

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
          <span className="section-eyebrow">Our Story</span>
          <h1 className="mb-4">About Palanhar</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            A decade of pure dairy, organic agriculture and sustainable growth
          </p>
        </div>
      </motion.section>
      <About />
    </>
  );
}
