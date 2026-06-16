import { motion } from 'framer-motion';
import {
  FaBook,
  FaCheckCircle,
  FaClock,
  FaGraduationCap,
  FaPlayCircle,
  FaRedo,
  FaUndo,
} from 'react-icons/fa';
import { useLocalStorage } from './useLocalStorage';

const COURSES = [
  {
    id: 'c1',
    title: 'डेयरी पालन की मूल बातें',
    desc: 'गाय की देखभाल, चारा व दूध उत्पादन की मूल बातें।',
    mins: 20,
    lessons: 5,
  },
  {
    id: 'c2',
    title: 'जैविक खेती',
    desc: 'जैविक खाद व प्राकृतिक खेती के तरीके।',
    mins: 25,
    lessons: 6,
  },
  {
    id: 'c3',
    title: 'गोबर & CBG (बायोगैस)',
    desc: 'गोबर से बायोगैस व जैविक खाद बनाना।',
    mins: 18,
    lessons: 4,
  },
  {
    id: 'c4',
    title: 'पशु स्वास्थ्य',
    desc: 'रोग पहचान, टीकाकरण व देखभाल।',
    mins: 22,
    lessons: 5,
  },
  {
    id: 'c5',
    title: 'वित्तीय साक्षरता',
    desc: 'बचत, ऋण व निवेश की समझ।',
    mins: 30,
    lessons: 7,
  },
  {
    id: 'c6',
    title: 'पालनहार ऐप का उपयोग',
    desc: 'ऐप की सभी सुविधाओं का इस्तेमाल सीखें।',
    mins: 12,
    lessons: 3,
  },
];

export default function LearningTraining() {
  const [completed, setCompleted] = useLocalStorage(
    'palanhar.app.completedCourses',
    []
  );

  const doneCount = completed.length;
  const total = COURSES.length;
  const pct = total > 0 ? Math.round((doneCount / total) * 100) : 0;

  const isDone = (id) => completed.includes(id);

  const markComplete = (id) => {
    if (completed.includes(id)) return;
    setCompleted([...completed, id]);
  };

  const markIncomplete = (id) => {
    setCompleted(completed.filter((c) => c !== id));
  };

  return (
    <section aria-label="शिक्षा एवं प्रशिक्षण">
      <h2 className="text-2xl md:text-3xl">शिक्षा &amp; प्रशिक्षण</h2>
      <p className="text-sm text-gray-500 mt-1 mb-6">
        छोटे-छोटे कोर्स पूरे करें और अपनी प्रगति यहीं ट्रैक करें।
      </p>

      {/* ओवरऑल प्रोग्रेस */}
      <div className="card bg-cream-white border border-primary-green/10 p-5 sm:p-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 text-dark-green">
            <FaGraduationCap aria-hidden="true" className="text-golden" />
            <h3 className="text-lg font-semibold">
              प्रगति: {doneCount}/{total} कोर्स पूरे ({pct}%)
            </h3>
          </div>
          <span className="badge-status bg-primary-green/10 text-primary-green">
            {pct}% पूर्ण
          </span>
        </div>

        <div
          className="h-3 w-full overflow-hidden rounded-full bg-primary-green/10"
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="कुल कोर्स प्रगति"
        >
          <motion.div
            className="h-full rounded-full bg-primary-green"
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* कोर्स ग्रिड */}
      <ul className="grid gap-4 sm:grid-cols-2">
        {COURSES.map((course, index) => {
          const done = isDone(course.id);
          return (
            <motion.li
              key={course.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="card bg-white border border-primary-green/10 p-5 flex flex-col"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2 text-dark-green">
                  <FaBook aria-hidden="true" className="text-golden shrink-0" />
                  <h3 className="text-lg font-bold">{course.title}</h3>
                </div>
                {done && (
                  <span className="badge-status bg-primary-green/10 text-primary-green shrink-0">
                    <FaCheckCircle aria-hidden="true" />
                    पूरा हुआ ✓
                  </span>
                )}
              </div>

              <p className="mt-2 text-sm text-gray-600 flex-1">{course.desc}</p>

              <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                <FaClock aria-hidden="true" className="text-primary-green" />
                <span>
                  {course.mins} मिनट · {course.lessons} पाठ
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {done ? (
                  <>
                    <button
                      type="button"
                      className="btn btn-outline text-sm py-2 inline-flex items-center gap-2"
                      onClick={() => markComplete(course.id)}
                    >
                      <FaRedo aria-hidden="true" />
                      फिर से देखें
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline text-sm py-2 inline-flex items-center gap-2"
                      onClick={() => markIncomplete(course.id)}
                    >
                      <FaUndo aria-hidden="true" />
                      अधूरा चिह्नित करें
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary text-sm py-2 inline-flex items-center gap-2"
                    onClick={() => markComplete(course.id)}
                  >
                    <FaPlayCircle aria-hidden="true" />
                    पूरा हुआ चिह्नित करें
                  </button>
                )}
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
