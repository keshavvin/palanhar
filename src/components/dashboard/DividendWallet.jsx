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
        aria-label="लाभांश वॉलेट"
      >
        <div className="flex items-center gap-3">
          <span className="w-11 h-11 shrink-0 rounded-full bg-white/15 flex items-center justify-center">
            <FaWallet aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-white text-xl md:text-2xl">लाभांश वॉलेट</h2>
            <p className="text-sm text-light-green">FY 2025-26 लाभांश 15% पर घोषित</p>
          </div>
        </div>

        <dl className="grid grid-cols-3 gap-3 my-6 sm:my-8">
          <div className="rounded-lg bg-white/10 p-3 sm:p-4">
            <dt className="text-xs uppercase tracking-wide text-light-green">घोषित</dt>
            <dd className="text-lg sm:text-2xl font-bold mt-1">
              {formatINR(walletSummary.declared)}
            </dd>
          </div>
          <div className="rounded-lg bg-white/10 p-3 sm:p-4">
            <dt className="text-xs uppercase tracking-wide text-light-green">भुगतान किया</dt>
            <dd className="text-lg sm:text-2xl font-bold mt-1">{formatINR(walletSummary.paid)}</dd>
          </div>
          <div className="rounded-lg bg-white/10 p-3 sm:p-4 ring-1 ring-golden/60">
            <dt className="text-xs uppercase tracking-wide text-golden">लंबित</dt>
            <dd className="text-lg sm:text-2xl font-bold mt-1 text-golden">
              {formatINR(walletSummary.pending)}
            </dd>
          </div>
        </dl>

        <p className="text-sm text-white/80 mb-4">
          आपका {formatINR(walletSummary.pending)} का लंबित लाभांश तैयार है — इसे अपने सत्यापित
          बैंक खाते में स्थानांतरित करें या अतिरिक्त शेयरों में पुनर्निवेश करें.
        </p>

        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => setOpenModal('transfer')}
            className="btn bg-white text-dark-green hover:bg-cream-white shadow-lg flex-1 flex items-center justify-center gap-2"
          >
            <FaUniversity aria-hidden="true" /> बैंक में स्थानांतरित करें
          </button>
          <button
            type="button"
            onClick={() => setOpenModal('reinvest')}
            className="btn btn-golden flex-1 flex items-center justify-center gap-2"
          >
            <FaSeedling aria-hidden="true" /> पुनर्निवेश करें
          </button>
        </div>
      </motion.section>

      {/* Transfer to Bank modal */}
      <DashboardModal
        open={openModal === 'transfer'}
        onClose={closeModal}
        title="बैंक में स्थानांतरण"
        titleId="transfer-modal-title"
      >
        {phase === 'success' ? (
          <div className="text-center py-4">
            <FaCheckCircle className="text-primary-green text-5xl mx-auto mb-3" aria-hidden="true" />
            <p className="text-lg font-bold text-dark-green">स्थानांतरण आरंभ किया गया</p>
            <p className="text-sm text-gray-600 mt-2">
              {formatINR(amountValue)} भेज दिया गया है — आपके बैंक खाते में 2–3 कार्य दिवसों में
              दिखाई देगा.
            </p>
            <button type="button" onClick={closeModal} className="btn btn-outline mt-6 w-full">
              हो गया
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
                सत्यापित
              </span>
            </div>
            <div>
              <label
                htmlFor="transfer-amount"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                स्थानांतरण की राशि (₹)
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
                उपलब्ध लंबित लाभांश: {formatINR(walletSummary.pending)}
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
                  <Spinner light /> प्रोसेस हो रहा है…
                </>
              ) : (
                'स्थानांतरण की पुष्टि करें'
              )}
            </button>
          </div>
        )}
      </DashboardModal>

      {/* Reinvest modal */}
      <DashboardModal
        open={openModal === 'reinvest'}
        onClose={closeModal}
        title="लाभांश पुनर्निवेश करें"
        titleId="reinvest-modal-title"
      >
        {phase === 'success' ? (
          <div className="text-center py-4">
            <FaCheckCircle className="text-primary-green text-5xl mx-auto mb-3" aria-hidden="true" />
            <p className="text-lg font-bold text-dark-green">पुनर्निवेश सफल रहा</p>
            <p className="text-sm text-gray-600 mt-2">
              {REINVEST_SHARES} अतिरिक्त शेयर आपकी धारिता में जोड़े जाएँगे और आपका शेयर
              प्रमाणपत्र अपडेट कर दिया जाएगा.
            </p>
            <button type="button" onClick={closeModal} className="btn btn-outline mt-6 w-full">
              हो गया
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="rounded-xl bg-cream-white border border-gray-200 p-5 text-center">
              <p className="text-sm text-gray-600">बदलें</p>
              <p className="text-3xl font-bold text-dark-green mt-1">
                {formatINR(walletSummary.pending)}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                में{' '}
                <span className="font-bold text-primary-green">
                  {REINVEST_SHARES} अतिरिक्त शेयर
                </span>{' '}
                अंकित मूल्य {formatINR(currentInvestor.faceValue)} प्रति शेयर पर
              </p>
            </div>
            <p className="text-xs text-gray-500 text-center">
              पुनर्निवेश के बाद नई धारिता:{' '}
              {(currentInvestor.shares + REINVEST_SHARES).toLocaleString('en-IN')} शेयर
            </p>
            <button
              type="button"
              onClick={handleConfirm}
              disabled={phase === 'processing'}
              className="btn btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {phase === 'processing' ? (
                <>
                  <Spinner light /> प्रोसेस हो रहा है…
                </>
              ) : (
                'पुनर्निवेश की पुष्टि करें'
              )}
            </button>
          </div>
        )}
      </DashboardModal>
    </>
  );
}
