import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const pillars = [
  {
    hindi: 'गो सेवा',
    title: 'सेवा',
    desc: 'हमारी गौशाला की हर गाय के लिए प्रतिदिन देखभाल, प्राकृतिक चारा, स्वच्छ आश्रय और पशु-चिकित्सा सुविधा।',
    icon: '🙏',
  },
  {
    hindi: 'गो संवर्धन',
    title: 'पालन-पोषण',
    desc: 'हमारी देसी गिर नस्ल का संरक्षण और संवर्धन — क्रूरता-रहित प्रजनन और दूध देने के वर्षों के बाद भी आजीवन आश्रय।',
    icon: '🐄',
  },
  {
    hindi: 'गो समृद्धि',
    title: 'समृद्धि',
    desc: 'भली-भाँति देखभाल की गई गायें शुद्ध A2 डेयरी, पंचगव्य और उपजाऊ मिट्टी देती हैं — किसानों, परिवारों और निवेशकों के लिए समृद्धि।',
    icon: '🌾',
  },
];

export default function GauSevaHighlight() {
  return (
    <section className="section bg-cream-white/60">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="section-eyebrow">गौ सेवा</span>
          <h2 className="mb-4">पहले सेवा। बाकी सब उसके बाद।</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            एक गाय, हमारी पहचान — हमारा संकल्प, सबका कल्याण। पालनहार
            का हर उत्पाद और हर निवेश हमारी गायों की स्नेहपूर्ण सेवा
            से ही आरंभ होता है।
          </p>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.hindi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card border border-primary-green/10 bg-white p-6 text-center sm:p-8"
            >
              <div className="mb-4 text-5xl" aria-hidden="true">{p.icon}</div>
              <p className="font-display text-2xl font-bold text-golden">{p.hindi}</p>
              <h3 className="mb-3 text-xl">{p.title}</h3>
              <p className="leading-relaxed text-gray-600">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link to="/gau-seva" className="btn btn-primary group flex items-center gap-2">
            गौ सेवा को जानें
            <FaArrowRight className="transition-transform group-hover:translate-x-2" aria-hidden="true" />
          </Link>
          <Link to="/contact" className="btn btn-outline">
            फार्म भ्रमण की योजना बनाएँ
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
