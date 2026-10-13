import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Sparkles from "../components/Sparkles";
import confetti from "canvas-confetti";

function LandingPage() {
  const [showContent, setShowContent] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showContent) {
      const duration = 3500;
      const end = Date.now() + duration;
      const colors = [
        "#f472b6",
        "#c084fc",
        "#fbbf24",
        "#f9a8d4",
        "#d8b4fe",
        "#fb7185",
      ];

      (function frame() {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 60,
          origin: { x: 0, y: 0.6 },
          colors,
          scalar: 1.1,
        });

        confetti({
          particleCount: 4,
          angle: 120,
          spread: 60,
          origin: { x: 1, y: 0.6 },
          colors,
          scalar: 1.1,
        });

        if (Date.now() < end) requestAnimationFrame(frame);
      })();
    }
  }, [showContent]);

  const titleLetters = "Happy Birthday!".split("");

  return (
    <PageTransition>
      <div
        className="
          page-wrapper
          flex flex-col items-center justify-center
          min-h-screen w-full
          bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100
          relative overflow-hidden
          px-4 sm:px-6 md:px-8
          py-8 sm:py-10
        "
      >
        <Sparkles count={24} />

        {/* Ambient glow blobs */}
        <div className="absolute -top-20 -left-20 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 bg-pink-300/25 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute -bottom-20 -right-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-300/25 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[450px] md:w-[600px] h-[320px] sm:h-[450px] md:h-[600px] bg-rose-200/10 rounded-full blur-3xl pointer-events-none" />

        {/* Corner stickers */}
        <motion.img
          src="/stickers/balloons.png"
          alt="Balloons"
          className="
            sticker absolute
            top-2 right-2 sm:top-4 sm:right-4
            w-16 sm:w-24 md:w-36
            opacity-90 pointer-events-none select-none
          "
          initial={{ y: -80, opacity: 0, rotate: -12 }}
          animate={{ y: 0, opacity: 0.9, rotate: 6 }}
          transition={{
            delay: 1.0,
            duration: 1.1,
            type: "spring",
            bounce: 0.45,
          }}
        />

        <motion.img
          src="/stickers/cake.png"
          alt="Birthday Cake"
          className="
            sticker absolute
            bottom-16 left-2 sm:bottom-20 sm:left-4
            w-14 sm:w-20 md:w-32
            pointer-events-none select-none
          "
          initial={{ y: 80, opacity: 0, rotate: 12 }}
          animate={{ y: 0, opacity: 1, rotate: -6 }}
          transition={{
            delay: 1.3,
            duration: 1.1,
            type: "spring",
            bounce: 0.45,
          }}
        />

        <motion.img
          src="/stickers/gift.png"
          alt="Gift"
          className="
            sticker absolute
            bottom-16 right-2 sm:bottom-20 sm:right-4
            w-12 sm:w-16 md:w-24
            pointer-events-none select-none
          "
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 1.6,
            duration: 0.8,
            type: "spring",
            bounce: 0.6,
          }}
        />

        {/* ── Main Content ── */}
        <div
          className="
            relative z-10
            flex flex-col items-center text-center
            w-full max-w-5xl
            px-2 sm:px-4
          "
        >
          {/* Crown */}
          <motion.div
            initial={{ y: -40, opacity: 0, scale: 0.6 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.9,
              type: "spring",
              bounce: 0.5,
            }}
            className="
              text-5xl sm:text-6xl md:text-8xl
              animate-float
              leading-none
              mb-5 sm:mb-6
            "
          >
            👑
          </motion.div>

          {/* Letter-by-letter title */}
          <div
            className="
              flex flex-wrap justify-center items-baseline
              mb-6 sm:mb-8
              max-w-full
            "
            aria-label="Happy Birthday!"
          >
            {titleLetters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 48, opacity: 0, rotateX: 90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{
                  delay: 0.5 + i * 0.075,
                  duration: 0.9,
                  type: "spring",
                  bounce: 0.4,
                }}
                className="
                  text-4xl
                  sm:text-5xl
                  md:text-7xl
                  lg:text-8xl
                  font-display
                  gradient-text
                  inline-block
                  leading-[1.2]
                "
                style={{
                  marginRight: letter === " " ? "10px" : undefined,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Primary subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.7 }}
            className="
              text-lg sm:text-xl md:text-2xl
              font-heading text-purple-500
              font-medium leading-snug
              mb-3 sm:mb-4
              px-2
            "
          >
            To the most amazing person in the world 💕
          </motion.p>

          {/* Secondary subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.35, duration: 0.7 }}
            className="
              text-sm sm:text-base md:text-lg
              font-body text-pink-600
              leading-relaxed
              mb-14 sm:mb-20
              px-2
              max-w-xl
            "
            style={{marginBottom: '12px'}}
          >
            I made something veryy veryyy special just for you ✨
          </motion.p>

          {/* ── Enhanced CTA Button ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 2.85,
              duration: 0.6,
              type: "spring",
              bounce: 0.5,
            }}
            className="mb-8 sm:mb-10 w-full flex justify-center"
          >
            <motion.a
              href="/wishes"
              onHoverStart={() => setButtonHovered(true)}
              onHoverEnd={() => setButtonHovered(false)}
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                width: "100%",
                maxWidth: "340px",
                padding: "16px 24px",
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, #f472b6 0%, #c084fc 50%, #a78bfa 100%)",
                boxShadow: buttonHovered
                  ? "0 8px 32px rgba(192,132,252,0.55), 0 2px 8px rgba(244,114,182,0.3), inset 0 1px 0 rgba(255,255,255,0.25)"
                  : "0 4px 20px rgba(192,132,252,0.35), 0 2px 6px rgba(244,114,182,0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
                textDecoration: "none",
                transition: "box-shadow 0.3s ease",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              {/* Shimmer overlay */}
              <motion.span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%)",
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: buttonHovered ? "200% 0" : "-200% 0",
                }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
              />

              {/* Gift emoji */}
              <motion.span
                animate={{
                  rotate: buttonHovered ? [0, -15, 15, -10, 10, 0] : 0,
                }}
                transition={{ duration: 0.5 }}
                style={{
                  fontSize: "22px",
                  lineHeight: 1,
                  position: "relative",
                  flexShrink: 0,
                  
                }}
              >
                🎁
              </motion.span>

              {/* Label */}
              <span
                style={{
                    // marginTop: '12px',
                  fontSize: "clamp(14px, 2vw, 17px)",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "0.02em",
                  fontFamily: "inherit",
                  textShadow: "0 1px 4px rgba(0,0,0,0.15)",
                  position: "relative",
                  whiteSpace: "nowrap",
                }}
              >
                Open Your Surprise
              </span>

              {/* Animated arrow */}
              <motion.span
                animate={{
                  x: buttonHovered ? 5 : 0,
                  opacity: buttonHovered ? 1 : 0.7,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                style={{
                  fontSize: "18px",
                  lineHeight: 1,
                  color: "#fff",
                  position: "relative",
                  flexShrink: 0,
                }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Scroll hint */}
          <motion.p
          style={{marginTop: '12px'}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{
              opacity: { delay: 3.6, duration: 0.6 },
              y: {
                delay: 3.6,
                repeat: Infinity,
                duration: 1.6,
                ease: "easeInOut",
              },
            }}
            className="
              text-pink-800
              text-md sm:text-sm md:text-md
              font-body tracking-wide
              px-2 text-center
            "
          >
            ↑ &nbsp;Click to begin your birthday journey Bubuuuu&nbsp; ↑
          </motion.p>
        </div>

        {/* Floating bottom emoji row */}
        <div
          className="
            absolute bottom-3 sm:bottom-5
            left-0 right-0
            flex justify-center
            gap-3 sm:gap-5
            text-lg sm:text-2xl
            opacity-60 pointer-events-none
            px-4
          "
        >
          {["🎀", "🌸", "💖", "🦋", "🌺"].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -9, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2.2,
                delay: i * 0.28,
                ease: "easeInOut",
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

export default LandingPage;