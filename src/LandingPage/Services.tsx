import { useState, useEffect, useRef, useCallback } from "react";
import { motion, type Variants } from "framer-motion";

interface Platform {
  id: number;
  name: string;
  tagline: string;
  url: string;
  image: string;
  color: string;
  accent: string;
  category: string;
}

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const platforms: Platform[] = [
  {
    id: 1,
    name: "OXYLOANS",
    tagline: "P2P Lending Platform",
    url: "https://oxyloans.com",
    image: "https://i.ibb.co/gM2sPb26/oxyloans.png",
    color: "#2F5FAA",
    accent: "#3FBF9A",
    category: "FinTech",
  },
  {
    id: 2,
    name: "OXYBRICKS.WORLD",
    tagline: "Real Estate Investment",
    url: "https://oxybricks.world/",
    image: "https://i.ibb.co/vCdv7rGf/oxybricks.png",
    color: "#36A35C",
    accent: "#2F5FAA",
    category: "PropTech",
  },
  {
    id: 3,
    name: "ASKOXY.AI",
    tagline: "AI-Powered Assistant",
    url: "https://askoxy.ai",
    image: "https://i.ibb.co/bRF71ZFc/askoxy.png",
    color: "#3FBF9A",
    accent: "#2F5FAA",
    category: "AI / SaaS",
  },
  {
    id: 4,
    name: "OXYCHAIN.IN",
    tagline: "Blockchain Solutions",
    url: "http://oxychain.world/",
    image: "https://i.ibb.co/QjjqznfR/oxychain.png",
    color: "#2F5FAA",
    accent: "#36A35C",
    category: "Web3",
  },
  {
    id: 5,
    name: "OXYGOLD.AI",
    tagline: "People · Platforms · Products · caPital",
    url: "https://www.oxygold.ai/",
    image: "https://i.ibb.co/zVpj6wZj/oxygoldweb.png",
    color: "#2F5FAA",
    accent: "#36A35C",
    category: "Gold",
  },
];

const N = platforms.length;
const GAP = 16;
const DURATION = 4000;
const CLONES = N;
const TOTAL = N * 3;

function getItem(i: number) {
  return platforms[i % N];
}

