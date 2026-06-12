import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NewsLetterCTA() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary-green via-green-600 to-dark-green"  style={{margin:'0 auto',display:'block',width:'80%',textAlign:'center'}}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-white"
         style={{margin:'0 auto',display:'block',width:'80%',textAlign:'center'}}>
          {/* <h2 className="text-4xl md:text-5xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl opacity-90 mb-8">Get latest news, offers, and farming tips delivered to your inbox</p> */}

          <motion.form
            onSubmit={handleSubscribe}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-golden"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg font-bold text-dark-green transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{backgroundColor: '#F9A825'}}
            >
              Subscribe
            </motion.button>
          </motion.form>

          {subscribed && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 text-green-100 font-semibold"
            >
              ✓ Thanks for subscribing! Check your email.
            </motion.div>
          )}

          <p className="text-sm opacity-75 mt-6">
            📧 We respect your privacy. Unsubscribe anytime.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center"
        >
          <div>
            <div className="text-3xl mb-2">🎁</div>
            <p className="font-semibold">Special Offers</p>
            <p className="text-sm opacity-75">Exclusive discounts for subscribers</p>
          </div>
          <div>
            <div className="text-3xl mb-2">📰</div>
            <p className="font-semibold">Latest News</p>
            <p className="text-sm opacity-75">Farm updates and new products</p>
          </div>
          <div>
            <div className="text-3xl mb-2">💡</div>
            <p className="font-semibold">Tips & Advice</p>
            <p className="text-sm opacity-75">Farming and health tips</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
