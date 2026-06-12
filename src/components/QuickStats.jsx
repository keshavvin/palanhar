import { motion } from 'framer-motion';

export default function QuickStats() {
  const stats = [
    { icon: '🌾', number: '500+', label: 'Acres of Farmland', color: '#2E7D32' },
    { icon: '🐄', number: '500+', label: 'Healthy Cattle', color: '#81C784' },
    { icon: '👨‍🌾', number: '1000+', label: 'Happy Customers', color: '#1B5E20' },
    { icon: '⭐', number: '4.9/5', label: 'Customer Rating', color: '#F9A825' },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-primary-green via-green-600 to-dark-green text-white" style={{ padding: '20px' ,margin:'20px 0px'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{     margin: '0 auto',padding: '20px'}}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl mb-3">{stat.icon}</div>
              <div className="text-2xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <p className="text-sm md:text-base font-semibold opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
