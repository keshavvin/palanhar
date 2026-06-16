import { FaCheckCircle, FaPen } from 'react-icons/fa';
import { FieldError } from './FormFields';

function formatDob(dob) {
  if (!dob) return '—';
  const d = new Date(`${dob}T00:00:00`);
  return Number.isNaN(d.getTime())
    ? dob
    : d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

export default function StepReview({ data, update, errors, onEdit }) {
  const groups = [
    {
      title: 'मोबाइल',
      step: 1,
      rows: [['नंबर', `+91 ${data.mobile}`, true]],
    },
    {
      title: 'ईमेल',
      step: 2,
      rows: [['एड्रेस', data.email, true]],
    },
    {
      title: 'प्रोफाइल',
      step: 3,
      rows: [
        ['फुल नेम', data.fullName],
        ['डेट ऑफ बर्थ', formatDob(data.dob)],
        ['एड्रेस', `${data.address}, ${data.city}`],
        ['स्टेट / PIN', `${data.state} — ${data.pin}`],
      ],
    },
    {
      title: 'PAN',
      step: 4,
      rows: [
        ['नंबर', data.pan],
        ['डॉक्यूमेंट', data.panFile, true],
      ],
    },
    {
      title: 'आधार',
      step: 5,
      rows: [
        ['नंबर', data.aadhaar],
        ['डॉक्यूमेंट', data.aadhaarFile, true],
      ],
    },
    {
      title: 'बैंक अकाउंट',
      step: 6,
      rows: [
        ['होल्डर', data.accountHolder],
        ['अकाउंट नं.', data.accountNumber],
        ['IFSC', data.ifsc],
        ['बैंक', data.bankName],
      ],
    },
    {
      title: 'नॉमिनी',
      step: 7,
      rows: [
        ['नेम', data.nomineeName],
        ['रिलेशन', data.nomineeRelation],
        ['मोबाइल', `+91 ${data.nomineeMobile}`],
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-500">
        प्लीज़ रिव्यू योर डिटेल्स केयरफुली. यूज़ <span className="font-semibold text-primary-green">एडिट</span> टू
        जंप बैक टू एनी सेक्शन बिफोर सबमिटिंग फॉर KYC अप्रूवल.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-primary-green/10 bg-cream-white/70 p-4"
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <h3 className="text-base font-bold text-dark-green">{group.title}</h3>
              <button
                type="button"
                onClick={() => onEdit(group.step)}
                aria-label={`एडिट ${group.title}`}
                className="inline-flex min-h-11 items-center gap-1.5 px-2 text-sm font-semibold text-primary-green underline-offset-2 hover:text-dark-green hover:underline"
              >
                <FaPen className="text-xs" aria-hidden="true" />
                एडिट
              </button>
            </div>
            <dl className="space-y-1.5">
              {group.rows.map(([label, value, verified]) => (
                <div key={label} className="flex items-start justify-between gap-3 text-sm">
                  <dt className="shrink-0 text-gray-500">{label}</dt>
                  <dd className="flex min-w-0 items-center gap-1.5 text-right font-semibold text-gray-800">
                    <span className="truncate">{value || '—'}</span>
                    {verified && value && (
                      <FaCheckCircle className="shrink-0 text-primary-green" aria-hidden="true" title="वेरिफाइड" />
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      <div
        className={`rounded-xl border-2 p-4 transition-colors ${
          errors.consent ? 'border-red-400 bg-red-50/50' : 'border-primary-green/15 bg-white'
        }`}
      >
        <label htmlFor="reg-consent" className="flex min-h-11 cursor-pointer items-start gap-3">
          <input
            id="reg-consent"
            type="checkbox"
            checked={data.consent}
            onChange={(e) => update({ consent: e.target.checked })}
            className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-primary-green"
          />
          <span className="text-sm text-gray-700">
            आई कन्फर्म द अबव डिटेल्स आर ट्रू एंड करेक्ट, एंड आई ऑथराइज़ पालनहार डेयरी &amp;
            ऐग्रिकल्चरल फार्म Pvt. Ltd. टू वेरिफाई माय KYC डॉक्यूमेंट्स एंड अलॉट शेयर्स अगेंस्ट माय
            इन्वेस्टमेंट ऐज़ पर द कंपनी&rsquo;ज़ इन्वेस्टर पॉलिसी.
          </span>
        </label>
        <FieldError id="reg-consent-error">{errors.consent}</FieldError>
      </div>
    </div>
  );
}
