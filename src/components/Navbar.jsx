import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

// Primary navigation — mirrors the marketing header in the reference design.
// `hash` items resolve to a section on the home page; the rest are routes.
const navLinks = [
  { name: 'होम', path: '/' },
  { name: 'हमारे बारे में', path: '/about' },
  { name: 'गौ सेवा से समृद्धि', path: '/invest' },
  { name: 'उत्पाद', path: '/products' },
  { name: 'हमारा मॉडल', path: '/model' },
  { name: 'गाय देखें', path: '/gallery' },
  { name: 'इकोसिस्टम', path: '/ecosystem' },
  { name: 'वैदिक कंसल्टेंट', path: '/vedic-consultant' },
  { name: 'संपर्क करें', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the route changes (covers back/forward too).
  // Adjust-state-during-render pattern — avoids a cascading setState-in-effect.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const linkClasses = (isActive) =>
    `relative block px-2 py-2 text-[13px] font-semibold transition-colors duration-200 ${
      isActive ? 'text-primary-green' : 'text-gray-700 hover:text-primary-green'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-primary-green">
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between gap-3">
          {/* Brand */}
          <Link to="/" className="group flex shrink-0 items-center gap-2.5">
            {logoOk ? (
              <span className="flex h-11 w-11 shrink-0 items-center justify-center   group-hover:scale-110 sm:h-12 sm:w-12">
                <img
                  src="/logo-palanhar.png"
                  onError={() => setLogoOk(false)}
                  alt="पालनहार"
                  className="h-full w-full object-contain"
                  draggable="false"
                />
              </span>
            ) : (
              <img
                src="/logo-palanhar.png"
                alt=""
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain transition-transform duration-300 group-hover:scale-110"
                draggable="false"
              />
            )}
            <span className="leading-tight">
              <span className="block font-display text-xl sm:text-2xl font-bold text-dark-green">
                पालनहार
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => {
              if (link.hash) {
                return (
                  <li key={link.name}>
                    <a href={link.hash} className={linkClasses(false)}>
                      {link.name}
                    </a>
                  </li>
                );
              }
              const isActive = pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    aria-current={isActive ? 'page' : undefined}
                    className={linkClasses(isActive)}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-primary-green"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden xl:flex items-center gap-3">
            <Link to="/invest" className="btn btn-primary px-5 py-2.5 text-sm">
              निवेश करें
            </Link>
            <Link
              to="/investor/login"
              className="flex items-center gap-2 rounded-lg border-2 border-primary-green px-4 py-2 text-sm font-semibold text-primary-green transition-colors duration-200 hover:bg-primary-green hover:text-white"
            >
              <FaUserCircle className="text-base" aria-hidden="true" />
              लॉगिन / रजिस्टर
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'मेन्यू बंद करें' : 'मेन्यू खोलें'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="xl:hidden flex h-11 w-11 items-center justify-center rounded-lg text-primary-green transition-colors duration-200 hover:bg-primary-green/10"
          >
            {isOpen ? <FaTimes size={24} aria-hidden="true" /> : <FaBars size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="xl:hidden overflow-hidden border-t border-gray-100 bg-white shadow-lg"
          >
            <ul className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => {
                if (link.hash) {
                  return (
                    <li key={link.name}>
                      <a
                        href={link.hash}
                        onClick={closeMenu}
                        className="block rounded-lg border-l-4 border-transparent px-4 py-3 text-base font-semibold text-gray-700 transition-colors duration-200 hover:bg-primary-green/5 hover:text-primary-green"
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                }
                const isActive = pathname === link.path;
                return (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      aria-current={isActive ? 'page' : undefined}
                      className={`block rounded-lg border-l-4 px-4 py-3 text-base font-semibold transition-colors duration-200 ${
                        isActive
                          ? 'border-primary-green bg-primary-green/10 text-primary-green'
                          : 'border-transparent text-gray-700 hover:bg-primary-green/5 hover:text-primary-green'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col gap-3 border-t border-gray-100 px-4 pb-5 pt-4">
              <Link to="/invest" onClick={closeMenu} className="btn btn-primary w-full text-center">
                निवेश करें
              </Link>
              <Link
                to="/investor/login"
                onClick={closeMenu}
                className="btn btn-outline flex w-full items-center justify-center gap-2"
              >
                <FaUserCircle aria-hidden="true" />
                लॉगिन / रजिस्टर
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
