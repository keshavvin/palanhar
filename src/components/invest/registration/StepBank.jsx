import { FaInfoCircle } from 'react-icons/fa';
import { TextField } from './FormFields';

export default function StepBank({ data, update, errors }) {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3 rounded-xl border border-golden/40 bg-golden/10 px-4 py-3">
        <FaInfoCircle className="mt-0.5 shrink-0 text-golden" aria-hidden="true" />
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-dark-green">डिविडेंड्स आर पेड ओनली टू दिस वेरिफाइड अकाउंट.</span>{' '}
          प्लीज़ मेक श्योर द अकाउंट इज़ इन योर ओन नेम.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          id="reg-holder"
          label="अकाउंट होल्डर नेम"
          placeholder="ऐज़ प्रिंटेड ऑन पासबुक / चेक"
          autoComplete="name"
          value={data.accountHolder}
          error={errors.accountHolder}
          onChange={(e) => update({ accountHolder: e.target.value })}
          className="sm:col-span-2"
        />
        <TextField
          id="reg-account"
          label="अकाउंट नंबर"
          inputMode="numeric"
          placeholder="9–18 डिजिट्स"
          autoComplete="off"
          value={data.accountNumber}
          error={errors.accountNumber}
          onChange={(e) => update({ accountNumber: e.target.value.replace(/\D/g, '').slice(0, 18) })}
          inputClassName="font-mono tracking-wide"
        />
        <TextField
          id="reg-account-confirm"
          label="कन्फर्म अकाउंट नंबर"
          inputMode="numeric"
          placeholder="री-एंटर अकाउंट नंबर"
          autoComplete="off"
          value={data.confirmAccount}
          error={errors.confirmAccount}
          onChange={(e) => update({ confirmAccount: e.target.value.replace(/\D/g, '').slice(0, 18) })}
          inputClassName="font-mono tracking-wide"
        />
        <TextField
          id="reg-ifsc"
          label="IFSC कोड"
          placeholder="e.g. SBIN0001234"
          hint="11 कैरेक्टर्स — ऑटो-कैपिटलाइज़्ड"
          autoComplete="off"
          value={data.ifsc}
          error={errors.ifsc}
          onChange={(e) =>
            update({
              ifsc: e.target.value
                .toUpperCase()
                .replace(/[^A-Z0-9]/g, '')
                .slice(0, 11),
            })
          }
          inputClassName="font-mono tracking-widest"
        />
        <TextField
          id="reg-bankname"
          label="बैंक नेम"
          placeholder="e.g. स्टेट बैंक ऑफ इंडिया"
          autoComplete="off"
          value={data.bankName}
          error={errors.bankName}
          onChange={(e) => update({ bankName: e.target.value })}
        />
      </div>
    </div>
  );
}
