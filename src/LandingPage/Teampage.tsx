import React from "react";
import { motion, type Variants } from "framer-motion";
import { Linkedin } from "lucide-react";

import Radha from "../assets/img/radha sir.png";
import Rama from "../assets/img/rama mam.png";
import Sneha from "../assets/img/sneha.png";
import Subash from "../assets/img/subbu.png";
import Chakri from "../assets/img/jags.png";
import Srinivas from "../assets/img/yadavalli srinivas.png";
import Ramesh from "../assets/img/ramesh.png";
import Narendra from "../assets/img/narendra.png";

const teamMembers = [
  {
    name: "RadhaKrishna.T",
    role: "Co-Founder & CEO",
    img: Radha,
    linkedin: "https://www.linkedin.com/in/oxyradhakrishna/",
  },
  {
    name: "Ramadevi.T",
    role: "Co-Founder & CTO",
    img: Rama,
    linkedin: "https://www.linkedin.com/in/ramadevi-thatavarti/",
  },
  {
    name: "Subhash.S",
    role: "Co-Founder",
    img: Subash,
    linkedin: "https://www.linkedin.com/in/ssure/",
  },
  {
    name: "Jagadeesh Chinnam",
    role: "AI Transformation Leader",
    img: Chakri,
    linkedin: "https://www.linkedin.com/in/jc-cv/",
  },
  {
    name: "Snehalatha Reddy",
    role: "Co-Founder",
    img: Sneha,
    linkedin: "https://www.linkedin.com/in/sneha-soma-18681a19b/",
  },
  {
    name: "Yadavalli Srinivas",
    role: "Co-Founder",
    img: Srinivas,
    linkedin: "https://www.linkedin.com/in/yadavallisrinivas/",
  },
  {
    name: "Ramesh.R",
    role: "Co-Founder",
    img: Ramesh,
    linkedin: "https://www.linkedin.com/in/k-ramesh-reddy-a2150b15/",
  },
  {
    name: "Narendra Kumar",
    role: "Co-Founder",
    img: Narendra,
    linkedin:
      "https://www.linkedin.com/in/narendra-kumar-balijepalli-bb4a96129/",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const TeamPage: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 md:px-8 lg:px-12 xl:px-16">
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

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="absolute left-[-120px] top-12 h-[260px] w-[260px] rounded-full bg-[#2F5FAA]/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="absolute right-[-120px] top-20 h-[280px] w-[280px] rounded-full bg-[#36A35C]/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="absolute bottom-[-120px] left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#2F5FAA]/10 to-[#36A35C]/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="font-poppins text-[28px] font-bold leading-tight text-[#111827] sm:text-[36px] md:text-[42px] lg:text-[48px]">
            Meet Our Team
          </h2>

          <h4 className="mt-2 font-poppins text-[26px] font-semibold leading-tight text-[#3A3A3A] sm:text-[38px] md:text-[48px] lg:text-[58px]">
            Passionate. Proactive.{" "}
            <span className="relative inline-block text-[#36A35C]">
              Expert.
              <span className="underlineLoop absolute left-0 bottom-[-6px] h-[3px] w-full rounded-full bg-[#36A35C]" />
            </span>
          </h4>

          <p className="mx-auto mt-6 max-w-3xl text-[14px] leading-7 text-[#4b5563] sm:text-[15px] md:text-[17px]">
            We lead with innovation, care, and a shared commitment to building
            future-ready digital ecosystems for global growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          className="mt-16 grid grid-cols-1 gap-y-14 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-10"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="group text-center"
            >
              <div className="relative mx-auto h-[140px] w-[140px] sm:h-[150px] sm:w-[150px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2F5FAA]/15 to-[#36A35C]/15 blur-xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <motion.img
                    src={member.img}
                    alt={member.name}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.35 }}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/35 opacity-0 transition duration-300 group-hover:opacity-100">
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#2F5FAA] shadow-lg transition duration-300 hover:bg-[#2F5FAA] hover:text-white"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin size={18} />
                    </motion.a>
                  </div>
                </div>
              </div>

              <h3 className="mt-6 text-[21px] font-semibold leading-tight text-[#111827]">
                {member.name}
              </h3>

              <p className="mt-2 text-[15px] font-medium text-[#64748b]">
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPage;
