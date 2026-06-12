import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaHeart,
  FaHandsHelping,
  FaLeaf,
  FaUsers,
  FaSeedling,
  FaClock,
  FaBroom,
  FaAppleAlt,
  FaUserMd,
  FaShieldAlt,
} from 'react-icons/fa';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const values = [
  {
    icon: FaHeart,
    title: 'Compassion',
    desc: 'Caring for a gentle animal that depends on you awakens natural empathy — first for cows, then for all living beings.',
  },
  {
    icon: FaHandsHelping,
    title: 'Responsibility',
    desc: 'A cow must be fed, cleaned and cared for every single day. Seva teaches commitment that no textbook can.',
  },
  {
    icon: FaClock,
    title: 'Discipline & Patience',
    desc: 'Cows follow the rhythm of sunrise and sunset. Serving them builds routine, punctuality and calm patience.',
  },
  {
    icon: FaLeaf,
    title: 'Respect for Nature',
    desc: 'Through the cow you witness the full cycle of nature — soil, fodder, milk, manure and back to the soil.',
  },
  {
    icon: FaSeedling,
    title: 'Gratitude',
    desc: 'When you receive milk, ghee and fertile soil from an animal you serve, thankfulness becomes a daily habit.',
  },
  {
    icon: FaUsers,
    title: 'Sense of Purpose',
    desc: 'Selfless service to a voiceless being gives quiet, lasting satisfaction that material success rarely matches.',
  },
];

const careStandards = [
  {
    icon: FaBroom,
    title: 'Cleanliness',
    desc: 'Clean sheds, fresh bedding and hygienic milking areas — the first duty of every gaushala and the foundation of healthy cattle.',
  },
  {
    icon: FaAppleAlt,
    title: 'Proper Nutrition',
    desc: 'Green fodder, natural feed, clean water and seasonal supplements keep cows healthy and milk pure.',
  },
  {
    icon: FaUserMd,
    title: 'Veterinary Care',
    desc: 'Regular health check-ups, vaccination schedules and prompt treatment — every cow deserves professional medical attention.',
  },
  {
    icon: FaShieldAlt,
    title: 'Humane Treatment',
    desc: 'No cruelty, no overworking, dignified care for old and non-milking cows. Kindness is non-negotiable.',
  },
];

const participation = [
  {
    title: 'Visit or volunteer at a gaushala',
    desc: 'Spend a weekend morning feeding, grooming or simply spending time with cows. Most cow shelters warmly welcome helping hands — including Palanhar, where farm visits are open to all.',
  },
  {
    title: 'Sponsor fodder or daily feed',
    desc: 'Even a small monthly contribution covers green fodder, water and care for a cow. It is one of the most direct ways to serve.',
  },
  {
    title: 'Adopt or support a cow',
    desc: 'Many gaushalas let families symbolically adopt a cow and follow her health, milk and well-being — a beautiful tradition for children to grow up with.',
  },
  {
    title: 'Choose panchgavya and natural products',
    desc: 'Buying A2 milk, bilona ghee, vermi compost, dhoopbatti and other cow-based products keeps gaushalas economically self-reliant.',
  },
  {
    title: 'Bring Cow Seva into family life',
    desc: 'Involve children in feeding visits, celebrate festivals like Gopashtami and Govardhan Puja together, and let the next generation learn kindness by doing.',
  },
  {
    title: 'Support ethical dairy farming',
    desc: 'Encourage and invest in farms that practice cruelty-free, transparent dairy — so that good animal care becomes good economics.',
  },
];

const contributions = [
  {
    title: 'Agricultural',
    points: [
      'Gobar (cow dung) becomes compost and vermi compost that rebuilds soil health naturally',
      'Gomutra-based preparations support chemical-free pest management in organic farming',
      'Bullock power still serves small farms where machinery cannot reach',
    ],
  },
  {
    title: 'Environmental',
    points: [
      'Dung-based biogas (CBG) offers clean, renewable cooking and vehicle fuel',
      'Organic manure reduces dependence on synthetic fertilizers and protects groundwater',
      'Indigenous breeds are well adapted to local climates, needing fewer external inputs',
    ],
  },
  {
    title: 'Economic & Rural',
    points: [
      'Dairy income gives millions of small farming families a steady daily livelihood',
      'Value-added products — ghee, paneer, panchgavya items — multiply rural income',
      'Gaushalas create local employment in feeding, care, processing and distribution',
    ],
  },
  {
    title: 'Social & Cultural',
    points: [
      'The cow has been honoured as Gau Mata in Indian culture for thousands of years',
      'Festivals, fairs and community feeding traditions bring villages together',
      'Shared seva builds bonds across generations, families and communities',
    ],
  },
];

