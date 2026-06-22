import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDna, FaFlask, FaVial, FaDroplet, FaMicroscope, FaEarthAsia, FaCircleCheck } from 'react-icons/fa6';

const achievements = [
  {
    icon: FaDna,
    title: 'ह्यूमन जीनोम अनुसंधान',
    en: 'Human Genome Research',
    desc: 'डॉ. घोष ने अंतर्राष्ट्रीय Human Genome Project से जुड़ी अनुसंधान गतिविधियों में योगदान दिया — मानव DNA की संरचना एवं कार्य को समझने तथा जीनोमिक विज्ञान को आगे बढ़ाने वाली एक ऐतिहासिक पहल।',
  },
  {
    icon: FaFlask,
    title: 'कैंसर अध्ययन में Cerulenin अनुसंधान',
    en: 'Cerulenin Research in Cancer Studies',
    desc: 'पांडिचेरी विश्वविद्यालय से जुड़ाव के दौरान उन्होंने Cerulenin (एक फैटी-एसिड संश्लेषण अवरोधक) पर अनुसंधान किया, जो कैंसर जीवविज्ञान एवं चयापचय अनुसंधान में संभावित अनुप्रयोगों के लिए जाना जाता है।',
  },
  {
    icon: FaVial,
    title: 'Hairpin-TFO अनुसंधान',
    en: 'Triplex Forming Oligonucleotide Research',
    desc: 'Triplex Forming Oligonucleotides पर उनका कार्य अनुक्रम-विशिष्ट DNA पहचान एवं ट्रिपलेक्स DNA निर्माण हेतु Hairpin-TFO तकनीक पर केंद्रित रहा — जिसे आगे जीन थेरेपी, लक्षित जीन नियमन एवं आणविक चिकित्सा में खोजा गया।',
  },
  {
    icon: FaDroplet,
    title: 'Twin Oxide तकनीक',
    en: 'Twin Oxide Technology',
    desc: 'Twin Oxide (क्लोरीन डाइऑक्साइड-आधारित तकनीक) के अनुप्रयोग में उल्लेखनीय योगदान — अनेक क्षेत्रों में:',
    list: [
      'फल-सब्ज़ियों की कटाई-पश्चात धुलाई एवं परिरक्षण',
      'ब्रुअरी एवं पेय उद्योग',
      'खाद्य प्रसंस्करण एवं स्वच्छता प्रणालियाँ',
      'स्वास्थ्य एवं स्वच्छता अनुप्रयोग',
    ],
  },
  {
    icon: FaMicroscope,
    title: 'पैथोलॉजी प्रयोगशाला एवं डायग्नोस्टिक्स',
    en: 'Pathology Laboratory & Diagnostics',
    desc: 'पैथोलॉजी प्रयोगशाला एवं डायग्नोस्टिक सेवाओं के विकास एवं संचालन में सक्रिय भागीदारी — गुणवत्तापूर्ण चिकित्सा जाँच, रोग पहचान एवं स्वास्थ्य अवसंरचना को सहयोग।',
  },
  {
    icon: FaEarthAsia,
    title: 'जल शुद्धिकरण एवं पर्यावरण तकनीक',
    en: 'Water Purification & Environmental Technology',
    desc: 'जल शुद्धिकरण एवं उपचार तकनीकों में उनका कार्य अंतर्राष्ट्रीय स्तर तक फैला — 72 से अधिक देशों में क्रियान्वयन एवं तकनीकी सहयोग। सुरक्षित पेयजल तक पहुँच, जल कीटाणुशोधन एवं सतत पर्यावरण समाधान पर केंद्रित।',
    highlight: '72+ देश',
  },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

export default function FounderProfile() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Founder portrait + intro */}
        <div className="mb-14 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto w-full max-w-md lg:mx-0"
          >
            {imgOk ? (
              <img
                src="/profile-logo.jpeg"
                alt="डॉ. मृणाल कांति घोष — संस्थापक एवं सीईओ, पालनहार"
                onError={() => setImgOk(false)}
                className="w-full rounded-3xl object-cover shadow-2xl ring-1 ring-primary-green/10"
                draggable="false"
              />
            ) : (
              <div className="flex aspect-[4/5] w-full items-center justify-center rounded-3xl bg-dark-green text-center shadow-2xl">
                <span className="px-6 font-display text-2xl text-white">डॉ. मृणाल कांति घोष</span>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <span className="section-eyebrow">वैज्ञानिक यात्रा</span>
            <h2 className="mb-1">डॉ. मृणाल कांति घोष</h2>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-golden">
              संस्थापक एवं सीईओ · Founder &amp; CEO
            </p>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              डॉ. मृणाल कांति घोष एक बहु-विषयक वैज्ञानिक, तकनीकविद् एवं उद्यमी हैं, जिनका कार्य आणविक जीवविज्ञान,
              जैव प्रौद्योगिकी, स्वास्थ्य सेवा, खाद्य तकनीक, जल उपचार एवं औद्योगिक नवाचारों तक विस्तृत है।
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="section-eyebrow">अनुसंधान एवं नवाचार</span>
          <h3 className="text-dark-green">वैज्ञानिक उपलब्धियाँ</h3>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((a) => (
            <motion.div
              key={a.title}
              variants={fadeUp}
              className="flex h-full flex-col rounded-2xl border border-primary-green/10 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-green/10 text-xl text-primary-green">
                  <a.icon aria-hidden="true" />
                </span>
                {a.highlight && (
                  <span className="rounded-full bg-golden/15 px-3 py-1 text-xs font-bold text-golden">{a.highlight}</span>
                )}
              </div>
              <h3 className="text-base font-bold leading-snug text-dark-green">{a.title}</h3>
              <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-golden">{a.en}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{a.desc}</p>
              {a.list && (
                <ul className="mt-3 space-y-1.5">
                  {a.list.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-gray-600">
                      <FaCircleCheck className="mt-0.5 shrink-0 text-primary-green/70" aria-hidden="true" /> {it}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Professional profile summary */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-10 max-w-4xl rounded-2xl bg-dark-green p-8 text-center text-white shadow-xl"
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-golden">व्यावसायिक परिचय</p>
          <p className="text-base leading-relaxed text-white/90 md:text-lg">
            डॉ. घोष वैज्ञानिक अनुसंधान को व्यावहारिक औद्योगिक अनुप्रयोगों से जोड़ने के लिए पहचाने जाते हैं —
            जैव प्रौद्योगिकी, स्वास्थ्य, खाद्य सुरक्षा एवं जल उपचार के नवाचारों को समाज एवं उद्योग के लिए
            उपयोगी एवं विस्तार-योग्य समाधानों में बदलते हुए।
          </p>
        </motion.div>
      </div>
    </section>
  );
}
