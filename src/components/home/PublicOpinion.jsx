import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaRegStar, FaPaperPlane, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';
import { useLocalStorage, uid } from '../app/useLocalStorage';

// Demo reviews — shown by default; user submissions are prepended and persisted.
const SEED = [
  { id: 'r1', name: 'राजेश कुमार', place: 'जयपुर', rating: 5, message: 'पालनहार का A2 दूध और घी बेहद शुद्ध है। पूरे परिवार की सेहत में फर्क महसूस हुआ।', date: '12/05/2026' },
  { id: 'r2', name: 'सुनीता देवी', place: 'पूर्बा बर्धमान', rating: 5, message: 'गौ सेवा के साथ निवेश का मॉडल शानदार है — पारदर्शिता सबसे अच्छी बात है।', date: '03/05/2026' },
  { id: 'r3', name: 'अमित शर्मा', place: 'दिल्ली', rating: 4, message: 'ऐप से गाय की लाइव जानकारी मिलती है, जिससे भरोसा और बढ़ता है।', date: '28/04/2026' },
  { id: 'r4', name: 'प्रिया पटेल', place: 'अहमदाबाद', rating: 5, message: 'जैविक खाद और बायोपेस्टिसाइड से हमारी खेती की पैदावार बेहतर हुई।', date: '21/04/2026' },
  { id: 'r5', name: 'मोहम्मद इरफ़ान', place: 'लखनऊ', rating: 4, message: 'CBG और बायो-एनर्जी की पहल बहुत सराहनीय है — स्वच्छ ऊर्जा की ओर अच्छा कदम।', date: '15/04/2026' },
  { id: 'r6', name: 'कविता राव', place: 'पुणे', rating: 5, message: 'नारी शक्ति प्रोग्राम से हमारे गाँव की महिलाओं को रोज़गार मिला। धन्यवाद पालनहार!', date: '08/04/2026' },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

function Stars({ value }) {
  return (
    <span className="flex gap-0.5 text-golden" aria-label={`5 में से ${value} अंक`}>
      {[1, 2, 3, 4, 5].map((i) =>
        i <= value ? <FaStar key={i} aria-hidden="true" /> : <FaRegStar key={i} className="text-gray-300" aria-hidden="true" />
      )}
    </span>
  );
}

export default function PublicOpinion() {
  const [reviews, setReviews] = useLocalStorage('palanhar.reviews', SEED);
  const [form, setForm] = useState({ name: '', place: '', message: '' });
  const [rating, setRating] = useState(5);
  const [done, setDone] = useState(false);

  const avg = reviews.length ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1) : '0.0';

  const change = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    setReviews([
      {
        id: uid(),
        name: form.name.trim(),
        place: form.place.trim(),
        rating,
        message: form.message.trim(),
        date: new Date().toLocaleDateString('en-IN'),
      },
      ...reviews,
    ]);
    setForm({ name: '', place: '', message: '' });
    setRating(5);
    setDone(true);
    setTimeout(() => setDone(false), 3500);
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="mb-10 text-center">
          <span className="section-eyebrow">जनता की राय</span>
          <h2 className="mb-2">जन-राय एवं समीक्षाएँ</h2>
          <p className="text-gray-600">हमारे ग्राहकों, किसानों एवं निवेशकों के अनुभव।</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-golden/15 px-4 py-2">
            <Stars value={Math.round(avg)} />
            <span className="font-bold text-dark-green">{avg}</span>
            <span className="text-sm text-gray-500">&middot; {reviews.length} समीक्षाएँ</span>
          </div>
        </div>

        {/* Reviews grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reviews.map((r) => (
            <motion.div key={r.id} variants={fadeUp} className="card flex flex-col border border-primary-green/10 bg-cream-white/40 p-6">
              <FaQuoteLeft className="text-2xl text-light-green" aria-hidden="true" />
              <p className="mt-3 flex-1 leading-relaxed text-gray-700">{r.message}</p>
              <div className="mt-4 flex items-center justify-between gap-3 border-t border-gray-100 pt-3">
                <div>
                  <p className="font-bold text-dark-green">{r.name}</p>
                  {r.place && <p className="text-xs text-gray-500">{r.place} &middot; {r.date}</p>}
                </div>
                <Stars value={r.rating} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Opinion form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card mx-auto mt-12 max-w-2xl border border-primary-green/10 bg-white p-6 shadow-lg sm:p-8"
        >
          <h3 className="text-xl md:text-2xl">अपनी राय दें</h3>
          <p className="mt-1 text-sm text-gray-500">आपका अनुभव दूसरों की मदद करता है।</p>

          {done ? (
            <div className="mt-6 flex flex-col items-center rounded-xl bg-primary-green/10 px-4 py-8 text-center">
              <FaCheckCircle className="mb-2 text-4xl text-primary-green" aria-hidden="true" />
              <p className="text-lg font-bold text-dark-green">धन्यवाद!</p>
              <p className="text-sm text-gray-600">आपकी राय जुड़ गई है।</p>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="po-name" className="mb-1.5 block text-sm font-semibold text-gray-700">नाम *</label>
                  <input id="po-name" name="name" value={form.name} onChange={change} required className="input-field" placeholder="आपका नाम" />
                </div>
                <div>
                  <label htmlFor="po-place" className="mb-1.5 block text-sm font-semibold text-gray-700">स्थान</label>
                  <input id="po-place" name="place" value={form.place} onChange={change} className="input-field" placeholder="शहर / गाँव" />
                </div>
              </div>

              <div>
                <span className="mb-1.5 block text-sm font-semibold text-gray-700">मूल्यांकन</span>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setRating(i)}
                      aria-label={`${i} अंक का मूल्यांकन`}
                      className="text-2xl text-golden transition-transform hover:scale-110"
                    >
                      {i <= rating ? <FaStar aria-hidden="true" /> : <FaRegStar className="text-gray-300" aria-hidden="true" />}
                    </button>
                  ))}
                  <span className="ml-2 text-sm font-semibold text-gray-500">{rating} / 5</span>
                </div>
              </div>

              <div>
                <label htmlFor="po-message" className="mb-1.5 block text-sm font-semibold text-gray-700">आपकी राय *</label>
                <textarea id="po-message" name="message" value={form.message} onChange={change} required rows="4" className="input-field resize-none" placeholder="पालनहार के बारे में अपना अनुभव लिखें..." />
              </div>

              <button type="submit" className="btn btn-primary inline-flex items-center gap-2">
                <FaPaperPlane aria-hidden="true" /> राय भेजें
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
