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
          <span className="section-eyebrow">We&rsquo;re Here to Help</span>
          <h1 className="mb-4">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            Questions about our products, services or investment plans — reach out anytime
          </p>
        </div>
      </motion.section>
      <Contact />
    </>
  );
}
