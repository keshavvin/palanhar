import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserPlus, FaCartShopping } from 'react-icons/fa6';
import { FaCircleCheck } from 'react-icons/fa6';
import TransparentModel from '../components/home/TransparentModel';
import RevenueModel from '../components/home/RevenueModel';
import ModelVideo from '../components/home/ModelVideo';

const pillars = [
  'वास्तविक संपत्ति आधारित — हर निवेश जीवित गौधन एवं फार्म से जुड़ा',
  'एक गाय, अनेक आय स्रोत — 15+ मूल्य-वर्धित उत्पाद',
  'पूर्ण पारदर्शिता — लाइव डैशबोर्ड एवं मासिक रिपोर्ट',
  'गौ कल्याण एवं ग्रामीण समृद्धि — हर कदम पर',
];

export default function ModelPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark-green text-white">
        <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true">
          <img src="/hero-banner-3.jpg" alt="" className="h-full w-full object-cover" draggable="false" />
          <div className="absolute inset-0 bg-gradient-to-br from-dark-green via-dark-green/85 to-primary-green/70" />
        </div>

        <div className="container-custom relative z-10 py-16 text-center md:py-24">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/90"
          >
            पालनहार मॉडल
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="!text-white"
          >
            हमारा पारदर्शी गौ-आधारित मॉडल
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-3 max-w-2xl text-lg text-white/85"
          >
            एक देशी गाय &ndash; अनेक आय स्रोत। गौ सेवा से जुड़ी एक एकीकृत, पारदर्शी एवं सतत मूल्य श्रृंखला,
            जो निवेशकों, किसानों एवं ग्राहकों के लिए स्थायी समृद्धि बनाती है।
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mt-8 grid max-w-3xl gap-3 text-left sm:grid-cols-2"
          >
            {pillars.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-xl bg-white/10 p-3 ring-1 ring-white/15">
                <FaCircleCheck className="mt-0.5 shrink-0 text-golden" aria-hidden="true" />
                <span className="text-sm font-medium text-white/90">{p}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-9 flex flex-wrap justify-center gap-4"
          >
            <Link to="/invest" className="btn btn-golden flex items-center gap-2.5">
              <FaUserPlus aria-hidden="true" /> निवेश करें
            </Link>
            <Link
              to="/products"
              className="btn flex items-center gap-2.5 border-2 border-white bg-transparent text-white hover:bg-white hover:text-dark-green"
            >
              <FaCartShopping aria-hidden="true" /> उत्पाद देखें
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Model flow + investment plan card */}
      <TransparentModel />

      {/* Revenue distribution + investor dividend model */}
      <RevenueModel />

      {/* Videos */}
      <ModelVideo />

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-green to-dark-green py-14 text-white">
        <div className="container-custom text-center">
          <h2 className="!text-white mb-3">गौ सेवा से जुड़ें, समृद्धि की ओर बढ़ें</h2>
          <p className="mx-auto mb-7 max-w-xl text-white/85">
            पारदर्शी, वास्तविक संपत्ति आधारित मॉडल का हिस्सा बनें — आज ही पंजीकरण करें।
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/invest" className="btn btn-golden">निवेश योजनाएँ देखें</Link>
            <Link
              to="/contact"
              className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary-green"
            >
              हमसे बात करें
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
