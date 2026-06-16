import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaTrashAlt, FaTint } from 'react-icons/fa';
import { FaCow } from 'react-icons/fa6';
import { useLocalStorage, uid } from './useLocalStorage';

// Two starter cows so the demo never opens to an empty barn.
const SEED_COWS = [
  { id: 'c1', name: 'गौरी', breed: 'गिर', tag: 'PLH-001' },
  { id: 'c2', name: 'लक्ष्मी', breed: 'साहीवाल', tag: 'PLH-002' },
];

const BREEDS = ['गिर', 'साहीवाल', 'थारपारकर', 'अन्य'];

// Today's value in the two formats we need: the YYYY-MM-DD for <input type="date">
// and the en-IN display string we persist & compare against.
const todayInputValue = () => new Date().toISOString().slice(0, 10);
const todayDisplay = () => new Date().toLocaleDateString('en-IN');

export default function DairyManagement() {
  const [cows, setCows] = useLocalStorage('palanhar.app.cows', SEED_COWS);
  const [milk, setMilk] = useLocalStorage('palanhar.app.milk', []);

  // Cow form state.
  const [cowName, setCowName] = useState('');
  const [cowBreed, setCowBreed] = useState(BREEDS[0]);
  const [cowTag, setCowTag] = useState('');

  // Milk form state.
  const [milkCow, setMilkCow] = useState('');
  const [milkLitres, setMilkLitres] = useState('');
  const [milkDate, setMilkDate] = useState(todayInputValue());

  const today = todayDisplay();
  const todayMilk = milk
    .filter((entry) => entry.date === today)
    .reduce((sum, entry) => sum + entry.litres, 0);

  const handleAddCow = (e) => {
    e.preventDefault();
    const name = cowName.trim();
    if (!name) return;
    setCows((prev) => [
      { id: uid(), name, breed: cowBreed, tag: cowTag.trim() },
      ...prev,
    ]);
    setCowName('');
    setCowBreed(BREEDS[0]);
    setCowTag('');
  };

  const handleRemoveCow = (id) =>
    setCows((prev) => prev.filter((cow) => cow.id !== id));

  const handleAddMilk = (e) => {
    e.preventDefault();
    const litres = Number(milkLitres);
    if (!milkCow || !(litres > 0) || !milkDate) return;
    setMilk((prev) => [
      {
        id: uid(),
        cowName: milkCow,
        litres,
        date: new Date(milkDate).toLocaleDateString('en-IN'),
      },
      ...prev,
    ]);
    setMilkLitres('');
    setMilkDate(todayInputValue());
  };

  const handleRemoveMilk = (id) =>
    setMilk((prev) => prev.filter((entry) => entry.id !== id));

  return (
    <section aria-label="डेयरी मैनेजमेंट" className="space-y-8">
      <header>
        <h2 className="text-2xl md:text-3xl">डेयरी मैनेजमेंट</h2>
        <p className="text-sm text-gray-500 mt-1">
          अपनी गायों और रोज़ के दूध रिकॉर्ड को एक जगह संभालें
        </p>
      </header>

      {/* Stat row */}
      <div className="grid grid-cols-2 gap-4">
        <div className="stat-card">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center bg-primary-green/10 text-primary-green">
              <FaCow aria-hidden="true" />
            </span>
          </div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            कुल गायें
          </p>
          <p className="text-lg sm:text-xl font-bold text-dark-green mt-1">
            {cows.length}
          </p>
        </div>

        <div className="stat-card">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center bg-golden/15 text-amber-600">
              <FaTint aria-hidden="true" />
            </span>
          </div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            आज का दूध
          </p>
          <p className="text-lg sm:text-xl font-bold text-dark-green mt-1">
            {todayMilk} L
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* SECTION: गायें */}
        <section aria-label="गायें" className="space-y-5">
          <h3 className="text-xl text-dark-green flex items-center gap-2">
            <FaCow className="text-primary-green" aria-hidden="true" />
            गायें
          </h3>

          <motion.form
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleAddCow}
            className="bg-white rounded-xl shadow-lg border border-primary-green/10 p-5 sm:p-6 space-y-4"
          >
            <div>
              <label
                htmlFor="cow-name"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                नाम
              </label>
              <input
                id="cow-name"
                type="text"
                required
                value={cowName}
                onChange={(e) => setCowName(e.target.value)}
                placeholder="गाय का नाम"
                className="input-field"
              />
            </div>

            <div>
              <label
                htmlFor="cow-breed"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                नस्ल
              </label>
              <select
                id="cow-breed"
                value={cowBreed}
                onChange={(e) => setCowBreed(e.target.value)}
                className="input-field"
              >
                {BREEDS.map((breed) => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="cow-tag"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                टैग ID
              </label>
              <input
                id="cow-tag"
                type="text"
                value={cowTag}
                onChange={(e) => setCowTag(e.target.value)}
                placeholder="PLH-001"
                className="input-field"
              />
            </div>

            <button type="submit" className="btn btn-primary w-full flex items-center justify-center gap-2">
              <FaPlus aria-hidden="true" />
              गाय जोड़ें
            </button>
          </motion.form>

          {cows.length === 0 ? (
            <div className="bg-cream-white rounded-xl border border-primary-green/10 p-6 text-center text-sm text-gray-500">
              अभी कोई गाय नहीं जुड़ी है। ऊपर फ़ॉर्म से पहली गाय जोड़ें।
            </div>
          ) : (
            <ul className="space-y-3">
              {cows.map((cow) => (
                <li
                  key={cow.id}
                  className="bg-white rounded-xl shadow-md border border-primary-green/10 p-4 flex items-center gap-3"
                >
                  <span className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center bg-primary-green/10 text-primary-green">
                    <FaCow aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-gray-800 truncate">
                      {cow.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {cow.breed}
                      {cow.tag ? (
                        <span className="badge-status bg-primary-green/10 text-primary-green ml-2">
                          {cow.tag}
                        </span>
                      ) : null}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveCow(cow.id)}
                    className="btn btn-outline px-3 py-2 text-sm flex items-center gap-1 shrink-0"
                    aria-label={`${cow.name} को हटाएँ`}
                  >
                    <FaTrashAlt aria-hidden="true" />
                    हटाएँ
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* SECTION: दूध लॉग */}
        <section aria-label="दूध लॉग" className="space-y-5">
          <h3 className="text-xl text-dark-green flex items-center gap-2">
            <FaTint className="text-golden" aria-hidden="true" />
            दूध लॉग
          </h3>

          <motion.form
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleAddMilk}
            className="bg-white rounded-xl shadow-lg border border-primary-green/10 p-5 sm:p-6 space-y-4"
          >
            <div>
              <label
                htmlFor="milk-cow"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                गाय
              </label>
              <select
                id="milk-cow"
                required
                value={milkCow}
                onChange={(e) => setMilkCow(e.target.value)}
                className="input-field"
                disabled={cows.length === 0}
              >
                <option value="" disabled>
                  गाय चुनें
                </option>
                {cows.map((cow) => (
                  <option key={cow.id} value={cow.name}>
                    {cow.name}
                  </option>
                ))}
              </select>
              {cows.length === 0 && (
                <p className="text-xs text-gray-500 mt-1">
                  पहले एक गाय जोड़ें, फिर दूध रिकॉर्ड करें।
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="milk-litres"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                लीटर (L)
              </label>
              <input
                id="milk-litres"
                type="number"
                required
                min="0"
                step="0.1"
                value={milkLitres}
                onChange={(e) => setMilkLitres(e.target.value)}
                placeholder="0"
                className="input-field"
              />
            </div>

            <div>
              <label
                htmlFor="milk-date"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                तारीख
              </label>
              <input
                id="milk-date"
                type="date"
                required
                value={milkDate}
                onChange={(e) => setMilkDate(e.target.value)}
                className="input-field"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={cows.length === 0}
            >
              <FaPlus aria-hidden="true" />
              रिकॉर्ड जोड़ें
            </button>
          </motion.form>

          {milk.length === 0 ? (
            <div className="bg-cream-white rounded-xl border border-primary-green/10 p-6 text-center text-sm text-gray-500">
              अभी कोई दूध रिकॉर्ड नहीं है। ऊपर फ़ॉर्म से पहला रिकॉर्ड जोड़ें।
            </div>
          ) : (
            <ul className="space-y-3">
              {milk.map((entry) => (
                <li
                  key={entry.id}
                  className="bg-white rounded-xl shadow-md border border-primary-green/10 p-4 flex items-center gap-3"
                >
                  <span className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center bg-golden/15 text-amber-600">
                    <FaTint aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-gray-800 truncate">
                      {entry.cowName}
                    </p>
                    <p className="text-xs text-gray-500">{entry.date}</p>
                  </div>
                  <span className="text-sm font-bold text-primary-green shrink-0">
                    {entry.litres} L
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveMilk(entry.id)}
                    className="btn btn-outline px-3 py-2 text-sm flex items-center gap-1 shrink-0"
                    aria-label={`${entry.cowName} का रिकॉर्ड हटाएँ`}
                  >
                    <FaTrashAlt aria-hidden="true" />
                    हटाएँ
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </section>
  );
}
