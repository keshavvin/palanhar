import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import Spinner from './Spinner';
import { currentInvestor, formatINR } from '../../data/investorData';

const certificate = currentInvestor.certificates[0];

export default function ShareCertificate() {
  const [downloadState, setDownloadState] = useState('idle'); // 'idle' | 'loading' | 'done'

  const handleDownload = () => {
    if (downloadState !== 'idle') return;
    setDownloadState('loading');
    setTimeout(() => setDownloadState('done'), 600);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      aria-label="शेयर सर्टिफिकेट"
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-2.5 sm:p-3 border-2 border-golden">
          <div className="relative rounded-lg border-2 border-primary-green/50 bg-cream-white overflow-hidden px-5 py-8 sm:px-10 sm:py-10 text-center">
            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center text-[9rem] sm:text-[13rem] opacity-[0.07] pointer-events-none select-none"
            >
              🌾
            </span>

            <div className="relative">
              <span className="section-eyebrow">
                पालनहार डेयरी &amp; एग्रीकल्चरल फार्म प्रा. लि.
              </span>
              <h2 className="text-2xl md:text-3xl">इन्वेस्टमेंट सर्टिफिकेट</h2>
              <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">
                सर्टिफिकेट No. {certificate.certificateNo}
              </p>

              <div className="w-24 h-px bg-golden mx-auto my-5" />

              <p className="text-sm text-gray-600">दिस इज़ टू सर्टिफाई दैट</p>
              <p className="font-display text-xl md:text-2xl font-bold text-dark-green mt-1">
                {currentInvestor.name}
              </p>
              <p className="text-sm text-gray-500 mt-0.5">
                इन्वेस्टर आईडी: {currentInvestor.investorId}
              </p>
              <p className="text-sm text-gray-600 mt-3">
                इज़ द रजिस्टर्ड होल्डर ऑफ{' '}
                <span className="font-bold text-dark-green">
                  {certificate.shares.toLocaleString('en-IN')} इक्विटी शेयर्स
                </span>{' '}
                ऑफ एग्रीगेट वैल्यू{' '}
                <span className="font-bold text-dark-green">{formatINR(certificate.amount)}</span>{' '}
                अंडर {certificate.plan}.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-5 border-t border-primary-green/20">
                <div className="text-center sm:text-left">
                  <p className="text-xs uppercase tracking-wide text-gray-500">डेट ऑफ इश्यू</p>
                  <p className="text-sm font-semibold text-gray-800">{certificate.issuedOn}</p>
                </div>
                <div className="text-center sm:text-right">
                  <p className="font-display italic text-dark-green text-lg">पालनहार</p>
                  <p className="text-xs uppercase tracking-wide text-gray-500 border-t border-gray-300 pt-1 mt-1">
                    ऑथराइज़्ड सिग्नेटरी
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <button
            type="button"
            onClick={handleDownload}
            disabled={downloadState === 'loading'}
            className="btn btn-primary inline-flex items-center justify-center gap-2 min-w-56 disabled:opacity-70 disabled:cursor-wait"
          >
            {downloadState === 'idle' && (
              <>
                <FaDownload aria-hidden="true" /> डाउनलोड सर्टिफिकेट
              </>
            )}
            {downloadState === 'loading' && (
              <>
                <Spinner light /> प्रिपेयरिंग PDF…
              </>
            )}
            {downloadState === 'done' && 'डाउनलोडेड ✓'}
          </button>
        </div>
      </div>
    </motion.section>
  );
}
