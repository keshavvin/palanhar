import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaFileExcel, FaUserShield, FaRegCalendarAlt } from 'react-icons/fa';

function ExportButton({ icon: Icon, label }) {
  const [status, setStatus] = useState('idle'); // idle | exporting | done
  const timersRef = useRef([]);

  useEffect(() => {
    const timers = timersRef.current;
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleExport = () => {
    if (status !== 'idle') return;
    setStatus('exporting');
    timersRef.current.push(
      setTimeout(() => {
        setStatus('done');
        timersRef.current.push(setTimeout(() => setStatus('idle'), 2500));
      }, 600)
    );
  };

  return (
    <button
      type="button"
      onClick={handleExport}
      disabled={status === 'exporting'}
      aria-live="polite"
      className="btn btn-outline min-h-11 px-4 py-2 text-sm inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-wait"
    >
      {status === 'exporting' ? (
        <>
          <span
            aria-hidden="true"
            className="h-4 w-4 rounded-full border-2 border-primary-green border-t-transparent animate-spin"
          />
          एक्सपोर्टिंग…
        </>
      ) : status === 'done' ? (
        <span className="font-semibold">एक्सपोर्टेड ✓</span>
      ) : (
        <>
          <Icon aria-hidden="true" />
          {label}
        </>
      )}
    </button>
  );
}

export default function AdminHeader() {
  const today = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
    >
      <div>
        <span className="section-eyebrow">गवर्नेंस &amp; फाइनेंशियल कंट्रोल</span>
        <h1 className="text-3xl md:text-4xl">एडमिन डैशबोर्ड</h1>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <span className="badge-status bg-golden/20 text-amber-800 border border-golden/50">
            <FaUserShield aria-hidden="true" />
            CMD / सुपर एडमिन
          </span>
          <span className="inline-flex items-center gap-2 text-sm text-gray-600">
            <FaRegCalendarAlt aria-hidden="true" className="text-primary-green" />
            {today}
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <ExportButton icon={FaFilePdf} label="एक्सपोर्ट PDF" />
        <ExportButton icon={FaFileExcel} label="एक्सपोर्ट एक्सेल" />
      </div>
    </motion.div>
  );
}
