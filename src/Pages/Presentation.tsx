import React, { useEffect, useState } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  X,
  CheckCircle2,
  ExternalLink,
  BarChart3,
  Cpu,
  Building2,
  ShieldCheck,
} from "lucide-react";
import Header from "../LandingPage/Header";
import OxyGlobalFooter from "../LandingPage/Footer";

/* ── Types ──────────────────────────────────────────────────────────── */
type Presentation = {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  points: string[];
  driveLink: string;
  embedLink: string;
  accent: string;
};

type ResourceLink = {
  id: number;
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
  gradient: string;
};

/* ── Data ───────────────────────────────────────────────────────────── */
const GOOGLE_FORM_LINK = "https://forms.gle/6gUobMinaywetLD3A";

const resourceLinks: ResourceLink[] = [
  {
    id: 1,
    title: "OXY BFS AI Platform",
    description: "Banking, Financial Services & Insurance AI platform.",
    url: "https://www.askoxy.ai/oxybfsai",
    icon: <Building2 size={22} />,
    color: "#2563EB",
    bg: "#EFF6FF",
    gradient: "linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)",
  },
  {
    id: 2,
    title: "Model Banking Demo",
    description: "Interactive FinVibe model banking demo.",
    url: "https://vibecoding-finvibe.vercel.app/",
    icon: <BarChart3 size={22} />,
    color: "#7C3AED",
    bg: "#F5F3FF",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #6d28d9 100%)",
  },
  {
    id: 3,
    title: "RBI AI Store",
    description: "RBI Master Directions AI Store for compliance use cases.",
    url: "https://www.askoxy.ai/ai-store/rbi-master-directions-ai-store",
    icon: <ShieldCheck size={22} />,
    color: "#059669",
    bg: "#ECFDF5",
    gradient: "linear-gradient(135deg, #059669 0%, #047857 100%)",
  },
  {
    id: 4,
    title: "BFS AI Use Case Engine",
    description: "30+ AI use cases for BFSI innovation and automation.",
    url: "https://www.askoxy.ai/use-case-engine",
    icon: <Cpu size={22} />,
    color: "#DC2626",
    bg: "#FEF2F2",
    gradient: "linear-gradient(135deg, #DC2626 0%, #b91c1c 100%)",
  },
];

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
    driveLink:
      "https://drive.google.com/file/d/1UNzJ06s-4WWZWeV5heFIxQC-12Twf-lf/view?usp=drive_link",
    embedLink:
      "https://drive.google.com/file/d/1UNzJ06s-4WWZWeV5heFIxQC-12Twf-lf/preview",
    accent: "#2563EB",
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
    driveLink: "https://drive.google.com/file/d/19VNXBmd7fB592sFVOxkszamclXPvQJCl/view",
    embedLink: "https://drive.google.com/file/d/19VNXBmd7fB592sFVOxkszamclXPvQJCl/preview",
    accent: "#7C3AED",
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
    driveLink:
      "https://drive.google.com/file/d/1PiAG9nKpgL2VPB7yuZT2AOSHrbCfdNQA/view?usp=sharing",
    embedLink:
      "https://drive.google.com/file/d/1PiAG9nKpgL2VPB7yuZT2AOSHrbCfdNQA/preview",
    accent: "#059669",
  },
  {
    id: 4,
    subtitle: "AI Leadership Initiative · Central",
    title: "Mission Million AI Cofounders",
    description:
      "A national-level AI leadership initiative empowering future AI cofounders, innovators, and entrepreneurs across India.",
    points: [
      "Central AI cofounder mission",
      "Nationwide innovation ecosystem",
      "AI startup and founder leadership opportunities",
    ],
    driveLink:
      "https://drive.google.com/file/d/1wOp_3mr9LHEWsL7BIjR9de0WIgrH9dYE/view?usp=drive_link",
    embedLink:
      "https://drive.google.com/file/d/1wOp_3mr9LHEWsL7BIjR9de0WIgrH9dYE/preview",
    accent: "#DC2626",
  },
  {
    id: 5,
    subtitle: "AI Leadership Initiative · Telangana",
    title: "Mission Million AI Cofounders — Telangana",
    description:
      "A Telangana State focused AI initiative to create AI innovators, startup founders, and future technology leaders.",
    points: [
      "Telangana AI cofounder ecosystem",
      "Startup and innovation opportunities",
      "Future AI leadership development",
    ],
    driveLink:
      "https://drive.google.com/file/d/1GwHiY2TnpZ5kp6b3XVX9MEAhZRT47Swb/view?usp=sharing",
    embedLink:
      "https://drive.google.com/file/d/1GwHiY2TnpZ5kp6b3XVX9MEAhZRT47Swb/preview",
    accent: "#D97706",
  },
];

