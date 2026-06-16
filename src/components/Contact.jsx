import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaUser, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo only — no backend call
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'फोन',
      value: '+91 74289 40883 · +91 90648 86175 · +91 77680 62289',
      link: 'tel:+917428940883'
    },
    {
      icon: FaEnvelope,
      title: 'ईमेल',
      value: 'info@palanhar.com · www.palanhar.com',
      link: 'mailto:info@palanhar.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'एड्रेस',
      value: 'हेड ऑफिस: C-773, JJVTS गार्डन, छतरपुर एक्स्ट., न्यू दिल्ली – 110074 · विलेज ऑफिस: आओग्राम, पूर्बा बर्धमान, WB – 713121',
      link: 'https://maps.google.com/?q=Chhatarpur+Extension+New+Delhi+110074'
    },
  ];

  const socialLinks = [
    { icon: FaFacebook, link: '#', label: 'फेसबुक' },
    { icon: FaTwitter, link: '#', label: 'ट्विटर' },
    { icon: FaInstagram, link: '#', label: 'इंस्टाग्राम' },
    { icon: FaLinkedin, link: '#', label: 'लिंक्डइन' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-cream-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">गेट इन टच</h2>
          <p className="text-xl text-gray-600">हैव क्वेश्चन्स? वी'ड लव टू हियर फ्रॉम यू!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={i}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="card bg-white p-8 text-center hover:shadow-xl transition-all group"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-primary-green to-dark-green rounded-full p-4 text-white group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-dark-green mb-2">{info.title}</h3>
                <p className="text-gray-600 hover:text-primary-green transition-colors">{info.value}</p>
              </motion.a>
            );
          })}
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card bg-white p-8 md:p-10 shadow-xl rounded-2xl"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-dark-green mb-2">सेंड अस अ मैसेज</h3>
              <div className="h-1 w-16 bg-gradient-to-r from-primary-green to-dark-green rounded"></div>
            </div>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                  className="text-6xl mb-4 inline-block"
                >
                  ✓
                </motion.div>
                <h4 className="text-2xl font-bold text-primary-green mb-2">थैंक यू!</h4>
                <p className="text-gray-600">वी'ल गेट बैक टू यू सून.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                  <label htmlFor="contact-name" className="block text-gray-700 font-semibold mb-3">फुल नेम</label>
                  <div className="relative">
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-green focus:shadow-lg transition-all duration-300 bg-gray-50 hover:bg-white"
                      placeholder="जॉन डो"
                      required
                    />
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-green text-lg" />
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
                  <label htmlFor="contact-email" className="block text-gray-700 font-semibold mb-3">ईमेल एड्रेस</label>
                  <div className="relative">
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-green focus:shadow-lg transition-all duration-300 bg-gray-50 hover:bg-white"
                      placeholder="john@example.com"
                      required
                    />
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-green text-lg" />
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                  <label htmlFor="contact-phone" className="block text-gray-700 font-semibold mb-3">फोन नंबर</label>
                  <div className="relative">
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-green focus:shadow-lg transition-all duration-300 bg-gray-50 hover:bg-white"
                      placeholder="+91 98765 43210"
                    />
                    <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-green text-lg" />
                  </div>
                </motion.div>

                {/* Message */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
                  <label htmlFor="contact-message" className="block text-gray-700 font-semibold mb-3">मैसेज</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-green focus:shadow-lg transition-all duration-300 resize-none bg-gray-50 hover:bg-white"
                    placeholder="टेल अस व्हाट्स ऑन योर माइंड..."
                    rows="5"
                    required
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-green to-dark-green text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-2xl"
                >
                  <FaPaperPlane size={20} />
                  सेंड मैसेज
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Map and Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="card overflow-hidden shadow-lg h-80 bg-gradient-to-br from-light-green/20 to-primary-green/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-gray-700 font-semibold">गूगल मैप विल बी इंटीग्रेटेड हियर</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="card bg-white p-8">
              <h3 className="text-2xl font-bold text-dark-green mb-6">फॉलो अस</h3>
              <p className="text-gray-600 mb-6">
                कनेक्ट विद अस ऑन सोशल मीडिया फॉर अपडेट्स, टिप्स, एंड स्टोरीज़ फ्रॉम अवर फार्म.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={i}
                      href={social.link}
                      aria-label={`फॉलो अस ऑन ${social.label}`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gradient-to-br from-primary-green to-dark-green rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Business Hours */}
            <div className="card bg-cream-white/80 p-8 border-l-4 border-primary-green">
              <h3 className="text-xl font-bold text-dark-green mb-4">बिज़नेस आवर्स</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-semibold">मंडे - फ्राइडे:</span> 8:00 AM - 6:00 PM</li>
                <li><span className="font-semibold">सैटरडे:</span> 9:00 AM - 4:00 PM</li>
                <li><span className="font-semibold">संडे:</span> 10:00 AM - 3:00 PM</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
