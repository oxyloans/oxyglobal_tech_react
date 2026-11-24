
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import OXYLOGO from "../assets/img/oxyglobal.webp";
import TollFreeHelpline from "./TollFreeHelpline";

import {
  MapPin,
  Mail,
  Building2,
  Globe,
  Users,
  Layers3,
  MessageSquareQuote,
  Boxes,
} from "lucide-react";

// QUICK LINKS
const quickLinks = [
  {
    label: "Team",
    href: "team",
    icon: <Users size={16} />,
  },
  {
    label: "Platforms",
    href: "platforms",
    icon: <Layers3 size={16} />,
  },
  {
    label: "4P Models",
    href: "fourp-models",
    icon: <Boxes size={16} />,
  },
  {
    label: "Testimonials",
    href: "testimonials",
    icon: <MessageSquareQuote size={16} />,
  },
];

const OxyGlobalFooter: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // FOOTER NAVIGATION WITH HEADER OFFSET
  const handleFooterNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const doScroll = () => {
      const target = document.getElementById(id);
      const header = document.getElementById("main-header");

      if (target) {
        const headerHeight = header
          ? header.offsetHeight
          : 90;

        const sectionTop =
          target.getBoundingClientRect().top +
          window.pageYOffset;

        const finalTop =
          sectionTop - headerHeight - 10;

        window.scrollTo({
          top: Math.max(finalTop, 0),
          behavior: "smooth",
        });
      }
    };

    if (location.pathname === "/") {
      doScroll();
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <footer
      className="
        border-t border-[#e8edf5]
        bg-white px-4 pb-8 pt-12
        text-gray-700
        sm:px-6
        md:px-10
        lg:px-16
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="
          mx-auto grid max-w-7xl
          grid-cols-1 gap-10
          sm:gap-12
          md:grid-cols-3
        "
      >
        {/* ================================= */}
        {/* LEFT SECTION - COMPANY DETAILS    */}
        {/* ================================= */}

        <div>
          {/* LOGO */}
          <a
            href="#home"
            onClick={(e) =>
              handleFooterNav(e, "home")
            }
            className="inline-block"
          >
            <img
              src={OXYLOGO}
              alt="OXYGLOBAL"
              loading="lazy"
              decoding="async"
              className="
                mb-5 h-10 w-auto
                object-contain
                sm:h-12 md:h-14 lg:h-16
              "
            />
          </a>

          {/* COMPANY DESCRIPTION */}
          <p
            className="
              max-w-md text-sm
              leading-relaxed text-gray-600
            "
          >
            OXYGLOBAL TECHNOLOGIES is a global
            software technology company building
            scalable digital ecosystems connecting
            people, platforms, products, and capital
            for global innovation.
          </p>

          {/* CEO CONTACT */}
          <div className="mt-6 space-y-3 text-sm">
            <p className="font-semibold text-gray-900">
              Get in Touch with our CEO
            </p>

            <a
              href="mailto:CEO@oxyglobaltech.net"
              className="
                flex items-center gap-2
                break-all
                transition-colors duration-300
                hover:text-[#36A35C]
              "
            >
              <Mail
                size={16}
                className="shrink-0 text-[#36A35C]"
              />

              <span>
                CEO@oxyglobaltech.net
              </span>
            </a>
          </div>
        </div>

        {/* ================================= */}
        {/* MIDDLE SECTION - QUICK LINKS      */}
        {/* ================================= */}

        <div>
          <h3
            className="
              mb-4 text-lg
              font-semibold text-gray-900
            "
          >
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={`#${item.href}`}
                  onClick={(e) =>
                    handleFooterNav(e, item.href)
                  }
                  className="
                    flex items-center gap-2
                    text-gray-600
                    transition-all duration-300
                    hover:translate-x-1
                    hover:text-[#2F5FAA]
                  "
                >
                  <span className="text-[#2F5FAA]">
                    {item.icon}
                  </span>

                  <span>
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ================================= */}
        {/* RIGHT SECTION - OFFICE            */}
        {/* ================================= */}

        <div>
          {/* TOLL FREE HELPLINE ABOVE OFFICE */}
          <div className="mb-5">
            <TollFreeHelpline variant="footer" />
          </div>

          {/* OFFICE HEADING */}
          <h3
            className="
              mb-4 text-lg
              font-semibold text-gray-900
            "
          >
            Office Address
          </h3>

          <div className="space-y-4 text-sm">
            {/* HYDERABAD ADDRESS */}
            <div className="flex items-start gap-2">
              <MapPin
                size={16}
                className="
                  mt-1 shrink-0
                  text-[#2F5FAA]
                "
              />

              <span className="leading-relaxed text-gray-600">
                CC-02, Indu Fortune Fields,
                The Annexe, Phase-13,
                <br />
                KPHB, Kukatpally, Hyderabad,
                Telangana - 500085
              </span>
            </div>

            {/* GLOBAL OFFICES */}
            <div className="flex items-start gap-2">
              <Globe
                size={16}
                className="
                  mt-1 shrink-0
                  text-[#36A35C]
                "
              />

              <span className="leading-relaxed text-gray-600">
                We have Global Offices Across
                <br />

                <strong>
                  USA, UK, UAE and Australia
                </strong>
              </span>
            </div>

            {/* CIN */}
            <div className="flex items-center gap-2">
              <Building2
                size={16}
                className="
                  shrink-0 text-[#36A35C]
                "
              />

              <span className="break-all text-gray-600">
                CIN : U70109TG2022PLC168903
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ================================= */}
      {/* COPYRIGHT                         */}
      {/* ================================= */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="
          mx-auto mt-10 flex max-w-7xl
          flex-col items-center
          justify-between gap-3
          border-t border-[#e8edf5]
          pt-6 text-center
          text-sm text-gray-600
          md:mt-12 md:flex-row
          md:text-left
        "
      >
        <p>
          © {new Date().getFullYear()}{" "}
          OXYGLOBAL.TECH — All Rights Reserved
        </p>
      </motion.div>
    </footer>
  );
};

export default OxyGlobalFooter;
