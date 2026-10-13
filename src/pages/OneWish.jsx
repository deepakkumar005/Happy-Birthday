// ONLY RESPONSIVENESS IMPROVEMENTS ADDED
// NOTHING REMOVED OR OVERWRITTEN

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const envelopes = [
  {
    id: 1,
    trigger: "you're sad",
    emoji: "🌧️",
    color: "from-pink-100 to-rose-100",
    borderColor: "border-rose-200",
    sealColor: "bg-rose-300",
    heartColor: "text-rose-400",
    sticker: "💙",
    message: `bachaa, Sometimes ap bhot sad hoge Sometimes apka dil bharri hoga sometimes apke dimag mai kaafi thoughts aarhe honge. \n\n Par suno aise sad rhene se thodi chelga hnn apki sadness valid hogiaapki uss situation ki pareshani valid hogi khuch baar par phir bhi mere liye utho face wash kro betho bhagwan ji ko yaad kro unka path kro aurr ya toh phir mujhe call kro mai aapke sath rhunga jbtk ap wapis se thik nhi hote thodese prr call jarur krna tb ye mt sochna in case baat nhi ho rhi hain ya ladai ho gyi hain nhaa kuch matter nhi krta us wkt, uss wkt bs ap matter krte ho or aapki cheezein matter krti hain isliye call krlena bubu ya mujhe apni saari cheezin chats ke through btana samjhee. \n\n
    aur sad mt rhio samjhi bacha sb acha hoga orr thik hojyega at the end bachaa \n\n
    Waqt hi toh hai nikl jyegaa🫂💗
    \n\n Aur haan… \n\n 
    Kabhi yeh mat sochna ki ap akela ho Bilkul bhi nhi. 
    Main hamesha yahin hoon… apke saath… har us raat mein jab ap chupke se ro dete ho, aur har us subah mein jab ap dobara khud ko sambhalte ho.\n\n Aur hnn kaafi baar aap meri bewakoofi ki vzh se ya meri galtio ki vzh se bhot hurt ho jaatein ho aur aap hmesha ye realise krtein hoge ki mai iss insaan ke sath ku hi aayi prr mai aapke liye sudhrunga or jis bhi cheez se aapko pareshani hogi usse mai change krunga aapke liye or acha bnunga.
    I am always with you no matter wo kya chiz hain, kya baat hain, kya situation hain, chaaye wo sukh ki baat ho ya dukh ki In everything I am with you always💕`,
    deco: ["✨", "🌸", "💫"],
  },
  {
    id: 2,
    trigger: "you miss me",
    emoji: "🥺",
    color: "from-fuchsia-100 to-pink-100",
    borderColor: "border-fuchsia-200",
    sealColor: "bg-fuchsia-300",
    heartColor: "text-fuchsia-400",
    sticker: "🤍",
    message: `Haa bhai yaad aarhi or baat phir bhi nhi krrhe ese thodi hota hai kutti khi ki. \n\n
    Aao message kro ya call kro kabhi bhi kro soo rha hu ya kaam krrha hu ye mt sochoo kb krna hain \n\n
    bss krdo orr bolo santi se merse baat krro mujhe yaad aari hain\n\n
    haqq jatao ji aapka hu purra purra. bhull jaatein ho kya \n\n
    haii hamari yaadey hamare momets kitne ladtein hai phir kitna hastein hai kitna khush rhe kitni msti ki hain humne aage bhi khub krenge\n\n
    isliye jb bhi meri yaad aaye bss mere pass aa jana🫂💕🤞🌙`,
    deco: ["🌟", "💗", "🌙"],
  },
  {
    id: 3,
    trigger: "you can't sleep",
    emoji: "🌙",
    color: "from-lavender-100 to-pink-50",
    borderColor: "border-pink-200",
    sealColor: "bg-pink-300",
    heartColor: "text-pink-400",
    sticker: "⭐",
    message: `Bhooootttttttt pitogeeeeee bhoootttttttt \n\n
    hahhahah, kyuu nhi aari jii ninni kya hua akele ho? ye to sochna bhi mtt samjhe hu na mai overthinking ho rhi hain? tension ho rhi hain?
    itna kuch na socho bacha agr meri yaad aari hai toh miss me vla envelope padho or agr \n\n tension hori hai toh bacha thoda sa sojao thodi si ninni lelo vrna ese \n\n apki tabiyat khrb hojyegi or phir time lgta hai thik hone mai or phir aapkoo medecines leni padengi to ye to achi baat nhi hain na \n\n khrab nhi krni tabiyat sojao bhagwann ji kaa dhyan krke sarra unn prr chhor ke please sojao, \n\n or agr ese late sone jaaoge to uncle se daat khaani padegi aapko or mera bacha bina vzh daat ku khaye hena isliye bhi jldi se so jaao or jb uthoge na soke ek bhdiya si achii good news mielgi joh bhi tension hogi joh bhi overthinking ka reason hai woh sb thik hojyega \n\n
    isliye abhi cute sa betu sojao Goodnight mera pyaara Bachaa🌛💕\n\n`,
    deco: ["🌛", "⭐", "💤"],
  },
  {
    id: 4,
    trigger: "you feel alone",
    emoji: "🫂",
    color: "from-rose-50 to-pink-100",
    borderColor: "border-rose-200",
    sealColor: "bg-rose-200",
    heartColor: "text-rose-500",
    sticker: "💞",
    message: `oHhhh bhayiiiii \n\n
    phele hi bta rha hu santi se sun lo bss chup chap beth ke \n\n
    akele nhii hooo mai huu apke sathh apke pass hu mana thode din ke milna bnd ho gya hain prr sath rhena nhi\n\n
    thik hai isliye bakwass naa krna kii mai alone hori nooo not at all mai apke sath hu apke lie hrr jagah hu Hmesha apni ladai ho ya na ho \n\n
    prr mai apke sath hu apke pass hu and bacha u know na hum ab lifelong sath rhenge to bss aapke khene pai mai ese aapko akela ni na chhor skta or mera bacha chaye kitna bhi gussa ho jaaye mai hmesha usse apne pyaar se shaant krwaunga or uske sath rhunga \n\n
    chaye kuch bhi ho samjee got It na I love youu I love youu so muchh!! \n\n chlo jaldi ab call kro mujhe hehe bhut baatey krege hum🫂💖`,
    deco: ["🫂", "💖", "🌺"],
  },
  {
    id: 5,
    trigger: "you need motivation",
    emoji: "🌟",
    color: "from-amber-50 to-pink-100",
    borderColor: "border-amber-200",
    sealColor: "bg-amber-300",
    heartColor: "text-amber-500",
    sticker: "🔥",
    message: `Haa re motuu, i assume if you need motivation so aap ya kisi chiz se darr rhe hoge joh ki hai in future ya aap koi choice soch rhe hoge ki krna chaiye ya nhi ha toh jii phele ek brr apne aap se pucho ki mujhe kya krna chaiye konsi choice lu toh ye hoga ya dusri lu toh ye hoga uske baad result pr aao orr agr iske baad bhi kuch samjh na aae toh mere paas aao hehehe, but haa please kisi aise se mtt puchna jisko aapki fikr hi na ho ya woh dono choice se sehmat hoo okayyy🤞💕🫶. \n\n
    ab aate hai agr apko darr lg rha hai toh tohh betuu darna waali baat nhi hai sb jo bhi hoga acha hogaa aapne apna best diya toh jo bhi hoga ab acha hi hoga iski tesnion mt lo bss darro mt aaram see nosyyy se lambiiii saas lo aur bhar chhoro orr ghabrao mt sb acha hoga apkii ki hui sarri chiz sarri mehnat ka result acha ayega or sad nhii hone ka or na jyada sochne ka mind ko thoda relax rakh bacha orr agr relax nhi hora toh call krr meko heheh ya phir ghr vlo ke pass jake unko pareshann kroo bhen ko kutt do pakad ke prr overthink na krna bss 🌟🔥💕.`,
    deco: ["🌟", "🔥", "✨"],
  },
  {
    id: 6,
    trigger: "it's your birthday",
    emoji: "🎂",
    color: "from-pink-100 to-fuchsia-100",
    borderColor: "border-fuchsia-200",
    sealColor: "bg-fuchsia-300",
    heartColor: "text-fuchsia-500",
    sticker: "🎉",
    message: `HAPPY BIRTHDAY, YOU My Love! 🎉\n\nYe Puri site issi ke lie hai \n\nfeel every thing in this website you will feel my love for you my care my everything just feel me🎉 and yaa you were alyways special for me alwaysss. \n\nAurr wish tohh hai hii sherr ke lie 🎂✨🎊`,
    deco: ["🎉", "🎂", "🥳"],
  },
];

