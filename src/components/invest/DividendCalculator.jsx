import { useState } from 'react';
import { motion } from 'framer-motion';
import { formatINR, formatINRCompact } from '../../data/investorData';

const MIN = 10_000;
const MAX = 10_00_000;
const STEP = 10_000;
const PRESETS = [10_000, 50_000, 1_00_000, 5_00_000];

// Per-cow dividend model — one cow unit per ₹1,00,000 invested.
const COW_UNIT = 1_00_000;
const INVESTOR_SHARE = 0.2174; // ≈ ₹5,000 of ₹23,000 monthly net profit per cow

// Illustrative per-cow monthly economics.
const REVENUE = [
  { label: 'दूध (20 लीटर/दिन × ₹50 × 30)', value: 30_000 },
  { label: 'गोबर उत्पाद', value: 4_000 },
  { label: 'गोमूत्र उत्पाद', value: 2_000 },
  { label: 'बायोगैस / बायो-CNG', value: 1_500 },
  { label: 'पंचगव्य उत्पाद', value: 3_000 },
  { label: 'बछड़ा मूल्य वृद्धि', value: 2_500 },
];
const EXPENSES = [
  { label: 'चारा', value: 12_000 },
  { label: 'श्रम', value: 4_000 },
  { label: 'पशु-चिकित्सा एवं बीमा', value: 1_000 },
  { label: 'फार्म ओवरहेड', value: 3_000 },
];
const TOTAL_REVENUE = REVENUE.reduce((s, r) => s + r.value, 0); // 43,000
const TOTAL_EXPENSE = EXPENSES.reduce((s, e) => s + e.value, 0); // 20,000
const NET_PROFIT_PER_COW = TOTAL_REVENUE - TOTAL_EXPENSE; // 23,000

