import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaExpand, FaTimes } from 'react-icons/fa';

const galleryImages = [
  {
    id: 1,
    category: 'seva',
    src: '/gallery-seva.jpg',
    title: 'सामुदायिक गौ सेवा — चारा खिलाने का समय',
    desc: 'परिवार और स्वयंसेवक हमारी गिर गायों को ताज़ा हरा चारा खिलाते हुए — ऐसी सेवा जो पूरे समुदाय को एक साथ लाती है.',
  },
  {
    id: 2,
    category: 'care',
    src: '/gallery-care.jpg',
    title: 'दैनिक देखभाल और साज-संभाल',
    desc: 'हर गाय को रोज़ नहलाया, ब्रश किया और देखभाल की जाती है — स्वच्छता और आराम हमारी गौशाला के पहले कर्तव्य हैं.',
  },
  {
    id: 3,
    category: 'herd',
    src: '/gallery-herd.jpg',
    title: 'शाम को गौशाला की वापसी',
    desc: 'सूर्यास्त के समय अपने देखभालकर्ताओं के साथ घर लौटता हमारा झुंड — NH-48 पर फार्म जीवन की शाश्वत लय.',
  },
  {
    id: 4,
    category: 'seva',
    src: '/hero-banner-1.jpg',
    title: 'परिवार के साथ गौ पूजा',
    desc: 'मालाओं से सजी गायें, मुस्कुराते चेहरे — पीढ़ियाँ मिलकर गौ माता का सम्मान करती हुईं.',
  },
  {
    id: 5,
    category: 'seva',
    src: '/hero-banner-2.jpg',
    title: 'सेवा में साथ पीढ़ियाँ',
    desc: 'माता-पिता और बच्चे साथ-साथ गायों और बछड़ों की देखभाल करते हुए — संस्कार जो करके सिखाए जाते हैं.',
  },
  {
    id: 6,
    category: 'care',
    src: '/hero-banner-3.jpg',
    title: 'गौ माता के लिए प्रेम',
    desc: 'सुनहरी शाम में एक स्नेहपूर्ण आलिंगन — वह बंधन जो पालनहार के हर काम के मूल में है.',
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
  { id: 'all', label: 'सभी पल' },
  { id: 'seva', label: 'गौ सेवा' },
  { id: 'care', label: 'देखभाल और प्रेम' },
  { id: 'herd', label: 'झुंड और फार्म' },
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
            पालनहार फार्म्स से सेवा, देखभाल और एकजुटता के पल
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
                aria-label={`${image.title} देखें`}
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
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5 pt-14 text-left">
                    <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-golden">
                      {categoryLabel(image.category)}
                    </p>
                    <h3 className="text-base font-bold leading-snug text-[#d4edd5] sm:text-lg">
                      {image.title}
                    </h3>
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
                  aria-label="छवि बंद करें"
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
          <h3 className="text-3xl font-bold text-dark-green mb-4">हमारी गौशाला देखने आएँ</h3>
          <p className="text-gray-600 mb-6 text-lg">
            गौ सेवा को प्रत्यक्ष अनुभव करें — हमारी गायों और उनके देखभालकर्ताओं के साथ एक सुबह बिताएँ
          </p>
          <Link to="/contact" className="btn btn-primary inline-block">
            फार्म भ्रमण निर्धारित करें
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
