import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Featured() {
  const featured = [
    {
      icon: '🥛',
      name: 'A2 Cow Milk',
      desc: 'From Our Desi Gir Cows',
      borderClass: 'border-t-light-green',
      btnClass: 'bg-light-green hover:bg-primary-green',
    },
    {
      icon: '🧈',
      name: 'A2 Desi Ghee',
      desc: 'Traditional Bilona Method',
      borderClass: 'border-t-primary-green',
      btnClass: 'bg-primary-green hover:bg-dark-green',
    },
    {
      icon: '🌱',
      name: 'Gobar Khad',
      desc: 'Natural Soil Revival',
      borderClass: 'border-t-dark-green',
      btnClass: 'bg-dark-green hover:bg-primary-green',
    },
    {
      icon: '🌿',
      name: 'Panchgavya Products',
      desc: 'Five Gifts of the Cow',
      borderClass: 'border-t-golden',
      btnClass: 'bg-golden hover:bg-amber-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-cream-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600">Pure products from our gaushala, loved by customers</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {featured.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 ${item.borderClass}`}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-dark-green mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
              <Link
                to="/products"
                className={`inline-block px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 ${item.btnClass}`}
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/products" className="btn btn-primary hover:scale-105">
            View All Products →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
