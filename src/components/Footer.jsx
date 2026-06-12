import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: 'Quick Links', links: ['Home', 'About Us', 'Products', 'Services', 'Gallery', 'Contact'] },
    { title: 'Products', links: ['Fresh Milk', 'Butter', 'Paneer', 'Organic Wheat', 'Fresh Vegetables', 'Honey'] },
    { title: 'Services', links: ['Dairy Farming', 'Organic Agriculture', 'Livestock Management', 'Farm Consulting', 'Delivery', 'Training'] },
    { title: 'Support', links: ['FAQ', 'Terms & Conditions', 'Privacy Policy', 'Shipping Info', 'Returns', 'Contact'] },
  ];

  const socialLinks = [
    { icon: FaFacebook, link: '#' },
    { icon: FaTwitter, link: '#' },
    { icon: FaInstagram, link: '#' },
    { icon: FaLinkedin, link: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-dark-green text-white">
      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-primary-green to-dark-green py-12 md:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            {/* <h3 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-white/90 mb-6">Get updates on our latest products and farming practices</p> */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-golden"
              /> */}
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-golden text-dark-green font-bold rounded-lg hover:bg-yellow-500 transition-colors"
              >
                Subscribe
              </motion.button> */}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Main Footer Content */}
      <div className="container-custom py-16 md:py-20"  style={{margin:'0 auto',display:'block',width:'80%',textAlign:'center',padding: '30px 0px'}}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">🌾</div>
              <div>
                <h3 className="text-2xl font-bold">Palanhar</h3>
                <p className="text-xs text-golden font-semibold">Pure Dairy & Agriculture</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Delivering fresh milk, organic produce, and sustainable farming solutions for a healthier future.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80 hover:text-golden transition-colors cursor-pointer">
                <FaPhone size={16} />
                <span className="text-sm">919876543210</span>
              </div>
              <div className="flex items-center gap-3 text-white/80 hover:text-golden transition-colors cursor-pointer">
                <FaEnvelope size={16} />
                <span className="text-sm">info@palanharfarms.com</span>
              </div>
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, i) => (
            <motion.div key={i} variants={itemVariants} className="md:col-span-1">
              <h4 className="text-lg font-bold mb-6 text-golden">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-golden transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-8"></div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Copyright */}
          <p className="text-white/70 text-sm text-center md:text-left">
            &copy; {currentYear} Palanhar Farms. All rights reserved. | Delivering Pure Dairy & Organic Agriculture
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={i}
                  href={social.link}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-golden rounded-full flex items-center justify-center text-dark-green hover:shadow-lg transition-shadow"
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>

          {/* Legal Links */}
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-white/70 hover:text-golden transition-colors">Privacy</a>
            <span className="text-white/30">•</span>
            <a href="#" className="text-white/70 hover:text-golden transition-colors">Terms</a>
            <span className="text-white/30">•</span>
            <a href="#" className="text-white/70 hover:text-golden transition-colors">Sitemap</a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-golden text-dark-green p-3 rounded-full hover:shadow-lg transition-all duration-300 hidden md:block"
      >
        ↑
      </motion.button>
    </footer>
  );
}
