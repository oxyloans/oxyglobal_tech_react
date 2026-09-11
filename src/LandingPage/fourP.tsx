import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Users,
  Layers3,
  Box,
  Landmark,
  Briefcase,
  Network,
  Rocket,
  BadgeDollarSign,
} from "lucide-react";

import PEOPLE_IMAGE from "../assets/img/people.png";
import PRODUCTS_IMAGE from "../assets/img/products.png";
import PLATFORMS_IMAGE from "../assets/img/platforms.png";
import CAPITAL_IMAGE from "../assets/img/capital.png";

type TabKey = "people" | "platforms" | "products" | "capital";

const sectionFadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerWrap: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemFade: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const tabData: Record<
  TabKey,
  {
    title: string;
    shortTitle: string;
    description: string;
    items: {
      icon: React.ReactNode;
      title: string;
      text: string;
    }[];
    image: string;
  }
> = {
  people: {
    title: "People",
    shortTitle: "People",
    description:
      "Access to a technology-enabled, domain-ready workforce capable of delivering innovation at scale.",
    items: [
      {
        icon: <Users size={18} />,
        title: "Skilled Professionals",
        text: "Skilled professionals across AI, fintech, and enterprise technologies.",
      },
      {
        icon: <Briefcase size={18} />,
        title: "Faster Hiring",
        text: "Faster hiring through digital talent platforms.",
      },
      {
        icon: <Network size={18} />,
        title: "Scalable Workforce Models",
        text: "Scalable and cost-efficient workforce models.",
      },
    ],
    image: PEOPLE_IMAGE,
  },

  platforms: {
    title: "Platforms",
    shortTitle: "Platforms",
    description:
      "Building and scaling technology platforms that power digital ecosystems.",
    items: [
      {
        icon: <Layers3 size={18} />,
        title: "Platform Architecture",
        text: "Scalable platform architecture and development.",
      },
      {
        icon: <Network size={18} />,
        title: "Digital Infrastructure",
        text: "Digital infrastructure for large-scale operations.",
      },
      {
        icon: <Briefcase size={18} />,
        title: "Automation Systems",
        text: "Automation-driven business systems.",
      },
    ],
    image: PLATFORMS_IMAGE,
  },

  products: {
    title: "Products",
    shortTitle: "Products",
    description:
      "Driving technology-led product innovation and market-ready solutions.",
    items: [
      {
        icon: <Box size={18} />,
        title: "Digital Products",
        text: "Development of innovative digital products.",
      },
      {
        icon: <Rocket size={18} />,
        title: "SaaS Ecosystems",
        text: "Service-based and SaaS product ecosystems.",
      },
      {
        icon: <Network size={18} />,
        title: "Go-To-Market",
        text: "Faster go-to-market enablement.",
      },
    ],
    image: PRODUCTS_IMAGE,
  },

  capital: {
    title: "caPital",
    shortTitle: "caPital",
    description:
      "Connecting ideas, entrepreneurs, and platforms with funding ecosystems.",
    items: [
      {
        icon: <Landmark size={18} />,
        title: "Investor Access",
        text: "Investor and funding network access.",
      },
      {
        icon: <BadgeDollarSign size={18} />,
        title: "Funding Support",
        text: "Support through VC, PE, loans, and investments.",
      },
      {
        icon: <Network size={18} />,
        title: "Financial Structuring",
        text: "Financial structuring and growth support.",
      },
    ],
    image: CAPITAL_IMAGE,
  },
};

const tabs: { key: TabKey; label: string }[] = [
  { key: "people", label: "People" },
  { key: "platforms", label: "Platforms" },
  { key: "products", label: "Products" },
  { key: "capital", label: "caPital" },
];

const FourP: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("people");
  const active = tabData[activeTab];

  return (
    <section className="px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
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
          variants={sectionFadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="font-poppins text-[28px] font-bold leading-tight text-[#111827] sm:text-[36px] md:text-[42px] lg:text-[48px]">
            4P Strategic{" "}
            <span className="relative inline-block text-[#2F5FAA]">
              Partnerships
              <span className="underlineLoop absolute left-0 bottom-[-6px] h-[3px] w-full rounded-full bg-[#2F5FAA]" />
            </span>{" "}
            Model
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-[13px] leading-6 text-[#4b5563] sm:text-[14px] md:text-[15px] lg:text-[16px]">
            A focused partnership framework covering People, Platforms,
            Products, and Capital to drive scale, innovation, and sustainable
            business growth.
          </p>
        </motion.div>

        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <motion.button
                key={tab.key}
                variants={itemFade}
                onClick={() => setActiveTab(tab.key)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`rounded-full border px-4 py-2 text-[12px] font-semibold sm:px-5 sm:py-2.5 sm:text-[13px] ${
                  isActive
                    ? "border-[#2F5FAA] text-white"
                    : "border-[#d7deea] bg-white text-[#334155]"
                }`}
                style={
                  isActive
                    ? {
                        background:
                          "linear-gradient(180deg,#2F5FAA 0%,#1f4f93 100%)",
                        boxShadow: "0 6px 14px rgba(31,111,235,0.18)",
                      }
                    : {
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                      }
                }
              >
                {tab.label}
              </motion.button>
            );
          })}
        </motion.div>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="text-[28px] font-bold leading-tight text-[#111827] sm:text-[34px] md:text-[38px]"
              >
                {active.title}
              </motion.h3>

              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 56, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="mt-3 h-[3px] rounded-full bg-[#2F5FAA]"
              />

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="mt-5 max-w-xl text-[14px] leading-7 text-[#4b5563] sm:text-[15px] md:text-[16px]"
              >
                {active.description}
              </motion.p>

              <motion.div
                variants={staggerWrap}
                initial="hidden"
                animate="show"
                className="mt-8 space-y-6"
              >
                {active.items.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemFade}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eaf1ff] text-[#2F5FAA]"
                    >
                      {item.icon}
                    </motion.div>

                    <div>
                      <h4 className="text-[15px] font-semibold text-[#111827] sm:text-[16px]">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-[13px] leading-6 text-[#6b7280] sm:text-[14px] md:text-[15px]">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + "-image"}
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="order-1 flex justify-center lg:order-2"
            >
              <motion.img
                src={active.image}
                alt={active.title}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-[320px] object-contain sm:max-w-[380px] md:max-w-[430px] lg:max-w-[480px]"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FourP;