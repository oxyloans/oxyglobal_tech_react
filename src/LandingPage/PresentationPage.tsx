import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import PresentationImage from "../assets/img/presentationpreview.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerWrap: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const PresentationPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full overflow-hidden bg-white px-4 py-14 sm:px-6 md:px-8 lg:px-12 lg:py-20 xl:px-16">
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
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerWrap}
        >
          <motion.h2
            variants={fadeUp}
            className="font-poppins text-[28px] font-bold leading-tight text-[#111827] sm:text-[36px] md:text-[42px] lg:text-[48px]"
          >
            Explore Our{" "}
            <span className="relative inline-block text-[#2F5FAA]">
              Presentations
              <span className="underlineLoop absolute left-0 bottom-[-6px] h-[3px] w-full rounded-full bg-[#2F5FAA]" />
            </span>
          </motion.h2>
        </motion.div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <motion.img
              src={PresentationImage}
              alt="Presentation Preview"
              className="h-auto w-full max-w-[600px] object-contain"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>

          <motion.div
            className="max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerWrap}
          >
            <motion.p
              className="text-sm leading-8 text-[#5C6672] sm:text-base md:text-[17px]"
              variants={fadeUp}
            >
              We present our business ecosystem, growth vision, and mission-led
              AI initiatives in a simple and professional format that helps
              people understand our direction clearly.
            </motion.p>

            <motion.div className="mt-8 space-y-8" variants={staggerWrap}>
              <motion.div variants={fadeUp}>
                <h4 className="text-lg font-medium text-[#0F172A] sm:text-xl md:text-2xl">
                  Corporate Presentation
                </h4>
                <p className="mt-2 text-sm leading-7 text-[#5C6672] sm:text-base">
                  Explore our business ecosystem, vision, and growth model
                  across People, Platforms, Products, and caPital.
                </p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h4 className="text-lg font-medium text-[#0F172A] sm:text-xl md:text-2xl">
                  Mission Million AI Cofounders
                </h4>
                <p className="mt-2 text-sm leading-7 text-[#5C6672] sm:text-base">
                  A mission-driven initiative designed to inspire future AI
                  cofounders, innovators, and leaders building scalable
                  ventures.
                </p>
              </motion.div>
            </motion.div>

            <motion.div className="mt-10" variants={fadeUp}>
              <motion.button
                onClick={() => navigate("/corporatepresentations")}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center rounded-full bg-[#2F5FAA] px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#264d8d] sm:px-8 sm:py-3.5 sm:text-base"
              >
                Explore Our Presentations
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PresentationPage;
