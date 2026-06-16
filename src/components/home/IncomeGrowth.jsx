import { motion } from 'framer-motion';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { FaCircleCheck } from 'react-icons/fa6';

// ₹1 lakh compounding to just over ₹1 crore across a 20-year horizon.
// Growth factor 1.278/yr lands year 20 a little above ₹1 Cr ("₹1 करोड़+").
const growthData = Array.from({ length: 20 }, (_, i) => {
  const year = i + 1;
  return {
    label: `${year} वर्ष`,
    value: Math.round(100000 * Math.pow(1.278, i)),
  };
});

const xTicks = ['1 वर्ष', '5 वर्ष', '10 वर्ष', '15 वर्ष', '20 वर्ष'];
const yTicks = [0, 4000000, 8000000, 12000000];

const formatRupee = (value) => `₹${value.toLocaleString('en-IN')}`;

const reasons = [
  'प्रत्येक गाय का डिजिटल रिकॉर्ड',
  'लाइव ट्रैकिंग',
  'बहु-उत्पाद आय मॉडल',
  'डेयरी + CBG + जैविक उत्पाद',
  'पूर्ण पारदर्शिता',
];

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-gray-100 bg-white px-3 py-2 shadow-lg">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</p>
      <p className="text-sm font-bold text-dark-green">{formatRupee(payload[0].value)}</p>
    </div>
  );
}

function AppPhoneMockup() {
  return (
    <div className="mx-auto w-44 shrink-0 rounded-[1.75rem] border-[6px] border-gray-900 bg-gray-900 shadow-2xl sm:w-48">
      <div className="overflow-hidden rounded-[1.3rem] bg-cream-white">
        {/* App header */}
        <div className="flex items-center gap-2 bg-primary-green px-3 py-2.5">
          <img src="/palanhar-logo.png" alt="" className="h-6 w-6 object-contain" draggable="false" />
          <span className="font-display text-sm font-bold text-white">पालनहार</span>
        </div>
        {/* Cow record */}
        <div className="space-y-2.5 p-3">
          <div className="overflow-hidden rounded-lg">
            <img src="/gallery-herd.jpg" alt="" className="h-20 w-full object-cover" draggable="false" />
          </div>
          <div className="rounded-lg bg-white px-2.5 py-2 shadow-sm">
            <p className="text-[10px] font-semibold text-gray-500">गाय आईडी: PLH-12345</p>
            <p className="text-xs font-bold text-dark-green">नाम: गौरी</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-primary-green/10 px-2 py-1.5 text-center">
              <p className="text-[9px] text-gray-500">दूध / दिन</p>
              <p className="text-xs font-bold text-primary-green">12 L</p>
            </div>
            <div className="rounded-lg bg-golden/15 px-2 py-1.5 text-center">
              <p className="text-[9px] text-gray-500">मासिक आय</p>
              <p className="text-xs font-bold text-dark-green">₹5,200</p>
            </div>
          </div>
          <div className="rounded-lg bg-dark-green px-2.5 py-1.5 text-center">
            <p className="text-[10px] font-semibold text-golden">लाइव ट्रैकिंग चालू</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IncomeGrowth() {
  return (
    <section className="section bg-white">
      <div className="container-custom grid items-stretch gap-8 lg:grid-cols-2">
        {/* Growth chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-primary-green/10 bg-gradient-to-br from-cream-white to-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="mb-1 text-2xl md:text-3xl">संभावित आय वृद्धि</h2>
          <p className="mb-6 max-w-md text-sm font-semibold text-gray-600">
            ₹1 लाख निवेश &rarr; 20 वर्षों में ₹1 करोड़+ संभावित संपत्ति निर्माण*
          </p>

          {/* Highlight badge */}
          <span className="absolute right-6 top-24 z-10 rounded-lg bg-primary-green px-3 py-2 text-center text-xs font-bold leading-tight text-white shadow-lg sm:right-8">
            20 वर्षों में
            <span className="block text-sm">₹1 करोड़+</span>
          </span>

          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={growthData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="incomeGrowthFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2E7D32" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#2E7D32" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
              <XAxis
                dataKey="label"
                ticks={xTicks}
                tick={{ fontSize: 12, fill: '#6B7280' }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                ticks={yTicks}
                domain={[0, 12000000]}
                tickFormatter={formatRupee}
                tick={{ fontSize: 11, fill: '#6B7280' }}
                tickLine={false}
                axisLine={false}
                width={86}
              />
              <Tooltip content={<ChartTooltip />} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#2E7D32"
                strokeWidth={2.5}
                fill="url(#incomeGrowthFill)"
                activeDot={{ r: 5, fill: '#F9A825', stroke: '#2E7D32', strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>

          <p className="mt-4 text-xs text-gray-400">
            *व्यवसायिक प्रदर्शन एवं बाजार परिस्थितियों पर निर्भर
          </p>
        </motion.div>

        {/* Why Palanhar + phone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-primary-green/10 bg-gradient-to-br from-[#eef3e9] to-cream-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="mb-6 text-2xl md:text-3xl">क्यों पालनहार?</h2>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <ul className="flex-1 space-y-3.5">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <FaCircleCheck className="mt-0.5 shrink-0 text-primary-green" aria-hidden="true" />
                  <span className="text-base text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
            <AppPhoneMockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
