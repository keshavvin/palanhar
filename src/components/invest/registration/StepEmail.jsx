import { useState } from 'react';
import { FaCheckCircle, FaEnvelope } from 'react-icons/fa';
import { FieldError, Spinner } from './FormFields';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function StepEmail({ data, update, errors, setErrors }) {
  const [verifying, setVerifying] = useState(false);

  const verify = () => {
    if (!EMAIL_RE.test(data.email)) {
      setErrors({ email: 'कृपया एक मान्य ईमेल पता दर्ज करें।' });
      return;
    }
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      // Re-patching `email` clears any lingering "tap Verify" validation error.
      update({ email: data.email, emailVerified: true });
    }, 600);
  };

  return (
    <div className="space-y-5">
      <div>
        <label htmlFor="reg-email" className="mb-1.5 block text-sm font-semibold text-gray-700">
          ईमेल पता
        </label>
        <div className="flex flex-wrap items-stretch gap-3">
          <div
            className={`flex min-w-0 flex-1 items-stretch overflow-hidden rounded-xl border-2 bg-gray-50 transition-colors duration-300 focus-within:bg-white ${
              errors.email ? 'border-red-400' : 'border-gray-200 focus-within:border-primary-green'
            }`}
          >
            <span className="flex items-center border-r-2 border-gray-200 bg-cream-white px-3 text-primary-green/70">
              <FaEnvelope aria-hidden="true" />
            </span>
            <input
              id="reg-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={data.email}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'reg-email-error' : undefined}
              onChange={(e) => update({ email: e.target.value.trim(), emailVerified: false })}
              className="min-w-0 flex-1 bg-transparent px-4 py-3 focus:outline-none"
            />
          </div>
          {!data.emailVerified && (
            <button
              type="button"
              onClick={verify}
              className="btn btn-primary inline-flex min-h-11 items-center justify-center gap-2"
            >
              {verifying && <Spinner />}
              {verifying ? 'सत्यापित किया जा रहा है…' : 'सत्यापित करें'}
            </button>
          )}
        </div>
        <FieldError id="reg-email-error">{errors.email}</FieldError>
      </div>

      {data.emailVerified && (
        <div className="flex items-center gap-3 rounded-xl border border-primary-green/20 bg-green-50 px-4 py-3">
          <FaCheckCircle className="shrink-0 text-xl text-primary-green" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-dark-green">ईमेल सत्यापित</p>
            <p className="text-xs text-gray-500">
              विवरण और लाभांश सूचनाएँ {data.email} पर भेजी जाएँगी
            </p>
          </div>
        </div>
      )}

      <p className="text-xs text-gray-400">
        डेमो: सत्यापन का अनुकरण किया गया है — वास्तव में कोई ईमेल नहीं भेजा जाएगा।
      </p>
    </div>
  );
}
