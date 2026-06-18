import { useState } from 'react';
import { FaQrcode, FaCheckCircle } from 'react-icons/fa';
import { formatINR } from '../../../data/investorData';
import { Spinner } from './FormFields';

const PAYEE = {
  upiId: 'palanhar@okicici',
  bank: 'भारतीय स्टेट बैंक (SBI)',
  account: '3850 0012 3456',
  ifsc: 'SBIN0001234',
};

// Post-KYC payment step — pay the investment amount via UPI, then continue.
export default function StepPayment({ plan, investorId, onPaid }) {
  const [paying, setPaying] = useState(false);
  const amount = plan?.minAmount;

  const rows = [
    { label: 'खाताधारक', value: 'पालनहार डेयरी एंड एग्रीकल्चरल फार्म प्रा. लि.' },
    { label: 'बैंक', value: PAYEE.bank },
    { label: 'खाता संख्या', value: PAYEE.account },
    { label: 'IFSC', value: PAYEE.ifsc },
    { label: 'UPI ID', value: PAYEE.upiId },
  ];

  const upi = `upi://pay?pa=${PAYEE.upiId}&pn=${encodeURIComponent('PALANHAR DAIRY')}${amount ? `&am=${amount}` : ''}&cu=INR&tn=${encodeURIComponent(`KYC-${investorId}`)}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upi)}`;

  const confirm = () => {
    setPaying(true);
    setTimeout(() => onPaid(), 800);
  };

  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-primary-green/10 bg-white p-6 shadow-xl sm:p-8">
      <div className="mb-6 text-center">
        <span className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl text-primary-green">
          <FaCheckCircle aria-hidden="true" />
        </span>
        <h2 className="text-xl sm:text-2xl">KYC पूर्ण — अब भुगतान करें</h2>
        <p className="mt-1 text-sm text-gray-600">
          अपनी निवेश राशि UPI से भुगतान करें — भुगतान के बाद आपका निवेशक डैशबोर्ड सक्रिय हो जाएगा।
        </p>
      </div>

      {plan && (
        <div className="mb-5 flex items-center justify-between rounded-xl bg-cream-white px-4 py-3">
          <span className="flex items-center gap-2 text-sm font-semibold text-dark-green">
            <span aria-hidden="true">{plan.icon}</span> {plan.name}
          </span>
          <span className="text-lg font-bold text-primary-green">{formatINR(amount)}</span>
        </div>
      )}

      <div className="flex flex-col items-center gap-2">
        <p className="flex items-center gap-2 text-base font-bold text-dark-green">
          <FaQrcode aria-hidden="true" className="text-primary-green" /> UPI से भुगतान करें
        </p>
        <img src={qrUrl} alt="UPI भुगतान QR कोड" width="200" height="200" className="h-48 w-48 rounded-lg border border-gray-200 bg-white p-2" />
        <p className="text-xs text-gray-500">किसी भी UPI ऐप से QR स्कैन कर भुगतान करें</p>
      </div>

      <dl className="mt-5 divide-y divide-gray-100 rounded-xl bg-cream-white p-3">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between gap-3 py-1.5 text-xs">
            <dt className="shrink-0 text-gray-500">{r.label}</dt>
            <dd className="text-right font-semibold text-dark-green">{r.value}</dd>
          </div>
        ))}
      </dl>

      <button type="button" onClick={confirm} disabled={paying} className="btn btn-primary mt-6 flex w-full items-center justify-center gap-2">
        {paying ? <Spinner /> : <FaCheckCircle aria-hidden="true" />}
        {paying ? 'भुगतान सत्यापित हो रहा है…' : 'मैंने भुगतान कर दिया'}
      </button>
      <p className="mt-3 text-center text-xs text-gray-400">डेमो भुगतान — कोई वास्तविक राशि नहीं ली जाती।</p>
    </div>
  );
}
