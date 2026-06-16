import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUserPlus, FaCartShopping, FaCow } from 'react-icons/fa6';

// The product lineup that fans out beside the cow — "एक गाय, अनेक आय स्रोत".
const heroProducts = [
  { label: 'दूध', icon: '🥛' },
  { label: 'A2 घी', icon: '🫙' },
  { label: 'बायो पेस्टिसाइड', icon: '🧴' },
  { label: 'बायो पेंट', icon: '🪣' },
  { label: 'CBG', icon: '🛢️' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero() {
  const [bannerOk, setBannerOk] = useState(true);

  // Pitch banner — artwork lives at public/banner-image1.png and shows full-width
  // here; if it ever fails to load we gracefully fall back to the built layout below.
  if (bannerOk) {
    return (
      <section className="bg-cream-white">
        <Link to="/invest" className="block" aria-label="गौ निवेश योजना — अभी निवेश करें">
          <img
            src="/banner-image1.png"
            alt="पालनहार गौ निवेश योजना — पारदर्शी, तकनीक-संचालित मंच"
            onError={() => setBannerOk(false)}
            className="h-auto w-full"
            draggable="false"
          />
        </Link>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-cream-white">
      {/* Soft cow banner wash behind the content */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src="/hero-banner-3.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          draggable="false"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream-white via-cream-white/90 to-cream-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-cream-white/60" />
      </div>

      <div className="container-custom relative z-10 grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-8">
        {/* Left — headline + CTAs */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl font-extrabold tracking-tight text-dark-green sm:text-6xl lg:text-7xl"
          >
            पालनहार
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-3 font-display text-2xl font-bold leading-snug text-primary-green sm:text-3xl"
          >
            भारत का पारदर्शी
            <span className="block">गौ-आधारित निवेश एवं उत्पाद मंच</span>
          </motion.p>

          <motion.div variants={itemVariants} className="mt-5">
            <span className="inline-flex items-center rounded-lg bg-primary-green px-5 py-2.5 text-lg font-bold text-white shadow-md">
              एक गाय &ndash; अनेक आय स्रोत
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-base leading-relaxed text-gray-700 md:text-lg"
          >
            हम गाय से जुड़े बहु-उत्पाद मॉडल के माध्यम से निवेशकों, किसानों और ग्राहकों
            के लिए स्थायी आय और समृद्धि का निर्माण करते हैं।
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/invest"
              className="btn btn-primary group flex items-center gap-2.5 text-base"
            >
              <FaUserPlus aria-hidden="true" />
              निवेश करें
            </Link>
            <Link
              to="/products"
              className="btn group flex items-center gap-2.5 bg-[#C0532E] text-base text-white shadow-lg hover:bg-[#a8451f] hover:shadow-xl"
            >
              <FaCartShopping aria-hidden="true" />
              उत्पाद खरीदें
            </Link>
            <Link
              to="/gallery"
              className="btn btn-outline group flex items-center gap-2.5 text-base"
            >
              <FaCow aria-hidden="true" />
              गाय देखें
            </Link>
          </motion.div>
        </motion.div>

        {/* Right — cow + product lineup visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
            <img
              src="/hero-banner-1.jpg"
              alt="पालनहार की देसी गाय एवं गौ-आधारित उत्पाद"
              className="h-72 w-full object-cover sm:h-96"
              draggable="false"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-dark-green/70 to-transparent" />
          </div>

          {/* Floating product lineup card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mx-auto -mt-10 w-[92%] rounded-2xl border border-primary-green/10 bg-white/95 p-4 shadow-xl backdrop-blur-sm"
          >
            <div className="grid grid-cols-5 gap-2">
              {heroProducts.map((product) => (
                <div key={product.label} className="flex flex-col items-center gap-1.5 text-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream-white text-2xl shadow-sm">
                    {product.icon}
                  </span>
                  <span className="text-[10px] font-semibold leading-tight text-dark-green sm:text-xs">
                    {product.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
