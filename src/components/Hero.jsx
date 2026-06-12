import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const bannerImages = ['/hero-banner-1.jpg', '/hero-banner-2.jpg', '/hero-banner-3.jpg'];
const SLIDE_INTERVAL_MS = 5000;

export default function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setSlide((s) => (s + 1) % bannerImages.length),
      SLIDE_INTERVAL_MS
    );
    return () => clearInterval(timer);
  }, []);

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
    <section className="relative min-h-[calc(100vh-5rem)] bg-cream-white overflow-hidden">
      {/* Gau Seva banner slideshow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <AnimatePresence>
          <motion.img
            key={slide}
            src={bannerImages[slide]}
            alt=""
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.08 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: 'easeInOut' },
              scale: { duration: SLIDE_INTERVAL_MS / 1000 + 1.5, ease: 'linear' },
            }}
            className="absolute inset-0 h-full w-full object-cover"
            draggable="false"
          />
        </AnimatePresence>
        {/* Readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream-white/90 via-cream-white/75 to-white/90" />
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
            Gau Seva, Pure Dairy &amp; Organic Agriculture
            <span className="block text-primary-green">One Cow. Many Blessings.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
          >
            Welcome to Palanhar Farms — where serving our desi cows comes first,
            and pure A2 dairy, panchgavya products and sustainable farming flow from that care.
          </motion.p>

          {/* Feature Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Gau Seva First', icon: '🐄' },
              { label: '100% A2 Desi Milk', icon: '🥛' },
              { label: 'Bilona Desi Ghee', icon: '🧈' },
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
              Join Gau Seva
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      
    </section>
  );
}
