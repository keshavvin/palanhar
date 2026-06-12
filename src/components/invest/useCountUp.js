import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

// Animates a number from 0 to `target` (~1.2s, easeOutCubic) the first time
// the returned ref scrolls into view. Attach `ref` to the element that
// displays the value.
export default function useCountUp(target, { duration = 1200 } = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return undefined;
    let frameId;
    const startedAt = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(target * eased);
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, target, duration]);

  return { ref, value };
}
