import React from "react";
import { motion } from "framer-motion";
import GLOBAL_IMAGE from "../assets/img/fourp-global.png";

const Globalpresent: React.FC = () => {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 md:px-8 lg:px-12">
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

      <div className="mx-auto max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-poppins text-[28px] font-bold leading-tight text-[#111827] sm:text-[36px] md:text-[42px] lg:text-[48px]"
        >
          Connecting People, Platforms, Products & caPital to Build{" "}
          <span className="relative inline-block text-[#2F5FAA]">
            Global Innovation
            <span className="underlineLoop absolute left-0 bottom-[-6px] h-[3px] w-full rounded-full bg-[#2F5FAA]" />
          </span>
        </motion.h2>

        <motion.img
          src={GLOBAL_IMAGE}
          alt="Global innovation network"
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -4, scale: 1.01 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mt-10 w-full max-w-[720px] object-contain"
        />
      </div>
    </section>
  );
};

export default Globalpresent;