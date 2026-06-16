import { motion } from 'framer-motion';
import { FaLeaf, FaLightbulb, FaAward, FaUsers } from 'react-icons/fa';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const timeline = [
    { year: 'फाउंडेशन', event: 'बिगन विद अ काउ गौशाला एंड ट्रेडिशनल बिलोना डेयरी' },
    { year: 'ग्रोथ', event: 'स्केल्ड टू 200 गिर काउज़ प्रोड्यूसिंग 2,000 लीटर्स ऑफ A2 मिल्क डेली' },
    { year: 'इंटीग्रेशन', event: 'ऐडेड CNG बायोगैस, बायोफर्टिलाइज़र एंड पंचगव्य प्रोडक्ट लाइन्स' },
    { year: 'टुडे', event: '1000+ नैचुरल प्रोडक्ट्स एंड अ ट्रांसपेरेंट इन्वेस्टर प्लेटफॉर्म' },
  ];

  const values = [
    {
      icon: FaLeaf,
      title: 'सस्टेनेबिलिटी',
      description: 'कमिटेड टू इको-फ्रेंडली फार्मिंग प्रैक्टिसेज'
    },
    {
      icon: FaAward,
      title: 'क्वालिटी',
      description: 'प्रीमियम प्रोडक्ट्स मीटिंग हाइएस्ट स्टैंडर्ड्स'
    },
    {
      icon: FaUsers,
      title: 'कम्युनिटी',
      description: 'सपोर्टिंग लोकल फार्मर्स एंड फैमिलीज़'
    },
    {
      icon: FaLightbulb,
      title: 'इनोवेशन',
      description: 'मॉडर्न टेक्नीक्स फॉर बेटर फार्मिंग'
    },
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">अबाउट पालनहार फार्म्स</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            गौ सेवा इज़ अवर आइडेंटिटी — बिल्डिंग अ सस्टेनेबल फ्यूचर थ्रू प्योर
            डेयरी एंड ऑर्गेनिक एग्रीकल्चर
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <motion.div variants={itemVariants} className="card bg-gradient-to-br from-primary-green/10 to-light-green/10 p-8">
            <h3 className="text-2xl font-bold text-primary-green mb-4">अवर मिशन</h3>
            <p className="text-gray-700 leading-relaxed">
              गौ सेवा, गौ संवर्धन, गौ समृद्धि — सर्विंग एंड प्रोटेक्टिंग अवर काउज़
              फर्स्ट, एंड फ्रॉम दैट केयर प्रोवाइडिंग हेल्दी डेयरी प्रोडक्ट्स एंड सस्टेनेबल
              एग्रीकल्चर सॉल्यूशंस दैट नरिश फैमिलीज़ एंड प्रोटेक्ट अवर एनवायरनमेंट.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="card bg-gradient-to-br from-golden/10 to-orange-100/10 p-8">
            <h3 className="text-2xl font-bold text-dark-green mb-4">अवर विज़न</h3>
            <p className="text-gray-700 leading-relaxed">
              बिल्डिंग अ ग्रीनर एंड हेल्दियर फ्यूचर बाय एडवांसिंग सस्टेनेबल फार्मिंग प्रैक्टिसेज. वी एनविज़न अ वर्ल्ड वेयर एवरी फैमिली हैज़ एक्सेस टू प्योर, ऑर्गेनिक फूड वाइल प्रोटेक्टिंग अवर प्लैनेट फॉर फ्यूचर जेनरेशन्स.
            </p>
          </motion.div>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card bg-white p-8 md:p-12 mb-16 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-dark-green mb-6">अवर जर्नी</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                पालनहार वाज़ फाउंडेड ऑन द प्रिंसिपल ऑफ &ldquo;वन काउ, मेनी प्रोडक्ट्स, इनफिनिट
                पॉसिबिलिटीज़&rdquo;. फ्रॉम अवर फार्म ऑन NH-48 नियर राजोकरी विलेज, न्यू दिल्ली, वी
                बिल्ट अ मॉडर्न गौशाला ऑफ इंडिजिनस काउज़ केयर्ड फॉर विद नैचुरल फीड
                एंड क्रुएल्टी-फ्री प्रैक्टिसेज.
              </p>
              <p className="text-gray-700 leading-relaxed">
                टुडे अवर 200 गिर काउज़ प्रोड्यूस अराउंड 2,000 लीटर्स ऑफ A2 मिल्क एवरी डे —
                चर्न्ड इनटू बिलोना घी, मक्खन, पनीर एंड दही द ट्रेडिशनल वे, एंड
                ट्रस्टेड बाय हेल्थ-कॉन्शियस फैमिलीज़ अक्रॉस दिल्ली NCR.
              </p>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                अवर इंटीग्रेटेड डेयरी सिस्टम टर्न्स एवरी आउटपुट इनटू वैल्यू: गोबर बिकम्स
                कम्प्रेस्ड बायोगैस (CBG) एंड वर्मी कम्पोस्ट, गोमूत्र बिकम्स आयुर्वेदिक
                पंचगव्य प्रोडक्ट्स — ओवर 1000+ नैचुरल प्रोडक्ट्स फ्रॉम अ सिंगल इकोसिस्टम.
              </p>
              <p className="text-gray-700 leading-relaxed">
                अवर जर्नी कंटिन्यूज़ ऐज़ वी एक्सपैंड अवर प्रोडक्ट रेंज, इम्प्रूव अवर फार्मिंग प्रैक्टिसेज, एंड इन्स्पायर अदर फार्मर्स टू एडॉप्ट सस्टेनेबल मेथड्स फॉर अ ग्रीनर प्लैनेट.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-dark-green mb-8 text-center">अवर टाइमलाइन</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card bg-gradient-to-br from-primary-green/20 to-light-green/20 p-6 text-center hover:shadow-lg"
              >
                <p className="text-2xl font-bold text-primary-green mb-2">{item.year}</p>
                <p className="text-gray-700 text-sm font-semibold">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-dark-green mb-8 text-center">अवर कोर वैल्यूज़</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="card bg-white p-6 text-center hover:shadow-xl hover:bg-cream-white transition-all"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-br from-primary-green to-dark-green rounded-full p-4 text-white">
                      <Icon size={32} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-dark-green mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
