import { motion } from 'framer-motion';
import { FaBullseye, FaFlag, FaQuoteLeft } from 'react-icons/fa6';
import LeafHeading from './LeafHeading';

const fade = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

export default function VisionMission() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <LeafHeading className="mb-4">हमारी दृष्टि एवं मिशन</LeafHeading>
        <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-gray-600 md:text-lg">
          एक उद्देश्य जो दिल से जुड़ता है — गौ सेवा, सततता एवं भारत की कालजयी विद्या के साथ।
        </p>

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          {/* Vision */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-dark-green p-8 text-white shadow-xl sm:p-10"
          >
            <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-golden/20 text-2xl text-golden">
              <FaBullseye aria-hidden="true" />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-golden">हमारी दृष्टि</span>
            <FaQuoteLeft className="mt-4 text-2xl text-golden/50" aria-hidden="true" />
            <p className="mt-3 font-display text-lg leading-relaxed text-white/95 sm:text-xl">
              एक ऐसा भविष्य बनाना जहाँ हर गाय करुणा का स्रोत मानी जाए, हर गाँव सतत आजीविका से समृद्ध हो,
              और मानवता प्रकृति, मूल्यों एवं भारत की कालजयी विद्या से पुनः जुड़े — आने वाली पीढ़ियों के लिए
              एक स्वस्थ, दयालु एवं अधिक सामंजस्यपूर्ण विश्व का निर्माण।
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-primary-green/15 bg-cream-white/60 p-8 shadow-sm sm:p-10"
          >
            <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-green/10 text-2xl text-primary-green">
              <FaFlag aria-hidden="true" />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-golden">हमारा मिशन</span>
            <FaQuoteLeft className="mt-4 text-2xl text-primary-green/30" aria-hidden="true" />
            <p className="mt-3 text-base leading-relaxed text-gray-700 sm:text-lg">
              पालनहार गायों को प्रेम एवं गरिमा के साथ संरक्षित एवं पोषित करने के लिए संकल्पबद्ध है — साथ ही
              सतत कृषि को बढ़ावा देना, ग्रामीण समुदायों को सशक्त बनाना एवं भारत की सांस्कृतिक विरासत का संरक्षण।
              सामूहिक सहभागिता, नैतिक आचरण एवं पर्यावरण संरक्षण के माध्यम से, हम स्थायी सामाजिक प्रभाव,
              ज़िम्मेदार जीवनशैली की प्रेरणा, और एक आत्मनिर्भर एवं करुणामय राष्ट्र का निर्माण करना चाहते हैं —
              जहाँ मनुष्य, पशु एवं प्रकृति साथ-साथ फलें-फूलें।
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
