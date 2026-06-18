import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaOm,
  FaMortarPestle,
  FaHandsHelping,
  FaPhoneAlt,
  FaPaperPlane,
  FaCheckCircle,
} from 'react-icons/fa';

const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

// Palanhar Consultancy Services — Vedic, Ayurvedic and Social.
const consultancies = [
  {
    icon: FaOm,
    emoji: '🕉️',
    title: 'वैदिक परामर्श',
    desc: 'वेद, गीता एवं शास्त्रों में वर्णित ज्ञान के आधार पर जीवन मार्गदर्शन।',
    items: [
      'गीता एवं वैदिक ज्ञान अध्ययन',
      'नैतिक एवं आध्यात्मिक जीवन मार्गदर्शन',
      'व्यक्तित्व विकास एवं चरित्र निर्माण',
      'परिवार एवं समाज में वैदिक मूल्यों का अनुप्रयोग',
      'युवा जागरण एवं संस्कार शिक्षा',
      'नशामुक्त एवं सदाचारी जीवन की प्रेरणा',
    ],
  },
  {
    icon: FaMortarPestle,
    emoji: '🌿',
    title: 'आयुर्वेद परामर्श',
    desc: 'आयुर्वेद शास्त्र के सिद्धांतों पर आधारित स्वास्थ्य एवं जीवनशैली मार्गदर्शन।',
    items: [
      'प्रकृति (वात, पित्त, कफ) परामर्श',
      'आहार एवं दिनचर्या मार्गदर्शन',
      'स्वस्थ जीवनशैली जागरूकता',
      'योग एवं प्राकृतिक स्वास्थ्य मार्गदर्शन',
      'पंचगव्य आधारित स्वास्थ्य ज्ञान',
      'रोग-निवारण हेतु आयुर्वेदिक जागरूकता',
    ],
  },
  {
    icon: FaHandsHelping,
    emoji: '🤝',
    title: 'सामाजिक परामर्श',
    desc: 'समाज सुधार एवं जन-जागरण के लिए परामर्श एवं अभियान।',
    items: [
      'नशामुक्ति अभियान',
      'दहेज प्रथा उन्मूलन',
      'महिला सम्मान एवं सुरक्षा',
      'गौ संरक्षण एवं पर्यावरण जागरूकता',
      'ग्रामीण आत्मनिर्भरता',
      'युवा नेतृत्व विकास',
      'सामाजिक कुरीतियों के विरुद्ध जन-जागरण',
      'संस्कारित एवं जिम्मेदार समाज निर्माण',
    ],
  },
];

const steps = [
  { n: '1', title: 'परामर्श चुनें', desc: 'अपनी ज़रूरत के अनुसार सेवा चुनें।' },
  { n: '2', title: 'बुकिंग करें', desc: 'फॉर्म भरकर अपना समय बुक करें।' },
  { n: '3', title: 'विशेषज्ञ से बात', desc: 'अनुभवी परामर्शदाता से जुड़ें।' },
  { n: '4', title: 'मार्गदर्शन पाएँ', desc: 'व्यक्तिगत समाधान एवं सलाह।' },
];

export default function VedicConsultantPage() {
  const [form, setForm] = useState({ name: '', phone: '', type: consultancies[0].title, date: '', message: '' });
  const [ref, setRef] = useState(null);

  const change = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setRef(`PLH-VC-${Math.random().toString(36).slice(2, 7).toUpperCase()}`);
    setForm({ name: '', phone: '', type: consultancies[0].title, date: '', message: '' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-green via-dark-green to-primary-green text-white">
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
            पालनहार परामर्श सेवाएँ
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-3 text-lg text-golden md:text-xl">
            ज्ञान &bull; स्वास्थ्य &bull; समाज
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="mx-auto mt-3 max-w-2xl text-white/85">
            वैदिक ज्ञान, आयुर्वेद एवं सामाजिक जागरूकता — संस्कारित एवं स्वस्थ समाज के निर्माण हेतु प्रामाणिक परामर्श।
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

      {/* Consultancy services */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <span className="section-eyebrow">हमारी सेवाएँ</span>
            <h2 className="mb-3">पालनहार कंसल्टेंसी सेवाएँ</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              हर ज़रूरत के लिए प्रामाणिक वैदिक, आयुर्वेदिक एवं सामाजिक मार्गदर्शन।
            </p>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="grid gap-6 lg:grid-cols-3">
            {consultancies.map((c) => (
              <motion.div key={c.title} variants={fadeUp} className="flex h-full flex-col rounded-2xl border border-primary-green/10 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-golden/15 text-2xl">
                    {c.emoji}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-dark-green">{c.title}</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{c.desc}</p>
                <p className="mt-5 mb-2 text-xs font-bold uppercase tracking-wide text-golden">सेवाएँ</p>
                <ul className="space-y-2.5">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <FaCheckCircle className="mt-0.5 shrink-0 text-primary-green" aria-hidden="true" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="section bg-[#E8F5E9]/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl rounded-2xl bg-dark-green px-6 py-10 text-center shadow-xl sm:px-10"
          >
            <span className="mb-4 inline-block text-4xl" aria-hidden="true">🌟</span>
            <h2 className="!text-white mb-4 text-xl sm:text-2xl">पालनहार मिशन</h2>
            <p className="font-display text-lg font-bold leading-snug text-golden sm:text-xl">
              &ldquo;वैदिक ज्ञान से जागरूकता, आयुर्वेद से स्वास्थ्य और सामाजिक परामर्श से संस्कारित समाज का निर्माण।&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold text-white/85">
              ज्ञान &bull; स्वास्थ्य &bull; समाज &mdash; यही पालनहार का आधार।
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="mb-10 text-center text-2xl md:text-3xl">कैसे काम करता है</h2>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((st) => (
              <motion.div key={st.n} variants={fadeUp} className="rounded-2xl border border-primary-green/10 bg-cream-white/60 p-6 text-center shadow-sm">
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
                      {consultancies.map((c) => (
                        <option key={c.title} value={c.title}>{c.title}</option>
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
