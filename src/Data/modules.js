import { useState, useEffect, useRef } from 'react';
import { formatMd } from '../utils/formatMarkdown.jsx';

export default function TypeWriter({ text, speed = 8, onComplete }) {
  const [pos, setPos] = useState(0);
  const [done, setDone] = useState(false);
  const called = useRef(false);

  useEffect(() => { setPos(0); setDone(false); called.current = false; }, [text]);

  useEffect(() => {
    if (pos < text.length) {
      const t = setTimeout(() => setPos(p => Math.min(p + 4, text.length)), speed);
      return () => clearTimeout(t);
    } else if (!called.current) {
      called.current = true;
      setDone(true);
      onComplete?.();
    }
  }, [pos, text, speed, onComplete]);

  return (
    <span>
      {formatMd(text.slice(0, pos))}
      {!done && <span style={{ animation: "blink .8s infinite", color: "var(--accent)" }}>▌</span>}
    </span>
  );
}
