import { motion } from 'framer-motion';
import { shareRegister, formatINR } from '../../data/investorData';

export default function AdminShareRegister() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      aria-labelledby="share-register-heading"
      className="rounded-xl bg-white shadow-lg border border-primary-green/10 p-5 sm:p-6"
    >
      <span className="section-eyebrow">शेयरहोल्डिंग रिकॉर्ड्स</span>
      <h2 id="share-register-heading" className="text-xl sm:text-2xl">
        शेयर रजिस्टर
      </h2>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <caption className="caption-bottom pt-4 text-left text-xs text-gray-500">
            सिस्टम-मेंटेन्ड शेयर रजिस्टर — इन्वेस्टर आईडीज़ एंड सर्टिफिकेट नंबर्स आर ऑटो-जेनरेटेड.
          </caption>
          <thead>
            <tr className="border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
              <th scope="col" className="px-3 py-3">इन्वेस्टर आईडी</th>
              <th scope="col" className="px-3 py-3">नेम</th>
              <th scope="col" className="px-3 py-3">सर्टिफिकेट नं</th>
              <th scope="col" className="px-3 py-3 text-right">शेयर्स</th>
              <th scope="col" className="px-3 py-3 text-right">अमाउंट</th>
              <th scope="col" className="px-3 py-3">इश्यूड ऑन</th>
            </tr>
          </thead>
          <tbody>
            {shareRegister.map((entry) => (
              <tr key={entry.certificateNo} className="border-b border-gray-100 transition-colors hover:bg-cream-white/70">
                <td className="px-3 py-3.5 font-mono text-xs text-gray-700">{entry.investorId}</td>
                <td className="px-3 py-3.5 font-semibold text-gray-800">{entry.name}</td>
                <td className="px-3 py-3.5 font-mono text-xs text-primary-green">{entry.certificateNo}</td>
                <td className="px-3 py-3.5 text-right text-gray-700">{entry.shares.toLocaleString('en-IN')}</td>
                <td className="px-3 py-3.5 text-right font-semibold text-dark-green">{formatINR(entry.amount)}</td>
                <td className="px-3 py-3.5 whitespace-nowrap text-gray-600">{entry.issuedOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
}
