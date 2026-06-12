import { FaInfoCircle } from 'react-icons/fa';
import { TextField } from './FormFields';

export default function StepBank({ data, update, errors }) {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3 rounded-xl border border-golden/40 bg-golden/10 px-4 py-3">
        <FaInfoCircle className="mt-0.5 shrink-0 text-golden" aria-hidden="true" />
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-dark-green">Dividends are paid only to this verified account.</span>{' '}
          Please make sure the account is in your own name.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          id="reg-holder"
          label="Account Holder Name"
          placeholder="As printed on passbook / cheque"
          autoComplete="name"
          value={data.accountHolder}
          error={errors.accountHolder}
          onChange={(e) => update({ accountHolder: e.target.value })}
          className="sm:col-span-2"
        />
        <TextField
          id="reg-account"
          label="Account Number"
          inputMode="numeric"
          placeholder="9–18 digits"
          autoComplete="off"
          value={data.accountNumber}
          error={errors.accountNumber}
          onChange={(e) => update({ accountNumber: e.target.value.replace(/\D/g, '').slice(0, 18) })}
          inputClassName="font-mono tracking-wide"
        />
        <TextField
          id="reg-account-confirm"
          label="Confirm Account Number"
          inputMode="numeric"
          placeholder="Re-enter account number"
          autoComplete="off"
          value={data.confirmAccount}
          error={errors.confirmAccount}
          onChange={(e) => update({ confirmAccount: e.target.value.replace(/\D/g, '').slice(0, 18) })}
          inputClassName="font-mono tracking-wide"
        />
        <TextField
          id="reg-ifsc"
          label="IFSC Code"
          placeholder="e.g. SBIN0001234"
          hint="11 characters — auto-capitalised"
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
          label="Bank Name"
          placeholder="e.g. State Bank of India"
          autoComplete="off"
          value={data.bankName}
          error={errors.bankName}
          onChange={(e) => update({ bankName: e.target.value })}
        />
      </div>
    </div>
  );
}
