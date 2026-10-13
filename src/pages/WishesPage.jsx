import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Sparkles from "../components/Sparkles";

const wishes = [
  {
    emoji: "🌟",
    title: "Shine Bright",
    text: "May your year be as radiant and beautiful as you are! You light up everywhere  you Go. ✨",
    color: "from-gold-300 to-pink-300",
    bgColor: "bg-gold-200/20",
  },
  {
    emoji: "💖",
    title: "Love & Joy",
    text: "Wishing you a saal filled with love, laughter, and all the happiness your heart can't hold, unexpected good things! 🌈",
    color: "from-pink-400 to-rose-400",
    bgColor: "bg-pink-200/20",
  },
  {
    emoji: "🦋",
    title: "Dream Big",
    text: "May all your dreams come true ! You deserve every wonderful thing coming your way. 🌸",
    color: "from-purple-400 to-pink-400",
    bgColor: "bg-purple-200/20",
  },
  {
    emoji: "🎀",
    title: "Stay Magical",
    text: "You are pure magic! Never stop being the incredible, unique, wonderful person you are! 💫",
    color: "from-pink-300 to-lavender-300",
    bgColor: "bg-lavender-200/20",
  },
  {
    emoji: "🌺",
    title: "Bloom & Grow",
    text: "Like a beautiful flower, may you continue to bloom and grow finer with each passing day, just like wine!🍷",
    color: "from-rose-300 to-peach-300",
    bgColor: "bg-rose-200/20",
  },
  {
    emoji: "⭐",
    title: "You're a Star",
    text: "Never forget how special you are! The world is brighter because you're in it, my cute Bachaa! 💖",
    color: "from-gold-300 to-purple-300",
    bgColor: "bg-gold-200/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function WishCard({ wish, isMobile }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      style={{
        width: "100%",
        position: "relative",
        borderRadius: isMobile ? "20px" : "24px",
        padding: "2px",
        background: hovered
          ? `linear-gradient(135deg, ${wish.dot}88, ${wish.dot}44, ${wish.dot}88)`
          : "linear-gradient(135deg, #e9d5ff44, #fce7f344)",
        boxShadow: hovered
          ? `0 16px 48px ${wish.glow}, 0 4px 16px ${wish.glow}`
          : "0 4px 24px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.4s ease, background 0.4s ease",
        cursor: "default",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          borderRadius: isMobile ? "18px" : "22px",
          padding: isMobile ? "22px 18px 20px" : "28px 24px 24px",
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(12px)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        className={`bg-gradient-to-br ${wish.bg}`}
      >
        {/* Top row */}
        <div
          className="flex items-start justify-between"
          style={{
            marginBottom: isMobile ? "14px" : "16px",
            gap: "12px",
          }}
        >
          <motion.div
            animate={
              hovered
                ? { scale: 1.25, rotate: [0, -12, 12, 0] }
                : { scale: 1, rotate: 0 }
            }
            transition={{ duration: 0.5 }}
            style={{
              fontSize: isMobile ? "2.2rem" : "2.6rem",
              lineHeight: 1,
              flexShrink: 0,
            }}
          >
            {wish.emoji}
          </motion.div>

          <div className="flex gap-1 pt-1 flex-shrink-0">
            {[0, 1, 2].map((j) => (
              <motion.span
                key={j}
                animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                  delay: j * 0.3,
                }}
                style={{
                  display: "block",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: wish.dot,
                }}
              />
            ))}
          </div>
        </div>

        <h3
          className={`font-heading font-bold bg-gradient-to-r ${wish.color} bg-clip-text text-transparent leading-tight`}
          style={{
            fontSize: isMobile ? "1.05rem" : "1.25rem",
            marginBottom: isMobile ? "10px" : "12px",
            wordBreak: "break-word",
          }}
        >
          {wish.title}
        </h3>

        <p
          className="text-gray-500 font-body flex-1"
          style={{
            fontSize: isMobile ? "0.9rem" : "0.95rem",
            lineHeight: 1.7,
            wordBreak: "break-word",
          }}
        >
          {wish.text}
        </p>

        {/* Bottom shimmer bar */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            marginTop: isMobile ? "14px" : "18px",
            height: "2px",
            borderRadius: "2px",
            background: `linear-gradient(to right, transparent, ${wish.dot}, transparent)`,
            transformOrigin: "left",
          }}
        />
      </div>
    </motion.div>
  );
}