/* ── Animation variants ─────────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -44 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const fadeRight: Variants = {
  hidden: { opacity: 0, x: 44 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const itemFade: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};
const backdropV: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.22 } },
  exit: { opacity: 0, transition: { duration: 0.18 } },
};
const modalV: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: 24, scale: 0.97, transition: { duration: 0.2 } },
};

/* ── 3D Glossy Card ─────────────────────────────────────────────────── */
const GlossyCard: React.FC<{ link: ResourceLink }> = ({ link }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -10, y: dx * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemFade}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: hovered ? 1.04 : 1,
        z: hovered ? 20 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d", perspective: 800 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/60 bg-white shadow-md"
    >
      {/* glossy gradient top band */}
      <div
        className="relative h-[88px] w-full flex items-center px-5"
        style={{ background: link.gradient }}
      >
        {/* glass sheen */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0) 100%)",
          }}
        />
        {/* frosted circle behind icon */}
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 shadow-inner text-white backdrop-blur-sm">
          {link.icon}
        </div>

        {/* top-right arrow */}
        <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-200 group-hover:bg-white/30">
          <ArrowUpRight size={14} />
        </div>

        {/* bottom reflection line */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
          style={{ background: "rgba(255,255,255,0.25)" }}
        />
      </div>

      {/* card body */}
      <div className="flex flex-1 flex-col px-5 py-4">
        <h4 className="text-sm font-bold text-[#111827] leading-snug">{link.title}</h4>
        <p className="mt-1.5 text-xs leading-5 text-[#9CA3AF]">{link.description}</p>
        <div
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold"
          style={{ color: link.color }}
        >
          Visit platform
          <ArrowUpRight
            size={12}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>

      {/* bottom edge highlight (3D floor illusion) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] rounded-b-2xl opacity-60"
        style={{ background: link.gradient }}
      />
    </motion.a>
  );
};

/* ── Component ──────────────────────────────────────────────────────── */
const PresentationsSection: React.FC = () => {
  const [downloadPresentation, setDownloadPresentation] = useState<Presentation | null>(null);
  const [isFormOpened, setIsFormOpened] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    document.body.style.overflow = downloadPresentation ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [downloadPresentation]);

  const getDirectDownloadLink = (driveLink: string) => {
    const match = driveLink.match(/\/d\/([^/]+)/);
    const fileId = match ? match[1] : "";
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : driveLink;
  };

  const handleOpenForm = () => {
    window.open(GOOGLE_FORM_LINK, "_blank");
    setIsFormOpened(true);
  };

  const handleDownload = () => {
    if (!downloadPresentation?.driveLink) return;
    const url = getDirectDownloadLink(downloadPresentation.driveLink);
    const a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", `${downloadPresentation.title}.pdf`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      <Header />

      <main className="w-full bg-white">

        {/* ══ HERO ══════════════════════════════════════════════════════ */}
        <section className="bg-white px-5 pb-10 pt-24 sm:pt-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.h1
              variants={fadeUp}
              className="text-3xl font-extrabold leading-tight tracking-tight text-[#2f5faa] sm:text-4xl lg:text-5xl"
            >
              Explore Our Presentations
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#6B7280] sm:text-base"
            >
              Deep dives into our ecosystem, AI platforms, BFSI innovation, and the
              Mission Million AI Cofounders initiative.
            </motion.p>
          </motion.div>
        </section>

        {/* ══ PRESENTATIONS ═════════════════════════════════════════════ */}
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-14">
          <div className="space-y-24">
            {presentations.map((item, index) => {
              const reverse = index % 2 === 1;
              const imgVar = reverse ? fadeRight : fadeLeft;
              const txtVar = reverse ? fadeLeft : fadeRight;

              return (
                <motion.div
                  key={item.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.12 }}
                  variants={stagger}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Embed */}
                  <motion.div variants={imgVar} className={reverse ? "lg:order-2" : ""}>
                    <div className="overflow-hidden rounded-[24px] shadow-xl ring-1 ring-gray-200">
                      <div className="h-1 w-full" style={{ backgroundColor: item.accent }} />
                      <div className="relative bg-gray-50" style={{ height: "clamp(220px,34vw,400px)" }}>
                        <iframe
                          src={item.embedLink}
                          title={item.title}
                          className="h-full w-full"
                          allow="autoplay"
                        />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent px-5 py-4">
                          <p
                            className="text-[10px] font-bold uppercase tracking-[0.2em]"
                            style={{ color: item.accent }}
                          >
                            {item.subtitle}
                          </p>
                          <h3 className="mt-0.5 text-sm font-bold text-white sm:text-base">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div variants={stagger} className={reverse ? "lg:order-1" : ""}>
                    <motion.p
                      variants={txtVar}
                      className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em]"
                      style={{ color: item.accent }}
                    >
                      {item.subtitle}
                    </motion.p>

                    <motion.h2
                      variants={txtVar}
                      className="text-2xl font-extrabold leading-tight tracking-tight text-[#0A0F1E] sm:text-3xl"
                    >
                      {item.title}
                    </motion.h2>

                    <motion.p
                      variants={txtVar}
                      className="mt-4 text-sm leading-7 text-[#4B5563] sm:text-[15px]"
                    >
                      {item.description}
                    </motion.p>

                    <motion.ul variants={stagger} className="mt-6 space-y-3">
                      {item.points.map((point, i) => (
                        <motion.li key={i} variants={itemFade} className="flex items-start gap-3">
                          <span
                            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                            style={{ backgroundColor: item.accent + "18" }}
                          >
                            <CheckCircle2 size={13} style={{ color: item.accent }} />
                          </span>
                          <span className="text-sm leading-6 text-[#374151]">{point}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* CTAs */}
                    <motion.div variants={itemFade} className="mt-8 flex flex-wrap gap-3">
                      <motion.a
                        href={item.driveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 420, damping: 22 }}
                        className="inline-flex items-center gap-2 rounded-xl border-2 border-[#0A0F1E] bg-transparent px-5 py-2.5 text-sm font-semibold text-[#0A0F1E] transition-colors hover:bg-[#0A0F1E] hover:text-white"
                      >
                        <ExternalLink size={15} />
                        Open Presentation
                      </motion.a>

                      <motion.button
                        onClick={() => { setDownloadPresentation(item); setIsFormOpened(false); }}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 420, damping: 22 }}
                        style={{ backgroundColor: item.accent }}
                        className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
                      >
                        <Download size={15} />
                        Download PDF
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* ══ PLATFORM URLs — 3D glossy cards ═══════════════════════ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-28"
          >
            <motion.div variants={fadeUp} className="mb-8 text-center">
              <h2 className="text-xl font-bold text-[#0A0F1E] sm:text-2xl">
                Our Ecosystem Links 
              </h2>
            </motion.div>

            {/* perspective container so 3d tilt looks right */}
            <div
              style={{ perspective: "1200px" }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {resourceLinks.map((link) => (
                <GlossyCard key={link.id} link={link} />
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <OxyGlobalFooter />

      {/* ══ DOWNLOAD MODAL ════════════════════════════════════════════════ */}
      <AnimatePresence>
        {downloadPresentation && (
          <motion.div
            variants={backdropV}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[9999] flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center sm:p-4"
            onClick={() => setDownloadPresentation(null)}
          >
            <motion.div
              variants={modalV}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[430px] overflow-hidden rounded-t-[28px] bg-white shadow-2xl sm:rounded-[28px]"
            >
              {/* drag pill */}
              <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-gray-200 sm:hidden" />

              {/* modal header */}
              <div className="flex items-start justify-between px-6 pb-3 pt-6">
                <div>
                  <p
                    className="mb-1 text-[11px] font-bold uppercase tracking-widest"
                    style={{ color: downloadPresentation.accent }}
                  >
                    Download PDF
                  </p>
                  <h3 className="text-lg font-extrabold leading-snug text-[#0A0F1E]">
                    {downloadPresentation.title}
                  </h3>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.18 }}
                  onClick={() => setDownloadPresentation(null)}
                  className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
                  aria-label="Close"
                >
                  <X size={17} />
                </motion.button>
              </div>

              <div className="px-6 pb-6">
                <p className="text-sm leading-6 text-[#6B7280]">
                  Complete the short Google Form first — the download unlocks right after.
                </p>

                {/* step 1 */}
                <div
                  className={`mt-4 flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 ${
                    isFormOpened ? "border-[#059669] bg-[#F0FDF4]" : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300 ${
                      isFormOpened ? "bg-[#059669] text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {isFormOpened ? <CheckCircle2 size={17} /> : "1"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#111827]">Fill the Google Form</p>
                    <p className="text-xs text-[#9CA3AF]">Quick registration · 30 sec</p>
                  </div>
                  {!isFormOpened && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleOpenForm}
                      className="shrink-0 rounded-xl bg-[#0A0F1E] px-4 py-2 text-xs font-semibold text-white hover:opacity-80"
                    >
                      Open Form
                    </motion.button>
                  )}
                </div>

                {/* step 2 */}
                <div
                  className={`mt-3 flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 ${
                    isFormOpened ? "border-[#2563EB] bg-[#EFF6FF]" : "border-gray-100 bg-gray-50 opacity-40"
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300 ${
                      isFormOpened ? "bg-[#2563EB] text-white" : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {isFormOpened ? <Download size={15} /> : "2"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#111827]">Download PDF</p>
                    <p className="text-xs text-[#9CA3AF]">Full presentation file</p>
                  </div>
                  {isFormOpened && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleDownload}
                      style={{ backgroundColor: downloadPresentation.accent }}
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold text-white shadow-md"
                    >
                      <Download size={13} />
                      Download
                    </motion.button>
                  )}
                </div>

                <p className="mt-5 text-center text-xs text-[#D1D5DB]">
                  Thank you for your interest in OXYGLOBAL.TECH
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PresentationsSection;