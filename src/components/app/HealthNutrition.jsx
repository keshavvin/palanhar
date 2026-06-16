import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaCheckCircle,
  FaLeaf,
  FaMinus,
  FaPlus,
  FaShoppingBasket,
  FaTrashAlt,
} from 'react-icons/fa';
import { useLocalStorage, uid } from './useLocalStorage';

// स्टैटिक प्रोडक्ट कैटलॉग — डेमो के लिए फिक्स्ड कीमतें।
const PRODUCTS = [
  { id: 'milk', name: 'A2 दूध', price: 90, unit: 'L', emoji: '🥛' },
  { id: 'ghee', name: 'A2 घी', price: 2400, unit: 'L', emoji: '🧈' },
  { id: 'paneer', name: 'पनीर', price: 400, unit: 'kg', emoji: '🧀' },
  { id: 'dahi', name: 'दही', price: 120, unit: 'kg', emoji: '🍶' },
  { id: 'makkhan', name: 'मक्खन', price: 600, unit: 'kg', emoji: '🧈' },
];

const PRODUCT_MAP = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]));

const TIPS = [
  'A2 दूध में A2 बीटा-कैसिइन प्रोटीन होता है, जो आसानी से पचता है और रोज़ाना सेवन के लिए बेहतर माना जाता है।',
  'देसी A2 घी सीमित मात्रा में लेने पर अच्छे फैट और वसा-घुलनशील विटामिन (A, D, E) का स्रोत बनता है।',
  'संतुलित आहार के लिए दूध, दही और पनीर के साथ मौसमी फल-सब्ज़ियाँ ज़रूर शामिल करें।',
];

