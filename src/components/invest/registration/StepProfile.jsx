import { SelectField, TextField } from './FormFields';

const STATES = ['राजस्थान', 'गुजरात', 'मध्य प्रदेश', 'उत्तर प्रदेश', 'हरियाणा', 'अन्य'];

// Investors must be 18+ — latest permissible date of birth.
const maxDob = (() => {
  const d = new Date();
  d.setFullYear(d.getFullYear() - 18);
  return d.toISOString().slice(0, 10);
})();

export default function StepProfile({ data, update, errors }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <TextField
        id="reg-fullname"
        label="पूरा नाम (PAN के अनुसार)"
        placeholder="जैसे राजेश कुमार शर्मा"
        autoComplete="name"
        value={data.fullName}
        error={errors.fullName}
        onChange={(e) => update({ fullName: e.target.value })}
      />
      <TextField
        id="reg-dob"
        label="जन्म तिथि"
        type="date"
        max={maxDob}
        autoComplete="bday"
        value={data.dob}
        error={errors.dob}
        onChange={(e) => update({ dob: e.target.value })}
      />
      <TextField
        id="reg-address"
        label="पता"
        placeholder="मकान नं., गली, मोहल्ला"
        autoComplete="street-address"
        value={data.address}
        error={errors.address}
        onChange={(e) => update({ address: e.target.value })}
        className="sm:col-span-2"
      />
      <TextField
        id="reg-city"
        label="शहर / गाँव"
        placeholder="जैसे जयपुर"
        autoComplete="address-level2"
        value={data.city}
        error={errors.city}
        onChange={(e) => update({ city: e.target.value })}
      />
      <SelectField
        id="reg-state"
        label="राज्य"
        placeholder="अपना राज्य चुनें"
        options={STATES}
        value={data.state}
        error={errors.state}
        onChange={(e) => update({ state: e.target.value })}
      />
      <TextField
        id="reg-pin"
        label="PIN कोड"
        inputMode="numeric"
        placeholder="6 अंकों का PIN"
        autoComplete="postal-code"
        value={data.pin}
        error={errors.pin}
        onChange={(e) => update({ pin: e.target.value.replace(/\D/g, '').slice(0, 6) })}
      />
    </div>
  );
}
