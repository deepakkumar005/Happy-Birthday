import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Sparkles from "../components/Sparkles";

/* ─── letter content ──────────────────────────────────────────────────── */
const letterLines = [
  { text: "Dear Bubu,", type: "salutation" },
  { text: "", type: "spacer" },
  {
    text: "Happy Birthday to the most incredible Person in my life! ", 
    type: "highlight",
  },
  {
    text: "I know! 🎂",
    type: "highlight",
  },
  { text: "", type: "spacer" },
  {
    text: "Where do I even begin? isse phele hi bhot khuch kh diya prr You're not just my friend —",
    type: "body",
  },
  { text: "you're my favourite person, and veryy kutti", type: "body" },
  { text: "that I got to choose for myself. 💕", type: "body" },
  {
    text: "I just love talking with you i forgot all my tiredness, my spoil mood",
    type: "body",
  },
  {
    text: "apse bss baat krte hi sarri problem bhul jana, mood waps se thik ho jana",
    type: "body",
  },
  {
    text: "you have something... aage btauga 🧙",
    type: "body",
  },
  { text: "", type: "spacer" },
  { text: "Thank you for every laugh we've shared,", type: "body" },
  { text: "every tear you've wiped away, and", type: "body" },
  {
    text: "every moment you've made magical {khair ladaii bhi bhut ki hai kutti ne}",
    type: "body",
  },
  { text: "just by being YOU. ✨", type: "body" },
  { text: "", type: "spacer" },
  { text: "You have Super ability to make", type: "body" },
  {
    text: "Me around you feel special, comfort and loved.",
    type: "body",
  },
  { text: "But today, it's YOUR turn to feel", type: "body" },
  { text: "all the love coming right back at you! 🌸", type: "body" },
  { text: "", type: "spacer" },
  { text: "I hope this year brings you:", type: "subheading" },
  { text: "🌍 Adventures that take your breath away {vese zyda bhr mt jana huhu}", type: "list" },
  { text: "🫶 Bhutt pyarr milee bhutt sarra bhut hasso bhut khus rheo", type: "list" },
  { text: "💎 Growth that makes you even more amazing", type: "list" },
  { text: "🎀 Moments that become forever memories", type: "list" },
  { text: "💌 Success in everything you dream of", type: "list" },
  { text: "🤞And i hope ki sb thik hojaye sb kuchhh A to Z ", type: "list" },
  {
    text: "all your problem, family problem, and sbki health thikk rhaye",
    type: "list",
  },
  {
    text: "ap bhi 3 time ka khana khao, khub sara pani piyo, or time pr sojao ",
    type: "list",
  },
  {text : "ye bhi hai ek I hope ki krooo", type: "list"},
  { text: "", type: "spacer" },
  { text: "You deserve the entire world and more.", type: "body" },
  { text: "Never stop being beautiful , Stunning,", type: "body" },
  {
    text: "wonderful self. The world needs more of YOU {self Obsessed heheh🤣}!",
    type: "body",
  },
  { text: "", type: "spacer" },
  { text: "Here's to another year of us being us —", type: "body" },
  {
    text: "chaotic, loving, and absolutely unstoppable in fights! 🥂",
    type: "body",
  },
  { text: "", type: "spacer" },
  { text: "With all my Love and a millions hugs and Kisses ☺️!", type: "sign-off" },
  { text: "~ Deepak 💝", type: "signature" },
];

