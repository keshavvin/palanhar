import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaMobileAlt, FaCheckCircle, FaArrowRight, FaArrowLeft, FaQrcode, FaLock,
  FaUpload, FaCamera, FaIdCard, FaCreditCard, FaUniversity, FaDownload,
  FaUser, FaHeadset, FaListUl, FaHourglassHalf, FaSearch,
} from 'react-icons/fa';
import { investmentPlans, formatINR } from '../data/investorData';
import OtpInput from '../components/invest/registration/OtpInput';
import { Spinner } from '../components/invest/registration/FormFields';

const STEPS = ['लॉगिन', 'योजना', 'KYC', 'सत्यापन', 'भुगतान', 'डैशबोर्ड'];
const STATES = ['राजस्थान', 'गुजरात', 'मध्य प्रदेश', 'उत्तर प्रदेश', 'हरियाणा', 'अन्य'];
const RELATIONS = ['जीवनसाथी', 'पुत्र', 'पुत्री', 'माता-पिता', 'अन्य'];
const BANKS = ['भारतीय स्टेट बैंक (SBI)', 'HDFC बैंक', 'ICICI बैंक', 'पंजाब नेशनल बैंक', 'एक्सिस बैंक', 'बैंक ऑफ बड़ौदा'];
const DURATION = '20 वर्ष';

const PAYEE = { upiId: 'palanhar@okicici', bank: 'भारतीय स्टेट बैंक (SBI)', account: '3850 0012 3456', ifsc: 'SBIN0001234' };
const KYC_STAGES = ['लंबित', 'समीक्षाधीन', 'स्वीकृत'];

const fieldCls = (err) =>
  `w-full rounded-xl border-2 bg-gray-50 px-4 py-2.5 focus:bg-white focus:outline-none ${err ? 'border-red-400' : 'border-gray-200 focus:border-primary-green'}`;

