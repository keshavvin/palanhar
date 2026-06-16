import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LeafHeading from './LeafHeading';

// The five headline product lines, in the order shown in the reference design.
const products = [
  { name: 'देसी गाय का A2 दूध एवं A2 घी', icon: '🥛', tint: 'from-amber-50 to-white' },
  { name: 'जैविक खाद', icon: '🌱', tint: 'from-green-50 to-white' },
  { name: 'बायोपेस्टिसाइड', icon: '🧴', tint: 'from-lime-50 to-white' },
  { name: 'बायोपेंट', icon: '🪣', tint: 'from-sky-50 to-white' },
  { name: 'CBG', sub: '(संपीड़ित जैव गैस)', icon: '🛢️', tint: 'from-emerald-50 to-white' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HomeProducts() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <LeafHeading className="mb-10">हमारे उत्पाद</LeafHeading>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5"
        >
          {products.map((product) => (
            <motion.div key={product.name} variants={cardVariants}>
              <Link
                to="/products"
                className="card flex h-full flex-col items-center justify-center border border-primary-green/10 bg-white p-6 text-center"
              >
                <span
                  className={`mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br ${product.tint} text-5xl shadow-inner`}
                >
                  {product.icon}
                </span>
                <h3 className="text-lg font-bold text-dark-green">{product.name}</h3>
                {product.sub && (
                  <p className="mt-0.5 text-xs font-medium text-gray-500">{product.sub}</p>
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-center text-base text-gray-600 md:text-lg"
        >
          सभी उत्पाद सीधे हमारे एकीकृत गौ-आधारित उत्पादन तंत्र से।
        </motion.p>
      </div>
    </section>
  );
}
