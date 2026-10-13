import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Sparkles from "../components/Sparkles";

/* ─────────────────────────────────────────────────────────────────────────
   MEMORIESS DATA
   Each card has a title, description, gradient colors, and an images array.
   Replace the placeholder src strings with your real image paths.
   You can add/remove images per card freely — the carousel handles any count.
───────────────────────────────────────────────────────────────────────── */

const memoriess = [
  {
    emoji: "🙈",
    title: "Adaayen",
    description: "Maar dala ree",
    color: "from-pink-400 to-rose-300",
    glow: "rgba(244,114,182,0.3)",
    dot: "#f472b6",
    bg: "from-pink-50 to-rose-50",
    images: [ "https://ik.imagekit.io/deep01ak/G/G1.jpeg",
              "https://ik.imagekit.io/deep01ak/G/G2.jpg",
              "https://ik.imagekit.io/deep01ak/G/G3.jpg",
              "https://ik.imagekit.io/deep01ak/G/G4.jpg",
              "https://ik.imagekit.io/deep01ak/G/G5.jpg",
              "https://ik.imagekit.io/deep01ak/G/G6.jpg",
              "https://ik.imagekit.io/deep01ak/G/G7.jpg",
              "https://ik.imagekit.io/deep01ak/G/G8.jpeg",
              "https://ik.imagekit.io/deep01ak/G/G9.jpeg",
              "https://ik.imagekit.io/deep01ak/G/G10.jpg",
              "https://ik.imagekit.io/deep01ak/G/G11.jpg",
              "https://ik.imagekit.io/deep01ak/G/G12.jpg",
              "https://ik.imagekit.io/deep01ak/G/G13.jpeg",
              "https://ik.imagekit.io/deep01ak/G/G14.jpg",
              "https://ik.imagekit.io/deep01ak/G/G15.jpeg",
              "https://ik.imagekit.io/deep01ak/G/G16.jpg"
    ],
  },
  {
    emoji: "🔫",
    title: "",
    description: "Chota donn",
    glow: "rgba(251,191,36,0.3)",
    dot: "#fbbf24",
    bg: "from-amber-50 to-yellow-50",
    images: [ "https://ik.imagekit.io/deep01ak/H/H1.png",
              "https://ik.imagekit.io/deep01ak/H/H2.jpg",
              "https://ik.imagekit.io/deep01ak/H/H3.jpeg",
              "https://ik.imagekit.io/deep01ak/H/H4.jpg",
              "https://ik.imagekit.io/deep01ak/hhhhh.jpg",
              "https://ik.imagekit.io/deep01ak/H/H6.png",
              "https://ik.imagekit.io/deep01ak/H/H7.jpg",
              "https://ik.imagekit.io/deep01ak/H/H8.jpg",
              "https://ik.imagekit.io/deep01ak/H/H9.png",
              "https://ik.imagekit.io/deep01ak/H/H10.jpg",
              "https://ik.imagekit.io/deep01ak/H/H11.jpg",
              "https://ik.imagekit.io/deep01ak/H/H12.jpg",
              "https://ik.imagekit.io/deep01ak/H/H13.jpg"
    ],
  },
  {
    emoji: "💞",
    title: "Devi ji in Traditionals dresses",
    description: "bhott jyada sundar lgg rhe ho yrr",
    color: "from-rose-400 to-pink-400",
    glow: "rgba(251,113,133,0.3)",
    dot: "#fb7185",
    bg: "from-rose-50 to-pink-50",
    images: [ "https://ik.imagekit.io/deep01ak/I/I1.jpg",
              "https://ik.imagekit.io/deep01ak/I/I2.jpg",
              "https://ik.imagekit.io/deep01ak/I/I3.jpg",
              "https://ik.imagekit.io/deep01ak/I/I4.jpg",
              "https://ik.imagekit.io/deep01ak/I/I5.jpg",
              "https://ik.imagekit.io/deep01ak/I/I6.jpg",
              "https://ik.imagekit.io/deep01ak/I/I7.jpeg",
              "https://ik.imagekit.io/deep01ak/I/I8.jpg",
              "https://ik.imagekit.io/deep01ak/I/I9.jpg",
              "https://ik.imagekit.io/deep01ak/I/I10.jpg",
              "https://ik.imagekit.io/deep01ak/I/I11.jpg",
              "https://ik.imagekit.io/deep01ak/I/I12.jpg",
              "https://ik.imagekit.io/deep01ak/WhatsApp%20Image%202026-10-06%20at%201.51.25%20AM.jpeg",
              "https://ik.imagekit.io/deep01ak/WhatsApp%20Image%202026-10-12%20at%2011.50.20%20PM.jpeg"
    ],
  },
  {
    emoji: "❤️‍🔥",
    title: "Artistic",
    description: "Maan na padega haathon mai jaadu to hain",
    color: "from-violet-500 to-purple-400",
    glow: "rgba(167,139,250,0.3)",
    dot: "#a78bfa",
    bg: "from-violet-50 to-purple-50",
    images: [ "https://ik.imagekit.io/deep01ak/K/K1.png",
              "https://ik.imagekit.io/deep01ak/K/K2.jpg",
              "https://ik.imagekit.io/deep01ak/K/K3.jpg",
              "https://ik.imagekit.io/deep01ak/K/K4.jpg",
              "https://ik.imagekit.io/deep01ak/K/K5.jpg",
              "https://ik.imagekit.io/deep01ak/K/K6.jpg",
              "https://ik.imagekit.io/deep01ak/K/K7.jpg",
              "https://ik.imagekit.io/deep01ak/K/K8.jpg",
              "https://ik.imagekit.io/deep01ak/K/K9.jpeg",
              "https://ik.imagekit.io/deep01ak/K/K10.jpeg",
              "https://ik.imagekit.io/deep01ak/K/K11.jpeg",
              "https://ik.imagekit.io/deep01ak/K/K12.jpeg",
              "https://ik.imagekit.io/deep01ak/K/K13.jpeg",
              "https://ik.imagekit.io/deep01ak/K/K14.jpeg",
              "https://ik.imagekit.io/deep01ak/K/K15.jpeg",
              "https://ik.imagekit.io/deep01ak/WhatsApp%20Image%202026-10-06%20at%201.51.26%20AM.jpeg"
    ],
  },
  {
    emoji: "🎀",
    title: "Kuchu puchu",
    description: "prettiest things in the world",
    color: "from-violet-500 to-purple-400",
    glow: "rgba(167,139,250,0.3)",
    dot: "#a78bfa",
    bg: "from-violet-50 to-purple-50",
    images: [ "https://ik.imagekit.io/deep01ak/J/J1.jpeg",
              "https://ik.imagekit.io/deep01ak/J/J2.jpg",
              "https://ik.imagekit.io/deep01ak/J/J3.jpg",
              "https://ik.imagekit.io/deep01ak/J/J4.jpg",
              "https://ik.imagekit.io/deep01ak/J/J5.jpg",
              "https://ik.imagekit.io/deep01ak/J/J6.jpg",
              "https://ik.imagekit.io/deep01ak/J/J7.jpg",
              "https://ik.imagekit.io/deep01ak/J/J8.jpg",
              "https://ik.imagekit.io/deep01ak/J/J9.jpg",
              "https://ik.imagekit.io/deep01ak/J/J10.jpeg"
    ],
  },
  {
    emoji: "🔐",
    title: "US🫂",
    description: "yaad hai ya bhool gyi",
    color: "from-pink-400 to-rose-300",
    glow: "rgba(244,114,182,0.3)",
    dot: "#f472b6",
    bg: "from-pink-50 to-rose-50",
    images: [ "https://ik.imagekit.io/deep01ak/L/L1.jpg",
              "https://ik.imagekit.io/deep01ak/L/L2.jpg",
              "https://ik.imagekit.io/deep01ak/L/L3.jpg",
              "https://ik.imagekit.io/deep01ak/L/L4.jpg",
              "https://ik.imagekit.io/deep01ak/L/L5.jpg",
              "https://ik.imagekit.io/deep01ak/L/L6.jpg",
              "https://ik.imagekit.io/deep01ak/L/L7.jpg",
              "https://ik.imagekit.io/deep01ak/L/L8.jpg",
              "https://ik.imagekit.io/deep01ak/L/L9.jpg",
              "https://ik.imagekit.io/deep01ak/L/L10.jpg",
              "https://ik.imagekit.io/deep01ak/L/L11.jpg",
              "https://ik.imagekit.io/deep01ak/L/L12.jpg",
              "https://ik.imagekit.io/deep01ak/L/L13.jpg",
              "https://ik.imagekit.io/deep01ak/L/L14.jpg",
              "https://ik.imagekit.io/deep01ak/L/L15.jpg",
              "https://ik.imagekit.io/deep01ak/L/L16.jpg",
              "https://ik.imagekit.io/deep01ak/L/L17.jpg",
              "https://ik.imagekit.io/deep01ak/L/L18.jpg",
              "https://ik.imagekit.io/deep01ak/L/L19.jpg",
              "https://ik.imagekit.io/deep01ak/L/L20.jpg",
              "https://ik.imagekit.io/deep01ak/L/L21.jpg",
              "https://ik.imagekit.io/deep01ak/L/L22.jpg",
              "https://ik.imagekit.io/deep01ak/L/L23.jpg",
              "https://ik.imagekit.io/deep01ak/L/L24.jpg",
              "https://ik.imagekit.io/deep01ak/L/L25.jpg",
              "https://ik.imagekit.io/deep01ak/L/L26.jpg",
              "https://ik.imagekit.io/deep01ak/L/L27.jpg",
              "https://ik.imagekit.io/deep01ak/L/L28.jpeg",
              "https://ik.imagekit.io/deep01ak/L/L29.jpeg",
              "https://ik.imagekit.io/deep01ak/L/L30.jpeg",
              "https://ik.imagekit.io/deep01ak/L/L31.jpg",
              "https://ik.imagekit.io/deep01ak/L/L32.jpg",
              "https://ik.imagekit.io/deep01ak/L/L33.jpg"
    ],
  },
];

