import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaCircleCheck, FaArrowRightLong } from 'react-icons/fa6';
import { FaUserTie } from 'react-icons/fa';

// Premium, emotional brand-vision section — the movement, the founder, the trust.
const pillars = [
  { emoji: '🐄', title: 'देशी गौ विरासत का संरक्षण', desc: 'भारत की पवित्र देशी नस्लों को सहेजना एवं समृद्ध करना।' },
  { emoji: '🌱', title: 'सतत एवं जैविक कृषि', desc: 'प्रकृति के साथ संतुलन में — रसायन-मुक्त, ज़िम्मेदार खेती।' },
  { emoji: '🤝', title: 'सामाजिक प्रभाव', desc: 'ग्रामीण आजीविका, महिला सशक्तिकरण एवं रोज़गार।' },
  { emoji: '🛡️', title: 'पारदर्शिता एवं तकनीक', desc: 'लाइव डैशबोर्ड, नियमित रिपोर्ट एवं पूर्ण निवेशक भरोसा।' },
];

const credibility = [
  '400+ देशी गायों की जीवंत, संचालित गौशाला',
  'पारदर्शी, तकनीक-संचालित प्रबंधन',
  'नियमित रिपोर्टिंग एवं निवेशक भरोसा',
  'हर गाय की देखभाल — चारा, आश्रय एवं पशु-चिकित्सा',
];

const values = ['विश्वास', 'गर्व', 'करुणा', 'सुरक्षा', 'उद्देश्य', 'दीर्घकालिक भरोसा'];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

function FounderPhoto() {
  const [ok, setOk] = useState(true);
  if (ok) {
    return (
      <img
        src="/naari/banner-felicitation.jpg"
        alt="डॉ. मृणाल कांति घोष"
        onError={() => setOk(false)}
        className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-md"
        draggable="false"
      />
    );
  }
  return (
    <span className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-primary-green text-white shadow-md">
      <FaUserTie size={32} aria-hidden="true" />
    </span>
  );
}

export default function MovementVision() {
  return (
    <section className="relative overflow-hidden bg-dark-green text-white">
      <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
        <img src="/hero-banner-3.jpg" alt="" className="h-full w-full object-cover" draggable="false" />
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24">
        {/* Opening — brand positioning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-golden">एक आंदोलन — गौ सेवा से समृद्धि</span>
          <h2 className="!text-white mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            पालनहार सिर्फ़ एक फार्म नहीं —
            <span className="block text-golden">यह एक आंदोलन है।</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            हर गाय एक जीवन है। हर सेवा एक संकल्प। पालनहार देशी गौवंश के संरक्षण, ग्रामीण समृद्धि एवं
            सच्चे, पारदर्शी विकास का आंदोलन है — जहाँ आपका हर योगदान किसी गाय की देखभाल, किसी परिवार
            की आजीविका और एक बेहतर भारत का निर्माण बनता है।
          </p>
        </motion.div>

        {/* Founder + real gaushala */}
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
          {/* Founder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm sm:p-8"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-golden">दूरदर्शी नेतृत्व</span>
            <FaQuoteLeft className="mt-4 text-3xl text-golden/60" aria-hidden="true" />
            <p className="mt-3 font-display text-lg font-semibold leading-relaxed text-white sm:text-xl">
              &ldquo;हमारा सपना सरल है — हर गाय सुरक्षित हो, हर गाँव समृद्ध हो, और हर निवेशक गर्व से कह सके
              कि उसका धन एक पवित्र उद्देश्य से जुड़ा है।&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
              <FounderPhoto />
              <div>
                <p className="font-bold text-white">डॉ. मृणाल कांति घोष</p>
                <p className="text-sm font-semibold text-golden">संस्थापक एवं दूरदर्शी मार्गदर्शक</p>
                <p className="mt-1 text-xs text-white/70">35+ वर्षों का अनुभव — अनुसंधान, तकनीक एवं ग्रामीण नवाचार में।</p>
              </div>
            </div>
          </motion.div>

          {/* Real gaushala credibility */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm sm:p-8"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-display text-5xl font-extrabold text-golden">400+</span>
              <span className="text-lg font-bold text-white">देशी गायें</span>
            </div>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-white/70">
              वास्तविक गौशाला &bull; वास्तविक प्रभाव
            </p>
            <ul className="mt-5 space-y-3">
              {credibility.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-white/90 sm:text-base">
                  <FaCircleCheck className="mt-0.5 shrink-0 text-golden" aria-hidden="true" /> {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Vision pillars */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((p) => (
            <motion.div key={p.title} variants={fadeUp} className="rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10">
              <span className="text-4xl" aria-hidden="true">{p.emoji}</span>
              <h3 className="!text-white mt-3 text-base font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Emotional values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
        >
          {values.map((v, i) => (
            <span key={v} className="flex items-center gap-3">
              <span className="text-sm font-semibold text-white/90 sm:text-base">{v}</span>
              {i < values.length - 1 && <span className="text-golden" aria-hidden="true">&bull;</span>}
            </span>
          ))}
        </motion.div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 max-w-3xl text-center"
        >
          <p className="font-display text-xl font-bold leading-snug text-golden sm:text-2xl">
            जब आप पालनहार से जुड़ते हैं, आप सिर्फ़ निवेश नहीं करते —
            <span className="block text-white">आप एक उद्देश्य का हिस्सा बनते हैं।</span>
          </p>
          <p className="mt-3 text-white/80">गायों के लिए। गाँवों के लिए। आने वाली पीढ़ियों के लिए।</p>
          <Link to="/invest/start" className="btn btn-golden mt-7 inline-flex items-center gap-2">
            इस आंदोलन से जुड़ें <FaArrowRightLong aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
