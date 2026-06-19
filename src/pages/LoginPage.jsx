import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaArrowRight, FaCheckCircle, FaLock } from 'react-icons/fa';
import OtpInput from '../components/invest/registration/OtpInput';
import { Spinner } from '../components/invest/registration/FormFields';

export default function LoginPage() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [sending, setSending] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState('');

  const sendOtp = () => {
    if (!/^\d{10}$/.test(mobile)) {
      setError('कृपया एक मान्य 10-अंकों का मोबाइल नंबर दर्ज करें।');
      return;
    }
    setError('');
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setOtpSent(true);
    }, 600);
  };

  const verify = () => {
    if (otp.some((d) => d === '')) {
      setError('कृपया OTP के सभी 6 अंक दर्ज करें।');
      return;
    }
    setError('');
    setVerifying(true);
    setTimeout(() => navigate('/investor/dashboard'), 700);
  };

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-cream-white/40 py-14">
      <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
        <img src="/hero-banner-3.jpg" alt="" className="h-full w-full object-cover" draggable="false" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md px-4"
      >
        <div className="overflow-hidden rounded-2xl border border-primary-green/10 bg-white shadow-2xl">
          {/* Header */}
          <div className="flex flex-col items-center gap-2 bg-primary-green px-6 py-7 text-center text-white">
            <img src="/logo-palanhar.png" alt="" className="h-12 w-12 object-contain" draggable="false" />
            <h1 className="!text-white text-2xl font-bold">निवेशक लॉगिन</h1>
            <p className="text-sm text-white/85">मोबाइल नंबर एवं OTP से सुरक्षित लॉगिन करें</p>
          </div>

          {/* Body */}
          <div className="space-y-5 p-6 sm:p-8">
            {/* Mobile */}
            <div>
              <label htmlFor="login-mobile" className="mb-1.5 block text-sm font-semibold text-gray-700">
                मोबाइल नंबर
              </label>
              <div className={`flex items-stretch overflow-hidden rounded-xl border-2 bg-gray-50 transition-colors focus-within:bg-white ${error && !otpSent ? 'border-red-400' : 'border-gray-200 focus-within:border-primary-green'}`}>
                <span className="flex items-center gap-1.5 border-r-2 border-gray-200 bg-cream-white px-3 text-sm font-bold text-dark-green">
                  <FaMobileAlt aria-hidden="true" className="text-primary-green/70" /> +91
                </span>
                <input
                  id="login-mobile"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  placeholder="98765 43210"
                  value={mobile}
                  disabled={otpSent}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 focus:outline-none disabled:text-gray-500"
                />
              </div>
            </div>

            {!otpSent ? (
              <button type="button" onClick={sendOtp} className="btn btn-primary flex w-full items-center justify-center gap-2">
                {sending ? <Spinner /> : null}
                {sending ? 'OTP भेजा जा रहा है…' : 'OTP भेजें'}
              </button>
            ) : (
              <>
                <div className="rounded-xl border border-primary-green/15 bg-cream-white p-4">
                  <p className="mb-3 text-sm font-semibold text-gray-700">
                    <span className="text-dark-green">+91 {mobile}</span> पर भेजा गया 6 अंकों का OTP दर्ज करें
                  </p>
                  <OtpInput value={otp} onChange={setOtp} />
                  <p className="mt-2 text-xs text-gray-400">डेमो: कोई भी 6 अंक दर्ज करें</p>
                  <button
                    type="button"
                    onClick={() => { setOtpSent(false); setOtp(['', '', '', '', '', '']); setError(''); }}
                    className="mt-3 text-xs font-semibold text-primary-green hover:text-dark-green hover:underline"
                  >
                    नंबर बदलें
                  </button>
                </div>

                <button type="button" onClick={verify} className="btn btn-primary flex w-full items-center justify-center gap-2">
                  {verifying ? <Spinner /> : <FaCheckCircle aria-hidden="true" />}
                  {verifying ? 'लॉगिन हो रहा है…' : 'लॉगिन करें'}
                  {!verifying && <FaArrowRight aria-hidden="true" />}
                </button>
              </>
            )}

            {error && <p className="text-center text-sm text-red-500">{error}</p>}

            <p className="text-center text-sm text-gray-500">
              नए निवेशक हैं?{' '}
              <Link to="/invest/start" className="font-semibold text-primary-green hover:underline">
                अभी रजिस्टर करें
              </Link>
            </p>
          </div>

          <p className="flex items-center justify-center gap-2 border-t border-gray-100 bg-cream-white/60 px-6 py-3 text-center text-xs text-gray-400">
            <FaLock aria-hidden="true" /> डेमो वातावरण — सभी सत्यापन अनुकरणित हैं।
          </p>
        </div>
      </motion.div>
    </section>
  );
}