/* ─── line styles by type ─────────────────────────────────────────────── */
function lineStyle(type) {
  switch (type) {
    case "salutation":
      return {
        fontSize: "clamp(1.3rem, 4vw, 1.9rem)",
        fontFamily: "var(--font-display, Georgia, serif)",
        color: "#db2777",
        fontWeight: 700,
        marginBottom: "4px",
        lineHeight: 1.35,
        wordBreak: "break-word",
      };
    case "highlight":
      return {
        fontSize: "clamp(0.92rem, 2.5vw, 1.1rem)",
        color: "#7c3aed",
        fontWeight: 700,
        fontStyle: "italic",
        lineHeight: 1.7,
        wordBreak: "break-word",
      };
    case "subheading":
      return {
        fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
        color: "#be185d",
        fontWeight: 600,
        marginTop: "4px",
        lineHeight: 1.7,
        wordBreak: "break-word",
      };
    case "list":
      return {
        fontSize: "clamp(0.85rem, 2.3vw, 0.97rem)",
        color: "#7c3aed",
        paddingLeft: "8px",
        fontWeight: 500,
        lineHeight: 1.9,
        wordBreak: "break-word",
      };
    case "sign-off":
      return {
        fontSize: "clamp(0.85rem, 2.3vw, 0.97rem)",
        color: "#db2777",
        fontStyle: "italic",
        lineHeight: 1.7,
        marginTop: "4px",
        wordBreak: "break-word",
      };
    case "signature":
      return {
        fontSize: "clamp(1.1rem, 3.2vw, 1.6rem)",
        fontFamily: "var(--font-display, Georgia, serif)",
        color: "#9333ea",
        fontWeight: 700,
        lineHeight: 1.4,
        wordBreak: "break-word",
      };
    case "spacer":
      return { height: "20px", display: "block" };
    default:
      return {
        fontSize: "clamp(0.85rem, 2.3vw, 0.97rem)",
        color: "#475569",
        lineHeight: 1.85,
        fontWeight: 450,
        wordBreak: "break-word",
      };
  }
}

/* ─── Nav button ───────────────────────────────────────── */
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

