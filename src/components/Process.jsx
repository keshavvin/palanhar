import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    { number: '1', title: 'Gau Seva', desc: 'Loving care, natural feed and clean shelter for our Gir cows', icon: '🐄' },
    { number: '2', title: 'Organic Farming', desc: 'Gobar and gomutra power our chemical-free farming', icon: '🌱' },
    { number: '3', title: 'Fresh Production', desc: 'A2 dairy and panchgavya products made fresh daily', icon: '⚡' },
    { number: '4', title: 'Quick Delivery', desc: 'Fast delivery to your doorstep', icon: '🚚' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">From gaushala to your table, we ensure quality and care at every step</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Arrow Connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-10 w-20 h-0.5 bg-gradient-to-r from-primary-green to-transparent"></div>
              )}

              {/* Card */}
              <div className="bg-gradient-to-br from-cream-white to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full border-t-4 border-primary-green">
                {/* Step Number */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 shadow-lg bg-primary-green">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-4">{step.icon}</div>

                {/* Content */}
                <h3 className="text-xl font-bold text-dark-green mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-primary-green/10 to-light-green/10 rounded-xl border-l-4 border-primary-green"
        >
          <p className="text-center text-gray-700 text-lg font-semibold">
            Every product goes through rigorous quality checks to ensure you receive the best
          </p>
        </motion.div>
      </div>
    </section>
  );
}
