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
    { year: '2014', event: 'Started with 50 acres and 100 cattle' },
    { year: '2017', event: 'Expanded to 200 acres and 300 cattle' },
    { year: '2020', event: 'Achieved organic certification' },
    { year: '2024', event: 'Reached 500+ acres and 500+ cattle' },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{margin: '0 auto',display: 'block',width: 'auto',textAlign: 'center'}}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4" >About Palanhar Farms</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto"   style={{    margin: '0 auto'}}>
            Building a sustainable future through pure dairy and organic agriculture
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
          <motion.div variants={itemVariants} className="card bg-gradient-to-br from-primary-green/10 to-light-green/10 p-8"  style={{padding:'30px'}}>
            <h3 className="text-2xl font-bold text-primary-green mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Providing healthy dairy products and sustainable agriculture solutions that nourish families and protect our environment. We believe in delivering pure, organic produce that supports a healthier lifestyle.
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
          style={{    margin: '0 auto',    padding: '35px 0px'}}>
          <h3 className="text-3xl font-bold text-dark-green mb-6" style={{    margin: '0 auto',    padding: '5px 0px'}}>Our Journey</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Palanhar Farms was founded with a vision to revolutionize dairy farming and agriculture in our region. Starting with just 50 acres and 100 cattle, we built our foundation on principles of sustainability, quality, and respect for nature.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Over the years, we've grown from a small family farm to a trusted brand serving over 1000 happy customers. Our commitment to organic farming practices and animal welfare has made us the preferred choice for health-conscious families.
              </p>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Today, with 500+ acres of farmland and 500+ healthy cattle, we continue to lead by example in sustainable agriculture. We've implemented modern farming techniques while maintaining our core values of purity and quality.
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
          <h3 className="text-3xl font-bold text-dark-green mb-8 text-center" style={{    margin: '50 auto',    padding: '25px 0px'}}>Our Timeline</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card bg-gradient-to-br from-primary-green/20 to-light-green/20 p-6 text-center hover:shadow-lg"
              style={{padding: '35px 0px'}}>
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
         style={{padding: '35px 0px'}}>
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
                 style={{padding: '35px 0px'}}>
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
