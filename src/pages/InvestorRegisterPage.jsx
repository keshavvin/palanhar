import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaLock } from 'react-icons/fa';
import { registrationSteps, investmentPlans, formatINR } from '../data/investorData';
import Stepper from '../components/invest/registration/Stepper';
import { Spinner } from '../components/invest/registration/FormFields';
import StepMobile from '../components/invest/registration/StepMobile';
import StepEmail from '../components/invest/registration/StepEmail';
import StepProfile from '../components/invest/registration/StepProfile';
import { StepPan, StepAadhaar } from '../components/invest/registration/StepDocuments';
import StepBank from '../components/invest/registration/StepBank';
import StepNominee from '../components/invest/registration/StepNominee';
import StepReview from '../components/invest/registration/StepReview';
import SuccessPanel from '../components/invest/registration/SuccessPanel';

const DEMO_INVESTOR_ID = 'PAL-INV-1254';
const DEMO_CERTIFICATE_NO = 'PAL-SHARE-2026-1254';
const TOTAL_STEPS = registrationSteps.length;

const PAN_RE = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
const IFSC_RE = /^[A-Z]{4}0[A-Z0-9]{6}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialWizard = {
  step: 1,
  maxStep: 1,
  direction: 1,
  errors: {},
  submitting: false,
  submitted: false,
  approval: 0, // index into Pending -> Under Review -> Approved
  approving: false,
  // Demo environment — every field is pre-filled with sample data (incl. a demo
  // OTP and pre-verified mobile/email) so the full flow can be shown end-to-end.
  data: {
    mobile: '9876543210',
    otpSent: true,
    otp: ['1', '2', '3', '4', '5', '6'],
    mobileVerified: true,
    email: 'rajesh.kumar@example.com',
    emailVerified: true,
    fullName: 'राजेश कुमार',
    dob: '1990-05-15',
    address: 'ग्राम रामपुर, पोस्ट रामपुर, तह. गोहाना',
    city: 'सतना',
    state: 'मध्य प्रदेश',
    pin: '485001',
    pan: 'ABCDE1234F',
    panFile: 'pan-card-demo.jpg',
    aadhaar: '1234 5678 9012',
    aadhaarFile: 'aadhaar-card-demo.jpg',
    accountHolder: 'राजेश कुमार',
    accountNumber: '123456789012',
    confirmAccount: '123456789012',
    ifsc: 'SBIN0001234',
    bankName: 'भारतीय स्टेट बैंक',
    nomineeName: 'सुनीता देवी',
    nomineeRelation: 'जीवनसाथी',
    nomineeMobile: '9812345678',
    consent: true,
  },
};

