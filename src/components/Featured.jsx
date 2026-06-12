import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Featured() {
  const featured = [
    { icon: '🥛', name: 'Fresh Milk', desc: '100% Pure & Fresh Daily', color: '#81C784' },
    { icon: '🧈', name: 'Organic Ghee', desc: 'Traditional Method', color: '#2E7D32' },
    { icon: '🧀', name: 'Paneer', desc: 'Soft & Delicious', color: '#1B5E20' },
    { icon: '🌾', name: 'Organic Grains', desc: 'Chemical Free Farming', color: '#F9A825' },
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-cream-white to-white" style={{width: '80%',margin: '0 auto'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4" style={{padding: '35px 0px'}}>Featured Products</h2>
          <p className="text-xl text-gray-600">Our most popular items loved by customers</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        style={{padding: '35px 0px'}}>
          {featured.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4"
              style={{borderColor: item.color}} style={{padding: '35px 0px'}}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-dark-green mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
              <button
                className="px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300"
                style={{backgroundColor: item.color,padding: '5px 10px',margin:'15px 0px'}}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                Learn More
              </button>
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
          <Link
            to="/products"
            className="px-8 py-4 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
            style={{backgroundColor: '#2E7D32'}}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1B5E20';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2E7D32';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          style={{    padding: '10px 15px'}}>
            View All Products →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
