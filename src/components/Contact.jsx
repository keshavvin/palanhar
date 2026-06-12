import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

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
    // Here you would typically send the data to a server
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 XXXXX XXXXX',
      link: 'tel:+919876543210'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'info@palanharfarms.com',
      link: 'mailto:info@palanharfarms.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      value: 'Palanhar Farms, Village, District, State',
      link: '#'
    },
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
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

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
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">Have questions? We'd love to hear from you!</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
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
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card bg-white p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-dark-green mb-6">Send us a Message</h3>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <div className="text-5xl mb-4">✓</div>
                <h4 className="text-2xl font-bold text-primary-green mb-2">Thank you!</h4>
                <p className="text-gray-600">We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-light-green rounded-lg focus:outline-none focus:border-primary-green transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-light-green rounded-lg focus:outline-none focus:border-primary-green transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-light-green rounded-lg focus:outline-none focus:border-primary-green transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-light-green rounded-lg focus:outline-none focus:border-primary-green transition-colors resize-none"
                    placeholder="Your message here..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn btn-primary text-lg font-semibold"
                >
                  Send Message
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
                <p className="text-gray-700 font-semibold">Google Map will be integrated here</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="card bg-white p-8">
              <h3 className="text-2xl font-bold text-dark-green mb-6">Follow Us</h3>
              <p className="text-gray-600 mb-6">
                Connect with us on social media for updates, tips, and stories from our farm.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={i}
                      href={social.link}
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
              <h3 className="text-xl font-bold text-dark-green mb-4">Business Hours</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-semibold">Monday - Friday:</span> 8:00 AM - 6:00 PM</li>
                <li><span className="font-semibold">Saturday:</span> 9:00 AM - 4:00 PM</li>
                <li><span className="font-semibold">Sunday:</span> 10:00 AM - 3:00 PM</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
