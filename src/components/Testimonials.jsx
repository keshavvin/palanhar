import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  // First card always visible; cards 2-3 only on md+ (CSS, no JS resize logic)
  const visibleTestimonials = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-cream-white/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">What Customers Say</h2>
          <p className="text-xl text-gray-600">Real reviews from our happy customers</p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {visibleTestimonials.map((testimonial, i) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`card bg-white p-8 shadow-lg hover:shadow-xl transition-all ${
                    i > 0 ? 'hidden md:block' : ''
                  }`}
                >
                  {/* Rating Stars */}
                  <div className="flex gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <FaStar key={j} className="text-golden" size={18} />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.review}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center pt-6 border-t border-light-green/30">
                    <div className="text-4xl mr-4">{testimonial.image}</div>
                    <div>
                      <h4 className="font-bold text-dark-green">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-2 lg:-left-12 top-1/3 transform -translate-y-1/2 bg-primary-green text-white p-3 rounded-full hover:bg-dark-green transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 lg:-right-12 top-1/3 transform -translate-y-1/2 bg-primary-green text-white p-3 rounded-full hover:bg-dark-green transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Next testimonial"
          >
            <FaChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                animate={{
                  backgroundColor: i === current ? '#2E7D32' : '#D1D5DB',
                  scale: i === current ? 1.2 : 1,
                }}
                onClick={() => {
                  setCurrent(i);
                  setAutoplay(false);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                className="w-3 h-3 rounded-full transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
