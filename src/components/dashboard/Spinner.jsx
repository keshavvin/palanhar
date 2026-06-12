export default function Spinner({ light = false }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block w-4 h-4 rounded-full border-2 animate-spin ${
        light
          ? 'border-white/40 border-t-white'
          : 'border-primary-green/30 border-t-primary-green'
      }`}
    />
  );
}
