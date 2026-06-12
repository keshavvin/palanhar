import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section className="bg-gradient-to-r from-primary-green via-primary-green to-dark-green py-16 md:py-24">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="mb-4 !text-white">Stay Updated</h2>
          <p className="mb-8 text-xl text-white/90">
            Get latest news, offers, and farming tips delivered to your inbox
          </p>

          <motion.form
            onSubmit={handleSubscribe}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-lg bg-white px-6 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-golden"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-golden px-8 py-4"
            >
              Subscribe
            </motion.button>
          </motion.form>

          <AnimatePresence>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 font-semibold text-green-100"
              >
                ✓ Thanks for subscribing! Check your email.
              </motion.p>
            )}
          </AnimatePresence>

          <p className="mt-6 text-sm text-white/75">
            📧 We respect your privacy. Unsubscribe anytime.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 gap-6 text-center text-white md:grid-cols-3"
        >
          <div>
            <div className="mb-2 text-3xl" aria-hidden="true">🎁</div>
            <p className="font-semibold">Special Offers</p>
            <p className="text-sm text-white/75">Exclusive discounts for subscribers</p>
          </div>
          <div>
            <div className="mb-2 text-3xl" aria-hidden="true">📰</div>
            <p className="font-semibold">Latest News</p>
            <p className="text-sm text-white/75">Farm updates and new products</p>
          </div>
          <div>
            <div className="mb-2 text-3xl" aria-hidden="true">💡</div>
            <p className="font-semibold">Tips &amp; Advice</p>
            <p className="text-sm text-white/75">Farming and health tips</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
