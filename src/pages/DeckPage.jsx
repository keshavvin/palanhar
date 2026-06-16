import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  FaLeaf,
  FaCoins,
  FaTruck,
  FaUsers,
  FaHeart,
  FaSeedling,
  FaMobileAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaUserTie,
  FaHandshake,
  FaBullseye,
  FaRupeeSign,
  FaShoppingCart,
  FaIndustry,
  FaStore,
  FaVenus,
  FaWineBottle,
  FaChartLine,
  FaArrowRight,
} from 'react-icons/fa';
import { FaCow } from 'react-icons/fa6';

// ---------------------------------------------------------------------------
// Shared deck primitives — premium investor pitch-deck infographic styling.
// Forest-green headers, mint (#E8F5E9) cards, golden accents, lots of space.
// ---------------------------------------------------------------------------

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function Slide({ children, mint = false, className = '' }) {
  return (
    <section
      className={`flex min-h-[88vh] items-center border-b border-primary-green/10 ${
        mint ? 'bg-[#E8F5E9]/50' : 'bg-white'
      } ${className}`}
    >
      <div className="container-custom w-full py-16 md:py-20">{children}</div>
    </section>
  );
}

function SlideHead({ num, title, subtitle }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-10"
    >
      <div className="flex items-center gap-3">
        {num && (
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-green text-lg font-extrabold text-white shadow-md">
            {num}
          </span>
        )}
        <h2 className="!text-dark-green text-2xl uppercase tracking-tight sm:text-3xl md:text-4xl">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="mt-3 max-w-3xl text-base text-gray-600 md:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}

function Bullet({ children }) {
  return (
    <motion.li variants={fadeUp} className="flex items-start gap-3">
      <FaCheckCircle className="mt-1 shrink-0 text-primary-green" aria-hidden="true" />
      <span className="text-base text-gray-700 md:text-lg">{children}</span>
    </motion.li>
  );
}

function IconCard({ icon: Icon, title, desc, tone = 'text-primary-green' }) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-2xl border border-primary-green/10 bg-[#E8F5E9]/60 p-5 shadow-sm sm:p-6"
    >
      <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ${tone}`}>
        <Icon size={22} aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-bold text-dark-green sm:text-lg">{title}</h3>
      {desc && <p className="mt-1.5 text-sm text-gray-600">{desc}</p>}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Slide data
// ---------------------------------------------------------------------------

const problems = [
  { icon: FaWineBottle, title: 'मिल्क ट्रस्ट गैप', desc: 'एडल्टरेशन & क्वालिटी कंसर्न्स कंज़्यूमर ट्रस्ट को कम करते हैं' },
  { icon: FaLeaf, title: 'लो फार्मर इनकम्स', desc: 'फ्रैगमेंटेड सप्लाई चेन के कारण फार्मर्स कम कमाते हैं' },
  { icon: FaCoins, title: 'रूरल कैपिटल शॉर्टेज', desc: 'गाँवों में ऑर्गनाइज़्ड इन्वेस्टमेंट & फाइनेंशियल सपोर्ट की कमी' },
  { icon: FaTruck, title: 'फ्रैगमेंटेड सप्लाई चेन', desc: 'इनएफिशिएंट लॉजिस्टिक्स से वेस्टेज & हायर कॉस्ट' },
  { icon: FaUsers, title: 'लिमिटेड रूरल एम्प्लॉयमेंट', desc: 'वीमेन & यूथ के पास सस्टेनेबल इनकम अपॉर्चुनिटीज़ नहीं' },
];

const solutionSegments = [
  { icon: FaWineBottle, label: 'डेयरी', desc: 'प्योर मिल्क & हेल्दी प्रोडक्ट्स', color: '#1565C0' },
  { icon: FaSeedling, label: 'एग्रीकल्चर', desc: 'सस्टेनेबल फार्मिंग', color: '#2E7D32' },
  { icon: FaTruck, label: 'डिलिवरी', desc: 'डायरेक्ट टू होम्स', color: '#EF6C00' },
  { icon: FaVenus, label: 'वीमेन एम्पावरमेंट', desc: '', color: '#6A1B9A' },
  { icon: FaMobileAlt, label: 'टेक्नोलॉजी', desc: 'डिजिटल प्लेटफॉर्म & ट्रांसपेरेंसी', color: '#00897B' },
];

const whyNow = [
  'राइज़िंग डिमांड फॉर हेल्दी & ट्रस्टेड फूड',
  'रैपिड डिजिटल अडॉप्शन इन भारत',
  'डेयरी कंज़म्पशन ग्रोइंग ईयर आफ्टर ईयर',
  'गवर्नमेंट फोकस ऑन रूरल इनकम & एग्री ग्रोथ',
  'शिफ्ट टुवर्ड्स डायरेक्ट-टू-कंज़्यूमर & फार्म-टू-होम मॉडल्स',
];

const markets = [
  { icon: FaCow, title: 'डेयरी मार्केट', desc: 'स्ट्रॉन्ग ग्रोथ & हाई डिमांड', tone: 'text-[#1565C0]' },
  { icon: FaSeedling, title: 'एग्रीकल्चर वैल्यू चेन', desc: 'लार्ज & एक्सपैंडिंग', tone: 'text-primary-green' },
  { icon: FaShoppingCart, title: 'ग्रोसरी & डिलिवरी', desc: 'बूमिंग सेगमेंट', tone: 'text-[#EF6C00]' },
  { icon: FaHeart, title: 'केयर इकोनॉमी', desc: 'इमर्जिंग अपॉर्चुनिटी', tone: 'text-[#6A1B9A]' },
];

const revenueStreams = [
  { icon: FaWineBottle, label: 'मिल्क सब्सक्रिप्शन्स' },
  { icon: FaLeaf, label: 'डेयरी प्रोडक्ट्स (घी, पनीर, कर्ड)' },
  { icon: FaSeedling, label: 'फार्म प्रोड्यूस सेल्स' },
  { icon: FaShoppingCart, label: 'ग्रोसरी मार्जिन्स' },
  { icon: FaHandshake, label: 'सर्विस कमीशन्स' },
  { icon: FaStore, label: 'फ्रैंचाइज़ फीस' },
  { icon: FaUsers, label: 'मेंबरशिप प्लान्स' },
  { icon: FaMobileAlt, label: 'टेक्नोलॉजी प्लेटफॉर्म इनकम' },
];

const advantages = [
  'रियल एसेट-बैक्ड ऑपरेशन्स',
  'डेली रिकरिंग डिमांड',
  'ट्रस्टेड भारत ब्रांड',
  'स्ट्रॉन्ग रूरल सोर्सिंग एडवांटेज',
  'मल्टिपल इनकम स्ट्रीम्स',
  'स्केलेबल ऐप + ऑफलाइन नेटवर्क',
  'हाई सोशल इम्पैक्ट & ESG वैल्यू',
];

const roadmap = [
  { phase: 'फेज़ 1 (0–12 मंथ्स)', points: ['वेस्ट बंगाल & दिल्ली पायलट ऑपरेशन्स', 'प्लेटफॉर्म डेवलपमेंट & मार्केट वैलिडेशन'], shade: 'bg-light-green/30' },
  { phase: 'फेज़ 2 (ईयर 2)', points: ['5 स्टेट एक्सपेंशन', 'फ्रैंचाइज़ नेटवर्क लॉन्च'], shade: 'bg-light-green/50' },
  { phase: 'फेज़ 3 (ईयर 3–5)', points: ['पैन इंडिया स्केलिंग', 'इंटीग्रेटेड ऐप इकोसिस्टम'], shade: 'bg-primary-green/20' },
  { phase: 'फेज़ 4 (फ्यूचर)', points: ['एक्सपर्ट अपॉर्चुनिटीज़', 'IPO रेडीनेस'], shade: 'bg-primary-green/35' },
];

const financials = [
  { year: 'Y1', revenue: '5', ebitda: '0.8', margin: '16%', rev: 5 },
  { year: 'Y2', revenue: '20', ebitda: '4', margin: '20%', rev: 20 },
  { year: 'Y3', revenue: '75', ebitda: '18', margin: '24%', rev: 75 },
  { year: 'Y5', revenue: '250+', ebitda: '60+', margin: '24%+', rev: 250 },
];

const useOfFunds = [
  { name: 'ऑपरेशन्स & इन्फ्रास्ट्रक्चर', value: 40, color: '#1B5E20' },
  { name: 'टेक्नोलॉजी & प्लेटफॉर्म', value: 25, color: '#2E7D32' },
  { name: 'मार्केटिंग & एक्सपेंशन', value: 20, color: '#43A047' },
  { name: 'वर्किंग कैपिटल', value: 10, color: '#66BB6A' },
  { name: 'कंप्लायंस, टीम & ESG', value: 5, color: '#F9A825' },
];

const leaders = [
  { name: 'डॉ. मृणाल कांति घोष — डायरेक्टर', exp: '35+ ईयर्स एक्सपीरियंस इन रिसर्च, टेक्नोलॉजी कमर्शियलाइज़ेशन & बिज़नेस मैनेजमेंट' },
  { name: 'श्री रामरक्षा जायसवाल — डायरेक्टर', exp: '20+ ईयर्स एक्सपीरियंस इन बिज़नेस & ऑपरेशन्स लीडरशिप' },
];

const socialImpact = [
  'वीमेन एम्प्लॉयमेंट & एंटरप्रेन्योरशिप',
  'बेटर इनकम फॉर फार्मर्स',
  'रूरल प्रॉस्पेरिटी & जॉब क्रिएशन',
  'सस्टेनेबल & रिस्पॉन्सिबल ग्रोथ',
];

const contacts = [
  { icon: FaMapMarkerAlt, text: 'हेड ऑफिस: विलेज & पोस्ट-आओग्राम, पूर्बा बर्धमान, वेस्ट बंगाल – 713121' },
  { icon: FaMapMarkerAlt, text: 'ब्रांच ऑफिस: छतरपुर पहाड़ी, साउथ दिल्ली – 110074' },
  { icon: FaPhoneAlt, text: '+91 7428940883' },
  { icon: FaEnvelope, text: 'support@palanhar.com' },
  { icon: FaGlobe, text: 'www.palanhar.com' },
];

const closingValues = [
  { icon: FaHandshake, label: 'ट्रस्ट — अवर फाउंडेशन' },
  { icon: FaLeaf, label: 'नेचर — अवर स्ट्रेंथ' },
  { icon: FaBullseye, label: 'इम्पैक्ट — अवर कमिटमेंट' },
  { icon: FaUsers, label: 'टुगेदर — अवर जर्नी' },
];

function ChartTooltip({ active, payload, label, suffix = '' }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-gray-100 bg-white px-3 py-2 shadow-lg">
      <p className="text-xs font-semibold text-gray-500">{label ?? payload[0].name}</p>
      <p className="text-sm font-bold text-dark-green">
        {payload[0].value}
        {suffix}
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
export default function DeckPage() {
  return (
    <div>
      {/* SLIDE 1 — COVER */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <img src="/hero-banner-3.jpg" alt="" className="h-full w-full object-cover" draggable="false" />
          <div className="absolute inset-0 bg-gradient-to-r from-cream-white via-cream-white/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-green/35 via-transparent to-transparent" />
        </div>
        <div className="container-custom relative z-10 py-16">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-2xl">
            <motion.h1
              variants={fadeUp}
              className="font-display text-6xl font-extrabold uppercase tracking-tight text-dark-green sm:text-7xl lg:text-8xl"
            >
              पालनहार
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-4 font-display text-2xl font-bold leading-snug text-primary-green sm:text-3xl"
            >
              हर घर पालनहार
              <span className="block">हर गाँव समृद्ध भारत</span>
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6">
              <span className="inline-block max-w-xl rounded-2xl bg-primary-green px-5 py-2.5 text-sm font-bold leading-snug text-white shadow-md sm:rounded-full sm:text-base">
                इंडियाज़ फर्स्ट इंटीग्रेटेड एग्री + डेयरी + इन्वेस्टमेंट इकोसिस्टम
              </span>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-golden/50 bg-white shadow-md sm:h-20 sm:w-20">
                <img src="/palanhar-logo.png" alt="" className="h-12 w-12 object-contain sm:h-16 sm:w-16" draggable="false" />
              </span>
              <span className="leading-tight">
                <span className="block text-xs font-bold uppercase tracking-wide text-dark-green sm:text-sm">
                  पालनहार — डेयरी एंड एग्रीकल्चरल फार्म Pvt. Ltd.
                </span>
                <span className="block text-sm font-semibold text-golden">www.palanhar.com</span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SLIDE 2 — ABOUT COMPANY */}
      <Slide>
        <SlideHead num="01" title="अबाउट कंपनी" />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 lg:grid-cols-3">
          {[
            'पालनहार डेयरी एंड एग्रीकल्चरल फार्म Pvt. Ltd. इज़ अ प्रोफेशनली मैनेज्ड एंटरप्राइज़ दैट इंटीग्रेट्स एग्रीकल्चर, डेयरी फार्मिंग, एंड डिजिटल इन्वेस्टमेंट मैनेजमेंट इनटू अ यूनिफाइड, ट्रांसपेरेंट प्लेटफॉर्म।',
            'द कंपनी इज़ बिल्ट ऑन रियल, रेवेन्यू-जेनरेटिंग फार्म ऑपरेशन्स एंड ऑफर्स एग्रीकल्चर-बैक्ड इन्वेस्टमेंट अपॉर्चुनिटीज़ विद स्ट्रक्चर्ड इनकम मॉडल्स लिंक्ड डायरेक्टली टू टैंजिबल प्रोडक्शन आउटपुट्स।',
            'थ्रू अ टेक्नोलॉजी-इनेबल्ड सिस्टम, पालनहार प्रोवाइड्स इन्वेस्टर्स विद रियल-टाइम ट्रैकिंग, सिक्योर KYC ऑनबोर्डिंग, एंड डिटेल्ड परफॉरमेंस रिपोर्ट्स। विद अ स्ट्रॉन्ग फोकस ऑन एथिकल फार्मिंग, कंप्लायंस, एंड फाइनेंशियल ट्रांसपेरेंसी, द कंपनी एम्स टू बिल्ड ट्रस्ट व्हाइल क्रिएटिंग अ स्केलेबल इकोसिस्टम दैट सपोर्ट्स रूरल प्रोडक्टिविटी एंड डिलिवर्स सस्टेनेबल इन्वेस्टर वैल्यू।',
          ].map((para, i) => (
            <motion.p key={i} variants={fadeUp} className="rounded-2xl border border-primary-green/10 bg-[#E8F5E9]/50 p-6 text-justify text-sm leading-relaxed text-gray-700">
              {para}
            </motion.p>
          ))}
        </motion.div>
        <div className="mt-8 overflow-hidden rounded-2xl shadow-md">
          <img src="/hero-banner-1.jpg" alt="हरे खेत में चरती देसी गायें" className="h-40 w-full object-cover sm:h-52" draggable="false" />
        </div>
      </Slide>

      {/* SLIDE 3 — THE PROBLEM */}
      <Slide mint>
        <SlideHead num="02" title="द प्रॉब्लम" subtitle="इंडियाज़ रूरल & डेयरी इकोसिस्टम फेसेस क्रिटिकल गैप्स" />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <IconCard key={p.title} icon={p.icon} title={p.title} desc={p.desc} />
          ))}
        </motion.div>
      </Slide>

      {/* SLIDE 4 — OUR SOLUTION */}
      <Slide>
        <SlideHead num="03" title="अवर सोल्यूशन" subtitle="पालनहार इकोसिस्टम — एन इंटीग्रेटेड & स्केलेबल मॉडल" />
        <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr]">
          {/* Hub */}
          <div className="mx-auto flex h-48 w-48 flex-col items-center justify-center rounded-full bg-gradient-to-br from-primary-green to-dark-green text-center text-white shadow-xl sm:h-56 sm:w-56">
            <FaLeaf className="mb-2 text-3xl text-golden" aria-hidden="true" />
            <p className="font-display text-2xl font-bold">पालनहार</p>
            <p className="mt-1 px-4 text-[11px] font-semibold tracking-wide text-white/80">
              ट्रस्टेड · नेचुरल · इम्पैक्टफुल
            </p>
          </div>
          {/* Segments */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutionSegments.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white" style={{ backgroundColor: s.color }}>
                  <s.icon size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-bold text-dark-green">{s.label}</p>
                  {s.desc && <p className="text-sm text-gray-600">{s.desc}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Slide>

      {/* SLIDE 5 — WHY NOW */}
      <Slide mint>
        <SlideHead num="04" title="व्हाई नाउ?" subtitle="मेगा ट्रेंड्स क्रिएटिंग अ बिग अपॉर्चुनिटी" />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.ul variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
            {whyNow.map((w) => (
              <Bullet key={w}>{w}</Bullet>
            ))}
          </motion.ul>
          {/* App + products mock */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center justify-center gap-4">
            <div className="w-44 rounded-[1.75rem] border-[6px] border-gray-900 bg-gray-900 shadow-2xl">
              <div className="overflow-hidden rounded-[1.3rem] bg-white">
                <div className="flex items-center gap-2 bg-primary-green px-3 py-2.5">
                  <img src="/palanhar-logo.png" alt="" className="h-6 w-6 object-contain" draggable="false" />
                  <span className="font-display text-sm font-bold text-white">पालनहार</span>
                </div>
                <div className="grid grid-cols-2 gap-2 p-3">
                  {['मिल्क', 'ऑर्डर्स', 'ट्रैकिंग', 'रिपोर्ट्स'].map((t) => (
                    <div key={t} className="rounded-lg bg-[#E8F5E9] px-2 py-3 text-center text-xs font-semibold text-dark-green">
                      {t}
                    </div>
                  ))}
                </div>
                <div className="px-3 pb-3">
                  <div className="rounded-lg bg-golden/15 px-2 py-1.5 text-center text-[11px] font-bold text-amber-700">
                    पालनहार फ्रेश & नेचुरल
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden flex-col gap-3 text-4xl sm:flex" aria-hidden="true">
              <span>🥛</span>
              <span>🥬</span>
              <span>🧈</span>
            </div>
          </motion.div>
        </div>
      </Slide>

      {/* SLIDE 6 — MARKET OPPORTUNITY */}
      <Slide>
        <SlideHead num="05" title="मार्केट अपॉर्चुनिटी" subtitle="मैसिव मल्टी-सेक्टर पोटेंशियल" />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {markets.map((m) => (
            <IconCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} tone={m.tone} />
          ))}
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 rounded-2xl bg-gradient-to-r from-primary-green to-dark-green px-6 py-5 text-center text-lg font-bold text-white shadow-lg sm:text-xl">
          कम्बाइंड पोटेंशियल — ₹10+ लाख करोड़ — लॉन्ग-टर्म अपॉर्चुनिटी
        </motion.div>
      </Slide>

      {/* SLIDE 7 — BUSINESS MODEL */}
      <Slide mint>
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <SlideHead num="06" title="बिज़नेस मॉडल" />
        </div>
        <span className="mb-8 -mt-6 inline-block rounded-full bg-golden/20 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-amber-700">
          मल्टी रेवेन्यू इंजन
        </span>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {revenueStreams.map((r) => (
            <motion.div key={r.label} variants={fadeUp} className="flex items-center gap-3 rounded-2xl border border-primary-green/15 bg-white p-4 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-green/10 text-primary-green">
                <r.icon size={18} aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-dark-green">{r.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </Slide>

      {/* SLIDE 8 — WHY PALANHAR WINS */}
      <Slide>
        <SlideHead num="07" title="व्हाई पालनहार विन्स" />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.ul variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
            {advantages.map((a) => (
              <Bullet key={a}>{a}</Bullet>
            ))}
          </motion.ul>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-4 rounded-2xl bg-gradient-to-br from-amber-50 to-[#E8F5E9] p-8 shadow-md">
              <span className="text-6xl" aria-hidden="true">🥛</span>
              <span className="text-6xl" aria-hidden="true">🧀</span>
              <span className="text-6xl" aria-hidden="true">🧈</span>
            </div>
            <p className="mt-2 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
              पालनहार ग्लास मिल्क बॉटल्स · पनीर · गोल्डन घी
            </p>
          </motion.div>
        </div>
        <motion.blockquote variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-10 rounded-2xl bg-dark-green px-6 py-6 text-center text-lg font-bold text-white shadow-lg sm:text-xl">
          &ldquo;वी आर नॉट बिल्डिंग अ कंपनी, वी आर बिल्डिंग रूरल इंडियाज़ इकोनॉमिक इंजन।&rdquo;
        </motion.blockquote>
      </Slide>

      {/* SLIDE 9 — GROWTH ROADMAP */}
      <Slide mint>
        <SlideHead num="08" title="ग्रोथ रोडमैप" />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((r, i) => (
            <motion.div key={r.phase} variants={fadeUp} className={`relative rounded-2xl border border-primary-green/10 p-5 shadow-sm ${r.shade}`}>
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-dark-green text-sm font-bold text-white">
                  {i + 1}
                </span>
                <FaArrowRight className="text-primary-green/50" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-dark-green">{r.phase}</h3>
              <ul className="mt-2 space-y-1.5">
                {r.points.map((pt) => (
                  <li key={pt} className="text-sm text-gray-700">· {pt}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Slide>

      {/* SLIDE 10 — FINANCIAL PROJECTIONS */}
      <Slide>
        <SlideHead num="09" title="फाइनेंशियल प्रोजेक्शन्स" />
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="overflow-x-auto">
            <table className="w-full min-w-[420px] overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <thead>
                <tr className="bg-primary-green text-white">
                  <th className="px-4 py-3 font-semibold">ईयर</th>
                  <th className="px-4 py-3 font-semibold">रेवेन्यू (₹ Cr)</th>
                  <th className="px-4 py-3 font-semibold">EBITDA (₹ Cr)</th>
                  <th className="px-4 py-3 font-semibold">EBITDA मार्जिन</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {financials.map((f) => (
                  <tr key={f.year}>
                    <td className="px-4 py-3 font-bold text-dark-green">{f.year}</td>
                    <td className="px-4 py-3 text-gray-700">{f.revenue}</td>
                    <td className="px-4 py-3 text-gray-700">{f.ebitda}</td>
                    <td className="px-4 py-3 font-semibold text-primary-green">{f.margin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="mb-3 flex items-center gap-2 text-sm font-bold text-dark-green">
              <FaChartLine className="text-primary-green" aria-hidden="true" /> रेवेन्यू ग्रोथ (₹ करोड़)
            </p>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={financials} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#6B7280' }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 12, fill: '#6B7280' }} tickLine={false} axisLine={false} />
                <Tooltip content={<ChartTooltip suffix=" Cr" />} cursor={{ fill: '#E8F5E9' }} />
                <Bar dataKey="rev" radius={[6, 6, 0, 0]}>
                  {financials.map((f, i) => (
                    <Cell key={f.year} fill={['#A5D6A7', '#66BB6A', '#43A047', '#1B5E20'][i]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-1 text-center text-xs text-gray-400">Y1=5 · Y2=20 · Y3=75 · Y5=250+</p>
          </motion.div>
        </div>
      </Slide>

      {/* SLIDE 11 — FUND RAISE ASK */}
      <Slide mint>
        <SlideHead num="10" title="फंड रेज़ आस्क" subtitle="सीकिंग स्ट्रैटेजिक इन्वेस्टमेंट टू एक्सेलरेट ग्रोथ" />
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-2xl bg-gradient-to-br from-primary-green to-dark-green p-8 text-center text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-golden">करंट राउंड</p>
            <p className="mt-2 font-display text-5xl font-extrabold">₹5 करोड़</p>
            <p className="mt-3 text-white/85">सीड / ग्रोथ राउंड</p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="mb-3 text-center text-sm font-bold uppercase tracking-wide text-dark-green">यूज़ ऑफ फंड्स</p>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <ResponsiveContainer width="100%" height={200} className="max-w-[200px]">
                <PieChart>
                  <Pie data={useOfFunds} dataKey="value" nameKey="name" innerRadius={45} outerRadius={80} paddingAngle={2}>
                    {useOfFunds.map((u) => (
                      <Cell key={u.name} fill={u.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<ChartTooltip suffix="%" />} />
                </PieChart>
              </ResponsiveContainer>
              <ul className="flex-1 space-y-2">
                {useOfFunds.map((u) => (
                  <li key={u.name} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="h-3 w-3 shrink-0 rounded-sm" style={{ backgroundColor: u.color }} aria-hidden="true" />
                    <span className="font-semibold text-dark-green">{u.value}%</span> — {u.name}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Slide>

      {/* SLIDE 12 — LEADERSHIP */}
      <Slide>
        <SlideHead num="11" title="लीडरशिप" />
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-5">
            {leaders.map((l) => (
              <motion.div key={l.name} variants={fadeUp} className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary-green/10 text-primary-green">
                  <FaUserTie size={26} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-bold text-dark-green">{l.name}</p>
                  <p className="mt-1 text-sm text-gray-600">{l.exp}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-2xl bg-[#E8F5E9] p-6 sm:p-8">
            <h3 className="!text-dark-green mb-4 text-xl">सोशल इम्पैक्ट वी क्रिएट</h3>
            <ul className="space-y-3">
              {socialImpact.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-primary-green" aria-hidden="true" />
                  <span className="text-gray-700">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Slide>

      {/* SLIDE 13 — CONTACT DETAILS */}
      <Slide mint>
        <SlideHead num="12" title="कॉन्टैक्ट डिटेल्स" />
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <motion.ul variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
            {contacts.map((c) => (
              <motion.li key={c.text} variants={fadeUp} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-green/10 text-primary-green">
                  <c.icon aria-hidden="true" />
                </span>
                <span className="pt-1.5 text-sm text-gray-700 md:text-base">{c.text}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="overflow-hidden rounded-2xl shadow-md">
            <img src="/gallery-herd.jpg" alt="पालनहार डेयरी फार्म एवं चरती गायें" className="h-64 w-full object-cover sm:h-80" draggable="false" />
          </motion.div>
        </div>
      </Slide>

      {/* SLIDE 14 — CLOSING */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <img src="/hero-banner-1.jpg" alt="" className="h-full w-full object-cover" draggable="false" />
          <div className="absolute inset-0 bg-gradient-to-r from-cream-white via-cream-white/85 to-cream-white/40" />
        </div>
        <div className="container-custom relative z-10 grid items-center gap-10 py-16 lg:grid-cols-[1.4fr_1fr]">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="!text-dark-green text-3xl uppercase leading-tight sm:text-4xl md:text-5xl">
              टुगेदर, लेट्स बिल्ड अ स्ट्रॉन्गर, ग्रीनर एंड प्रॉस्परस भारत
            </motion.h2>
            <motion.div variants={stagger} className="mt-8 grid grid-cols-2 gap-4">
              {closingValues.map((v) => (
                <motion.div key={v.label} variants={fadeUp} className="flex items-center gap-3 rounded-xl border border-primary-green/15 bg-white/80 p-3 backdrop-blur-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-green/10 text-primary-green">
                    <v.icon aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-dark-green">{v.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
            <span className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-4 border-golden/50 bg-white shadow-lg">
              <img src="/palanhar-logo.png" alt="" className="h-20 w-20 object-contain" draggable="false" />
            </span>
            <p className="mt-4 font-display text-3xl font-extrabold text-dark-green">पालनहार</p>
            <p className="mt-1 text-sm font-semibold text-primary-green">
              हर घर पालनहार · हर गाँव समृद्ध भारत
            </p>
            <span className="mt-5 inline-block rounded-full bg-primary-green px-6 py-2.5 text-base font-bold text-white shadow-md">
              प्रॉफिट विद पर्पस
            </span>
            <div className="mt-6">
              <Link to="/invest" className="btn btn-golden inline-flex items-center gap-2">
                निवेश करें <FaArrowRight aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
