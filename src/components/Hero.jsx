import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] bg-gradient-to-br from-cream-white via-white to-light-green/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 right-10 text-9xl opacity-20"
        >
          🌾
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-20 left-10 text-8xl opacity-20"
        >
          🐄
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[calc(100vh-5rem)] relative z-10 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl w-full"
        >
          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-dark-green mb-4">
            Pure Dairy & Organic Agriculture
            <span className="block text-primary-green">From Nature</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
          >
            Welcome to Palanhar Farms – Delivering Fresh Milk, Organic Produce and Sustainable Farming Solutions.
          </motion.p>

          {/* Feature Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: '100% A2 Desi Milk', icon: '🥛' },
              { label: 'Bilona Desi Ghee', icon: '🧈' },
              { label: 'Desi Gir Cows', icon: '🐄' },
              { label: 'Panchgavya Products', icon: '🌿' },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-3xl mb-2">{feature.icon}</div>
                <p className="text-sm font-semibold text-dark-green">{feature.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="btn btn-primary group flex items-center justify-center gap-2 text-lg"
            >
              Explore Products
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              to="/invest"
              className="btn btn-golden group flex items-center justify-center gap-2 text-lg"
            >
              Become an Investor
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      
    </section>
  );
}
