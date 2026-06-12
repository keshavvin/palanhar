import { motion } from 'framer-motion';

export default function Certifications() {
  const certs = [
    { icon: '🏆', title: 'ISO 9001', subtitle: 'Quality Management' },
    { icon: '🌱', title: 'Organic Certified', subtitle: 'Govt. Approved' },
    { icon: '⭐', title: 'Award Winner', subtitle: '2023 Best Farm' },
    { icon: '✓', title: 'Food Safety', subtitle: 'Standards Met' },
    { icon: '📜', title: 'Licensed', subtitle: 'Fully Registered' },
    { icon: '🛡️', title: 'Assured', subtitle: 'Quality Guarantee' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-cream-white/50"  style={{margin:'0 auto',display:'block',width:'80%',textAlign:'center'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        style={{margin:'40 auto',padding:'20px 20px'}}>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">Certifications & Awards</h2>
          <p className="text-xl text-gray-600">Trusted by thousands, certified by authorities</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4" style={{borderColor: '#2E7D32',padding:'20px 20px'}}
             >
              <div className="text-4xl mb-3">{cert.icon}</div>
              <h3 className="font-bold text-dark-green mb-1">{cert.title}</h3>
              <p className="text-xs text-gray-600">{cert.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
         style={{borderColor: '#2E7D32', margin:'0 auto', textAlign:'center',padding:'20px 20px'}}>
          <div className="inline-block bg-gradient-to-r from-primary-green to-dark-green text-white px-8 py-6 rounded-xl shadow-lg">
            <p className="text-lg font-semibold mb-2">🤝 Trusted Trust Partner</p>
            <p className="text-sm opacity-90">Serving thousands of families with integrity and quality for over 10 years</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
