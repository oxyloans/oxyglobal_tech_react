import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, type Variants } from "framer-motion";
import testimonialsData from "../data/testimonialsData.json";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  image: string;
  testimonial: string;
  tag: string;
}

const THEME_GREEN = "#36A35C";
const CARD_BG = "#F5F3F7";
const CARD_TEXT = "#2f2f2f";
const CARD_SUBTEXT = "#4b5563";
const GAP = 24;

const headingFade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= Math.floor(rating);
        const half = !filled && star === Math.ceil(rating) && rating % 1 !== 0;

        return (
          <div
            key={star}
            className="flex h-[18px] w-[18px] items-center justify-center rounded-[2px]"
            style={{ backgroundColor: THEME_GREEN }}
          >
            <svg
              className="h-[11px] w-[11px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {half ? (
                <>
                  <defs>
                    <linearGradient
                      id={`half-${star}`}
                      x1="0"
                      x2="1"
                      y1="0"
                      y2="0"
                    >
                      <stop offset="50%" stopColor="#ffffff" />
                      <stop offset="50%" stopColor="rgba(255,255,255,0.45)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    fill={`url(#half-${star})`}
                  />
                </>
              ) : (
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  fill={filled ? "#ffffff" : "rgba(255,255,255,0.45)"}
                />
              )}
            </svg>
          </div>
        );
      })}
    </div>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="h-full rounded-[8px] px-5 py-5 sm:px-6 sm:py-6"
      style={{ backgroundColor: CARD_BG }}
    >
      <div className="mb-5">
        <StarRating rating={testimonial.rating} />
      </div>

      <p
        className="text-[14px] leading-[1.6] sm:text-[15px]"
        style={{
          color: CARD_TEXT,
          minHeight: "96px",
        }}
      >
        {testimonial.testimonial}
      </p>

      <div className="mt-8">
        <h3
          className="text-[20px] font-semibold leading-tight"
          style={{ color: "#1f1f1f" }}
        >
          {testimonial.name}
        </h3>

        <p
          className="mt-2 text-[13px] sm:text-[14px]"
          style={{ color: CARD_SUBTEXT }}
        >
          {testimonial.role} at {testimonial.company}
        </p>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = testimonialsData;
  const extendedTestimonials = [...testimonials, ...testimonials];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getCardsPerView = () => {
    if (typeof window === "undefined") return 1.08;
    if (window.innerWidth >= 1280) return 2.2;
    if (window.innerWidth >= 1024) return 2.1;
    if (window.innerWidth >= 768) return 1.55;
    return 1.08;
  };

  const updateCardWidth = useCallback(() => {
    if (!sliderRef.current) return;

    const containerWidth = sliderRef.current.offsetWidth;
    const cardsPerView = getCardsPerView();
    const visibleFullCards = Math.ceil(cardsPerView);
    const totalGap = GAP * (visibleFullCards - 1);
    const calculatedWidth = (containerWidth - totalGap) / cardsPerView;

    setCardWidth(calculatedWidth);
  }, []);

  useEffect(() => {
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, [updateCardWidth]);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => prev + 1);
  }, []);

  const goPrev = useCallback(() => {
    if (activeIndex === 0) {
      setIsTransitionEnabled(false);
      setActiveIndex(testimonials.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitionEnabled(true);
          setActiveIndex(testimonials.length - 1);
        });
      });
    } else {
      setActiveIndex((prev) => prev - 1);
    }
  }, [activeIndex, testimonials.length]);

  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(goNext, 3500);
    }

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [goNext, isPaused]);

  const handleTransitionEnd = () => {
    if (activeIndex >= testimonials.length) {
      setIsTransitionEnabled(false);
      setActiveIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitionEnabled(true);
        });
      });
    }
  };

  return (
    <section
      id="testimonials"
      className="bg-white px-4 py-14 sm:px-6 md:px-8 lg:px-10 xl:px-12"
    >
      <style>{`
        @keyframes underlineLoop {
          0% { transform: scaleX(0); transform-origin: left; }
          8% { transform: scaleX(1); transform-origin: left; }
          18% { transform: scaleX(1); }
          26% { transform: scaleX(0); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }

        .underlineLoop {
          animation: underlineLoop 10s infinite ease-in-out;
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={headingFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="font-poppins text-[28px] font-bold leading-tight text-[#111827] sm:text-[36px] md:text-[42px] lg:text-[48px]">
            What Our{" "}
            <span className="relative inline-block text-[#36A35C]">
              Clients Say
              <span className="underlineLoop absolute left-0 bottom-[-6px] h-[3px] w-full rounded-full bg-[#36A35C]" />
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-[14px] leading-6 text-[#4b5563] sm:text-[15px]">
            We’re proud to be trusted by clients across industries and long-term
            partnerships.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-10 overflow-hidden"
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex"
            onTransitionEnd={handleTransitionEnd}
            style={{
              gap: `${GAP}px`,
              transform: `translateX(-${activeIndex * (cardWidth + GAP)}px)`,
              transition: isTransitionEnabled ? "transform 500ms ease" : "none",
            }}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="shrink-0"
                style={{
                  width: `${cardWidth}px`,
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-10 flex items-center justify-center"
        >
          <div className="flex items-center gap-3">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border bg-white text-[#1f2937] transition-all duration-300"
              style={{ borderColor: "#d9dde5" }}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
              onClick={goNext}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border bg-white text-[#1f2937] transition-all duration-300"
              style={{ borderColor: "#d9dde5" }}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;