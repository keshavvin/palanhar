import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaHeart,
  FaHandsHelping,
  FaLeaf,
  FaUsers,
  FaSeedling,
  FaClock,
  FaBroom,
  FaAppleAlt,
  FaUserMd,
  FaShieldAlt,
} from 'react-icons/fa';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const values = [
  {
    icon: FaHeart,
    title: 'कम्पैशन',
    desc: 'केयरिंग फॉर अ जेंटल एनिमल दैट डिपेंड्स ऑन यू अवेकन्स नैचुरल एम्पैथी — फर्स्ट फॉर काउज़, देन फॉर ऑल लिविंग बीइंग्स.',
  },
  {
    icon: FaHandsHelping,
    title: 'रिस्पॉन्सिबिलिटी',
    desc: 'अ काउ मस्ट बी फेड, क्लीन्ड एंड केयर्ड फॉर एव्री सिंगल डे. सेवा टीचेस कमिटमेंट दैट नो टेक्स्टबुक कैन.',
  },
  {
    icon: FaClock,
    title: 'डिसिप्लिन & पेशेंस',
    desc: 'काउज़ फॉलो द रिदम ऑफ सनराइज़ एंड सनसेट. सर्विंग देम बिल्ड्स रूटीन, पंक्चुअलिटी एंड काम पेशेंस.',
  },
  {
    icon: FaLeaf,
    title: 'रिस्पेक्ट फॉर नेचर',
    desc: 'थ्रू द काउ यू विटनेस द फुल साइकल ऑफ नेचर — सॉइल, फॉडर, मिल्क, मेन्योर एंड बैक टू द सॉइल.',
  },
  {
    icon: FaSeedling,
    title: 'ग्रैटिट्यूड',
    desc: 'व्हेन यू रिसीव मिल्क, घी एंड फर्टाइल सॉइल फ्रॉम एन एनिमल यू सर्व, थैंकफुलनेस बिकम्स अ डेली हैबिट.',
  },
  {
    icon: FaUsers,
    title: 'सेंस ऑफ पर्पस',
    desc: 'सेल्फलेस सर्विस टू अ वॉइसलेस बीइंग गिव्स क्वायट, लास्टिंग सैटिस्फैक्शन दैट मटीरियल सक्सेस रेयरली मैचेस.',
  },
];

const careStandards = [
  {
    icon: FaBroom,
    title: 'क्लीनलिनेस',
    desc: 'क्लीन शेड्स, फ्रेश बेडिंग एंड हाइजीनिक मिल्किंग एरियाज़ — द फर्स्ट ड्यूटी ऑफ एव्री गौशाला एंड द फाउंडेशन ऑफ हेल्दी कैटल.',
  },
  {
    icon: FaAppleAlt,
    title: 'प्रॉपर न्यूट्रिशन',
    desc: 'ग्रीन फॉडर, नैचुरल फीड, क्लीन वॉटर एंड सीज़नल सप्लिमेंट्स कीप काउज़ हेल्दी एंड मिल्क प्योर.',
  },
  {
    icon: FaUserMd,
    title: 'वेटेरिनरी केयर',
    desc: 'रेगुलर हेल्थ चेक-अप्स, वैक्सिनेशन शेड्यूल्स एंड प्रॉम्प्ट ट्रीटमेंट — एव्री काउ डिज़र्व्स प्रोफेशनल मेडिकल अटेंशन.',
  },
  {
    icon: FaShieldAlt,
    title: 'ह्यूमेन ट्रीटमेंट',
    desc: 'नो क्रूएल्टी, नो ओवरवर्किंग, डिग्निफाइड केयर फॉर ओल्ड एंड नॉन-मिल्किंग काउज़. काइंडनेस इज़ नॉन-नेगोशिएबल.',
  },
];

