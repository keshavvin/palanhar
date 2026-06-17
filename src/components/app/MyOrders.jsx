import { FaBoxOpen, FaTrash } from 'react-icons/fa';
import { useLocalStorage } from './useLocalStorage';
import { ORDERS_KEY } from './orders';

// "मेरे ऑर्डर" — lists product orders placed (and paid) across the site.
export default function MyOrders() {
  const [orders, setOrders] = useLocalStorage(ORDERS_KEY, []);

  return (
    <div>
      <h2 className="text-2xl md:text-3xl">मेरे ऑर्डर</h2>
      <p className="mt-1 text-gray-600">आपके द्वारा दिए गए सभी ऑर्डर एवं उनकी भुगतान स्थिति।</p>

      {orders.length === 0 ? (
        <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-primary-green/20 bg-cream-white/60 py-14 text-center">
          <FaBoxOpen className="text-4xl text-primary-green/40" aria-hidden="true" />
          <p className="font-semibold text-gray-600">अभी कोई ऑर्डर नहीं है</p>
          <p className="max-w-xs text-sm text-gray-400">
            उत्पाद पृष्ठ से &ldquo;अभी खरीदें&rdquo; पर ऑर्डर करें — भुगतान के बाद वह यहाँ दिखेगा।
          </p>
        </div>
      ) : (
        <>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-gray-500">कुल {orders.length} ऑर्डर</p>
            <button
              type="button"
              onClick={() => setOrders([])}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-500 hover:text-red-600"
            >
              <FaTrash aria-hidden="true" /> सभी हटाएँ
            </button>
          </div>

          <ul className="mt-3 space-y-3">
            {orders.map((o) => (
              <li key={o.id} className="rounded-2xl border border-primary-green/10 bg-white p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cream-white text-2xl shadow-inner" aria-hidden="true">
                    {o.emoji || '🛍️'}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-bold capitalize text-dark-green">{o.product}</p>
                      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-[11px] font-bold text-primary-green">
                        {o.status}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-gray-500">
                      ऑर्डर आईडी: <span className="font-semibold text-gray-700">{o.id}</span> · {o.date}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-600">
                      <span>मात्रा: <b className="text-dark-green">{o.qty}</b></span>
                      <span>मूल्य: <b className="text-primary-green">{o.price}</b></span>
                    </div>
                    {o.address && <p className="mt-1 text-xs text-gray-400">पता: {o.address}</p>}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
