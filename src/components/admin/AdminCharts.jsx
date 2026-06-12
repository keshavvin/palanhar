import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import { fundsRaisedMonthly, investorDistribution, formatINRCompact } from '../../data/investorData';

const cardClass = 'rounded-xl bg-white shadow-lg border border-primary-green/10 p-5 sm:p-6';

const totalInvestorsInPlans = investorDistribution.reduce((sum, d) => sum + d.value, 0);

export default function AdminCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        aria-labelledby="funds-raised-heading"
        className={cardClass}
      >
        <span className="section-eyebrow">Capital Inflow</span>
        <h2 id="funds-raised-heading" className="text-xl sm:text-2xl">
          Funds Raised — Monthly
        </h2>
        <div className="mt-5">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={fundsRaisedMonthly} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#6b7280' }} tickLine={false} axisLine={false} />
              <YAxis
                tickFormatter={formatINRCompact}
                tick={{ fontSize: 11, fill: '#6b7280' }}
                tickLine={false}
                axisLine={false}
                width={64}
              />
              <Tooltip
                formatter={(value) => [formatINRCompact(value), 'Funds raised']}
                cursor={{ fill: 'rgba(46, 125, 50, 0.06)' }}
              />
              <Bar dataKey="amount" name="Funds raised" fill="#2E7D32" radius={[6, 6, 0, 0]} maxBarSize={32} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        aria-labelledby="distribution-heading"
        className={cardClass}
      >
        <span className="section-eyebrow">Plan Mix</span>
        <h2 id="distribution-heading" className="text-xl sm:text-2xl">
          Investor Distribution
        </h2>
        <div className="mt-5">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={investorDistribution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="46%"
                innerRadius={58}
                outerRadius={92}
                paddingAngle={3}
                stroke="#FFFDF5"
              >
                {investorDistribution.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) => [
                  `${value.toLocaleString('en-IN')} investors (${((value / totalInvestorsInPlans) * 100).toFixed(1)}%)`,
                  name,
                ]}
              />
              <Legend verticalAlign="bottom" iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-2 text-center text-xs text-gray-500">
          {totalInvestorsInPlans.toLocaleString('en-IN')} investors across three plans
        </p>
      </motion.section>
    </div>
  );
}
