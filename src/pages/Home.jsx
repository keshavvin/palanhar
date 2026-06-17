import Hero from '../components/Hero';
import TrustBar from '../components/home/TrustBar';
import RevenueCircles from '../components/home/RevenueCircles';
import FarmImpact from '../components/home/FarmImpact';
import DashboardPreview from '../components/home/DashboardPreview';
import HomeProducts from '../components/home/HomeProducts';
import ProductsList from '../components/home/ProductsList';
import WhyInvestMedia from '../components/home/WhyInvestMedia';
import Recognition from '../components/home/Recognition';
import TransparentModel from '../components/home/TransparentModel';
import RevenueModel from '../components/home/RevenueModel';
import InsuranceSection from '../components/home/InsuranceSection';
import ModelVideo from '../components/home/ModelVideo';
import NaariShaktiSection from '../components/home/NaariShaktiSection';
import PublicOpinion from '../components/home/PublicOpinion';
import AppDownload from '../components/home/AppDownload';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <RevenueCircles />
      <FarmImpact />
      <DashboardPreview />
      <HomeProducts />
      <ProductsList />
      <WhyInvestMedia />
      <TransparentModel />
      <RevenueModel />
      <InsuranceSection />
      <Recognition />
      <ModelVideo />
      <NaariShaktiSection />
      <PublicOpinion />
      <AppDownload />
    </>
  );
}
