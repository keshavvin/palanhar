import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaGift, FaArrowRight } from 'react-icons/fa';

// "राशन नहीं, परिवार का स्वास्थ्य और समृद्धि" — gau-based family prosperity kits.
const samriddhiGroups = [
  {
    icon: '🌾',
    title: 'खाद्यान्न',
    items: ['आटा – 10 kg', 'चावल – 5 kg', 'दाल (अरहर/मूंग) – 2 kg', 'चना – 2 kg', 'गुड़ – 2 kg'],
  },
  {
    icon: '🥛',
    title: 'पोषण',
    items: ['देसी गौ A2 घी – 500 gm', 'गौ-दूध से बना पनीर – 500 gm', 'शहद – 500 gm'],
  },
  {
    icon: '🌿',
    title: 'पंचगव्य एवं स्वास्थ्य',
    items: ['गौ अर्क – 500 ml', 'हर्बल टूथ पाउडर – 100 gm', 'पंचगव्य साबुन – 4 पीस', 'हर्बल शैम्पू – 500 ml'],
  },
  {
    icon: '🌱',
    title: 'रसोई एवं मसाले',
    items: ['हल्दी – 200 gm', 'धनिया – 200 gm', 'जीरा – 100 gm', 'लाल मिर्च – 100 gm', 'सेंधा नमक – 1 kg'],
  },
  {
    icon: '🧼',
    title: 'घरेलू उपयोग',
    items: ['हर्बल डिटर्जेंट – 1 kg', 'फिनाइल (गौ-आधारित) – 1 L'],
  },
  {
    icon: '🌳',
    title: 'बोनस',
    items: ['1 फलदार पौधा (आम/अमरूद)', '1 kg जैविक खाद'],
  },
];

const premiumItems = [
  'A2 घी – 1 kg',
  'शुद्ध शहद – 1 kg',
  'गौ अर्क – 1 L',
  'पंचगव्य साबुन – 6 पीस',
  'जैविक दालें – 5 kg',
  'जैविक आटा – 10 kg',
  'जैविक चावल – 5 kg',
  'फलदार पौधा – 2 नग',
  'जैविक खाद – 5 kg',
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SamriddhiKit() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-cream-white/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-eyebrow">
            <FaGift className="mr-1 inline text-golden" aria-hidden="true" /> समृद्धि किट
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">
            पालनहार परिवार समृद्धि किट
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            राशन नहीं, परिवार का स्वास्थ्य और समृद्धि — गौ-आधारित पोषण, पंचगव्य एवं
            जैविक उत्पादों का सम्पूर्ण किट।
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* समृद्धि किट — grouped contents */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="card bg-white p-6 sm:p-8 lg:col-span-2"
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-2xl font-bold text-dark-green">🐄 परिवार समृद्धि किट</h3>
              <span className="rounded-full bg-light-green/20 px-4 py-1 text-sm font-semibold text-primary-green">
                विशेष संस्करण
              </span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {samriddhiGroups.map((group) => (
                <div key={group.title} className="rounded-xl border border-light-green/30 bg-cream-white/40 p-5">
                  <h4 className="mb-3 flex items-center gap-2 font-bold text-primary-green">
                    <span className="text-xl" aria-hidden="true">{group.icon}</span>
                    {group.title}
                  </h4>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <FaCheckCircle className="mt-0.5 shrink-0 text-light-green" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* प्रीमियम किट */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="card flex flex-col bg-gradient-to-br from-primary-green to-dark-green p-6 text-white sm:p-8"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">💎</span>
              <span className="rounded-full bg-golden/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-dark-green">
                प्रीमियम
              </span>
            </div>
            <h3 className="mb-1 text-2xl font-bold">"एक गाय – एक परिवार" प्रीमियम किट</h3>
            <p className="mb-5 text-sm text-white/80">शुद्ध, जैविक एवं पंचगव्य — एक परिवार के लिए सम्पूर्ण समृद्धि।</p>
            <ul className="space-y-3">
              {premiumItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <FaCheckCircle className="mt-0.5 shrink-0 text-golden" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="btn btn-golden mt-7 inline-flex items-center justify-center gap-2 hover:scale-105"
            >
              किट बुक करें
              <FaArrowRight aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-lg font-semibold text-golden"
        >
          "राशन नहीं, परिवार का स्वास्थ्य और समृद्धि"
        </motion.p>
      </div>
    </section>
  );
}
