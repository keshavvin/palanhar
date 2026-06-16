import { motion } from 'framer-motion';
import {
  FaHandHoldingUsd,
  FaSeedling,
  FaShieldAlt,
  FaFemale,
  FaGraduationCap,
  FaCheckCircle,
  FaFileSignature,
  FaInbox,
} from 'react-icons/fa';
import { useLocalStorage } from './useLocalStorage';

// Static catalogue of government / Palanhar schemes the demo user can apply to.
// Each entry pairs an icon with the spec-defined copy.
const SCHEMES = [
  {
    id: 's1',
    title: 'डेयरी विकास लोन',
    desc: 'गाय खरीद व शेड के लिए सब्सिडी-युक्त लोन।',
    eligibility: 'पंजीकृत डेयरी किसान',
    icon: FaHandHoldingUsd,
  },
  {
    id: 's2',
    title: 'गोबरधन (CBG) सब्सिडी',
    desc: 'बायोगैस प्लांट लगाने पर वित्तीय सहायता।',
    eligibility: '2+ पशु वाले किसान',
    icon: FaSeedling,
  },
  {
    id: 's3',
    title: 'पशु बीमा योजना',
    desc: 'गाय/भैंस का बीमा कम प्रीमियम पर।',
    eligibility: 'सभी पशुपालक',
    icon: FaShieldAlt,
  },
  {
    id: 's4',
    title: 'महिला स्वयं-सहायता ग्रांट',
    desc: 'महिला समूहों के लिए माइक्रो-एंटरप्राइज़ ग्रांट।',
    eligibility: 'महिला SHG सदस्य',
    icon: FaFemale,
  },
  {
    id: 's5',
    title: 'किसान प्रशिक्षण स्कॉलरशिप',
    desc: 'प्रशिक्षण व कौशल विकास के लिए सहायता।',
    eligibility: '18+ ग्रामीण युवा',
    icon: FaGraduationCap,
  },
];

export default function SchemesBenefits() {
  // Persisted applications: each entry is { schemeId, date }.
  const [applications, setApplications] = useLocalStorage('palanhar.app.applications', []);

  // Quick lookup: schemeId -> application (for badge / button toggle).
  const appliedById = applications.reduce((acc, app) => {
    acc[app.schemeId] = app;
    return acc;
  }, {});

  const handleApply = (schemeId) => {
    if (appliedById[schemeId]) return; // already applied — guard against double submit
    const application = {
      schemeId,
      date: new Date().toLocaleDateString('en-IN'),
    };
    setApplications((prev) => [...prev, application]);
  };

  const schemeById = SCHEMES.reduce((acc, s) => {
    acc[s.id] = s;
    return acc;
  }, {});

  return (
    <section aria-label="स्कीम्स और बेनिफिट्स">
      <h2 className="text-2xl md:text-3xl">स्कीम्स & बेनिफिट्स</h2>
      <p className="text-sm text-gray-500 mt-1">
        सरकारी योजनाओं के लिए आवेदन करें — एक टैप में
      </p>

      {/* Submitted-applications stat */}
      <div className="card bg-golden/15 p-4 mt-6 border border-primary-green/10 inline-flex items-center gap-3">
        <FaFileSignature className="text-golden text-xl" aria-hidden="true" />
        <span className="text-dark-green font-semibold">
          {applications.length} आवेदन सबमिटेड
        </span>
      </div>

      {/* Scheme cards */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {SCHEMES.map((scheme, index) => {
          const Icon = scheme.icon;
          const application = appliedById[scheme.id];
          return (
            <motion.li
              key={scheme.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="card bg-white p-5 border border-primary-green/10 flex flex-col"
            >
              <div className="flex items-start gap-3">
                <span
                  className="shrink-0 grid place-items-center w-10 h-10 rounded-full bg-primary-green/10 text-primary-green"
                  aria-hidden="true"
                >
                  <Icon className="text-lg" />
                </span>
                <div>
                  <p className="font-bold text-dark-green">{scheme.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{scheme.desc}</p>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-3">
                पात्रता: <span className="text-dark-green font-medium">{scheme.eligibility}</span>
              </p>

              <div className="mt-4">
                {application ? (
                  <span className="badge-status bg-primary-green/10 text-primary-green">
                    <FaCheckCircle aria-hidden="true" />
                    सबमिटेड · {application.date}
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleApply(scheme.id)}
                    className="btn btn-primary inline-flex items-center gap-2"
                  >
                    <FaFileSignature aria-hidden="true" />
                    अप्लाई करें
                  </button>
                )}
              </div>
            </motion.li>
          );
        })}
      </ul>

      {/* My applications summary */}
      <h3 className="text-xl text-dark-green mt-10">मेरे आवेदन</h3>
      {applications.length === 0 ? (
        <div className="card bg-cream-white p-8 mt-4 border border-primary-green/10 text-center">
          <FaInbox className="mx-auto text-3xl text-primary-green/40" aria-hidden="true" />
          <p className="text-gray-500 mt-3">
            अभी तक कोई आवेदन नहीं किया। ऊपर किसी योजना के लिए अप्लाई करें।
          </p>
        </div>
      ) : (
        <ul className="mt-4 space-y-3">
          {applications.map((app, index) => {
            const scheme = schemeById[app.schemeId];
            return (
              <li
                key={`${app.schemeId}-${index}`}
                className="card bg-white p-4 border border-primary-green/10 flex items-center justify-between gap-3"
              >
                <div>
                  <p className="font-semibold text-dark-green">
                    {scheme ? scheme.title : app.schemeId}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{app.date}</p>
                </div>
                <span className="badge-status bg-primary-green/10 text-primary-green shrink-0">
                  <FaCheckCircle aria-hidden="true" />
                  सबमिटेड
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
