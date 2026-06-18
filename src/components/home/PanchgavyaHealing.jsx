import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRightLong, FaLeaf } from 'react-icons/fa6';
import LeafHeading from './LeafHeading';

// The five gifts of the cow (Panchgavya).
const products = [
  { label: 'दूध', sub: 'गो दुग्ध', emoji: '🥛' },
  { label: 'दही', sub: 'गो दधि', emoji: '🥣' },
  { label: 'घी', sub: 'गो घृत', emoji: '🫙' },
  { label: 'गोमूत्र', sub: 'गो मूत्र', emoji: '🧴' },
  { label: 'गोबर', sub: 'गो मल', emoji: '🟤' },
];

// Body systems → Panchgavya remedy.
const remedies = [
  { n: 1, emoji: '🧠', sys: 'मस्तिष्क एवं तंत्रिका तंत्र', ailment: 'तनाव, चिंता, अनिद्रा, कमज़ोर स्मृति, सिरदर्द', product: 'पंचगव्य घृतम्', benefit: 'मस्तिष्क कोशिकाओं को पोषण, तंत्रिकाओं को शांति, स्मृति एवं नींद में सुधार।' },
  { n: 2, emoji: '🫁', sys: 'श्वसन तंत्र', ailment: 'खांसी, अस्थमा, ब्रोंकाइटिस, एलर्जी, श्वास कष्ट', product: 'कासहर घृतम्', benefit: 'खांसी में राहत, फेफड़ों की सफ़ाई, एलर्जी एवं श्वास कष्ट कम।' },
  { n: 3, emoji: '❤️', sys: 'हृदय एवं रक्त संचार', ailment: 'उच्च रक्तचाप, कोलेस्ट्रॉल, कमज़ोर हृदय', product: 'हृदय पंचगव्य चूर्ण', benefit: 'हृदय स्वास्थ्य, BP एवं कोलेस्ट्रॉल नियंत्रण, रक्त संचार में सुधार।' },
  { n: 4, emoji: '🧪', sys: 'यकृत एवं डिटॉक्स तंत्र', ailment: 'फैटी लिवर, पीलिया, धीमा चयापचय, विषाक्तता', product: 'पंचगव्य अर्क', benefit: 'यकृत का डिटॉक्स, चयापचय सुधार एवं विषहरण।' },
  { n: 5, emoji: '🍽️', sys: 'पाचन तंत्र', ailment: 'अम्लता, अपच, कब्ज, IBS', product: 'पंचगव्य चूर्ण', benefit: 'पाचन सुधार, अम्लता एवं कब्ज में राहत।' },
  { n: 6, emoji: '💧', sys: 'गुर्दे एवं मूत्र तंत्र', ailment: 'UTI, गुर्दे की पथरी, जल प्रतिधारण', product: 'गोमूत्र अर्क', benefit: 'UTI में सहायक, पथरी घोलना, अतिरिक्त जल एवं विषहरण।' },
  { n: 7, emoji: '🦴', sys: 'हड्डियाँ एवं जोड़', ailment: 'गठिया, जोड़ दर्द, सूजन, कमज़ोरी', product: 'गोघृत (गाय का घी)', benefit: 'जोड़ों को चिकनाई, सूजन कम, हड्डियाँ मज़बूत।' },
  { n: 8, emoji: '🛡️', sys: 'प्रतिरक्षा तंत्र', ailment: 'बार-बार संक्रमण, कम रोग-प्रतिरोधक क्षमता, थकान', product: 'पंचगव्य वटी', benefit: 'रोग-प्रतिरोधक क्षमता, संक्रमण से रक्षा, ऊर्जा एवं स्फूर्ति।' },
  { n: 9, emoji: '✨', sys: 'त्वचा एवं बाल', ailment: 'मुँहासे, एक्ज़िमा, रूखापन, बाल झड़ना', product: 'पंचगव्य साबुन / लेप', benefit: 'त्वचा समस्याओं में राहत, दाग कम, प्राकृतिक चमक।' },
  { n: 10, emoji: '🌸', sys: 'प्रजनन तंत्र', ailment: 'हार्मोनल असंतुलन, बांझपन, मासिक धर्म समस्याएँ', product: 'शिवाम्भु (गोमूत्र)', benefit: 'हार्मोन संतुलन, प्रजनन एवं मासिक चक्र में सुधार।' },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

// Tries these filenames in order — drop the infographic at public/ as any of them.
const IMG_SOURCES = [
  '/panchgavya-healing.jpg',
  '/panchgavya-healing.png',
  '/panchgavya.jpg',
  '/panchgavya.png',
];

export default function PanchgavyaHealing() {
  const [srcIdx, setSrcIdx] = useState(0);

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <LeafHeading className="mb-3">पंचगव्य — प्रकृति का उपचार स्पर्श</LeafHeading>
        <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed text-gray-600 md:text-lg">
          शरीर के विभिन्न तंत्रों के लक्षण एवं उनके लिए पंचगव्य आधारित प्राकृतिक उपचार।
        </p>

        {/* Infographic image — shows if dropped at public/panchgavya-healing.(jpg|png) */}
        {srcIdx < IMG_SOURCES.length && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-12 w-full max-w-3xl overflow-hidden rounded-3xl border-4 border-white bg-white shadow-2xl ring-1 ring-primary-green/10"
          >
            <img
              src={IMG_SOURCES[srcIdx]}
              alt="पंचगव्य — प्रकृति का उपचार स्पर्श (इन्फोग्राफिक)"
              onError={() => setSrcIdx((i) => i + 1)}
              className="h-auto w-full"
              draggable="false"
            />
          </motion.div>
        )}

        {/* Five gifts of the cow */}
        <div className="mx-auto mb-12 grid max-w-3xl grid-cols-5 gap-2 sm:gap-3">
          {products.map((p) => (
            <div key={p.label} className="flex flex-col items-center gap-1.5 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-white text-xl shadow-sm ring-2 ring-primary-green/20 sm:h-16 sm:w-16 sm:text-3xl">
                {p.emoji}
              </span>
              <span className="text-xs font-bold text-dark-green sm:text-sm">{p.label}</span>
              <span className="text-[10px] text-gray-400">{p.sub}</span>
            </div>
          ))}
        </div>

        {/* Ailment → remedy cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-5 md:grid-cols-2"
        >
          {remedies.map((r) => (
            <motion.div
              key={r.n}
              variants={fadeUp}
              className="flex flex-col gap-4 rounded-2xl border border-primary-green/10 bg-white p-5 shadow-sm sm:flex-row sm:items-stretch"
            >
              {/* Ailment */}
              <div className="flex flex-1 items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c41e2a]/10 text-lg" aria-hidden="true">
                  {r.emoji}
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-[#c41e2a]">{r.n}. लक्षण स्थान</p>
                  <p className="font-bold leading-snug text-dark-green">{r.sys}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{r.ailment}</p>
                </div>
              </div>

              {/* Arrow */}
              <span className="hidden shrink-0 items-center text-primary-green/50 sm:flex" aria-hidden="true">
                <FaArrowRightLong />
              </span>

              {/* Remedy */}
              <div className="flex flex-1 items-start gap-3 rounded-xl bg-primary-green/5 p-3 sm:bg-transparent sm:p-0">
                <FaLeaf className="mt-1 shrink-0 text-primary-green" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-primary-green">पंचगव्य उपचार</p>
                  <p className="font-bold leading-snug text-dark-green">{r.product}</p>
                  <p className="mt-0.5 text-xs text-gray-600">{r.benefit}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-10 max-w-3xl rounded-2xl bg-dark-green px-6 py-6 text-center"
        >
          <p className="font-display text-lg font-bold leading-snug text-golden sm:text-xl">
            पंचगव्य — शरीर, मन एवं आत्मा के लिए सम्पूर्ण समग्र उपचार प्रणाली।
          </p>
          <p className="mt-2 text-xs text-white/70">
            * जानकारी पारंपरिक आयुर्वेदिक ज्ञान पर आधारित; किसी भी उपचार से पूर्व चिकित्सक से परामर्श लें।
          </p>
        </motion.div>
      </div>
    </section>
  );
}
