import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaShieldHalved,
  FaTowerBroadcast,
  FaCoins,
  FaLeaf,
  FaUser,
  FaChartLine,
  FaCalendarDays,
  FaCow,
  FaBoxOpen,
  FaArrowRightLong,
} from 'react-icons/fa6';

// Four headline value badges shown under the hero copy.
const badges = [
  { icon: FaShieldHalved, label: 'पारदर्शी ट्रैकिंग' },
  { icon: FaTowerBroadcast, label: 'लाइव अपडेट एवं रिकॉर्ड' },
  { icon: FaCoins, label: 'बहु-स्रोत आय' },
  { icon: FaLeaf, label: 'सतत एवं लाभदायक' },
];

// The "गौ सेवा से समृद्धि" card rows.
const schemeRows = [
  { icon: FaUser, label: 'न्यूनतम निवेश:', value: '₹10000' },
  { icon: FaChartLine, label: 'मासिक संभावित आय:', value: '₹5,000+' },
  { icon: FaCalendarDays, label: 'निवेश अवधि:', value: '20 वर्ष' },
  { icon: FaShieldHalved, label: 'पारदर्शी ट्रैकिंग' },
  { icon: FaCow, label: 'गाय की लाइव जानकारी' },
  { icon: FaBoxOpen, label: 'उत्पाद आधारित बहु-स्रोत आय' },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const [bgSrc, setBgSrc] = useState('/banner-hero.jpg');

  return (
    <section className="relative overflow-hidden bg-cream-white">
      {/* Farmer + cows photo, anchored right behind the scheme card */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src={bgSrc}
          alt=""
          onError={() => setBgSrc('/hero-banner-3.jpg')}
          className="absolute inset-0 h-full w-full object-cover object-center"
          draggable="false"
        />
        {/* Cream scrim keeps the left copy legible while the photo shows on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream-white via-cream-white/90 to-cream-white/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream-white/70 via-transparent to-transparent" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container-custom relative z-10 grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-12"
      >
        {/* LEFT — copy + badges */}
        <div>
          <motion.h1
            variants={item}
            className="font-display text-4xl font-extrabold leading-tight tracking-tight text-dark-green sm:text-5xl lg:text-6xl"
          >
            सेवा गौ माता की।
            <span className="mt-1 block text-primary-green">समृद्धि हर परिवार की।</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base leading-relaxed text-gray-700 md:text-lg"
          >
            एक पारदर्शी, तकनीक-संचालित मंच जो गौ-आधारित उत्पादों को दीर्घकालिक समृद्धि में बदलता है।
          </motion.p>

          {/* Badges bar */}
          <motion.div
            variants={item}
            className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-primary-green/10 bg-white/90 p-4 shadow-md backdrop-blur-sm sm:grid-cols-4"
          >
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-green/10 text-primary-green">
                  <Icon aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold leading-tight text-dark-green">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Trust line */}
          <motion.p
            variants={item}
            className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-primary-green"
          >
            <FaShieldHalved aria-hidden="true" className="text-golden" />
            विश्वसनीय <span className="text-golden">•</span> पारदर्शी <span className="text-golden">•</span>
            तकनीक-संचालित <span className="text-golden">•</span> लाभदायक
          </motion.p>
        </div>

        {/* RIGHT — गौ सेवा से समृद्धि card */}
        <motion.div
          variants={item}
          className="w-full max-w-md justify-self-center overflow-hidden rounded-2xl shadow-2xl lg:justify-self-end"
        >
          <div className="flex items-center gap-3 bg-dark-green px-6 py-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-xl text-golden">
              <FaCow aria-hidden="true" />
            </span>
            <h2 className="!text-white text-xl font-bold">गौ सेवा से समृद्धि</h2>
          </div>

          <div className="bg-white p-6">
            <ul className="space-y-4">
              {schemeRows.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-center gap-3 text-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-green/10 text-primary-green">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="text-gray-700">
                    {label}
                    {value && <span className="ml-1 font-bold text-dark-green">{value}</span>}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/invest"
              className="btn btn-primary mt-6 flex w-full items-center justify-center gap-2 text-base font-bold"
            >
              अभी निवेश करें <FaArrowRightLong aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
