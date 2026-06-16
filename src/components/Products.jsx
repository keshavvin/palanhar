import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { allProducts, dairyProducts, panchgavyaProducts, agricultureProducts } from '../data/products';
import { FaEnvelope, FaArrowRight } from 'react-icons/fa';

export default function Products() {
  const [filter, setFilter] = useState('all');

  const getProducts = () => {
    switch (filter) {
      case 'dairy':
        return dairyProducts;
      case 'panchgavya':
        return panchgavyaProducts;
      case 'agriculture':
        return agricultureProducts;
      default:
        return allProducts;
    }
  };

  const products = getProducts();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const filterVariants = {
    active: {
      backgroundColor: '#2E7D32',
      color: 'white',
    },
    inactive: {
      backgroundColor: 'white',
      color: '#2E7D32',
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-cream-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-eyebrow">एक गाय – अनेक उत्पाद – अनंत संभावनाएं</span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">अवर गौ सेवा प्रोडक्ट्स</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            एवरीथिंग द काउ गिव्स, विद ग्रैटिट्यूड — प्योर A2 डेयरी, पंचगव्य
            एंड गौ-बेस्ड नैचुरल प्रोडक्ट्स, एंड ऑर्गेनिक फार्म प्रोड्यूस
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { id: 'all', label: 'ऑल प्रोडक्ट्स' },
            { id: 'dairy', label: 'A2 डेयरी' },
            { id: 'panchgavya', label: 'पंचगव्य & गौ-बेस्ड' },
            { id: 'agriculture', label: 'ऑर्गेनिक एग्रीकल्चर' },
          ].map((btn) => (
            <motion.button
              key={btn.id}
              animate={filter === btn.id ? 'active' : 'inactive'}
              variants={filterVariants}
              onClick={() => setFilter(btn.id)}
              aria-pressed={filter === btn.id}
              className="px-6 py-3 rounded-lg border-2 border-primary-green font-semibold transition-all duration-300"
            >
              {btn.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid — keyed by filter so the reveal re-runs on every tab switch */}
        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="card bg-white group overflow-hidden"
            >
              {/* Product Image */}
              <div className="bg-gradient-to-br from-light-green/20 to-primary-green/20 h-32 flex items-center justify-center overflow-hidden relative">
                <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-dark-green">{product.name}</h3>
                  <span className="text-xs font-semibold bg-light-green/20 text-primary-green px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                {/* Features */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {product.features.map((feature, i) => (
                    <span key={i} className="text-xs bg-cream-white text-gray-700 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-light-green/30">
                  <p className="text-lg font-bold text-primary-green">{product.price}</p>
                  <Link
                    to="/contact"
                    aria-label={`एन्क्वायर अबाउट ${product.name}`}
                    className="bg-primary-green text-white px-3 py-2 rounded-lg hover:bg-dark-green hover:scale-105 transition-all flex items-center gap-2"
                  >
                    <FaEnvelope size={16} />
                    <span className="hidden sm:inline text-sm">एन्क्वायर</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card bg-gradient-to-r from-primary-green to-dark-green text-white p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">रेडी टू ऑर्डर?</h3>
          <p className="text-lg mb-6 opacity-90">
            गेट फ्रेश, ऑर्गेनिक प्रोडक्ट्स डिलीवर्ड टू योर डोरस्टेप. फास्ट, रिलायबल डिलीवरी गारंटीड!
          </p>
          <Link
            to="/contact"
            className="btn btn-golden inline-flex items-center gap-2 justify-center hover:scale-105"
          >
            ऑर्डर नाउ
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
