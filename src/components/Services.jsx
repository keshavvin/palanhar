import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">अवर सर्विसेज</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            कॉम्प्रिहेन्सिव सॉल्यूशंस फॉर डेयरी फार्मिंग एंड सस्टेनेबल एग्रीकल्चर
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="card bg-white p-8 group hover:shadow-2xl"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 1, rotate: 0 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-br from-primary-green to-dark-green rounded-lg flex items-center justify-center mb-6 text-white group-hover:shadow-lg transition-all duration-300"
                >
                  <Icon size={32} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-dark-green mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary-green rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Enquire Link */}
                <Link
                  to="/contact"
                  className="text-primary-green font-semibold mt-6 inline-flex items-center group/link hover:text-dark-green transition-colors"
                >
                  एन्क्वायर
                  <span className="ml-2 group-hover/link:translate-x-2 transition-transform">→</span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Why Choose Our Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 card bg-gradient-to-r from-primary-green/10 to-light-green/10 p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-dark-green mb-8 text-center">व्हाई चूज़ पालनहार फार्म्स?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'एक्सपर्ट टीम',
                description: '20+ इयर्स ऑफ कम्बाइंड फार्मिंग एक्सपीरियंस एंड एक्सपर्टीज़',
                icon: '👥'
              },
              {
                title: 'मॉडर्न टेक्नोलॉजी',
                description: 'लेटेस्ट फार्मिंग इक्विपमेंट एंड सस्टेनेबल प्रैक्टिसेज',
                icon: '🔬'
              },
              {
                title: 'सर्टिफाइड ऑर्गेनिक',
                description: 'ऑफिशियल ऑर्गेनिक सर्टिफिकेशन एंड क्वालिटी अश्योरेंस',
                icon: '✅'
              },
              {
                title: 'रिलायबल सर्विस',
                description: 'ऑन-टाइम डिलीवरी विद 100% क्वालिटी गारंटी',
                icon: '🚚'
              },
              {
                title: 'फेयर प्राइसिंग',
                description: 'कॉम्पिटिटिव प्राइसेज विदाउट कॉम्प्रोमाइज़िंग क्वालिटी',
                icon: '💰'
              },
              {
                title: '24/7 सपोर्ट',
                description: 'ऑलवेज़ अवेलेबल टू असिस्ट विद योर नीड्स',
                icon: '☎️'
              },
            ].map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{reason.icon}</div>
                <h4 className="font-bold text-dark-green mb-2">{reason.title}</h4>
                <p className="text-gray-700 text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
