import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const points = [
  'स्किल ट्रेनिंग — सिलाई, कढ़ाई एवं हस्तकला',
  'स्वयं-सहायता समूह एवं माइक्रो-एंटरप्राइज़',
  'सर्टिफिकेशन एवं रोज़गार से जुड़ाव',
  'आर्थिक स्वतंत्रता एवं नेतृत्व विकास',
];

export default function NaariShaktiSection() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">नारी शक्ति</span>
            <h2 className="mb-4">महिला सशक्तिकरण से आत्मनिर्भर भारत</h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              पालनहार नारी शक्ति के अंतर्गत हम महिलाओं को कौशल प्रशिक्षण, स्वरोजगार
              एवं उद्यमिता के अवसर देते हैं — ताकि हर बहन आत्मनिर्भर बनकर अपने
              परिवार और समाज की समृद्धि की नींव रखे।
            </p>

            <ul className="mb-8 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-gray-700">
                  <FaCheckCircle className="mt-1 shrink-0 text-primary-green" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <Link to="/gallery" className="btn btn-primary group inline-flex items-center gap-2">
              नारी शक्ति की झलक देखें
              <FaArrowRight className="transition-transform group-hover:translate-x-2" aria-hidden="true" />
            </Link>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl border-4 border-white shadow-xl ring-1 ring-primary-green/10">
              <img
                src="/naari/group-photo.jpg"
                alt="पालनहार नारी शक्ति की प्रशिक्षित बहनें एवं मेंटर्स"
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
            <span className="absolute -bottom-4 left-6 rounded-full bg-golden px-5 py-2 text-sm font-bold text-dark-green shadow-lg">
              500+ बहनें प्रशिक्षित
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
