import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaCheckCircle,
  FaHeadset,
  FaPaperPlane,
  FaTrashAlt,
} from 'react-icons/fa';
import { useLocalStorage, uid } from './useLocalStorage';

const CATEGORIES = ['डेयरी', 'एग्रीकल्चर', 'पेमेंट', 'टेक्निकल', 'अन्य'];

const STATUS_STYLES = {
  'ओपन': 'bg-golden/15 text-amber-700',
  'हल हो गया': 'bg-primary-green/10 text-primary-green',
};

export default function FarmerSupport() {
  const [tickets, setTickets] = useLocalStorage('palanhar.app.tickets', []);
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [message, setMessage] = useState('');

  const openCount = tickets.filter((t) => t.status === 'ओपन').length;

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();
    if (!trimmedSubject || !trimmedMessage) return;

    const ticket = {
      id: uid(),
      subject: trimmedSubject,
      category,
      message: trimmedMessage,
      status: 'ओपन',
      date: new Date().toLocaleDateString('en-IN'),
    };
    setTickets([ticket, ...tickets]);
    setSubject('');
    setCategory(CATEGORIES[0]);
    setMessage('');
  };

  const resolveTicket = (id) => {
    setTickets(
      tickets.map((t) =>
        t.id === id ? { ...t, status: 'हल हो गया' } : t
      )
    );
  };

  const removeTicket = (id) => {
    setTickets(tickets.filter((t) => t.id !== id));
  };

  return (
    <section aria-label="फार्मर सपोर्ट">
      <h2 className="text-2xl md:text-3xl">फार्मर सपोर्ट</h2>
      <p className="text-sm text-gray-500 mt-1 mb-6">
        अपना सवाल या समस्या यहाँ दर्ज करें — हमारी टीम जल्द जवाब देगी।
      </p>

      {/* टिकट फॉर्म */}
      <form
        onSubmit={handleSubmit}
        className="card bg-cream-white border border-primary-green/10 p-5 sm:p-6 mb-8"
        noValidate
      >
        <div className="flex items-center gap-2 text-dark-green mb-4">
          <FaHeadset aria-hidden="true" className="text-golden" />
          <h3 className="text-lg font-semibold">नया टिकट बनाएँ</h3>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-1">
            <label
              htmlFor="ticket-subject"
              className="block text-sm font-medium text-dark-green mb-1.5"
            >
              विषय <span className="text-amber-700">*</span>
            </label>
            <input
              id="ticket-subject"
              type="text"
              className="input-field"
              placeholder="अपना विषय लिखें"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          <div className="md:col-span-1">
            <label
              htmlFor="ticket-category"
              className="block text-sm font-medium text-dark-green mb-1.5"
            >
              कैटेगरी
            </label>
            <select
              id="ticket-category"
              className="input-field"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="ticket-message"
              className="block text-sm font-medium text-dark-green mb-1.5"
            >
              मैसेज <span className="text-amber-700">*</span>
            </label>
            <textarea
              id="ticket-message"
              className="input-field min-h-28 resize-y"
              placeholder="अपनी समस्या विस्तार से बताएँ"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <span className="badge-status bg-primary-green/10 text-primary-green">
            {openCount} ओपन टिकट
          </span>
          <button type="submit" className="btn btn-primary inline-flex items-center gap-2">
            <FaPaperPlane aria-hidden="true" />
            टिकट भेजें
          </button>
        </div>
      </form>

      {/* टिकट लिस्ट */}
      {tickets.length === 0 ? (
        <div className="card bg-cream-white border border-primary-green/10 p-8 text-center text-gray-500">
          अभी कोई टिकट नहीं — ऊपर से अपना पहला सवाल भेजें।
        </div>
      ) : (
        <ul className="grid gap-4">
          {tickets.map((ticket, index) => {
            const isResolved = ticket.status === 'हल हो गया';
            return (
              <motion.li
                key={ticket.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="card bg-white border border-primary-green/10 p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-dark-green">
                    {ticket.subject}
                  </h3>
                  <span
                    className={`badge-status ${
                      STATUS_STYLES[ticket.status] ?? 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {isResolved && <FaCheckCircle aria-hidden="true" />}
                    {ticket.status}
                  </span>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="badge-status bg-primary-green/10 text-primary-green">
                    {ticket.category}
                  </span>
                  <span className="text-xs text-gray-400">{ticket.date}</span>
                </div>

                <p className="mt-3 text-sm text-gray-600 whitespace-pre-line">
                  {ticket.message}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {!isResolved && (
                    <button
                      type="button"
                      className="btn btn-primary text-sm py-2 inline-flex items-center gap-2"
                      onClick={() => resolveTicket(ticket.id)}
                    >
                      <FaCheckCircle aria-hidden="true" />
                      हल हो गया मार्क करें
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn btn-outline text-sm py-2 inline-flex items-center gap-2"
                    onClick={() => removeTicket(ticket.id)}
                  >
                    <FaTrashAlt aria-hidden="true" />
                    हटाएँ
                  </button>
                </div>
              </motion.li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
