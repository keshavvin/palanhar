import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaExpand, FaTimes } from 'react-icons/fa';

const galleryImages = [
  {
    id: 1,
    category: 'seva',
    src: '/gallery-seva.jpg',
    title: 'कम्युनिटी गौ सेवा — फीडिंग टाइम',
    desc: 'फैमिलीज़ एंड वॉलंटियर्स ऑफरिंग फ्रेश ग्रीन फॉडर टू अवर गिर काउज़ — सेवा दैट ब्रिंग्स द होल कम्युनिटी टुगेदर.',
  },
  {
    id: 2,
    category: 'care',
    src: '/gallery-care.jpg',
    title: 'डेली केयर & ग्रूमिंग',
    desc: 'एवरी काउ इज़ बेथ्ड, ब्रश्ड एंड केयर्ड फॉर डेली — क्लीनलीनेस एंड कम्फर्ट आर द फर्स्ट ड्यूटीज़ ऑफ अवर गौशाला.',
  },
  {
    id: 3,
    category: 'herd',
    src: '/gallery-herd.jpg',
    title: 'ईवनिंग रिटर्न टू द गौशाला',
    desc: 'अवर हर्ड वॉकिंग होम एट सनसेट विद देयर केयरटेकर्स — द टाइमलेस रिदम ऑफ फार्म लाइफ ऑन NH-48.',
  },
  {
    id: 4,
    category: 'seva',
    src: '/hero-banner-1.jpg',
    title: 'गौ पूजा विद द फैमिली',
    desc: 'गार्लैंडेड काउज़, स्माइलिंग फेसेज़ — जेनरेशन्स ऑनरिंग गौ माता टुगेदर.',
  },
  {
    id: 5,
    category: 'seva',
    src: '/hero-banner-2.jpg',
    title: 'जेनरेशन्स टुगेदर इन सेवा',
    desc: 'पेरेंट्स एंड चिल्ड्रन केयरिंग फॉर काउज़ एंड काव्स साइड बाय साइड — वैल्यूज़ पास्ड ऑन बाय डूइंग.',
  },
  {
    id: 6,
    category: 'care',
    src: '/hero-banner-3.jpg',
    title: 'लव फॉर गौ माता',
    desc: 'अ जेंटल एम्ब्रेस एट गोल्डन आवर — द बॉन्ड एट द हार्ट ऑफ एवरीथिंग पालनहार डज़.',
  },
  {
    id: 7,
    category: 'naari',
    src: '/naari/award-ceremony.jpg',
    title: 'नारी शक्ति — अवॉर्ड सेरेमनी',
    desc: 'पालनहार नारी शक्ति की प्रशिक्षित बहनों को ट्रॉफी एवं सर्टिफिकेट से सम्मानित किया गया — स्किल से आत्मनिर्भरता की ओर।',
  },
  {
    id: 9,
    category: 'naari',
    src: '/naari/group-photo.jpg',
    title: 'नारी शक्ति परिवार',
    desc: 'प्रशिक्षण केंद्र के आँगन में पालनहार नारी शक्ति की बहनें एवं मेंटर्स — एक सशक्त समुदाय।',
  },
  {
    id: 10,
    category: 'naari',
    src: '/naari/sewing-training.jpg',
    title: 'सिलाई प्रशिक्षण केंद्र',
    desc: 'सिलाई-कढ़ाई कौशल प्रशिक्षण के बाद बहनों को सर्टिफिकेट वितरण — स्वरोजगार की नींव।',
  },
  {
    id: 11,
    category: 'naari',
    src: '/naari/certificate-distribution.jpg',
    title: 'सर्टिफिकेट वितरण',
    desc: 'कौशल प्रशिक्षण पूर्ण करने पर प्रतिभागियों को प्रमाण-पत्र — मेहनत एवं लगन का सम्मान।',
  },
  {
    id: 12,
    category: 'naari',
    src: '/naari/skill-class.jpg',
    title: 'लाइव स्किल क्लास',
    desc: 'चलते सिलाई-सत्र में सीखती-सिखाती बहनें — पालनहार का जमीनी महिला सशक्तिकरण कार्यक्रम।',
  },
];

const categories = [
  { id: 'all', label: 'ऑल मोमेंट्स' },
  { id: 'seva', label: 'गौ सेवा' },
  { id: 'care', label: 'केयर & लव' },
  { id: 'herd', label: 'हर्ड & फार्म' },
  { id: 'naari', label: 'नारी शक्ति' },
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
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">गैलरी</h2>
          <p className="text-xl text-gray-600">
            मोमेंट्स ऑफ सेवा, केयर एंड टुगेदरनेस फ्रॉम पालनहार फार्म्स
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
                aria-label={`व्यू ${image.title}`}
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
                  aria-label="क्लोज़ इमेज"
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
          <h3 className="text-3xl font-bold text-dark-green mb-4">विज़िट अवर गौशाला</h3>
          <p className="text-gray-600 mb-6 text-lg">
            एक्सपीरियंस गौ सेवा फर्स्ट-हैंड — स्पेंड अ मॉर्निंग विद अवर काउज़ एंड देयर केयरटेकर्स
          </p>
          <Link to="/contact" className="btn btn-primary inline-block">
            शेड्यूल अ फार्म विज़िट
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
