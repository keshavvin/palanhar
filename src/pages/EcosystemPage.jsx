import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaSeedling,
  FaVenus,
  FaHandHoldingHeart,
  FaUsers,
  FaHeartbeat,
  FaMobileAlt,
  FaLeaf,
  FaSolarPanel,
  FaEye,
  FaBullseye,
  FaCheckCircle,
  FaTractor,
  FaShieldAlt,
  FaHandshake,
  FaIndustry,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaBook,
  FaStore,
  FaGift,
  FaChartLine,
  FaFlag,
  FaArrowRight,
} from 'react-icons/fa';
import { FaCow } from 'react-icons/fa6';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const pillars = [
  { icon: FaCow, title: 'डेयरी फार्मिंग', desc: 'हाई क्वालिटी मिल्क प्रोडक्शन विद बेस्ट एनिमल केयर, मॉडर्न इन्फ्रास्ट्रक्चर एंड हाइजीनिक प्रोसेसिंग।' },
  { icon: FaSeedling, title: 'स्मार्ट एग्रीकल्चर', desc: 'ऑर्गेनिक & नेचुरल फार्मिंग विद मॉडर्न टेक्नोलॉजी, इरिगेशन सोल्यूशन्स एंड वैल्यू चेन डेवलपमेंट।' },
  { icon: FaVenus, title: 'वीमेन एम्पावरमेंट', desc: 'एम्पावरिंग वीमेन थ्रू ट्रेनिंग, सेल्फ हेल्प ग्रुप्स, माइक्रो-एंटरप्राइज़ेज़ एंड लीडरशिप अपॉर्चुनिटीज़।' },
  { icon: FaHandHoldingHeart, title: 'एल्डर केयर', desc: 'रिस्पेक्ट, केयर एंड सपोर्ट फॉर अवर एल्डर्स विद हेल्थ, न्यूट्रिशन एंड डिग्निटी इन अ लविंग एनवायरनमेंट।' },
  { icon: FaUsers, title: 'रूरल एम्प्लॉयमेंट', desc: 'क्रिएटिंग सस्टेनेबल जॉब्स इन विलेजेस अक्रॉस डेयरी, एग्रीकल्चर, लॉजिस्टिक्स, प्रोसेसिंग, सेल्स एंड सर्विसेज।' },
  { icon: FaHeartbeat, title: 'न्यूट्रिशन & हेल्थ', desc: 'न्यूट्रिशस डेयरी प्रोडक्ट्स एंड हेल्दी फूड ऑप्शन्स फॉर अ स्ट्रॉन्गर एंड हेल्दियर भारत।' },
  { icon: FaMobileAlt, title: 'टेक्नोलॉजी & ऐप', desc: 'डिजिटल प्लेटफॉर्म फॉर फार्मर्स, रियल टाइम सपोर्ट, मार्केट एक्सेस, ट्रांसपेरेंट ऑपरेशन्स एंड डेटा ड्रिवन ग्रोथ।' },
  { icon: FaSolarPanel, title: 'सस्टेनेबल ग्रोथ', desc: 'इको-फ्रेंडली प्रैक्टिसेज़, रिन्यूएबल एनर्जी, वॉटर कंज़र्वेशन एंड कंट्रिब्यूटिंग टू अ सेल्फ-रिलायंट एंड डेवलप्ड भारत।' },
];

const highlights = [
  { icon: FaIndustry, label: 'मॉडर्न इन्फ्रास्ट्रक्चर' },
  { icon: FaShieldAlt, label: 'क्वालिटी & प्योरिटी एश्योर्ड' },
  { icon: FaTractor, label: 'फार्मर फर्स्ट अप्रोच' },
  { icon: FaLeaf, label: 'एनवायरनमेंट फ्रेंडली' },
  { icon: FaUsers, label: 'कम्युनिटी डेवलपमेंट' },
  { icon: FaFlag, label: 'नेशन बिल्डिंग' },
];

const appFeatures = [
  { icon: FaTractor, label: 'फार्मर सपोर्ट' },
  { icon: FaStore, label: 'मार्केट लिंकेज' },
  { icon: FaCow, label: 'डेयरी मैनेजमेंट' },
  { icon: FaHeartbeat, label: 'हेल्थ & न्यूट्रिशन' },
  { icon: FaBook, label: 'लर्निंग & ट्रेनिंग' },
  { icon: FaGift, label: 'स्कीम्स & बेनिफिट्स' },
];

