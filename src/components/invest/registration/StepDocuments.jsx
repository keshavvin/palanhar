import { TextField, UploadBox } from './FormFields';

export function StepPan({ data, update, errors }) {
  return (
    <div className="space-y-6">
      <TextField
        id="reg-pan"
        label="PAN नंबर"
        placeholder="ABCDE1234F"
        hint="10 कैरेक्टर्स — ऑटो-कैपिटलाइज़्ड ऐज़ यू टाइप"
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
        label="अपलोड PAN कार्ड कॉपी"
        fileName={data.panFile}
        error={errors.panFile}
        onFile={(name) => update({ panFile: name })}
      />
      <p className="text-xs text-gray-400">
        योर PAN इज़ मैंडेटरी फॉर शेयर अलॉटमेंट एंड डिविडेंड TDS कम्प्लायंस.
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
        hint="12 डिजिट्स — फॉर्मैटेड ऑटोमैटिकली"
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
        label="अपलोड आधार कार्ड कॉपी"
        fileName={data.aadhaarFile}
        error={errors.aadhaarFile}
        onFile={(name) => update({ aadhaarFile: name })}
      />
      <p className="text-xs text-gray-400">
        आधार इज़ यूज़्ड ओनली फॉर आइडेंटिटी वेरिफिकेशन एंड इज़ स्टोर्ड सिक्योरली.
      </p>
    </div>
  );
}
