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
            <h2 className="mb-4 !text-white">रेडी टू जॉइन गौ सेवा?</h2>
            <p className="mb-8 text-lg text-white/85">
              कम्प्लीट योर रजिस्ट्रेशन एंड KYC इन मिनट्स — योर सेवा सपोर्ट्स
              द हर्ड, एंड योर शेयर सर्टिफिकेट एंड डैशबोर्ड आर वेटिंग.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/investor/register" className="btn btn-golden">
                स्टार्ट रजिस्ट्रेशन
              </Link>
              <Link
                to="/contact"
                className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary-green"
              >
                टॉक टू अस
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