export default function CowSevaPage() {
  return (
    <>
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-b from-light-green/20 via-cream-white to-transparent pb-12 pt-16 md:pt-20"
      >
        <div className="container-custom text-center">
          <span className="section-eyebrow">गौ सेवा</span>
          <h1 className="mb-4">Cow Seva — Serving the Gentle Giver</h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
            Caring for cows is one of humanity&rsquo;s oldest acts of kindness — a practice
            that nurtures character, strengthens communities, enriches the soil and
            brings quiet joy to those who serve.
          </p>
        </div>
      </motion.section>

      {/* What is Cow Seva */}
      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          <motion.div {...fadeUp} className="space-y-5 text-lg leading-relaxed text-gray-700">
            <p>
              <strong className="text-dark-green">Cow Seva</strong> simply means serving and
              caring for cows — feeding them, keeping their shelters clean, attending to their
              health, and treating them with the gentleness they show us. In Indian tradition
              the cow is revered as <em>Gau Mata</em>, the mother who nourishes; but the value
              of Cow Seva is universal. Anyone, of any background, who has spent a morning
              feeding a calf or grooming a gentle Gir cow knows the calm it brings.
            </p>
            <p>
              At its heart, Cow Seva is a relationship. A cow gives milk, fertile manure,
              and companionship; in return she asks only for food, cleanliness, safety and
              kindness. Practising this exchange daily transforms not just the animal&rsquo;s
              life — it transforms ours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Character values */}
      <section className="section bg-cream-white/60">
        <div className="container-custom">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <span className="section-eyebrow">Inner Growth</span>
            <h2 className="mb-4">What Serving Cows Teaches Us</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Seva is as much for the giver as for the receiver. These are the qualities
              people consistently report growing through regular cow care.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card border border-primary-green/10 bg-white p-6 sm:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-green text-white">
                  <v.icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-xl">{v.title}</h3>
                <p className="leading-relaxed text-gray-600">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote — emotional well-being */}
      <section className="bg-gradient-to-br from-primary-green to-dark-green py-16 md:py-20">
        <div className="container-custom max-w-3xl text-center">
          <motion.blockquote {...fadeUp} className="text-white">
            <p className="font-display text-2xl font-bold leading-relaxed md:text-3xl">
              &ldquo;Ten quiet minutes beside a cow at sunrise can settle the mind more
              deeply than an hour of distraction. Seva is meditation in motion.&rdquo;
            </p>
            <footer className="mt-6 text-sm uppercase tracking-widest text-golden">
              The everyday experience of gaushala volunteers
            </footer>
          </motion.blockquote>
          <motion.p {...fadeUp} className="mx-auto mt-8 max-w-2xl text-white/85">
            Time spent caring for animals is widely associated with lower stress, emotional
            grounding and a renewed sense of gratitude. Families who serve together speak of
            stronger bonds; elders find routine and companionship; children learn empathy
            they carry for life.
          </motion.p>
        </div>
      </section>

      {/* Contributions grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <span className="section-eyebrow">Beyond the Gaushala</span>
            <h2 className="mb-4">How Cows Serve Society</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              The cow stands at the centre of a remarkable circular economy — feeding
              families, restoring farmland and powering rural livelihoods.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {contributions.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl border border-primary-green/10 bg-cream-white/50 p-6 sm:p-8"
              >
                <h3 className="mb-4 text-xl text-dark-green">{c.title}</h3>
                <ul className="space-y-3">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-golden" aria-hidden="true" />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeUp} className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-gray-600">
            From milk and ghee on the family table, to compost that brings tired soil back to
            life, to biogas that lights rural kitchens — well-cared-for cows quietly support
            sustainable farming, organic agriculture and the livelihoods of millions of
            farmers. Protecting them is not charity alone; it is sound environmental and
            economic sense.
          </motion.p>
        </div>
      </section>

      {/* Care standards */}
      <section className="section bg-cream-white/60">
        <div className="container-custom">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <span className="section-eyebrow">Seva Done Right</span>
            <h2 className="mb-4">The Four Duties of Cow Care</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              True seva is responsible seva. These are the standards we hold ourselves to
              at Palanhar — and encourage every cow shelter to uphold.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {careStandards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card border-t-4 border-primary-green bg-white p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-green/10 text-primary-green">
                  <c.icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-lg">{c.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to participate */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <span className="section-eyebrow">Start Today</span>
            <h2 className="mb-4">Six Ways You Can Practise Cow Seva</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Seva does not require a farm of your own. Here are practical ways anyone —
              in a village or a city — can begin.
            </p>
          </motion.div>
          <ol className="space-y-5">
            {participation.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex gap-5 rounded-xl border border-primary-green/10 bg-cream-white/40 p-5 sm:p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-golden font-bold text-dark-green">
                  {i + 1}
                </span>
                <div>
                  <h3 className="mb-1 text-lg">{p.title}</h3>
                  <p className="leading-relaxed text-gray-600">{p.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-green via-primary-green to-dark-green py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-10 top-8 text-8xl"
          >
            🐄
          </motion.div>
        </div>
        <div className="container-custom relative z-10 max-w-3xl text-center">
          <motion.div {...fadeUp} className="text-white">
            <h2 className="mb-4 !text-white">Come, Serve With Us</h2>
            <p className="mb-8 text-lg text-white/85">
              Visit our gaushala on NH-48, spend a morning with our 200 Gir cows and their
              calves, and experience Gau Seva first-hand. Every visit, every product you
              choose and every contribution keeps this circle of care turning.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="btn btn-golden">
                Plan a Farm Visit
              </Link>
              <Link
                to="/invest"
                className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary-green"
              >
                Support Ethical Dairy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
