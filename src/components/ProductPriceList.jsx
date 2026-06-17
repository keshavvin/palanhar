import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { priceList } from '../data/priceList';

// Searchable, category-grouped product price list (नाम · मात्रा · MRP · मार्जिन).
export default function ProductPriceList() {
  const [query, setQuery] = useState('');

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return priceList;
    return priceList
      .map((g) => ({ ...g, items: g.items.filter((it) => it.name.toLowerCase().includes(q)) }))
      .filter((g) => g.items.length > 0);
  }, [query]);

  const total = priceList.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <section className="section bg-cream-white">
      <div className="container-custom">
        <div className="mb-8 text-center">
          <span className="section-eyebrow">मूल्य सूची</span>
          <h2 className="text-3xl font-bold text-dark-green md:text-4xl">उत्पाद मूल्य सूची</h2>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">
            हमारे सभी उत्पादों की मात्रा, MRP एवं वितरक मार्जिन — एक ही स्थान पर।
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mb-8 flex max-w-md items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-4 py-2.5 focus-within:border-primary-green">
          <FaMagnifyingGlass className="text-gray-400" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="उत्पाद खोजें…"
            aria-label="उत्पाद खोजें"
            className="w-full bg-transparent text-sm focus:outline-none"
          />
        </div>

        <div className="space-y-8">
          {groups.map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-2xl border border-primary-green/10 bg-white shadow-sm"
            >
              <h3 className="bg-primary-green px-5 py-3 text-base font-bold text-white sm:text-lg">
                {group.category}
              </h3>

              {/* Header row (desktop) */}
              <div className="hidden grid-cols-[2fr_1fr_1fr_1fr] gap-2 border-b border-gray-100 bg-cream-white px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-gray-500 sm:grid">
                <span>उत्पाद</span>
                <span className="text-right">मात्रा</span>
                <span className="text-right">MRP (₹)</span>
                <span className="text-right">मार्जिन</span>
              </div>

              <ul className="divide-y divide-gray-100">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col gap-1 px-5 py-3 text-sm sm:grid sm:grid-cols-[2fr_1fr_1fr_1fr] sm:items-center sm:gap-2"
                  >
                    <span className="font-semibold text-dark-green">{item.name}</span>
                    <span className="text-gray-600 sm:text-right">
                      <span className="font-medium text-gray-400 sm:hidden">मात्रा: </span>
                      {item.qty}
                    </span>
                    <span className="text-gray-700 sm:text-right">
                      <span className="font-medium text-gray-400 sm:hidden">MRP: </span>
                      ₹{item.mrp}
                    </span>
                    <span className="font-bold text-primary-green sm:text-right">
                      <span className="font-medium text-gray-400 sm:hidden">मार्जिन: </span>
                      {item.margin}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {groups.length === 0 && (
            <p className="py-10 text-center text-gray-500">&ldquo;{query}&rdquo; से मेल खाता कोई उत्पाद नहीं मिला।</p>
          )}
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          नमूना मूल्य सूची ({total} उत्पाद) — पूर्ण सूची शीघ्र अपडेट की जाएगी।
        </p>
      </div>
    </section>
  );
}
