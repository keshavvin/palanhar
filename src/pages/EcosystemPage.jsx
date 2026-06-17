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
  { icon: FaCow, title: 'डेयरी फार्मिंग', desc: 'बेहतरीन पशु देखभाल, आधुनिक बुनियादी ढाँचे और स्वच्छ प्रसंस्करण के साथ उच्च गुणवत्ता वाले दूध का उत्पादन।' },
  { icon: FaSeedling, title: 'स्मार्ट कृषि', desc: 'आधुनिक तकनीक, सिंचाई समाधान और मूल्य श्रृंखला विकास के साथ जैविक व प्राकृतिक खेती।' },
  { icon: FaVenus, title: 'नारी सशक्तिकरण', desc: 'प्रशिक्षण, स्वयं सहायता समूहों, सूक्ष्म उद्यमों और नेतृत्व के अवसरों के माध्यम से महिलाओं का सशक्तिकरण।' },
  { icon: FaHandHoldingHeart, title: 'वृद्ध देखभाल', desc: 'एक स्नेहपूर्ण वातावरण में स्वास्थ्य, पोषण और सम्मान के साथ हमारे बुज़ुर्गों के लिए आदर, देखभाल और सहारा।' },
  { icon: FaUsers, title: 'ग्रामीण रोज़गार', desc: 'डेयरी, कृषि, लॉजिस्टिक्स, प्रसंस्करण, बिक्री और सेवाओं में गाँवों में स्थायी रोज़गार का सृजन।' },
  { icon: FaHeartbeat, title: 'पोषण व स्वास्थ्य', desc: 'एक मज़बूत और स्वस्थ भारत के लिए पौष्टिक डेयरी उत्पाद और स्वास्थ्यवर्धक भोजन के विकल्प।' },
  { icon: FaMobileAlt, title: 'तकनीक व ऐप', desc: 'किसानों के लिए डिजिटल प्लेटफॉर्म, रियल-टाइम सहायता, बाज़ार तक पहुँच, पारदर्शी संचालन और डेटा-आधारित विकास।' },
  { icon: FaSolarPanel, title: 'टिकाऊ विकास', desc: 'पर्यावरण-अनुकूल तौर-तरीके, नवीकरणीय ऊर्जा, जल संरक्षण और एक आत्मनिर्भर व विकसित भारत में योगदान।' },
];

const highlights = [
  { icon: FaIndustry, label: 'आधुनिक बुनियादी ढाँचा' },
  { icon: FaShieldAlt, label: 'गुणवत्ता व शुद्धता की गारंटी' },
  { icon: FaTractor, label: 'किसान सबसे पहले' },
  { icon: FaLeaf, label: 'पर्यावरण के अनुकूल' },
  { icon: FaUsers, label: 'सामुदायिक विकास' },
  { icon: FaFlag, label: 'राष्ट्र निर्माण' },
];

const appFeatures = [
  { icon: FaTractor, label: 'किसान सहायता' },
  { icon: FaStore, label: 'बाज़ार संपर्क' },
  { icon: FaCow, label: 'डेयरी प्रबंधन' },
  { icon: FaHeartbeat, label: 'स्वास्थ्य व पोषण' },
  { icon: FaBook, label: 'शिक्षण व प्रशिक्षण' },
  { icon: FaGift, label: 'योजनाएँ व लाभ' },
];

const partners = [
  { icon: FaTractor, label: 'किसानों के लिए' },
  { icon: FaUsers, label: 'समुदायों के लिए' },
  { icon: FaChartLine, label: 'निवेशकों के लिए' },
  { icon: FaFlag, label: 'भारत के लिए' },
];

