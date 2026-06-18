import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import About from '../components/About';
import Leadership from '../components/Leadership';
import FounderProfile from '../components/FounderProfile';

const offices = [
  {
    label: 'दिल्ली कार्यालय',
    lines: ['A 195 Raju Park (Khanpur, South Delhi),', 'Devli Road, New Delhi – 110062, India'],
  },
  {
    label: 'पंजीकृत कार्यालय (पश्चिम बंगाल)',
    lines: [
      'Palanhar Dairy and Agricultural Farm Pvt. Ltd.',
      'C/O Narugopal Ghosh, Kesh Saan Pukar,',
      'Village & Post – Aogram,',
      'Dist. Purba Bardhaman, West Bengal – 713121',
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-b from-light-green/20 to-transparent pb-10 pt-16 md:pt-20"
      >
        <div className="container-custom text-center">
          <span className="section-eyebrow">हमारी कहानी</span>
          <h1 className="mb-4">पालनहार के बारे में</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            एक दशक की शुद्ध डेयरी, जैविक कृषि और टिकाऊ विकास की यात्रा
          </p>
        </div>
      </motion.section>
      <About />
      <Leadership />
      <FounderProfile />

      {/* Office addresses */}
      <section className="section bg-cream-white/40">
        <div className="container-custom">
          <div className="mb-10 text-center">
            <span className="section-eyebrow">हमसे मिलें</span>
            <h2>हमारे कार्यालय</h2>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {offices.map((o) => (
              <motion.div
                key={o.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card flex gap-4 border-t-4 border-primary-green bg-white p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-green/10 text-primary-green">
                  <FaMapMarkerAlt aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-dark-green">{o.label}</h3>
                  <address className="mt-2 not-italic text-sm leading-relaxed text-gray-600">
                    {o.lines.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </address>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
