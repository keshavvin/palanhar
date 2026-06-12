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
        <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn btn-primary">Back to Home</Link>
          <Link to="/invest" className="btn btn-outline">Explore Investment Plans</Link>
        </div>
      </motion.div>
    </section>
  );
}