const participation = [
  {
    title: 'विज़िट ऑर वॉलंटियर एट अ गौशाला',
    desc: 'स्पेंड अ वीकेंड मॉर्निंग फीडिंग, ग्रूमिंग ऑर सिम्पली स्पेंडिंग टाइम विद काउज़. मोस्ट काउ शेल्टर्स वार्मली वेलकम हेल्पिंग हैंड्स — इन्क्लूडिंग पालनहार, व्हेयर फार्म विज़िट्स आर ओपन टू ऑल.',
  },
  {
    title: 'स्पॉन्सर फॉडर ऑर डेली फीड',
    desc: 'ईवन अ स्मॉल मंथली कॉन्ट्रिब्यूशन कवर्स ग्रीन फॉडर, वॉटर एंड केयर फॉर अ काउ. इट इज़ वन ऑफ द मोस्ट डायरेक्ट वेज़ टू सर्व.',
  },
  {
    title: 'अडॉप्ट ऑर सपोर्ट अ काउ',
    desc: 'मेनी गौशालाज़ लेट फैमिलीज़ सिम्बॉलिकली अडॉप्ट अ काउ एंड फॉलो हर हेल्थ, मिल्क एंड वेल-बीइंग — अ ब्यूटीफुल ट्रेडिशन फॉर चिल्ड्रन टू ग्रो अप विद.',
  },
  {
    title: 'चूज़ पंचगव्य एंड नैचुरल प्रोडक्ट्स',
    desc: 'बाइंग A2 मिल्क, बिलोना घी, वर्मी कम्पोस्ट, धूपबत्ती एंड अदर काउ-बेस्ड प्रोडक्ट्स कीप्स गौशालाज़ इकोनॉमिकली सेल्फ-रिलायंट.',
  },
  {
    title: 'ब्रिंग गौ सेवा इनटू फैमिली लाइफ',
    desc: 'इन्वॉल्व चिल्ड्रन इन फीडिंग विज़िट्स, सेलिब्रेट फेस्टिवल्स लाइक गोपाष्टमी एंड गोवर्धन पूजा टुगेदर, एंड लेट द नेक्स्ट जेनरेशन लर्न काइंडनेस बाय डूइंग.',
  },
  {
    title: 'सपोर्ट एथिकल डेयरी फार्मिंग',
    desc: 'एनकरेज एंड इन्वेस्ट इन फार्म्स दैट प्रैक्टिस क्रूएल्टी-फ्री, ट्रांसपेरेंट डेयरी — सो दैट गुड एनिमल केयर बिकम्स गुड इकोनॉमिक्स.',
  },
];

const contributions = [
  {
    title: 'एग्रीकल्चरल',
    points: [
      'गोबर (काउ डंग) बिकम्स कम्पोस्ट एंड वर्मी कम्पोस्ट दैट रीबिल्ड्स सॉइल हेल्थ नैचुरली',
      'गोमूत्र-बेस्ड प्रिपरेशन्स सपोर्ट केमिकल-फ्री पेस्ट मैनेजमेंट इन ऑर्गेनिक फार्मिंग',
      'बुलक पावर स्टिल सर्व्स स्मॉल फार्म्स व्हेयर मशीनरी कैननॉट रीच',
    ],
  },
  {
    title: 'एन्वायरनमेंटल',
    points: [
      'डंग-बेस्ड बायोगैस (CBG) ऑफर्स क्लीन, रिन्यूएबल कुकिंग एंड व्हीकल फ्यूल',
      'ऑर्गेनिक मेन्योर रिड्यूसेस डिपेंडेंस ऑन सिंथेटिक फर्टिलाइज़र्स एंड प्रोटेक्ट्स ग्राउंडवॉटर',
      'इंडिजिनस ब्रीड्स आर वेल अडैप्टेड टू लोकल क्लाइमेट्स, नीडिंग फ्यूअर एक्सटर्नल इनपुट्स',
    ],
  },
  {
    title: 'इकोनॉमिक & रूरल',
    points: [
      'डेयरी इनकम गिव्स मिलियन्स ऑफ स्मॉल फार्मिंग फैमिलीज़ अ स्टेडी डेली लाइवलीहुड',
      'वैल्यू-ऐडेड प्रोडक्ट्स — घी, पनीर, पंचगव्य आइटम्स — मल्टीप्लाई रूरल इनकम',
      'गौशालाज़ क्रिएट लोकल एम्प्लॉयमेंट इन फीडिंग, केयर, प्रोसेसिंग एंड डिस्ट्रिब्यूशन',
    ],
  },
  {
    title: 'सोशल & कल्चरल',
    points: [
      'द काउ हैज़ बीन ऑनर्ड एज़ गौ माता इन इंडियन कल्चर फॉर थाउज़ंड्स ऑफ इयर्स',
      'फेस्टिवल्स, फेयर्स एंड कम्युनिटी फीडिंग ट्रेडिशन्स ब्रिंग विलेजेस टुगेदर',
      'शेयर्ड सेवा बिल्ड्स बॉन्ड्स अक्रॉस जेनरेशन्स, फैमिलीज़ एंड कम्युनिटीज़',
    ],
  },
];

