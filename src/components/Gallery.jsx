import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExpand, FaTimes } from 'react-icons/fa';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, category: 'farm', icon: '🌾', title: 'Golden Wheat Fields' },
    { id: 2, category: 'cattle', icon: '🐄', title: 'Healthy Dairy Cattle' },
    { id: 3, category: 'harvest', icon: '🥬', title: 'Fresh Harvest' },
    { id: 4, category: 'farm', icon: '🚜', title: 'Modern Farm Equipment' },
    { id: 5, category: 'cattle', icon: '🐮', title: 'Premium Livestock' },
    { id: 6, category: 'harvest', icon: '🍅', title: 'Organic Vegetables' },
    { id: 7, category: 'farm', icon: '☀️', title: 'Sunrise Over Fields' },
    { id: 8, category: 'cattle', icon: '🧈', title: 'Dairy Production' },
    { id: 9, category: 'harvest', icon: '🌽', title: 'Corn Field' },
  ];

  const categories = ['all', 'farm', 'cattle', 'harvest'];
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' ? galleryImages : galleryImages.filter(img => img.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
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
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">Gallery</h2>
          <p className="text-xl text-gray-600">
            Beautiful moments from Palanhar Farms
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              animate={{
                backgroundColor: filter === cat ? '#2E7D32' : 'white',
                color: filter === cat ? 'white' : '#2E7D32',
              }}
              className="px-6 py-3 rounded-lg border-2 border-primary-green font-semibold transition-all duration-300 capitalize"
            >
              {cat === 'all' ? 'All Images' : cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, i) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className={`card overflow-hidden cursor-pointer group ${
                  i % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className="relative h-48 md:h-64 bg-gradient-to-br from-light-green/20 to-primary-green/20 flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-6xl md:text-9xl group-hover:scale-110 transition-transform duration-300"
                  >
                    {image.icon}
                  </motion.div>

                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0, backgroundColor: 'rgba(46, 125, 50, 0)' }}
                    whileHover={{ opacity: 1, backgroundColor: 'rgba(46, 125, 50, 0.7)' }}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer transition-all duration-300"
                    onClick={() => setSelectedImage(image)}
                  >
                    <FaExpand className="text-white text-3xl" />
                  </motion.div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-dark-green group-hover:text-primary-green transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-sm text-gray-600 capitalize">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 20 }}
                className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                >
                  <FaTimes />
                </button>

                <div className="bg-gradient-to-br from-light-green/20 to-primary-green/20 rounded-lg h-96 flex items-center justify-center mb-6">
                  <div className="text-9xl">{selectedImage.icon}</div>
                </div>

                <h2 className="text-3xl font-bold text-dark-green mb-2">{selectedImage.title}</h2>
                <p className="text-gray-600 capitalize mb-4">{selectedImage.category}</p>
                <p className="text-gray-700">
                  Experience the beauty of sustainable farming and organic agriculture at Palanhar Farms.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-dark-green mb-4">Visit Our Farm</h3>
          <p className="text-gray-600 mb-6 text-lg">
            Experience the beauty of sustainable farming firsthand
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          >
            Schedule a Farm Visit
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
