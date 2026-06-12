import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaArrowUp,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const linkColumns = [
  {
    title: 'Company',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Gau Seva', to: '/gau-seva' },
      { label: 'Gallery', to: '/gallery' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Offerings',
    links: [
      { label: 'Products', to: '/products' },
      { label: 'Services', to: '/services' },
      { label: 'Investment Plans', to: '/invest' },
    ],
  },
  {
    title: 'Investors',
    links: [
      { label: 'Become an Investor', to: '/invest' },
      { label: 'Investor Login', to: '/investor/dashboard' },
      { label: 'Register & KYC', to: '/investor/register' },
      { label: 'Admin Portal', to: '/admin' },
    ],
  },
];

const socialLinks = [
  { icon: FaFacebookF, label: 'Palanhar on Facebook' },
  { icon: FaInstagram, label: 'Palanhar on Instagram' },
  { icon: FaTwitter, label: 'Palanhar on Twitter' },
  { icon: FaLinkedinIn, label: 'Palanhar on LinkedIn' },
  { icon: FaYoutube, label: 'Palanhar on YouTube' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-green text-white">
      <div className="container-custom py-14 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10"
        >
          {/* Brand column */}
          <motion.div variants={itemVariants} className="col-span-2 sm:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream-white p-1">
                <img
                  src="/cow-loader.png"
                  alt=""
                  className="h-10 w-10 object-contain"
                  draggable="false"
                />
              </span>
              <div className="leading-tight">
                <p className="font-display text-2xl font-bold text-white">Palanhar</p>
                <p className="text-xs font-semibold text-golden">
                  Dairy &amp; Agricultural Farm Pvt. Ltd.
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70 mb-6 max-w-sm">
              Desi cow dairy, panchgavya products and organic agriculture —
              now welcoming investors to grow with us.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+919211557678"
                className="flex items-center gap-3 py-1 text-sm text-white/80 transition-colors duration-200 hover:text-golden"
              >
                <FaPhoneAlt size={14} aria-hidden="true" />
                +91 92115 57678
              </a>
              <a
                href="tel:+911149967299"
                className="flex items-center gap-3 py-1 text-sm text-white/80 transition-colors duration-200 hover:text-golden"
              >
                <FaPhoneAlt size={14} aria-hidden="true" />
                Customer Care: +91 11 4996 7299
              </a>
              <a
                href="mailto:palanharcompany@gmail.com"
                className="flex items-center gap-3 py-1 text-sm text-white/80 transition-colors duration-200 hover:text-golden"
              >
                <FaEnvelope size={14} aria-hidden="true" />
                palanharcompany@gmail.com
              </a>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-white/50">
              Palanhar Dairy &amp; Agricultural Farm Pvt. Ltd.
              <br />
              Near Om Sai Cricket Academy &amp; Yadav Farm House, Rajokri Village,
              NH-48 (Delhi&ndash;Gurugram Road), New Delhi &ndash; 110038
            </p>
            {/* Social icons */}
            <div className="mt-6 flex flex-wrap gap-3">
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

          {/* Link columns */}
          {linkColumns.map((column) => (
            <motion.nav key={column.title} variants={itemVariants} aria-label={`Footer — ${column.title}`}>
              <p className="font-sans text-sm font-bold uppercase tracking-widest text-golden mb-4">
                {column.title}
              </p>
              <ul className="space-y-1">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <Link
                      to={link.to}
                      className="inline-block py-1.5 text-sm text-white/70 transition-colors duration-200 hover:text-golden"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          ))}
        </motion.div>

        {/* Compliance strip + copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-white/10 pt-6"
        >
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-white/60">
            Investments are subject to company performance. Dividends are declared by the Board
            based on annual net profit. KYC (PAN, Aadhaar, Bank) is mandatory for all investors.
          </p>
          <p className="mt-4 text-center text-sm text-white/70">
            &copy; {currentYear} Palanhar Dairy &amp; Agricultural Farm Pvt. Ltd. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Scroll to top */}
      <motion.button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
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
