import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    q: 'How does my investment support Gau Seva?',
    a: 'Your funds go directly into the care of our Gir cows and the gaushala — feed, clean shelters, veterinary care — and into the farm operations they power. The same well-cared-for herd produces the A2 dairy, panchgavya and organic products that generate the returns you share in.',
  },
  {
    q: 'How are dividends calculated?',
    a: 'Each year the Board approves a dividend rate on the company’s net profit, creating a dividend pool. Your dividend = (your shareholding ÷ total shareholding) × dividend pool. For example, a ₹1,00,000 holding in a ₹1 crore pool receives 1% of a ₹15 lakh pool — ₹15,000.',
  },
  {
    q: 'When are dividends paid?',
    a: 'Dividends are declared after the annual accounts are finalised and the Board approves the rate. Once declared, they appear in your dividend wallet and are processed to your verified bank account in scheduled payout batches.',
  },
  {
    q: 'What KYC documents do I need?',
    a: 'PAN card, Aadhaar card and your bank account proof (for dividend payouts), plus nominee details. Registration uses mobile OTP and email verification, and our compliance team approves each application.',
  },
  {
    q: 'Can I withdraw or reinvest my dividend?',
    a: 'Both. From your dividend wallet you can transfer the amount to your verified bank account, or reinvest it to increase your shareholding — each reinvestment is allotted additional shares and an updated certificate.',
  },
  {
    q: 'Are returns guaranteed?',
    a: 'No. Dividends depend on the company’s actual operational performance and are declared by the Board on annual net profit. What we guarantee is transparency: certified shareholding, audited financial reports, and a complete record of every transaction.',
  },
];

export default function InvestFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section bg-cream-white/60">
      <div className="container-custom max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center md:mb-12"
        >
          <span className="section-eyebrow">Good to Know</span>
          <h2 className="mb-3">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="overflow-hidden rounded-xl border border-primary-green/10 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className="font-semibold text-dark-green">{faq.q}</span>
                  <FaChevronDown
                    aria-hidden="true"
                    className={`shrink-0 text-primary-green transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600 sm:px-6 sm:text-base">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
