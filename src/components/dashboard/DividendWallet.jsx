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
        aria-label="Dividend wallet"
      >
        <div className="flex items-center gap-3">
          <span className="w-11 h-11 shrink-0 rounded-full bg-white/15 flex items-center justify-center">
            <FaWallet aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-white text-xl md:text-2xl">Dividend Wallet</h2>
            <p className="text-sm text-light-green">FY 2025-26 dividend declared at 15%</p>
          </div>
        </div>

        <dl className="grid grid-cols-3 gap-3 my-6 sm:my-8">
          <div className="rounded-lg bg-white/10 p-3 sm:p-4">
            <dt className="text-xs uppercase tracking-wide text-light-green">Declared</dt>
            <dd className="text-lg sm:text-2xl font-bold mt-1">
              {formatINR(walletSummary.declared)}
            </dd>
          </div>
          <div className="rounded-lg bg-white/10 p-3 sm:p-4">
            <dt className="text-xs uppercase tracking-wide text-light-green">Paid</dt>
            <dd className="text-lg sm:text-2xl font-bold mt-1">{formatINR(walletSummary.paid)}</dd>
          </div>
          <div className="rounded-lg bg-white/10 p-3 sm:p-4 ring-1 ring-golden/60">
            <dt className="text-xs uppercase tracking-wide text-golden">Pending</dt>
            <dd className="text-lg sm:text-2xl font-bold mt-1 text-golden">
              {formatINR(walletSummary.pending)}
            </dd>
          </div>
        </dl>

        <p className="text-sm text-white/80 mb-4">
          Your pending dividend of {formatINR(walletSummary.pending)} is ready — transfer it to
          your verified bank account or reinvest it into additional shares.
        </p>

        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => setOpenModal('transfer')}
            className="btn bg-white text-dark-green hover:bg-cream-white shadow-lg flex-1 flex items-center justify-center gap-2"
          >
            <FaUniversity aria-hidden="true" /> Transfer to Bank
          </button>
          <button
            type="button"
            onClick={() => setOpenModal('reinvest')}
            className="btn btn-golden flex-1 flex items-center justify-center gap-2"
          >
            <FaSeedling aria-hidden="true" /> Reinvest
          </button>
        </div>
      </motion.section>

      {/* Transfer to Bank modal */}
      <DashboardModal
        open={openModal === 'transfer'}
        onClose={closeModal}
        title="Transfer to Bank"
        titleId="transfer-modal-title"
      >
        {phase === 'success' ? (
          <div className="text-center py-4">
            <FaCheckCircle className="text-primary-green text-5xl mx-auto mb-3" aria-hidden="true" />
            <p className="text-lg font-bold text-dark-green">Transfer initiated</p>
            <p className="text-sm text-gray-600 mt-2">
              {formatINR(amountValue)} is on its way — reflects in your bank account in 2–3
              working days.
            </p>
            <button type="button" onClick={closeModal} className="btn btn-outline mt-6 w-full">
              Done
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
                Verified
              </span>
            </div>
            <div>
              <label
                htmlFor="transfer-amount"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Amount to transfer (₹)
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
                Available pending dividend: {formatINR(walletSummary.pending)}
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
                  <Spinner light /> Processing…
                </>
              ) : (
                'Confirm Transfer'
              )}
            </button>
          </div>
        )}
      </DashboardModal>

      {/* Reinvest modal */}
      <DashboardModal
        open={openModal === 'reinvest'}
        onClose={closeModal}
        title="Reinvest Dividend"
        titleId="reinvest-modal-title"
      >
        {phase === 'success' ? (
          <div className="text-center py-4">
            <FaCheckCircle className="text-primary-green text-5xl mx-auto mb-3" aria-hidden="true" />
            <p className="text-lg font-bold text-dark-green">Reinvestment successful</p>
            <p className="text-sm text-gray-600 mt-2">
              {REINVEST_SHARES} additional shares will be added to your holding and your share
              certificate will be updated.
            </p>
            <button type="button" onClick={closeModal} className="btn btn-outline mt-6 w-full">
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="rounded-xl bg-cream-white border border-gray-200 p-5 text-center">
              <p className="text-sm text-gray-600">Convert</p>
              <p className="text-3xl font-bold text-dark-green mt-1">
                {formatINR(walletSummary.pending)}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                into{' '}
                <span className="font-bold text-primary-green">
                  {REINVEST_SHARES} additional shares
                </span>{' '}
                at face value {formatINR(currentInvestor.faceValue)} per share
              </p>
            </div>
            <p className="text-xs text-gray-500 text-center">
              New holding after reinvestment:{' '}
              {(currentInvestor.shares + REINVEST_SHARES).toLocaleString('en-IN')} shares
            </p>
            <button
              type="button"
              onClick={handleConfirm}
              disabled={phase === 'processing'}
              className="btn btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {phase === 'processing' ? (
                <>
                  <Spinner light /> Processing…
                </>
              ) : (
                'Confirm Reinvestment'
              )}
            </button>
          </div>
        )}
      </DashboardModal>
    </>
  );
}
