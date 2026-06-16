import { TextField, UploadBox } from './FormFields';

export function StepPan({ data, update, errors }) {
  return (
    <div className="space-y-6">
      <TextField
        id="reg-pan"
        label="PAN नंबर"
        placeholder="ABCDE1234F"
        hint="10 अक्षर — टाइप करते ही स्वतः बड़े अक्षरों में बदल जाते हैं"
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
        label="PAN कार्ड की प्रति अपलोड करें"
        fileName={data.panFile}
        error={errors.panFile}
        onFile={(name) => update({ panFile: name })}
      />
      <p className="text-xs text-gray-400">
        शेयर आवंटन और लाभांश पर TDS अनुपालन के लिए आपका PAN अनिवार्य है।
      </p>
    </div>
  );
}

export function StepAadhaar({ data, update, errors }) {
  return (
    <div className="space-y-6">
      <TextField
        id="reg-aadhaar"
        label="आधार नंबर"
        inputMode="numeric"
        placeholder="0000 0000 0000"
        hint="12 अंक — स्वचालित रूप से प्रारूपित"
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
        label="आधार कार्ड की प्रति अपलोड करें"
        fileName={data.aadhaarFile}
        error={errors.aadhaarFile}
        onFile={(name) => update({ aadhaarFile: name })}
      />
      <p className="text-xs text-gray-400">
        आधार का उपयोग केवल पहचान सत्यापन के लिए किया जाता है और इसे सुरक्षित रूप से संग्रहीत किया जाता है।
      </p>
    </div>
  );
}
