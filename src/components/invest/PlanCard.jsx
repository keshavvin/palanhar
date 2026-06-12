import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { formatINR } from '../../data/investorData';

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function PlanCard({ plan }) {
  return (
    <div className={`h-full ${plan.popular ? 'lg:z-10 lg:scale-[1.04]' : ''}`}>
      <motion.div variants={itemVariants} className="h-full">
        <article
          className={`card relative flex h-full flex-col bg-white p-6 sm:p-8 ${
            plan.popular ? 'border-2 border-golden' : 'border border-gray-100'
          }`}
        >
          {plan.popular && (
            <div
              className="absolute top-6 -right-12 rotate-45 bg-golden px-12 py-1.5 text-xs font-bold uppercase tracking-wider text-dark-green shadow-md"
              aria-hidden="true"
            >
              Most Popular
            </div>
          )}

          <div className="mb-4 text-5xl" aria-hidden="true">{plan.icon}</div>
          <h3 className="mb-1 text-xl sm:text-2xl">{plan.name}</h3>
          <p className="mb-5 text-sm text-gray-500">{plan.tagline}</p>

          {/* Price tag */}
          <div className="mb-6 rounded-xl bg-cream-white px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Min. Investment</p>
            <p className="text-3xl font-extrabold text-dark-green">
              {formatINR(plan.minAmount)}
              {plan.popular && <span className="sr-only"> — most popular plan</span>}
            </p>
          </div>

          <ul className="mb-8 space-y-3">
            {plan.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2.5 text-sm text-gray-700">
                <FaCheckCircle className="mt-0.5 shrink-0 text-primary-green" aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <Link
            to={`/investor/register?plan=${plan.id}`}
            className={`btn mt-auto w-full text-center ${plan.popular ? 'btn-golden' : 'btn-primary'}`}
          >
            Invest Now
          </Link>
        </article>
      </motion.div>
    </div>
  );
}