function NavBtn({ to, label, emoji, variant = "primary", delay = 0 }) {
  const [hov, setHov] = useState(false);
  const isPrimary = variant === "primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      style={{
        width: "100%",
        maxWidth: "280px",
      }}
    >
      <motion.a
        href={to}
        onHoverStart={() => setHov(true)}
        onHoverEnd={() => setHov(false)}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          width: "100%",
          padding: isPrimary ? "14px 24px" : "13px 24px",
          borderRadius: "999px",
          fontWeight: 700,
          textDecoration: "none",
          fontSize: "clamp(13px, 2vw, 15px)",
          letterSpacing: "0.02em",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
          transition: "box-shadow 0.3s ease",
          whiteSpace: "nowrap",

          ...(isPrimary
            ? {
                background:
                  "linear-gradient(135deg, #f472b6 0%, #c084fc 55%, #a78bfa 100%)",
                color: "#fff",
                boxShadow: hov
                  ? "0 8px 28px rgba(192,132,252,0.5), inset 0 1px 0 rgba(255,255,255,0.2)"
                  : "0 4px 18px rgba(192,132,252,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
                textShadow: "0 1px 3px rgba(0,0,0,0.15)",
              }
            : {
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(10px)",
                color: "#9333ea",
                border: "2px solid #e9d5ff",
                boxShadow: hov
                  ? "0 6px 20px rgba(192,132,252,0.18)"
                  : "0 2px 10px rgba(0,0,0,0.05)",
              }),
        }}
      >
        {isPrimary && (
          <motion.span
            aria-hidden
            animate={{ backgroundPosition: hov ? "200% 0" : "-200% 0" }}
            transition={{ duration: 0.55 }}
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
              backgroundSize: "200% 100%",
            }}
          />
        )}

        <motion.span
          animate={{ x: !isPrimary && hov ? -2 : 0 }}
          style={{
            fontSize: "17px",
            position: "relative",
            flexShrink: 0,
          }}
        >
          {emoji}
        </motion.span>

        <span style={{ position: "relative" }}>{label}</span>

        {isPrimary && (
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
      </motion.a>
    </motion.div>
  );
}

function WishesPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <PageTransition>
      <div
        className="page-wrapper min-h-screen relative overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom right, #fdf2f8, #faf5ff, #fff1f2)",
        }}
      >
        <Sparkles count={14} color="#c084fc" />

        {/* Ambient blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-24 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-1/3 w-72 h-72 bg-rose-200/25 rounded-full blur-3xl pointer-events-none" />

        {/* Stickers */}
        <motion.img
          src="/stickers/flowers.png"
          alt=""
          className="sticker absolute opacity-75 pointer-events-none select-none"
          style={{
            top: isMobile ? "14px" : "24px",
            right: isMobile ? "8px" : "16px",
            width: isMobile ? "72px" : "112px",
          }}
          initial={{ x: 60, opacity: 0, rotate: 15 }}
          animate={{ x: 0, opacity: 0.75, rotate: 8 }}
          transition={{ delay: 0.8, duration: 1, type: "spring" }}
        />

        <motion.img
          src="/stickers/teddy.png"
          alt=""
          className="sticker absolute opacity-75 pointer-events-none select-none"
          style={{
            bottom: isMobile ? "90px" : "112px",
            left: isMobile ? "4px" : "12px",
            width: isMobile ? "70px" : "112px",
          }}
          initial={{ x: -60, opacity: 0, rotate: -15 }}
          animate={{ x: 0, opacity: 0.75, rotate: -6 }}
          transition={{ delay: 1.1, duration: 1, type: "spring" }}
        />

        {/* Main Layout */}
        <div
          className="relative z-10 flex flex-col items-center min-h-screen"
          style={{
            padding: isMobile ? "28px 14px 40px" : "64px 20px",
          }}
        >
          {/* Header */}
          <div
            className="text-center w-full"
            style={{
              marginBottom: isMobile ? "34px" : "48px",
            }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", bounce: 0.55, duration: 0.9 }}
              className="relative inline-block"
              style={{
                marginBottom: isMobile ? "18px" : "20px",
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                style={{
                  position: "absolute",
                  inset: isMobile ? "-10px" : "-12px",
                  borderRadius: "50%",
                  border: "2px dashed #e9d5ff",
                }}
              />

              <span
                className="block leading-none relative z-10"
                style={{
                  fontSize: "clamp(3rem, 10vw, 4rem)",
                }}
              >
                🎂
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="font-display gradient-text leading-tight"
              style={{
                fontSize: "clamp(2rem, 8vw, 4rem)",
                marginBottom: "16px",
                paddingInline: "10px",
              }}
            >
              Birthday Wishes
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
              style={{
                height: "3px",
                width: isMobile ? "70px" : "80px",
                margin: "0 auto 14px",
                borderRadius: "3px",
                background:
                  "linear-gradient(to right, #f472b6, #c084fc, #a78bfa)",
                transformOrigin: "center",
              }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="text-purple-400 font-heading tracking-wide"
              style={{
                fontSize: isMobile ? "0.95rem" : "1.1rem",
                paddingInline: "14px",
                lineHeight: 1.6,
              }}
            >
              Each wish is wrapped with love, just for you 🎀
            </motion.p>
          </div>

          {/* Wishes Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              width: "100%",
              maxWidth: "1100px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(280px, 1fr))",
              gap: isMobile ? "18px" : "24px",
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            {wishes.map((wish, i) => (
              <WishCard key={i} wish={wish} isMobile={isMobile} />
            ))}
          </motion.div>

          {/* Navigation */}
          <div
            style={{
              width: "100%",
              marginTop: isMobile ? "34px" : "56px",
              paddingBottom: isMobile ? "10px" : "24px",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "16px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NavBtn
              to="/"
              label="Back"
              emoji="←"
              variant="secondary"
              delay={1.0}
            />

            <NavBtn
              to="/memories"
              label="Our Memories"
              emoji="📸"
              variant="primary"
              delay={1.2}
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default WishesPage;
