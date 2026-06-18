import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWheatAwn, FaStethoscope, FaHouseChimney, FaHeart } from 'react-icons/fa6';
import LeafHeading from './LeafHeading';

const care = [
  { icon: FaWheatAwn, label: 'दैनिक पोषण' },
  { icon: FaStethoscope, label: 'चिकित्सा देखभाल' },
  { icon: FaHouseChimney, label: 'सुरक्षित आश्रय' },
  { icon: FaHeart, label: 'करुणामय स्नेह' },
];

const PHOTOS = ['/gallery-care.jpg', '/hero-banner-1.jpg'];

function CareImage() {
  const [i, setI] = useState(0);
  return (
    <img
      src={PHOTOS[Math.min(i, PHOTOS.length - 1)]}
      alt="पालनहार गौशाला में गायों की देखभाल"
      onError={() => setI((n) => n + 1)}
      className="h-full w-full object-cover"
      draggable="false"
    />
  );
}

export default function GaushalaCare() {
  return (
    <section className="section bg-cream-white">
      <div className="container-custom">
        <LeafHeading className="mb-12">सेवा का जीवंत परितंत्र</LeafHeading>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Image with 400+ badge */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-72 overflow-hidden rounded-3xl border-4 border-white shadow-2xl ring-1 ring-primary-green/10 sm:h-96 lg:h-[26rem]"
          >
            <CareImage />
            <div className="absolute bottom-4 left-4 rounded-2xl bg-dark-green/90 px-5 py-3 text-center shadow-lg backdrop-blur-sm">
              <p className="font-display text-3xl font-extrabold leading-none text-golden">400+</p>
              <p className="mt-1 text-xs font-semibold text-white">देखभाल में गायें</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              पालनहार <b className="text-dark-green">400 से अधिक गायों</b> का घर है, जिन्हें प्रतिदिन पोषण,
              चिकित्सा देखभाल, सुरक्षित आश्रय एवं करुणामय स्नेह मिलता है। हर बचाई एवं संरक्षित गाय के पीछे एक
              <b className="text-primary-green"> समर्पित टीम</b> अथक परिश्रम करती है — ताकि हर गाय को गरिमा,
              स्वास्थ्य एवं आजीवन देखभाल मिले।
            </p>

            {/* Care points */}
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {care.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 rounded-2xl border border-primary-green/10 bg-white p-4 text-center shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-green/10 text-primary-green">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="text-xs font-bold text-dark-green">{label}</span>
                </div>
              ))}
            </div>

            {/* Closing line */}
            <div className="mt-7 rounded-2xl border-l-4 border-golden bg-white p-5 shadow-sm">
              <p className="leading-relaxed text-gray-700">
                यह सिर्फ़ एक गौशाला नहीं — यह <b className="text-dark-green">सेवा, सततता एवं करुणा का एक जीवंत
                परितंत्र</b> है, जो जीवन बदलता है, ग्रामीण समुदायों को सशक्त करता है, और आने वाली पीढ़ियों के लिए
                भारत की पवित्र <b className="text-primary-green">गौ सेवा</b> परंपरा को सहेजता है।
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