const partners = [
  { icon: FaTractor, label: 'फॉर फार्मर्स' },
  { icon: FaUsers, label: 'फॉर कम्युनिटीज़' },
  { icon: FaChartLine, label: 'फॉर इन्वेस्टर्स' },
  { icon: FaFlag, label: 'फॉर भारत' },
];

const contactRows = [
  { icon: FaMapMarkerAlt, label: 'रजिस्टर्ड ऑफिस / हेड ऑफिस', value: 'C-773, Flat No-C2, 2nd Floor, Kh. No. 932/2, C-Block, JJVTS Garden, Chhatarpur Ext, New Delhi – 110074' },
  { icon: FaMapMarkerAlt, label: 'विलेज & P.O. ऑफिस', value: 'Aogram, Dist. Purba Bardhaman, West Bengal – 713121' },
  { icon: FaPhoneAlt, label: 'टेलीफोन / मोबाइल', value: '+91 74289 40883 · +91 90648 86175 · +91 77680 62289' },
  { icon: FaGlobe, label: 'वेबसाइट', value: 'www.palanhar.com' },
  { icon: FaEnvelope, label: 'ईमेल', value: 'info@palanhar.com' },
];

export default function EcosystemPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-dark-green text-white">
        <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true">
          <img src="/hero-banner-3.jpg" alt="" className="h-full w-full object-cover" draggable="false" />
          <div className="absolute inset-0 bg-gradient-to-br from-dark-green via-dark-green/85 to-primary-green/70" />
        </div>
        <div className="container-custom relative z-10 py-20 text-center md:py-28">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span
              variants={fadeUp}
              className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border-2 border-golden/50 bg-white shadow-lg"
            >
              <img src="/palanhar-logo.png" alt="" className="h-14 w-14 object-contain" draggable="false" />
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-display text-5xl font-extrabold uppercase tracking-tight !text-white sm:text-6xl">
              पालनहार
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-3 font-display text-2xl font-bold text-golden sm:text-3xl">
              कम्प्लीट रूरल लाइफ इकोसिस्टम फॉर भारत
            </motion.p>
            <motion.p variants={fadeUp} className="mt-3 text-lg text-white/85">
              वन विज़न। वन इकोसिस्टम। लिमिटलेस इम्पैक्ट।
            </motion.p>
            <motion.p variants={fadeUp} className="mt-2 text-sm font-semibold uppercase tracking-widest text-light-green">
              बिल्डिंग अ सस्टेनेबल टुमॉरो — फॉर जेनरेशन्स टू कम
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* COMPLETE ECOSYSTEM — 8 pillars */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 text-center">
            <span className="section-eyebrow">अवर कम्प्लीट इकोसिस्टम</span>
            <h2 className="mb-3">एक एकीकृत ग्रामीण जीवन मॉडल</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              डेयरी से लेकर टेक्नोलॉजी तक — आठ स्तंभ जो मिलकर एक आत्मनिर्भर, समृद्ध भारत बनाते हैं।
            </p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="card border border-primary-green/10 bg-white p-6 text-center">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-green/10 text-primary-green">
                  <p.icon size={26} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-dark-green">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VISION & MISSION + KEY HIGHLIGHTS */}
      <section className="section bg-[#E8F5E9]/50">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-primary-green/10 bg-white p-6 shadow-sm sm:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-green/10 text-primary-green">
                <FaEye size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-xl">अवर विज़न</h3>
              <p className="mt-2 leading-relaxed text-gray-600">
                टू बिल्ड अ सेल्फ-रिलायंट, एम्पावर्ड एंड प्रॉस्परस रूरल भारत थ्रू इनोवेशन, कम्पैशन एंड सस्टेनेबल डेवलपमेंट।
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-2xl border border-primary-green/10 bg-white p-6 shadow-sm sm:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-golden/15 text-golden">
                <FaBullseye size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-xl">अवर मिशन</h3>
              <p className="mt-2 leading-relaxed text-gray-600">
                टू क्रिएट वैल्यू फॉर फार्मर्स, कम्युनिटीज़ एंड स्टेकहोल्डर्स बाय डिलिवरिंग क्वालिटी प्रोडक्ट्स, अपॉर्चुनिटीज़ एंड केयर विद इंटीग्रिटी एंड एक्सिलेंस।
              </p>
            </motion.div>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-10">
            <h3 className="mb-5 text-center text-xl">की हाइलाइट्स</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {highlights.map((h) => (
                <motion.div key={h.label} variants={fadeUp} className="flex flex-col items-center gap-2 rounded-xl border border-primary-green/10 bg-white p-4 text-center shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-green/10 text-primary-green">
                    <h.icon size={18} aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold text-dark-green sm:text-sm">{h.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* APP FEATURES */}
      <section className="section bg-white">
        <div className="container-custom grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">पालनहार ऐप</span>
            <h2 className="mb-4">पालनहार ऐप फीचर्स</h2>
            <p className="mb-6 text-gray-600">
              फार्मर्स एंड कम्युनिटीज़ के लिए एक डिजिटल प्लेटफॉर्म — सपोर्ट, मार्केट एक्सेस एंड ट्रांसपेरेंसी, सब एक जगह।
            </p>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {appFeatures.map((f) => (
                <motion.div key={f.label} variants={fadeUp} className="flex items-center gap-3 rounded-xl border border-primary-green/10 bg-[#E8F5E9]/50 p-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-green/10 text-primary-green">
                    <f.icon size={18} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-dark-green">{f.label}</span>
                </motion.div>
              ))}
            </motion.div>
            <Link to="/app" className="btn btn-primary mt-6 inline-flex items-center gap-2">
              ऐप खोलें <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
          {/* Phone mock */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex justify-center">
            <div className="w-60 rounded-[2rem] border-[7px] border-gray-900 bg-gray-900 shadow-2xl">
              <div className="overflow-hidden rounded-[1.5rem] bg-cream-white">
                <div className="flex items-center gap-2 bg-primary-green px-4 py-3">
                  <img src="/palanhar-logo.png" alt="" className="h-7 w-7 object-contain" draggable="false" />
                  <span className="font-display text-base font-bold text-white">पालनहार</span>
                </div>
                <div className="grid grid-cols-3 gap-2.5 p-4">
                  {appFeatures.map((f) => (
                    <div key={f.label} className="flex flex-col items-center gap-1 rounded-xl bg-white px-1 py-3 shadow-sm">
                      <f.icon className="text-primary-green" aria-hidden="true" />
                      <span className="text-center text-[8px] font-semibold leading-tight text-dark-green">{f.label}</span>
                    </div>
                  ))}
                </div>
                <div className="px-4 pb-4">
                  <div className="rounded-xl bg-golden/15 px-3 py-2 text-center text-[11px] font-bold text-amber-700">
                    पालनहार फ्रेश & नेचुरल
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PARTNER WITH PALANHAR */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-green to-dark-green py-16 text-white md:py-20">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="!text-white">पार्टनर विद पालनहार</h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-white/85">
              टुगेदर, लेट्स बिल्ड अ स्ट्रॉन्गर, हेल्दियर एंड मोर प्रॉस्परस रूरल इंडिया।
            </p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {partners.map((p) => (
              <motion.div key={p.label} variants={fadeUp} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                <p.icon className="mx-auto mb-2 text-2xl text-golden" aria-hidden="true" />
                <p className="text-sm font-semibold">{p.label}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/invest" className="btn btn-golden inline-flex items-center justify-center gap-2">
              निवेश करें <FaArrowRight aria-hidden="true" />
            </Link>
            <Link to="/contact" className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary-green">
              कॉन्टैक्ट करें
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section bg-cream-white/60">
        <div className="container-custom">
          <div className="mb-10 text-center">
            <span className="section-eyebrow">कनेक्ट विद अस</span>
            <h2 className="mb-3">एम्पावरिंग विलेजेस, एनरिचिंग लाइव्स</h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {contactRows.map((c) => (
              <motion.div key={c.label} variants={fadeUp} className="flex items-start gap-3 rounded-2xl border border-primary-green/10 bg-white p-5 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-green/10 text-primary-green">
                  <c.icon aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-golden">{c.label}</p>
                  <p className="mt-1 text-sm text-gray-700">{c.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
