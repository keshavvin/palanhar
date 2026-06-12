import { useState } from 'react';
import { FaCheckCircle, FaMobileAlt } from 'react-icons/fa';
import OtpInput from './OtpInput';
import { FieldError, Spinner } from './FormFields';

export default function StepMobile({ data, update, errors, setErrors }) {
  const [sending, setSending] = useState(false);
  const [resending, setResending] = useState(false);

  const sendOtp = (isResend = false) => {
    if (!/^\d{10}$/.test(data.mobile)) {
      setErrors({ mobile: 'Enter a valid 10-digit mobile number.' });
      return;
    }
    const setBusy = isResend ? setResending : setSending;
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      // Re-patching `mobile` clears any lingering "tap Send OTP" validation error.
      update({ mobile: data.mobile, otpSent: true, otp: ['', '', '', '', '', ''], mobileVerified: false });
    }, 600);
  };

  const handleOtp = (otp) => {
    update({ otp, mobileVerified: otp.every((d) => d !== '') });
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="reg-mobile" className="mb-1.5 block text-sm font-semibold text-gray-700">
          Mobile Number
        </label>
        <div className="flex flex-wrap items-stretch gap-3">
          <div
            className={`flex min-w-0 flex-1 items-stretch overflow-hidden rounded-xl border-2 bg-gray-50 transition-colors duration-300 focus-within:bg-white ${
              errors.mobile ? 'border-red-400' : 'border-gray-200 focus-within:border-primary-green'
            }`}
          >
            <span className="flex items-center gap-1.5 border-r-2 border-gray-200 bg-cream-white px-3 text-sm font-bold text-dark-green">
              <FaMobileAlt aria-hidden="true" className="text-primary-green/70" />
              +91
            </span>
            <input
              id="reg-mobile"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="98765 43210"
              value={data.mobile}
              aria-invalid={Boolean(errors.mobile)}
              aria-describedby={errors.mobile ? 'reg-mobile-error' : undefined}
              onChange={(e) =>
                update({
                  mobile: e.target.value.replace(/\D/g, '').slice(0, 10),
                  otpSent: false,
                  otp: ['', '', '', '', '', ''],
                  mobileVerified: false,
                })
              }
              className="min-w-0 flex-1 bg-transparent px-4 py-3 focus:outline-none"
            />
          </div>
          {!data.otpSent && (
            <button
              type="button"
              onClick={() => sendOtp(false)}
              className="btn btn-primary inline-flex min-h-11 items-center justify-center gap-2"
            >
              {sending && <Spinner />}
              {sending ? 'Sending…' : 'Send OTP'}
            </button>
          )}
        </div>
        <FieldError id="reg-mobile-error">{errors.mobile}</FieldError>
      </div>

      {data.otpSent && (
        <div className="rounded-xl border border-primary-green/15 bg-cream-white p-4 sm:p-5">
          <p className="mb-3 text-sm font-semibold text-gray-700">
            Enter the 6-digit OTP sent to <span className="text-dark-green">+91 {data.mobile}</span>
          </p>
          <OtpInput value={data.otp} onChange={handleOtp} />
          <p className="mt-2 text-xs text-gray-400">Demo: enter any 6 digits</p>
          <FieldError id="reg-otp-error">{errors.otp}</FieldError>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
            {data.mobileVerified ? (
              <span className="badge-status min-h-7 bg-green-100 text-primary-green">
                <FaCheckCircle aria-hidden="true" />
                Mobile number verified
              </span>
            ) : (
              <button
                type="button"
                onClick={() => sendOtp(true)}
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary-green underline-offset-2 hover:text-dark-green hover:underline"
              >
                {resending && <Spinner light={false} />}
                {resending ? 'Resending…' : 'Resend OTP'}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
