import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import PageTransition from "../components/PageTransition";
import NavigationButton from "../components/NavigationButton";
import Sparkles from "../components/Sparkles";

// ─── constants ────────────────────────────────────────────────────────────────

const CONFETTI_COLORS = [
  "#f472b6",
  "#c084fc",
  "#fbbf24",
  "#f9a8d4",
  "#d8b4fe",
  "#fda4af",
  "#fdba74",
];

const BADGES = [
  { emoji: "👑", title: "The Queen", sub: "of our friend group" },
  { emoji: "💎", title: "Rare Gem", sub: "one in a million" },
  { emoji: "🌈", title: "Rainbow", sub: "in human form" },
  { emoji: "🦄", title: "Unicorn", sub: "because you're magic" },
];

const DECOR_EMOJIS = ["🎀", "💖", "🌸", "✨", "❤️‍🔥", "💐", "🫶🏻", "🔥", "🦢"];
const CANDLE_COUNT = 5;

// ─── sub-components ───────────────────────────────────────────────────────────

function Candle({ index, lit }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-1"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.8 + index * 0.1,
        type: "spring",
        bounce: 0.5,
      }}
    >
      {/* flame / smoke */}
      <div className="flex h-7 sm:h-9 items-end justify-center">
        <AnimatePresence mode="wait">
          {lit ? (
            <motion.span
              key="flame"
              initial={{ scale: 0 }}
              animate={{
                scale: [1, 1.18, 0.95, 1.12, 1],
                opacity: [1, 0.85, 1, 0.8, 1],
                y: [0, -1, 0],
              }}
              exit={{
                scale: 0,
                opacity: 0,
                y: -8,
                transition: { duration: 0.25 },
              }}
              transition={{
                repeat: Infinity,
                duration: 0.7,
                delay: index * 0.06,
              }}
              className="text-lg sm:text-2xl leading-none drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]"
            >
              🔥
            </motion.span>
          ) : (
            <motion.span
              key="smoke"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: -20, scale: 1.8 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="text-base sm:text-xl leading-none"
            >
              💨
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* wax body */}
      <div className="h-8 sm:h-10 w-2 sm:w-2.5 rounded-full bg-gradient-to-b from-pink-300 via-fuchsia-400 to-violet-500 shadow-[0_4px_12px_rgba(192,132,252,0.4)]" />
    </motion.div>
  );
}

function BadgeCard({ emoji, title, sub, delay }) {
  return (
    <motion.div
      initial={{ scale: 0.85, opacity: 0, y: 16 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ delay, type: "spring", bounce: 0.42 }}
      whileHover={{
        scale: 1.05,
        y: -6,
        transition: { duration: 0.18 },
      }}
      className="
        group relative overflow-hidden rounded-[24px]
        border border-white/70 bg-white/70 px-3 sm:px-4 py-4 sm:py-5
        text-center backdrop-blur-xl
        shadow-[0_10px_30px_rgba(139,92,246,0.10)]
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/0 via-pink-100/20 to-violet-100/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col items-center gap-2">
        <motion.span
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.45 }}
          className="text-3xl sm:text-4xl"
        >
          {emoji}
        </motion.span>

        <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.16em] text-violet-700">
          {title}
        </span>

        <span className="text-[10px] sm:text-xs leading-5 text-pink-500">
          {sub}
        </span>
      </div>
    </motion.div>
  );
}

// ─── main page ────────────────────────────────────────────────────────────────

