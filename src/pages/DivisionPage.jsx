import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';
import { divisions, getDivision, GRAD, BAR, ICON } from '../data/divisions';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

export default function DivisionPage() {
  const { slug } = useParams();
  const division = getDivision(slug);
  const [imgOk, setImgOk] = useState(true);

  if (!division) {
    return (
      <section className="section bg-cream-white/40">
        <div className="container-custom text-center">
          <h1 className="mb-4">क्षेत्र नहीं मिला</h1>
          <p className="mb-6 text-gray-600">यह व्यवसाय क्षेत्र उपलब्ध नहीं है।</p>
          <Link to="/divisions" className="btn btn-primary">सभी क्षेत्र देखें</Link>
        </div>
      </section>
    );
  }

  const Icon = division.icon;
  const index = divisions.findIndex((d) => d.slug === slug);
  const related = Array.from({ length: 6 }, (_, i) => divisions[(index + 1 + i) % divisions.length]);

  return (
    <div>
      {/* Hero */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${GRAD[division.color]} text-white`}>
        {imgOk && (
          <img
            src={`/divisions/${division.slug}.jpg`}
            alt=""
            aria-hidden="true"
            onError={() => setImgOk(false)}
            className="absolute inset-0 h-full w-full object-cover opacity-25"
            draggable="false"
          />
        )}
        <div className="container-custom relative z-10 py-16 md:py-20">
          <Link to="/divisions" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-white">
            <FaArrowLeft aria-hidden="true" /> सभी क्षेत्र
          </Link>
          <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <motion.span variants={fadeUp} className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg">
              <Icon className={`text-4xl ${ICON[division.color]}`} aria-hidden="true" />
            </motion.span>
            <motion.div variants={fadeUp}>
              <span className="mb-2 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/90">
                पालनहार समूह
              </span>
              <h1 className="!text-white">{division.label}</h1>
              <p className="mt-2 text-lg font-semibold text-white/90">{division.tagline}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro + offerings */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-gray-700"
          >
            {division.intro}
          </motion.p>

          <h2 className="mb-6 text-center text-2xl md:text-3xl">हमारी सेवाएँ</h2>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {division.offerings.map((o) => (
              <motion.div key={o} variants={fadeUp} className="card border border-primary-green/10 bg-white p-6">
                <span className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 ${ICON[division.color]}`}>
                  <FaCheckCircle size={20} aria-hidden="true" />
                </span>
                <p className="font-semibold text-dark-green">{o}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section bg-[#E8F5E9]/50">
        <div className="container-custom">
          <h2 className="mb-8 text-center text-2xl md:text-3xl">क्यों पालनहार</h2>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 sm:grid-cols-3">
            {division.highlights.map((h) => (
              <motion.div key={h} variants={fadeUp} className="flex items-center gap-3 rounded-2xl border border-primary-green/10 bg-white p-5 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-golden/15 text-golden">
                  <FaStar aria-hidden="true" />
                </span>
                <span className="font-semibold text-dark-green">{h}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-green to-dark-green py-14 text-white">
        <div className="container-custom text-center">
          <h2 className="!text-white mb-3">{division.label} में रुचि है?</h2>
          <p className="mx-auto mb-7 max-w-xl text-white/85">हमसे जुड़ें — हमारी टीम आपकी पूरी मदद करेगी।</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="btn btn-golden">संपर्क करें</Link>
            <Link to="/ecosystem" className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary-green">
              पूरा इकोसिस्टम देखें
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-cream-white/40">
        <div className="container-custom">
          <h2 className="mb-8 text-center text-2xl md:text-3xl">अन्य क्षेत्र</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {related.map((d) => {
              const RIcon = d.icon;
              return (
                <Link key={d.slug} to={`/divisions/${d.slug}`} className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-20 items-center justify-center bg-gradient-to-b from-gray-50 to-white">
                    <RIcon className={`text-4xl transition-transform duration-300 group-hover:scale-110 ${ICON[d.color]}`} aria-hidden="true" />
                  </div>
                  <div className={`flex min-h-[3rem] items-center justify-center px-2 py-2 text-center ${BAR[d.color]}`}>
                    <span className="text-[10px] font-bold leading-tight text-white">{d.label}</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link to="/divisions" className="btn btn-outline inline-flex items-center gap-2">
              सभी क्षेत्र देखें <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
