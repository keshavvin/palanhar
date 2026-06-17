import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import LeafHeading from './LeafHeading';

// The gau-to-customer value chain, one continuous row.
const chain = [
  { label: 'गाय', icon: '🐄' },
  { label: 'दूध', icon: '🥛' },
  { label: 'जैविक खाद', icon: '🌱' },
  { label: 'बायोपेस्टिसाइड', icon: '🧪' },
  { label: 'बायोपेंट', icon: '🪣' },
  { label: 'CBG', sub: '(कम्प्रेस्ड बायोगैस)', icon: '🛢️' },
  { label: 'प्रसंस्करण एवं निर्माण', icon: '🏭' },
  { label: 'ई-कॉमर्स प्लेटफॉर्म', icon: '💻' },
  { label: 'ग्राहक एवं संस्थान', icon: '👥' },
];

// Per-cow net-profit contribution by income source (sums to 100%).
const incomeSources = [
  { label: 'दूध एवं दुग्ध उत्पाद', pct: 35 },
  { label: 'A2 घी', pct: 12 },
  { label: 'गोबर आधारित जैविक खाद', pct: 10 },
  { label: 'CBG (कम्प्रेस्ड बायोगैस)', pct: 8 },
  { label: 'पंचगव्य उत्पाद', pct: 6 },
  { label: 'वर्मी कम्पोस्ट', pct: 5 },
  { label: 'बायो फर्टिलाइज़र', pct: 5 },
  { label: 'कृषि एवं चारा उत्पादन', pct: 4 },
  { label: 'बायो पेस्टिसाइड', pct: 4 },
  { label: 'गोमूत्र अर्क', pct: 3 },
  { label: 'बायो-CNG स्लरी', pct: 2 },
  { label: 'गोबर लट्ठे / हवन उत्पाद', pct: 2 },
  { label: 'बायोपेंट', pct: 2 },
  { label: 'ईंट / निर्माण उत्पाद', pct: 2 },
  { label: 'कार्बन क्रेडिट एवं अन्य आय', pct: 5, variable: true },
];

// How an example ₹1,00,000 annual net profit per cow is shared.
const dividendSplit = [
  { label: 'निवेशक हिस्सा', pct: 60, amount: '₹60,000', tone: 'primary' },
  { label: 'कंपनी संचालन एवं विस्तार', pct: 30, amount: '₹30,000', tone: 'dark' },
  { label: 'गौ कल्याण एवं रिज़र्व फंड', pct: 10, amount: '₹10,000', tone: 'golden' },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

const toneCard = {
  primary: 'bg-primary-green text-white',
  dark: 'bg-dark-green text-white',
  golden: 'bg-golden text-dark-green',
};

export default function RevenueModel() {
  return (
    <section className="section bg-cream-white">
      <div className="container-custom">
        <LeafHeading className="mb-4">एक गाय &ndash; अनेक आय स्रोत</LeafHeading>
        <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-gray-700 md:text-lg">
          पालनहार मॉडल &ldquo;एक गाय &ndash; अनेक आय स्रोत&rdquo; पर आधारित है — निवेशक को केवल दूध से नहीं,
          बल्कि सभी वैल्यू-एडेड उत्पादों के शुद्ध लाभ में हिस्सा मिलता है।
        </p>

        {/* Value chain flow */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-14 flex flex-wrap items-start justify-center gap-y-5"
        >
          {chain.map((item, i) => (
            <motion.div key={item.label} variants={fadeUp} className="flex items-center">
              <div className="flex w-20 shrink-0 flex-col items-center text-center sm:w-24">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary-green/25 bg-white text-2xl shadow-sm sm:h-16 sm:w-16 sm:text-3xl">
                  {item.icon}
                </span>
                <span className="mt-2 text-[11px] font-semibold leading-tight text-dark-green sm:text-xs">
                  {item.label}
                </span>
                {item.sub && <span className="text-[9px] leading-tight text-gray-500">{item.sub}</span>}
              </div>
              {i < chain.length - 1 && (
                <FaArrowRightLong className="mx-0.5 -mt-5 shrink-0 text-primary-green/60 sm:mx-1" aria-hidden="true" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Per-cow income distribution */}
        <h3 className="mb-2 text-center text-xl font-bold text-dark-green md:text-2xl">
          प्रति गाय शुद्ध लाभ का स्रोत-वार वितरण
        </h3>
        <p className="mb-8 text-center text-sm text-gray-500">15+ आय स्रोत मिलकर बनाते हैं कुल 100% लाभ</p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mx-auto grid max-w-4xl gap-x-8 gap-y-4 sm:grid-cols-2"
        >
          {incomeSources.map((src) => (
            <motion.div variants={fadeUp} key={src.label}>
              <div className="mb-1 flex items-baseline justify-between gap-2">
                <span className="text-sm font-semibold text-dark-green">{src.label}</span>
                <span className="shrink-0 text-sm font-bold text-primary-green">
                  {src.variable ? '0–5%' : `${src.pct}%`}
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-primary-green/10">
                <div
                  className={`h-full rounded-full ${src.variable ? 'bg-golden/70' : 'bg-primary-green'}`}
                  style={{ width: `${Math.min(src.pct * 2.6, 100)}%` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Investor dividend split */}
        <div className="mt-16">
          <h3 className="mb-2 text-center text-xl font-bold text-dark-green md:text-2xl">
            निवेशक लाभांश मॉडल
          </h3>
          <p className="mb-8 text-center text-sm text-gray-600">
            उदाहरण — यदि किसी गाय से वार्षिक शुद्ध लाभ <b className="text-dark-green">₹1,00,000</b> उत्पन्न होता है:
          </p>
          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
            {dividendSplit.map((row) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className={`rounded-2xl p-6 text-center shadow-lg ${toneCard[row.tone]}`}
              >
                <p className="font-display text-4xl font-extrabold">{row.pct}%</p>
                <p className="mt-1 text-sm font-semibold opacity-90">{row.label}</p>
                <p className="mt-3 text-2xl font-bold">{row.amount}<span className="text-sm font-normal">/वर्ष</span></p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stability note + tagline */}
        <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-gray-600 md:text-base">
          इस मॉडल का सबसे बड़ा लाभ — यदि किसी समय दूध का बाज़ार कमज़ोर हो, तब भी अन्य 10–15 आय स्रोत
          निवेशक की आय को स्थिर रखते हैं।
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-8 max-w-3xl rounded-2xl bg-dark-green px-6 py-6 text-center shadow-xl"
        >
          <p className="font-display text-lg font-bold leading-snug text-golden sm:text-xl">
            &ldquo;एक गाय आपके साथ, 15+ आय स्रोत आपके हाथ &mdash; सुरक्षित, पारदर्शी और सतत निवेश।&rdquo;
          </p>
          <Link
            to="/invest"
            className="btn btn-golden mt-5 inline-flex items-center gap-2"
          >
            निवेश योजनाएँ देखें <FaArrowRightLong aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