export default function CelebrationPage() {
  const [candlesLit, setCandlesLit] = useState(true);
  const [hasBlown, setHasBlown] = useState(false);

  const tickerRef = useRef(null);

  // ── initial confetti burst ─────────────────────────────────────────────────

  const fireOpeningConfetti = useCallback(() => {
    const shoot = (delay, opts) =>
      setTimeout(
        () =>
          confetti({
            colors: CONFETTI_COLORS,
            ...opts,
          }),
        delay,
      );

    shoot(0, {
      particleCount: 110,
      spread: 105,
      origin: { y: 0.62 },
    });

    shoot(280, {
      particleCount: 50,
      angle: 60,
      spread: 72,
      origin: { x: 0, y: 0.72 },
    });

    shoot(280, {
      particleCount: 50,
      angle: 120,
      spread: 72,
      origin: { x: 1, y: 0.72 },
    });

    shoot(560, {
      particleCount: 34,
      spread: 165,
      origin: { y: 0.35 },
      shapes: ["star"],
      scalar: 1.45,
      colors: ["#fbbf24", "#f472b6"],
    });
  }, []);

  useEffect(() => {
    fireOpeningConfetti();

    tickerRef.current = setInterval(() => {
      confetti({
        particleCount: 2,
        angle: 70 + Math.random() * 40,
        spread: 36,
        origin: { x: Math.random(), y: 0 },
        colors: CONFETTI_COLORS,
        gravity: 0.65,
      });
    }, 260);

    return () => {
      clearInterval(tickerRef.current);
      confetti.reset();
    };
  }, [fireOpeningConfetti]);

  // ── blow handler ───────────────────────────────────────────────────────────

  const handleBlowCandles = () => {
    if (hasBlown) return;

    setCandlesLit(false);
    setHasBlown(true);

    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        confetti({
          particleCount: 80,
          spread: 100 + i * 18,
          origin: { y: 0.55, x: 0.5 },
          colors: ["#f472b6", "#c084fc", "#fbbf24", "#f9a8d4"],
        });
      }, i * 180);
    }
  };

  // ── render ─────────────────────────────────────────────────────────────────

  return (
    <PageTransition>
      <div
        className="
    relative z-10 flex min-h-screen w-full flex-col
    items-center justify-start text-center
    px-3 sm:px-4 md:px-6
    py-8 sm:py-10
    gap-6 sm:gap-7
    overflow-x-hidden
  "
      >
        {/* sparkles */}
        <Sparkles count={22} color="#fbbf24" />

        {/* background glows */}
        <BackgroundGlows />

        {/* floating stickers */}
        <FloatingSticker
          src="/stickers/balloons.png"
          alt="Balloons"
          className="left-1 top-3 w-12 sm:left-4 sm:top-6 sm:w-24 md:w-28 lg:w-32"
          motion={{ y: [0, -12, 0] }}
          duration={5}
        />

        <FloatingSticker
          src="/stickers/gift.png"
          alt="Gift"
          className="bottom-16 right-1 w-10 sm:bottom-20 sm:right-5 sm:w-20 md:w-24 lg:w-28"
          motion={{ rotate: [0, 5, -5, 0] }}
          duration={3}
        />

        {/* floating mini emojis */}
        <FloatingEmoji emoji="💖" className="left-[6%] top-[22%]" delay={0} />
        <FloatingEmoji
          emoji="✨⚡️💫"
          className="right-[6%] top-[28%]"
          delay={0.6}
        />
        <FloatingEmoji
          emoji="🌸"
          className="left-[8%] bottom-[18%]"
          delay={1}
        />
        <FloatingEmoji
          emoji="🦋"
          className="right-[6%] bottom-[24%]"
          delay={1.4}
        />

        {/* ── centred content column ── */}

        {/* hero header */}
        <Header />

        {/* cake */}
        <CakeCard
          candlesLit={candlesLit}
          hasBlown={hasBlown}
          onBlow={handleBlowCandles}
        />

        {/* badges */}
        {/* <div className="grid w-full max-w-3xl grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center items-stretch">
  {BADGES.map((b, i) => (
    <BadgeCard key={b.title} {...b} delay={1.2 + i * 0.12} />
  ))}
</div> */}

        {/* message */}
        <MessageCard />

        {/* navigation */}
        {/* <NavRow /> */}
        <motion.div
          key="nav"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          style={{
            marginBottom: "10px",
            display: "flex",
            flexDirection:  "column",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <NavBtn
            to="/letter"
            label="Back"
            emoji="←"
            variant="secondary"
            delay={0}
          />

          <NavBtn
            to="/sad"
            label="last Surprise"
            emoji="🫶"
            variant="gold"
            delay={0.1}
          />
        </motion.div>
      </div>
    </PageTransition>
  );
}

function NavBtn({ to, label, emoji, variant = "primary", delay = 0, onClick }) {
  const [hov, setHov] = useState(false);
  const isPrimary = variant === "primary";
  const isGold = variant === "gold";

  const bg = isGold
    ? "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #f472b6 100%)"
    : isPrimary
      ? "linear-gradient(135deg, #f472b6 0%, #c084fc 55%, #a78bfa 100%)"
      : "rgba(255,255,255,0.75)";

  const shadow = hov
    ? isGold
      ? "0 8px 28px rgba(251,191,36,0.45), inset 0 1px 0 rgba(255,255,255,0.25)"
      : isPrimary
        ? "0 8px 28px rgba(192,132,252,0.5), inset 0 1px 0 rgba(255,255,255,0.2)"
        : "0 6px 20px rgba(192,132,252,0.18)"
    : isGold
      ? "0 4px 18px rgba(251,191,36,0.3)"
      : isPrimary
        ? "0 4px 18px rgba(192,132,252,0.3)"
        : "0 2px 10px rgba(0,0,0,0.05)";

  const Tag = onClick ? "button" : "a";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      style={{ width: "100%" }}
    >
      <motion.div
        onHoverStart={() => setHov(true)}
        onHoverEnd={() => setHov(false)}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        style={{ width: "100%" }}
      >
        <Tag
          href={!onClick ? to : undefined}
          onClick={onClick}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            width: "100%",
            maxWidth: "280px",
            padding: isPrimary || isGold ? "14px 24px" : "13px 24px",
            borderRadius: "999px",
            fontWeight: 700,
            textDecoration: "none",
            fontSize: "clamp(13px, 2vw, 15px)",
            letterSpacing: "0.02em",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            border: !isPrimary && !isGold ? "2px solid #e9d5ff" : "none",
            color: isPrimary || isGold ? "#fff" : "#9333ea",
            background: bg,
            boxShadow: shadow,
            backdropFilter: !isPrimary && !isGold ? "blur(10px)" : undefined,
            textShadow:
              isPrimary || isGold ? "0 1px 3px rgba(0,0,0,0.15)" : undefined,
            transition: "box-shadow 0.3s ease",
          }}
        >
          {(isPrimary || isGold) && (
            <motion.span
              aria-hidden
              animate={{ backgroundPosition: hov ? "200% 0" : "-200% 0" }}
              transition={{ duration: 0.55 }}
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%)",
                backgroundSize: "200% 100%",
              }}
            />
          )}

          <motion.span
            animate={{ x: !isPrimary && !isGold && hov ? -2 : 0 }}
            style={{
              fontSize: "17px",
              position: "relative",
              flexShrink: 0,
            }}
          >
            {emoji}
          </motion.span>

          <span
            style={{
              position: "relative",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </span>

          {(isPrimary || isGold) && (
            <motion.span
              animate={{ x: hov ? 4 : 0, opacity: hov ? 1 : 0.65 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              style={{
                fontSize: "16px",
                position: "relative",
                flexShrink: 0,
              }}
            >
              →
            </motion.span>
          )}
        </Tag>
      </motion.div>
    </motion.div>
  );
}

// ─── section components ────────────────────────────────────────────────────────

function BackgroundGlows() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-24 top-10 h-56 w-56 sm:h-80 sm:w-80 animate-pulse rounded-full bg-pink-300/20 blur-3xl" />

      <div
        className="absolute -right-20 bottom-12 h-56 w-56 sm:h-80 sm:w-80 animate-pulse rounded-full bg-violet-300/20 blur-3xl"
        style={{ animationDelay: "1s" }}
      />

      <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] sm:h-[440px] sm:w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/10 blur-3xl" />
    </div>
  );
}

