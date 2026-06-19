import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaShieldHalved,
  FaTowerBroadcast,
  FaCoins,
  FaLeaf,
  FaIndianRupeeSign,
  FaArrowTrendUp,
  FaCalendarDays,
  FaArrowRightLong,
} from 'react-icons/fa6';

// Investor hero: farmer-cow-calf photo as a full-bleed background. Content
// (headline + trust badges) on the left, the "गाय निवेश योजना" card on the
// right. Fully responsive: stacks on phones, side-by-side from lg up.
const BADGES = [
  { Icon: FaShieldHalved, lines: ['पारदर्शी', 'ट्रैकिंग'] },
  { Icon: FaTowerBroadcast, lines: ['लाइव अपडेट्स', 'एवं रिकॉर्ड्स'] },
  { Icon: FaCoins, lines: ['बहु-स्रोत', 'आय'] },
  { Icon: FaLeaf, lines: ['सतत एवं', 'लाभदायक'] },
];

const SCHEME = [
  { Icon: FaIndianRupeeSign, text: 'न्यूनतम निवेश राशि:', value: '₹1,00,000' },
  { Icon: FaArrowTrendUp, text: 'मासिक संभावित आय:', value: '₹5,000+' },
  { Icon: FaCalendarDays, text: 'निवेश अवधि:', value: '20 वर्ष' },
  { Icon: FaShieldHalved, text: 'पारदर्शी ट्रैकिंग' },
  { Icon: FaTowerBroadcast, text: 'लाइव गाय जानकारी' },
  { Icon: FaLeaf, text: 'उत्पाद-आधारित बहु-स्रोत आय' },
];

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section className="relative isolate overflow-hidden">
      {/* Full-bleed background photo */}
      {imgOk && (
        <img
          src="/hero-farmer-cow.jpg"
          alt="पालनहार — किसान, गाय और बछड़ा"
          onError={() => setImgOk(false)}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          draggable="false"
        />
      )}
      {/* Readability overlay — even wash on phones; fades to the right on desktop so the photo shows. */}
      <div className="absolute inset-0 -z-10 bg-white/82 lg:hidden" />
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-white via-white/80 to-transparent lg:block" />

      <div className="container-custom py-12 sm:py-16 lg:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: headline + subtitle + badges */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-3xl leading-tight text-dark-green sm:text-4xl lg:text-5xl">
              गायों में निवेश करें।
              <br />
              <span className="bg-gradient-to-r from-golden to-primary-green bg-clip-text text-transparent">
                बेहतर भविष्य में निवेश करें।
              </span>
            </h1>
            <p className="mt-4 max-w-lg text-base text-gray-700 sm:mt-5 sm:text-lg">
              एक पारदर्शी, तकनीक-आधारित प्लेटफ़ॉर्म जो गाय-आधारित उत्पादों को
              दीर्घकालिक संपत्ति में बदलता है।
            </p>

            <div className="mt-6 grid max-w-lg grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:max-w-none">
              {BADGES.map(({ Icon, lines }) => (
                <div
                  key={lines.join(' ')}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-cream-white/90 p-3 shadow-sm backdrop-blur-sm sm:p-3.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-golden/15 text-golden sm:h-11 sm:w-11">
                    <Icon className="text-base sm:text-lg" aria-hidden="true" />
                  </span>
                  <b className="text-[13px] font-semibold leading-tight text-dark-green sm:text-sm">
                    {lines[0]}
                    <br />
                    {lines[1]}
                  </b>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: scheme card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
            className="mx-auto w-full max-w-md rounded-3xl border border-golden/30 bg-white/95 p-6 shadow-[0_24px_60px_rgba(27,94,32,0.18)] backdrop-blur sm:p-7 lg:mr-0"
          >
            <div className="flex items-center gap-3 border-b border-line pb-4">
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-green/10 text-2xl"
                aria-hidden="true"
              >
                🐄
              </span>
              <h2 className="m-0 text-xl font-bold text-dark-green sm:text-2xl">
                गाय निवेश योजना
              </h2>
            </div>

            <ul className="mt-5 space-y-3.5">
              {SCHEME.map(({ Icon, text, value }) => (
                <li key={text} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-green/10 text-primary-green">
                    <Icon className="text-sm" aria-hidden="true" />
                  </span>
                  <span className="text-[15px] text-gray-700">
                    {text}
                    {value && <b className="ml-1 text-dark-green">{value}</b>}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/invest/start"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-golden to-amber-500 px-6 py-3.5 text-base font-bold text-dark-green shadow-lg transition-transform duration-200 hover:scale-[1.02]"
            >
              अभी निवेश करें
              <FaArrowRightLong aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
