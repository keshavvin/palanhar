import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCircleCheck } from 'react-icons/fa6';
import LeafHeading from './LeafHeading';

// DPIIT (Startup India) recognition details.
const certRows = [
  { label: 'प्रमाणपत्र संख्या', value: 'DIPP246087' },
  { label: 'मान्यता', value: 'मान्यता प्राप्त स्टार्टअप (Startup India)' },
  { label: 'जारीकर्ता', value: 'उद्योग संवर्धन एवं आंतरिक व्यापार विभाग (DPIIT)' },
  { label: 'उद्योग / क्षेत्र', value: 'कृषि — डेयरी फार्मिंग' },
  { label: 'निगमन तिथि', value: '04-02-2026' },
  { label: 'जारी तिथि', value: '23-02-2026' },
  { label: 'वैध तिथि तक', value: '03-02-2036' },
];

const highlights = [
  'भारत सरकार द्वारा मान्यता प्राप्त',
  'पंजीकृत प्राइवेट लिमिटेड कंपनी',
  'पारदर्शी एवं अनुपालन-संगत संचालन',
];

export default function Recognition() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section className="section bg-cream-white">
      <div className="container-custom">
        <LeafHeading className="mb-4">मान्यता एवं प्रमाणन</LeafHeading>
        <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-gray-700 md:text-lg">
          पालनहार डेयरी एंड एग्रीकल्चरल फार्म प्रा. लि. भारत सरकार के उद्योग संवर्धन एवं आंतरिक व्यापार
          विभाग (DPIIT) द्वारा एक मान्यता प्राप्त स्टार्टअप है — पूर्ण पारदर्शिता एवं भरोसे का प्रमाण।
        </p>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Certificate image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border-4 border-white shadow-2xl ring-1 ring-primary-green/10"
          >
            {imgOk ? (
              <img
                src="/DPIIT.jpg"
                alt="पालनहार — DPIIT स्टार्टअप मान्यता प्रमाणपत्र"
                onError={() => setImgOk(false)}
                className="h-auto w-full"
                draggable="false"
              />
            ) : (
              <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 bg-white text-center">
                <FaAward className="text-5xl text-golden" aria-hidden="true" />
                <p className="px-6 text-sm font-semibold text-gray-500">
                  DPIIT मान्यता प्रमाणपत्र यहाँ दिखेगा
                  <span className="mt-1 block text-xs font-normal">(public/dpiit-certificate.jpg जोड़ें)</span>
                </p>
              </div>
            )}
          </motion.div>

          {/* Details card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-primary-green/10 bg-white shadow-xl"
          >
            <div className="flex items-center gap-3 bg-primary-green px-6 py-4 text-white">
              <FaAward className="text-2xl text-golden" aria-hidden="true" />
              <h3 className="!text-white text-lg">DPIIT स्टार्टअप मान्यता</h3>
            </div>

            <dl className="divide-y divide-gray-100 p-6">
              {certRows.map((row) => (
                <div key={row.label} className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">{row.label}</dt>
                  <dd className="text-sm font-bold text-dark-green sm:text-right">{row.value}</dd>
                </div>
              ))}
            </dl>

            <ul className="space-y-2 border-t border-gray-100 bg-cream-white px-6 py-4">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm font-semibold text-dark-green">
                  <FaCircleCheck className="shrink-0 text-primary-green" aria-hidden="true" /> {h}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
