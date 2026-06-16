import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    q: 'हाउ डज़ माय इन्वेस्टमेंट सपोर्ट गौ सेवा?',
    a: 'योर फंड्स गो डायरेक्टली इनटू द केयर ऑफ अवर गिर काउज़ एंड द गौशाला — फीड, क्लीन शेल्टर्स, वेटरनरी केयर — एंड इनटू द फार्म ऑपरेशन्स दे पावर। द सेम वेल-केयर्ड-फॉर हर्ड प्रोड्यूसेज़ द A2 डेयरी, पंचगव्य एंड ऑर्गेनिक प्रोडक्ट्स दैट जेनरेट द रिटर्न्स यू शेयर इन।',
  },
  {
    q: 'हाउ आर डिविडेंड्स कैलकुलेटेड?',
    a: 'ईच ईयर द बोर्ड अप्रूव्स अ डिविडेंड रेट ऑन द कंपनीज़ नेट प्रॉफिट, क्रिएटिंग अ डिविडेंड पूल। योर डिविडेंड = (योर शेयरहोल्डिंग ÷ टोटल शेयरहोल्डिंग) × डिविडेंड पूल। फॉर एग्ज़ांपल, अ ₹1,00,000 होल्डिंग इन अ ₹1 करोड़ पूल रिसीव्स 1% ऑफ अ ₹15 लाख पूल — ₹15,000।',
  },
  {
    q: 'व्हेन आर डिविडेंड्स पेड?',
    a: 'डिविडेंड्स आर डिक्लेयर्ड आफ्टर द एनुअल अकाउंट्स आर फाइनलाइज़्ड एंड द बोर्ड अप्रूव्स द रेट। वन्स डिक्लेयर्ड, दे अपीयर इन योर डिविडेंड वॉलेट एंड आर प्रोसेस्ड टू योर वेरिफाइड बैंक अकाउंट इन शेड्यूल्ड पेआउट बैचेज़।',
  },
  {
    q: 'व्हाट KYC डॉक्युमेंट्स डू आई नीड?',
    a: 'PAN कार्ड, आधार कार्ड एंड योर बैंक अकाउंट प्रूफ (फॉर डिविडेंड पेआउट्स), प्लस नॉमिनी डिटेल्स। रजिस्ट्रेशन यूज़ेज़ मोबाइल OTP एंड ईमेल वेरिफिकेशन, एंड अवर कंप्लायंस टीम अप्रूव्स ईच एप्लिकेशन।',
  },
  {
    q: 'कैन आई विदड्रॉ ऑर रीइन्वेस्ट माय डिविडेंड?',
    a: 'बोथ। फ्रॉम योर डिविडेंड वॉलेट यू कैन ट्रांसफर द अमाउंट टू योर वेरिफाइड बैंक अकाउंट, ऑर रीइन्वेस्ट इट टू इंक्रीज़ योर शेयरहोल्डिंग — ईच रीइन्वेस्टमेंट इज़ अलॉटेड एडिशनल शेयर्स एंड ऐन अपडेटेड सर्टिफिकेट।',
  },
  {
    q: 'आर रिटर्न्स गारंटीड?',
    a: 'नो। डिविडेंड्स डिपेंड ऑन द कंपनीज़ एक्चुअल ऑपरेशनल परफॉर्मेंस एंड आर डिक्लेयर्ड बाय द बोर्ड ऑन एनुअल नेट प्रॉफिट। व्हाट वी गारंटी इज़ ट्रांसपेरेंसी: सर्टिफाइड शेयरहोल्डिंग, ऑडिटेड फाइनेंशियल रिपोर्ट्स, एंड अ कंप्लीट रिकॉर्ड ऑफ एवरी ट्रांज़ैक्शन।',
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
          <span className="section-eyebrow">गुड टू नो</span>
          <h2 className="mb-3">फ्रीक्वेंटली आस्क्ड क्वेश्चन्स</h2>
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