function Stepper({ step }) {
  return (
    <ol className="mb-8 flex items-center justify-center gap-1 sm:gap-2">
      {STEPS.map((label, i) => (
        <li key={label} className="flex items-center gap-1 sm:gap-2">
          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${i < step ? 'bg-primary-green text-white' : i === step ? 'bg-golden text-dark-green ring-4 ring-golden/20' : 'bg-gray-200 text-gray-500'}`}>
            {i < step ? '✓' : i + 1}
          </span>
          <span className={`hidden text-xs font-semibold sm:inline ${i === step ? 'text-dark-green' : 'text-gray-400'}`}>{label}</span>
          {i < STEPS.length - 1 && <span className="h-0.5 w-3 bg-gray-200 sm:w-6" aria-hidden="true" />}
        </li>
      ))}
    </ol>
  );
}

function UploadField({ label, icon: Icon, value, onChange }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold text-gray-700">{label}</label>
      <label className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed px-4 py-3 transition-colors ${value ? 'border-primary-green/40 bg-primary-green/5' : 'border-gray-300 hover:border-primary-green/40'}`}>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cream-white text-primary-green"><Icon aria-hidden="true" /></span>
        <span className="min-w-0 flex-1 truncate text-sm text-gray-600">{value || 'फ़ाइल चुनें / अपलोड करें'}</span>
        {value && <FaCheckCircle className="shrink-0 text-primary-green" aria-hidden="true" />}
        <input type="file" accept="image/*,application/pdf" className="hidden" onChange={(e) => onChange(e.target.files?.[0]?.name || '')} />
      </label>
    </div>
  );
}

export default function InvestFlow() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  // Coming from a plan card (?step=kyc) jumps straight to KYC; otherwise start at login.
  const [step, setStep] = useState(searchParams.get('step') === 'kyc' ? 2 : 0);

  // login
  const [mobile, setMobile] = useState('9876543210');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [sending, setSending] = useState(false);

  // scheme
  const [planId, setPlanId] = useState(
    investmentPlans.some((p) => p.id === searchParams.get('plan')) ? searchParams.get('plan') : 'B',
  );
  const plan = investmentPlans.find((p) => p.id === planId);

  // kyc
  const [kyc, setKyc] = useState({
    fullName: 'राजेश कुमार', dob: '1990-05-15', mobile: '9876543210', email: 'rajesh.kumar@example.com',
    address: 'ग्राम रामपुर, तह. गोहाना, सतना, मध्य प्रदेश - 485001', state: 'मध्य प्रदेश',
    aadhaar: '1234 5678 9012', pan: 'ABCDE1234F',
    aadhaarFile: '', panFile: '', selfie: '',
    accountNumber: '123456789012', ifsc: 'SBIN0001234', bankName: 'भारतीय स्टेट बैंक', nomineeName: 'सुनीता देवी', nomineeRelation: 'जीवनसाथी',
  });
  const [errors, setErrors] = useState({});

  // verification + payment
  const [kycStage, setKycStage] = useState(0);
  const [payMethod, setPayMethod] = useState('upi');
  const [card, setCard] = useState({ number: '', expiry: '', cvv: '' });
  const [netbank, setNetbank] = useState(BANKS[0]);
  const [verifying, setVerifying] = useState(false);
  const [txnId, setTxnId] = useState('');

  const setK = (patch) => {
    setKyc((k) => ({ ...k, ...patch }));
    setErrors((e) => { const n = { ...e }; Object.keys(patch).forEach((k2) => delete n[k2]); return n; });
  };

  const sendOtp = () => {
    if (!/^\d{10}$/.test(mobile)) { setErrors({ mobile: 'मान्य 10-अंकों का मोबाइल नंबर दर्ज करें।' }); return; }
    setErrors({}); setSending(true);
    setTimeout(() => { setSending(false); setOtpSent(true); setOtp(['1', '2', '3', '4', '5', '6']); }, 600);
  };

  // Auto-progress KYC status on the verification step.
  useEffect(() => {
    if (step !== 3) return undefined;
    setKycStage(0);
    const t1 = setTimeout(() => setKycStage(1), 1200);
    const t2 = setTimeout(() => setKycStage(2), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [step]);

  const next = () => {
    if (step === 0) {
      if (!/^\d{10}$/.test(mobile)) { setErrors({ mobile: 'मान्य मोबाइल नंबर दर्ज करें।' }); return; }
      if (!otpSent) { setErrors({ mobile: '“OTP भेजें” पर टैप करें।' }); return; }
      if (otp.some((d) => d === '')) { setErrors({ otp: 'OTP के सभी 6 अंक दर्ज करें।' }); return; }
    }
    if (step === 2) {
      const e = {};
      if (!kyc.fullName.trim()) e.fullName = 'नाम आवश्यक है।';
      if (!kyc.dob) e.dob = 'जन्मतिथि आवश्यक है।';
      if (!/^\d{10}$/.test(kyc.mobile)) e.mobile = 'मान्य मोबाइल नंबर दर्ज करें।';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(kyc.email)) e.email = 'मान्य ईमेल दर्ज करें।';
      if (!kyc.address.trim()) e.address = 'पता आवश्यक है।';
      if (kyc.aadhaar.replace(/\s/g, '').length !== 12) e.aadhaar = 'मान्य 12-अंकों का आधार दर्ज करें।';
      if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(kyc.pan)) e.pan = 'मान्य PAN दर्ज करें (ABCDE1234F)।';
      if (!kyc.aadhaarFile) e.aadhaarFile = 'आधार कार्ड अपलोड करें।';
      if (!kyc.panFile) e.panFile = 'PAN कार्ड अपलोड करें।';
      if (!kyc.selfie) e.selfie = 'सेल्फी/फोटो अपलोड करें।';
      if (!/^\d{9,18}$/.test(kyc.accountNumber)) e.accountNumber = 'मान्य खाता संख्या दर्ज करें।';
      if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(kyc.ifsc)) e.ifsc = 'मान्य IFSC दर्ज करें।';
      if (Object.keys(e).length) { setErrors(e); return; }
    }
    setErrors({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep((s) => s + 1);
  };

  const back = () => { setErrors({}); setStep((s) => Math.max(0, s - 1)); };

  // Pick a plan and jump straight to KYC.
  const choosePlan = (id) => {
    setPlanId(id);
    setErrors({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(2);
  };

  const doPayment = () => {
    if (payMethod === 'card') {
      const e = {};
      if (card.number.replace(/\s/g, '').length < 12) e.cardNumber = 'मान्य कार्ड नंबर दर्ज करें।';
      if (!/^\d{2}\/\d{2}$/.test(card.expiry)) e.expiry = 'MM/YY प्रारूप में दर्ज करें।';
      if (!/^\d{3}$/.test(card.cvv)) e.cvv = 'मान्य CVV दर्ज करें।';
      if (Object.keys(e).length) { setErrors(e); return; }
    }
    setErrors({}); setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      setTxnId(`TXN${Date.now().toString().slice(-9)}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setStep(5);
    }, 1300);
  };

  const downloadReceipt = () => {
    const text = [
      'पालनहार डेयरी एंड एग्रीकल्चरल फार्म प्रा. लि.',
      'भुगतान रसीद / PAYMENT RECEIPT',
      '----------------------------------------',
      `निवेशक: ${kyc.fullName}`,
      `मोबाइल: +91 ${kyc.mobile}`,
      `ईमेल: ${kyc.email}`,
      `योजना: ${plan?.name}`,
      `राशि: ${formatINR(plan?.minAmount)}`,
      `अवधि: ${DURATION}`,
      `भुगतान विधि: ${payMethod.toUpperCase()}`,
      `लेन-देन आईडी: ${txnId}`,
      `KYC स्थिति: स्वीकृत`,
      `भुगतान स्थिति: पूर्ण`,
      '----------------------------------------',
      'धन्यवाद — गौ सेवा से समृद्धि।',
    ].join('\n');
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `palanhar-receipt-${txnId}.txt`; a.click();
    URL.revokeObjectURL(url);
  };

  const upi = `upi://pay?pa=${PAYEE.upiId}&pn=${encodeURIComponent('PALANHAR DAIRY')}&am=${plan?.minAmount || ''}&cu=INR&tn=PALANHAR-INVEST`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upi)}`;

  return (
    <div className="min-h-screen bg-cream-white/40 py-10 md:py-14">
      <div className="container-custom">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <span className="section-eyebrow">गौ सेवा से समृद्धि</span>
          <h1 className="mb-2">निवेश प्रक्रिया</h1>
          <p className="text-gray-600">लॉगिन → योजना → KYC → भुगतान → डैशबोर्ड</p>
        </div>

        <div className={`mx-auto ${step === 1 ? 'max-w-5xl' : step === 5 ? 'max-w-3xl' : 'max-w-2xl'}`}>
          <Stepper step={step} />

          <div className="rounded-2xl border border-primary-green/10 bg-white p-6 shadow-xl sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div key={step} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3 }}>

                {/* 0 — LOGIN */}
                {step === 0 && (
                  <div className="space-y-5">
                    <h2 className="text-xl">निवेशक लॉगिन</h2>
                    <div>
                      <label htmlFor="f-mobile" className="mb-1.5 block text-sm font-semibold text-gray-700">मोबाइल नंबर</label>
                      <div className={`flex items-stretch overflow-hidden rounded-xl border-2 bg-gray-50 ${errors.mobile ? 'border-red-400' : 'border-gray-200 focus-within:border-primary-green'}`}>
                        <span className="flex items-center gap-1.5 border-r-2 border-gray-200 bg-cream-white px-3 text-sm font-bold text-dark-green"><FaMobileAlt className="text-primary-green/70" aria-hidden="true" /> +91</span>
                        <input id="f-mobile" type="tel" inputMode="numeric" value={mobile} disabled={otpSent} onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="98765 43210" className="min-w-0 flex-1 bg-transparent px-4 py-3 focus:outline-none disabled:text-gray-500" />
                      </div>
                      {errors.mobile && <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>}
                    </div>
                    {!otpSent ? (
                      <button type="button" onClick={sendOtp} className="btn btn-primary flex w-full items-center justify-center gap-2">{sending && <Spinner />}{sending ? 'भेजा जा रहा है…' : 'OTP भेजें'}</button>
                    ) : (
                      <div className="rounded-xl border border-primary-green/15 bg-cream-white p-4">
                        <p className="mb-3 text-sm font-semibold text-gray-700"><span className="text-dark-green">+91 {mobile}</span> पर भेजा गया OTP दर्ज करें</p>
                        <OtpInput value={otp} onChange={setOtp} />
                        <p className="mt-2 text-xs text-gray-400">डेमो: कोई भी 6 अंक</p>
                        {errors.otp && <p className="mt-1 text-xs text-red-500">{errors.otp}</p>}
                      </div>
                    )}
                  </div>
                )}

                {/* 1 — SCHEMES */}
                {step === 1 && (
                  <div>
                    <h2 className="mb-1 text-center text-2xl">अपनी सेवा योजना चुनें</h2>
                    <p className="mb-8 text-center text-sm text-gray-500">कोई भी योजना चुनें — फिर KYC एवं भुगतान।</p>
                    <div className="grid gap-5 md:grid-cols-3">
                      {investmentPlans.map((p) => {
                        const selected = planId === p.id;
                        return (
                          <div
                            key={p.id}
                            className={`relative flex flex-col overflow-hidden rounded-2xl border-2 bg-white p-6 shadow-sm transition-all ${selected ? 'border-primary-green ring-2 ring-primary-green/20' : p.popular ? 'border-golden' : 'border-gray-200'}`}
                          >
                            {p.popular && (
                              <span className="absolute right-0 top-0 rounded-bl-xl bg-golden px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-dark-green">
                                सबसे लोकप्रिय
                              </span>
                            )}
                            <span className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-green/10 text-3xl" aria-hidden="true">{p.icon}</span>
                            <h3 className="text-lg font-bold text-dark-green">{p.name}</h3>
                            <p className="mt-0.5 text-sm text-gray-500">{p.tagline}</p>

                            <div className="mt-4">
                              <p className="text-xs text-gray-500">न्यूनतम निवेश</p>
                              <p className="font-display text-2xl font-extrabold text-primary-green">{formatINR(p.minAmount)}</p>
                            </div>

                            <ul className="mt-4 flex-1 space-y-2">
                              {p.highlights.map((h) => (
                                <li key={h} className="flex items-start gap-2 text-sm text-gray-600"><FaCheckCircle className="mt-0.5 shrink-0 text-primary-green" aria-hidden="true" /> {h}</li>
                              ))}
                            </ul>

                            <button
                              type="button"
                              onClick={() => choosePlan(p.id)}
                              className={`btn mt-6 w-full ${p.popular ? 'btn-golden' : 'btn-primary'}`}
                            >
                              अभी निवेश करें
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 2 — KYC */}
                {step === 2 && (
                  <div>
                    <h2 className="mb-4 text-xl">KYC सत्यापन</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2"><label className="mb-1 block text-sm font-semibold text-gray-700">पूरा नाम</label><input value={kyc.fullName} onChange={(e) => setK({ fullName: e.target.value })} className={fieldCls(errors.fullName)} />{errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}</div>
                      <div><label className="mb-1 block text-sm font-semibold text-gray-700">जन्मतिथि</label><input type="date" value={kyc.dob} onChange={(e) => setK({ dob: e.target.value })} className={fieldCls(errors.dob)} />{errors.dob && <p className="mt-1 text-xs text-red-500">{errors.dob}</p>}</div>
                      <div><label className="mb-1 block text-sm font-semibold text-gray-700">मोबाइल नंबर</label><input value={kyc.mobile} onChange={(e) => setK({ mobile: e.target.value.replace(/\D/g, '').slice(0, 10) })} className={fieldCls(errors.mobile)} />{errors.mobile && <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>}</div>
                      <div className="sm:col-span-2"><label className="mb-1 block text-sm font-semibold text-gray-700">ईमेल पता</label><input type="email" value={kyc.email} onChange={(e) => setK({ email: e.target.value })} className={fieldCls(errors.email)} />{errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}</div>
                      <div className="sm:col-span-2"><label className="mb-1 block text-sm font-semibold text-gray-700">पता</label><textarea rows={2} value={kyc.address} onChange={(e) => setK({ address: e.target.value })} className={`resize-none ${fieldCls(errors.address)}`} />{errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}</div>
                      <div><label className="mb-1 block text-sm font-semibold text-gray-700">आधार संख्या</label><input value={kyc.aadhaar} onChange={(e) => setK({ aadhaar: e.target.value })} className={fieldCls(errors.aadhaar)} />{errors.aadhaar && <p className="mt-1 text-xs text-red-500">{errors.aadhaar}</p>}</div>
                      <div><label className="mb-1 block text-sm font-semibold text-gray-700">PAN संख्या</label><input value={kyc.pan} onChange={(e) => setK({ pan: e.target.value.toUpperCase().slice(0, 10) })} className={fieldCls(errors.pan)} />{errors.pan && <p className="mt-1 text-xs text-red-500">{errors.pan}</p>}</div>
                      <div><UploadField label="आधार कार्ड अपलोड" icon={FaIdCard} value={kyc.aadhaarFile} onChange={(v) => setK({ aadhaarFile: v })} />{errors.aadhaarFile && <p className="mt-1 text-xs text-red-500">{errors.aadhaarFile}</p>}</div>
                      <div><UploadField label="PAN कार्ड अपलोड" icon={FaUpload} value={kyc.panFile} onChange={(v) => setK({ panFile: v })} />{errors.panFile && <p className="mt-1 text-xs text-red-500">{errors.panFile}</p>}</div>
                      <div className="sm:col-span-2"><UploadField label="सेल्फी / फोटो अपलोड" icon={FaCamera} value={kyc.selfie} onChange={(v) => setK({ selfie: v })} />{errors.selfie && <p className="mt-1 text-xs text-red-500">{errors.selfie}</p>}</div>
                      <div className="sm:col-span-2 mt-1 border-t border-gray-100 pt-3 text-sm font-bold text-dark-green">बैंक खाता विवरण</div>
                      <div><label className="mb-1 block text-sm font-semibold text-gray-700">खाता संख्या</label><input value={kyc.accountNumber} onChange={(e) => setK({ accountNumber: e.target.value.replace(/\D/g, '') })} className={fieldCls(errors.accountNumber)} />{errors.accountNumber && <p className="mt-1 text-xs text-red-500">{errors.accountNumber}</p>}</div>
                      <div><label className="mb-1 block text-sm font-semibold text-gray-700">IFSC</label><input value={kyc.ifsc} onChange={(e) => setK({ ifsc: e.target.value.toUpperCase() })} className={fieldCls(errors.ifsc)} />{errors.ifsc && <p className="mt-1 text-xs text-red-500">{errors.ifsc}</p>}</div>
                      <div><label className="mb-1 block text-sm font-semibold text-gray-700">बैंक</label><input value={kyc.bankName} onChange={(e) => setK({ bankName: e.target.value })} className={fieldCls()} /></div>
                      <div><label className="mb-1 block text-sm font-semibold text-gray-700">नामांकित (नाम / रिश्ता)</label><div className="flex gap-2"><input value={kyc.nomineeName} onChange={(e) => setK({ nomineeName: e.target.value })} className={fieldCls()} /><select value={kyc.nomineeRelation} onChange={(e) => setK({ nomineeRelation: e.target.value })} className={`w-32 ${fieldCls()}`}>{RELATIONS.map((r) => <option key={r}>{r}</option>)}</select></div></div>
                    </div>
                  </div>
                )}

                {/* 3 — KYC STATUS */}
                {step === 3 && (
                  <div className="text-center">
                    <h2 className="text-xl">KYC सत्यापन स्थिति</h2>
                    <p className="mt-1 text-sm text-gray-600">आपके दस्तावेज़ों की जाँच की जा रही है…</p>
                    <ol className="mx-auto mt-6 max-w-sm space-y-3 text-left">
                      {KYC_STAGES.map((label, i) => {
                        const state = i < kycStage ? 'done' : i === kycStage ? 'active' : 'todo';
                        const Icon = i === 0 ? FaHourglassHalf : i === 1 ? FaSearch : FaCheckCircle;
                        return (
                          <li key={label} className={`flex items-center gap-3 rounded-xl border p-3 ${state === 'done' || (state === 'active' && i === 2) ? 'border-primary-green/30 bg-primary-green/5' : state === 'active' ? 'border-golden/40 bg-golden/10' : 'border-gray-200'}`}>
                            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${i <= kycStage ? 'bg-primary-green text-white' : 'bg-gray-200 text-gray-400'}`}>
                              {i < kycStage ? <FaCheckCircle aria-hidden="true" /> : <Icon aria-hidden="true" />}
                            </span>
                            <span className={`font-semibold ${i <= kycStage ? 'text-dark-green' : 'text-gray-400'}`}>{label}</span>
                            {i === kycStage && i < 2 && <Spinner light={false} />}
                          </li>
                        );
                      })}
                    </ol>
                    {kycStage === 2 && (
                      <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-bold text-primary-green">
                        <FaCheckCircle aria-hidden="true" /> KYC स्वीकृत — अब भुगतान करें
                      </p>
                    )}
                  </div>
                )}

                {/* 4 — PAYMENT */}
                {step === 4 && (
                  <div>
                    <h2 className="text-xl">भुगतान</h2>
                    <div className="mt-4 flex items-center justify-between rounded-xl bg-cream-white px-4 py-3">
                      <span className="flex items-center gap-2 text-sm font-semibold text-dark-green"><span aria-hidden="true">{plan?.icon}</span> {plan?.name}</span>
                      <span className="text-lg font-bold text-primary-green">{formatINR(plan?.minAmount)}</span>
                    </div>

                    {/* Method tabs */}
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {[{ k: 'upi', l: 'UPI / QR', i: FaQrcode }, { k: 'card', l: 'कार्ड', i: FaCreditCard }, { k: 'netbanking', l: 'नेट बैंकिंग', i: FaUniversity }].map((m) => (
                        <button key={m.k} type="button" onClick={() => { setPayMethod(m.k); setErrors({}); }} className={`flex flex-col items-center gap-1 rounded-xl border-2 px-2 py-3 text-xs font-semibold transition-colors ${payMethod === m.k ? 'border-primary-green bg-primary-green/5 text-primary-green' : 'border-gray-200 text-gray-500 hover:border-primary-green/40'}`}>
                          <m.i aria-hidden="true" /> {m.l}
                        </button>
                      ))}
                    </div>

                    <div className="mt-5">
                      {payMethod === 'upi' && (
                        <div className="flex flex-col items-center gap-2">
                          <img src={qrUrl} alt="UPI भुगतान QR कोड" width="200" height="200" className="h-48 w-48 rounded-lg border border-gray-200 bg-white p-2" />
                          <p className="text-xs text-gray-500">किसी भी UPI ऐप से QR स्कैन कर भुगतान करें</p>
                          <p className="text-sm font-semibold text-dark-green">UPI ID: {PAYEE.upiId}</p>
                        </div>
                      )}
                      {payMethod === 'card' && (
                        <div className="space-y-3">
                          <div><label className="mb-1 block text-sm font-semibold text-gray-700">कार्ड नंबर</label><input inputMode="numeric" value={card.number} onChange={(e) => setCard((c) => ({ ...c, number: e.target.value.replace(/[^\d ]/g, '').slice(0, 19) }))} placeholder="1234 5678 9012 3456" className={fieldCls(errors.cardNumber)} />{errors.cardNumber && <p className="mt-1 text-xs text-red-500">{errors.cardNumber}</p>}</div>
                          <div className="grid grid-cols-2 gap-3">
                            <div><label className="mb-1 block text-sm font-semibold text-gray-700">एक्सपायरी (MM/YY)</label><input value={card.expiry} onChange={(e) => setCard((c) => ({ ...c, expiry: e.target.value.slice(0, 5) }))} placeholder="08/28" className={fieldCls(errors.expiry)} />{errors.expiry && <p className="mt-1 text-xs text-red-500">{errors.expiry}</p>}</div>
                            <div><label className="mb-1 block text-sm font-semibold text-gray-700">CVV</label><input inputMode="numeric" value={card.cvv} onChange={(e) => setCard((c) => ({ ...c, cvv: e.target.value.replace(/\D/g, '').slice(0, 3) }))} placeholder="123" className={fieldCls(errors.cvv)} />{errors.cvv && <p className="mt-1 text-xs text-red-500">{errors.cvv}</p>}</div>
                          </div>
                        </div>
                      )}
                      {payMethod === 'netbanking' && (
                        <div>
                          <label className="mb-1 block text-sm font-semibold text-gray-700">अपना बैंक चुनें</label>
                          <select value={netbank} onChange={(e) => setNetbank(e.target.value)} className={fieldCls()}>{BANKS.map((b) => <option key={b}>{b}</option>)}</select>
                          <p className="mt-2 text-xs text-gray-500">आप अपने बैंक के सुरक्षित पेज पर पुनर्निर्देशित होंगे (डेमो)।</p>
                        </div>
                      )}
                    </div>
                    <p className="mt-4 text-center text-xs text-gray-400">डेमो भुगतान — कोई वास्तविक राशि नहीं ली जाती।</p>
                  </div>
                )}

                {/* 5 — FINAL DASHBOARD */}
                {step === 5 && (
                  <div>
                    <div className="text-center">
                      <span className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-primary-green"><FaCheckCircle aria-hidden="true" /></span>
                      <h2 className="text-2xl">भुगतान सफल!</h2>
                      <p className="mt-1 text-gray-600">बधाई हो {kyc.fullName}! आपका निवेश पूर्ण हो गया है।</p>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {/* Profile */}
                      <div className="rounded-2xl border border-primary-green/10 bg-cream-white/60 p-5">
                        <p className="mb-2 flex items-center gap-2 text-sm font-bold text-dark-green"><FaUser className="text-primary-green" aria-hidden="true" /> प्रोफ़ाइल</p>
                        <p className="text-sm text-gray-600">{kyc.fullName}</p>
                        <p className="text-sm text-gray-600">+91 {kyc.mobile}</p>
                        <p className="truncate text-sm text-gray-600">{kyc.email}</p>
                      </div>
                      {/* Statuses */}
                      <div className="rounded-2xl border border-primary-green/10 bg-cream-white/60 p-5">
                        <p className="mb-2 text-sm font-bold text-dark-green">स्थिति</p>
                        <p className="flex items-center justify-between text-sm"><span className="text-gray-500">KYC</span><span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-bold text-primary-green">स्वीकृत</span></p>
                        <p className="mt-1 flex items-center justify-between text-sm"><span className="text-gray-500">भुगतान</span><span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-bold text-primary-green">पूर्ण</span></p>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="mt-4 rounded-2xl border border-primary-green/10 bg-white p-5 shadow-sm">
                      <p className="mb-3 text-sm font-bold text-dark-green">निवेश सारांश</p>
                      <dl className="divide-y divide-gray-100 text-sm">
                        {[
                          ['योजना', `${plan?.icon} ${plan?.name}`],
                          ['राशि', formatINR(plan?.minAmount)],
                          ['अवधि', DURATION],
                          ['भुगतान विधि', payMethod.toUpperCase()],
                          ['लेन-देन आईडी', txnId],
                          ['निवेशक आईडी', 'PAL-INV-1254'],
                        ].map(([l, v]) => (
                          <div key={l} className="flex items-center justify-between gap-3 py-2"><dt className="text-gray-500">{l}</dt><dd className="text-right font-semibold text-dark-green">{v}</dd></div>
                        ))}
                      </dl>
                    </div>

                    {/* Actions */}
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <button type="button" onClick={() => navigate('/investor/dashboard')} className="btn btn-primary inline-flex items-center justify-center gap-2"><FaListUl aria-hidden="true" /> लेन-देन देखें</button>
                      <button type="button" onClick={downloadReceipt} className="btn btn-outline inline-flex items-center justify-center gap-2"><FaDownload aria-hidden="true" /> रसीद डाउनलोड</button>
                      <button type="button" onClick={() => navigate('/investor/dashboard')} className="btn btn-outline inline-flex items-center justify-center gap-2"><FaUser aria-hidden="true" /> प्रोफ़ाइल अपडेट</button>
                      <Link to="/contact" className="btn btn-outline inline-flex items-center justify-center gap-2"><FaHeadset aria-hidden="true" /> सहायता</Link>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            {step < 5 && (
              <div className="mt-8 flex items-center justify-between gap-3 border-t border-gray-100 pt-6">
                <button type="button" onClick={back} disabled={step === 0} className={`btn inline-flex items-center gap-2 border-2 ${step === 0 ? 'cursor-not-allowed border-gray-200 text-gray-300' : 'border-primary-green/30 text-primary-green hover:bg-primary-green/5'}`}>
                  <FaArrowLeft aria-hidden="true" /> पीछे
                </button>
                {step === 3 ? (
                  <button type="button" onClick={next} disabled={kycStage < 2} className={`btn inline-flex items-center gap-2 ${kycStage < 2 ? 'cursor-not-allowed bg-gray-200 text-gray-400' : 'btn-primary'}`}>
                    भुगतान पर जाएँ <FaArrowRight aria-hidden="true" />
                  </button>
                ) : step === 4 ? (
                  <button type="button" onClick={doPayment} disabled={verifying} className="btn btn-primary inline-flex items-center gap-2">{verifying ? <Spinner /> : <FaLock aria-hidden="true" />}{verifying ? 'सत्यापन…' : `${formatINR(plan?.minAmount)} भुगतान करें`}</button>
                ) : (
                  <button type="button" onClick={next} className="btn btn-primary inline-flex items-center gap-2">आगे बढ़ें <FaArrowRight aria-hidden="true" /></button>
                )}
              </div>
            )}
          </div>

          <p className="mx-auto mt-6 flex max-w-md items-center justify-center gap-2 text-center text-xs text-gray-400">
            <FaLock aria-hidden="true" /> डेमो वातावरण — सुरक्षित OTP, KYC एवं भुगतान अनुकरणित हैं।
          </p>
        </div>
      </div>
    </div>
  );
}
