import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaMinus, FaPlus, FaCheckCircle, FaShoppingCart, FaQrcode } from 'react-icons/fa';

// Demo payee details for the order payment step.
const PAYEE = {
  upiId: 'palanhar@okicici',
  name: 'PALANHAR DAIRY & AGRICULTURAL FARM PVT LTD',
  bank: 'भारतीय स्टेट बैंक (SBI)',
  account: '3850 0012 3456',
  ifsc: 'SBIN0001234',
};

const bankRows = [
  { label: 'खाताधारक', value: 'पालनहार डेयरी एंड एग्रीकल्चरल फार्म प्रा. लि.' },
  { label: 'बैंक', value: PAYEE.bank },
  { label: 'खाता संख्या', value: PAYEE.account },
  { label: 'IFSC', value: PAYEE.ifsc },
  { label: 'UPI ID', value: PAYEE.upiId },
];

// Demo order flow for a product — quantity + contact details → confirmation.
export default function ProductOrderModal({ product, onClose }) {
  const [qty, setQty] = useState(1);
  const [form, setForm] = useState({ name: '', mobile: '', address: '' });
  const [errors, setErrors] = useState({});
  const [orderId, setOrderId] = useState(null);

  const set = (patch) => {
    setForm((f) => ({ ...f, ...patch }));
    setErrors((e) => {
      const next = { ...e };
      Object.keys(patch).forEach((k) => delete next[k]);
      return next;
    });
  };

  const placeOrder = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'कृपया अपना नाम दर्ज करें।';
    if (!/^\d{10}$/.test(form.mobile)) next.mobile = 'एक वैध 10-अंकों का मोबाइल नंबर दर्ज करें।';
    if (!form.address.trim()) next.address = 'कृपया डिलीवरी का पता दर्ज करें।';
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setOrderId(`PAL-ORD-${Date.now().toString().slice(-6)}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} ऑर्डर करें`}
    >
      <motion.div
        initial={{ scale: 0.94, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.94, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="बंद करें"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-gray-600 transition-colors hover:bg-black/20"
        >
          <FaTimes aria-hidden="true" />
        </button>

        {orderId ? (
          /* Confirmation */
          <div className="p-8 text-center">
            <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-primary-green">
              <FaCheckCircle aria-hidden="true" />
            </span>
            <h3 className="text-2xl font-bold text-dark-green">ऑर्डर प्राप्त हुआ!</h3>
            <p className="mt-2 text-gray-600">
              धन्यवाद {form.name.trim()}! आपका ऑर्डर दर्ज हो गया है। हमारी टीम जल्द ही
              <span className="font-semibold text-dark-green"> +91 {form.mobile}</span> पर संपर्क करेगी।
            </p>
            <div className="mt-5 rounded-xl bg-cream-white p-4 text-left text-sm">
              <div className="flex justify-between py-1">
                <span className="text-gray-500">ऑर्डर आईडी</span>
                <span className="font-bold text-dark-green">{orderId}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">उत्पाद</span>
                <span className="font-semibold text-dark-green">{product.name}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">मात्रा</span>
                <span className="font-semibold text-dark-green">{qty}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">मूल्य</span>
                <span className="font-semibold text-dark-green">{product.price}</span>
              </div>
            </div>

            {/* Payment — UPI QR + bank details */}
            <div className="mt-5 rounded-xl border border-primary-green/15 bg-cream-white p-4 text-left">
              <p className="mb-3 flex items-center justify-center gap-2 text-sm font-bold text-dark-green">
                <FaQrcode aria-hidden="true" className="text-primary-green" /> भुगतान करें
              </p>
              <div className="flex flex-col items-center gap-2">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                    `upi://pay?pa=${PAYEE.upiId}&pn=${encodeURIComponent('PALANHAR DAIRY')}&cu=INR&tn=${orderId}`,
                  )}`}
                  alt="UPI भुगतान QR कोड"
                  width="176"
                  height="176"
                  className="h-44 w-44 rounded-lg border border-gray-200 bg-white p-2"
                />
                <p className="text-xs text-gray-500">किसी भी UPI ऐप से QR स्कैन कर भुगतान करें</p>
              </div>

              <dl className="mt-4 divide-y divide-gray-200/70 rounded-lg bg-white p-3">
                {bankRows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-3 py-1.5 text-xs">
                    <dt className="shrink-0 text-gray-500">{row.label}</dt>
                    <dd className="text-right font-semibold text-dark-green">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <p className="mt-4 text-xs text-gray-400">डेमो ऑर्डर — भुगतान विवरण केवल प्रदर्शन हेतु हैं।</p>
            <button type="button" onClick={onClose} className="btn btn-primary mt-4 w-full">
              ठीक है
            </button>
          </div>
        ) : (
          /* Order form */
          <div className="p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-4 border-b border-gray-100 pb-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cream-white text-3xl shadow-inner">
                {product.image}
              </span>
              <div className="min-w-0">
                <h3 className="font-bold leading-snug text-dark-green">{product.name}</h3>
                <p className="text-sm font-bold text-primary-green">{product.price}</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Quantity */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-700">मात्रा</label>
                <div className="inline-flex items-center gap-3 rounded-xl border-2 border-gray-200 p-1">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="मात्रा घटाएँ"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-cream-white text-primary-green hover:bg-primary-green/10"
                  >
                    <FaMinus size={12} aria-hidden="true" />
                  </button>
                  <span className="w-8 text-center font-bold text-dark-green">{qty}</span>
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.min(99, q + 1))}
                    aria-label="मात्रा बढ़ाएँ"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-cream-white text-primary-green hover:bg-primary-green/10"
                  >
                    <FaPlus size={12} aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Name */}
              <div>
                <label htmlFor="ord-name" className="mb-1.5 block text-sm font-semibold text-gray-700">पूरा नाम</label>
                <input
                  id="ord-name"
                  value={form.name}
                  onChange={(e) => set({ name: e.target.value })}
                  placeholder="आपका नाम"
                  className={`w-full rounded-xl border-2 bg-gray-50 px-4 py-2.5 focus:bg-white focus:outline-none ${errors.name ? 'border-red-400' : 'border-gray-200 focus:border-primary-green'}`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              {/* Mobile */}
              <div>
                <label htmlFor="ord-mobile" className="mb-1.5 block text-sm font-semibold text-gray-700">मोबाइल नंबर</label>
                <input
                  id="ord-mobile"
                  type="tel"
                  inputMode="numeric"
                  value={form.mobile}
                  onChange={(e) => set({ mobile: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                  placeholder="98765 43210"
                  className={`w-full rounded-xl border-2 bg-gray-50 px-4 py-2.5 focus:bg-white focus:outline-none ${errors.mobile ? 'border-red-400' : 'border-gray-200 focus:border-primary-green'}`}
                />
                {errors.mobile && <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>}
              </div>

              {/* Address */}
              <div>
                <label htmlFor="ord-address" className="mb-1.5 block text-sm font-semibold text-gray-700">डिलीवरी पता</label>
                <textarea
                  id="ord-address"
                  rows={2}
                  value={form.address}
                  onChange={(e) => set({ address: e.target.value })}
                  placeholder="घर / गली, गाँव-शहर, पिन कोड"
                  className={`w-full resize-none rounded-xl border-2 bg-gray-50 px-4 py-2.5 focus:bg-white focus:outline-none ${errors.address ? 'border-red-400' : 'border-gray-200 focus:border-primary-green'}`}
                />
                {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
              </div>
            </div>

            <button type="button" onClick={placeOrder} className="btn btn-primary mt-6 flex w-full items-center justify-center gap-2">
              <FaShoppingCart aria-hidden="true" /> ऑर्डर पुष्टि करें
            </button>
            <p className="mt-3 text-center text-xs text-gray-400">डेमो चेकआउट — कोई वास्तविक भुगतान नहीं।</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
