import React, { useEffect, useState } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download, FileCheck } from "lucide-react";
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
  driveLink: string;
  embedLink: string;
};

const GOOGLE_FORM_LINK = "https://forms.gle/6gUobMinaywetLD3A";

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
    driveLink:
      "https://drive.google.com/file/d/1PiAG9nKpgL2VPB7yuZT2AOSHrbCfdNQA/view?usp=sharing",
    embedLink:
      "https://drive.google.com/file/d/1PiAG9nKpgL2VPB7yuZT2AOSHrbCfdNQA/preview",
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
  hidden: { opacity: 0, scale: 0.96, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    y: -12,
    transition: { duration: 0.28, ease: "easeInOut" },
  },
};

const PresentationsSection: React.FC = () => {
  const [downloadPresentation, setDownloadPresentation] =
    useState<Presentation | null>(null);

  const [openedPreviewId, setOpenedPreviewId] = useState<number | null>(null);
  const [isFormOpened, setIsFormOpened] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.body.style.overflow = downloadPresentation ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [downloadPresentation]);

  const handleOpenForm = () => {
    window.open(GOOGLE_FORM_LINK, "_blank");
    setIsFormOpened(true);
  };

  const getDirectDownloadLink = (driveLink: string) => {
    const match = driveLink.match(/\/d\/([^/]+)/);
    const fileId = match ? match[1] : "";

    return fileId
      ? `https://drive.google.com/uc?export=download&id=${fileId}`
      : driveLink;
  };

  const handleDownload = () => {
    if (!downloadPresentation?.driveLink) return;

    const downloadUrl = getDirectDownloadLink(downloadPresentation.driveLink);

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", `${downloadPresentation.title}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

                                    <button
                                      onClick={() => setOpenedPreviewId(null)}
                                      className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#111827] backdrop-blur sm:text-sm"
                                    >
                                      Back
                                    </button>
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
                        className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap"
                      >
                        <a
                          href={item.driveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-full border border-[#dbe2ea] px-6 py-3 text-sm font-semibold text-[#2F5FAA] transition hover:bg-[#f8fafc]"
                        >
                          Open in Drive
                        </a>

                        <button
                          onClick={() => {
                            setDownloadPresentation(item);
                            setIsFormOpened(false);
                          }}
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#36A35C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2d8f4f]"
                        >
                          <Download size={16} />
                          Download Presentation
                        </button>
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
        {downloadPresentation && (
          <motion.div
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 py-6"
            onClick={() => setDownloadPresentation(null)}
          >
            <motion.div
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#111827]">
                  Welcome to OXYGlobal.Tech
                </h3>

                <button
                  onClick={() => setDownloadPresentation(null)}
                  className="rounded-full p-2 hover:bg-gray-100"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#5C6672]">
                Please fill the Google Form before accessing the presentation
                PDF.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <button
                  onClick={handleOpenForm}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2F5FAA] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#264d8d]"
                >
                  <FileCheck size={16} />
                  Open Google Form
                </button>

                <button
                  disabled={!isFormOpened}
                  onClick={handleDownload}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                    isFormOpened
                      ? "bg-[#36A35C] text-white hover:bg-[#2d8f4f]"
                      : "cursor-not-allowed bg-gray-200 text-gray-500"
                  }`}
                >
                  <Download size={16} />
                  Download Presentation
                </button>
              </div>

              <p className="mt-5 text-center text-xs text-[#6b7280]">
                Thank you for your interest in OXYGlobal.Tech.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PresentationsSection;