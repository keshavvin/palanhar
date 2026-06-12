import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b-4" style={{borderColor: '#2E7D32'}}>
      <style>{`
        @keyframes slideInBorder {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .nav-link {
          position: relative;
          display: inline-block;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #2E7D32, #1B5E20);
          transition: width 0.3s ease-in-out;
          border-radius: 2px;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link.active::after {
          width: 100%;
          background: linear-gradient(90deg, #2E7D32, #1B5E20);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{margin: '0 auto'}}>
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">🌾</div>
            <div className="hidden sm:block">
              <h1 className="text-xl sm:text-2xl font-bold" style={{color: '#2E7D32'}}>Palanhar</h1>
              <p className="text-xs font-semibold" style={{color: '#F9A825'}}>Pure Dairy & Agriculture</p>
            </div>
          </Link>

          {/* Desktop Navigation with Hover Border Effect */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`nav-link text-sm sm:text-base font-semibold px-3 py-2 rounded-md transition-all duration-300 ${
                    activeLink === link.path ? 'text-primary-green active' : 'text-gray-700 hover:text-primary-green'
                  }`}
                  style={{
                    color: activeLink === link.path ? '#2E7D32' : '#374151'
                  }}
                  onClick={() => setActiveLink(link.path)}
                  onMouseEnter={(e) => {
                    if (activeLink !== link.path) {
                      e.target.style.color = '#2E7D32';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeLink !== link.path) {
                      e.target.style.color = '#374151';
                    }
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Contact & Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-md transition-all duration-300 relative group"
              style={{color: '#2E7D32'}}
            >
              <FaPhone size={14} />
              <span>919876543210</span>
              <span
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-green to-golden rounded-full"
                style={{
                  width: '0',
                  transition: 'width 0.3s ease-in-out' 
                }}
              ></span>
            </a>
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-lg font-semibold text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 relative overflow-hidden group"
              style={{backgroundColor: '#2E7D32'}}
              onClick={() => setActiveLink('/contact')}
             style={{ padding:'10px 20px' }}>
              <span className="relative z-10">Contact</span>
              <motion.div
                className="absolute inset-0"
                style={{backgroundColor: '#1B5E20'}}
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-2xl transition-transform duration-300 hover:scale-110"
            style={{color: '#2E7D32'}}
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>


          
        </div>

        {/* Mobile Menu with Animated Items */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden pb-4 border-t-2"
            style={{borderColor: '#2E7D32', backgroundColor: '#FFFDF5'}}
          >
            <ul className="flex flex-col gap-2 py-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="block px-4 py-3 text-gray-700 font-semibold rounded-md transition-all duration-300 relative group border-l-4"
                    style={{
                      backgroundColor: activeLink === link.path ? '#81C784' : 'transparent',
                      color: activeLink === link.path ? 'white' : '#374151',
                      borderColor: activeLink === link.path ? '#2E7D32' : 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (activeLink !== link.path) {
                        e.currentTarget.style.backgroundColor = '#D4E8D4';
                        e.currentTarget.style.borderColor = '#2E7D32';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeLink !== link.path) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.borderColor = 'transparent';
                      }
                    }}
                    onClick={() => {
                      setActiveLink(link.path);
                      setIsOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Contact Section with Animation */}
            <motion.div
              className="border-t-2 pt-4 px-4 space-y-3"
              style={{borderColor: '#81C784'}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <motion.a
                href="tel:+919876543210"
                className="flex items-center gap-2 font-semibold py-2 px-4 rounded-md transition-all duration-300"
                style={{color: '#fff', backgroundColor: '#F9A825'}}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone size={16} />
                <span className="text-sm">919876543210</span>
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  className="block w-full px-4 py-3 rounded-md font-semibold text-white text-center transition-all duration-300 shadow-md"
                  style={{backgroundColor: '#2E7D32'}}
                  onClick={() => {
                    setActiveLink('/contact');
                    setIsOpen(false);
                  }}
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