export default function CowSevaPage() {
  return (
    <>
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-b from-light-green/20 via-cream-white to-transparent pb-12 pt-16 md:pt-20"
      >
        <div className="container-custom text-center">
          <span className="section-eyebrow">गौ सेवा</span>
          <h1 className="mb-4">गौ सेवा — सर्विंग द जेंटल गिवर</h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
            केयरिंग फॉर काउज़ इज़ वन ऑफ ह्यूमैनिटी&rsquo;ज़ ओल्डेस्ट एक्ट्स ऑफ काइंडनेस — अ प्रैक्टिस
            दैट नर्चर्स कैरेक्टर, स्ट्रेंथन्स कम्युनिटीज़, एनरिचेस द सॉइल एंड
            ब्रिंग्स क्वायट जॉय टू दोज़ हू सर्व.
          </p>
        </div>
      </motion.section>

      {/* What is Gau Seva */}
      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          <motion.div {...fadeUp} className="space-y-5 text-lg leading-relaxed text-gray-700">
            <p>
              <strong className="text-dark-green">गौ सेवा</strong> सिम्पली मीन्स सर्विंग एंड
              केयरिंग फॉर काउज़ — फीडिंग देम, कीपिंग देयर शेल्टर्स क्लीन, अटेंडिंग टू देयर
              हेल्थ, एंड ट्रीटिंग देम विद द जेंटलनेस दे शो अस. इन इंडियन ट्रेडिशन
              द काउ इज़ रिवियर्ड एज़ <em>गौ माता</em>, द मदर हू नरिशेस; बट द वैल्यू
              ऑफ गौ सेवा इज़ युनिवर्सल. एनीवन, ऑफ एनी बैकग्राउंड, हू हैज़ स्पेंट अ मॉर्निंग
              फीडिंग अ काफ ऑर ग्रूमिंग अ जेंटल गिर काउ नोज़ द काम इट ब्रिंग्स.
            </p>
            <p>
              एट इट्स हार्ट, गौ सेवा इज़ अ रिलेशनशिप. अ काउ गिव्स मिल्क, फर्टाइल मेन्योर,
              एंड कम्पैनियनशिप; इन रिटर्न शी आस्क्स ओनली फॉर फूड, क्लीनलिनेस, सेफ्टी एंड
              काइंडनेस. प्रैक्टिसिंग दिस एक्सचेंज डेली ट्रांसफॉर्म्स नॉट जस्ट द एनिमल&rsquo;ज़
              लाइफ — इट ट्रांसफॉर्म्स अवर्स.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Character values */}
      <section className="section bg-cream-white/60">
        <div className="container-custom">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <span className="section-eyebrow">इनर ग्रोथ</span>
            <h2 className="mb-4">व्हाट सर्विंग काउज़ टीचेस अस</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              सेवा इज़ एज़ मच फॉर द गिवर एज़ फॉर द रिसीवर. दीज़ आर द क्वालिटीज़
              पीपल कन्सिस्टेंटली रिपोर्ट ग्रोइंग थ्रू रेगुलर काउ केयर.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card border border-primary-green/10 bg-white p-6 sm:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-green text-white">
                  <v.icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-xl">{v.title}</h3>
                <p className="leading-relaxed text-gray-600">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote — emotional well-being */}
      <section className="bg-gradient-to-br from-primary-green to-dark-green py-16 md:py-20">
        <div className="container-custom max-w-3xl text-center">
          <motion.blockquote {...fadeUp} className="text-white">
            <p className="font-display text-2xl font-bold leading-relaxed md:text-3xl">
              &ldquo;टेन क्वायट मिनट्स बिसाइड अ काउ एट सनराइज़ कैन सेटल द माइंड मोर
              डीप्ली दैन एन आवर ऑफ डिस्ट्रैक्शन. सेवा इज़ मेडिटेशन इन मोशन.&rdquo;
            </p>
            <footer className="mt-6 text-sm uppercase tracking-widest text-golden">
              द एव्रीडे एक्सपीरियंस ऑफ गौशाला वॉलंटियर्स
            </footer>
          </motion.blockquote>
          <motion.p {...fadeUp} className="mx-auto mt-8 max-w-2xl text-white/85">
            टाइम स्पेंट केयरिंग फॉर एनिमल्स इज़ वाइडली असोसिएटेड विद लोअर स्ट्रेस, इमोशनल
            ग्राउंडिंग एंड अ रिन्यूड सेंस ऑफ ग्रैटिट्यूड. फैमिलीज़ हू सर्व टुगेदर स्पीक ऑफ
            स्ट्रॉन्गर बॉन्ड्स; एल्डर्स फाइंड रूटीन एंड कम्पैनियनशिप; चिल्ड्रन लर्न एम्पैथी
            दे कैरी फॉर लाइफ.
          </motion.p>
        </div>
      </section>

      {/* Contributions grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <span className="section-eyebrow">बियॉन्ड द गौशाला</span>
            <h2 className="mb-4">हाउ काउज़ सर्व सोसाइटी</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              द काउ स्टैंड्स एट द सेंटर ऑफ अ रिमार्केबल सर्कुलर इकोनॉमी — फीडिंग
              फैमिलीज़, रिस्टोरिंग फार्मलैंड एंड पावरिंग रूरल लाइवलीहुड्स.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {contributions.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl border border-primary-green/10 bg-cream-white/50 p-6 sm:p-8"
              >
                <h3 className="mb-4 text-xl text-dark-green">{c.title}</h3>
                <ul className="space-y-3">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-golden" aria-hidden="true" />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeUp} className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-gray-600">
            फ्रॉम मिल्क एंड घी ऑन द फैमिली टेबल, टू कम्पोस्ट दैट ब्रिंग्स टायर्ड सॉइल बैक टू
            लाइफ, टू बायोगैस दैट लाइट्स रूरल किचन्स — वेल-केयर्ड-फॉर काउज़ क्वायटली सपोर्ट
            सस्टेनेबल फार्मिंग, ऑर्गेनिक एग्रीकल्चर एंड द लाइवलीहुड्स ऑफ मिलियन्स ऑफ
            फार्मर्स. प्रोटेक्टिंग देम इज़ नॉट चैरिटी अलोन; इट इज़ साउंड एन्वायरनमेंटल एंड
            इकोनॉमिक सेंस.
          </motion.p>
        </div>
      </section>

      {/* Care standards */}
      <section className="section bg-cream-white/60">
        <div className="container-custom">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <span className="section-eyebrow">सेवा डन राइट</span>
            <h2 className="mb-4">द फोर ड्यूटीज़ ऑफ काउ केयर</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              ट्रू सेवा इज़ रिस्पॉन्सिबल सेवा. दीज़ आर द स्टैंडर्ड्स वी होल्ड अवरसेल्व्स टू
              एट पालनहार — एंड एनकरेज एव्री काउ शेल्टर टू अपहोल्ड.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {careStandards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card border-t-4 border-primary-green bg-white p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-green/10 text-primary-green">
                  <c.icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-lg">{c.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to participate */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <span className="section-eyebrow">स्टार्ट टुडे</span>
            <h2 className="mb-4">सिक्स वेज़ यू कैन प्रैक्टिस गौ सेवा</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              सेवा डज़ नॉट रिक्वायर अ फार्म ऑफ योर ओन. हियर आर प्रैक्टिकल वेज़ एनीवन —
              इन अ विलेज ऑर अ सिटी — कैन बिगिन.
            </p>
          </motion.div>
          <ol className="space-y-5">
            {participation.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex gap-5 rounded-xl border border-primary-green/10 bg-cream-white/40 p-5 sm:p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-golden font-bold text-dark-green">
                  {i + 1}
                </span>
                <div>
                  <h3 className="mb-1 text-lg">{p.title}</h3>
                  <p className="leading-relaxed text-gray-600">{p.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-green via-primary-green to-dark-green py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-10 top-8 text-8xl"
          >
            🐄
          </motion.div>
        </div>
        <div className="container-custom relative z-10 max-w-3xl text-center">
          <motion.div {...fadeUp} className="text-white">
            <h2 className="mb-4 !text-white">कम, सर्व विद अस</h2>
            <p className="mb-8 text-lg text-white/85">
              विज़िट अवर गौशाला ऑन NH-48, स्पेंड अ मॉर्निंग विद अवर 200 गिर काउज़ एंड देयर
              काव्स, एंड एक्सपीरियंस गौ सेवा फर्स्ट-हैंड. एव्री विज़िट, एव्री प्रोडक्ट यू
              चूज़ एंड एव्री कॉन्ट्रिब्यूशन कीप्स दिस सर्कल ऑफ केयर टर्निंग.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="btn btn-golden">
                प्लान अ फार्म विज़िट
              </Link>
              <Link
                to="/invest"
                className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary-green"
              >
                सपोर्ट एथिकल डेयरी
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