function FloatingSticker({ src, alt, className, motion: m, duration }) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={`pointer-events-none absolute z-0 select-none opacity-80 ${className}`}
      animate={m}
      transition={{
        repeat: Infinity,
        duration,
        ease: "easeInOut",
      }}
    />
  );
}

function FloatingEmoji({ emoji, className, delay }) {
  return (
    <motion.div
      className={`pointer-events-none absolute z-0 text-xl sm:text-3xl ${className}`}
      animate={{
        y: [0, -12, 0],
        rotate: [0, 8, -8, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
        delay,
        ease: "easeInOut",
      }}
    >
      {emoji}
    </motion.div>
  );
}

function Header() {
  return (
    <div className="flex flex-col items-center text-center px-2">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          bounce: 0.55,
          duration: 0.9,
        }}
        className="relative mb-4 sm:mb-5"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 14,
            ease: "linear",
          }}
          className="
            absolute inset-[-10px] sm:inset-[-14px] rounded-full
            border-2 border-dashed border-pink-300/70
          "
        />

        <span className="relative z-10 block text-5xl leading-none sm:text-7xl">
          🎉
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.22,
          type: "spring",
          bounce: 0.3,
        }}
        className="
          bg-gradient-to-r from-violet-600 via-pink-500 to-amber-400
          bg-clip-text text-transparent
          text-3xl font-black leading-tight tracking-tight
          sm:text-5xl md:text-6xl
        "
      >
        Let&apos;s Celebrate!
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          delay: 0.55,
          duration: 0.8,
          ease: "easeOut",
        }}
        className="
          mt-4 h-[3px] w-20 sm:w-24 rounded-full
          bg-gradient-to-r from-pink-400 via-violet-400 to-amber-300
        "
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="
          mt-4 max-w-md
          text-xs sm:text-base md:text-lg
          font-semibold tracking-wide text-violet-500
          px-2
        "
        style={{marginTop: '12px'}}
      >
        Make a wish and blow out the candles! 🌟
      </motion.p>
    </div>
  );
}

