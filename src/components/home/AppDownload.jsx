import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGooglePlay, FaApple, FaMobileScreen } from 'react-icons/fa6';
import LeafHeading from './LeafHeading';

function StoreBadge({ icon: Icon, line1, line2 }) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 rounded-xl bg-gray-900 px-5 py-3 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-xl"
    >
      <Icon size={28} aria-hidden="true" />
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wide text-white/70">{line1}</span>
        <span className="block text-lg font-semibold">{line2}</span>
      </span>
    </a>
  );
}

export default function AppDownload() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section className="py-12 md:py-16 bg-cream-white/60">
      <div className="container-custom">
        <LeafHeading className="mb-10">ऐप डाउनलोड करें</LeafHeading>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Mobile app image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            {imgOk ? (
              <img
                src="/home_mobile_image_add.png"
                alt="पालनहार मोबाइल ऐप"
                onError={() => setImgOk(false)}
                className="h-auto w-full max-w-sm drop-shadow-2xl"
                draggable="false"
              />
            ) : (
              <div className="flex aspect-[9/16] w-full max-w-[16rem] flex-col items-center justify-center gap-3 rounded-3xl border-4 border-white bg-white text-center shadow-2xl ring-1 ring-primary-green/10">
                <FaMobileScreen className="text-5xl text-primary-green/40" aria-hidden="true" />
                <p className="px-6 text-sm font-semibold text-gray-500">
                  मोबाइल ऐप छवि यहाँ दिखेगी
                  <span className="mt-1 block text-xs font-normal">(public/home_mobile_image_add.png जोड़ें)</span>
                </p>
              </div>
            )}
          </motion.div>

          {/* Copy + store badges */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <h3 className="font-display text-2xl font-bold text-dark-green md:text-3xl">
              पालनहार ऐप — आपकी जेब में पूरा फार्म
            </h3>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-700 lg:mx-0">
              अपने निवेश, गाय की लाइव जानकारी, मासिक आय रिपोर्ट एवं उत्पादों की खरीद —
              सब कुछ एक ही ऐप में, कभी भी, कहीं भी।
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <StoreBadge icon={FaGooglePlay} line1="यहाँ से पाएँ" line2="गूगल प्ले" />
              <StoreBadge icon={FaApple} line1="यहाँ से डाउनलोड करें" line2="ऐप स्टोर" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
