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
    title: 'करुणा',
    desc: 'एक सौम्य पशु की देखभाल जो आप पर निर्भर है, स्वाभाविक संवेदना जगाती है — पहले गायों के लिए, फिर सभी जीवों के लिए।',
  },
  {
    icon: FaHandsHelping,
    title: 'ज़िम्मेदारी',
    desc: 'गाय को हर दिन खिलाना, साफ़ करना और उसकी देखभाल करनी होती है। सेवा वह प्रतिबद्धता सिखाती है जो कोई किताब नहीं सिखा सकती।',
  },
  {
    icon: FaClock,
    title: 'अनुशासन व धैर्य',
    desc: 'गायें सूर्योदय और सूर्यास्त की लय का पालन करती हैं। उनकी सेवा दिनचर्या, समय की पाबंदी और शांत धैर्य का निर्माण करती है।',
  },
  {
    icon: FaLeaf,
    title: 'प्रकृति के प्रति सम्मान',
    desc: 'गाय के माध्यम से आप प्रकृति का पूरा चक्र देखते हैं — मिट्टी, चारा, दूध, खाद और फिर मिट्टी की ओर लौटना।',
  },
  {
    icon: FaSeedling,
    title: 'कृतज्ञता',
    desc: 'जब आप जिस पशु की सेवा करते हैं उससे दूध, घी और उपजाऊ मिट्टी पाते हैं, तो आभार एक रोज़ की आदत बन जाता है।',
  },
  {
    icon: FaUsers,
    title: 'उद्देश्य का बोध',
    desc: 'एक मूक प्राणी की निःस्वार्थ सेवा वह शांत, स्थायी संतोष देती है जिसकी बराबरी भौतिक सफलता शायद ही कर पाती है।',
  },
];

const careStandards = [
  {
    icon: FaBroom,
    title: 'स्वच्छता',
    desc: 'साफ़ बाड़े, ताज़ा बिछावन और स्वच्छ दुहाई के स्थान — हर गौशाला का पहला कर्तव्य और स्वस्थ पशुओं की नींव।',
  },
  {
    icon: FaAppleAlt,
    title: 'उचित पोषण',
    desc: 'हरा चारा, प्राकृतिक आहार, स्वच्छ पानी और मौसमी पूरक गायों को स्वस्थ और दूध को शुद्ध रखते हैं।',
  },
  {
    icon: FaUserMd,
    title: 'पशु-चिकित्सा देखभाल',
    desc: 'नियमित स्वास्थ्य जाँच, टीकाकरण कार्यक्रम और तुरंत उपचार — हर गाय पेशेवर चिकित्सकीय देखभाल की हकदार है।',
  },
  {
    icon: FaShieldAlt,
    title: 'दयालु व्यवहार',
    desc: 'कोई क्रूरता नहीं, अधिक काम नहीं, बूढ़ी और दूध न देने वाली गायों की सम्मानजनक देखभाल। दयालुता पर कोई समझौता नहीं।',
  },
];

const participation = [
  {
    title: 'गौशाला जाएँ या स्वयंसेवा करें',
    desc: 'किसी सप्ताहांत की सुबह गायों को खिलाने, सँवारने या केवल उनके साथ समय बिताने में बिताएँ। अधिकांश गौशालाएँ मदद करने वालों का गर्मजोशी से स्वागत करती हैं — पालनहार सहित, जहाँ फार्म भ्रमण सभी के लिए खुले हैं।',
  },
  {
    title: 'चारे या दैनिक आहार को प्रायोजित करें',
    desc: 'एक छोटा-सा मासिक योगदान भी एक गाय के लिए हरा चारा, पानी और देखभाल का खर्च उठा सकता है। यह सेवा करने के सबसे प्रत्यक्ष तरीकों में से एक है।',
  },
  {
    title: 'किसी गाय को गोद लें या सहारा दें',
    desc: 'कई गौशालाएँ परिवारों को प्रतीकात्मक रूप से एक गाय गोद लेने और उसके स्वास्थ्य, दूध व कल्याण को देखने देती हैं — बच्चों के बड़े होने के लिए एक सुंदर परंपरा।',
  },
  {
    title: 'पंचगव्य व प्राकृतिक उत्पाद चुनें',
    desc: 'A2 दूध, बिलोना घी, वर्मी कम्पोस्ट, धूपबत्ती और अन्य गाय-आधारित उत्पाद खरीदना गौशालाओं को आर्थिक रूप से आत्मनिर्भर रखता है।',
  },
  {
    title: 'गौ सेवा को पारिवारिक जीवन में लाएँ',
    desc: 'बच्चों को गायों को खिलाने के भ्रमण में शामिल करें, गोपाष्टमी और गोवर्धन पूजा जैसे त्योहार साथ मनाएँ, और अगली पीढ़ी को करके दयालुता सीखने दें।',
  },
  {
    title: 'नैतिक डेयरी फार्मिंग का समर्थन करें',
    desc: 'ऐसे फार्म को प्रोत्साहित करें और उनमें निवेश करें जो क्रूरता-रहित, पारदर्शी डेयरी अपनाते हैं — ताकि अच्छी पशु देखभाल अच्छी अर्थव्यवस्था बन जाए।',
  },
];

