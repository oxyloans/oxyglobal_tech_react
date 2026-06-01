import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldCheck, Building2, Bot, Globe2 } from "lucide-react";
import Header from "../LandingPage/Header";
import OxyGlobalFooter from "../LandingPage/Footer";

const OxyBfsaiPage: React.FC = () => {
  const [openPreview, setOpenPreview] = useState(false);

  const driveLink =
    "https://drive.google.com/file/d/1KWEiF3aoKynBEzCbYJZJp9dOikf-yaF5/view?usp=sharing";
  const embedLink =
    "https://drive.google.com/file/d/1KWEiF3aoKynBEzCbYJZJp9dOikf-yaF5/preview";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const points = [
    "India’s regulation-native Generative AI Vibe Code platform for BFSI.",
    "FinVibe for banking and InsurVibe for insurance application generation.",
    "RBI and IRDAI compliance-focused AI platform with responsible AI principles.",
    "Generates full-stack applications using AI pipeline, agents, and compliance intelligence.",
  ];

  const cards = [
    {
      icon: ShieldCheck,
      title: "Governance",
      text: "Built for regulated BFSI workflows with governance-first system design.",
    },
    {
      icon: Building2,
      title: "Banking + Insurance",
      text: "Supports banking, NBFC, insurance, brokerage, and compliance-heavy entities.",
    },
    {
      icon: Bot,
      title: "AI Generation",
      text: "Planning, tech stack, use cases, compliance, backend, frontend, and test case generation.",
    },
    {
      icon: Globe2,
      title: "Global Expansion",
      text: "India live with RBI + IRDAI focus, with UK and US expansion direction.",
    },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white pt-20">
        <section className="px-4 py-10 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="order-1"
            >
              <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_20px_55px_rgba(15,23,42,0.12)]">
                <div className="relative h-[300px] sm:h-[360px] lg:h-[400px]">
                  <img
                    src="https://i.ibb.co/DHTFSHgG/45.png"
                    alt="OXY BFSAI preview"
                    className="h-full w-full object-contain"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#06245a]/80 via-transparent to-transparent" />

                  <button
                    onClick={() => setOpenPreview(true)}
                    className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0b3f85] shadow-lg transition hover:-translate-y-1"
                  >
                    View Presentation <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="order-2"
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#18a8d8]">
                OXY BFSAI
              </p>

              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#0a2f63] sm:text-4xl lg:text-5xl">
                Vibe Code & Responsible AI Platform for BFSI
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                OXY BFSAI is built for Banking, Financial Services, and Insurance
                teams that need AI-powered application generation with compliance,
                governance, risk, and regulatory intelligence.
              </p>

              <div className="mt-7 space-y-4">
                {points.map((point, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#18a8d8]" />
                    <p className="text-sm leading-7 text-slate-700 sm:text-base">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => setOpenPreview(true)}
                  className="rounded-full bg-[#0a2f63] px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#082852]"
                >
                  Open OXY BFSAI Deck
                </button>

                <a
                  href={driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#0a2f63]/20 px-7 py-3 text-center text-sm font-bold text-[#0a2f63] transition hover:bg-slate-50"
                >
                  Open in Drive
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 pb-14 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_14px_35px_rgba(15,23,42,0.08)]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f8fd] text-[#0a84ad]">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0a2f63]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>

      <OxyGlobalFooter />

      <AnimatePresence>
        {openPreview && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenPreview(false)}
          >
            <motion.div
              className="relative h-[92vh] w-full max-w-6xl overflow-hidden rounded-2xl bg-white"
              initial={{ scale: 0.96, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b px-4 py-3">
                <div>
                  <h3 className="font-bold text-[#0a2f63]">OXY BFSAI Presentation</h3>
                  <p className="text-xs text-slate-500">Full presentation preview</p>
                </div>
                <button
                  onClick={() => setOpenPreview(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border"
                >
                  <X size={18} />
                </button>
              </div>

              <iframe
                src={embedLink}
                title="OXY BFSAI Presentation"
                className="h-[calc(92vh-65px)] w-full bg-slate-50"
                allow="autoplay"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OxyBfsaiPage;