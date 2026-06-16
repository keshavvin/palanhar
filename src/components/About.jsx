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
    { year: 'स्थापना', event: 'एक गौशाला और पारंपरिक बिलोना डेयरी से शुरुआत' },
    { year: 'विकास', event: '200 गिर गायों तक विस्तार, प्रतिदिन 2,000 लीटर A2 दूध का उत्पादन' },
    { year: 'एकीकरण', event: 'CNG बायोगैस, जैव-उर्वरक और पंचगव्य उत्पाद श्रृंखला जोड़ी' },
    { year: 'आज', event: '1000+ प्राकृतिक उत्पाद और एक पारदर्शी निवेशक मंच' },
  ];

  const values = [
    {
      icon: FaLeaf,
      title: 'सततता',
      description: 'पर्यावरण-अनुकूल खेती की प्रथाओं के प्रति प्रतिबद्ध'
    },
    {
      icon: FaAward,
      title: 'गुणवत्ता',
      description: 'उच्चतम मानकों पर खरे उतरते प्रीमियम उत्पाद'
    },
    {
      icon: FaUsers,
      title: 'समुदाय',
      description: 'स्थानीय किसानों और परिवारों का सहयोग'
    },
    {
      icon: FaLightbulb,
      title: 'नवाचार',
      description: 'बेहतर खेती के लिए आधुनिक तकनीकें'
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
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">पालनहार फार्म्स के बारे में</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            गौ सेवा हमारी पहचान है — शुद्ध डेयरी और जैविक कृषि के माध्यम से
            एक टिकाऊ भविष्य का निर्माण
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
            <h3 className="text-2xl font-bold text-primary-green mb-4">हमारा मिशन</h3>
            <p className="text-gray-700 leading-relaxed">
              गौ सेवा, गौ संवर्धन, गौ समृद्धि — सबसे पहले अपनी गायों की सेवा और
              रक्षा करना, और उसी देखभाल से ऐसे स्वस्थ डेयरी उत्पाद और टिकाऊ कृषि
              समाधान प्रदान करना जो परिवारों का पोषण करें और हमारे पर्यावरण की रक्षा करें.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="card bg-gradient-to-br from-golden/10 to-orange-100/10 p-8">
            <h3 className="text-2xl font-bold text-dark-green mb-4">हमारा विज़न</h3>
            <p className="text-gray-700 leading-relaxed">
              टिकाऊ खेती की प्रथाओं को आगे बढ़ाकर एक हरित और स्वस्थ भविष्य का निर्माण. हम एक ऐसी दुनिया की कल्पना करते हैं जहाँ हर परिवार को शुद्ध, जैविक भोजन उपलब्ध हो और साथ ही हम आने वाली पीढ़ियों के लिए अपनी धरती की रक्षा करें.
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
          <h3 className="text-3xl font-bold text-dark-green mb-6">हमारी यात्रा</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                पालनहार की स्थापना &ldquo;एक गाय, अनेक उत्पाद, असीम
                संभावनाएँ&rdquo; के सिद्धांत पर हुई थी. NH-48 पर राजोकरी गाँव के पास, नई दिल्ली में स्थित अपने फार्म में, हमने
                देसी गायों की एक आधुनिक गौशाला बनाई, जिनकी देखभाल प्राकृतिक आहार
                और क्रूरता-रहित प्रथाओं के साथ की जाती है.
              </p>
              <p className="text-gray-700 leading-relaxed">
                आज हमारी 200 गिर गायें प्रतिदिन लगभग 2,000 लीटर A2 दूध देती हैं —
                जिससे पारंपरिक विधि से बिलोना घी, मक्खन, पनीर और दही बनाया जाता है, और
                जिस पर दिल्ली NCR भर के स्वास्थ्य के प्रति सजग परिवार भरोसा करते हैं.
              </p>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                हमारी एकीकृत डेयरी प्रणाली हर उत्पादन को मूल्य में बदल देती है: गोबर
                कम्प्रेस्ड बायोगैस (CBG) और वर्मी कम्पोस्ट बनता है, गोमूत्र आयुर्वेदिक
                पंचगव्य उत्पाद बनता है — एक ही पारिस्थितिकी तंत्र से 1000+ प्राकृतिक उत्पाद.
              </p>
              <p className="text-gray-700 leading-relaxed">
                हमारी यात्रा जारी है — हम अपनी उत्पाद श्रृंखला का विस्तार कर रहे हैं, अपनी खेती की प्रथाओं को बेहतर बना रहे हैं, और एक हरित धरती के लिए अन्य किसानों को टिकाऊ तरीके अपनाने के लिए प्रेरित कर रहे हैं.
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
          <h3 className="text-3xl font-bold text-dark-green mb-8 text-center">हमारी समय-यात्रा</h3>
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
          <h3 className="text-3xl font-bold text-dark-green mb-8 text-center">हमारे मूल मूल्य</h3>
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
