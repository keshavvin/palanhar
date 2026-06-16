import { FaCheck } from 'react-icons/fa';
import { registrationSteps } from '../../../data/investorData';

// Tailwind needs static class names — one width per completed-step count (0..8).
const PROGRESS_WIDTHS = [
  'w-0',
  'w-[12.5%]',
  'w-[25%]',
  'w-[37.5%]',
  'w-[50%]',
  'w-[62.5%]',
  'w-[75%]',
  'w-[87.5%]',
  'w-full',
];

function nodeClasses(state) {
  if (state === 'done') return 'bg-primary-green text-white';
  if (state === 'active') return 'bg-golden text-dark-green ring-4 ring-golden/30';
  return 'border-2 border-gray-300 bg-white text-gray-400';
}

export default function Stepper({ step, maxStep, onSelect }) {
  const total = registrationSteps.length;
  const current = registrationSteps[step - 1];
  const progressPct = Math.round(((step - 1) / total) * 100);

  const stateOf = (id) => (id < step ? 'done' : id === step ? 'active' : 'upcoming');
  const canJump = (id) => id !== step && id <= maxStep;

  return (
    <div>
      {/* ---- Mobile: label + progress bar + scrollable pills ---- */}
      <div className="lg:hidden">
        <div className="mb-2 flex items-end justify-between gap-3">
          <p className="text-sm font-semibold text-dark-green">
            चरण {step} / {total}
            <span className="text-gray-500"> — {current.title}</span>
          </p>
          <p className="text-xs font-bold text-golden">{progressPct}%</p>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-primary-green/10" aria-hidden="true">
          <div
            className={`h-full rounded-full bg-gradient-to-r from-primary-green to-golden transition-all duration-500 ${PROGRESS_WIDTHS[step - 1]}`}
          />
        </div>
        <nav aria-label="पंजीकरण चरण" className="-mx-1 mt-3 overflow-x-auto px-1 pb-1">
          <ol className="flex w-max gap-2">
            {registrationSteps.map((s) => {
              const state = stateOf(s.id);
              return (
                <li key={s.id} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => canJump(s.id) && onSelect(s.id)}
                    disabled={!canJump(s.id)}
                    aria-current={s.id === step ? 'step' : undefined}
                    aria-label={`चरण ${s.id}: ${s.title}${state === 'done' ? ' (पूर्ण)' : ''}`}
                    className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold transition-colors duration-200 ${nodeClasses(state)} ${
                      canJump(s.id) ? 'cursor-pointer' : 'cursor-default'
                    }`}
                  >
                    {state === 'done' ? <FaCheck aria-hidden="true" /> : s.id}
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>

      {/* ---- Desktop: vertical sidebar ---- */}
      <nav aria-label="पंजीकरण चरण" className="hidden lg:block">
        <div className="rounded-2xl border border-primary-green/10 bg-white p-6 shadow-sm">
          <div className="mb-1 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">आपकी प्रगति</p>
            <p className="text-sm font-bold text-golden">{progressPct}%</p>
          </div>
          <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-primary-green/10" aria-hidden="true">
            <div
              className={`h-full rounded-full bg-gradient-to-r from-primary-green to-golden transition-all duration-500 ${PROGRESS_WIDTHS[step - 1]}`}
            />
          </div>
          <ol>
            {registrationSteps.map((s, idx) => {
              const state = stateOf(s.id);
              const isLast = idx === total - 1;
              return (
                <li key={s.id} className={`relative ${isLast ? '' : 'pb-6'}`}>
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className={`absolute top-10 left-5 h-[calc(100%-2.5rem)] w-0.5 ${
                        state === 'done' ? 'bg-primary-green/60' : 'bg-gray-200'
                      }`}
                    />
                  )}
                  <button
                    type="button"
                    onClick={() => canJump(s.id) && onSelect(s.id)}
                    disabled={!canJump(s.id)}
                    aria-current={s.id === step ? 'step' : undefined}
                    className={`group flex w-full items-start gap-3 text-left ${
                      canJump(s.id) ? 'cursor-pointer' : 'cursor-default'
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-200 ${nodeClasses(state)}`}
                      aria-hidden="true"
                    >
                      {state === 'done' ? <FaCheck /> : s.id}
                    </span>
                    <span className="min-w-0 pt-0.5">
                      <span
                        className={`block text-sm font-semibold transition-colors ${
                          state === 'active'
                            ? 'text-dark-green'
                            : state === 'done'
                              ? 'text-primary-green group-hover:text-dark-green'
                              : 'text-gray-400'
                        }`}
                      >
                        {s.title}
                      </span>
                      <span className="block text-xs text-gray-400">{s.desc}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </div>
  );
}
