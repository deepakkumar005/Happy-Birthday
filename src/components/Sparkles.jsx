import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Sparkles({ count = 15, color = '#f472b6' }) {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSparkle = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 4 + Math.random() * 8,
        duration: 0.8 + Math.random() * 1.2,
      };
      setSparkles((prev) => [...prev.slice(-count), newSparkle]);
    }, 300);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          initial={{ opacity: 1, scale: 0 }}
          animate={{ opacity: 0, scale: 1, y: -20 }}
          transition={{ duration: sparkle.duration, ease: 'easeOut' }}
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
          }}
        >
          <svg viewBox="0 0 24 24" fill={color}>
            <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

export default Sparkles;
