import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark-green via-primary-green to-dark-green py-20 md:py-32">
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-10 top-10 text-8xl"
        >
          🌾
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-10 right-10 text-8xl"
        >
          🐄
        </motion.div>
      </div>

      <div className="container-custom relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 !text-white text-4xl md:text-6xl"
          >
            Ready to Experience<br />Pure Dairy &amp; Organic Agriculture?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-12 text-xl text-white/90 md:text-2xl"
          >
            Join thousands of satisfied customers and investors who trust
            Palanhar Farms for quality, freshness and transparency
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link to="/invest" className="btn btn-golden px-8 py-4">
              Invest Now
            </Link>
            <Link
              to="/contact"
              className="btn border-2 border-white bg-transparent px-8 py-4 text-white hover:bg-white hover:text-primary-green"
            >
              Contact Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 text-center text-white/90"
          >
            <div>
              <div className="mb-1 text-2xl" aria-hidden="true">✓</div>
              <p className="text-sm font-semibold">100% Fresh</p>
            </div>
            <div>
              <div className="mb-1 text-2xl" aria-hidden="true">🚚</div>
              <p className="text-sm font-semibold">Free Delivery</p>
            </div>
            <div>
              <div className="mb-1 text-2xl" aria-hidden="true">💚</div>
              <p className="text-sm font-semibold">Money-back Guarantee</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-sm text-white/80"
        >
          <p>Palanhar Farms • Delivering Fresh Milk, Organic Produce &amp; Sustainable Farming Solutions</p>
          <p className="mt-2">
            📍 Rajokri Village, NH-48, New Delhi – 110038 | 📞 +91 92115 57678 | 📧 palanharcompany@gmail.com
          </p>
        </motion.div>
      </div>
    </section>
  );
}
