import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaPlay,
  FaCircleCheck,
  FaDroplet,
  FaSeedling,
  FaPeopleGroup,
  FaTree,
} from 'react-icons/fa6';

const checklist = [
  'देशी नस्ल संरक्षण',
  'जैविक एवं प्राकृतिक खेती',
  'पंचगव्य एवं मूल्य-वर्धित उत्पाद',
  'ग्रामीण रोज़गार एवं समृद्धि',
];

const impactStats = [
  { icon: FaDroplet, value: '3500+', label: 'लीटर दूध प्रतिदिन' },
  { icon: FaSeedling, value: '250+', label: 'एकड़ जैविक खेती' },
  { icon: FaPeopleGroup, value: '150+', label: 'ग्रामीण परिवार लाभान्वित' },
  { icon: FaTree, value: '50000+', label: 'पेड़-पौधे लगाए गए' },
];

export default function FarmImpact() {
  return (
    <section className="section bg-white">
      <div className="container-custom grid items-start gap-10 lg:grid-cols-2">
        {/* Left — farm media + about */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl bg-white shadow-xl"
        >
          {/* Media */}
          <div className="relative">
            <img
              src="/hero-banner-3.jpg"
              alt="पालनहार का एकीकृत देशी गौ फार्म"
              className="h-64 w-full object-cover"
            />
            <button
              type="button"
              aria-label="फार्म वीडियो चलाएँ"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary-green shadow-lg transition hover:scale-105"
            >
              <FaPlay className="ml-1" aria-hidden="true" />
            </button>
            <span className="absolute bottom-3 left-3 rounded-full bg-primary-green px-3 py-1 text-xs font-semibold text-white">
              वास्तविक फार्म • वास्तविक प्रभाव
            </span>
          </div>

          {/* About */}
          <div className="p-6">
            <h2 className="text-2xl md:text-3xl">हमारा एकीकृत देशी गौ फार्म</h2>
            <p className="mt-1 text-sm font-semibold text-primary-green">सतना, मध्य प्रदेश</p>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              400+ देशी गायों, जैविक खेती एवं पंचगव्य इकाई से युक्त — पालनहार का वास्तविक एकीकृत
              फार्म, जहाँ हर संसाधन का उपयोग प्रकृति के साथ संतुलन एवं समाज के कल्याण के लिए होता है।
            </p>

            <ul className="mt-6 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FaCircleCheck className="mt-0.5 shrink-0 text-primary-green" aria-hidden="true" />
                  <span className="text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/gallery" className="btn btn-outline mt-6">
              हमारे फार्म के बारे में जानें
            </Link>
          </div>
        </motion.div>

        {/* Right — impact card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-primary-green/10 bg-cream-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="text-2xl md:text-3xl">हमारा प्रभाव</h2>

          <ul className="mt-6 space-y-5">
            {impactStats.map(({ icon: Icon, value, label }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-green/10 text-primary-green">
                  <Icon className="text-xl" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-2xl font-bold text-dark-green md:text-3xl">{value}</p>
                  <p className="text-sm text-gray-600">{label}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link to="/ecosystem" className="btn btn-primary mt-8">
            हमारा प्रभाव विस्तार से देखें
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
