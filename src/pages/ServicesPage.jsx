import { motion } from 'framer-motion';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-20 pb-10 bg-gradient-to-b from-light-green/20 to-transparent"
      >
        <div className="container-custom text-center">
          {/* <h1 className="text-5xl font-bold text-dark-green mb-4">Our Services</h1> */}
          {/* <p className="text-xl text-gray-600">Comprehensive solutions for dairy farming and sustainable agriculture</p> */}
        </div>
      </motion.section>
      <Services />
    </>
  );
}
