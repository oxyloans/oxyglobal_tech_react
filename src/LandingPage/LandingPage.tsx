
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import OxyGlobalHero from "./Mainpage";
import FourP from "./fourP";
import OxyGlobalFooter from "./Footer";
import Globalpresent from "./Globalpresent";
import Services from "./Services";
import TeamPage from "./Teampage";
import Testimonials from "./Testimonial";
import Header from "./Header";
import PresentationsPage from "./PresentationPage";
import TollFreeHelpline from "./TollFreeHelpline";

const LandingPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = decodeURIComponent(
      location.hash.replace("#", "")
    );

    const timer = window.setTimeout(() => {
      const section = document.getElementById(id);
      const header = document.getElementById("main-header");

      if (!section) return;

      const headerHeight = header
        ? header.offsetHeight
        : 90;

      const sectionTop =
        section.getBoundingClientRect().top +
        window.scrollY;

      window.scrollTo({
        top: Math.max(
          0,
          sectionTop - headerHeight - 10
        ),
        behavior: "smooth",
      });
    }, 150);

    return () => {
      window.clearTimeout(timer);
    };
  }, [location.hash, location.pathname]);

  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section id="home">
        <OxyGlobalHero />
      </section>

      {/* PRESENTATIONS */}
      <section id="presentations">
        <PresentationsPage />
      </section>

      {/* 4P MODELS */}
      <section id="fourp-models">
        <FourP />
      </section>

      {/* PLATFORMS */}
      <section id="platforms">
        <Services />
      </section>

      {/* GLOBAL PRESENCE */}
      <section id="globalpresent">
        <Globalpresent />
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* TEAM */}
      <section id="team">
        <TeamPage />
      </section>

      {/* FOOTER */}
      <section id="contact">
        <OxyGlobalFooter />
      </section>

      {/* FLOATING HELPLINE */}
      <TollFreeHelpline variant="floating" />
    </main>
  );
};

export default LandingPage;