const contactRows = [
  { icon: FaMapMarkerAlt, label: 'पंजीकृत कार्यालय / मुख्य कार्यालय', value: 'C-773, Flat No-C2, 2nd Floor, Kh. No. 932/2, C-Block, JJVTS Garden, Chhatarpur Ext, New Delhi – 110074' },
  { icon: FaMapMarkerAlt, label: 'ग्राम व डाकघर कार्यालय', value: 'Aogram, Dist. Purba Bardhaman, West Bengal – 713121' },
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
              भारत के लिए संपूर्ण ग्रामीण जीवन इकोसिस्टम
            </motion.p>
            <motion.p variants={fadeUp} className="mt-3 text-lg text-white/85">
              एक दृष्टि। एक इकोसिस्टम। असीम प्रभाव।
            </motion.p>
            <motion.p variants={fadeUp} className="mt-2 text-sm font-semibold uppercase tracking-widest text-light-green">
              आने वाली पीढ़ियों के लिए एक टिकाऊ कल का निर्माण
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* COMPLETE ECOSYSTEM — 8 pillars */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 text-center">
            <span className="section-eyebrow">हमारा संपूर्ण इकोसिस्टम</span>
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
              <h3 className="mt-4 text-xl">हमारी दृष्टि</h3>
              <p className="mt-2 leading-relaxed text-gray-600">
                नवाचार, करुणा और टिकाऊ विकास के माध्यम से एक आत्मनिर्भर, सशक्त और समृद्ध ग्रामीण भारत का निर्माण करना।
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-2xl border border-primary-green/10 bg-white p-6 shadow-sm sm:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-golden/15 text-golden">
                <FaBullseye size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-xl">हमारा मिशन</h3>
              <p className="mt-2 leading-relaxed text-gray-600">
                ईमानदारी और उत्कृष्टता के साथ गुणवत्तापूर्ण उत्पाद, अवसर और देखभाल प्रदान करके किसानों, समुदायों और हितधारकों के लिए मूल्य बनाना।
              </p>
            </motion.div>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-10">
            <h3 className="mb-5 text-center text-xl">मुख्य विशेषताएँ</h3>
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
            <h2 className="mb-4">पालनहार ऐप की विशेषताएँ</h2>
            <p className="mb-6 text-gray-600">
              किसानों और समुदायों के लिए एक डिजिटल प्लेटफॉर्म — सहायता, बाज़ार तक पहुँच और पारदर्शिता, सब एक जगह।
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
            <div className="w-full max-w-[17rem] rounded-[2.5rem] border-[10px] border-gray-900 bg-gray-900 shadow-2xl">
              <div className="overflow-hidden rounded-[1.8rem] bg-cream-white">
                <div className="flex items-center gap-2.5 bg-primary-green px-4 py-4">
                  <img src="/palanhar-logo.png" alt="" className="h-8 w-8 object-contain" draggable="false" />
                  <span className="font-display text-lg font-bold text-white">पालनहार</span>
                </div>
                <div className="grid grid-cols-3 gap-3 p-4">
                  {appFeatures.map((f) => (
                    <div key={f.label} className="flex aspect-square flex-col items-center justify-center gap-1.5 rounded-2xl bg-white px-1 shadow-sm">
                      <f.icon size={20} className="text-primary-green" aria-hidden="true" />
                      <span className="text-center text-[9px] font-semibold leading-tight text-dark-green">{f.label}</span>
                    </div>
                  ))}
                </div>
                <div className="px-4 pb-5">
                  <div className="rounded-xl bg-golden/15 px-3 py-2.5 text-center text-xs font-bold text-amber-700">
                    पालनहार ताज़ा व प्राकृतिक
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
            <h2 className="!text-white">पालनहार के साथ साझेदारी करें</h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-white/85">
              आइए, मिलकर एक मज़बूत, स्वस्थ और अधिक समृद्ध ग्रामीण भारत बनाएँ।
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
              संपर्क करें
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section bg-cream-white/60">
        <div className="container-custom">
          <div className="mb-10 text-center">
            <span className="section-eyebrow">हमसे जुड़ें</span>
            <h2 className="mb-3">गाँवों को सशक्त बनाना, जीवन को समृद्ध करना</h2>
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
