import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { adminStats, pendingInvestorQueue, formatINR } from '../../data/investorData';

const planChips = {
  A: 'bg-light-green/25 text-dark-green',
  B: 'bg-primary-green/10 text-primary-green',
  C: 'bg-golden/15 text-amber-800',
};

const statusChips = {
  Pending: 'bg-amber-50 text-amber-700 border border-amber-200',
  'Under Review': 'bg-gray-100 text-gray-600 border border-gray-200',
  Approved: 'bg-primary-green/10 text-primary-green border border-primary-green/30',
  Rejected: 'bg-red-50 text-red-600 border border-red-200',
};

// Devanagari display labels keyed off the (Latin) status enum.
const statusLabels = {
  Pending: 'पेंडिंग',
  'Under Review': 'अंडर रिव्यू',
  Approved: 'अप्रूव्ड',
  Rejected: 'रिजेक्टेड',
};

function KycDot({ ok, label }) {
  return (
    <span
      title={`${label}: ${ok ? 'सबमिटेड' : 'मिसिंग'}`}
      className={`inline-block h-3 w-3 rounded-full ${ok ? 'bg-primary-green' : 'bg-gray-300'}`}
    >
      <span className="sr-only">{`${label} ${ok ? 'सबमिटेड' : 'मिसिंग'}`}</span>
    </span>
  );
}

export default function AdminApprovalQueue({ onAudit }) {
  const [rows, setRows] = useState(() => pendingInvestorQueue.map((r) => ({ ...r, decision: null })));

  const decide = (row, decision) => {
    setRows((prev) => prev.map((r) => (r.id === row.id ? { ...r, decision } : r)));
    onAudit({
      actor: 'Admin (You)',
      action: `${statusLabels[decision] ?? decision} इन्वेस्टर एप्लिकेशन ${row.id} (${row.name})`,
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      aria-labelledby="approval-queue-heading"
      className="rounded-xl bg-white shadow-lg border border-primary-green/10 p-5 sm:p-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="section-eyebrow">KYC &amp; ऑनबोर्डिंग</span>
          <h2 id="approval-queue-heading" className="text-xl sm:text-2xl">
            इन्वेस्टर अप्रूवल क्यू
          </h2>
        </div>
        <span className="badge-status bg-amber-50 text-amber-700 border border-amber-200">
          {adminStats.pendingApprovals} पेंडिंग अप्रूवल्स
        </span>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[860px] text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
              <th scope="col" className="px-3 py-3">इन्वेस्टर आईडी</th>
              <th scope="col" className="px-3 py-3">नेम</th>
              <th scope="col" className="px-3 py-3">प्लान</th>
              <th scope="col" className="px-3 py-3">अमाउंट</th>
              <th scope="col" className="px-3 py-3">KYC डॉक्स</th>
              <th scope="col" className="px-3 py-3">स्टेटस</th>
              <th scope="col" className="px-3 py-3">अप्लाइड ऑन</th>
              <th scope="col" className="px-3 py-3 text-right">एक्शन्स</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const status = row.decision ?? row.kycStatus;
              return (
                <tr key={row.id} className="border-b border-gray-100 transition-colors hover:bg-cream-white/70">
                  <td className="px-3 py-3.5 font-mono text-xs text-gray-700">{row.id}</td>
                  <td className="px-3 py-3.5 font-semibold text-gray-800">{row.name}</td>
                  <td className="px-3 py-3.5">
                    <span className={`badge-status ${planChips[row.plan]}`}>ऑप्शन {row.plan}</span>
                  </td>
                  <td className="px-3 py-3.5 font-semibold text-dark-green">{formatINR(row.amount)}</td>
                  <td className="px-3 py-3.5">
                    <span className="inline-flex items-center gap-1.5">
                      <KycDot ok={row.pan} label="PAN" />
                      <KycDot ok={row.aadhaar} label="आधार" />
                      <KycDot ok={row.bank} label="बैंक प्रूफ" />
                    </span>
                  </td>
                  <td className="px-3 py-3.5">
                    <span className={`badge-status ${statusChips[status]}`}>
                      {statusLabels[status] ?? status}
                    </span>
                  </td>
                  <td className="px-3 py-3.5 whitespace-nowrap text-gray-600">{row.appliedOn}</td>
                  <td className="px-3 py-3.5">
                    {row.decision ? (
                      <span className="block text-right text-xs text-gray-400">डन</span>
                    ) : (
                      <span className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => decide(row, 'Approved')}
                          aria-label={`अप्रूव ${row.name}`}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-green/10 text-primary-green transition-colors hover:bg-primary-green hover:text-white"
                        >
                          <FaCheck aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          onClick={() => decide(row, 'Rejected')}
                          aria-label={`रिजेक्ट ${row.name}`}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-600 transition-colors hover:bg-red-600 hover:text-white"
                        >
                          <FaTimes aria-hidden="true" />
                        </button>
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-gray-500">
        KYC डॉट्स: PAN, आधार, बैंक प्रूफ — ग्रीन इंडिकेट्स द डॉक्युमेंट हैज़ बीन सबमिटेड.
      </p>
    </motion.section>
  );
}