export default function DividendCalculator() {
  const [amount, setAmount] = useState(1_00_000);
  const [draft, setDraft] = useState('100000');

  const cowUnits = amount / COW_UNIT;
  const monthlyRevenue = Math.round(cowUnits * TOTAL_REVENUE);
  const monthlyExpense = Math.round(cowUnits * TOTAL_EXPENSE);
  const monthlyNetProfit = monthlyRevenue - monthlyExpense;
  const monthlyDividend = Math.round(monthlyNetProfit * INVESTOR_SHARE);
  const annualDividend = monthlyDividend * 12;

  const applyAmount = (value) => {
    setAmount(value);
    setDraft(String(value));
  };
  const handleSlider = (e) => applyAmount(Number(e.target.value));
  const handleInput = (e) => {
    setDraft(e.target.value);
    const parsed = Number(e.target.value);
    if (Number.isFinite(parsed) && parsed >= MIN && parsed <= MAX) setAmount(parsed);
  };
  const handleBlur = () => {
    const parsed = Number(draft);
    const clamped = Number.isFinite(parsed) && parsed > 0
      ? Math.min(MAX, Math.max(MIN, Math.round(parsed)))
      : amount;
    applyAmount(clamped);
  };

  return (
    <section className="section bg-cream-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="section-eyebrow">लाभांश कैलकुलेटर</span>
          <h2 className="mb-4">वह सेवा जो लौटाती भी है</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            एक गाय, अनेक आय स्रोत। स्लाइडर घुमाकर देखें कि आपकी गाय इकाई से कितना मासिक एवं
            वार्षिक लाभांश बनता है — प्रति गाय शुद्ध लाभ एवं निवेशक हिस्से के आधार पर।
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-primary-green/10 bg-white shadow-xl"
        >
          <div className="grid lg:grid-cols-2">
            {/* Inputs */}
            <div className="p-6 sm:p-8 lg:p-10">
              <label htmlFor="calc-amount" className="mb-2 block font-semibold text-dark-green">
                आपकी निवेश राशि
              </label>
              <div className="relative mb-5">
                <span className="absolute top-1/2 left-4 -translate-y-1/2 font-semibold text-gray-500" aria-hidden="true">₹</span>
                <input
                  id="calc-amount"
                  type="number"
                  inputMode="numeric"
                  min={MIN}
                  max={MAX}
                  step={STEP}
                  value={draft}
                  onChange={handleInput}
                  onBlur={handleBlur}
                  className="input-field pl-9 text-lg font-bold text-dark-green"
                />
              </div>

              <label htmlFor="calc-amount-slider" className="sr-only">निवेश राशि स्लाइडर</label>
              <input
                id="calc-amount-slider"
                type="range"
                min={MIN}
                max={MAX}
                step={STEP}
                value={amount}
                onChange={handleSlider}
                className="h-2 w-full cursor-pointer accent-primary-green"
              />
              <div className="mt-1 mb-6 flex justify-between text-xs font-semibold text-gray-500">
                <span>₹10,000</span>
                <span>₹10,00,000</span>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {PRESETS.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => applyAmount(preset)}
                    className={`min-h-11 rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                      amount === preset
                        ? 'border-primary-green bg-primary-green text-white'
                        : 'border-gray-200 bg-white text-gray-600 hover:border-primary-green hover:text-primary-green'
                    }`}
                  >
                    {formatINRCompact(preset)}
                  </button>
                ))}
              </div>

              {/* Formula */}
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm">
                <p className="mb-1 font-bold text-dark-green">लाभांश मॉडल (प्रति गाय इकाई)</p>
                <p className="font-medium text-gray-700">
                  मासिक लाभांश = गाय इकाई × प्रति गाय मासिक शुद्ध लाभ × निवेशक हिस्सा
                </p>
                <p className="mt-2 text-gray-500">
                  = {cowUnits.toFixed(2)} × {formatINR(NET_PROFIT_PER_COW)} × 21.74% ={' '}
                  <strong className="text-primary-green">{formatINR(monthlyDividend)}/माह</strong>
                </p>

                {/* Per-cow economics */}
                <div className="mt-3 grid grid-cols-3 gap-2 border-t border-gray-200 pt-3 text-center text-xs">
                  <div>
                    <p className="text-gray-500">मासिक आय</p>
                    <p className="font-bold text-dark-green tabular-nums">{formatINR(monthlyRevenue)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">मासिक व्यय</p>
                    <p className="font-bold text-[#c41e2a] tabular-nums">{formatINR(monthlyExpense)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">शुद्ध लाभ</p>
                    <p className="font-bold text-primary-green tabular-nums">{formatINR(monthlyNetProfit)}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Outputs */}
            <div className="bg-gradient-to-br from-primary-green to-dark-green p-6 text-white sm:p-8 lg:p-10">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/20 pb-4">
                <div>
                  <p className="text-sm text-green-100">आपकी गाय इकाइयाँ</p>
                  <p className="text-2xl font-bold tabular-nums">{cowUnits.toFixed(2)}</p>
                </div>
                <p className="max-w-[10rem] text-right text-xs text-green-100">₹1,00,000 = 1 गाय इकाई</p>
              </div>

              <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/20 pb-4">
                <div>
                  <p className="text-sm text-green-100">मासिक शुद्ध लाभ (आपकी इकाई)</p>
                  <p className="text-2xl font-bold tabular-nums">{formatINR(monthlyNetProfit)}</p>
                </div>
                <p className="max-w-[10rem] text-right text-xs text-green-100">निवेशक हिस्सा 21.74%</p>
              </div>

              <p className="text-sm uppercase tracking-wide text-green-100">आपका अनुमानित मासिक लाभांश</p>
              <motion.p
                key={`m-${monthlyDividend}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-1 text-3xl font-extrabold text-white tabular-nums sm:text-4xl"
              >
                {formatINR(monthlyDividend)}<span className="text-lg font-semibold text-green-100">/माह</span>
              </motion.p>

              <p className="mt-5 text-sm uppercase tracking-wide text-green-100">अनुमानित वार्षिक लाभांश</p>
              <motion.p
                key={`a-${annualDividend}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-1 text-4xl font-extrabold text-golden tabular-nums sm:text-5xl"
              >
                {formatINR(annualDividend)}
              </motion.p>
              <p className="mt-2 text-sm text-green-100">{formatINR(amount)} के निवेश पर</p>
            </div>
          </div>

          {/* Worked example + disclaimer */}
          <div className="border-t border-gray-100 bg-cream-white px-6 py-4 sm:px-8">
            <p className="text-sm text-gray-700">
              <strong className="text-dark-green">हल किया गया उदाहरण:</strong>{' '}
              {formatINR(1_00_000)} निवेश (1 गाय) → {formatINR(NET_PROFIT_PER_COW)} मासिक शुद्ध लाभ × 21.74% ={' '}
              <strong className="text-primary-green">{formatINR(5_000)}/माह</strong> → {formatINR(60_000)} वार्षिक लाभांश।
            </p>
            <p className="mt-1 text-xs text-gray-500 italic">
              प्रति गाय मासिक अर्थशास्त्र पर आधारित उदाहरणात्मक गणना। वास्तविक लाभांश गौशाला एवं कंपनी
              के प्रदर्शन पर निर्भर करता है।
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
