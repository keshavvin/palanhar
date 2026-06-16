import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-cream-white to-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="text-7xl mb-6">🌾</div>
        <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">पेज नॉट फाउंड</h1>
        <p className="text-gray-600 mb-8">
          द पेज यू आर लुकिंग फॉर डज़न&apos;ट एग्ज़िस्ट ऑर हैज़ बीन मूव्ड.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn btn-primary">बैक टू होम</Link>
          <Link to="/invest" className="btn btn-outline">एक्सप्लोर इन्वेस्टमेंट प्लान्स</Link>
        </div>
      </motion.div>
    </section>
  );
}
