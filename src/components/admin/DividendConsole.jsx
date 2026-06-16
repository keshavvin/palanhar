import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCheckCircle, FaGavel, FaInfoCircle, FaUsers } from 'react-icons/fa';
import {
  adminStats,
  calculateDividend,
  dividendExample,
  formatINR,
  formatINRCompact,
} from '../../data/investorData';

const FY_OPTIONS = ['2025-26', '2026-27'];

export default function DividendConsole({ onAudit }) {
  const [fy, setFy] = useState('2025-26');
  const [profitStr, setProfitStr] = useState(String(dividendExample.netProfit));
  const [rate, setRate] = useState(dividendExample.boardApprovedRatePct);
  const [modalOpen, setModalOpen] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [declared, setDeclared] = useState(null);
  const timerRef = useRef(null);

  const netProfit = Number(profitStr) || 0;

  // Worked example: a ₹1,00,000 investor's payout at the chosen rate.
  // With totalPool = netProfit the SRS formula reduces to rate% of the holding.
  const calc = useMemo(
    () => calculateDividend({ investment: 1_00_000, netProfit, ratePct: rate, totalPool: netProfit }),
    [netProfit, rate]
  );

  useEffect(() => () => clearTimeout(timerRef.current), []);

  useEffect(() => {
    if (!modalOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalOpen]);

  const handleRateChange = (value) => {
    const next = Number(value);
    if (Number.isNaN(next)) return;
    setRate(Math.min(25, Math.max(0, next)));
  };

  const handleConfirm = () => {
    if (confirming) return;
    setConfirming(true);
    timerRef.current = setTimeout(() => {
      setConfirming(false);
      setModalOpen(false);
      setDeclared({ fy, rate });
      onAudit({
        actor: 'CMD',
        action: `${rate}% लाभांश घोषित किया — FY ${fy} (पूल ${formatINRCompact(calc.dividendPool)})`,
      });
    }, 600);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      aria-labelledby="declare-dividend-heading"
      className="rounded-xl bg-white shadow-lg border border-primary-green/10 border-t-4 border-t-golden p-5 sm:p-8"
    >
      <span className="section-eyebrow">लाभांश घोषणा कंसोल</span>
      <h2 id="declare-dividend-heading" className="text-xl sm:text-2xl">
        लाभांश घोषित करें — FY {fy}
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        लाभांश = (निवेशक की हिस्सेदारी ÷ कुल हिस्सेदारी) × लाभांश पूल
      </p>

      <AnimatePresence>
        {declared && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="status"
            aria-live="polite"
            className="mt-4 flex items-start gap-3 rounded-lg border border-primary-green/30 bg-primary-green/10 p-4 text-sm text-dark-green"
          >
            <FaCheckCircle aria-hidden="true" className="mt-0.5 shrink-0 text-primary-green" />
            <p>
              <strong>FY {declared.fy} के लिए {declared.rate}% लाभांश घोषित किया गया।</strong>{' '}
              यह निर्णय ऑडिट विवरण में दर्ज कर लिया गया है और निवेशकों को सूचित किया जाएगा।
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Inputs */}
        <div className="flex flex-col gap-5">
          <div>
            <label htmlFor="dividend-fy" className="mb-1.5 block text-sm font-semibold text-gray-700">
              वित्तीय वर्ष
            </label>
            <select
              id="dividend-fy"
              value={fy}
              onChange={(e) => setFy(e.target.value)}
              className="input-field"
            >
              {FY_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  FY {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="dividend-net-profit" className="mb-1.5 block text-sm font-semibold text-gray-700">
              शुद्ध लाभ (₹)
            </label>
            <input
              id="dividend-net-profit"
              type="number"
              min="0"
              step="1000000"
              value={profitStr}
              onChange={(e) => setProfitStr(e.target.value)}
              className="input-field"
            />
            <p className="mt-1.5 text-xs font-semibold text-amber-700">
              = {formatINRCompact(netProfit)} ऑडिट किया गया शुद्ध लाभ
            </p>
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between gap-3">
              <label htmlFor="dividend-rate" className="text-sm font-semibold text-gray-700">
                बोर्ड द्वारा स्वीकृत दर (%)
              </label>
              <input
                type="number"
                min="0"
                max="25"
                step="0.5"
                value={rate}
                onChange={(e) => handleRateChange(e.target.value)}
                aria-label="लाभांश दर प्रतिशत"
                className="w-20 rounded-lg border-2 border-gray-200 bg-gray-50 px-2 py-1.5 text-center text-sm font-bold text-dark-green focus:border-primary-green focus:bg-white focus:outline-none"
              />
            </div>
            <input
              id="dividend-rate"
              type="range"
              min="0"
              max="25"
              step="0.5"
              value={rate}
              onChange={(e) => handleRateChange(e.target.value)}
              className="h-2 w-full cursor-pointer accent-golden"
            />
            <div className="mt-1 flex justify-between text-xs text-gray-400">
              <span>0%</span>
              <span>25%</span>
            </div>
          </div>
        </div>

        {/* Live calculation panel */}
        <div className="flex flex-col gap-4 rounded-xl border border-golden/30 bg-gradient-to-br from-cream-white to-white p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-700">तत्काल गणना</p>
          <div>
            <p className="text-sm text-gray-500">
              लाभांश पूल — {formatINRCompact(netProfit)} का {rate}%
            </p>
            <p className="mt-1 text-3xl font-bold text-dark-green" aria-live="polite">
              {formatINRCompact(calc.dividendPool)}
            </p>
          </div>
          <div className="rounded-lg border border-primary-green/15 bg-primary-green/5 p-4 text-sm">
            <p className="font-semibold text-gray-600">उदाहरण गणना</p>
            <p className="mt-1 text-gray-700">
              <strong>{formatINR(1_00_000)}</strong> का निवेशक इस चक्र में{' '}
              <strong className="text-primary-green">{formatINR(calc.dividend)}</strong> प्राप्त करेगा।
            </p>
          </div>
          <p className="inline-flex items-center gap-2 text-sm text-gray-600">
            <FaUsers aria-hidden="true" className="text-primary-green" />
            {adminStats.totalInvestors.toLocaleString('en-IN')} निवेशक प्रभावित होंगे
          </p>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="btn btn-golden mt-auto inline-flex min-h-11 items-center justify-center gap-2"
          >
            <FaGavel aria-hidden="true" />
            लाभांश घोषित करें
          </button>
        </div>
      </div>

      {/* Confirmation modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.button
              type="button"
              aria-label="संवाद बंद करें"
              onClick={() => setModalOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 cursor-default bg-dark-green/50 backdrop-blur-sm"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="confirm-dividend-title"
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-2xl"
            >
              <h3 id="confirm-dividend-title" className="text-lg sm:text-xl">
                लाभांश घोषणा की पुष्टि करें
              </h3>
              <dl className="mt-4 divide-y divide-gray-100 text-sm">
                <div className="flex items-center justify-between py-2.5">
                  <dt className="text-gray-500">वित्तीय वर्ष</dt>
                  <dd className="font-semibold text-dark-green">FY {fy}</dd>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <dt className="text-gray-500">शुद्ध लाभ</dt>
                  <dd className="font-semibold text-dark-green">{formatINRCompact(netProfit)}</dd>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <dt className="text-gray-500">लाभांश दर</dt>
                  <dd className="font-semibold text-dark-green">{rate}%</dd>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <dt className="text-gray-500">लाभांश पूल</dt>
                  <dd className="font-bold text-amber-700">{formatINRCompact(calc.dividendPool)}</dd>
                </div>
              </dl>
              <p className="mt-4 flex items-start gap-2 rounded-lg bg-golden/10 p-3 text-xs text-amber-800">
                <FaInfoCircle aria-hidden="true" className="mt-0.5 shrink-0" />
                CMD की स्वीकृति आवश्यक — यह कार्रवाई ऑडिट विवरण में दर्ज की जाती है।
              </p>
              <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="btn btn-outline min-h-11 px-5 py-2.5 text-sm"
                >
                  रद्द करें
                </button>
                <button
                  type="button"
                  onClick={handleConfirm}
                  disabled={confirming}
                  autoFocus
                  className="btn btn-primary inline-flex min-h-11 items-center justify-center gap-2 px-5 py-2.5 text-sm disabled:cursor-wait disabled:opacity-70"
                >
                  {confirming ? (
                    <>
                      <span
                        aria-hidden="true"
                        className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
                      />
                      घोषित किया जा रहा है…
                    </>
                  ) : (
                    'पुष्टि करें और घोषित करें'
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
