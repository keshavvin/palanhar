import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const features = [
    {
      icon: '🌿',
      title: 'जैविक प्रमाणित',
      description: 'हानिकारक कीटनाशकों के बिना पूर्ण रूप से प्रमाणित जैविक खेती'
    },
    {
      icon: '📦',
      title: 'रोज़ाना ताज़ी आपूर्ति',
      description: 'अधिकतम पोषण के लिए उसी दिन तोड़े और पहुँचाए गए ताज़ा उत्पाद'
    },
    {
      icon: '🌍',
      title: 'सतत पद्धतियाँ',
      description: 'पर्यावरण और मिट्टी की रक्षा करने वाली पर्यावरण-अनुकूल खेती के तरीके'
    },
    {
      icon: '👥',
      title: 'अनुभवी टीम',
      description: 'डेयरी फार्मिंग और सतत कृषि में 20+ वर्षों की विशेषज्ञता'
    },
    {
      icon: '🐄',
      title: 'पहले गौ सेवा',
      description: 'हमारी गौशाला की हर गाय के लिए बिना क्रूरता की देखभाल, प्राकृतिक चारा और आजीवन आश्रय'
    },
    {
      icon: '✓',
      title: 'गुणवत्ता आश्वासन',
      description: 'उत्पादन के हर चरण पर कठोर परीक्षण और गुणवत्ता नियंत्रण'
    },
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">पालनहार फार्म्स को क्यों चुनें</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            सब कुछ गौ सेवा से शुरू होता है — खुश और भली-भाँति देखभाल की गई गायें
            सबसे शुद्ध डेयरी और कृषि उत्पाद देती हैं
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="card bg-white p-8 group hover:shadow-2xl hover:border-l-4 hover:border-l-primary-green transition-all duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-green mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card bg-gradient-to-r from-primary-green/10 to-light-green/10 p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-dark-green mb-8 text-center">हमारे प्रमाणन और पुरस्कार</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🥇', label: 'ISO 9001 प्रमाणित' },
              { icon: '🌱', label: 'जैविक प्रमाणित' },
              { icon: '🏆', label: 'सर्वश्रेष्ठ फार्म पुरस्कार' },
              { icon: '⭐', label: '5-स्टार रेटेड' },
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{cert.icon}</div>
                <p className="font-semibold text-dark-green text-sm">{cert.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
