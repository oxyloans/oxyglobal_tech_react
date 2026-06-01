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
      "https://i.ibb.co/LXmQ71T0/presentationpreview-H6rip1-VM.png",
    imageAlt: "OXY BFSAI presentation preview",
    driveLink:
      "https://drive.google.com/file/d/1KWEiF3aoKynBEzCbYJZJp9dOikf-yaF5/view",
    embedLink:
      "https://drive.google.com/file/d/1KWEiF3aoKynBEzCbYJZJp9dOikf-yaF5/preview",
  },

  // CENTRAL
  {
    id: 4,
    subtitle: "AI Leadership Initiative | Central",
    title: "Mission Million AI Cofounders",
    description:
      "A national-level AI leadership initiative empowering future AI cofounders, innovators, and entrepreneurs across India.",
    points: [
      "Central AI cofounder mission",
      "Nationwide innovation ecosystem",
      "AI startup and founder leadership opportunities",
    ],
    image: "https://i.ibb.co/TBZB36Gy/present-2.png",
    imageAlt: "Mission Million AI Cofounders Central preview",
    driveLink:
      "https://drive.google.com/file/d/1wOp_3mr9LHEWsL7BIjR9de0WIgrH9dYE/view?usp=drive_link",
    embedLink:
      "https://drive.google.com/file/d/1wOp_3mr9LHEWsL7BIjR9de0WIgrH9dYE/preview",
  },

  // TELANGANA STATE
{
  id: 5,
  subtitle: "AI Leadership Initiative | Telangana State",
  title: "Mission Million AI Cofounders - Telangana",
  description:
    "A Telangana State focused AI initiative to create AI innovators, startup founders, and future technology leaders.",
  points: [
    "Telangana AI cofounder ecosystem",
    "Startup and innovation opportunities",
    "Future AI leadership development",
  ],
  image: "https://i.ibb.co/TBZB36Gy/present-2.png",
  imageAlt: "Mission Million AI Cofounders Telangana preview",
  driveLink:
    "https://drive.google.com/file/d/1GwHiY2TnpZ5kp6b3XVX9MEAhZRT47Swb/view?usp=sharing",
  embedLink:
    "https://drive.google.com/file/d/1GwHiY2TnpZ5kp6b3XVX9MEAhZRT47Swb/preview",
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

const PresentationsSection: React.FC = () => {
  const [downloadPresentation, setDownloadPresentation] =
    useState<Presentation | null>(null);

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

      <main className="w-full bg-white pt-20">
        <section className="w-full px-4 py-10 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mx-auto mb-16 max-w-3xl text-center"
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl font-bold text-[#2F5FAA] sm:text-4xl lg:text-5xl"
              >
                Explore Our Presentations
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#555]"
              >
                Discover our ecosystem, AI platforms, BFSI innovation,
                responsible AI solutions, and Mission Million AI Cofounders
                initiatives.
              </motion.p>
            </motion.div>

            <div className="space-y-20">
              {presentations.map((item, index) => {
                const reverse = index % 2 === 1;
                const imageVariant = reverse ? fadeRight : fadeLeft;
                const contentVariant = reverse ? fadeLeft : fadeRight;

                return (
                  <div
                    key={item.id}
                    className="grid items-center gap-12 lg:grid-cols-2"
                  >
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={imageVariant}
                      className={reverse ? "lg:order-2" : ""}
                    >
                      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
                        <div className="relative h-[280px] sm:h-[360px] lg:h-[420px]">
                          <iframe
                            src={item.embedLink}
                            title={item.title}
                            className="h-full w-full"
                          />

                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                              {item.subtitle}
                            </p>

                            <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={staggerContainer}
                      className={reverse ? "lg:order-1" : ""}
                    >
                      <motion.p
                        variants={contentVariant}
                        className="text-xs font-bold uppercase tracking-[0.2em] text-[#36A35C]"
                      >
                        {item.subtitle}
                      </motion.p>

                      <motion.h2
                        variants={contentVariant}
                        className="mt-4 text-3xl font-bold leading-tight text-[#111827] sm:text-4xl"
                      >
                        {item.title}
                      </motion.h2>

                      <motion.p
                        variants={contentVariant}
                        className="mt-5 text-sm leading-7 text-[#5C6672] sm:text-base"
                      >
                        {item.description}
                      </motion.p>

                      <motion.div
                        variants={staggerContainer}
                        className="mt-8 space-y-4"
                      >
                        {item.points.map((point, i) => (
                          <motion.div
                            key={i}
                            variants={itemFade}
                            className="flex items-start gap-3"
                          >
                            <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#36A35C]" />

                            <p className="text-sm leading-6 text-[#333]">
                              {point}
                            </p>
                          </motion.div>
                        ))}
                      </motion.div>

                      <motion.div
                        variants={itemFade}
                        className="mt-10 flex flex-col gap-4 sm:flex-row"
                      >
                        <a
                          href={item.driveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-full border border-[#2F5FAA] px-6 py-3 text-sm font-semibold text-[#2F5FAA] transition hover:bg-[#2F5FAA] hover:text-white"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Open Presentation
                        </a>

                        <button
                          onClick={() => {
                            setDownloadPresentation(item);
                            setIsFormOpened(false);
                          }}
                          className="inline-flex items-center justify-center rounded-full bg-[#36A35C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2d8f4f]"
                        >
                          <Download size={16} className="mr-2" />
                          Download PDF
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
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4"
            onClick={() => setDownloadPresentation(null)}
          >
            <motion.div
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-[#111827]">
                  Download Presentation
                </h3>

                <button
                  onClick={() => setDownloadPresentation(null)}
                  className="rounded-full p-2 hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#5C6672]">
                Please open and complete the Google Form before downloading the
                presentation PDF.
              </p>

              <div className="mt-7 flex flex-col gap-4">
                <button
                  onClick={handleOpenForm}
                  className="inline-flex items-center justify-center rounded-full bg-[#2F5FAA] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#264d8d]"
                >
                  <FileCheck size={16} className="mr-2" />
                  Open Google Form
                </button>

                <button
                  disabled={!isFormOpened}
                  onClick={handleDownload}
                  className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                    isFormOpened
                      ? "bg-[#36A35C] text-white hover:bg-[#2d8f4f]"
                      : "cursor-not-allowed bg-gray-200 text-gray-500"
                  }`}
                >
                  <Download size={16} className="mr-2" />
                  Download Presentation
                </button>
              </div>

              <p className="mt-5 text-center text-xs text-[#777]">
                Thank you for your interest in OXYGLOBAL.TECH
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PresentationsSection;