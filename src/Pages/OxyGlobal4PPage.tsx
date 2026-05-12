import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Users,
  Layers,
  PackageCheck,
  Landmark,
} from "lucide-react";
import Header from "../LandingPage/Header";
import OxyGlobalFooter from "../LandingPage/Footer";

const OxyGlobal4PPage: React.FC = () => {
  const [openPreview, setOpenPreview] = useState(false);

  const driveLink =
    "https://drive.google.com/file/d/1cbt9JCH8MMf7yFcy2ppANx3-cg6aLWhd/view";
  const embedLink =
    "https://drive.google.com/file/d/1cbt9JCH8MMf7yFcy2ppANx3-cg6aLWhd/preview";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    {
      icon: Users,
      title: "People",
      color: "#f97316",
      text: "100+ technical professionals across AI, Java, React, BFSI, e-commerce, and fractional ownership.",
    },
    {
      icon: Layers,
      title: "Platforms",
      color: "#22a35a",
      text: "OxyLoans, ASKOXY.AI, OxyBricks, Bharat AI Store, and OxyGold ecosystem platforms.",
    },
    {
      icon: PackageCheck,
      title: "Products",
      color: "#2f5faa",
      text: "AI agents, fintech products, blockchain solutions, voice assistant, study abroad, and AI video generation.",
    },
    {
      icon: Landmark,
      title: "caPital",
      color: "#374151",
      text: "Strategic capital support for product companies, startups, IP creation, and co-innovation.",
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
            >
              <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_20px_55px_rgba(15,23,42,0.12)]">
                <div className="relative h-[300px] sm:h-[420px] lg:h-[520px]">
                  <img
                    src="https://i.ibb.co/RTcv10T9/Chat-GPT-Image-May-12-2026-12-20-44-PM.png" 
                    alt="OXY GLOBAL.TECH 4P Ecosystem"
                    className="h-full w-full object-contain"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#082f63]/80 via-transparent to-transparent" />

                  <button
                    onClick={() => setOpenPreview(true)}
                    className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0b3f85] shadow-lg transition hover:-translate-y-1"
                  >
                    View 4P Ecosystem <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#22a35a]">
                OXY GLOBAL.TECH
              </p>

              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#0b3f85] sm:text-4xl lg:text-5xl">
                4P Ecosystem Partnership Model
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                OXY GLOBAL.TECH is built around People, Platforms, Products, and
                caPital. The ecosystem connects technology talent, scalable
                platforms, AI-driven products, and strategic capital for global
                business growth.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-2xl font-extrabold text-[#0b3f85]">
                    15+ Years
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Delivering technology solutions
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-2xl font-extrabold text-[#22a35a]">
                    ₹2000+ Cr
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Cumulative platform turnover
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => setOpenPreview(true)}
                  className="rounded-full bg-[#0b3f85] px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#09346d]"
                >
                  Open 4P Deck
                </button>

                <a
                  href={driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#0b3f85]/20 px-7 py-3 text-center text-sm font-bold text-[#0b3f85] transition hover:bg-slate-50"
                >
                  Open in Drive
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 pb-14 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-extrabold text-[#0b3f85] sm:text-3xl">
                Our 4P Growth Pillars
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                A partnership model designed to combine talent, infrastructure,
                innovation, and capital into one scalable global ecosystem.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_14px_35px_rgba(15,23,42,0.08)]"
                  >
                    <div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                      style={{ backgroundColor: item.color }}
                    >
                      <Icon size={24} />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
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
                  <h3 className="font-bold text-[#0b3f85]">
                    OXY GLOBAL.TECH 4P Ecosystem
                  </h3>
                  <p className="text-xs text-slate-500">
                    Full presentation preview
                  </p>
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
                title="OXY GLOBAL.TECH 4P Ecosystem"
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

export default OxyGlobal4PPage;