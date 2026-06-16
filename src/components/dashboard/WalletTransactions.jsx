import { motion } from 'framer-motion';
import { FaBullhorn, FaCoins, FaSeedling, FaUniversity } from 'react-icons/fa';
import { formatINR, walletTransactions } from '../../data/investorData';

const TYPE_STYLES = {
  'Dividend Credit': { Icon: FaCoins, classes: 'bg-primary-green/10 text-primary-green' },
  'Transfer to Bank': { Icon: FaUniversity, classes: 'bg-dark-green/10 text-dark-green' },
  Reinvested: { Icon: FaSeedling, classes: 'bg-light-green/25 text-primary-green' },
  'Dividend Declared': { Icon: FaBullhorn, classes: 'bg-golden/15 text-amber-600' },
};

const STATUS_STYLES = {
  Completed: 'bg-primary-green/10 text-primary-green',
  'Pending Payout': 'bg-golden/15 text-amber-600',
};

// Devanagari display labels keyed off the (Latin) type/status enums.
const TYPE_LABELS = {
  'Dividend Credit': 'लाभांश जमा',
  'Transfer to Bank': 'बैंक में स्थानांतरण',
  Reinvested: 'पुनर्निवेशित',
  'Dividend Declared': 'लाभांश घोषित',
};

const STATUS_LABELS = {
  Completed: 'पूर्ण',
  'Pending Payout': 'भुगतान लंबित',
};

export default function WalletTransactions() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md border border-gray-100 p-5 sm:p-6 h-full"
      aria-label="वॉलेट लेन-देन"
    >
      <h2 className="text-xl md:text-2xl">वॉलेट लेन-देन</h2>
      <p className="text-sm text-gray-500 mt-1 mb-2">
        हर जमा, भुगतान और पुनर्निवेश एक ही जगह
      </p>
      <ul className="divide-y divide-gray-100">
        {walletTransactions.map((tx, index) => {
          const { Icon, classes } = TYPE_STYLES[tx.type] ?? TYPE_STYLES['Dividend Credit'];
          const isCredit = tx.amount >= 0;
          return (
            <motion.li
              key={tx.id}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex items-center gap-3 py-3.5"
            >
              <span
                className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center ${classes}`}
              >
                <Icon aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-gray-800 truncate">
                  {TYPE_LABELS[tx.type] ?? tx.type}
                </p>
                <p className="text-xs text-gray-500">{tx.date}</p>
              </div>
              <div className="text-right shrink-0">
                <p
                  className={`text-sm font-bold ${isCredit ? 'text-primary-green' : 'text-red-500'}`}
                >
                  {isCredit ? '+' : '−'}
                  {formatINR(Math.abs(tx.amount))}
                </p>
                <span
                  className={`badge-status mt-1 ${STATUS_STYLES[tx.status] ?? 'bg-gray-100 text-gray-600'}`}
                >
                  {STATUS_LABELS[tx.status] ?? tx.status}
                </span>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </motion.section>
  );
}