export default function HealthNutrition() {
  const [cart, setCart] = useLocalStorage('palanhar.app.cart', {});
  const [orders, setOrders] = useLocalStorage('palanhar.app.orders', []);
  const [placed, setPlaced] = useState(false);

  const cartEntries = Object.entries(cart).filter(([, qty]) => qty > 0);
  const isEmpty = cartEntries.length === 0;

  const total = cartEntries.reduce(
    (sum, [id, qty]) => sum + (PRODUCT_MAP[id]?.price ?? 0) * qty,
    0
  );
  const totalCount = cartEntries.reduce((sum, [, qty]) => sum + qty, 0);

  const addToCart = (id) => {
    setPlaced(false);
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };

  const setQty = (id, qty) => {
    setPlaced(false);
    setCart((prev) => {
      const next = { ...prev };
      if (qty <= 0) {
        delete next[id];
      } else {
        next[id] = qty;
      }
      return next;
    });
  };

  const clearCart = () => {
    setPlaced(false);
    setCart({});
  };

  const placeOrder = () => {
    if (isEmpty) return;
    const order = {
      id: uid(),
      date: new Date().toLocaleDateString('en-IN'),
      total,
      count: totalCount,
      status: 'कन्फर्म्ड',
    };
    setOrders([order, ...orders]);
    setCart({});
    setPlaced(true);
  };

  return (
    <section aria-label="हेल्थ & न्यूट्रिशन">
      <h2 className="text-2xl md:text-3xl">हेल्थ & न्यूट्रिशन</h2>
      <p className="text-sm text-gray-500 mt-1 mb-6">
        ताज़ा A2 डेयरी प्रोडक्ट ऑर्डर करें और सेहत का ख्याल रखें।
      </p>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* प्रोडक्ट ग्रिड */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-dark-green mb-4">
            प्रोडक्ट्स
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {PRODUCTS.map((product) => {
              const qty = cart[product.id] ?? 0;
              return (
                <li
                  key={product.id}
                  className="card bg-white border border-primary-green/10 p-5 flex flex-col"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-base font-bold text-dark-green">
                        <span aria-hidden="true" className="mr-1.5">
                          {product.emoji}
                        </span>
                        {product.name}
                      </h4>
                      <p className="mt-1 text-sm text-primary-green font-semibold">
                        ₹{product.price}/{product.unit}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    {qty === 0 ? (
                      <button
                        type="button"
                        className="btn btn-primary w-full text-sm py-2.5 inline-flex items-center justify-center gap-2"
                        onClick={() => addToCart(product.id)}
                      >
                        <FaShoppingBasket aria-hidden="true" />
                        ऑर्डर में जोड़ें
                      </button>
                    ) : (
                      <div className="flex items-center justify-between gap-3 rounded-xl bg-primary-green/10 px-3 py-2">
                        <button
                          type="button"
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-dark-green shadow-sm transition-colors hover:bg-cream-white"
                          onClick={() => setQty(product.id, qty - 1)}
                          aria-label={`${product.name} की मात्रा घटाएँ`}
                        >
                          <FaMinus aria-hidden="true" />
                        </button>
                        <span
                          className="min-w-8 text-center text-base font-bold text-dark-green"
                          aria-live="polite"
                        >
                          {qty}
                        </span>
                        <button
                          type="button"
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-dark-green shadow-sm transition-colors hover:bg-cream-white"
                          onClick={() => setQty(product.id, qty + 1)}
                          aria-label={`${product.name} की मात्रा बढ़ाएँ`}
                        >
                          <FaPlus aria-hidden="true" />
                        </button>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          {/* न्यूट्रिशन टिप्स */}
          <div className="card bg-golden/15 border border-primary-green/10 p-5 sm:p-6 mt-8">
            <div className="flex items-center gap-2 text-dark-green mb-3">
              <FaLeaf aria-hidden="true" className="text-primary-green" />
              <h3 className="text-lg font-semibold">न्यूट्रिशन टिप्स</h3>
            </div>
            <ul className="space-y-2.5">
              {TIPS.map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <FaCheckCircle
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-primary-green"
                  />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* कार्ट + ऑर्डर हिस्ट्री */}
        <div className="space-y-8">
          {/* कार्ट समरी */}
          <div className="card bg-cream-white border border-primary-green/10 p-5">
            <div className="flex items-center gap-2 text-dark-green mb-4">
              <FaShoppingBasket aria-hidden="true" className="text-golden" />
              <h3 className="text-lg font-semibold">कार्ट समरी</h3>
            </div>

            {placed && (
              <p
                className="badge-status bg-primary-green/10 text-primary-green mb-4 w-full justify-center py-2"
                role="status"
              >
                <FaCheckCircle aria-hidden="true" />
                ऑर्डर प्लेस हो गया ✓
              </p>
            )}

            {isEmpty ? (
              <p className="text-sm text-gray-500 py-2">
                आपका कार्ट खाली है — प्रोडक्ट जोड़ें।
              </p>
            ) : (
              <>
                <ul className="divide-y divide-primary-green/10">
                  {cartEntries.map(([id, qty]) => {
                    const product = PRODUCT_MAP[id];
                    return (
                      <li
                        key={id}
                        className="flex items-center justify-between gap-3 py-2.5 text-sm"
                      >
                        <span className="text-gray-700">
                          {product.name}{' '}
                          <span className="text-gray-400">× {qty}</span>
                        </span>
                        <span className="font-semibold text-dark-green">
                          ₹{product.price * qty}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <div className="flex items-center justify-between border-t border-primary-green/10 pt-3 mt-2">
                  <span className="text-sm font-semibold text-dark-green">
                    कुल
                  </span>
                  <span className="text-lg font-bold text-primary-green">
                    ₹{total}
                  </span>
                </div>
              </>
            )}

            <div className="mt-5 grid gap-2">
              <button
                type="button"
                className="btn btn-golden w-full text-sm py-2.5 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={placeOrder}
                disabled={isEmpty}
              >
                <FaCheckCircle aria-hidden="true" />
                ऑर्डर प्लेस करें
              </button>
              <button
                type="button"
                className="btn btn-outline w-full text-sm py-2.5 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={clearCart}
                disabled={isEmpty}
              >
                <FaTrashAlt aria-hidden="true" />
                खाली करें
              </button>
            </div>
          </div>

          {/* ऑर्डर हिस्ट्री */}
          <div>
            <h3 className="text-lg font-semibold text-dark-green mb-4">
              ऑर्डर हिस्ट्री
            </h3>
            {orders.length === 0 ? (
              <div className="card bg-white border border-primary-green/10 p-6 text-center text-sm text-gray-500">
                अभी कोई ऑर्डर नहीं — अपना पहला ऑर्डर प्लेस करें।
              </div>
            ) : (
              <ul className="grid gap-3">
                {orders.map((order, index) => (
                  <motion.li
                    key={order.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    className="card bg-white border border-primary-green/10 p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-dark-green">
                          {order.count} आइटम
                        </p>
                        <p className="text-xs text-gray-400">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-base font-bold text-primary-green">
                          ₹{order.total}
                        </p>
                        <span className="badge-status bg-primary-green/10 text-primary-green mt-1">
                          <FaCheckCircle aria-hidden="true" />
                          {order.status}
                        </span>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
