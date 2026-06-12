import { SelectField, TextField } from './FormFields';

const RELATIONS = ['Spouse', 'Son', 'Daughter', 'Parent', 'Other'];

export default function StepNominee({ data, update, errors }) {
  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-500">
        Your nominee will be entitled to your shareholding and any unpaid dividends in the event of
        an unforeseen circumstance.
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          id="reg-nominee-name"
          label="Nominee Full Name"
          placeholder="e.g. Sunita Sharma"
          autoComplete="off"
          value={data.nomineeName}
          error={errors.nomineeName}
          onChange={(e) => update({ nomineeName: e.target.value })}
        />
        <SelectField
          id="reg-nominee-relation"
          label="Relation"
          placeholder="Select relation"
          options={RELATIONS}
          value={data.nomineeRelation}
          error={errors.nomineeRelation}
          onChange={(e) => update({ nomineeRelation: e.target.value })}
        />
        <TextField
          id="reg-nominee-mobile"
          label="Nominee Mobile Number"
          type="tel"
          inputMode="numeric"
          placeholder="10-digit mobile number"
          autoComplete="off"
          value={data.nomineeMobile}
          error={errors.nomineeMobile}
          onChange={(e) => update({ nomineeMobile: e.target.value.replace(/\D/g, '').slice(0, 10) })}
          className="sm:col-span-2"
        />
      </div>
    </div>
  );
}
