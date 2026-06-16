import { FaInfoCircle } from 'react-icons/fa';
import { TextField } from './FormFields';

export default function StepBank({ data, update, errors }) {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3 rounded-xl border border-golden/40 bg-golden/10 px-4 py-3">
        <FaInfoCircle className="mt-0.5 shrink-0 text-golden" aria-hidden="true" />
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-dark-green">लाभांश केवल इसी सत्यापित खाते में भुगतान किया जाता है।</span>{' '}
          कृपया सुनिश्चित करें कि खाता आपके अपने नाम पर है।
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          id="reg-holder"
          label="खाताधारक का नाम"
          placeholder="जैसा पासबुक / चेक पर छपा हो"
          autoComplete="name"
          value={data.accountHolder}
          error={errors.accountHolder}
          onChange={(e) => update({ accountHolder: e.target.value })}
          className="sm:col-span-2"
        />
        <TextField
          id="reg-account"
          label="खाता संख्या"
          inputMode="numeric"
          placeholder="9–18 अंक"
          autoComplete="off"
          value={data.accountNumber}
          error={errors.accountNumber}
          onChange={(e) => update({ accountNumber: e.target.value.replace(/\D/g, '').slice(0, 18) })}
          inputClassName="font-mono tracking-wide"
        />
        <TextField
          id="reg-account-confirm"
          label="खाता संख्या की पुष्टि करें"
          inputMode="numeric"
          placeholder="खाता संख्या पुनः दर्ज करें"
          autoComplete="off"
          value={data.confirmAccount}
          error={errors.confirmAccount}
          onChange={(e) => update({ confirmAccount: e.target.value.replace(/\D/g, '').slice(0, 18) })}
          inputClassName="font-mono tracking-wide"
        />
        <TextField
          id="reg-ifsc"
          label="IFSC कोड"
          placeholder="जैसे SBIN0001234"
          hint="11 अक्षर — स्वतः बड़े अक्षरों में"
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
          label="बैंक का नाम"
          placeholder="जैसे स्टेट बैंक ऑफ इंडिया"
          autoComplete="off"
          value={data.bankName}
          error={errors.bankName}
          onChange={(e) => update({ bankName: e.target.value })}
        />
      </div>
    </div>
  );
}
