import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    q: 'मेरा निवेश गौ सेवा को कैसे सहारा देता है?',
    a: 'आपकी राशि सीधे हमारी गिर गायों और गौशाला की देखभाल में लगती है — चारा, स्वच्छ आश्रय, पशु-चिकित्सा देखभाल — और उन फार्म संचालनों में जिन्हें यह सक्षम बनाती है। यही भली-भाँति देखभाल किया गया झुंड A2 डेयरी, पंचगव्य और जैविक उत्पाद तैयार करता है, जिनसे वह लाभ बनता है जिसमें आपका हिस्सा होता है।',
  },
  {
    q: 'लाभांश की गणना कैसे होती है?',
    a: 'हर वर्ष बोर्ड कंपनी के शुद्ध लाभ पर एक लाभांश दर को मंज़ूरी देता है, जिससे एक लाभांश कोष बनता है। आपका लाभांश = (आपका शेयरधारिता ÷ कुल शेयरधारिता) × लाभांश कोष। उदाहरण के लिए, ₹1 करोड़ के कोष में ₹1,00,000 की धारिता पर ₹15 लाख कोष का 1% — यानी ₹15,000 मिलता है।',
  },
  {
    q: 'लाभांश का भुगतान कब होता है?',
    a: 'वार्षिक खाते अंतिम रूप पाने और बोर्ड द्वारा दर मंज़ूर होने के बाद लाभांश घोषित किए जाते हैं। घोषित होने पर ये आपके लाभांश वॉलेट में दिखते हैं और निर्धारित भुगतान बैच में आपके सत्यापित बैंक खाते में भेजे जाते हैं।',
  },
  {
    q: 'मुझे कौन-कौन से KYC दस्तावेज़ चाहिए?',
    a: 'PAN कार्ड, आधार कार्ड और आपके बैंक खाते का प्रमाण (लाभांश भुगतान के लिए), साथ ही नॉमिनी का विवरण। पंजीकरण में मोबाइल OTP और ईमेल सत्यापन का उपयोग होता है, और हमारी अनुपालन टीम हर आवेदन को मंज़ूरी देती है।',
  },
  {
    q: 'क्या मैं अपना लाभांश निकाल या पुनर्निवेश कर सकता हूँ?',
    a: 'दोनों संभव हैं। अपने लाभांश वॉलेट से आप राशि अपने सत्यापित बैंक खाते में स्थानांतरित कर सकते हैं, या अपनी शेयरधारिता बढ़ाने के लिए उसे पुनर्निवेश कर सकते हैं — हर पुनर्निवेश पर अतिरिक्त शेयर आवंटित होते हैं और एक अद्यतन प्रमाणपत्र मिलता है।',
  },
  {
    q: 'क्या रिटर्न की गारंटी है?',
    a: 'नहीं। लाभांश कंपनी के वास्तविक परिचालन प्रदर्शन पर निर्भर करता है और वार्षिक शुद्ध लाभ पर बोर्ड द्वारा घोषित किया जाता है। हम जिसकी गारंटी देते हैं वह है पारदर्शिता: प्रमाणित शेयरधारिता, लेखा-परीक्षित वित्तीय रिपोर्ट, और हर लेन-देन का पूरा रिकॉर्ड।',
  },
];

export default function InvestFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section bg-cream-white/60">
      <div className="container-custom max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center md:mb-12"
        >
          <span className="section-eyebrow">जानने योग्य</span>
          <h2 className="mb-3">अक्सर पूछे जाने वाले प्रश्न</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="overflow-hidden rounded-xl border border-primary-green/10 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className="font-semibold text-dark-green">{faq.q}</span>
                  <FaChevronDown
                    aria-hidden="true"
                    className={`shrink-0 text-primary-green transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600 sm:px-6 sm:text-base">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
