import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCircleCheck, FaArrowRightLong } from 'react-icons/fa6';

// Left-column checklist of investor-facing transparency features.
const checklist = [
  'हर गाय की डिजिटल प्रोफ़ाइल',
  'RFID आधारित ट्रैकिंग',
  'लाइव प्रोडक्शन डेटा',
  'मासिक आय रिपोर्ट',
  'निवेशक डैशबोर्ड एवं मोबाइल ऐप',
];

// Mini stat tiles shown in the mock dashboard body.
const statTiles = [
  { label: 'दूध आय', value: '₹12,400' },
  { label: 'जैविक इनपुट', value: '₹2,800' },
  { label: 'मूल्य-वर्धित', value: '₹3,100' },
];

// Highlighted profit-sharing row.
const profitRow = [
  { label: 'शुद्ध मासिक लाभ', value: '₹8,420' },
  { label: 'निवेशक हिस्सा', value: '₹5,052' },
  { label: 'इस माह लाभांश', value: '₹5,052' },
];

// Income-source breakdown for the donut + legend (must sum to 100%).
const incomeSources = [
  { label: 'दूध', percent: 40, color: '#2E7D32' },
  { label: 'A2 घी', percent: 20, color: '#F9A825' },
  { label: 'जैविक इनपुट', percent: 15, color: '#81C784' },
  { label: 'बायोगैस एवं ऊर्जा', percent: 15, color: '#1B5E20' },
  { label: 'अन्य उत्पाद', percent: 10, color: '#C0532E' },
];

// Build a cumulative conic-gradient string from the income sources.
function buildConicGradient(sources) {
  let cursor = 0;
  const stops = sources.map((s) => {
    const start = cursor;
    cursor += s.percent;
    return `${s.color} ${start}% ${cursor}%`;
  });
  return `conic-gradient(${stops.join(', ')})`;
}

export default function DashboardPreview() {
  const donutStyle = { background: buildConicGradient(incomeSources) };

  return (
    <section className="section bg-gradient-to-br from-[#eef3e9] to-cream-white">
      <div className="container-custom grid items-center gap-10 lg:grid-cols-2">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl text-dark-green">पारदर्शी निवेश, पारदर्शी आय</h2>
          <p className="mt-4 text-gray-600">
            हर गाय की डिजिटल प्रोफ़ाइल, लाइव प्रोडक्शन डेटा एवं मासिक आय रिपोर्ट — आपका निवेश पूरी
            तरह ट्रैक करने योग्य।
          </p>

          <ul className="mt-6 space-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3 text-dark-green">
                <FaCircleCheck className="shrink-0 text-primary-green" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link to="/invest" className="btn btn-primary mt-8 inline-flex items-center gap-2">
            निवेश की प्रक्रिया जानें
            <FaArrowRightLong aria-hidden="true" />
          </Link>
        </motion.div>

        {/* Right — mock dashboard card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="overflow-hidden rounded-2xl border border-primary-green/10 bg-white shadow-2xl"
        >
          {/* Top bar */}
          <div className="bg-dark-green px-5 py-3 text-white">
            <span className="text-sm font-semibold">पालनहार — निवेशक डैशबोर्ड</span>
          </div>

          {/* Card body */}
          <div className="space-y-4 p-5">
            {/* Cow identity row */}
            <div className="flex flex-wrap items-center justify-between gap-1">
              <span className="font-bold text-dark-green">Cow ID: PH-1045</span>
              <span className="text-xs text-gray-500">नस्ल: देशी • टैग: PH-1045</span>
            </div>

            {/* Mini stat tiles */}
            <div className="grid grid-cols-3 gap-3">
              {statTiles.map((tile) => (
                <div key={tile.label} className="rounded-xl bg-cream-white p-3 text-center">
                  <p className="text-xs text-gray-500">{tile.label}</p>
                  <p className="mt-1 font-bold text-dark-green">{tile.value}</p>
                </div>
              ))}
            </div>

            {/* Highlighted profit row */}
            <div className="grid grid-cols-3 gap-3 rounded-xl bg-primary-green/10 p-3 text-center">
              {profitRow.map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-gray-600">{item.label}</p>
                  <p className="mt-1 font-bold text-primary-green">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Income-source donut + legend */}
            <div>
              <p className="mb-3 text-sm font-semibold text-dark-green">मासिक आय स्रोत</p>
              <div className="flex flex-wrap items-center gap-5">
                <div className="relative h-28 w-28 shrink-0 rounded-full" style={donutStyle}>
                  <div className="absolute inset-4 rounded-full bg-white" />
                </div>
                <ul className="flex-1 space-y-2">
                  {incomeSources.map((s) => (
                    <li key={s.label} className="flex items-center gap-2 text-sm text-dark-green">
                      <span
                        className="h-3 w-3 shrink-0 rounded-full"
                        style={{ backgroundColor: s.color }}
                        aria-hidden="true"
                      />
                      <span className="flex-1">{s.label}</span>
                      <span className="font-semibold">{s.percent}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link to="/investor/dashboard" className="btn btn-primary w-full text-center">
              लाइव देखें
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
