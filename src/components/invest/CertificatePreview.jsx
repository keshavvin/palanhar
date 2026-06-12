import { motion } from 'framer-motion';
import { currentInvestor, formatINR } from '../../data/investorData';

export default function CertificatePreview() {
  const cert = currentInvestor.certificates[0];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">Share Allocation</span>
            <h2 className="mb-4">A Numbered Certificate for Every Investment</h2>
            <p className="mb-4 text-lg text-gray-600">
              The moment your investment is approved, the system generates your
              Investor ID and a unique certificate number, recorded permanently in
              the company share register.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-golden" aria-hidden="true" />
                Investor ID — e.g. <span className="font-mono font-semibold text-dark-green">PAL-INV-0001</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-golden" aria-hidden="true" />
                Certificate No. — e.g. <span className="font-mono font-semibold text-dark-green">PAL-SHARE-2026-0001</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-golden" aria-hidden="true" />
                Downloadable anytime from your investor dashboard
              </li>
            </ul>
          </motion.div>

          {/* Mock certificate */}
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-lg border-4 border-double border-golden/70 bg-cream-white p-2 shadow-2xl"
          >
            <div className="rounded border border-primary-green/30 px-6 py-8 text-center sm:px-10">
              <p className="mb-1 text-3xl" aria-hidden="true">🌾</p>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                Palanhar Dairy &amp; Agricultural Farm Pvt. Ltd.
              </p>
              <h3 className="my-3 text-2xl sm:text-3xl">Investment Certificate</h3>
              <p className="mb-6 font-mono text-sm font-semibold tracking-wider text-golden">
                {cert.certificateNo}
              </p>
              <p className="mb-1 text-sm text-gray-600">This certifies that</p>
              <p className="mb-4 text-lg font-bold text-dark-green">{currentInvestor.name}</p>
              <div className="mx-auto mb-6 grid max-w-xs grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-gray-500">Shares Held</p>
                  <p className="font-bold text-dark-green">{cert.shares.toLocaleString('en-IN')}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-gray-500">Investment</p>
                  <p className="font-bold text-dark-green">{formatINR(cert.amount)}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-gray-500">Investor ID</p>
                  <p className="font-mono text-sm font-bold text-dark-green">{currentInvestor.investorId}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-gray-500">Issued On</p>
                  <p className="text-sm font-bold text-dark-green">{cert.issuedOn}</p>
                </div>
              </div>
              <div className="flex items-end justify-between border-t border-primary-green/20 pt-4">
                <p className="text-[11px] text-gray-500">Recorded in the Company Share Register</p>
                <div className="text-right">
                  <p className="font-display text-sm italic text-dark-green">Palanhar</p>
                  <p className="text-[10px] uppercase tracking-wide text-gray-500">Authorised Signatory</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
