import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import InvestHero from '../components/invest/InvestHero';
import InvestPlans from '../components/invest/InvestPlans';
import DividendCalculator from '../components/invest/DividendCalculator';
import FinancialFlow from '../components/invest/FinancialFlow';
import GrowthRoadmap from '../components/invest/GrowthRoadmap';
import TrustCompliance from '../components/invest/TrustCompliance';
import CertificatePreview from '../components/invest/CertificatePreview';
import InvestFAQ from '../components/invest/InvestFAQ';

export default function InvestPage() {
  return (
    <>
      <InvestHero />
      <TrustCompliance />
      <InvestPlans />
      <DividendCalculator />
      <GrowthRoadmap />
      <FinancialFlow />
      <CertificatePreview />
      <InvestFAQ />

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-primary-green to-dark-green py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="mb-4 !text-white">Ready to Grow with Palanhar?</h2>
            <p className="mb-8 text-lg text-white/85">
              Complete your registration and KYC in minutes — your share
              certificate and investor dashboard are waiting.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/investor/register" className="btn btn-golden">
                Start Registration
              </Link>
              <Link
                to="/contact"
                className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary-green"
              >
                Talk to Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
