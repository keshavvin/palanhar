import { motion } from 'framer-motion';

export default function QuickStats() {
  const stats = [
    { icon: '🐄', number: '200', label: 'Desi Gir Cows' },
    { icon: '🥛', number: '2,000 L', label: 'Milk Production / Day' },
    { icon: '🌿', number: '1000+', label: 'Panchgavya & Natural Products' },
    { icon: '📈', number: '₹80 Cr', label: '5-Year Revenue Target' },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-primary-green via-primary-green to-dark-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