function Envelope({ env, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative group w-full bg-gradient-to-br ${env.color} border ${env.borderColor} rounded-2xl p-4 sm:p-5 md:p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-md text-left flex flex-col justify-between min-h-[150px] sm:min-h-[160px]`}
      style={{ fontFamily: "'Georgia', serif" }}
    >
      <span
        className="absolute top-2 right-3 text-lg sm:text-xl opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ marginTop: "12px" }}
      >
        {env.deco[0]}
      </span>

      <span className="absolute bottom-3 right-5 text-xs sm:text-sm opacity-40 group-hover:opacity-70 transition-opacity">
        {env.deco[2]}
      </span>

      <div
        className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl ${env.sealColor} opacity-60`}
      />

      <div
        className={`absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 ${env.sealColor} rounded-full flex items-center justify-center shadow-md`}
      >
        <span className="text-white text-xs">♥</span>
      </div>

      <div
        className="mt-3 flex items-center gap-3 sm:gap-4"
        style={{ marginTop: "20px" }}
      >
        <div className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          {env.emoji}
        </div>

        <div className="min-w-0">
          <p className="text-[9px] sm:text-[10px] font-medium text-pink-400 uppercase tracking-widest mb-1" >
            Open When
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-rose-700 leading-tight break-words">
            {env.trigger}
          </h3>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 flex-wrap">
        <span className="text-pink-500 text-[11px] sm:text-xs">
          — sealed with Care and pyorrrr
        </span>

        <span className={`${env.heartColor} text-sm`}>{env.sticker}</span>
      </div>

      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 60%)",
        }}
      />
    </button>
  );
}