/* ─── Image Carousel ──────────────────────────────────────────────────── */
function ImageCarousel({ images, dot, glow }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir) => {
    setDirection(dir);
    setCurrent((p) => (p + dir + images.length) % images.length);
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* Image frame */}
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "110%", // 16:10 aspect ratio
          borderRadius: "16px",
          overflow: "hidden",
          background: `linear-gradient(135deg, ${dot}22, ${dot}11)`,
          boxShadow: `0 8px 24px ${glow}`,
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={images[current]}
              alt={`Memory ${current + 1}`}
              style={{
                width: "100%",
                height: "130%",
                objectFit: "contain",
                display: "block",
              }}
              loading="lazy"
              onError={(e) => {
                /* Graceful placeholder if image missing */
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement.style.background = `linear-gradient(135deg, ${dot}33, ${dot}11)`;
              }}
            />

            {/* Placeholder shown when image fails */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                pointerEvents: "none",
                zIndex: -1,
              }}
            >
              <span style={{ fontSize: "3rem", opacity: 0.4 }}>🖼️</span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: dot,
                  opacity: 0.6,
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}
              >
                Photo {current + 1}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows — only show if more than 1 image */}
        {images.length > 1 && (
          <>
            <motion.button
              //   whileHover={{ scale: 1.12 }}
              //   whileTap={{ scale: 0.92 }}
              onClick={() => go(-1)}
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                border: "none",
                background: "rgba(255,255,255,0.88)",
                backdropFilter: "blur(6px)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                color: dot,
                fontWeight: 700,
                transition: "box-shadow 0.2s",
              }}
            >
              ‹
            </motion.button>

            <motion.button
              //   whileHover={{ scale: 1.12 }}
              //   whileTap={{ scale: 0.92 }}
              onClick={() => go(1)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                border: "none",
                background: "rgba(255,255,255,0.88)",
                backdropFilter: "blur(6px)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                color: dot,
                fontWeight: 700,
                transition: "box-shadow 0.2s",
              }}
            >
              ›
            </motion.button>
          </>
        )}

        {/* Bottom gradient fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40px",
            background:
              "linear-gradient(to top, rgba(255,255,255,0.15), transparent)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            marginTop: "10px",
          }}
        >
          {images.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              animate={{
                width: i === current ? "20px" : "6px",
                background: i === current ? dot : `${dot}55`,
              }}
              transition={{ duration: 0.3 }}
              style={{
                height: "6px",
                borderRadius: "3px",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Memory Card ─────────────────────────────────────────────────────── */
function MemoryCard({ memory, index, isFlag, setFlag }) {
  const [hovered, setHovered] = useState(false);

  if (memory.title === "US🫂" && isFlag === false) {
    return <CalculatorCard isFlag={isFlag} setFlag={setFlag} />;
  } else if (memory.title === "US🫂" && isFlag === true) {
    return (
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -6, scale: 1.015 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        // stagger via CSS-like delay
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Gradient border wrapper */}
        <div
          style={{
            borderRadius: "24px",
            padding: "2px",
            background: hovered
              ? `linear-gradient(135deg, ${memory.dot}99, ${memory.dot}44, ${memory.dot}99)`
              : "linear-gradient(135deg, #e9d5ff33, #fce7f333)",
            boxShadow: hovered
              ? `0 20px 52px ${memory.glow}, 0 6px 18px ${memory.glow}`
              : "0 4px 24px rgba(0,0,0,0.07)",
            transition: "box-shadow 0.4s ease, background 0.4s ease",
            cursor: "default",
          }}
        >
          <div
            style={{
              borderRadius: "22px",
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(14px)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
            className={`bg-gradient-to-br ${memory.bg}`}
          >
            {/* ── Image carousel ── */}
            <div
              style={{ padding: "12px 10px 4px 10px" }}
              className="bg-amber-300"
            >
              <ImageCarousel
                images={memory.images}
                dot={memory.dot}
                glow={memory.glow}
              />
            </div>

            {/* ── Card body ── */}
            <div style={{ padding: "15px 12px 5px" }}>
              {/* Top row: emoji + date badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                {/* Emoji + title */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <motion.span
                    animate={
                      hovered
                        ? { scale: 1.25, rotate: [0, -12, 12, 0] }
                        : { scale: 1, rotate: 0 }
                    }
                    transition={{ duration: 0.5 }}
                    style={{ fontSize: "1.7rem", lineHeight: 1 }}
                  >
                    {memory.emoji}
                  </motion.span>
                  <h3
                    className={`font-heading font-bold bg-gradient-to-r ${memory.color} bg-clip-text text-transparent leading-tight`}
                    style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)" }}
                  >
                    {memory.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p
                className="font-body text-slate-500 leading-relaxed"
                style={{ fontSize: "clamp(0.8rem, 2.2vw, 0.9rem)" }}
              >
                {memory.description}
              </p>

              {/* Shimmer line on hover */}
              <motion.div
                animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  marginTop: "14px",
                  marginBottom: "10px",
                  height: "2px",
                  borderRadius: "2px",
                  background: `linear-gradient(to right, transparent, ${memory.dot}, transparent)`,
                  transformOrigin: "left",
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      // stagger via CSS-like delay
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient border wrapper */}
      <div
        style={{
          borderRadius: "24px",
          padding: "2px",
          background: hovered
            ? `linear-gradient(135deg, ${memory.dot}99, ${memory.dot}44, ${memory.dot}99)`
            : "linear-gradient(135deg, #e9d5ff33, #fce7f333)",
          boxShadow: hovered
            ? `0 20px 52px ${memory.glow}, 0 6px 18px ${memory.glow}`
            : "0 4px 24px rgba(0,0,0,0.07)",
          transition: "box-shadow 0.4s ease, background 0.4s ease",
          cursor: "default",
        }}
      >
        <div
          style={{
            borderRadius: "22px",
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(14px)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
          className={`bg-gradient-to-br ${memory.bg}`}
        >
          {/* ── Image carousel ── */}
          <div
            style={{ padding: "12px 10px 4px 10px" }}
            className="bg-amber-300"
          >
            <ImageCarousel
              images={memory.images}
              dot={memory.dot}
              glow={memory.glow}
            />
          </div>

          {/* ── Card body ── */}
          <div style={{ padding: "15px 12px 5px" }}>
            {/* Top row: emoji + date badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              {/* Emoji + title */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <motion.span
                  animate={
                    hovered
                      ? { scale: 1.25, rotate: [0, -12, 12, 0] }
                      : { scale: 1, rotate: 0 }
                  }
                  transition={{ duration: 0.5 }}
                  style={{ fontSize: "1.7rem", lineHeight: 1 }}
                >
                  {memory.emoji}
                </motion.span>
                <h3
                  className={`font-heading font-bold bg-gradient-to-r ${memory.color} bg-clip-text text-transparent leading-tight`}
                  style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)" }}
                >
                  {memory.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p
              className="font-body text-slate-500 leading-relaxed"
              style={{ fontSize: "clamp(0.8rem, 2.2vw, 0.9rem)" }}
            >
              {memory.description}
            </p>

            {/* Shimmer line on hover */}
            <motion.div
              animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              style={{
                marginTop: "14px",
                marginBottom: "10px",
                height: "2px",
                borderRadius: "2px",
                background: `linear-gradient(to right, transparent, ${memory.dot}, transparent)`,
                transformOrigin: "left",
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Nav Button ──────────────────────────────────────────────────────── */
function NavBtn({ to, label, emoji, variant = "primary", delay = 0 }) {
  const [hov, setHov] = useState(false);
  const isPrimary = variant === "primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
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
          gap: "8px",
          padding: isPrimary ? "14px 32px" : "13px 28px",
          borderRadius: "999px",
          fontWeight: 700,
          textDecoration: "none",
          fontSize: "15px",
          letterSpacing: "0.02em",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
          border: !isPrimary ? "2px solid #e9d5ff" : "none",
          color: isPrimary ? "#fff" : "#9333ea",
          background: isPrimary
            ? "linear-gradient(135deg, #f472b6 0%, #c084fc 55%, #a78bfa 100%)"
            : "rgba(255,255,255,0.75)",
          boxShadow: hov
            ? isPrimary
              ? "0 8px 28px rgba(192,132,252,0.5), inset 0 1px 0 rgba(255,255,255,0.2)"
              : "0 6px 20px rgba(192,132,252,0.18)"
            : isPrimary
              ? "0 4px 18px rgba(192,132,252,0.3)"
              : "0 2px 10px rgba(0,0,0,0.05)",
          backdropFilter: !isPrimary ? "blur(10px)" : undefined,
          textShadow: isPrimary ? "0 1px 3px rgba(0,0,0,0.15)" : undefined,
          transition: "box-shadow 0.3s ease",
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
                "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%)",
              backgroundSize: "200% 100%",
            }}
          />
        )}
        <motion.span
          animate={{ x: !isPrimary && hov ? -2 : 0 }}
          style={{ fontSize: "17px", position: "relative" }}
        >
          {emoji}
        </motion.span>
        <span style={{ position: "relative" }}>{label}</span>
        {isPrimary && (
          <motion.span
            animate={{ x: hov ? 4 : 0, opacity: hov ? 1 : 0.65 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            style={{ fontSize: "16px", position: "relative" }}
          >
            →
          </motion.span>
        )}
      </motion.a>
    </motion.div>
  );
}

/* ─── Mini Calculator Card ───────────────────────────────────────────── */
function CalculatorCard({
  isFlag,
  setFlag,
  dot = "#8b5cf6",
  glow = "rgba(139,92,246,0.25)",
}) {
  const [value, setValue] = useState("0");

  const press = (val) => {
    if (val === "C") {
      setValue("0");
      return;
    }

    if (val === "Enter") {
      // eslint-disable-next-line no-eval
      if (value === "18102005") {
        setFlag(true);
        setValue("0");
        console.log("vvalue of flag is", isFlag);
      } else {
        setValue("Error");
      }

      return;
    }

    setValue((prev) => (prev === "0" || prev === "Error" ? val : prev + val));
  };

  const buttons = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["0", "Clear", "Enter"],
  ];

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      style={{
        width: "100%",
        // maxWidth: "320px",
      }}
    >
      {/* Gradient border wrapper */}
      <div
        style={{
          borderRadius: "24px",
          padding: "2px",
          background: `linear-gradient(135deg, ${dot}99, ${dot}44, ${dot}99)`,
          boxShadow: `0 20px 52px ${glow}, 0 6px 18px ${glow}`,
          //   paddingBottom: "17%"
        }}
      >
        {/* Inner card */}
        <div
          style={{
            borderRadius: "22px",
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(14px)",
            overflow: "hidden",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            // paddingBottom: "20%",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <motion.span
                whileHover={{ rotate: [0, -12, 12, 0], scale: 1.15 }}
                transition={{ duration: 0.5 }}
                style={{
                  fontSize: "1.6rem",
                }}
              >
                🧮
              </motion.span>

              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  background: `linear-gradient(to right, ${dot}, #ec4899)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Unlocked Private Memories
              </h3>
            </div>

            {/* <button
              onClick={() => press("C")}
              style={{
                border: "none",
                background: `#fff`,
                color: dot,
                padding: "6px 12px",
                borderRadius: "10px",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "1.2rem",
              }}
            >
              Clear
            </button> */}
          </div>

          {/* Display */}
          <div
            style={{
              width: "100%",
              minHeight: "72px",
              borderRadius: "18px",
              padding: "16px",
              background: `linear-gradient(135deg, ${dot}14, ${dot}08)`,
              boxShadow: `inset 0 2px 8px ${dot}22`,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                fontSize: "1.8rem",
                fontWeight: 700,
                color: "#1e293b",
                wordBreak: "break-all",
              }}
            >
              {value}
            </span>
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
            }}
          >
            {buttons.flat().map((btn, i) => {
              const isOperator = ["Enter", "Clear"].includes(btn);

              return (
                <motion.button
                  key={i}
                  whileTap={{ scale: 0.92 }}
                  whileHover={{ scale: 1.04 }}
                  onClick={() => press(btn === "Clear" ? "C" : btn)}
                  style={{
                    marginTop: "18px",
                    height: "54px",
                    border: "none",
                    borderRadius: "16px",
                    cursor: "pointer",
                    fontSize: "1rem",
                    fontWeight: 700,
                    transition: "all 0.2s ease",
                    background: isOperator
                      ? `linear-gradient(135deg, ${dot}, #ec4899)`
                      : "rgba(255,255,255,0.7)",
                    color: isOperator ? "#fff" : "#334155",
                    boxShadow: isOperator
                      ? `0 8px 18px ${glow}`
                      : "0 4px 12px rgba(0,0,0,0.06)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {btn}
                </motion.button>
              );
            })}
          </div>

          {/* Bottom shimmer */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileHover={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              height: "2px",
              borderRadius: "2px",
              background: `linear-gradient(to right, transparent, ${dot}, transparent)`,
              transformOrigin: "left",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────── */
function MemoriessPage() {
  const [isFlag, setFlag] = useState(false);
  return (
    <PageTransition>
      <div
        className="page-wrapper min-h-screen relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #fdf4ff 0%, #fff0f6 40%, #f0f9ff 100%)",
        }}
      >
        

        {/* Ambient blobs */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-72 h-72 bg-purple-200/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-1/4 w-64 h-64 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

        {/* Sticker */}
        <motion.img
          src="/stickers/teddy.png"
          alt=""
          className="sticker absolute top-4 right-4 w-20 md:w-28 opacity-70 pointer-events-none select-none"
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />

        {/* ── Single centred column ── */}
        <div className="relative z-10 flex flex-col items-center w-full py-16 px-4">
          {/* ── Header ── */}
          <header className="flex flex-col items-center text-center mb-12 w-full">
            <motion.div
              initial={{ rotateY: 180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.9, type: "spring" }}
              className="relative mb-5"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
                style={{
                  position: "absolute",
                  inset: "-14px",
                  borderRadius: "50%",
                  border: "2px dashed #d8b4fe",
                }}
              />
              <span
                className="block relative z-10 leading-none"
                style={{ fontSize: "clamp(3rem, 10vw, 4rem)" }}
              >
                📸
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-display mb-4 leading-tight"
              style={{
                fontSize: "clamp(2rem, 7vw, 3.5rem)",
                background:
                  "linear-gradient(135deg, #9333ea 0%, #ec4899 55%, #9333ea 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Our Memoriess
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.65, duration: 0.8, ease: "easeOut" }}
              style={{
                height: "3px",
                width: "90px",
                borderRadius: "3px",
                background:
                  "linear-gradient(to right, transparent, #c084fc, #f472b6, transparent)",
                transformOrigin: "center",
                marginBottom: "12px",
              }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="font-heading text-purple-400 tracking-wide max-w-sm"
              style={{ fontSize: "clamp(0.85rem, 2.5vw, 1rem)" }}
            >
              A collection of beautiful moments we've shared together 💝
            </motion.p>
          </header>

          {/* ── Memoriess Grid ──
              auto-fill so 1 col on mobile, 2 on tablet, 3 on wide screens.
              All cards same width — perfectly centred.                     */}
          <div
            style={{
              width: "100%",
              maxWidth: "1080px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "24px",
              marginBottom: "48px",
              marginTop: "20px",
            }}
          >
            {memoriess.map((memory, i) => (
              <MemoryCard
                key={i}
                memory={memory}
                index={i}
                isFlag={isFlag}
                setFlag={setFlag}
              />
            ))}
          </div>

          {/* ── Navigation ── */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "16px",
            }}
          >
            <NavBtn
              to="/memories"
              label="Back to Memories"
              emoji="←"
              variant="secondary"
              delay={0.4}
            />
            <NavBtn
              to="/Letter"
              label="A Letter For You"
              emoji="💌"
              variant="primary"
              delay={0.55}
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default MemoriessPage;