export default function Services() {
  const [active, setActive] = useState(CLONES);
  const [animated, setAnimated] = useState(true);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [vw, setVw] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  useEffect(() => {
    const update = () => setVw(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!animated) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimated(true));
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [animated]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (active < CLONES) {
      timeout = setTimeout(() => {
        setAnimated(false);
        setActive(active + N);
      }, 650);
    } else if (active >= CLONES + N) {
      timeout = setTimeout(() => {
        setAnimated(false);
        setActive(active - N);
      }, 650);
    }
    return () => clearTimeout(timeout);
  }, [active]);

  const goNext = useCallback(() => setActive((p) => p + 1), []);
  const goPrev = useCallback(() => setActive((p) => p - 1), []);

  const dotIndex = (((active - CLONES) % N) + N) % N;

  const goToDot = useCallback((i: number) => {
    setAnimated(true);
    setActive(CLONES + i);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!paused) {
      timerRef.current = setInterval(goNext, DURATION);
    }
  }, [paused, goNext]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const isMobile = vw < 640;
  const isTablet = vw >= 640 && vw < 1024;

  const sectionPaddingX = isMobile ? 14 : isTablet ? 28 : 80;
  const cardW = isMobile ? vw * 0.88 : isTablet ? vw * 0.62 : vw * 0.46;
  const cardRadius = isMobile ? 18 : 24;
  const imageH = isMobile ? 230 : isTablet ? 320 : 420;
  const footerH = isMobile ? 82 : 92;

  const trackX = vw / 2 - active * (cardW + GAP) - cardW / 2;
  const arrowSize = isMobile ? 34 : isTablet ? 42 : 48;

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="w-full overflow-hidden bg-white"
      style={{
        padding: isMobile ? "28px 0 24px" : "50px 0 32px",
        fontFamily: "'Poppins', 'Segoe UI', sans-serif",
      }}
    >
      <motion.div
        variants={headingVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl text-center"
        style={{
          paddingLeft: sectionPaddingX,
          paddingRight: sectionPaddingX,
          marginBottom: isMobile ? 22 : 34,
        }}
      >
        <h2
          className="font-bold leading-tight text-[#111827]"
          style={{
            fontSize: isMobile ? 28 : isTablet ? 38 : 48,
            lineHeight: 1.15,
          }}
        >
          Our{" "}
          <span className="relative inline-block font-bold text-[#36A35C]">
            Platforms
            <motion.span
              initial={{ scaleX: 0, transformOrigin: "left" }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                position: "absolute",
                left: 0,
                bottom: isMobile ? -4 : -6,
                width: "100%",
                height: 3,
                borderRadius: 999,
                background: "#36A35C",
              }}
            />
          </span>
        </h2>

        <p
          className="mx-auto text-[#4b5563]"
          style={{
            maxWidth: 760,
            marginTop: 14,
            fontSize: isMobile ? 13 : isTablet ? 15 : 16,
            lineHeight: 1.7,
          }}
        >
          Tailored solutions across FinTech, Gold, AI and Blockchain — built for
          scale.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative"
        onMouseEnter={() => !isMobile && setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{
          overflow: "hidden",
          paddingBottom: 10,
        }}
      >
        <div
          className="flex items-center"
          style={{
            gap: GAP,
            transform: `translateX(${trackX}px)`,
            transition: animated
              ? "transform 0.6s cubic-bezier(0.4,0,0.2,1)"
              : "none",
            willChange: "transform",
          }}
        >
          {Array.from({ length: TOTAL }, (_, i) => {
            const pl = getItem(i);
            const isActive = i === active;

            return (
              <motion.div
                key={i}
                onClick={() => {
                  if (!isActive) {
                    setAnimated(true);
                    setActive(i);
                    resetTimer();
                    return;
                  }
                  openLink(pl.url);
                }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                style={{
                  width: cardW,
                  borderRadius: cardRadius,
                  overflow: "visible",
                  flexShrink: 0,
                  background: "transparent",
                  border: "none",
                  boxShadow: isActive
                    ? "0px 24px 60px rgba(0,0,0,0.18)"
                    : "0px 12px 28px rgba(0,0,0,0.10)",
                  opacity: isMobile
                    ? isActive
                      ? 1
                      : 0.82
                    : isActive
                      ? 1
                      : 0.58,
                  transform: isActive
                    ? "scale(1)"
                    : isMobile
                      ? "scale(0.96)"
                      : "scale(0.93)",
                  transition:
                    "opacity 0.45s ease, transform 0.45s ease, box-shadow 0.45s ease",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    height: imageH,
                    width: "100%",
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 0,
                    borderRadius: 22,
                    overflow: "hidden",
                  }}
                >
                  <motion.img
                    src={pl.image}
                    alt={pl.name}
                    loading="lazy"
                    decoding="async"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "center center",
                      display: "block",
                      borderRadius: 22,
                      background: "#ffffff",
                      filter: "none",
                    }}
                  />
                </div>

                <div
                  style={{
                    minHeight: footerH,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    padding: isMobile ? "14px 16px" : "16px 22px",
                    boxSizing: "border-box",
                    background: "transparent",
                  }}
                >
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <p
                      style={{
                        margin: 0,
                        fontWeight: 800,
                        color: pl.color,
                        fontSize: isMobile ? 13 : 15,
                        lineHeight: 1.2,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {pl.name}
                    </p>

                    <p
                      style={{
                        margin: "5px 0 0",
                        fontWeight: 500,
                        color: "#4b5563",
                        fontSize: isMobile ? 10 : 12,
                        lineHeight: 1.4,
                        display: "-webkit-box",
                        WebkitLineClamp: isMobile ? 2 : 1,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {pl.tagline}
                    </p>
                  </div>

                  <motion.a
                    href={pl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Explore ${pl.name}`}
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      flexShrink: 0,
                      textDecoration: "none",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: isMobile ? 10 : 12,
                      padding: isMobile ? "7px 12px" : "8px 15px",
                      borderRadius: 999,
                      background: pl.accent,
                      boxShadow: `0 6px 16px ${pl.accent}40`,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Explore ↗
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <ArrowBtn
          side="left"
          size={arrowSize}
          inset={isMobile ? 8 : 16}
          onClick={() => {
            goPrev();
            resetTimer();
          }}
        />

        <ArrowBtn
          side="right"
          size={arrowSize}
          inset={isMobile ? 8 : 16}
          onClick={() => {
            goNext();
            resetTimer();
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="flex items-center justify-center"
        style={{
          gap: 8,
          marginTop: isMobile ? 18 : 22,
        }}
      >
        {platforms.map((pl, i) => (
          <motion.button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}: ${pl.name}`}
            whileTap={{ scale: 0.92 }}
            onClick={() => {
              goToDot(i);
              resetTimer();
            }}
            style={{
              width: dotIndex === i ? 22 : 8,
              height: 8,
              border: "none",
              borderRadius: 999,
              cursor: "pointer",
              padding: 0,
              background:
                dotIndex === i ? platforms[dotIndex].color : "#d1d5db",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}

function ArrowBtn({
  side,
  size,
  inset,
  onClick,
}: {
  side: "left" | "right";
  size: number;
  inset: number;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      aria-label={side === "left" ? "Previous platform slide" : "Next platform slide"}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "absolute",
        zIndex: 20,
        [side]: inset,
        top: "50%",
        transform: "translateY(-50%)",
        width: size,
        height: size,
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.52,
        fontWeight: 900,
        background: hovered ? "#2F5FAA" : "rgba(255,255,255,0.96)",
        color: hovered ? "#ffffff" : "#3A3A3A",
        boxShadow: "0 5px 18px rgba(0,0,0,0.16)",
        transition:
          "background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      {side === "left" ? "‹" : "›"}
    </button>
  );
}