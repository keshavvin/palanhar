import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const pillars = [
  {
    hindi: 'गो सेवा',
    title: 'Serve',
    desc: 'Daily care, natural feed, clean shelters and veterinary attention for every cow in our gaushala.',
    icon: '🙏',
  },
  {
    hindi: 'गो संवर्धन',
    title: 'Nurture',
    desc: 'Protecting and growing our indigenous Gir herd — cruelty-free breeding and lifelong shelter, even after milking years.',
    icon: '🐄',
  },
  {
    hindi: 'गो समृद्धि',
    title: 'Prosper',
    desc: 'Well-cared-for cows give pure A2 dairy, panchgavya and fertile soil — prosperity for farmers, families and investors.',
    icon: '🌾',
  },
];

export default function GauSevaHighlight() {
  return (
    <section className="section bg-cream-white/60">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="section-eyebrow">गौ सेवा</span>
          <h2 className="mb-4">Seva First. Everything Else Follows.</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            One cow, our identity — our resolve, everyone&rsquo;s welfare. Every
            Palanhar product and every investment begins with the loving service
            of our cows.
          </p>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.hindi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card border border-primary-green/10 bg-white p-6 text-center sm:p-8"
            >
              <div className="mb-4 text-5xl" aria-hidden="true">{p.icon}</div>
              <p className="font-display text-2xl font-bold text-golden">{p.hindi}</p>
              <h3 className="mb-3 text-xl">{p.title}</h3>
              <p className="leading-relaxed text-gray-600">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link to="/gau-seva" className="btn btn-primary group flex items-center gap-2">
            Discover Cow Seva
            <FaArrowRight className="transition-transform group-hover:translate-x-2" aria-hidden="true" />
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Plan a Farm Visit
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
