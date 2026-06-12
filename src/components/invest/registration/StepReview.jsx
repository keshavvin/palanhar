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
      title: 'Mobile',
      step: 1,
      rows: [['Number', `+91 ${data.mobile}`, true]],
    },
    {
      title: 'Email',
      step: 2,
      rows: [['Address', data.email, true]],
    },
    {
      title: 'Profile',
      step: 3,
      rows: [
        ['Full Name', data.fullName],
        ['Date of Birth', formatDob(data.dob)],
        ['Address', `${data.address}, ${data.city}`],
        ['State / PIN', `${data.state} — ${data.pin}`],
      ],
    },
    {
      title: 'PAN',
      step: 4,
      rows: [
        ['Number', data.pan],
        ['Document', data.panFile, true],
      ],
    },
    {
      title: 'Aadhaar',
      step: 5,
      rows: [
        ['Number', data.aadhaar],
        ['Document', data.aadhaarFile, true],
      ],
    },
    {
      title: 'Bank Account',
      step: 6,
      rows: [
        ['Holder', data.accountHolder],
        ['Account No.', data.accountNumber],
        ['IFSC', data.ifsc],
        ['Bank', data.bankName],
      ],
    },
    {
      title: 'Nominee',
      step: 7,
      rows: [
        ['Name', data.nomineeName],
        ['Relation', data.nomineeRelation],
        ['Mobile', `+91 ${data.nomineeMobile}`],
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-500">
        Please review your details carefully. Use <span className="font-semibold text-primary-green">Edit</span> to
        jump back to any section before submitting for KYC approval.
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
                aria-label={`Edit ${group.title}`}
                className="inline-flex min-h-11 items-center gap-1.5 px-2 text-sm font-semibold text-primary-green underline-offset-2 hover:text-dark-green hover:underline"
              >
                <FaPen className="text-xs" aria-hidden="true" />
                Edit
              </button>
            </div>
            <dl className="space-y-1.5">
              {group.rows.map(([label, value, verified]) => (
                <div key={label} className="flex items-start justify-between gap-3 text-sm">
                  <dt className="shrink-0 text-gray-500">{label}</dt>
                  <dd className="flex min-w-0 items-center gap-1.5 text-right font-semibold text-gray-800">
                    <span className="truncate">{value || '—'}</span>
                    {verified && value && (
                      <FaCheckCircle className="shrink-0 text-primary-green" aria-hidden="true" title="Verified" />
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
            I confirm the above details are true and correct, and I authorise Palanhar Dairy &amp;
            Agricultural Farm Pvt. Ltd. to verify my KYC documents and allot shares against my
            investment as per the company&rsquo;s investor policy.
          </span>
        </label>
        <FieldError id="reg-consent-error">{errors.consent}</FieldError>
      </div>
    </div>
  );
}
