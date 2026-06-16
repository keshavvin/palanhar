import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaLinkedinIn } from 'react-icons/fa';
import { image } from 'framer-motion/client';

// Drop real headshots at public/team/<slug>.jpg and they replace the icon.
const leaders = [
  {
    image: '🥛',
    slug: 'mrinal-kanti-ghosh',
    photo: '/naari/banner-felicitation.jpg',
    name: 'डॉ. मृणाल कांति घोष',
    role: 'डायरेक्टर',
    exp: '35+ वर्षों का अनुभव — रिसर्च, टेक्नोलॉजी कमर्शियलाइज़ेशन एवं रूरल इनोवेशन में।',
  },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

function Avatar({ slug, name, photo }) {
  const [imgOk, setImgOk] = useState(true);
  if (imgOk) {
    return (
      <img
        src={photo ?? `/team/${slug}.jpg`}
        alt={name}
        onError={() => setImgOk(false)}
        className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-md ring-1 ring-primary-green/15"
        draggable="false"
      />
    );
  }
  return (
    <span className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-primary-green to-dark-green text-white shadow-md ring-1 ring-primary-green/15">
      <FaUserTie size={44} aria-hidden="true" />
    </span>
  );
}

export default function Leadership() {
  return (
    <section className="section bg-[#E8F5E9]/40">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="section-eyebrow">लीडरशिप</span>
          <h2 className="mb-3">हमारा नेतृत्व</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            अनुभवी नेतृत्व, विश्वसनीय दृष्टि — पालनहार को दिशा देने वाले।
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mx-auto flex max-w-3xl flex-wrap justify-center gap-6"
        >
          {leaders.map((leader) => (
            <motion.div
              key={leader.slug}
              variants={fadeUp}
              className="card flex w-full flex-col items-center border-t-4 border-primary-green bg-white p-7 text-center sm:w-80"
            >
              <Avatar slug={leader.slug} name={leader.name} photo={leader.photo} />
              <h3 className="mt-4 text-xl">{leader.name}</h3>
              <p className="mt-0.5 text-sm font-bold uppercase tracking-wide text-golden">{leader.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{leader.exp}</p>
              <span
                className="mt-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary-green/10 text-primary-green"
                aria-hidden="true"
              >
                <FaLinkedinIn />
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