function validateStep(step, d) {
  const errors = {};
  switch (step) {
    case 1:
      if (!/^\d{10}$/.test(d.mobile)) errors.mobile = 'एक वैध 10-अंकों का मोबाइल नंबर दर्ज करें।';
      else if (!d.otpSent) errors.mobile = 'इस नंबर को सत्यापित करने के लिए “Send OTP” पर टैप करें।';
      else if (!d.mobileVerified) errors.otp = 'सत्यापित करने के लिए OTP के सभी 6 अंक दर्ज करें।';
      break;
    case 2:
      if (!EMAIL_RE.test(d.email)) errors.email = 'एक वैध ईमेल पता दर्ज करें।';
      else if (!d.emailVerified) errors.email = 'अपना ईमेल पुष्ट करने के लिए “Verify” पर टैप करें।';
      break;
    case 3:
      if (!d.fullName.trim()) errors.fullName = 'पूरा नाम आवश्यक है।';
      if (!d.dob) errors.dob = 'जन्म तिथि आवश्यक है।';
      if (!d.address.trim()) errors.address = 'पता आवश्यक है।';
      if (!d.city.trim()) errors.city = 'शहर / गाँव आवश्यक है।';
      if (!d.state) errors.state = 'कृपया अपना राज्य चुनें।';
      if (!/^\d{6}$/.test(d.pin)) errors.pin = 'एक वैध 6-अंकों का PIN कोड दर्ज करें।';
      break;
    case 4:
      if (!PAN_RE.test(d.pan)) errors.pan = 'एक वैध PAN दर्ज करें (प्रारूप: ABCDE1234F)।';
      if (!d.panFile) errors.panFile = 'कृपया अपने PAN कार्ड की एक प्रति अपलोड करें।';
      break;
    case 5:
      if (d.aadhaar.replace(/\s/g, '').length !== 12)
        errors.aadhaar = 'अपना 12-अंकों का Aadhaar नंबर दर्ज करें।';
      if (!d.aadhaarFile) errors.aadhaarFile = 'कृपया अपने Aadhaar कार्ड की एक प्रति अपलोड करें।';
      break;
    case 6:
      if (!d.accountHolder.trim()) errors.accountHolder = 'खाताधारक का नाम आवश्यक है।';
      if (!/^\d{9,18}$/.test(d.accountNumber))
        errors.accountNumber = 'एक वैध खाता नंबर दर्ज करें (9–18 अंक)।';
      if (d.confirmAccount !== d.accountNumber || !d.confirmAccount)
        errors.confirmAccount = 'खाता नंबर मेल नहीं खाते।';
      if (!IFSC_RE.test(d.ifsc)) errors.ifsc = 'एक वैध IFSC दर्ज करें (जैसे SBIN0001234)।';
      if (!d.bankName.trim()) errors.bankName = 'बैंक का नाम आवश्यक है।';
      break;
    case 7:
      if (!d.nomineeName.trim()) errors.nomineeName = 'नामांकित व्यक्ति का नाम आवश्यक है।';
      if (!d.nomineeRelation) errors.nomineeRelation = 'कृपया रिश्ता चुनें।';
      if (!/^\d{10}$/.test(d.nomineeMobile))
        errors.nomineeMobile = 'एक वैध 10-अंकों का मोबाइल नंबर दर्ज करें।';
      break;
    case 8:
      if (!d.consent) errors.consent = 'अपना KYC जमा करने के लिए कृपया घोषणा स्वीकार करें।';
      break;
    default:
      break;
  }
  return errors;
}

const stepVariants = {
  enter: (dir) => ({ opacity: 0, x: dir >= 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir >= 0 ? -48 : 48 }),
};

