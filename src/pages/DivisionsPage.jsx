import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { divisions, BAR, ICON } from '../data/divisions';

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.04 } } };
const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function DivisionsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark-green text-white">
        <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
          <img src="/hero-banner-3.jpg" alt="" className="h-full w-full object-cover" draggable="false" />
          <div className="absolute inset-0 bg-gradient-to-br from-dark-green via-dark-green/85 to-primary-green/70" />
        </div>
        <div className="container-custom relative z-10 py-16 text-center md:py-20">
          <span className="mb-3 inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/90">
            पालनहार समूह
          </span>
          <h1 className="!text-white">हमारे व्यवसाय क्षेत्र</h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-white/85">
            {divisions.length} विविध क्षेत्र — किसी भी क्षेत्र पर क्लिक करके विस्तार से जानें।
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section bg-cream-white/40">
        <div className="container-custom">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
          >
            {divisions.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.slug} variants={fadeUp}>
                  <Link
                    to={`/divisions/${item.slug}`}
                    className="group block h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                  >
                    <div className="flex h-24 items-center justify-center bg-gradient-to-b from-gray-50 to-white sm:h-28">
                      <Icon className={`text-5xl transition-transform duration-300 group-hover:scale-110 ${ICON[item.color]}`} aria-hidden="true" />
                    </div>
                    <div className={`flex min-h-[3.25rem] items-center justify-center px-2 py-2.5 text-center ${BAR[item.color]}`}>
                      <span className="text-[11px] font-bold leading-tight text-white sm:text-xs">{item.label}</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
