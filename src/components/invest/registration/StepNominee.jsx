import { SelectField, TextField } from './FormFields';

const RELATIONS = ['जीवनसाथी', 'पुत्र', 'पुत्री', 'माता-पिता', 'अन्य'];

export default function StepNominee({ data, update, errors }) {
  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-500">
        किसी अप्रत्याशित परिस्थिति की स्थिति में आपका नामांकित व्यक्ति आपके शेयरों और किसी भी बकाया
        लाभांश का हकदार होगा।
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          id="reg-nominee-name"
          label="नामांकित व्यक्ति का पूरा नाम"
          placeholder="जैसे सुनीता शर्मा"
          autoComplete="off"
          value={data.nomineeName}
          error={errors.nomineeName}
          onChange={(e) => update({ nomineeName: e.target.value })}
        />
        <SelectField
          id="reg-nominee-relation"
          label="रिश्ता"
          placeholder="रिश्ता चुनें"
          options={RELATIONS}
          value={data.nomineeRelation}
          error={errors.nomineeRelation}
          onChange={(e) => update({ nomineeRelation: e.target.value })}
        />
        <TextField
          id="reg-nominee-mobile"
          label="नामांकित व्यक्ति का मोबाइल नंबर"
          type="tel"
          inputMode="numeric"
          placeholder="10 अंकों का मोबाइल नंबर"
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
