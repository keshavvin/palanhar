import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Cow Seva', path: '/gau-seva' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-primary-green">
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Brand */}
          <Link to="/" className="group flex shrink-0 items-center gap-2.5">
            <img
              src="/cow-loader.png"
              alt=""
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain transition-transform duration-300 group-hover:scale-110"
              draggable="false"
            />
            <span className="leading-tight">
              <span className="block font-display text-xl sm:text-2xl font-bold text-dark-green">
                Palanhar
              </span>
              <span className="hidden sm:block text-[11px] font-semibold tracking-wide text-golden">
                Dairy &amp; Agricultural Farm Pvt. Ltd.
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative block px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                      isActive ? 'text-primary-green' : 'text-gray-700 hover:text-primary-green'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-primary-green"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/investor/dashboard"
              className="flex items-center gap-2 rounded-lg border border-primary-green/30 px-4 py-2.5 text-sm font-semibold text-primary-green transition-colors duration-200 hover:border-primary-green hover:bg-primary-green/5"
            >
              <FaUserCircle className="text-lg" aria-hidden="true" />
              Investor Login
            </Link>
            <Link to="/invest" className="btn btn-golden px-5 py-2.5 text-sm">
              Invest Now
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-lg text-primary-green transition-colors duration-200 hover:bg-primary-green/10"
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
            className="lg:hidden overflow-hidden border-t border-gray-100 bg-white shadow-lg"
          >
            <ul className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
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
              <Link
                to="/investor/dashboard"
                onClick={() => setIsOpen(false)}
                className="btn btn-outline flex w-full items-center justify-center gap-2"
              >
                <FaUserCircle aria-hidden="true" />
                Investor Login
              </Link>
              <Link
                to="/invest"
                onClick={() => setIsOpen(false)}
                className="btn btn-golden w-full text-center"
              >
                Invest Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
