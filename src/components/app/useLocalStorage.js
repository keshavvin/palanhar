import { useEffect, useState } from 'react';

// Tiny persistence hook for the Palanhar App demo — every feature stores its
// state under a "palanhar.app.*" key so a reload keeps the data.
export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw != null ? JSON.parse(raw) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* storage unavailable — keep in-memory */
    }
  }, [key, value]);

  return [value, setValue];
}

// Short unique id for list items (browser-only demo).
export const uid = () =>
  `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
