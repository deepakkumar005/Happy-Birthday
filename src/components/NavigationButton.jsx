import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function NavigationButton({ to, label, emoji = '→', variant = 'primary', delay = 0 }) {
  const navigate = useNavigate();

  const variants = {
    primary:
      'bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 text-white hover:from-pink-500 hover:via-purple-500 hover:to-pink-600',
    secondary:
      'bg-white/40 backdrop-blur-md text-pink-600 border-2 border-pink-300 hover:bg-white/60',
    gold:
      'bg-gradient-to-r from-gold-300 via-pink-300 to-purple-300 text-white hover:from-gold-400 hover:via-pink-400 hover:to-purple-400',
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate(to)}
      className={`
        ${variants[variant]}
        px-8 py-4 rounded-full font-heading font-semibold text-lg
        shadow-lg cursor-pointer
        transition-all duration-300
        flex items-center gap-3
        animate-pulse-glow
      `}
    >
      <span>{label}</span>
      <motion.span
        animate={{ x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        className="text-xl"
      >
        {emoji}
      </motion.span>
    </motion.button>
  );
}

export default NavigationButton;
