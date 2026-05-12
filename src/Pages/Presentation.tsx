import React, { useEffect, useState } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import Header from "../LandingPage/Header";
import OxyGlobalFooter from "../LandingPage/Footer";

type Presentation = {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  buttonText: string;
  driveLink: string;
  embedLink: string;
};

const presentations: Presentation[] = [
  {
    id: 1,
    subtitle: "OXYGLOBAL.TECH",
    title: "Corporate Presentation",
    description:
      "Explore our business ecosystem, vision, and growth model across People, Platforms, Products, and Capital.",
    points: [
      "Company overview and ecosystem",
      "Technology platforms and business model",
      "Strategic growth and partnerships",
    ],
    image: "https://i.ibb.co/d0BTYQWC/present-1.png",
    imageAlt: "Corporate presentation preview",
    buttonText: "View Presentation",
    driveLink:
      "https://drive.google.com/file/d/1UNzJ06s-4WWZWeV5heFIxQC-12Twf-lf/view?usp=drive_link",
    embedLink:
      "https://drive.google.com/file/d/1UNzJ06s-4WWZWeV5heFIxQC-12Twf-lf/preview",
  },
  {
    id: 2,
    subtitle: "OXYGLOBAL.TECH",
    title: "4P Ecosystem Partnership Model",
    description:
      "A powerful ecosystem built around People, Platforms, Products, and caPital to support scalable global technology growth.",
    points: [
      "People, Platforms, Products, and caPital model",
      "100+ technical professionals and 6+ technology platforms",
      "AI, fintech, blockchain, marketplace, and startup ecosystem",
    ],
    image:
      "https://i.ibb.co/RTcv10T9/Chat-GPT-Image-May-12-2026-12-20-44-PM.png",
    imageAlt: "OXYGLOBAL.TECH 4P Ecosystem preview",
    buttonText: "View 4P Ecosystem",
    driveLink:
      "https://drive.google.com/file/d/19VNXBmd7fB592sFVOxkszamclXPvQJCl/view",
    embedLink:
      "https://drive.google.com/file/d/19VNXBmd7fB592sFVOxkszamclXPvQJCl/preview",
  },
  {
    id: 3,
    subtitle: "OXY BFSAI",
    title: "Vibe Code & Responsible AI Platform",
    description:
      "A regulation-native AI platform for Banking, Financial Services, and Insurance, focused on compliance, governance, and AI application generation.",
    points: [
      "FinVibe for banking and InsurVibe for insurance",
      "RBI and IRDAI compliance-focused AI platform",
      "Responsible AI pipeline for full-stack application generation",
    ],
    image:
      "https://i.ibb.co/YTdyZrNg/Chat-GPT-Image-May-12-2026-12-26-02-PM.png",
    imageAlt: "OXY BFSAI presentation preview",
    buttonText: "View OXY BFSAI",
    driveLink:
      "https://drive.google.com/file/d/1jUt2-iqSC5UDCaVCfRbHLhCO4re9keQA/view",
    embedLink:
      "https://drive.google.com/file/d/1jUt2-iqSC5UDCaVCfRbHLhCO4re9keQA/preview",
  },
  {
    id: 4,
    subtitle: "AI Leadership Initiative",
    title: "Mission Million AI Cofounders",
    description:
      "A mission-driven initiative to empower future AI cofounders, innovators, and leaders building scalable ventures.",
    points: [
      "AI founder mindset",
      "Innovation ecosystem access",
      "Scalable AI venture opportunities",
    ],
    image: "https://i.ibb.co/TBZB36Gy/present-2.png",
    imageAlt: "Mission Million AI Cofounders preview",
    buttonText: "Explore Presentation",
    driveLink:
      "https://drive.google.com/file/d/1wOp_3mr9LHEWsL7BIjR9de0WIgrH9dYE/view?usp=drive_link",
    embedLink:
      "https://drive.google.com/file/d/1wOp_3mr9LHEWsL7BIjR9de0WIgrH9dYE/preview",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
};

const itemFade: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const modalBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalContent: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 18,
    scale: 0.97,
    transition: { duration: 0.22, ease: "easeInOut" },
  },
};

const previewSwapVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 18,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    y: -12,
    transition: {
      duration: 0.28,
      ease: "easeInOut",
    },
  },
};

const PresentationsSection: React.FC = () => {
  const [selectedPresentation, setSelectedPresentation] =
    useState<Presentation | null>(null);

  const [openedPreviewId, setOpenedPreviewId] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedPresentation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPresentation]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPresentation(null);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <Header />

      <main className="w-full bg-white pt-20 sm:pt-18 lg:pt-20">
        <section className="w-full px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-12 lg:py-16 xl:px-16">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16"
            >
              <motion.h2
                variants={fadeUp}
                className="mt-3 text-2xl font-bold leading-tight tracking-tight text-[#2F5FAA] sm:text-3xl md:text-4xl lg:text-5xl"
              >
                Explore Our Presentations
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#3A3A3A] sm:text-base"
              >
                Discover our corporate vision, 4P ecosystem, OXY BFSAI platform,
                and Mission Million AI Cofounders initiative.
              </motion.p>
            </motion.div>

            <div className="space-y-16 sm:space-y-20 lg:space-y-24">
              {presentations.map((item, index) => {
                const reverse = index % 2 === 1;
                const imageVariant = reverse ? fadeRight : fadeLeft;
                const contentVariant = reverse ? fadeLeft : fadeRight;
                const isPreviewOpen = openedPreviewId === item.id;

                return (
                  <div
                    key={item.id}
                    className="grid items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20"
                  >
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={imageVariant}
                      className={reverse ? "lg:order-2" : ""}
                    >
                      <div className="relative mx-auto w-full max-w-[560px]">
                        <div className="overflow-hidden rounded-[14px] border border-[#e5e7eb] bg-white shadow-[0px_18px_40px_rgba(0,0,0,0.10)]">
                          <div className="relative h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[420px]">
                            <AnimatePresence mode="wait">
                              {!isPreviewOpen ? (
                                <motion.div
                                  key={`image-${item.id}`}
                                  variants={previewSwapVariants}
                                  initial="hidden"
                                  animate="visible"
                                  exit="exit"
                                  className="relative h-full w-full cursor-pointer"
                                  onClick={() => setOpenedPreviewId(item.id)}
                                >
                                  <img
                                    src={item.image}
                                    alt={item.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />

                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-4 py-4 sm:px-5 sm:py-5">
                                    <div className="min-w-0">
                                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 sm:text-xs">
                                        {item.subtitle}
                                      </p>
                                      <h4 className="mt-1 text-sm font-semibold text-white sm:text-base">
                                        {item.title}
                                      </h4>
                                    </div>

                                    <motion.button
                                      whileHover={{ y: -2, scale: 1.03 }}
                                      whileTap={{ scale: 0.96 }}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setOpenedPreviewId(item.id);
                                      }}
                                      className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#111827] shadow-sm sm:text-sm"
                                    >
                                      Preview
                                      <ExternalLink size={15} />
                                    </motion.button>
                                  </div>
                                </motion.div>
                              ) : (
                                <motion.div
                                  key={`pdf-${item.id}`}
                                  variants={previewSwapVariants}
                                  initial="hidden"
                                  animate="visible"
                                  exit="exit"
                                  className="relative h-full w-full bg-[#f8fafc]"
                                >
                                  <iframe
                                    src={item.embedLink}
                                    title={item.title}
                                    className="h-full w-full"
                                    allow="autoplay"
                                  />

                                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/70 via-black/25 to-transparent px-4 py-4 sm:px-5 sm:py-5">
                                    <div className="min-w-0">
                                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 sm:text-xs">
                                        Presentation Preview
                                      </p>
                                      <h4 className="mt-1 truncate text-sm font-semibold text-white sm:text-base">
                                        {item.title}
                                      </h4>
                                    </div>

                                    <div className="flex flex-shrink-0 items-center gap-2">
                                      <button
                                        onClick={() => setOpenedPreviewId(null)}
                                        className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#111827] backdrop-blur sm:text-sm"
                                      >
                                        Back
                                      </button>

                                      <button
                                        onClick={() =>
                                          setSelectedPresentation(item)
                                        }
                                        className="rounded-full bg-[#2F5FAA] px-4 py-2 text-xs font-semibold text-white sm:text-sm"
                                      >
                                        Full View
                                      </button>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={staggerContainer}
                      className={`${
                        reverse ? "lg:order-1" : ""
                      } px-1 sm:px-2 lg:px-0`}
                    >
                      <motion.div variants={contentVariant}>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#36A35C] sm:text-xs md:text-sm">
                          {item.subtitle}
                        </p>
                      </motion.div>

                      <motion.div variants={contentVariant}>
                        <h3 className="mt-3 max-w-[560px] text-2xl font-bold leading-tight text-[#111827] sm:text-3xl md:text-[34px] lg:text-4xl">
                          {item.title}
                        </h3>
                      </motion.div>

                      <motion.div variants={contentVariant}>
                        <p className="mt-5 max-w-[560px] text-sm leading-7 text-[#5C6672] sm:text-base">
                          {item.description}
                        </p>
                      </motion.div>

                      <motion.div
                        variants={staggerContainer}
                        className="mt-6 space-y-4 sm:mt-7 sm:space-y-5"
                      >
                        {item.points.map((point, i) => (
                          <motion.div
                            key={i}
                            variants={itemFade}
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-start gap-3"
                          >
                            <div className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#36A35C]" />
                            <p className="text-sm leading-6 text-[#3A3A3A] sm:text-[15px]">
                              {point}
                            </p>
                          </motion.div>
                        ))}
                      </motion.div>

                      <motion.div
                        variants={itemFade}
                        className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row"
                      >
                        <motion.button
                          whileHover={{ y: -2, scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => setSelectedPresentation(item)}
                          className="inline-flex items-center justify-center rounded-full bg-[#2F5FAA] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#264d8d]"
                        >
                          {item.buttonText}
                        </motion.button>

                        <a
                          href={item.driveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-full border border-[#dbe2ea] px-6 py-3 text-sm font-semibold text-[#2F5FAA] transition hover:bg-[#f8fafc]"
                        >
                          Open in Drive
                        </a>
                      </motion.div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <OxyGlobalFooter />

      <AnimatePresence>
        {selectedPresentation && (
          <motion.div
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-3 py-4 sm:px-6 sm:py-6"
            onClick={() => setSelectedPresentation(null)}
          >
            <motion.div
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
            >
              <div className="flex items-center justify-between border-b border-[#e5e7eb] px-4 py-3 sm:px-5 sm:py-4">
                <div className="min-w-0 pr-3">
                  <h3 className="truncate text-base font-semibold text-[#111827] sm:text-lg">
                    {selectedPresentation.title}
                  </h3>
                  <p className="mt-1 text-[12px] text-[#6b7280] sm:text-[13px]">
                    Full presentation view
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedPresentation.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden rounded-full border border-[#dbe2ea] px-4 py-2 text-sm font-medium text-[#2F5FAA] transition hover:bg-[#f8fafc] sm:inline-flex"
                  >
                    Open in New Tab
                  </a>

                  <button
                    onClick={() => setSelectedPresentation(null)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e7eb] text-[#334155] transition hover:bg-[#f8fafc]"
                    aria-label="Close modal"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="border-b border-[#eef2f7] px-4 py-2 sm:hidden">
                <a
                  href={selectedPresentation.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-[#dbe2ea] px-4 py-2 text-xs font-medium text-[#2F5FAA]"
                >
                  Open in New Tab
                </a>
              </div>

              <div className="flex-1 bg-[#f8fafc]">
                <iframe
                  src={selectedPresentation.embedLink}
                  title={selectedPresentation.title}
                  className="h-full w-full"
                  allow="autoplay"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PresentationsSection;