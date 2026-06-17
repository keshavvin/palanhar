import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaMagnifyingGlass, FaCartShopping, FaEnvelope } from 'react-icons/fa6';
import { catalog, catalogCount } from '../data/productCatalog';
import ProductOrderModal from './ProductOrderModal';

// Full searchable, category-filterable product catalogue.
export default function ProductCatalog() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState('all');
  const [orderItem, setOrderItem] = useState(null);

  const buy = (item, emoji) =>
    setOrderItem({
      name: item.name,
      image: emoji,
      price: item.mrp ? `₹${item.mrp}` : 'अनुरोध पर',
    });

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    return catalog
      .filter((g) => active === 'all' || g.category === active)
      .map((g) => ({
        ...g,
        items: q
          ? g.items.filter(
              (it) => it.name.toLowerCase().includes(q) || it.party.toLowerCase().includes(q),
            )
          : g.items,
      }))
      .filter((g) => g.items.length > 0);
  }, [query, active]);

  const shown = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <section className="section bg-cream-white">
      <div className="container-custom">
        <div className="mb-8 text-center">
          <span className="section-eyebrow">मूल्य सूची</span>
          <h2 className="text-3xl font-bold text-dark-green md:text-4xl">सम्पूर्ण उत्पाद सूची</h2>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">
            {catalogCount}+ गौ-आधारित एवं हर्बल उत्पाद — श्रेणी, मात्रा, MRP, मार्जिन एवं निर्माता सहित।
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mb-5 flex max-w-md items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-4 py-2.5 focus-within:border-primary-green">
          <FaMagnifyingGlass className="text-gray-400" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="उत्पाद या निर्माता खोजें…"
            aria-label="उत्पाद खोजें"
            className="w-full bg-transparent text-sm focus:outline-none"
          />
        </div>

        {/* Category chips */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setActive('all')}
            className={`rounded-full border-2 px-4 py-1.5 text-xs font-semibold transition-colors ${
              active === 'all'
                ? 'border-primary-green bg-primary-green text-white'
                : 'border-primary-green/30 text-primary-green hover:bg-primary-green/5'
            }`}
          >
            सभी
          </button>
          {catalog.map((g) => (
            <button
              key={g.category}
              type="button"
              onClick={() => setActive(g.category)}
              className={`rounded-full border-2 px-4 py-1.5 text-xs font-semibold transition-colors ${
                active === g.category
                  ? 'border-primary-green bg-primary-green text-white'
                  : 'border-primary-green/30 text-primary-green hover:bg-primary-green/5'
              }`}
            >
              {g.emoji} {g.category.replace(/\s*\(.*\)$/, '')}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {groups.map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden rounded-2xl border border-primary-green/10 bg-white shadow-sm"
            >
              <h3 className="flex items-center gap-2 bg-primary-green px-5 py-3 text-base font-bold text-white sm:text-lg">
                <span aria-hidden="true">{group.emoji}</span> {group.category}
                <span className="ml-auto text-xs font-medium text-white/70">{group.items.length}</span>
              </h3>

              {/* Header row (desktop) */}
              <div className="hidden grid-cols-[auto_2fr_0.8fr_0.8fr_0.6fr_1fr_auto] gap-3 border-b border-gray-100 bg-cream-white px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-gray-500 lg:grid">
                <span className="w-8" />
                <span>उत्पाद</span>
                <span className="text-right">मात्रा</span>
                <span className="text-right">MRP (₹)</span>
                <span className="text-right">मार्जिन</span>
                <span className="text-right">निर्माता</span>
                <span className="text-right">कार्रवाई</span>
              </div>

              <ul className="divide-y divide-gray-100">
                {group.items.map((item, i) => (
                  <li
                    key={`${item.name}-${i}`}
                    className="flex items-center gap-3 px-5 py-3 text-sm lg:grid lg:grid-cols-[auto_2fr_0.8fr_0.8fr_0.6fr_1fr_auto] lg:gap-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream-white text-lg shadow-inner" aria-hidden="true">
                      {group.emoji}
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="block font-semibold capitalize text-dark-green">{item.name}</span>
                      {/* mobile / tablet meta */}
                      <span className="mt-0.5 block text-xs text-gray-500 lg:hidden">
                        {[item.qty, item.mrp && `₹${item.mrp}`, item.party].filter(Boolean).join(' · ')}
                      </span>
                    </div>
                    <span className="hidden text-right text-gray-600 lg:block">{item.qty || '—'}</span>
                    <span className="hidden text-right font-semibold text-primary-green lg:block">
                      {item.mrp ? `₹${item.mrp}` : '—'}
                    </span>
                    <span className="hidden text-right text-gray-400 lg:block">—</span>
                    <span className="hidden truncate text-right text-xs font-medium capitalize text-gray-500 lg:block">
                      {item.party || '—'}
                    </span>

                    {/* Actions */}
                    <div className="flex shrink-0 items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => buy(item, group.emoji)}
                        aria-label={`${item.name} खरीदें`}
                        title="खरीदें"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-golden px-3 py-1.5 text-xs font-bold text-dark-green transition-colors hover:bg-amber-500"
                      >
                        <FaCartShopping aria-hidden="true" />
                        <span className="hidden sm:inline">खरीदें</span>
                      </button>
                      <Link
                        to="/contact"
                        aria-label={`${item.name} के बारे में पूछताछ करें`}
                        title="पूछताछ करें"
                        className="inline-flex items-center gap-1.5 rounded-lg border-2 border-primary-green px-3 py-1.5 text-xs font-semibold text-primary-green transition-colors hover:bg-primary-green hover:text-white"
                      >
                        <FaEnvelope aria-hidden="true" />
                        <span className="hidden sm:inline">पूछताछ</span>
                      </Link>
                    </div>
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
          {shown} उत्पाद दिखाए जा रहे हैं · कुल {catalogCount} उत्पाद
        </p>
      </div>

      {/* Order / payment flow */}
      <AnimatePresence>
        {orderItem && <ProductOrderModal product={orderItem} onClose={() => setOrderItem(null)} />}
      </AnimatePresence>
    </section>
  );
}