export default function InvestorRegisterPage() {
  const [wizard, setWizard] = useState(initialWizard);
  const [searchParams] = useSearchParams();
  const cardRef = useRef(null);
  const mountedRef = useRef(false);

  const { step, maxStep, direction, errors, submitting, submitted, approval, approving, data } =
    wizard;
  const selectedPlan = investmentPlans.find((p) => p.id === searchParams.get('plan'));

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    if (submitted) window.scrollTo({ top: 0, behavior: 'smooth' });
    else if (cardRef.current) cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [step, submitted]);

  const update = (patch) =>
    setWizard((w) => {
      const nextErrors = { ...w.errors };
      Object.keys(patch).forEach((key) => delete nextErrors[key]);
      return { ...w, data: { ...w.data, ...patch }, errors: nextErrors };
    });

  const setErrors = (patch) => setWizard((w) => ({ ...w, errors: { ...w.errors, ...patch } }));

  const goToStep = (target) =>
    setWizard((w) =>
      target >= 1 && target <= w.maxStep && target !== w.step
        ? { ...w, step: target, direction: target > w.step ? 1 : -1, errors: {} }
        : w,
    );

  const handleBack = () =>
    setWizard((w) =>
      w.step > 1 ? { ...w, step: w.step - 1, direction: -1, errors: {} } : w,
    );

  const handlePrimary = () => {
    const stepErrors = validateStep(step, data);
    if (Object.keys(stepErrors).length > 0) {
      setWizard((w) => ({ ...w, errors: stepErrors }));
      return;
    }
    if (step === TOTAL_STEPS) {
      setWizard((w) => ({ ...w, submitting: true, errors: {} }));
      setTimeout(() => setWizard((w) => ({ ...w, submitting: false, submitted: true })), 800);
      return;
    }
    setWizard((w) => ({
      ...w,
      step: w.step + 1,
      maxStep: Math.max(w.maxStep, w.step + 1),
      direction: 1,
      errors: {},
    }));
  };

  const simulateApproval = () => {
    setWizard((w) => (w.approving ? w : { ...w, approving: true }));
    setTimeout(() => setWizard((w) => ({ ...w, approval: 1 })), 700);
    setTimeout(() => setWizard((w) => ({ ...w, approval: 2, approving: false })), 1600);
  };

  const stepProps = { data, update, errors, setErrors };
  const stepContent = {
    1: <StepMobile {...stepProps} />,
    2: <StepEmail {...stepProps} />,
    3: <StepProfile {...stepProps} />,
    4: <StepPan {...stepProps} />,
    5: <StepAadhaar {...stepProps} />,
    6: <StepBank {...stepProps} />,
    7: <StepNominee {...stepProps} />,
    8: <StepReview {...stepProps} onEdit={goToStep} />,
  };
  const currentStep = registrationSteps[step - 1];

  return (
    <div className="min-h-screen bg-cream-white/40">
      <section className="py-10 md:py-14">
        <div className="container-custom">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-8 max-w-2xl text-center md:mb-12"
          >
            <span className="section-eyebrow">गौ सेवा से जुड़ें</span>
            <h1 className="mb-3">पंजीकरण &amp; KYC</h1>
            <p className="text-gray-600">
              एक पंजीकृत पालनहार निवेशक के रूप में गौ सेवा से जुड़ने के आठ सरल चरण — सत्यापित,
              अनुपालन के अनुरूप और लाभांश के लिए तैयार।
            </p>
            {selectedPlan && !submitted && (
              <p className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-golden/40 bg-white px-4 py-2 text-sm shadow-sm">
                <span aria-hidden="true">{selectedPlan.icon}</span>
                <span className="font-semibold text-dark-green">{selectedPlan.name}</span>
                <span className="text-gray-400">·</span>
                <span className="text-gray-500">{formatINR(selectedPlan.minAmount)} से</span>
              </p>
            )}
          </motion.div>

          {submitted ? (
            <SuccessPanel
              investorId={DEMO_INVESTOR_ID}
              certificateNo={DEMO_CERTIFICATE_NO}
              stage={approval}
              approving={approving}
              onSimulate={simulateApproval}
            />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[300px_1fr] lg:gap-8"
            >
              <div className="min-w-0">
                <Stepper step={step} maxStep={maxStep} onSelect={goToStep} />
              </div>

              {/* Step card */}
              <div
                ref={cardRef}
                className="min-w-0 scroll-mt-24 rounded-2xl border border-primary-green/10 bg-white p-5 shadow-xl sm:p-8"
              >
                <AnimatePresence mode="wait" custom={direction} initial={false}>
                  <motion.div
                    key={step}
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <div className="mb-6 border-b border-gray-100 pb-5">
                      <p className="text-xs font-bold uppercase tracking-widest text-golden">
                        चरण {step} / {TOTAL_STEPS}
                      </p>
                      <h2 className="mt-1 text-xl sm:text-2xl">{currentStep.title}</h2>
                      <p className="mt-1 text-sm text-gray-500">{currentStep.desc}</p>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} noValidate>
                      {stepContent[step]}
                    </form>
                  </motion.div>
                </AnimatePresence>

                {/* Controls */}
                <div className="mt-8 flex flex-col-reverse gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={step === 1 || submitting}
                    className={`btn inline-flex min-h-11 items-center justify-center gap-2 border-2 ${
                      step === 1
                        ? 'cursor-not-allowed border-gray-200 text-gray-300'
                        : 'border-primary-green/30 text-primary-green hover:border-primary-green hover:bg-primary-green/5'
                    }`}
                  >
                    <FaArrowLeft aria-hidden="true" /> पीछे
                  </button>
                  <button
                    type="button"
                    onClick={handlePrimary}
                    disabled={submitting}
                    className={`inline-flex min-h-11 items-center justify-center gap-2 ${
                      step === TOTAL_STEPS ? 'btn btn-golden' : 'btn btn-primary'
                    } ${submitting ? 'opacity-80' : ''}`}
                  >
                    {step === TOTAL_STEPS ? (
                      submitting ? (
                        <>
                          <Spinner light={false} /> जमा किया जा रहा है…
                        </>
                      ) : (
                        <>
                          <FaLock aria-hidden="true" /> KYC जमा करें
                        </>
                      )
                    ) : (
                      <>
                        आगे बढ़ें <FaArrowRight aria-hidden="true" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          <p className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 text-center text-xs text-gray-400">
            <FaLock aria-hidden="true" className="shrink-0" />
            डेमो वातावरण — कोई वास्तविक डेटा संग्रहीत या प्रेषित नहीं किया जाता। सभी सत्यापन
            अनुकरणित हैं।
          </p>
        </div>
      </section>
    </div>
  );
}
