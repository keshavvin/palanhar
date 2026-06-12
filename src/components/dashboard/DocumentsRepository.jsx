import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaDownload, FaFilePdf } from 'react-icons/fa';
import Spinner from './Spinner';
import { investorDocuments } from '../../data/investorData';

const CATEGORY_ORDER = ['KYC', 'Certificate', 'Statement', 'Financial Report'];

const STATUS_STYLES = {
  Verified: 'bg-primary-green/10 text-primary-green',
  Issued: 'bg-golden/15 text-amber-600',
  Available: 'bg-light-green/25 text-dark-green',
};

export default function DocumentsRepository() {
  const [downloads, setDownloads] = useState({}); // id -> 'loading' | 'done'

  const handleDownload = (id) => {
    if (downloads[id]) return;
    setDownloads((state) => ({ ...state, [id]: 'loading' }));
    setTimeout(() => {
      setDownloads((state) => ({ ...state, [id]: 'done' }));
    }, 600);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md border border-gray-100 p-5 sm:p-6 h-full"
      aria-label="Documents repository"
    >
      <h2 className="text-xl md:text-2xl">Documents</h2>
      <p className="text-sm text-gray-500 mt-1 mb-4">
        Annual reports, audited balance sheet and P&amp;L are published here every year.
      </p>

      <div className="space-y-5">
        {CATEGORY_ORDER.map((category) => {
          const docs = investorDocuments.filter((doc) => doc.category === category);
          if (docs.length === 0) return null;
          return (
            <div key={category}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 font-sans mb-1">
                {category}
              </h3>
              <ul className="divide-y divide-gray-100">
                {docs.map((doc) => {
                  const state = downloads[doc.id];
                  return (
                    <li key={doc.id} className="flex items-center gap-3 py-2.5">
                      <FaFilePdf className="text-red-500 text-lg shrink-0" aria-hidden="true" />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-gray-800 truncate">{doc.name}</p>
                        <p className="text-xs text-gray-500">{doc.date}</p>
                      </div>
                      <span
                        className={`badge-status shrink-0 hidden sm:inline-flex ${STATUS_STYLES[doc.status] ?? 'bg-gray-100 text-gray-600'}`}
                      >
                        {doc.status}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleDownload(doc.id)}
                        aria-label={
                          state === 'done' ? `${doc.name} downloaded` : `Download ${doc.name}`
                        }
                        disabled={state === 'loading'}
                        className="w-11 h-11 shrink-0 rounded-full flex items-center justify-center text-primary-green hover:bg-primary-green/10 border border-transparent hover:border-primary-green/20 transition-colors disabled:cursor-wait"
                      >
                        {state === 'loading' ? (
                          <Spinner />
                        ) : state === 'done' ? (
                          <FaCheck aria-hidden="true" />
                        ) : (
                          <FaDownload aria-hidden="true" />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
