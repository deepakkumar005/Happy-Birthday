import { useEffect, useState } from 'react';

const emojis = ['🎀', '✨', '💖', '🌸', '⭐', '🦋', '💫', '🎈', '🌺', '💝', '🎂', '🧁', '🍰', '🎁', '💐'];

function FloatingElements() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const els = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 12,
      size: 14 + Math.random() * 20,
      opacity: 0.15 + Math.random() * 0.25,
    }));
    setElements(els);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el) => (
        <span
          key={el.id}
          className="absolute animate-float-slow"
          style={{
            left: `${el.left}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${el.size}px`,
            opacity: el.opacity,
            animationDelay: `${el.delay}s`,
            animationDuration: `${el.duration}s`,
          }}
        >
          {el.emoji}
        </span>
      ))}
    </div>
  );
}

export default FloatingElements;
