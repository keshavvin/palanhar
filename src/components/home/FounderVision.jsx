import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRightLong, FaQuoteLeft } from 'react-icons/fa6';
import { FaUserTie } from 'react-icons/fa';
import { FaCow, FaSeedling, FaShieldHalved, FaHeart } from 'react-icons/fa6';

const pillars = [
  { icon: FaCow, label: 'गौ सेवा' },
  { icon: FaSeedling, label: 'सततता' },
  { icon: FaShieldHalved, label: 'पारदर्शिता' },
  { icon: FaHeart, label: 'दीर्घकालिक प्रभाव' },
];

const PHOTOS = ['/naari/mrinal-kanti-ghosh.jpg', '/naari/banner-felicitation.jpg'];

function Portrait() {
  const [i, setI] = useState(0);
  if (i < PHOTOS.length) {
    return (
      <img
        src={PHOTOS[i]}
        alt="डॉ. मृणाल कांति घोष"
        onError={() => setI((n) => n + 1)}
        className="h-full w-full object-cover"
        draggable="false"
      />
    );
  }
  return (
    <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-green to-dark-green text-white">
      <FaUserTie size={72} aria-hidden="true" />
    </span>
  );
}

export default function FounderVision() {
  return (
    <section className="section bg-cream-white">
      <div className="container-custom grid items-center gap-10 lg:grid-cols-5 lg:gap-12">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <div className="relative mx-auto h-80 w-full max-w-sm overflow-hidden rounded-3xl border-4 border-white shadow-2xl ring-1 ring-primary-green/10 sm:h-96 lg:h-[28rem]">
            <Portrait />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark-green/90 via-dark-green/40 to-transparent p-5 pt-12">
              <p className="font-display text-xl font-bold text-white">डॉ. मृणाल कांति घोष</p>
              <p className="text-sm font-semibold text-golden">संस्थापक एवं दूरदर्शी मार्गदर्शक</p>
            </div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <span className="section-eyebrow">दूरदर्शी नेतृत्व</span>
          <h2 className="mb-4">एक मिशन का नेतृत्व — अकेले व्यवसाय नहीं</h2>

          <FaQuoteLeft className="mb-3 text-3xl text-golden/50" aria-hidden="true" />
          <p className="text-base leading-relaxed text-gray-700 md:text-lg">
            यह संगठन एक सच्चे दूरदर्शी के नेतृत्व में है। <b className="text-dark-green">डॉ. मृणाल कांति घोष</b> अकेले
            एक व्यवसाय नहीं चला रहे — वे एक मिशन का नेतृत्व कर रहे हैं, जो <b className="text-primary-green">गौ सेवा,
            सततता, पारदर्शिता</b> एवं <b className="text-primary-green">दीर्घकालिक सकारात्मक प्रभाव</b> को एक साथ जोड़ता है।
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            35+ वर्षों का अनुभव — अनुसंधान, तकनीक एवं ग्रामीण नवाचार में। उनका सपना सरल है — हर गाय सुरक्षित,
            हर गाँव समृद्ध, और हर निवेशक का भरोसा एक पवित्र उद्देश्य से जुड़ा।
          </p>

          {/* Mission pillars */}
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {pillars.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 rounded-2xl border border-primary-green/10 bg-white p-4 text-center shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-green/10 text-primary-green">
                  <Icon aria-hidden="true" />
                </span>
                <span className="text-xs font-bold text-dark-green">{label}</span>
              </div>
            ))}
          </div>

          <Link to="/about" className="btn btn-primary mt-8 inline-flex items-center gap-2">
            हमारी कहानी जानें <FaArrowRightLong aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
