import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHeadset, FaStore, FaHeartbeat, FaBook, FaGift, FaThLarge, FaArrowLeft } from 'react-icons/fa';
import { FaCow } from 'react-icons/fa6';
import FarmerSupport from '../components/app/FarmerSupport';
import MarketLinkage from '../components/app/MarketLinkage';
import DairyManagement from '../components/app/DairyManagement';
import HealthNutrition from '../components/app/HealthNutrition';
import LearningTraining from '../components/app/LearningTraining';
import SchemesBenefits from '../components/app/SchemesBenefits';

const FEATURES = [
  { key: 'support', label: 'किसान सहायता', desc: 'सवाल पूछें, टिकट बनाएँ', icon: FaHeadset, Component: FarmerSupport },
  { key: 'market', label: 'बाज़ार संपर्क', desc: 'खरीदें / बेचें', icon: FaStore, Component: MarketLinkage },
  { key: 'dairy', label: 'डेयरी प्रबंधन', desc: 'गाय व दूध रिकॉर्ड', icon: FaCow, Component: DairyManagement },
  { key: 'health', label: 'स्वास्थ्य व पोषण', desc: 'उत्पाद व ऑर्डर', icon: FaHeartbeat, Component: HealthNutrition },
  { key: 'learning', label: 'शिक्षण व प्रशिक्षण', desc: 'कोर्स व प्रगति', icon: FaBook, Component: LearningTraining },
  { key: 'schemes', label: 'योजनाएँ व लाभ', desc: 'योजनाएँ व आवेदन', icon: FaGift, Component: SchemesBenefits },
];

function HomeOverview({ onOpen }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl">नमस्ते, राजेश 👋</h2>
      <p className="mt-1 text-gray-600">पालनहार ऐप में आपका स्वागत है — नीचे से कोई भी सेवा चुनें।</p>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {FEATURES.map((f) => (
          <motion.button
            key={f.key}
            type="button"
            onClick={() => onOpen(f.key)}
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="card flex items-center gap-4 border border-primary-green/10 bg-white p-5 text-left"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-green/10 text-primary-green">
              <f.icon size={22} aria-hidden="true" />
            </span>
            <span>
              <span className="block font-bold text-dark-green">{f.label}</span>
              <span className="block text-sm text-gray-500">{f.desc}</span>
            </span>
          </motion.button>
        ))}
      </motion.div>
      <p className="mt-6 rounded-xl border border-golden/30 bg-golden/10 px-4 py-3 text-sm text-amber-800">
        यह एक डेमो ऐप है — आपका डेटा इसी ब्राउज़र में सुरक्षित रहता है।
      </p>
    </div>
  );
}

export default function AppPortalPage() {
  const [active, setActive] = useState('home');
  const ActiveFeature = FEATURES.find((f) => f.key === active)?.Component;

  const navItems = [{ key: 'home', label: 'होम', icon: FaThLarge }, ...FEATURES];

  return (
    <div className="bg-cream-white/40">
      {/* App top bar */}
      <div className="sticky top-20 z-30 border-b border-primary-green/10 bg-primary-green text-white shadow-sm">
        <div className="container-custom flex h-14 items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <img src="/palanhar-logo.png" alt="" className="h-8 w-8 object-contain" draggable="false" />
            <span className="font-display text-lg font-bold">पालनहार ऐप</span>
          </div>
          <Link to="/" className="flex items-center gap-2 rounded-lg bg-white/15 px-3 py-1.5 text-sm font-semibold transition-colors hover:bg-white/25">
            <FaArrowLeft aria-hidden="true" /> साइट पर वापस
          </Link>
        </div>
      </div>

      <div className="container-custom grid gap-6 py-8 lg:grid-cols-[240px_1fr]">
        {/* Sidebar (desktop) */}
        <aside className="hidden lg:block">
          <nav className="sticky top-40 space-y-1.5">
            {navItems.map((item) => {
              const isActive = active === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActive(item.key)}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors ${
                    isActive ? 'bg-primary-green text-white shadow-sm' : 'text-gray-700 hover:bg-primary-green/10'
                  }`}
                >
                  <item.icon aria-hidden="true" /> {item.label}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Mobile pill nav */}
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:hidden">
          {navItems.map((item) => {
            const isActive = active === item.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setActive(item.key)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive ? 'bg-primary-green text-white' : 'bg-white text-gray-700 border border-gray-200'
                }`}
              >
                <item.icon aria-hidden="true" /> {item.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <main className="min-h-[60vh] rounded-2xl border border-primary-green/10 bg-white p-5 shadow-sm sm:p-7">
          {active === 'home' ? <HomeOverview onOpen={setActive} /> : ActiveFeature ? <ActiveFeature /> : null}
        </main>
      </div>
    </div>
  );
}
