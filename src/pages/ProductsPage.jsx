import { motion } from 'framer-motion';
import Products from '../components/Products';
import SamriddhiKit from '../components/SamriddhiKit';

export default function ProductsPage() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-20 pb-10 bg-gradient-to-b from-light-green/20 to-transparent"
      >
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-dark-green mb-4">अवर प्रोडक्ट्स</h1>
          <p className="text-xl text-gray-600">A2 डेयरी, पंचगव्य एंड ऑर्गेनिक फार्म प्रोडक्ट्स — एव्रीथिंग अवर काउज़ गिव, डिलिवर्ड फ्रेश</p>
        </div>
      </motion.section>
      <Products />
      <SamriddhiKit />
    </>
  );
}
