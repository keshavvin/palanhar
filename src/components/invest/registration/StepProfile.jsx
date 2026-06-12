import { SelectField, TextField } from './FormFields';

const STATES = ['Rajasthan', 'Gujarat', 'Madhya Pradesh', 'Uttar Pradesh', 'Haryana', 'Other'];

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
        label="Full Name (as per PAN)"
        placeholder="e.g. Rajesh Kumar Sharma"
        autoComplete="name"
        value={data.fullName}
        error={errors.fullName}
        onChange={(e) => update({ fullName: e.target.value })}
      />
      <TextField
        id="reg-dob"
        label="Date of Birth"
        type="date"
        max={maxDob}
        autoComplete="bday"
        value={data.dob}
        error={errors.dob}
        onChange={(e) => update({ dob: e.target.value })}
      />
      <TextField
        id="reg-address"
        label="Address"
        placeholder="House no., street, locality"
        autoComplete="street-address"
        value={data.address}
        error={errors.address}
        onChange={(e) => update({ address: e.target.value })}
        className="sm:col-span-2"
      />
      <TextField
        id="reg-city"
        label="City / Village"
        placeholder="e.g. Jaipur"
        autoComplete="address-level2"
        value={data.city}
        error={errors.city}
        onChange={(e) => update({ city: e.target.value })}
      />
      <SelectField
        id="reg-state"
        label="State"
        placeholder="Select your state"
        options={STATES}
        value={data.state}
        error={errors.state}
        onChange={(e) => update({ state: e.target.value })}
      />
      <TextField
        id="reg-pin"
        label="PIN Code"
        inputMode="numeric"
        placeholder="6-digit PIN"
        autoComplete="postal-code"
        value={data.pin}
        error={errors.pin}
        onChange={(e) => update({ pin: e.target.value.replace(/\D/g, '').slice(0, 6) })}
      />
    </div>
  );
}
