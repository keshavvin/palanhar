import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-dark-green via-primary-green to-dark-green relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          animate={{ float: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-10 left-10 text-8xl"
        >
          🌾
        </motion.div>
        <motion.div
          animate={{ float: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 right-10 text-8xl"
        >
          🐄
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
         style={{margin:'0 auto',display:'block',width:'80%',textAlign:'center'}}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Ready to Experience<br />Pure Dairy & Organic Agriculture?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl opacity-90 mb-12"
          >
            Join thousands of satisfied customers who trust Palanhar Farms for quality and freshness
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              to="/products"
              className="px-8 py-4 rounded-lg font-bold text-dark-green transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              style={{backgroundColor: '#F9A825'}}
            >
              Shop Now
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-lg font-bold text-white border-2 border-white transition-all duration-300 hover:bg-white hover:text-primary-green transform hover:scale-105"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 text-center text-white opacity-90"
          >
            <div>
              <div className="text-2xl mb-1">✓</div>
              <p className="text-sm font-semibold">100% Fresh</p>
            </div>
            <div>
              <div className="text-2xl mb-1">🚚</div>
              <p className="text-sm font-semibold">Free Delivery</p>
            </div>
            <div>
              <div className="text-2xl mb-1">💚</div>
              <p className="text-sm font-semibold">Money-back Guarantee</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-white/80 text-sm"
        >
          <p>
            Palanhar Farms • Delivering Fresh Milk, Organic Produce & Sustainable Farming Solutions
          </p>
          <p className="mt-2">
            📍 Village, District, State | 📞 +91 XXXXX XXXXX | 📧 info@palanharfarms.com
          </p>
        </motion.div>
      </div>
    </section>
  );
}
