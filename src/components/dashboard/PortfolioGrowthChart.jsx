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
import { formatINRCompact, portfolioGrowth } from '../../data/investorData';

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-100 px-3 py-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</p>
      <p className="text-sm font-bold text-dark-green">{formatINRCompact(payload[0].value)}</p>
    </div>
  );
}

export default function PortfolioGrowthChart() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md border border-gray-100 p-5 sm:p-6 h-full"
      aria-label="पोर्टफोलियो ग्रोथ चार्ट"
    >
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl">पोर्टफोलियो ग्रोथ</h2>
        <p className="text-sm text-gray-500 mt-1">
          एस्टिमेटेड वैल्यू ऑफ योर होल्डिंग सिंस अलॉटमेंट
        </p>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={portfolioGrowth} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="portfolioGrowthFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2E7D32" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#2E7D32" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: '#6B7280' }}
            tickLine={false}
            axisLine={false}
            interval="preserveStartEnd"
          />
          <YAxis
            tickFormatter={formatINRCompact}
            tick={{ fontSize: 12, fill: '#6B7280' }}
            tickLine={false}
            axisLine={false}
            width={72}
            domain={['dataMin - 2000', 'dataMax + 2000']}
          />
          <Tooltip content={<ChartTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#2E7D32"
            strokeWidth={2.5}
            fill="url(#portfolioGrowthFill)"
            activeDot={{ r: 5, fill: '#F9A825', stroke: '#2E7D32', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.section>
  );
}
