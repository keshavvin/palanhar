import { motion } from 'framer-motion';
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
// import NewsLetterCTA from '../components/NewsLetterCTA';
// import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Quick Stats */}
      <QuickStats />

      {/* 3. About Section */}
      <About />

      {/* 4. Featured Products */}
      <Featured />

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Complete Products */}
      <Products />

      {/* 7. Services */}
      <Services />

      {/* 8. Our Process */}
      <Process />

      {/* 9. Certifications & Awards */}
      <Certifications />

      {/* 10. Testimonials */}
      <Testimonials />

      {/* 11. Newsletter CTA */}
      {/* <NewsLetterCTA /> */}

      {/* 12. Final Contact CTA */}
      {/* <FinalCTA /> */}
    </>
  );
}
