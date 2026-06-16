import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  calculateDividend,
  dividendExample,
  formatINR,
  formatINRCompact,
} from '../../data/investorData';

const MIN = 10_000;
const MAX = 10_00_000;
const STEP = 10_000;
const PRESETS = [10_000, 50_000, 1_00_000, 5_00_000];

export default function DividendCalculator() {
  const [amount, setAmount] = useState(1_00_000);
  const [draft, setDraft] = useState('100000');

  const result = calculateDividend({ investment: amount });
  const example = calculateDividend({ investment: 1_00_000 });

  const applyAmount = (value) => {
    setAmount(value);
    setDraft(String(value));
  };

  const handleSlider = (e) => applyAmount(Number(e.target.value));

  const handleInput = (e) => {
    setDraft(e.target.value);
    const parsed = Number(e.target.value);
    if (Number.isFinite(parsed) && parsed >= MIN && parsed <= MAX) {
      setAmount(parsed);
    }
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
          <span className="section-eyebrow">डिविडेंड कैलकुलेटर</span>
          <h2 className="mb-4">सेवा दैट ऑल्सो गिव्स बैक</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            योर कंट्रिब्यूशन केयर्स फॉर द काउज़ — एंड अर्न्स यू अ शेयर ऑफ द
            गौशाला&rsquo;ज़ सक्सेस। मूव द स्लाइडर टू सी योर प्रोजेक्टेड एनुअल
            डिविडेंड, यूज़िंग द सेम फॉर्मूला अवर सिस्टम अप्लाइज़ ऑन पेआउट डे।
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
                योर इन्वेस्टमेंट अमाउंट
              </label>
              <div className="relative mb-5">
                <span className="absolute top-1/2 left-4 -translate-y-1/2 font-semibold text-gray-500" aria-hidden="true">
                  ₹
                </span>
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

              <label htmlFor="calc-amount-slider" className="sr-only">
                इन्वेस्टमेंट अमाउंट स्लाइडर
              </label>
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

              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm">
                <p className="mb-1 font-bold text-dark-green">SRS फॉर्मूला</p>
                <p className="font-medium text-gray-700">
                  डिविडेंड = (योर होल्डिंग ÷ टोटल पूल) × डिविडेंड पूल
                </p>
                <p className="mt-2 text-gray-500">
                  = ({formatINRCompact(amount)} ÷ {formatINRCompact(dividendExample.totalInvestmentPool)}) ×{' '}
                  {formatINRCompact(result.dividendPool)} = <strong className="text-primary-green">{formatINR(result.dividend)}</strong>
                </p>
              </div>
            </div>

            {/* Outputs */}
            <div className="bg-gradient-to-br from-primary-green to-dark-green p-6 text-white sm:p-8 lg:p-10">
              <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/20 pb-4">
                <div>
                  <p className="text-sm text-green-100">योर शेयरहोल्डिंग</p>
                  <p className="text-2xl font-bold tabular-nums">{result.sharePct.toFixed(2)}%</p>
                </div>
                <p className="max-w-[10rem] text-right text-xs text-green-100">
                  ऑफ द {formatINRCompact(dividendExample.totalInvestmentPool)} डेमो इन्वेस्टमेंट पूल
                </p>
              </div>

              <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/20 pb-4">
                <div>
                  <p className="text-sm text-green-100">डिविडेंड पूल ({dividendExample.financialYear})</p>
                  <p className="text-2xl font-bold tabular-nums">{formatINRCompact(result.dividendPool)}</p>
                </div>
                <p className="max-w-[10rem] text-right text-xs text-green-100">
                  {dividendExample.boardApprovedRatePct}% ऑफ {formatINRCompact(dividendExample.netProfit)} नेट प्रॉफिट
                </p>
              </div>

              <p className="text-sm uppercase tracking-wide text-green-100">योर प्रोजेक्टेड एनुअल डिविडेंड</p>
              <motion.p
                key={result.dividend}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-1 text-4xl font-extrabold text-golden tabular-nums sm:text-5xl"
              >
                {formatINR(result.dividend)}
              </motion.p>
              <p className="mt-2 text-sm text-green-100">
                ऑन ऐन इन्वेस्टमेंट ऑफ {formatINR(amount)}
              </p>
            </div>
          </div>

          {/* Worked example + disclaimer */}
          <div className="border-t border-gray-100 bg-cream-white px-6 py-4 sm:px-8">
            <p className="text-sm text-gray-700">
              <strong className="text-dark-green">वर्क्ड एग्ज़ांपल:</strong>{' '}
              {formatINR(1_00_000)} इन्वेस्टेड → {example.sharePct.toFixed(0)}% ऑफ द{' '}
              {formatINRCompact(dividendExample.totalInvestmentPool)} पूल →{' '}
              {example.sharePct.toFixed(0)}% × {formatINRCompact(example.dividendPool)} ={' '}
              <strong className="text-primary-green">{formatINR(example.dividend)}</strong> एनुअल डिविडेंड।
            </p>
            <p className="mt-1 text-xs text-gray-500 italic">
              इलस्ट्रेटिव कैलकुलेशन बेस्ड ऑन FY 2025-26 बोर्ड-अप्रूव्ड रेट। एक्चुअल डिविडेंड्स
              डिपेंड ऑन कंपनी परफॉर्मेंस।
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
