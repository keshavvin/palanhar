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
  Pending: 'लंबित',
  'Under Review': 'समीक्षाधीन',
  Approved: 'स्वीकृत',
  Rejected: 'अस्वीकृत',
};

function KycDot({ ok, label }) {
  return (
    <span
      title={`${label}: ${ok ? 'जमा किया गया' : 'अनुपलब्ध'}`}
      className={`inline-block h-3 w-3 rounded-full ${ok ? 'bg-primary-green' : 'bg-gray-300'}`}
    >
      <span className="sr-only">{`${label} ${ok ? 'जमा किया गया' : 'अनुपलब्ध'}`}</span>
    </span>
  );
}

export default function AdminApprovalQueue({ onAudit }) {
  const [rows, setRows] = useState(() => pendingInvestorQueue.map((r) => ({ ...r, decision: null })));

  const decide = (row, decision) => {
    setRows((prev) => prev.map((r) => (r.id === row.id ? { ...r, decision } : r)));
    onAudit({
      actor: 'Admin (You)',
      action: `${statusLabels[decision] ?? decision} — निवेशक आवेदन ${row.id} (${row.name})`,
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
          <span className="section-eyebrow">KYC &amp; पंजीकरण</span>
          <h2 id="approval-queue-heading" className="text-xl sm:text-2xl">
            निवेशक स्वीकृति सूची
          </h2>
        </div>
        <span className="badge-status bg-amber-50 text-amber-700 border border-amber-200">
          {adminStats.pendingApprovals} लंबित स्वीकृतियाँ
        </span>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[860px] text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
              <th scope="col" className="px-3 py-3">निवेशक आईडी</th>
              <th scope="col" className="px-3 py-3">नाम</th>
              <th scope="col" className="px-3 py-3">योजना</th>
              <th scope="col" className="px-3 py-3">राशि</th>
              <th scope="col" className="px-3 py-3">KYC दस्तावेज़</th>
              <th scope="col" className="px-3 py-3">स्थिति</th>
              <th scope="col" className="px-3 py-3">आवेदन तिथि</th>
              <th scope="col" className="px-3 py-3 text-right">कार्रवाई</th>
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
                    <span className={`badge-status ${planChips[row.plan]}`}>विकल्प {row.plan}</span>
                  </td>
                  <td className="px-3 py-3.5 font-semibold text-dark-green">{formatINR(row.amount)}</td>
                  <td className="px-3 py-3.5">
                    <span className="inline-flex items-center gap-1.5">
                      <KycDot ok={row.pan} label="PAN" />
                      <KycDot ok={row.aadhaar} label="आधार" />
                      <KycDot ok={row.bank} label="बैंक प्रमाण" />
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
                      <span className="block text-right text-xs text-gray-400">पूर्ण</span>
                    ) : (
                      <span className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => decide(row, 'Approved')}
                          aria-label={`${row.name} को स्वीकृत करें`}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-green/10 text-primary-green transition-colors hover:bg-primary-green hover:text-white"
                        >
                          <FaCheck aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          onClick={() => decide(row, 'Rejected')}
                          aria-label={`${row.name} को अस्वीकार करें`}
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
        KYC संकेतक: PAN, आधार, बैंक प्रमाण — हरा रंग दर्शाता है कि दस्तावेज़ जमा किया जा चुका है।
      </p>
    </motion.section>
  );
}
