import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaSeedling, FaUniversity, FaWallet } from 'react-icons/fa';
import DashboardModal from './DashboardModal';
import Spinner from './Spinner';
import { currentInvestor, formatINR, walletSummary } from '../../data/investorData';

const REINVEST_SHARES = Math.floor(walletSummary.pending / currentInvestor.faceValue);

export default function DividendWallet() {
  const [openModal, setOpenModal] = useState(null); // 'transfer' | 'reinvest' | null
  const [phase, setPhase] = useState('form'); // 'form' | 'processing' | 'success'
  const [amount, setAmount] = useState(String(walletSummary.pending));

  const amountValue = Number(amount) || 0;
  const amountValid = amountValue > 0 && amountValue <= walletSummary.pending;

  const closeModal = () => {
    setOpenModal(null);
    setPhase('form');
    setAmount(String(walletSummary.pending));
  };

  const handleConfirm = () => {
    setPhase('processing');
    setTimeout(() => setPhase('success'), 600);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-xl shadow-lg bg-gradient-to-br from-primary-green to-dark-green text-white p-5 sm:p-8 h-full flex flex-col"
        aria-label="डिविडेंड वॉलेट"
      >
        <div className="flex items-center gap-3">
          <span className="w-11 h-11 shrink-0 rounded-full bg-white/15 flex items-center justify-center">
            <FaWallet aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-white text-xl md:text-2xl">डिविडेंड वॉलेट</h2>
            <p className="text-sm text-light-green">FY 2025-26 डिविडेंड डिक्लेयर्ड ऐट 15%</p>
          </div>
        </div>

        <dl className="grid grid-cols-3 gap-3 my-6 sm:my-8">
          <div className="rounded-lg bg-white/10 p-3 sm:p-4">
            <dt className="text-xs uppercase tracking-wide text-light-green">डिक्लेयर्ड</dt>
            <dd className="text-lg sm:text-2xl font-bold mt-1">
              {formatINR(walletSummary.declared)}
            </dd>
          </div>
          <div className="rounded-lg bg-white/10 p-3 sm:p-4">
            <dt className="text-xs uppercase tracking-wide text-light-green">पेड</dt>
            <dd className="text-lg sm:text-2xl font-bold mt-1">{formatINR(walletSummary.paid)}</dd>
          </div>
          <div className="rounded-lg bg-white/10 p-3 sm:p-4 ring-1 ring-golden/60">
            <dt className="text-xs uppercase tracking-wide text-golden">पेंडिंग</dt>
            <dd className="text-lg sm:text-2xl font-bold mt-1 text-golden">
              {formatINR(walletSummary.pending)}
            </dd>
          </div>
        </dl>

        <p className="text-sm text-white/80 mb-4">
          योर पेंडिंग डिविडेंड ऑफ {formatINR(walletSummary.pending)} इज़ रेडी — ट्रांसफर इट टू
          योर वेरिफाइड बैंक अकाउंट ऑर रीइन्वेस्ट इट इनटू एडिशनल शेयर्स.
        </p>

        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => setOpenModal('transfer')}
            className="btn bg-white text-dark-green hover:bg-cream-white shadow-lg flex-1 flex items-center justify-center gap-2"
          >
            <FaUniversity aria-hidden="true" /> ट्रांसफर टू बैंक
          </button>
          <button
            type="button"
            onClick={() => setOpenModal('reinvest')}
            className="btn btn-golden flex-1 flex items-center justify-center gap-2"
          >
            <FaSeedling aria-hidden="true" /> रीइन्वेस्ट
          </button>
        </div>
      </motion.section>

      {/* Transfer to Bank modal */}
      <DashboardModal
        open={openModal === 'transfer'}
        onClose={closeModal}
        title="ट्रांसफर टू बैंक"
        titleId="transfer-modal-title"
      >
        {phase === 'success' ? (
          <div className="text-center py-4">
            <FaCheckCircle className="text-primary-green text-5xl mx-auto mb-3" aria-hidden="true" />
            <p className="text-lg font-bold text-dark-green">ट्रांसफर इनिशिएटेड</p>
            <p className="text-sm text-gray-600 mt-2">
              {formatINR(amountValue)} इज़ ऑन इट्स वे — रिफ्लेक्ट्स इन योर बैंक अकाउंट इन 2–3
              वर्किंग डेज़.
            </p>
            <button type="button" onClick={closeModal} className="btn btn-outline mt-6 w-full">
              डन
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="rounded-xl bg-cream-white border border-gray-200 p-4 flex items-center gap-3">
              <span className="w-10 h-10 shrink-0 rounded-full bg-primary-green/10 text-primary-green flex items-center justify-center">
                <FaUniversity aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-800">{currentInvestor.bank.name}</p>
                <p className="text-sm text-gray-500 tracking-wider">
                  A/c {currentInvestor.bank.account}
                </p>
              </div>
              <span className="ml-auto badge-status bg-primary-green/10 text-primary-green">
                वेरिफाइड
              </span>
            </div>
            <div>
              <label
                htmlFor="transfer-amount"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                अमाउंट टू ट्रांसफर (₹)
              </label>
              <input
                id="transfer-amount"
                type="number"
                min="1"
                max={walletSummary.pending}
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                className="input-field"
              />
              <p className="text-xs text-gray-500 mt-1.5">
                अवेलेबल पेंडिंग डिविडेंड: {formatINR(walletSummary.pending)}
              </p>
            </div>
            <button
              type="button"
              onClick={handleConfirm}
              disabled={!amountValid || phase === 'processing'}
              className="btn btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {phase === 'processing' ? (
                <>
                  <Spinner light /> प्रोसेसिंग…
                </>
              ) : (
                'कन्फर्म ट्रांसफर'
              )}
            </button>
          </div>
        )}
      </DashboardModal>

      {/* Reinvest modal */}
      <DashboardModal
        open={openModal === 'reinvest'}
        onClose={closeModal}
        title="रीइन्वेस्ट डिविडेंड"
        titleId="reinvest-modal-title"
      >
        {phase === 'success' ? (
          <div className="text-center py-4">
            <FaCheckCircle className="text-primary-green text-5xl mx-auto mb-3" aria-hidden="true" />
            <p className="text-lg font-bold text-dark-green">रीइन्वेस्टमेंट सक्सेसफुल</p>
            <p className="text-sm text-gray-600 mt-2">
              {REINVEST_SHARES} एडिशनल शेयर्स विल बी एडेड टू योर होल्डिंग एंड योर शेयर
              सर्टिफिकेट विल बी अपडेटेड.
            </p>
            <button type="button" onClick={closeModal} className="btn btn-outline mt-6 w-full">
              डन
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="rounded-xl bg-cream-white border border-gray-200 p-5 text-center">
              <p className="text-sm text-gray-600">कन्वर्ट</p>
              <p className="text-3xl font-bold text-dark-green mt-1">
                {formatINR(walletSummary.pending)}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                इनटू{' '}
                <span className="font-bold text-primary-green">
                  {REINVEST_SHARES} एडिशनल शेयर्स
                </span>{' '}
                ऐट फेस वैल्यू {formatINR(currentInvestor.faceValue)} पर शेयर
              </p>
            </div>
            <p className="text-xs text-gray-500 text-center">
              न्यू होल्डिंग आफ्टर रीइन्वेस्टमेंट:{' '}
              {(currentInvestor.shares + REINVEST_SHARES).toLocaleString('en-IN')} शेयर्स
            </p>
            <button
              type="button"
              onClick={handleConfirm}
              disabled={phase === 'processing'}
              className="btn btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {phase === 'processing' ? (
                <>
                  <Spinner light /> प्रोसेसिंग…
                </>
              ) : (
                'कन्फर्म रीइन्वेस्टमेंट'
              )}
            </button>
          </div>
        )}
      </DashboardModal>
    </>
  );
}
