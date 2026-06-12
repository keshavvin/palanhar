import { TextField, UploadBox } from './FormFields';

export function StepPan({ data, update, errors }) {
  return (
    <div className="space-y-6">
      <TextField
        id="reg-pan"
        label="PAN Number"
        placeholder="ABCDE1234F"
        hint="10 characters — auto-capitalised as you type"
        autoComplete="off"
        value={data.pan}
        error={errors.pan}
        onChange={(e) =>
          update({
            pan: e.target.value
              .toUpperCase()
              .replace(/[^A-Z0-9]/g, '')
              .slice(0, 10),
          })
        }
        inputClassName="font-mono tracking-widest"
      />
      <UploadBox
        id="reg-pan-file"
        label="Upload PAN Card Copy"
        fileName={data.panFile}
        error={errors.panFile}
        onFile={(name) => update({ panFile: name })}
      />
      <p className="text-xs text-gray-400">
        Your PAN is mandatory for share allotment and dividend TDS compliance.
      </p>
    </div>
  );
}

export function StepAadhaar({ data, update, errors }) {
  return (
    <div className="space-y-6">
      <TextField
        id="reg-aadhaar"
        label="Aadhaar Number"
        inputMode="numeric"
        placeholder="0000 0000 0000"
        hint="12 digits — formatted automatically"
        autoComplete="off"
        value={data.aadhaar}
        error={errors.aadhaar}
        onChange={(e) => {
          const digits = e.target.value.replace(/\D/g, '').slice(0, 12);
          update({ aadhaar: digits.replace(/(\d{4})(?=\d)/g, '$1 ') });
        }}
        inputClassName="font-mono tracking-widest"
      />
      <UploadBox
        id="reg-aadhaar-file"
        label="Upload Aadhaar Card Copy"
        fileName={data.aadhaarFile}
        error={errors.aadhaarFile}
        onFile={(name) => update({ aadhaarFile: name })}
      />
      <p className="text-xs text-gray-400">
        Aadhaar is used only for identity verification and is stored securely.
      </p>
    </div>
  );
}