function EnvelopeModal({ env, onClose }) {
  const [phase, setPhase] = useState("closed");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("opening"), 50);
    const t2 = setTimeout(() => setPhase("open"), 600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const lines = env.message.split("\n").filter(Boolean);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-2 sm:p-4 overflow-y-auto"
      style={{
        background: "rgba(255, 220, 230, 0.7)",
        backdropFilter: "blur(12px)",
      }}
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full my-auto"
        style={{
          transform:
            phase === "closed"
              ? "scale(0.8) translateY(40px)"
              : "scale(1) translateY(0)",
          opacity: phase === "closed" ? 0 : 1,
          transition: "all 0.5s cubic-bezier(0.34,1.56,0.64,1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`relative bg-gradient-to-br ${env.color} border-2 ${env.borderColor} rounded-3xl overflow-hidden shadow-2xl`}
        >
          <div
            className={`absolute top-0 left-0 right-0 z-10 flex justify-center items-start pt-4 ${env.sealColor}`}
            style={{
              height: "90px",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              transformOrigin: "top center",
              transform: phase === "open" ? "rotateX(180deg)" : "rotateX(0deg)",
              transition: "transform 0.6s ease-in-out",
              transformStyle: "preserve-3d",
            }}
          >
            <span className="text-white text-xl mt-2">♥</span>
          </div>

          <div
            className="relative z-20 bg-white/90 backdrop-blur-sm mx-2 sm:mx-4 mb-2 sm:mb-4 rounded-2xl shadow-inner border border-pink-100 overflow-hidden"
            style={{
              marginTop: "75px",
              transform:
                phase === "open" ? "translateY(0)" : "translateY(40px)",
              opacity: phase === "open" ? 1 : 0,
              transition: "all 0.5s ease 0.3s",
            }}
          >
            <div className={`h-2 w-full ${env.sealColor} opacity-50`} />

            <div
              className="p-4 sm:p-6 md:p-8"
              style={{ margin: "12px", marginTop: "5px" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl sm:text-4xl">{env.emoji}</span>

                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-pink-400 uppercase tracking-widest font-medium">
                    Open When
                  </p>

                  <h2
                    className="text-xl sm:text-2xl font-bold text-rose-700 break-words"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {env.trigger}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex-1 h-px bg-pink-200" />
                <span className="text-pink-300 text-sm">💌</span>
                <div className="flex-1 h-px bg-pink-200" />
              </div>

              <div
                className="space-y-4"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {lines.map((line, i) => (
                  <p
                    key={i}
                    className="text-rose-900 leading-relaxed text-sm sm:text-base break-words"
                    style={{
                      opacity: phase === "open" ? 1 : 0,
                      transform: phase === "open" ? "none" : "translateY(10px)",
                      transition: `all 0.4s ease ${0.5 + i * 0.1}s`,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-pink-50 pt-4 flex-wrap">
                <div className="flex gap-2">
                  {env.deco.map((d, i) => (
                    <span
                      key={i}
                      className="text-lg sm:text-xl"
                      style={{
                        opacity: phase === "open" ? 1 : 0,
                        transform: phase === "open" ? "scale(1)" : "scale(0)",
                        transition: `all 0.3s ease ${1.2 + i * 0.1}s`,
                      }}
                    >
                      {d}
                    </span>
                  ))}
                </div>

                <p className="text-pink-500 font-medium italic text-xs sm:text-sm">
                  always yours 💕
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 bg-white/80 hover:bg-white text-rose-400 hover:text-rose-600 rounded-full flex items-center justify-center transition-all shadow-md text-lg font-bold border border-pink-100"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

// REST OF YOUR CODE REMAINS EXACTLY SAME
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

export default function OneWish() {
  const [active, setActive] = useState(null);
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
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start overflow-x-hidden relative"
      style={{
        background:
          "linear-gradient(160deg, #fff0f5 0%, #fce4ec 40%, #f8bbd0 100%)",
        fontFamily: "'Georgia', serif",
      }}
    >
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {["💕", "🌸", "✨", "💗", "🌷", "💫", "🌸", "💞", "✨", "💕"].map(
          (s, i) => (
            <span
              key={i}
              className="absolute text-2xl opacity-20"
              style={{
                left: `${(i * 13 + 7) % 95}%`,
                top: `${(i * 17 + 10) % 90}%`,
                animation: `float-${i % 3} ${4 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {s}
            </span>
          ),
        )}
      </div>

      {/* Floating Cloud Message */}
     <div
  className="absolute z-20 w-fit"
  style={{
    top: "clamp(10px, 4vh, 40px)",
    left: "clamp(10px, 4vw, 40px)",
    transform: "rotate(-20deg)",
  }}
>
  <p
    className="text-rose-500 text-[9.5px] sm:text-[10px] md:text-sm leading-relaxed text-center font-medium"
    style={{
      fontFamily: "'Georgia', serif",
      lineHeight: "1.4",
    }}
  >
    hey pretty soul 🌸
    <br />
    you matter more than you know
  </p>
</div>

      <style>{`
        @keyframes float-0 { 0%,100%{transform:translateY(0) rotate(-5deg)} 50%{transform:translateY(-20px) rotate(5deg)} }
        @keyframes float-1 { 0%,100%{transform:translateY(0) rotate(3deg)} 50%{transform:translateY(-15px) rotate(-3deg)} }
        @keyframes float-2 { 0%,100%{transform:translateY(0) rotate(-2deg)} 50%{transform:translateY(-25px) rotate(4deg)} }
        @keyframes shimmer { 0%,100%{opacity:0.6} 50%{opacity:1} }
      `}</style>

      {/* Main Content Wrapper */}
      {/* Tightened the gap and added margin-bottom for the "footer below footer" space */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-10 md:py-16 flex flex-col items-center gap-10 md:gap-16 mb-12">
        {/* 1. Header Section */}
        <header className="text-center">
          <div
            className="flex justify-center gap-4 mb-4 text-4xl"
            style={{ animation: "shimmer 3s ease infinite" }}
          >
            <span>💌</span> <span className="text-rose-300">🌸</span>{" "}
            <span>💌</span>
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold text-rose-700 mb-4 tracking-tight mobile-pl"
            style={{ textShadow: "0 4px 20px rgba(255,150,180,0.3)"}}
          >
            Open When...
          </h1>
          <p className="text-rose-500 text-lg md:text-xl max-w-lg mx-auto leading-relaxed italic">
            Pick a letter for whenever you need a little extra love.
          </p>
          <div className="mt-6 flex justify-center items-center">
            <div className="h-[1px] w-16 md:w-24 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
            <span className="mx-4 text-rose-300 text-xl">♥</span>
            <div className="h-[1px] w-16 md:w-24 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
          </div>
          {/* <sp</span> */}
        </header>

        {/* 2. Grid Section (Main Content) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {envelopes.map((env) => (
            <Envelope key={env.id} env={env} onClick={() => setActive(env)} />
          ))}
        </div>

        {/* 3. Footer Section */}
        <footer className="w-full flex justify-center px-4">
          <div
            className="w-full max-w-xl bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-white/50 py-12 px-8 sm:px-12 md:px-16 shadow-xl text-center "
            style={{ marginTop: "-19px" }}
          >
            <p className="text-rose-600 font-bold text-lg md:text-xl mb-3">
              Made with every piece of my heart 💕
            </p>
            <p className="text-rose-900">
              My Care🌹, my Prayers📿, my Warmth for u😊
            </p>
            <p className="text-rose-700 text-sm md:text-base leading-relaxed">
              You are someone who matters alot... I mean,{" "}
              <span className="italic font-semibold">alot.</span>
            </p>
          </div>
        </footer>
      </div>

      <div
        style={{
          width: "100%",
          marginTop: isMobile ? "34px" : "40px",
          paddingBottom: isMobile ? "10px" : "24px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "12px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NavBtn
          to="/celebrate"
          label="Back"
          emoji="←"
          variant="secondary"
          delay={1.0}
        />

        <NavBtn
          to="/oneLast"
          label="hehehe ek aur"
          emoji="🫶"
          variant="primary"
          delay={1.2}
        />
      </div>

      {active && <EnvelopeModal env={active} onClose={() => setActive(null)} />}
    </div>
  );
}
