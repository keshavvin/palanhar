import { motion } from 'framer-motion';
import Gallery from '../components/Gallery';

export default function GalleryPage() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-20 pb-10 bg-gradient-to-b from-light-green/20 to-transparent"
      >
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-dark-green mb-4">Gallery</h1>
          <p className="text-xl text-gray-600">Moments of Gau Seva, care and farm life at Palanhar</p>
        </div>
      </motion.section>
      <Gallery />
    </>
  );
}
