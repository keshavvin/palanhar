import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    { number: '1', title: 'गौ सेवा', desc: 'हमारी गिर गायों के लिए स्नेहपूर्ण देखभाल, प्राकृतिक चारा और स्वच्छ आश्रय', icon: '🐄' },
    { number: '2', title: 'जैविक खेती', desc: 'गोबर और गोमूत्र हमारी रसायन-मुक्त खेती को शक्ति देते हैं', icon: '🌱' },
    { number: '3', title: 'ताज़ा उत्पादन', desc: 'A2 डेयरी और पंचगव्य उत्पाद रोज़ ताज़ा बनाए जाते हैं', icon: '⚡' },
    { number: '4', title: 'त्वरित डिलीवरी', desc: 'आपके दरवाज़े तक तेज़ डिलीवरी', icon: '🚚' },
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
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">हमारी प्रक्रिया</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">गौशाला से आपकी मेज़ तक, हम हर चरण पर गुणवत्ता और देखभाल सुनिश्चित करते हैं</p>
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
            हर उत्पाद कठोर गुणवत्ता जाँच से गुज़रता है ताकि आपको सर्वश्रेष्ठ ही मिले
          </p>
        </motion.div>
      </div>
    </section>
  );
}