function CakeCard({ candlesLit, hasBlown, onBlow }) {
  return (
    <motion.section
      aria-label="Birthday cake"
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.42,
        type: "spring",
        bounce: 0.25,
      }}
      className="
        relative w-full max-w-[95vw] sm:max-w-2xl overflow-hidden rounded-[24px] sm:rounded-[32px]
        border border-white/60
        bg-white/72
        p-4 sm:p-8 text-center backdrop-blur-xl
        shadow-[0_20px_60px_rgba(139,92,246,0.14)]
      "
    >
      {/* soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 via-transparent to-violet-100/20" />

      <div className="relative z-10">
        {/* candles */}
        <div className="mb-2 flex items-end justify-center gap-2 sm:gap-5">
          {Array.from({ length: CANDLE_COUNT }, (_, i) => (
            <Candle key={i} index={i} lit={candlesLit} />
          ))}
        </div>

        {/* cake */}
        <motion.span
          className="block text-[64px] sm:text-[108px] leading-none"
          animate={hasBlown ? { scale: [1, 1.08, 1] } : {}}
          transition={{ duration: 0.45 }}
        >
          🧁
        </motion.span>

        {/* action area */}
        <div className="mt-5 flex min-h-[80px] items-center justify-center">
          <AnimatePresence mode="wait">
            {candlesLit ? (
              <motion.button
                key="blow"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, scale: 0.93 }}
                transition={{ delay: 0.18 }}
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.96 }}
                onClick={onBlow}
                className="
          group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full
          border border-white/30
          bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-600
          px-5 sm:px-10 py-3 sm:py-4 text-xs sm:text-base font-extrabold tracking-wide sm:tracking-widest text-white uppercase
          shadow-[0_12px_36px_rgba(168,85,247,0.40)]
          transition-all duration-300
          hover:shadow-[0_20px_48px_rgba(168,85,247,0.55)]
          min-w-[200px] sm:min-w-[220px]
        "
              >
                <span className="text-lg sm:text-xl">🌬️</span>
                <span>Blow the Candles</span>
              </motion.button>
            ) : (
              <motion.div
                key="wish"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 }}
                className="flex flex-col items-center gap-2"
              >
                <p className="text-lg sm:text-2xl font-bold text-pink-500">
                  Your wish will come true! ✨
                </p>
                <motion.span
                  animate={{ scale: [1, 1.18, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="text-4xl sm:text-5xl leading-none"
                >
                  🥳
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

function MessageCard() {
  return (
    <motion.section
      aria-label="Birthday message"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.75, duration: 0.6 }}
      className="
        relative w-full max-w-2xl mx-auto overflow-hidden rounded-[24px] sm:rounded-[32px]
        border border-white/60
        bg-white/72 p-4 sm:p-8 text-center
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(236,72,153,0.10)]
        flex flex-col items-center
      "
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/20 via-transparent to-violet-100/20" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.span
          className="block text-4xl sm:text-5xl leading-none"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        >
          🎈
        </motion.span>

        <h2 className="mt-4 mb-3 text-xl sm:text-3xl font-black text-pink-500">
          Happiest Birthday, sherrr!
        </h2>

        <p className="mx-auto mb-6 max-w-xl text-xs sm:text-base leading-6 sm:leading-7 text-slate-600 px-1">
          Thank you for being the most amazing Person anyone could ask for. You
          make everyday life feel like a celebration. Here&apos;s to more
          adventures, laughs, and unforgettable moments together!, aag lga de ek or saal sath mai, hehe
        </p>

        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3" style={{marginTop: "18px"}}>
          {DECOR_EMOJIS.map((emoji, i) => (
            <motion.span
              key={`${emoji}-${i}`}
              animate={{ y: [0, -9, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: i * 0.12,
                ease: "easeInOut",
              }}
              className="text-xl sm:text-3xl leading-none"
            >
              {emoji}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}