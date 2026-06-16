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
        <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">पेज नहीं मिला</h1>
        <p className="text-gray-600 mb-8">
          आप जिस पेज को खोज रहे हैं वह मौजूद नहीं है या हटा दिया गया है।
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn btn-primary">होम पर लौटें</Link>
          <Link to="/invest" className="btn btn-outline">निवेश योजनाएँ देखें</Link>
        </div>
      </motion.div>
    </section>
  );
}
