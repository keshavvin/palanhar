import { motion } from 'framer-motion';
import { dividendHistory, formatINR, formatINRCompact } from '../../data/investorData';

const STATUS_STYLES = {
  Paid: 'bg-primary-green/10 text-primary-green',
  Declared: 'bg-golden/15 text-amber-600',
};

export default function DividendHistoryTable() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md border border-gray-100 p-5 sm:p-6"
      aria-label="Dividend history"
    >
      <h2 className="text-xl md:text-2xl">Dividend History</h2>
      <p className="text-sm text-gray-500 mt-1 mb-4">
        Your dividend = (your shareholding ÷ total pool) × board-approved dividend pool
      </p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b-2 border-primary-green/20 text-xs uppercase tracking-wider text-gray-500">
              <th scope="col" className="py-3 pr-4 font-semibold">
                Financial Year
              </th>
              <th scope="col" className="py-3 pr-4 font-semibold">
                Net Profit
              </th>
              <th scope="col" className="py-3 pr-4 font-semibold">
                Rate
              </th>
              <th scope="col" className="py-3 pr-4 font-semibold">
                Your Dividend
              </th>
              <th scope="col" className="py-3 pr-4 font-semibold">
                Status
              </th>
              <th scope="col" className="py-3 font-semibold">
                Paid On
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {dividendHistory.map((row) => (
              <tr key={row.fy} className="hover:bg-cream-white transition-colors">
                <td className="py-3.5 pr-4 font-semibold text-gray-800">{row.fy}</td>
                <td className="py-3.5 pr-4 text-gray-600">{formatINRCompact(row.netProfit)}</td>
                <td className="py-3.5 pr-4 text-gray-600">{row.ratePct}%</td>
                <td className="py-3.5 pr-4 font-bold text-dark-green">
                  {formatINR(row.yourDividend)}
                </td>
                <td className="py-3.5 pr-4">
                  <span
                    className={`badge-status ${STATUS_STYLES[row.status] ?? 'bg-gray-100 text-gray-600'}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="py-3.5 text-gray-500">{row.paidOn ?? '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
}
