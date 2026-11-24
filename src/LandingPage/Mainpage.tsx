
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";

import HEROIMAGE from "../assets/img/founder-page.webp";
import BG_SHAPE_1 from "../assets/img/bg-shape-1.webp";
import BG_SHAPE_2 from "../assets/img/bg-shape-2.webp";
import BG_SHAPE_3 from "../assets/img/bg-shape-3.webp";
import BG_SHAPE_4 from "../assets/img/bg-shape-4.webp";
import FORMERLYKNOWNPNG from "../assets/img/ttlogo.webp";

const heroStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageFadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.15 },
  },
};

const OxyGlobalHero: React.FC = () => {
  const navigate = useNavigate();

  const handleTalkToCEO = () => {
    window.open(
      "https://www.askoxy.ai/radhai",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleExplorePresentations = () => {
    navigate("/corporatepresentations");
  };

  return (
    <section
      className="
        relative overflow-hidden bg-white
        px-4 pb-12 pt-[108px]
        sm:px-6 sm:pb-14 sm:pt-28
        md:px-10 md:pb-16 md:pt-32
        lg:px-16 lg:pb-20 lg:pt-32
        xl:px-20
      "
    >
      <style>{`
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 12px 30px rgba(47, 95, 170, 0.28);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 18px 42px rgba(47, 95, 170, 0.45);
            transform: scale(1.04);
          }
        }

        @keyframes shineMove {
          0% { left: -80%; }
          100% { left: 130%; }
        }

        .talk-ceo-animate {
          animation: pulseGlow 2.2s ease-in-out infinite;
        }

        .talk-ceo-animate::before {
          content: "";
          position: absolute;
          top: 0;
          left: -80%;
          width: 55%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.5),
            transparent
          );
          transform: skewX(-18deg);
          animation: shineMove 2.8s ease-in-out infinite;
        }

        .word-underline {
          position: relative;
          display: inline-block;
          padding-bottom: 6px;
          white-space: nowrap;
        }

        .word-underline::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 4px;
          border-radius: 999px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          opacity: 0;
          animation: underlineMove 10s infinite;
        }

        @keyframes underlineMove {
          0%, 20%, 100% {
            transform: scaleX(0);
            opacity: 0;
          }
          4% {
            transform: scaleX(0);
            opacity: 1;
          }
          10%, 16% {
            transform: scaleX(1);
            opacity: 1;
          }
          20% {
            transform: scaleX(0);
            opacity: 0;
          }
        }

        .word-people::after {
          animation-delay: 0s;
        }
        .word-platforms::after {
          animation-delay: 2.5s;
        }
        .word-products::after {
          animation-delay: 5s;
        }
        .word-capital::after {
          animation-delay: 7.5s;
        }

        @media (prefers-reduced-motion: reduce) {
          .talk-ceo-animate,
          .talk-ceo-animate::before,
          .word-underline::after {
            animation: none;
          }
        }
      `}</style>

      {/* BACKGROUND ELEMENTS */}
      <motion.img
        src={BG_SHAPE_1}
        alt=""
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1 }}
        className="
          pointer-events-none absolute
          left-14 top-20 hidden w-16
          sm:block md:w-24
        "
      />

      <motion.img
        src={BG_SHAPE_2}
        alt=""
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1, delay: 0.15 }}
        className="
          pointer-events-none absolute
          bottom-4 right-0 hidden w-full
          md:block lg:w-60
        "
      />

      <motion.img
        src={BG_SHAPE_3}
        alt=""
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 1, delay: 0.25 }}
        className="
          pointer-events-none absolute
          bottom-14 left-0 hidden w-36
          lg:block
        "
      />

      <motion.img
        src={BG_SHAPE_4}
        alt=""
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1, delay: 0.35 }}
        className="
          pointer-events-none absolute
          right-[45%] top-[22%] hidden
          w-36 lg:block
        "
      />

      {/* MAIN HERO */}
      <div
        className="
          relative mx-auto grid max-w-7xl
          grid-cols-1 items-center gap-10
          lg:grid-cols-2 lg:gap-12 xl:gap-16
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="
            order-1 flex min-w-0 flex-col
            items-center text-center
            lg:items-start lg:text-left
          "
        >
          {/* FORMERLY KNOWN AS */}
          <motion.div
            variants={fadeUpItem}
            className="
              mb-6 flex w-full flex-col
              items-center gap-3
              lg:items-start
            "
          >
            <div
              className="
                flex w-full flex-col
                items-center justify-center gap-3
                lg:flex-row lg:flex-wrap
                lg:justify-start
              "
            >
              {/* LABEL */}
              <span
                className="
                  block whitespace-nowrap
                  text-center text-[11px]
                  font-semibold uppercase
                  tracking-[0.18em]
                  text-[#4B5563]
                  sm:text-[13px]
                  lg:tracking-[0.22em]
                "
              >
                Formerly Known As
              </span>

              {/* ICON + NAME SAME LINE */}
              <div
                className="
                  flex w-full max-w-full
                  flex-nowrap items-center
                  justify-center gap-2
                  sm:gap-3 lg:w-auto
                "
              >
                <img
                  src={FORMERLYKNOWNPNG}
                  alt="Thatavarti Technologies Logo"
                  className="
                    h-[34px] w-[34px]
                    shrink-0 object-contain
                    sm:h-[43px] sm:w-[43px]
                    md:h-[48px] md:w-[48px]
                    lg:h-[52px] lg:w-[52px]
                  "
                />

                <span
                  className="
                    min-w-0 whitespace-nowrap
                    text-[clamp(12px,3.6vw,16px)]
                    font-bold leading-tight
                    tracking-normal text-[#111827]
                    sm:text-[17px]
                  "
                >
                  Thatavarti Technologies
                </span>
              </div>

              {/* ESTABLISHED BADGE */}
              <span
                className="
                  mt-1 inline-flex
                  items-center justify-center
                  whitespace-nowrap rounded-full
                  border border-[#E5E7EB]
                  bg-[#F8FAFC]
                  px-4 py-2
                  text-[10px] font-medium
                  uppercase tracking-[0.14em]
                  text-[#2F5FAA] shadow-sm
                  sm:text-[12px]
                  lg:mt-0
                "
              >
                Established in 2004
              </span>
            </div>
          </motion.div>

          {/* MOBILE AND TABLET FOUNDER IMAGE */}
          <motion.div
            variants={fadeUpItem}
            className="
              mb-7 flex w-full flex-col
              items-center justify-center
              lg:hidden
            "
          >
            <div
              className="
                w-full max-w-[260px]
                sm:max-w-[320px]
                md:max-w-[380px]
              "
            >
              <img
                src={HEROIMAGE}
                alt="Radhakrishna Thatavarti - Co-Founder and CEO"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                width={470}
                height={445}
                className="mx-auto w-full object-contain"
              />
            </div>

            {/* MOBILE CEO BUTTON */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleTalkToCEO}
              className="
                talk-ceo-animate relative
                mt-5 overflow-hidden rounded-full
                bg-[#2F5FAA]
                px-8 py-3 text-sm font-semibold
                text-white
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#244f92]
                sm:px-9
              "
            >
              <span className="relative z-10">
                Talk to CEO
              </span>
            </motion.button>
          </motion.div>

          {/* FIRST PARAGRAPH */}
          <motion.p
            variants={fadeUpItem}
            className="
              mt-2 max-w-[95%]
              text-[14px] leading-6
              text-[#3A3A3A]
              sm:max-w-2xl
              sm:text-[15px] sm:leading-7
              md:text-[16px]
              lg:max-w-xl lg:text-[17px]
              xl:text-[18px]
            "
          >
            <span className="font-semibold text-[#111827]">
              OXYGLOBAL TECHNOLOGIES{" "}
            </span>
            is a global software technology company
            building modern, scalable digital ecosystems
            that connect people, platforms, products,
            and capital for global innovation.
          </motion.p>

          {/* SECOND PARAGRAPH */}
          <motion.p
            variants={fadeUpItem}
            className="
              mt-4 max-w-[95%]
              text-[14px] leading-6
              text-[#3A3A3A]
              sm:max-w-2xl
              sm:text-[15px] sm:leading-7
              md:text-[16px]
              lg:max-w-xl lg:text-[17px]
              xl:text-[18px]
            "
          >
            Our platforms integrate advanced technologies
            including{" "}
            <span className="font-semibold text-[#2F5FAA]">
              Blockchain
            </span>
            , enabling transparency, trust, and efficiency
            across connected digital ecosystems.
          </motion.p>

          {/* 4P MODEL HEADING */}
          <motion.h1
            variants={fadeUpItem}
            className="
              mt-7 max-w-[95%]
              text-[26px] font-extrabold
              leading-[1.15]
              tracking-[-0.03em]
              sm:max-w-3xl sm:text-[34px]
              md:text-[42px]
              lg:mt-9 lg:max-w-4xl
              lg:text-[50px]
              xl:text-[58px]
            "
          >
            <span
              className="
                inline-flex flex-wrap
                items-center justify-center
                gap-x-2 gap-y-2
                lg:justify-start
              "
            >
              <span className="word-underline word-people text-[#2F5FAA]">
                People
              </span>

              <span aria-hidden="true" className="px-1 text-[#94A3B8] sm:px-2">
                |
              </span>

              <span className="word-underline word-platforms text-[#36A35C]">
                Platforms
              </span>

              <span aria-hidden="true" className="px-1 text-[#94A3B8] sm:px-2">
                |
              </span>

              <span className="word-underline word-products text-[#4B5563]">
                Products
              </span>

              <span aria-hidden="true" className="px-1 text-[#94A3B8] sm:px-2">
                |
              </span>

              <span className="word-underline word-capital text-[#C2410C]">
                Capital
              </span>
            </span>
          </motion.h1>

          {/* PRESENTATIONS BUTTON */}
          <motion.div
            variants={fadeUpItem}
            className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleExplorePresentations}
              className="
                rounded-full
                border border-[#2F5FAA]
                bg-white px-7 py-3
                text-sm font-semibold
                text-[#2F5FAA]
                shadow-[0_10px_24px_rgba(15,23,42,0.08)]
                transition-all duration-300
                hover:bg-[#F4F8FF]
              "
            >
              Explore Presentations
            </motion.button>
          </motion.div>
        </motion.div>

        {/* DESKTOP FOUNDER IMAGE */}
        <motion.div
          variants={imageFadeIn}
          initial="hidden"
          animate="visible"
          className="
            order-2 hidden
            items-center justify-center
            lg:flex
          "
        >
          <div
            className="
              flex w-full flex-col
              items-center justify-center
            "
          >
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[430px] xl:max-w-[470px]"
            >
              <img
                src={HEROIMAGE}
                alt="Radhakrishna Thatavarti - Co-Founder and CEO"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                width={470}
                height={445}
                className="mx-auto w-full object-contain"
              />
            </motion.div>

            {/* DESKTOP CEO BUTTON */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleTalkToCEO}
              className="
                talk-ceo-animate relative
                mt-5 overflow-hidden rounded-full
                bg-[#2F5FAA]
                px-8 py-3
                text-sm font-semibold text-white
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#244f92]
              "
            >
              <span className="relative z-10">
                Talk to CEO
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OxyGlobalHero;
