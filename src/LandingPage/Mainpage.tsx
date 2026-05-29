import React from "react";
import { useNavigate } from "react-router-dom";
import HEROIMAGE from "../assets/img/founder-page.png";

import BG_SHAPE_1 from "../assets/img/bg-shape-1.png";
import BG_SHAPE_2 from "../assets/img/bg-shape-2.png";
import BG_SHAPE_3 from "../assets/img/bg-shape-3.png";
import BG_SHAPE_4 from "../assets/img/bg-shape-4.png";

import FORMERLYKNOWNPNG from "../assets/img/ttlogo.png";

const OxyGlobalHero: React.FC = () => {
  const navigate = useNavigate();

  const handleTalkToCEO = () => {
    window.open("https://www.askoxy.ai/radhai", "_blank", "noopener,noreferrer");
  };

  const handleExplorePresentations = () => {
    navigate("/corporatepresentations");
  };

  return (
    <section className="relative overflow-hidden bg-white px-6 pb-12 pt-20 sm:pb-14 sm:pt-24 md:px-10 md:pb-16 md:pt-28 lg:px-16 lg:pb-20 lg:pt-32 xl:px-20">
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

        .word-people::after { animation-delay: 0s; }
        .word-platforms::after { animation-delay: 2.5s; }
        .word-products::after { animation-delay: 5s; }
        .word-capital::after { animation-delay: 7.5s; }
      `}</style>

      <img
        src={BG_SHAPE_1}
        alt=""
        className="pointer-events-none absolute left-14 top-20 hidden w-16 opacity-20 sm:block md:w-24 lg:w-30"
      />
      <img
        src={BG_SHAPE_2}
        alt=""
        className="pointer-events-none absolute bottom-4 right-0 hidden w-full opacity-20 md:block lg:w-60"
      />
      <img
        src={BG_SHAPE_3}
        alt=""
        className="pointer-events-none absolute bottom-14 left-0 hidden w-36 opacity-35 lg:block"
      />
      <img
        src={BG_SHAPE_4}
        alt=""
        className="pointer-events-none absolute right-[45%] top-[22%] hidden w-36 opacity-15 lg:block"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        {/* LEFT CONTENT */}
        <div className="order-1 flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* FORMERLY KNOWN AS */}
          <div className="mb-5 flex flex-col items-center gap-3 lg:items-start">
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#6B7280] sm:text-[13px]">
                Formerly Known As
              </span>

              <img
                src={FORMERLYKNOWNPNG}
                alt="Thatavarti Technologies"
                className="h-[42px] w-auto object-contain sm:h-[48px] md:h-[52px]"
              />

              <span className="text-[15px] font-bold tracking-[0.01em] text-[#111827] sm:text-[16px] md:text-[17px]">
                Thatavarti Technologies
              </span>

              <span className="rounded-full border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#2F5FAA] shadow-sm sm:text-[12px]">
                Established in 2004
              </span>
            </div>
          </div>

          {/* MOBILE IMAGE AFTER FORMERLY KNOWN AS */}
          <div className="mb-7 flex w-full flex-col items-center justify-center lg:hidden">
            <div className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px]">
              <img
                src={HEROIMAGE}
                alt="Founder"
                className="mx-auto w-full object-contain"
              />
            </div>

            <button
              type="button"
              onClick={handleTalkToCEO}
              className="talk-ceo-animate relative mt-5 overflow-hidden rounded-full bg-[#2F5FAA] px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#244f92] sm:px-9"
            >
              <span className="relative z-10">Talk to CEO</span>
            </button>
          </div>

          <p className="mt-2 max-w-[95%] text-[14px] leading-6 text-[#3A3A3A] sm:max-w-2xl sm:text-[15px] sm:leading-7 md:text-[16px] lg:max-w-xl lg:text-[17px] xl:text-[18px]">
            <span className="font-semibold text-[#111827]">
              OXYGLOBAL TECHNOLOGIES{" "}
            </span>
            is a global software technology company building modern, scalable
            digital ecosystems that connect people, platforms, products, and
            capital for global innovation.
          </p>

          <p className="mt-4 max-w-[95%] text-[14px] leading-6 text-[#3A3A3A] sm:max-w-2xl sm:text-[15px] sm:leading-7 md:text-[16px] lg:max-w-xl lg:text-[17px] xl:text-[18px]">
            Our platforms integrate advanced technologies including{" "}
            <span className="font-semibold text-[#2F5FAA]">Blockchain</span>,
            enabling transparency, trust, and efficiency across connected
            digital ecosystems.
          </p>

          <h1 className="mt-7 max-w-[95%] text-[26px] font-extrabold leading-[1.15] tracking-[-0.03em] sm:max-w-3xl sm:text-[34px] md:text-[42px] lg:mt-9 lg:max-w-4xl lg:text-[50px] xl:text-[58px]">
            <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-2 lg:justify-start">
              <span className="word-underline word-people text-[#2F5FAA]">
                People
              </span>
              <span className="px-1 text-[#C4CAD4] sm:px-2">|</span>
              <span className="word-underline word-platforms text-[#36A35C]">
                Platforms
              </span>
              <span className="px-1 text-[#C4CAD4] sm:px-2">|</span>
              <span className="word-underline word-products text-[#6B7280]">
                Products
              </span>
              <span className="px-1 text-[#C4CAD4] sm:px-2">|</span>
              <span className="word-underline word-capital text-[#F97316]">
                Capital
              </span>
            </span>
          </h1>

          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <button
              type="button"
              onClick={handleExplorePresentations}
              className="rounded-full border border-[#2F5FAA] bg-white px-7 py-3 text-sm font-semibold text-[#2F5FAA] shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F4F8FF]"
            >
              Explore Presentations
            </button>
          </div>
        </div>

        {/* DESKTOP IMAGE + TALK TO CEO */}
        <div className="order-2 hidden items-center justify-center lg:flex lg:justify-center">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="w-full max-w-[430px] xl:max-w-[470px]">
              <img
                src={HEROIMAGE}
                alt="Founder"
                className="mx-auto w-full object-contain"
              />
            </div>

            <button
              type="button"
              onClick={handleTalkToCEO}
              className="talk-ceo-animate relative mt-5 overflow-hidden rounded-full bg-[#2F5FAA] px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#244f92] sm:px-9"
            >
              <span className="relative z-10">Talk to CEO</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OxyGlobalHero;