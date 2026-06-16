import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BrandLoader from './components/BrandLoader';
import Home from './pages/Home';
import './App.css';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const InvestPage = lazy(() => import('./pages/InvestPage'));
const InvestorRegisterPage = lazy(() => import('./pages/InvestorRegisterPage'));
const InvestorDashboardPage = lazy(() => import('./pages/InvestorDashboardPage'));
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage'));
const CowSevaPage = lazy(() => import('./pages/CowSevaPage'));
const EcosystemPage = lazy(() => import('./pages/EcosystemPage'));
const DivisionsPage = lazy(() => import('./pages/DivisionsPage'));
const DivisionPage = lazy(() => import('./pages/DivisionPage'));
const AppPortalPage = lazy(() => import('./pages/AppPortalPage'));
const VedicConsultantPage = lazy(() => import('./pages/VedicConsultantPage'));
const DeckPage = lazy(() => import('./pages/DeckPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <BrandLoader size={110} label="लोडिंग पेज" showWordmark />
    </div>
  );
}

const SPLASH_DURATION_MS = 3000;

function SplashScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = '';
    }, SPLASH_DURATION_MS);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-cream-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <BrandLoader size={120} label="लोडिंग पालनहार" showWordmark />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gau-seva" element={<CowSevaPage />} />
            <Route path="/ecosystem" element={<EcosystemPage />} />
            <Route path="/divisions" element={<DivisionsPage />} />
            <Route path="/divisions/:slug" element={<DivisionPage />} />
            <Route path="/app" element={<AppPortalPage />} />
            <Route path="/vedic-consultant" element={<VedicConsultantPage />} />
            <Route path="/deck" element={<DeckPage />} />
            <Route path="/cow-seva" element={<Navigate to="/gau-seva" replace />} />
            <Route path="/invest" element={<InvestPage />} />
            <Route path="/investor/register" element={<InvestorRegisterPage />} />
            <Route path="/investor/dashboard" element={<InvestorDashboardPage />} />
            <Route path="/admin" element={<AdminDashboardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SplashScreen />
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
