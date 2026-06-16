import { useRef } from 'react';

export default function OtpInput({ value, onChange }) {
  const refs = useRef([]);

  const setDigits = (index, raw) => {
    const digits = raw.replace(/\D/g, '');
    if (!digits) return;
    const next = [...value];
    let cursor = index;
    for (const ch of digits.slice(0, 6 - index)) {
      next[cursor] = ch;
      cursor += 1;
    }
    onChange(next);
    const focusTo = Math.min(cursor, 5);
    if (refs.current[focusTo]) refs.current[focusTo].focus();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      const next = [...value];
      if (next[index]) {
        next[index] = '';
        onChange(next);
      } else if (index > 0) {
        next[index - 1] = '';
        onChange(next);
        if (refs.current[index - 1]) refs.current[index - 1].focus();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      if (refs.current[index - 1]) refs.current[index - 1].focus();
    } else if (e.key === 'ArrowRight' && index < 5) {
      if (refs.current[index + 1]) refs.current[index + 1].focus();
    }
  };

  return (
    <div className="flex gap-2 sm:gap-3" role="group" aria-label="6-डिजिट वन-टाइम पासवर्ड">
      {value.map((digit, i) => (
        <input
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          type="text"
          inputMode="numeric"
          autoComplete={i === 0 ? 'one-time-code' : 'off'}
          maxLength={6}
          value={digit}
          onChange={(e) => setDigits(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onFocus={(e) => e.target.select()}
          aria-label={`OTP डिजिट ${i + 1}`}
          className="h-12 w-10 rounded-xl border-2 border-gray-200 bg-gray-50 text-center text-xl font-bold text-dark-green transition-colors duration-200 focus:border-primary-green focus:bg-white focus:outline-none sm:h-14 sm:w-12"
        />
      ))}
    </div>
  );
}
