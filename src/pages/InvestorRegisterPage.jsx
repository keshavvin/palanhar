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
  data: {
    mobile: '',
    otpSent: false,
    otp: ['', '', '', '', '', ''],
    mobileVerified: false,
    email: '',
    emailVerified: false,
    fullName: '',
    dob: '',
    address: '',
    city: '',
    state: '',
    pin: '',
    pan: '',
    panFile: '',
    aadhaar: '',
    aadhaarFile: '',
    accountHolder: '',
    accountNumber: '',
    confirmAccount: '',
    ifsc: '',
    bankName: '',
    nomineeName: '',
    nomineeRelation: '',
    nomineeMobile: '',
    consent: false,
  },
};

function validateStep(step, d) {
  const errors = {};
  switch (step) {
    case 1:
      if (!/^\d{10}$/.test(d.mobile)) errors.mobile = 'Enter a valid 10-digit mobile number.';
      else if (!d.otpSent) errors.mobile = 'Tap “Send OTP” to verify this number.';
      else if (!d.mobileVerified) errors.otp = 'Enter all 6 digits of the OTP to verify.';
      break;
    case 2:
      if (!EMAIL_RE.test(d.email)) errors.email = 'Enter a valid email address.';
      else if (!d.emailVerified) errors.email = 'Tap “Verify” to confirm your email.';
      break;
    case 3:
      if (!d.fullName.trim()) errors.fullName = 'Full name is required.';
      if (!d.dob) errors.dob = 'Date of birth is required.';
      if (!d.address.trim()) errors.address = 'Address is required.';
      if (!d.city.trim()) errors.city = 'City / village is required.';
      if (!d.state) errors.state = 'Please select your state.';
      if (!/^\d{6}$/.test(d.pin)) errors.pin = 'Enter a valid 6-digit PIN code.';
      break;
    case 4:
      if (!PAN_RE.test(d.pan)) errors.pan = 'Enter a valid PAN (format: ABCDE1234F).';
      if (!d.panFile) errors.panFile = 'Please upload a copy of your PAN card.';
      break;
    case 5:
      if (d.aadhaar.replace(/\s/g, '').length !== 12)
        errors.aadhaar = 'Enter your 12-digit Aadhaar number.';
      if (!d.aadhaarFile) errors.aadhaarFile = 'Please upload a copy of your Aadhaar card.';
      break;
    case 6:
      if (!d.accountHolder.trim()) errors.accountHolder = 'Account holder name is required.';
      if (!/^\d{9,18}$/.test(d.accountNumber))
        errors.accountNumber = 'Enter a valid account number (9–18 digits).';
      if (d.confirmAccount !== d.accountNumber || !d.confirmAccount)
        errors.confirmAccount = 'Account numbers do not match.';
      if (!IFSC_RE.test(d.ifsc)) errors.ifsc = 'Enter a valid IFSC (e.g. SBIN0001234).';
      if (!d.bankName.trim()) errors.bankName = 'Bank name is required.';
      break;
    case 7:
      if (!d.nomineeName.trim()) errors.nomineeName = 'Nominee name is required.';
      if (!d.nomineeRelation) errors.nomineeRelation = 'Please select the relation.';
      if (!/^\d{10}$/.test(d.nomineeMobile))
        errors.nomineeMobile = 'Enter a valid 10-digit mobile number.';
      break;
    case 8:
      if (!d.consent) errors.consent = 'Please accept the declaration to submit your KYC.';
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
            <span className="section-eyebrow">Investor Onboarding</span>
            <h1 className="mb-3">Registration &amp; KYC</h1>
            <p className="text-gray-600">
              Eight simple steps to become a registered Palanhar investor — verified, compliant and
              dividend-ready.
            </p>
            {selectedPlan && !submitted && (
              <p className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-golden/40 bg-white px-4 py-2 text-sm shadow-sm">
                <span aria-hidden="true">{selectedPlan.icon}</span>
                <span className="font-semibold text-dark-green">{selectedPlan.name}</span>
                <span className="text-gray-400">·</span>
                <span className="text-gray-500">from {formatINR(selectedPlan.minAmount)}</span>
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
                        Step {step} of {TOTAL_STEPS}
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
                    <FaArrowLeft aria-hidden="true" /> Back
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
                          <Spinner light={false} /> Submitting…
                        </>
                      ) : (
                        <>
                          <FaLock aria-hidden="true" /> Submit KYC
                        </>
                      )
                    ) : (
                      <>
                        Continue <FaArrowRight aria-hidden="true" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          <p className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 text-center text-xs text-gray-400">
            <FaLock aria-hidden="true" className="shrink-0" />
            Demo environment — no real data is stored or transmitted. All verifications are
            simulated.
          </p>
        </div>
      </section>
    </div>
  );
}