const contributions = [
  {
    title: 'कृषि संबंधी',
    points: [
      'गोबर खाद और वर्मी कम्पोस्ट बनता है जो मिट्टी की सेहत को प्राकृतिक रूप से फिर से बनाता है',
      'गोमूत्र-आधारित उपाय जैविक खेती में रसायन-मुक्त कीट प्रबंधन में सहायता करते हैं',
      'बैलों की शक्ति आज भी उन छोटे खेतों की सेवा करती है जहाँ मशीनें नहीं पहुँच पातीं',
    ],
  },
  {
    title: 'पर्यावरण संबंधी',
    points: [
      'गोबर-आधारित बायोगैस (CBG) स्वच्छ, नवीकरणीय रसोई व वाहन ईंधन प्रदान करती है',
      'जैविक खाद सिंथेटिक उर्वरकों पर निर्भरता कम करती है और भूजल की रक्षा करती है',
      'देसी नस्लें स्थानीय जलवायु के अनुकूल होती हैं और कम बाहरी संसाधनों की ज़रूरत रखती हैं',
    ],
  },
  {
    title: 'आर्थिक व ग्रामीण',
    points: [
      'डेयरी से होने वाली आय करोड़ों छोटे किसान परिवारों को एक स्थिर दैनिक आजीविका देती है',
      'मूल्य-वर्धित उत्पाद — घी, पनीर, पंचगव्य वस्तुएँ — ग्रामीण आय को कई गुना बढ़ाते हैं',
      'गौशालाएँ खिलाने, देखभाल, प्रसंस्करण और वितरण में स्थानीय रोज़गार पैदा करती हैं',
    ],
  },
  {
    title: 'सामाजिक व सांस्कृतिक',
    points: [
      'भारतीय संस्कृति में गाय को हज़ारों वर्षों से गौ माता के रूप में सम्मान दिया जाता रहा है',
      'त्योहार, मेले और सामुदायिक भोजन की परंपराएँ गाँवों को एक साथ लाती हैं',
      'साझा सेवा पीढ़ियों, परिवारों और समुदायों के बीच रिश्ते मज़बूत करती है',
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
          <h1 className="mb-4">गौ सेवा — सौम्य दाता की सेवा</h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
            गायों की देखभाल मानवता के सबसे पुराने दयालु कार्यों में से एक है — एक ऐसा अभ्यास
            जो चरित्र को सँवारता है, समुदायों को मज़बूत करता है, मिट्टी को समृद्ध करता है और
            सेवा करने वालों को शांत आनंद देता है।
          </p>
        </div>
      </motion.section>

      {/* What is Gau Seva */}
      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          <motion.div {...fadeUp} className="space-y-5 text-lg leading-relaxed text-gray-700">
            <p>
              <strong className="text-dark-green">गौ सेवा</strong> का सीधा अर्थ है गायों की
              सेवा और देखभाल — उन्हें खिलाना, उनके आश्रय को साफ़ रखना, उनके स्वास्थ्य का
              ध्यान रखना और उनके साथ उसी सौम्यता से पेश आना जो वे हमें दिखाती हैं। भारतीय परंपरा में
              गाय को <em>गौ माता</em> के रूप में पूजा जाता है, वह माता जो पोषण देती है; पर गौ सेवा
              का मूल्य सार्वभौमिक है। किसी भी पृष्ठभूमि का कोई भी व्यक्ति, जिसने एक सुबह बछड़े को
              खिलाने या किसी सौम्य गिर गाय को सँवारने में बिताई है, उस शांति को जानता है जो यह देती है।
            </p>
            <p>
              मूल रूप से, गौ सेवा एक रिश्ता है। गाय दूध, उपजाऊ खाद और साथ देती है; बदले में वह
              केवल भोजन, स्वच्छता, सुरक्षा और दयालुता माँगती है। इस आदान-प्रदान को रोज़ निभाना
              न केवल पशु का जीवन बदलता है — यह हमारा जीवन भी बदल देता है।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Character values */}
      <section className="section bg-cream-white/60">
        <div className="container-custom">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <span className="section-eyebrow">आंतरिक विकास</span>
            <h2 className="mb-4">गायों की सेवा हमें क्या सिखाती है</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              सेवा जितनी पाने वाले के लिए है, उतनी ही देने वाले के लिए भी। ये वे गुण हैं
              जो लोग नियमित गौ देखभाल के माध्यम से लगातार अपने भीतर बढ़ते हुए बताते हैं।
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
              &ldquo;सूर्योदय के समय गाय के पास बिताए दस शांत मिनट मन को एक घंटे के
              ध्यान-भटकाव से कहीं अधिक गहराई से स्थिर कर सकते हैं। सेवा गतिमान ध्यान है।&rdquo;
            </p>
            <footer className="mt-6 text-sm uppercase tracking-widest text-golden">
              गौशाला स्वयंसेवकों का रोज़ का अनुभव
            </footer>
          </motion.blockquote>
          <motion.p {...fadeUp} className="mx-auto mt-8 max-w-2xl text-white/85">
            पशुओं की देखभाल में बिताया गया समय व्यापक रूप से कम तनाव, भावनात्मक स्थिरता
            और कृतज्ञता के नए बोध से जुड़ा है। जो परिवार साथ सेवा करते हैं वे मज़बूत रिश्तों
            की बात करते हैं; बुज़ुर्गों को दिनचर्या और साथ मिलता है; बच्चे ऐसी संवेदना सीखते हैं
            जिसे वे जीवन भर साथ रखते हैं।
          </motion.p>
        </div>
      </section>

      {/* Contributions grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <span className="section-eyebrow">गौशाला से परे</span>
            <h2 className="mb-4">गायें समाज की सेवा कैसे करती हैं</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              गाय एक उल्लेखनीय चक्रीय अर्थव्यवस्था के केंद्र में खड़ी है — परिवारों का पोषण
              करते हुए, खेतों को फिर से उपजाऊ बनाते हुए और ग्रामीण आजीविकाओं को शक्ति देते हुए।
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
            परिवार की मेज़ पर रखे दूध और घी से लेकर, थकी हुई मिट्टी को फिर से जीवंत करने वाली
            खाद तक, और ग्रामीण रसोई को रोशन करने वाली बायोगैस तक — अच्छी तरह देखभाल की गई गायें
            चुपचाप टिकाऊ खेती, जैविक कृषि और करोड़ों किसानों की आजीविका को सहारा देती हैं।
            उनकी रक्षा करना केवल दान नहीं है; यह पर्यावरण और अर्थव्यवस्था की दृष्टि से भी समझदारी है।
          </motion.p>
        </div>
      </section>

      {/* Care standards */}
      <section className="section bg-cream-white/60">
        <div className="container-custom">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <span className="section-eyebrow">सही ढंग से की गई सेवा</span>
            <h2 className="mb-4">गौ देखभाल के चार कर्तव्य</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              सच्ची सेवा ज़िम्मेदार सेवा है। ये वे मानक हैं जिनका हम पालनहार में स्वयं पालन
              करते हैं — और हर गौशाला को इन्हें अपनाने के लिए प्रोत्साहित करते हैं।
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
            <span className="section-eyebrow">आज ही शुरू करें</span>
            <h2 className="mb-4">गौ सेवा करने के छह तरीके</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              सेवा के लिए अपना खुद का फार्म होना ज़रूरी नहीं है। यहाँ कुछ व्यावहारिक तरीके हैं
              जिनसे कोई भी — गाँव में हो या शहर में — शुरुआत कर सकता है।
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
            <h2 className="mb-4 !text-white">आइए, हमारे साथ सेवा करें</h2>
            <p className="mb-8 text-lg text-white/85">
              NH-48 पर हमारी गौशाला आएँ, हमारी 200 गिर गायों और उनके बछड़ों के साथ एक सुबह
              बिताएँ, और गौ सेवा को प्रत्यक्ष रूप से अनुभव करें। आपकी हर यात्रा, आपके चुने हर
              उत्पाद और हर योगदान से देखभाल का यह चक्र चलता रहता है।
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="btn btn-golden">
                फार्म भ्रमण की योजना बनाएँ
              </Link>
              <Link
                to="/invest"
                className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary-green"
              >
                नैतिक डेयरी का समर्थन करें
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
