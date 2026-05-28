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

const LandingPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      const timer = setTimeout(() => {
        const section = document.getElementById(id);
        const header = document.getElementById("main-header");

        if (section) {
          const headerHeight = header ? header.offsetHeight : 90;
          const sectionTop =
            section.getBoundingClientRect().top + window.pageYOffset;
          const finalTop = sectionTop - headerHeight - 10;

          window.scrollTo({
            top: finalTop,
            behavior: "smooth",
          });
        }
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <main className="w-full overflow-x-hidden bg-white">
      <Header />

      <section id="home">
        <OxyGlobalHero />
      </section>

            <section id="presentations">
        <PresentationsPage />
      </section>

      <section id="fourp-models">
        <FourP />
      </section>

      <section id="platforms">
        <Services />
      </section>

      <section id="globalpresent">
        <Globalpresent />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>



      <section id="team">
        <TeamPage />
      </section>

      <section id="contact">
        <OxyGlobalFooter />
      </section>
    </main>
  );
};

export default LandingPage;
