import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import QuickStats from '../components/QuickStats';
import Featured from '../components/Featured';
import Process from '../components/Process';
import Certifications from '../components/Certifications';
import InvestTeaser from '../components/InvestTeaser';
import GauSevaHighlight from '../components/GauSevaHighlight';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <QuickStats />
      <GauSevaHighlight />
      <About />
      <Featured />
      <WhyChooseUs />
      <InvestTeaser />
      <Products />
      <Services />
      <Process />
      <Certifications />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
