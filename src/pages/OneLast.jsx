// ONLY RESPONSIVENESS IMPROVEMENTS ADDED
// NOTHING REMOVED OR OVERWRITTEN

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Play, Volume2, PenTool } from "lucide-react";

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

const OneLast = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

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
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-3 sm:p-4 md:p-6 font-serif overflow-x-hidden">
      {/* Decorative Floating Emojis */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.span
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-10 left-4 sm:left-10 text-2xl sm:text-4xl"
        >
          🌸
        </motion.span>

        <motion.span
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-4 sm:right-10 text-2xl sm:text-4xl"
        >
          ✨
        </motion.span>
      </div>

      <div className="w-full flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            /* INITIAL STATE: THE PROMISE BUTTON */
            <motion.div
              key="button-stage"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0, filter: "blur(10px)" }}
              className="text-center w-full px-2"
            >
              <button
                onClick={() => setIsRevealed(true)}
                className="group relative px-5 sm:px-8 py-4 bg-white text-pink-500 rounded-full shadow-lg shadow-pink-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-pink-100 w-full max-w-[90vw] sm:max-w-fit"
                style={{ minHeight: "62px" }}
              >
                <span
                  className="relative z-10 font-medium tracking-wide text-sm sm:text-base md:text-lg leading-relaxed block"
                  style={{
                    padding: isMobile ? "12px 10px" : "40px",
                  }}
                >
                  Click only if you promise to smile.
                </span>

                <div className="absolute inset-0 rounded-full bg-pink-100 opacity-0 group-hover:opacity-20 transition-opacity" />
              </button>

              <p
                className="mt-4 text-pink-800 text-xs sm:text-sm italic"
                style={{ marginTop: "15px", fontSize: '22px' }}
              >
                pinky promise? 🤙
              </p>
            </motion.div>
          ) : (
            /* REVEALED STATE: THE EMOTIONAL CLIMAX */
            <motion.div
              key="content-stage"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl w-full space-y-8 sm:space-y-10 md:space-y-12 text-center px-2 sm:px-4"
            >
              {/* 1. Emotional Paragraph */}
              <motion.section variants={itemVariants} className="space-y-4">
                <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-pink-400 mx-auto mb-4 sm:mb-6 fill-pink-400/20" />

                <p
                  className="text-lg sm:text-2xl md:text-3xl text-pink-800 leading-relaxed font-light px-1"
                  style={{ fontSize: "18px" }}
                >
                  I wanted to take a moment to tell you that joh bhi hume ab tk
                  memories bnayi hai all are unforgettable, by having you world
                  feels a brighter kyukii bs ap ho sath mai, You are my one and
                  only one most rare gift and I'm the one who grateful to have
                  you every second in my life and every momemt we spend
                  together🫶💕. I Hope we make more memories more momemts we
                  laugh, we cry(thoda sa hi) we do everything more this year🤞🦬
                  BTW i know video gandi hai😭😭😭
                </p>
              </motion.section>

              {/* 3. Video / Image Frame */}
              <motion.div
                variants={itemVariants}
                className="relative aspect-video w-full max-w-lg mx-auto bg-pink-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white"
              >
                <video
                  className="w-full h-full object-cover"
                  src="https://ik.imagekit.io/deep01ak/princes-slimcast.mp4"
                  controls
                //   autoPlay
                  unmuted
                  loop
                  poster=""
                  playsInline
                />
              </motion.div>

              {/* 4. Handwritten Image Placeholder */}
              <motion.div variants={itemVariants} className="pt-2 sm:pt-4">
                <div className="inline-block transform -rotate-2 p-4 sm:p-6 bg-white shadow-xl rounded-sm border-t-[14px] sm:border-t-[20px] border-white relative max-w-[90vw]">
                  <PenTool className="absolute -top-8 sm:-top-10 -right-2 sm:-right-4 text-pink-300 w-6 h-6 sm:w-8 sm:h-8" />

                  <p
                    className="text-pink-600 text-lg sm:text-2xl tracking-tighter break-words"
                    style={{ fontFamily: '"Dancing Script", cursive' }}
                  >
                    Always in my heart.
                  </p>
                </div>
              </motion.div>

              {/* 5. Final Line */}
              <motion.footer
                variants={itemVariants}
                className="pt-6 sm:pt-10 px-2"
                style={{ marginTop: "20px" }}
              >
                <div className="h-px w-16 sm:w-24 bg-pink-200 mx-auto mb-6 sm:mb-8" />

                <p className="text-pink-500 font-medium text-sm sm:text-lg tracking-wide sm:tracking-widest uppercase leading-relaxed">
                  You are genuinely one of the best things that ever happened to
                  me Meri ladakuu Vimaan and Mood Swing Queen.
                </p>

                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="mt-4 text-xl sm:text-2xl"
                >
                  🎀
                </motion.div>
              </motion.footer>
            </motion.div>
          )}
        </AnimatePresence>

        {isRevealed ? (
          <div
            style={{
              width: "100%",
              marginTop: isMobile ? "34px" : "40px",
              paddingBottom: isMobile ? "10px" : "24px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NavBtn
              to="/sad"
              label="Back"
              emoji="←"
              variant="secondary"
              delay={1.0}
            />

            <NavBtn
              to="/"
              label="Replay from Start"
              emoji="🔄"
              variant="primary"
              delay={1.2}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default OneLast;
