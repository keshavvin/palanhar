import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaExpand, FaTimes } from 'react-icons/fa';

const galleryImages = [
  {
    id: 1,
    category: 'seva',
    src: '/gallery-seva.jpg',
    title: 'Community Gau Seva — Feeding Time',
    desc: 'Families and volunteers offering fresh green fodder to our Gir cows — seva that brings the whole community together.',
  },
  {
    id: 2,
    category: 'care',
    src: '/gallery-care.jpg',
    title: 'Daily Care & Grooming',
    desc: 'Every cow is bathed, brushed and cared for daily — cleanliness and comfort are the first duties of our gaushala.',
  },
  {
    id: 3,
    category: 'herd',
    src: '/gallery-herd.jpg',
    title: 'Evening Return to the Gaushala',
    desc: 'Our herd walking home at sunset with their caretakers — the timeless rhythm of farm life on NH-48.',
  },
  {
    id: 4,
    category: 'seva',
    src: '/hero-banner-1.jpg',
    title: 'Gau Puja with the Family',
    desc: 'Garlanded cows, smiling faces — generations honouring Gau Mata together.',
  },
  {
    id: 5,
    category: 'seva',
    src: '/hero-banner-2.jpg',
    title: 'Generations Together in Seva',
    desc: 'Parents and children caring for cows and calves side by side — values passed on by doing.',
  },
  {
    id: 6,
    category: 'care',
    src: '/hero-banner-3.jpg',
    title: 'Love for Gau Mata',
    desc: 'A gentle embrace at golden hour — the bond at the heart of everything Palanhar does.',
  },
];

const categories = [
  { id: 'all', label: 'All Moments' },
  { id: 'seva', label: 'Gau Seva' },
  { id: 'care', label: 'Care & Love' },
  { id: 'herd', label: 'Herd & Farm' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredImages =
    filter === 'all' ? galleryImages : galleryImages.filter((img) => img.category === filter);

  // Close lightbox on Escape
  useEffect(() => {
    if (!selectedImage) return undefined;
    const onKey = (e) => e.key === 'Escape' && setSelectedImage(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedImage]);

  const categoryLabel = (id) => categories.find((c) => c.id === id)?.label ?? id;

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
          <span className="section-eyebrow">गौ सेवा के पल</span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">Gallery</h2>
          <p className="text-xl text-gray-600">
            Moments of seva, care and togetherness from Palanhar Farms
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
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              aria-pressed={filter === cat.id}
              animate={{
                backgroundColor: filter === cat.id ? '#2E7D32' : '#ffffff',
                color: filter === cat.id ? '#ffffff' : '#2E7D32',
              }}
              className="px-6 py-3 rounded-lg border-2 border-primary-green font-semibold transition-all duration-300"
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Photo grid */}
        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, i) => (
              <motion.button
                key={image.id}
                type="button"
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(image)}
                aria-label={`View ${image.title}`}
                className={`card group relative cursor-pointer overflow-hidden bg-white text-left ${
                  i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${i === 0 ? 'h-64 sm:h-full sm:min-h-[26rem]' : 'h-64'}`}>
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-dark-green/0 transition-colors duration-300 group-hover:bg-dark-green/50">
                    <FaExpand
                      className="text-3xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </div>
                  {/* Caption bar */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10">
                    <h3 className="font-bold text-white">{image.title}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wide text-golden">
                      {categoryLabel(image.category)}
                    </p>
                  </div>
                </div>
              </motion.button>
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
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
              onClick={() => setSelectedImage(null)}
              role="dialog"
              aria-modal="true"
              aria-label={selectedImage.title}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close image"
                  className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                >
                  <FaTimes aria-hidden="true" />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[65vh] w-full object-cover"
                />
                <div className="p-6">
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-golden">
                    {categoryLabel(selectedImage.category)}
                  </p>
                  <h2 className="mb-2 text-2xl font-bold text-dark-green md:text-3xl">
                    {selectedImage.title}
                  </h2>
                  <p className="text-gray-700">{selectedImage.desc}</p>
                </div>
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
          <h3 className="text-3xl font-bold text-dark-green mb-4">Visit Our Gaushala</h3>
          <p className="text-gray-600 mb-6 text-lg">
            Experience Gau Seva first-hand — spend a morning with our cows and their caretakers
          </p>
          <Link to="/contact" className="btn btn-primary inline-block">
            Schedule a Farm Visit
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
