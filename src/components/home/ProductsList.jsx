import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import LeafHeading from './LeafHeading';
import { dairyProducts, panchgavyaProducts, agricultureProducts } from '../../data/products';

// All products, grouped by category, with name + icon + features list.
const groups = [
  { key: 'dairy', title: 'डेयरी उत्पाद', items: dairyProducts },
  { key: 'panchgavya', title: 'पंचगव्य एवं गौ-आधारित उत्पाद', items: panchgavyaProducts },
  { key: 'agriculture', title: 'कृषि उत्पाद', items: agricultureProducts },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function ProductsList() {
  return (
    <section className="section bg-cream-white">
      <div className="container-custom">
        <LeafHeading className="mb-4">हमारे सभी उत्पाद</LeafHeading>
        <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-gray-700 md:text-lg">
          एक गाय &ndash; अनेक उत्पाद। शुद्ध A2 डेयरी, पंचगव्य एवं गौ-आधारित प्राकृतिक उत्पाद, तथा जैविक कृषि उपज।
        </p>

        <div className="space-y-12">
          {groups.map((group) => (
            <div key={group.key}>
              <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-dark-green md:text-2xl">
                <span className="h-6 w-1.5 rounded-full bg-primary-green" aria-hidden="true" />
                {group.title}
              </h3>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              >
                {group.items.map((product) => (
                  <motion.div
                    variants={fadeUp}
                    key={product.id}
                    className="card flex h-full flex-col border border-primary-green/10 bg-white p-5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cream-white text-3xl shadow-inner">
                        {product.image}
                      </span>
                      <div className="min-w-0">
                        <h4 className="font-bold leading-snug text-dark-green">{product.name}</h4>
                        <p className="mt-0.5 text-sm font-bold text-primary-green">{product.price}</p>
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{product.description}</p>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {product.features.map((f) => (
                        <li
                          key={f}
                          className="rounded-full bg-primary-green/10 px-3 py-1 text-xs font-semibold text-primary-green"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/products" className="btn btn-primary inline-flex items-center gap-2">
            सभी उत्पाद देखें <FaArrowRightLong aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
