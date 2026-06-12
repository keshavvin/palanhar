import { motion } from 'framer-motion';
import { FaLeaf, FaLightbulb, FaAward, FaUsers } from 'react-icons/fa';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const timeline = [
    { year: 'Foundation', event: 'Began with a cow gaushala and traditional bilona dairy' },
    { year: 'Growth', event: 'Scaled to 200 Gir cows producing 2,000 litres of A2 milk daily' },
    { year: 'Integration', event: 'Added CNG biogas, biofertilizer and panchgavya product lines' },
    { year: 'Today', event: '1000+ natural products and a transparent investor platform' },
  ];

  const values = [
    {
      icon: FaLeaf,
      title: 'Sustainability',
      description: 'Committed to eco-friendly farming practices'
    },
    {
      icon: FaAward,
      title: 'Quality',
      description: 'Premium products meeting highest standards'
    },
    {
      icon: FaUsers,
      title: 'Community',
      description: 'Supporting local farmers and families'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Modern techniques for better farming'
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-cream-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">About Palanhar Farms</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Gau Seva is our identity — building a sustainable future through pure
            dairy and organic agriculture
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <motion.div variants={itemVariants} className="card bg-gradient-to-br from-primary-green/10 to-light-green/10 p-8">
            <h3 className="text-2xl font-bold text-primary-green mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Gau seva, gau samvardhan, gau samriddhi — serving and protecting our cows
              first, and from that care providing healthy dairy products and sustainable
              agriculture solutions that nourish families and protect our environment.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="card bg-gradient-to-br from-golden/10 to-orange-100/10 p-8">
            <h3 className="text-2xl font-bold text-dark-green mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              Building a greener and healthier future by advancing sustainable farming practices. We envision a world where every family has access to pure, organic food while protecting our planet for future generations.
            </p>
          </motion.div>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card bg-white p-8 md:p-12 mb-16 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-dark-green mb-6">Our Journey</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Palanhar was founded on the principle of &ldquo;one cow, many products, infinite
                possibilities&rdquo;. From our farm on NH-48 near Rajokri Village, New Delhi, we
                built a modern gaushala of indigenous cows cared for with natural feed
                and cruelty-free practices.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today our 200 Gir cows produce around 2,000 litres of A2 milk every day —
                churned into bilona ghee, makkhan, paneer and dahi the traditional way, and
                trusted by health-conscious families across Delhi NCR.
              </p>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our integrated dairy system turns every output into value: gobar becomes
                compressed biogas (CBG) and vermi compost, gomutra becomes ayurvedic
                panchgavya products — over 1000+ natural products from a single ecosystem.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our journey continues as we expand our product range, improve our farming practices, and inspire other farmers to adopt sustainable methods for a greener planet.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-dark-green mb-8 text-center">Our Timeline</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card bg-gradient-to-br from-primary-green/20 to-light-green/20 p-6 text-center hover:shadow-lg"
              >
                <p className="text-2xl font-bold text-primary-green mb-2">{item.year}</p>
                <p className="text-gray-700 text-sm font-semibold">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-dark-green mb-8 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="card bg-white p-6 text-center hover:shadow-xl hover:bg-cream-white transition-all"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-br from-primary-green to-dark-green rounded-full p-4 text-white">
                      <Icon size={32} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-dark-green mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
