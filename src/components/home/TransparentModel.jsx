import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRightLong, FaArrowDownLong } from 'react-icons/fa6';
import { FaUserTie, FaChartLine, FaRegClock, FaCheck } from 'react-icons/fa6';

// Stage 1 — the gau-based production chain.
const productionFlow = [
  { label: 'गाय', icon: '🐄' },
  { label: 'दूध', icon: '🥛' },
  { label: 'जैविक खाद', icon: '🌱' },
  { label: 'बायोपेस्टिसाइड', icon: '🧪' },
  { label: 'बायोपेंट', icon: '🪣' },
  { label: 'CBG', sub: '(कंप्रेस्ड बायोगैस)', icon: '🛢️' },
];

// Stage 2 — processing reaches the customer.
const deliveryFlow = [
  { label: 'प्रोसेसिंग एवं मैन्युफैक्चरिंग', icon: '🏭' },
  { label: 'ई-कॉमर्स वेबसाइट & मोबाइल ऐप', icon: '💻' },
  { label: 'ग्राहक एवं व्यवसायिक संस्थान', icon: '👥' },
];

// Highlights of the headline investment plan.
const planRows = [
  { icon: FaUserTie, label: 'न्यूनतम निवेश:', value: '₹1,00,000' },
  { icon: FaChartLine, label: 'मासिक संभावित आय:', value: '₹5,000+' },
  { icon: FaRegClock, label: 'निवेश अवधि:', value: '20 वर्ष' },
  { icon: FaCheck, label: 'पारदर्शी ट्रैकिंग' },
  { icon: FaCheck, label: 'गाय की लाइव जानकारी' },
  { icon: FaCheck, label: 'उत्पाद आधारित बहु-स्रोत आय' },
];

function FlowNode({ item }) {
  return (
    <div className="flex w-24 shrink-0 flex-col items-center text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary-green/20 bg-white text-3xl shadow-sm">
        {item.icon}
      </span>
      <span className="mt-2 text-xs font-semibold leading-tight text-dark-green">{item.label}</span>
      {item.sub && <span className="text-[10px] leading-tight text-gray-500">{item.sub}</span>}
    </div>
  );
}

export default function TransparentModel() {
  return (
    <section id="model" className="section scroll-mt-24 bg-gradient-to-br from-[#eef3e9] to-cream-white">
      <div className="container-custom grid gap-8 lg:grid-cols-3">
        {/* Model flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-primary-green/10 bg-white/70 p-6 shadow-sm sm:p-8 lg:col-span-2"
        >
          <h2 className="mb-8 text-center text-2xl md:text-3xl">हमारा पारदर्शी मॉडल</h2>

          {/* Stage 1 */}
          <div className="flex flex-wrap items-start justify-center gap-y-4">
            {productionFlow.map((item, i) => (
              <div key={item.label} className="flex items-center">
                <FlowNode item={item} />
                {i < productionFlow.length - 1 && (
                  <FaArrowRightLong
                    className="mx-1 -mt-5 shrink-0 text-primary-green/60"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Branch connector */}
          <div className="my-4 flex justify-center" aria-hidden="true">
            <FaArrowDownLong className="text-primary-green/60" />
          </div>

          {/* Stage 2 */}
          <div className="flex flex-wrap items-start justify-center gap-y-4">
            {deliveryFlow.map((item, i) => (
              <div key={item.label} className="flex items-center">
                <div className="flex w-32 shrink-0 flex-col items-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-golden/30 bg-white text-3xl shadow-sm">
                    {item.icon}
                  </span>
                  <span className="mt-2 text-xs font-semibold leading-tight text-dark-green">
                    {item.label}
                  </span>
                </div>
                {i < deliveryFlow.length - 1 && (
                  <FaArrowRightLong
                    className="mx-1 -mt-6 shrink-0 text-primary-green/60"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* गौ निवेश योजना card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="overflow-hidden rounded-2xl bg-dark-green text-white shadow-xl"
        >
          <div className="bg-primary-green px-6 py-4 text-center">
            <h3 className="!text-white text-xl">गौ निवेश योजना</h3>
          </div>
          <div className="p-6">
            <p className="mb-5 text-center font-display text-2xl font-bold text-golden">
              &ldquo;गौ निवेश सेवा&rdquo;
            </p>
            <ul className="space-y-3.5">
              {planRows.map((row) => {
                const Icon = row.icon;
                return (
                  <li key={row.label} className="flex items-center gap-3 text-sm">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-golden/20 text-golden">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="text-white/90">
                      {row.label}
                      {row.value && <span className="ml-1 font-bold text-white">{row.value}</span>}
                    </span>
                  </li>
                );
              })}
            </ul>
            <Link
              to="/invest"
              className="btn mt-6 block w-full bg-golden text-center font-bold text-dark-green shadow-lg hover:bg-amber-500 hover:shadow-xl"
            >
              अभी निवेश करें
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
