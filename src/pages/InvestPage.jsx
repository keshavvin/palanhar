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
            <h2 className="mb-4 !text-white">गौ सेवा से जुड़ने के लिए तैयार?</h2>
            <p className="mb-8 text-lg text-white/85">
              कुछ ही मिनटों में अपना पंजीकरण और KYC पूरा करें — आपकी सेवा
              गोवंश का सहारा बनती है, और आपका शेयर प्रमाणपत्र एवं डैशबोर्ड आपका इंतज़ार कर रहे हैं।
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/invest/start" className="btn btn-golden">
                पंजीकरण शुरू करें
              </Link>
              <Link
                to="/contact"
                className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary-green"
              >
                हमसे बात करें
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
