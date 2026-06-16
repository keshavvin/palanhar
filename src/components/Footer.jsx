import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaArrowUp,
  FaEnvelope,
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from 'react-icons/fa';

const quickLinks = [
  { label: 'हमारे बारे में', to: '/about' },
  { label: 'परितंत्र', to: '/ecosystem' },
  { label: 'पालनहार ऐप', to: '/app' },
  { label: 'गौ निवेश योजना', to: '/invest' },
  { label: 'पिच डेक', to: '/deck' },
  { label: 'उत्पाद', to: '/products' },
  { label: 'गाय देखें', to: '/gallery' },
  { label: 'संपर्क करें', to: '/contact' },
];

const socialLinks = [
  { icon: FaFacebookF, label: 'पालनहार — फेसबुक' },
  { icon: FaInstagram, label: 'पालनहार — इंस्टाग्राम' },
  { icon: FaYoutube, label: 'पालनहार — यूट्यूब' },
  { icon: FaLinkedinIn, label: 'पालनहार — लिंक्डइन' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [logoOk, setLogoOk] = useState(true);

  return (
    <footer className="relative overflow-hidden bg-dark-green text-white">
      {/* Faint cow watermark */}
      <img
        src="/palanhar-logo.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 bottom-0 w-48 opacity-5"
        draggable="false"
      />

      <div className="container-custom relative py-14 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              {logoOk ? (
                <img
                  src="/palanhar-logo.png"
                  onError={() => setLogoOk(false)}
                  alt="पालनहार"
                  className="h-16 w-16 shrink-0 object-contain"
                  draggable="false"
                />
              ) : (
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream-white p-1">
                  <img src="/palanhar-logo.png" alt="" className="h-10 w-10 object-contain" draggable="false" />
                </span>
              )}
              <p className="font-display text-2xl font-bold text-white">पालनहार</p>
            </div>
            <p className="text-sm font-semibold text-white/85">
              पालनहार डेयरी &amp; एग्रीकल्चरल फार्म Pvt. Ltd.
            </p>
            <p className="mt-2 text-sm text-golden">गौ सेवा &bull; कृषि समृद्धि &bull; सतत विकास</p>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <p className="mb-4 font-sans text-sm font-bold uppercase tracking-widest text-golden">
              हमसे जुड़ें
            </p>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <a href="tel:+917428940883" className="flex items-center gap-3 transition-colors duration-200 hover:text-golden">
                  <FaPhoneAlt size={14} aria-hidden="true" />
                  +91 74289 40883
                </a>
              </li>
              <li>
                <a href="mailto:info@palanhar.com" className="flex items-center gap-3 transition-colors duration-200 hover:text-golden">
                  <FaEnvelope size={14} aria-hidden="true" />
                  info@palanhar.com
                </a>
              </li>
              <li>
                <a href="https://www.palanhar.com" className="flex items-center gap-3 transition-colors duration-200 hover:text-golden">
                  <FaGlobe size={14} aria-hidden="true" />
                  www.palanhar.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt size={14} className="mt-1 shrink-0" aria-hidden="true" />
                <span>चित्तरपुर एक्स., नई दिल्ली · पूर्बा बर्धमान, WB</span>
              </li>
            </ul>
          </motion.div>

          {/* Quick links */}
          <motion.nav variants={itemVariants} aria-label="त्वरित लिंक">
            <p className="mb-4 font-sans text-sm font-bold uppercase tracking-widest text-golden">
              त्वरित लिंक
            </p>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="inline-block py-1.5 text-sm text-white/80 transition-colors duration-200 hover:text-golden"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <p className="mb-4 font-sans text-sm font-bold uppercase tracking-widest text-golden">
              हमारे साथ जुड़ें
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  rel="noopener"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-golden hover:text-dark-green"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/70"
        >
          &copy; {currentYear} पालनहार डेयरी &amp; एग्रीकल्चरल फार्म Pvt. Ltd. — सर्वाधिकार सुरक्षित।
        </motion.div>
      </div>

      {/* Scroll to top */}
      <motion.button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="ऊपर जाएँ"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-golden text-dark-green shadow-lg transition-shadow duration-300 hover:shadow-xl"
      >
        <FaArrowUp size={18} aria-hidden="true" />
      </motion.button>
    </footer>
  );
}
