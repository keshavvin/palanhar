import { motion } from 'framer-motion';
import { FaHandshake, FaChartPie, FaMicrochip, FaCircleCheck } from 'react-icons/fa6';
import LeafHeading from './LeafHeading';

const pillars = [
  {
    icon: FaHandshake,
    title: 'निवेशक भरोसा',
    en: 'Investor Trust',
    points: [
      'KYC-सत्यापित निवेशक',
      'क्रमांकित डिजिटल शेयर प्रमाणपत्र',
      'बोर्ड-घोषित लाभांश',
      'वास्तविक संपत्ति (जीवित गौधन) आधारित',
    ],
  },
  {
    icon: FaChartPie,
    title: 'वित्तीय पारदर्शिता',
    en: 'Financial Transparency',
    points: [
      'लाइव निवेशक डैशबोर्ड',
      'मासिक एवं त्रैमासिक रिपोर्ट',
      'ऑडिट विवरण एवं अनुपालन',
      'मापने योग्य, स्पष्ट प्रभाव',
    ],
  },
  {
    icon: FaMicrochip,
    title: 'तकनीक-संचालित संचालन',
    en: 'Technology-Driven Operations',
    points: [
      'हर गाय की डिजिटल / RFID प्रोफ़ाइल',
      'लाइव प्रोडक्शन डेटा',
      'मोबाइल ऐप एवं ऑनलाइन पहुँच',
      'डेटा एनालिटिक्स एवं स्मार्ट प्रबंधन',
    ],
  },
];

const governance = [
  '100% निवेशक KYC सत्यापन',
  'सिस्टम-मेंटेन्ड शेयर रजिस्टर',
  'बोर्ड-घोषित लाभांश नीति',
  'अनुपालन-संगत संचालन',
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

export default function TrustPillars() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <LeafHeading className="mb-4">हमारी नींव — भरोसा, पारदर्शिता, तकनीक</LeafHeading>
        <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-gray-700 md:text-lg">
          पालनहार केवल गौ सेवा एवं ग्रामीण विकास तक सीमित नहीं — यह <b className="text-dark-green">पेशेवर शासन,
          मापने योग्य प्रभाव</b> एवं <b className="text-primary-green">आधुनिक तकनीक</b> के साथ संचालित एक
          भरोसेमंद परितंत्र है।
        </p>

        {/* Pillars */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="flex h-full flex-col rounded-2xl border border-primary-green/10 bg-white p-6 shadow-sm sm:p-7"
            >
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-green/10 text-2xl text-primary-green">
                <p.icon aria-hidden="true" />
              </span>
              <h3 className="text-lg font-bold text-dark-green">{p.title}</h3>
              <p className="text-xs font-semibold uppercase tracking-wide text-golden">{p.en}</p>
              <ul className="mt-4 space-y-2.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <FaCircleCheck className="mt-0.5 shrink-0 text-primary-green" aria-hidden="true" /> {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Governance strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 rounded-2xl bg-dark-green p-6 sm:p-8"
        >
          <p className="mb-5 text-center text-sm font-bold uppercase tracking-widest text-golden">
            पेशेवर शासन — हर कदम पर
          </p>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {governance.map((g) => (
              <li key={g} className="flex items-center gap-3 text-sm font-semibold text-white">
                <FaCircleCheck className="shrink-0 text-golden" aria-hidden="true" /> {g}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
