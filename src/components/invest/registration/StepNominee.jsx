import { SelectField, TextField } from './FormFields';

const RELATIONS = ['स्पाउस', 'सन', 'डॉटर', 'पैरेंट', 'अदर'];

export default function StepNominee({ data, update, errors }) {
  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-500">
        योर नॉमिनी विल बी एंटाइटल्ड टू योर शेयरहोल्डिंग एंड एनी अनपेड डिविडेंड्स इन द इवेंट ऑफ
        ऐन अनफोरसीन सर्कमस्टांस.
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          id="reg-nominee-name"
          label="नॉमिनी फुल नेम"
          placeholder="e.g. सुनीता शर्मा"
          autoComplete="off"
          value={data.nomineeName}
          error={errors.nomineeName}
          onChange={(e) => update({ nomineeName: e.target.value })}
        />
        <SelectField
          id="reg-nominee-relation"
          label="रिलेशन"
          placeholder="सेलेक्ट रिलेशन"
          options={RELATIONS}
          value={data.nomineeRelation}
          error={errors.nomineeRelation}
          onChange={(e) => update({ nomineeRelation: e.target.value })}
        />
        <TextField
          id="reg-nominee-mobile"
          label="नॉमिनी मोबाइल नंबर"
          type="tel"
          inputMode="numeric"
          placeholder="10-डिजिट मोबाइल नंबर"
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
