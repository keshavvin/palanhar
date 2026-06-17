import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShieldHalved, FaIdCard } from 'react-icons/fa6';
import LeafHeading from './LeafHeading';

// Per-cow insurance — proof that each investor's cow is a real, insured asset.
const details = [
  { label: 'गाय आईडी (Cow ID)', value: 'PH-000123' },
  { label: 'बीमित पशु (Insured Animal)', value: 'साहीवाल गाय' },
  { label: 'लाभार्थी / निवेशक (Investor)', value: 'श्री राजेश कुमार' },
  { label: 'प्रबंधन (Managed By)', value: 'पालनहार डेयरी एंड एग्रीकल्चरल फार्म Pvt. Ltd.' },
  { label: 'बीमित राशि (Sum Insured)', value: '₹1,00,000' },
];

export default function InsuranceSection() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <LeafHeading className="mb-4">बीमित गौधन &mdash; सुरक्षित निवेश</LeafHeading>
        <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-gray-700 md:text-lg">
          &ldquo;एक निवेशक = एक गाय&rdquo; — पूर्ण पारदर्शिता के लिए हर गाय का बीमा प्रमाणपत्र निवेशक के नाम एवं
          गाय के यूनिक टैग आईडी के साथ जारी किया जाता है। दुर्घटना, बीमारी, आग, चोरी एवं प्राकृतिक आपदा से सुरक्षा।
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
                src="/insorence.jpeg"
                alt="पालनहार गौधन बीमा प्रमाणपत्र — कैटल इंश्योरेंस सर्टिफिकेट"
                onError={() => setImgOk(false)}
                className="h-auto w-full"
                draggable="false"
              />
            ) : (
              <div className="flex aspect-[3/2] flex-col items-center justify-center gap-3 bg-cream-white text-center">
                <FaShieldHalved className="text-5xl text-primary-green/40" aria-hidden="true" />
                <p className="px-6 text-sm font-semibold text-gray-500">
                  बीमा प्रमाणपत्र छवि यहाँ दिखेगी
                  <span className="mt-1 block text-xs font-normal">(public/insorence.jpeg जोड़ें)</span>
                </p>
              </div>
            )}
          </motion.div>

          {/* Detail card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-primary-green/10 bg-white shadow-xl"
          >
            <div className="flex items-center gap-3 bg-primary-green px-6 py-4 text-white">
              <FaIdCard className="text-2xl" aria-hidden="true" />
              <h3 className="!text-white text-lg">गौधन बीमा विवरण</h3>
            </div>
            <dl className="divide-y divide-gray-100 p-6">
              {details.map((row) => (
                <div key={row.label} className="flex flex-col gap-0.5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">{row.label}</dt>
                  <dd className="text-sm font-bold text-dark-green sm:text-right">{row.value}</dd>
                </div>
              ))}
            </dl>
            <div className="flex items-center gap-2 border-t border-gray-100 bg-cream-white px-6 py-4 text-xs text-gray-600">
              <FaShieldHalved className="shrink-0 text-primary-green" aria-hidden="true" />
              जोखिम कवरेज: दुर्घटना, बीमारी, आग, चोरी एवं प्राकृतिक आपदा — पॉलिसी की शर्तों के अनुसार।
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
