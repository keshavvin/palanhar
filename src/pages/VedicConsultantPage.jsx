import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaOm,
  FaSun,
  FaCompass,
  FaMortarPestle,
  FaCalendarAlt,
  FaHeart,
  FaPrayingHands,
  FaPhoneAlt,
  FaPaperPlane,
  FaCheckCircle,
} from 'react-icons/fa';

const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const services = [
  { icon: FaSun, title: 'ज्योतिष परामर्श', desc: 'जन्म-कुंडली विश्लेषण, ग्रह-दशा एवं भविष्य मार्गदर्शन।' },
  { icon: FaCompass, title: 'वास्तु शास्त्र', desc: 'घर एवं व्यवसाय के लिए वास्तु-अनुकूल समाधान।' },
  { icon: FaMortarPestle, title: 'आयुर्वेद परामर्श', desc: 'प्रकृति-आधारित स्वास्थ्य एवं जीवनशैली सलाह।' },
  { icon: FaCalendarAlt, title: 'पंचांग & मुहूर्त', desc: 'शुभ तिथि, मुहूर्त एवं त्योहारों की जानकारी।' },
  { icon: FaHeart, title: 'कुंडली मिलान', desc: 'विवाह हेतु गुण-मिलान एवं अनुकूलता परामर्श।' },
  { icon: FaPrayingHands, title: 'पूजा & कर्मकांड', desc: 'पूजा-विधि, अनुष्ठान एवं कर्मकांड मार्गदर्शन।' },
];

const steps = [
  { n: '1', title: 'परामर्श चुनें', desc: 'अपनी ज़रूरत के अनुसार सेवा चुनें।' },
  { n: '2', title: 'बुकिंग करें', desc: 'फॉर्म भरकर अपना समय बुक करें।' },
  { n: '3', title: 'विशेषज्ञ से बात', desc: 'अनुभवी वैदिक विशेषज्ञ से जुड़ें।' },
  { n: '4', title: 'मार्गदर्शन पाएँ', desc: 'व्यक्तिगत समाधान एवं सलाह।' },
];

export default function VedicConsultantPage() {
  const [form, setForm] = useState({ name: '', phone: '', type: services[0].title, date: '', message: '' });
  const [ref, setRef] = useState(null);

  const change = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setRef(`PLH-VC-${Math.random().toString(36).slice(2, 7).toUpperCase()}`);
    setForm({ name: '', phone: '', type: services[0].title, date: '', message: '' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-green via-dark-green to-primary-green text-white">
        <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
          <img src="/hero-banner-1.jpg" alt="" className="h-full w-full object-cover" draggable="false" />
        </div>
        <div className="container-custom relative z-10 py-16 text-center md:py-24">
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 14 }}
            className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border-2 border-golden/50 bg-white text-golden shadow-lg"
          >
            <FaOm size={40} aria-hidden="true" />
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="!text-white">
            वैदिक परामर्शदाता
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-3 text-lg text-golden md:text-xl">
            प्राचीन ज्ञान, आधुनिक मार्गदर्शन
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="mx-auto mt-3 max-w-2xl text-white/85">
            ज्योतिष, वास्तु, आयुर्वेद एवं कर्मकांड — अनुभवी वैदिक विशेषज्ञों से प्रामाणिक परामर्श।
          </motion.p>
          <motion.a
            href="#vedic-booking"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="btn btn-golden mt-8 inline-block"
          >
            परामर्श बुक करें
          </motion.a>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <span className="section-eyebrow">हमारी सेवाएँ</span>
            <h2 className="mb-3">वैदिक परामर्श सेवाएँ</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">हर ज़रूरत के लिए प्रामाणिक वैदिक मार्गदर्शन।</p>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUp} className="card border border-primary-green/10 bg-white p-6 text-center">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-golden/15 text-golden">
                  <s.icon size={24} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-dark-green">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-[#E8F5E9]/50">
        <div className="container-custom">
          <h2 className="mb-10 text-center text-2xl md:text-3xl">कैसे काम करता है</h2>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((st) => (
              <motion.div key={st.n} variants={fadeUp} className="rounded-2xl border border-primary-green/10 bg-white p-6 text-center shadow-sm">
                <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary-green text-lg font-bold text-white">
                  {st.n}
                </span>
                <h3 className="text-base font-bold text-dark-green">{st.title}</h3>
                <p className="mt-1.5 text-sm text-gray-600">{st.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Booking form */}
      <section id="vedic-booking" className="section scroll-mt-24 bg-cream-white/40">
        <div className="container-custom">
          <div className="mb-8 text-center">
            <span className="section-eyebrow">समय निर्धारण</span>
            <h2 className="mb-2">परामर्श बुक करें</h2>
            <p className="text-gray-600">फॉर्म भरें — हमारी टीम आपसे जल्द संपर्क करेगी।</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card mx-auto max-w-2xl border border-primary-green/10 bg-white p-6 shadow-lg sm:p-8"
          >
            {ref ? (
              <div className="flex flex-col items-center rounded-xl bg-primary-green/10 px-4 py-10 text-center">
                <FaCheckCircle className="mb-3 text-5xl text-primary-green" aria-hidden="true" />
                <p className="text-xl font-bold text-dark-green">आपका अनुरोध प्राप्त हुआ!</p>
                <p className="mt-1 text-gray-600">आपकी संदर्भ संख्या:</p>
                <p className="mt-1 font-mono text-lg font-bold tracking-wider text-primary-green">{ref}</p>
                <button type="button" onClick={() => setRef(null)} className="btn btn-outline mt-5">
                  एक और बुकिंग करें
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="vc-name" className="mb-1.5 block text-sm font-semibold text-gray-700">नाम *</label>
                    <input id="vc-name" name="name" value={form.name} onChange={change} required className="input-field" placeholder="आपका नाम" />
                  </div>
                  <div>
                    <label htmlFor="vc-phone" className="mb-1.5 block text-sm font-semibold text-gray-700">फोन *</label>
                    <input id="vc-phone" name="phone" type="tel" value={form.phone} onChange={change} required className="input-field" placeholder="+91 ..." />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="vc-type" className="mb-1.5 block text-sm font-semibold text-gray-700">परामर्श प्रकार</label>
                    <select id="vc-type" name="type" value={form.type} onChange={change} className="input-field">
                      {services.map((s) => (
                        <option key={s.title} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="vc-date" className="mb-1.5 block text-sm font-semibold text-gray-700">पसंदीदा तारीख</label>
                    <input id="vc-date" name="date" type="date" value={form.date} onChange={change} className="input-field" />
                  </div>
                </div>
                <div>
                  <label htmlFor="vc-message" className="mb-1.5 block text-sm font-semibold text-gray-700">संदेश</label>
                  <textarea id="vc-message" name="message" value={form.message} onChange={change} rows="4" className="input-field resize-none" placeholder="अपनी समस्या या प्रश्न लिखें..." />
                </div>
                <button type="submit" className="btn btn-primary inline-flex items-center gap-2">
                  <FaPaperPlane aria-hidden="true" /> अनुरोध भेजें
                </button>
                <p className="flex items-center gap-2 text-xs text-gray-500">
                  <FaPhoneAlt aria-hidden="true" /> या कॉल करें: +91 74289 40883
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