/* ─── Page ────────────────────────────────────────────────────────────── */
function LetterPage() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isRevealing, setIsRevealing] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1100);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isRevealing) return;

    if (visibleLines >= letterLines.length) {
      setIsRevealing(false);
      return;
    }

    const line = letterLines[visibleLines];

    const delay =
      line.type === "spacer" ? 30 : line.type === "signature" ? 300 : 95;

    const t = setTimeout(() => setVisibleLines((p) => p + 1), delay);

    return () => clearTimeout(t);
  }, [visibleLines, isRevealing]);

  const skipAll = () => {
    setVisibleLines(letterLines.length);
    setIsRevealing(false);
  };

  return (
    <PageTransition>
      <div
        className="page-wrapper min-h-screen w-full relative overflow-x-hidden"
        style={{
          background:
            "linear-gradient(135deg, #fff0f6 0%, #fdf4ff 40%, #f0f4ff 100%)",
        }}
      >
        <Sparkles count={14} color="#f9a8d4" />

        {/* Ambient blobs */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-72 h-72 bg-purple-200/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 left-1/3 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />

        {/* ── Full-page centred column ── */}
        <div
          className="relative z-10 flex flex-col items-center w-full"
          style={{
            padding: isMobile ? "24px 12px 40px" : "64px 20px",
          }}
        >
          {/* ── Header ── */}
          <header
            className="flex flex-col items-center text-center w-full"
            style={{
              marginBottom: isMobile ? "28px" : "40px",
            }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", bounce: 0.55, duration: 0.9 }}
              className="relative"
              style={{
                marginBottom: isMobile ? "18px" : "20px",
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
                style={{
                  position: "absolute",
                  inset: isMobile ? "-10px" : "-14px",
                  borderRadius: "50%",
                  border: "2px dashed #f9a8d4",
                }}
              />

              <span
                className="block relative z-10 leading-none"
                style={{
                  fontSize: "clamp(2.8rem, 10vw, 4rem)",
                }}
              >
                💌
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="font-display bg-clip-text text-transparent leading-tight"
              style={{
                fontSize: "clamp(1.8rem, 7vw, 3.5rem)",
                background:
                  "linear-gradient(135deg, #ec4899 0%, #9333ea 55%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                paddingInline: "10px",
                marginBottom: "12px",
              }}
            >
              Ek खत Apke liye
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
              style={{
                height: "3px",
                width: isMobile ? "72px" : "90px",
                borderRadius: "3px",
                background:
                  "linear-gradient(to right, transparent, #f472b6, #c084fc, transparent)",
                transformOrigin: "center",
                marginBottom: "12px",
              }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="font-heading text-purple-400 tracking-wide"
              style={{
                fontSize: "clamp(0.8rem, 2.5vw, 1rem)",
                paddingInline: "10px",
              }}
            >
              Written with Love, ummhaa😘
            </motion.p>
          </header>

          {/* ── Letter card ── */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              width: "100%",
              maxWidth: "980px",
              position: "relative",
            }}
          >
            {/* Floating stickers */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [5, 9, 5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: isMobile ? "-18px" : "-40px",
                right: isMobile ? "-4px" : "-36px",
                width: "clamp(70px, 14vw, 120px)",
                zIndex: 20,
                filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.12))",
                pointerEvents: "none",
              }}
            >
              <img
                src="/stickers/flowers.png"
                alt=""
                className="w-full opacity-90"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], rotate: [-10, -5, -10] }}
              transition={{
                repeat: Infinity,
                duration: 5.5,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                top: isMobile ? "-12px" : "-36px",
                left: isMobile ? "-2px" : "-32px",
                width: "clamp(54px, 11vw, 96px)",
                zIndex: 20,
                filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.1))",
                pointerEvents: "none",
              }}
            >
              <img
                src="/stickers/cake.png"
                alt=""
                className="w-full opacity-85"
              />
            </motion.div>

            {/* Paper card */}
            <div
              style={{
                position: "relative",
                borderRadius: isMobile ? "22px" : "30px",
                padding: "2px",
                background:
                  "linear-gradient(135deg, rgba(244,114,182,0.24), rgba(192,132,252,0.18), rgba(251,207,232,0.24))",
                boxShadow:
                  "0 32px 64px -12px rgba(219,39,119,0.12), 0 8px 24px rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  borderRadius: isMobile ? "20px" : "28px",
                  padding: isMobile
                    ? "16px 12px"
                    : isTablet
                      ? "18px"
                      : "20px 22px 22px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(255,251,253,0.95) 100%)",
                  backdropFilter: "blur(16px)",
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.72), rgba(255,255,255,0.72)),
                    repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 31px,
                      rgba(233,213,255,0.55) 31px,
                      rgba(233,213,255,0.55) 32px
                    ),
                    linear-gradient(90deg, rgba(252,231,243,0.5) 0%, rgba(243,232,255,0.28) 100%)
                  `,
                  minHeight: isMobile ? "unset" : "520px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* top pastel strip */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: isMobile ? "14px" : "18px",
                    opacity: 0.7,
                    background:
                      "repeating-linear-gradient(90deg, #fde2e8 0 44px, #fdf2f8 44px 88px, #ede9fe 88px 132px, #fff1f2 132px 176px)",
                    pointerEvents: "none",
                  }}
                />

                {/* cute floating icons */}
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [-4, 2, -4] }}
                  transition={{
                    repeat: Infinity,
                    duration: 5.5,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    top: isMobile ? "18px" : "20px",
                    left: isMobile ? "14px" : "22px",
                    fontSize: isMobile ? "28px" : "38px",
                    zIndex: 3,
                    pointerEvents: "none",
                    filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.08))",
                  }}
                >
                  📸
                </motion.div>

                <motion.div
                  animate={{ y: [0, 5, 0], rotate: [0, 8, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4.8,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    top: isMobile ? "18px" : "24px",
                    right: isMobile ? "14px" : "24px",
                    fontSize: isMobile ? "18px" : "24px",
                    zIndex: 3,
                    pointerEvents: "none",
                  }}
                >
                  ✨
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ repeat: Infinity, duration: 2.8 }}
                  style={{
                    position: "absolute",
                    left: isMobile ? "12px" : "18px",
                    bottom: isMobile ? "8px" : "30px",
                    fontSize: isMobile ? "16px" : "62px",
                    zIndex: 3,
                    pointerEvents: "none",
                    opacity: 0.95,
                  }}
                >
                  🐰
                </motion.div>

                <motion.div
                  animate={{ rotate: [0, 6, 0], y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4.4 }}
                  style={{
                    position: "absolute",
                    right: isMobile ? "8px" : "18px",
                    bottom: isMobile ? "8px" : "24px",
                    fontSize: isMobile ? "22px" : "36px",
                    zIndex: 3,
                    pointerEvents: "none",
                  }}
                >
                  🌼
                </motion.div>

                {/* Main split layout */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    display: "grid",
                    gridTemplateColumns: isMobile
                      ? "1fr"
                      : "minmax(250px, 0.92fr) minmax(0, 1.08fr)",
                    gap: isMobile ? "26px" : isTablet ? "22px" : "30px",
                    alignItems: "stretch",
                    minHeight: isMobile ? "unset" : "480px",
                    paddingTop: isMobile ? "18px" : "24px",
                  }}
                >
                  {/* LEFT PART */}
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: isMobile ? "10px 2px 0" : "18px 16px 18px 12px",
                    }}
                  >
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 4.6,
                        ease: "easeInOut",
                      }}
                      style={{
                        position: "absolute",
                        top: isMobile ? "6%" : "16%",
                        left: isMobile ? "10%" : "10%",
                        fontSize: isMobile ? "18px" : "28px",
                        zIndex: 2,
                      }}
                    >
                      💗
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, 6, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 4.1,
                        ease: "easeInOut",
                      }}
                      style={{
                        position: "absolute",
                        bottom: isMobile ? "18%" : "24%",
                        left: isMobile ? "10%" : "14%",
                        fontSize: isMobile ? "14px" : "18px",
                        zIndex: 2,
                      }}
                    >
                      ✨
                    </motion.div>

                    <motion.div
                      animate={{ rotate: [-2, 3, -2] }}
                      transition={{
                        repeat: Infinity,
                        duration: 5.8,
                        ease: "easeInOut",
                      }}
                      style={{
                        position: "absolute",
                        top: isMobile ? "16%" : "30%",
                        right: isMobile ? "10%" : "10%",
                        fontSize: isMobile ? "22px" : "34px",
                        zIndex: 2,
                      }}
                    >
                      🍒
                    </motion.div>

                    <div
                      style={{
                        position: "relative",
                        width: isMobile
                          ? "300px"
                          : isTablet
                            ? "300px"
                            : "380px",

                        height: isMobile
                          ? "300px"
                          : isTablet
                            ? "300px"
                            : "380px",

                        filter:
                          "drop-shadow(0 14px 22px rgba(219,39,119,0.14))",

                        flexShrink: 0,
                      }}
                    >
                      {/* heart shadow base */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "#fff",

                          clipPath:
                            "polygon(50% 92%, 18% 68%, 3% 40%, 14% 16%, 35% 12%, 50% 28%, 65% 12%, 86% 16%, 97% 40%, 82% 68%)",

                          WebkitClipPath:
                            "polygon(50% 92%, 18% 68%, 3% 40%, 14% 16%, 35% 12%, 50% 28%, 65% 12%, 86% 16%, 97% 40%, 82% 68%)",
                            transform: "translateZ(0) rotate(-12deg)",
                        }}
                      />

                      {/* actual clipped image layer */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,

                          overflow: "hidden",

                          clipPath:
                            "polygon(50% 92%, 18% 68%, 3% 40%, 14% 16%, 35% 12%, 50% 28%, 65% 12%, 86% 16%, 97% 40%, 82% 68%)",

                          WebkitClipPath:
                            "polygon(50% 92%, 18% 68%, 3% 40%, 14% 16%, 35% 12%, 50% 28%, 65% 12%, 86% 16%, 97% 40%, 82% 68%)",

                          maskImage:
                            "radial-gradient(circle at center, black 98%, transparent 100%)",

                          WebkitMaskImage:
                            "radial-gradient(circle at center, black 98%, transparent 100%)",

                          background:
                            "linear-gradient(145deg, #ffe4ee 0%, #fff5fa 45%, #fdf2ff 100%)",

                          border: "4px solid rgba(255,255,255,0.92)",

                          boxShadow:
                            "0 18px 40px rgba(236,72,153,0.28), 0 8px 18px rgba(192,132,252,0.18)",

                          isolation: "isolate",

                          transform: "translateZ(0) rotate(-12deg)",

                          backfaceVisibility: "hidden",

                          WebkitBackfaceVisibility: "hidden",

                          willChange: "transform",

                          contain: "layout paint style",
                        }}
                      >
                        {/* glossy overlay */}
                        {/* <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background:
                              "linear-gradient(to top right, rgba(255,255,255,0.08), rgba(255,255,255,0.35))",
                            zIndex: 2,
                            pointerEvents: "none",
                          }}
                        /> */}

                        {/* shine */}
                        <div
                          style={{
                            position: "absolute",
                            top: "-20%",
                            left: "-30%",
                            width: "60%",
                            height: "140%",
                            background:
                              "linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.45) 50%, transparent 80%)",
                            transform: "rotate(18deg) ",
                            // zIndex: 3,
                            pointerEvents: "none",
                          }}
                        />

                        <img
                          src="https://ik.imagekit.io/deep01ak/A8.jpg?updatedAt=1790974132271" 
                          alt="Birthday memory"
                          loading="lazy"
                          draggable="false"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            objectPosition: "center",
                            display: "block",
                            transform: "translateZ(0) scale(0.9)",
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",

                            willChange: "transform",

                            userSelect: "none",
                            pointerEvents: "none",

                            filter: "saturate(1.08) contrast(1.02)",
                          }}
                        />
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      style={{
                        marginTop: isMobile ? "5px" : "30px",
                        fontSize: "clamp(1.2rem, 3vw, 1.9rem)",
                        fontWeight: 800,
                        color: "#6b7280",
                        textAlign: "center",
                        lineHeight: 1.2,
                        textShadow: "0 1px 0 rgba(255,255,255,0.8)",
                      }}
                    >
                      Cutie<span style={{ color: "#cbd5e1" }}>♡</span>
                    </motion.div>
                  </div>

                  {/* RIGHT PART */}
                  <div
                    style={{
                      position: "relative",
                      minWidth: 0,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      padding: isMobile ? "0px 2px 4px" : "8px 6px 12px 0",
                    }}
                  >
                    {/* <div
                      style={{
                        textAlign: "center",
                        marginBottom: isMobile ? "12px" : "16px",
                        paddingInline: "8px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "clamp(1.3rem, 4vw, 2.35rem)",
                          fontWeight: 800,
                          color: "#ec4899",
                          letterSpacing: "0.03em",
                          lineHeight: 1.15,
                          fontFamily:
                            "'Comic Sans MS', 'Trebuchet MS', cursive",
                          wordBreak: "break-word",
                        }}
                      >
                        HAPPY BIRTHDAY
                      </div>
                    </div> */}

                    <div
                      style={{
                        position: "relative",
                        zIndex: 10,
                        maxHeight: isMobile ? "unset" : "420px",
                        overflowY: isMobile ? "visible" : "auto",
                        paddingRight: isMobile ? "0px" : "6px",
                      }}
                    >
                      <AnimatePresence mode="popLayout">
                        {letterLines.slice(0, visibleLines).map((line, i) =>
                          line.type === "spacer" ? (
                            <div
                              key={i}
                              style={{
                                height: isMobile ? "16px" : "20px",
                              }}
                            />
                          ) : (
                            <motion.p
                              key={i}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.35,
                                ease: "easeOut",
                              }}
                              style={lineStyle(line.type)}
                            >
                              {line.text}
                            </motion.p>
                          ),
                        )}
                      </AnimatePresence>

                      {isRevealing && (
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ repeat: Infinity, duration: 0.9 }}
                          style={{
                            display: "inline-block",
                            width: "2px",
                            height: "1.1em",
                            background:
                              "linear-gradient(to bottom, #f472b6, #c084fc)",
                            borderRadius: "2px",
                            verticalAlign: "middle",
                            marginLeft: "3px",
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Actions ── */}
          <div
            style={{
              width: "100%",
              maxWidth: "980px",
              marginTop: isMobile ? "28px" : "36px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <AnimatePresence mode="wait">
              {isRevealing ? (
                <motion.div
                  key="skip"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    width: isMobile ? "100%" : "auto",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <NavBtn
                    label="Skip Typing"
                    emoji="✨"
                    variant="secondary"
                    onClick={skipAll}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="nav"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    flexWrap: "wrap",
                    gap: "16px",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <NavBtn
                    to="/memoriess"
                    label="Back"
                    emoji="←"
                    variant="secondary"
                    delay={0}
                  />

                  <NavBtn
                    to="/celebrate"
                    label="Let's Celebrate!"
                    emoji="🎉"
                    variant="gold"
                    delay={0.1}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default LetterPage;
