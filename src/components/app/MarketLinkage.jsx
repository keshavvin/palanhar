import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStore, FaShoppingCart, FaPlusCircle, FaTrashAlt, FaBoxOpen } from 'react-icons/fa';
import { useLocalStorage, uid } from './useLocalStorage';

// Listing "type" is stored in Devanagari so it doubles as the display label.
const SELL = 'बेचना';
const BUY = 'खरीदना';

const UNITS = ['किलो', 'लीटर', 'क्विंटल', 'पीस'];

// Seeded marketplace listings (mine:false → cannot be removed by the demo user).
const SEED = [
  { id: 's1', type: SELL, product: 'जैविक गेहूं', qty: 5, unit: 'क्विंटल', price: 2400, date: '01/06/2026', mine: false },
  { id: 's2', type: SELL, product: 'A2 दूध', qty: 50, unit: 'लीटर', price: 90, date: '03/06/2026', mine: false },
  { id: 's3', type: BUY, product: 'गोबर खाद', qty: 200, unit: 'किलो', price: 10, date: '05/06/2026', mine: false },
  { id: 's4', type: SELL, product: 'ताज़ी सब्ज़ियाँ', qty: 30, unit: 'किलो', price: 40, date: '07/06/2026', mine: false },
];

// Filter pills → predicate against a listing's type.
const FILTERS = [
  { key: 'all', label: 'सभी', match: () => true },
  { key: 'sell', label: 'बेचें', match: (l) => l.type === SELL },
  { key: 'buy', label: 'खरीदें', match: (l) => l.type === BUY },
];

const TYPE_BADGE = {
  [SELL]: 'bg-primary-green/10 text-primary-green',
  [BUY]: 'bg-blue-50 text-blue-700',
};

export default function MarketLinkage() {
  const [listings, setListings] = useLocalStorage('palanhar.app.listings', SEED);

  const [type, setType] = useState(SELL);
  const [product, setProduct] = useState('');
  const [qty, setQty] = useState('');
  const [unit, setUnit] = useState(UNITS[0]);
  const [price, setPrice] = useState('');
  const [filter, setFilter] = useState('all');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.trim()) return;
    const listing = {
      id: uid(),
      type,
      product: product.trim(),
      qty: Number(qty) || 0,
      unit,
      price: Number(price) || 0,
      date: new Date().toLocaleDateString('en-IN'),
      mine: true,
    };
    setListings((prev) => [listing, ...prev]);
    // reset
    setType(SELL);
    setProduct('');
    setQty('');
    setUnit(UNITS[0]);
    setPrice('');
  };

  const handleRemove = (id) => {
    setListings((prev) => prev.filter((l) => l.id !== id));
  };

  const activeFilter = FILTERS.find((f) => f.key === filter) ?? FILTERS[0];
  const visible = listings.filter(activeFilter.match);

  return (
    <section aria-label="बाज़ार संपर्क">
      <h2 className="text-2xl md:text-3xl">बाज़ार संपर्क</h2>
      <p className="text-sm text-gray-500 mt-1">
        अपनी उपज खरीदें या बेचें — सीधे किसानों के साथ
      </p>

      {/* Post a listing */}
      <form
        onSubmit={handleSubmit}
        className="card bg-white p-5 sm:p-6 mt-6 border border-primary-green/10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="ml-type" className="block text-sm font-semibold text-dark-green mb-1">
              प्रकार
            </label>
            <select
              id="ml-type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="input-field"
            >
              <option value={SELL}>{SELL}</option>
              <option value={BUY}>{BUY}</option>
            </select>
          </div>

          <div>
            <label htmlFor="ml-product" className="block text-sm font-semibold text-dark-green mb-1">
              उत्पाद
            </label>
            <input
              id="ml-product"
              type="text"
              required
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="जैसे: जैविक गेहूं"
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="ml-qty" className="block text-sm font-semibold text-dark-green mb-1">
              मात्रा
            </label>
            <input
              id="ml-qty"
              type="number"
              min="0"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              placeholder="0"
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="ml-unit" className="block text-sm font-semibold text-dark-green mb-1">
              इकाई
            </label>
            <select
              id="ml-unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="input-field"
            >
              {UNITS.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="ml-price" className="block text-sm font-semibold text-dark-green mb-1">
              कीमत ₹
            </label>
            <input
              id="ml-price"
              type="number"
              min="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0"
              className="input-field"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-5 inline-flex items-center gap-2">
          <FaPlusCircle aria-hidden="true" />
          सूची जोड़ें
        </button>
      </form>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mt-8" role="group" aria-label="सूची फ़िल्टर">
        {FILTERS.map((f) => {
          const active = f.key === filter;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={active}
              className={`badge-status border transition-colors duration-200 ${
                active
                  ? 'bg-primary-green text-white border-primary-green'
                  : 'bg-cream-white text-dark-green border-primary-green/10 hover:bg-primary-green/10'
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Listings */}
      {visible.length === 0 ? (
        <div className="card bg-cream-white p-8 mt-4 border border-primary-green/10 text-center">
          <FaBoxOpen className="mx-auto text-3xl text-primary-green/40" aria-hidden="true" />
          <p className="text-gray-500 mt-3">अभी कोई सूची नहीं है। पहली सूची जोड़ें।</p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {visible.map((l, index) => {
            const isSell = l.type === SELL;
            const TypeIcon = isSell ? FaStore : FaShoppingCart;
            return (
              <motion.li
                key={l.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="card bg-white p-5 border border-primary-green/10"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`badge-status ${TYPE_BADGE[l.type] ?? TYPE_BADGE[SELL]}`}>
                    <TypeIcon aria-hidden="true" />
                    {l.type}
                  </span>
                  {l.mine && (
                    <span className="badge-status bg-golden/15 text-amber-600">मेरा</span>
                  )}
                </div>

                <p className="font-bold text-dark-green mt-3">{l.product}</p>
                <p className="text-sm text-gray-600 mt-1">
                  मात्रा: {l.qty} {l.unit}
                </p>
                <p className="text-sm text-gray-600">
                  कीमत: ₹{l.price}/{l.unit}
                </p>
                <p className="text-xs text-gray-400 mt-2">{l.date}</p>

                {l.mine && (
                  <button
                    type="button"
                    onClick={() => handleRemove(l.id)}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-red-500 hover:text-red-600"
                  >
                    <FaTrashAlt aria-hidden="true" />
                    हटाएँ
                  </button>
                )}
              </motion.li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
