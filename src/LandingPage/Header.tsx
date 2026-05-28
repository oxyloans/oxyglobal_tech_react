import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import OXYGLOBAL_LOGO from "../assets/img/oxyglobal.png";

const navItems = [
  { label: "4P Models", href: "fourp-models" },
  { label: "Platforms", href: "platforms" },
  { label: "Testimonials", href: "testimonials" },
  { label: "Team", href: "team" },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("4P Models");

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string, label?: string) => {
    const performScroll = () => {
      const section = document.getElementById(id);
      const header = document.getElementById("main-header");

      if (section) {
        const headerHeight = header ? header.offsetHeight : 88;
        const sectionTop =
          section.getBoundingClientRect().top + window.pageYOffset;
        const finalTop = sectionTop - headerHeight - 8;

        window.scrollTo({
          top: finalTop,
          behavior: "smooth",
        });

        if (label) setActiveItem(label);
      }

      setMobileOpen(false);
    };

    if (location.pathname === "/") {
      performScroll();
    } else {
      navigate(`/#${id}`);
      setMobileOpen(false);
    }
  };

  const goToPresentations = () => {
    navigate("/corporatepresentations");
    setMobileOpen(false);
  };


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    const handleScroll = () => {
      if (location.pathname !== "/") return;

      const header = document.getElementById("main-header");
      const headerHeight = header ? header.offsetHeight : 88;
      const scrollPosition = window.scrollY + headerHeight + 60;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const section = document.getElementById(item.href);

        if (section && scrollPosition >= section.offsetTop) {
          setActiveItem(item.label);
          break;
        }
      }

      if (window.scrollY < 120) {
        setActiveItem("4P Models");
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <header
      id="main-header"
      className="fixed left-0 right-0 top-0 z-50 w-full border-b border-[#E8EDF5] bg-white/90 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex h-[70px] items-center justify-between gap-4 sm:h-[76px] lg:h-[84px]">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex shrink-0 items-center py-2"
            aria-label="OXYGLOBAL Home"
          >
            <img
              src={OXYGLOBAL_LOGO}
              alt="OXYGLOBAL"
              className="h-14 w-auto object-contain sm:h-10 md:h-11 lg:h-12 xl:h-16"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden flex-1 justify-center lg:flex">
            <div className="flex items-center gap-1 rounded-full border border-[#E6EAF2] bg-white px-2 py-2 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
              {navItems.map((item) => {
                const isActive = activeItem === item.label;

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => scrollToSection(item.href, item.label)}
                    className={`relative rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 xl:px-5 xl:text-[15px] ${
                      isActive
                        ? "bg-[#F4F8FF] text-[#2F5FAA]"
                        : "text-[#4B5563] hover:bg-[#F8FAFC] hover:text-[#2F5FAA]"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-[4px] left-1/2 h-[3px] w-7 -translate-x-1/2 rounded-full bg-[#2F5FAA]" />
                    )}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={goToPresentations}
                className="rounded-full px-4 py-2.5 text-sm font-medium text-[#4B5563] transition-all duration-300 hover:bg-[#F8FAFC] hover:text-[#2F5FAA] xl:px-5 xl:text-[15px]"
              >
                Presentations
              </button>
            </div>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={goToPresentations}
              className="rounded-full border border-[#2F5FAA] bg-white px-5 py-2.5 text-sm font-semibold text-[#2F5FAA] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F4F8FF]"
            >
              Explore Presentations
            </button>

          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#D9E1EC] bg-white text-[#2F5FAA] shadow-sm transition-all duration-300 hover:bg-[#F8FAFC] sm:h-11 sm:w-11 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            mobileOpen ? "max-h-[520px] pb-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-1 rounded-[24px] border border-[#E6EAF2] bg-white p-4 shadow-[0_16px_34px_rgba(15,23,42,0.08)]">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeItem === item.label;

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => scrollToSection(item.href, item.label)}
                    className={`w-full rounded-2xl px-4 py-3 text-left text-[15px] font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-[#EEF4FF] text-[#2F5FAA]"
                        : "text-[#374151] hover:bg-[#F8FAFC] hover:text-[#2F5FAA]"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={goToPresentations}
                className="w-full rounded-2xl px-4 py-3 text-left text-[15px] font-medium text-[#374151] transition-all duration-300 hover:bg-[#F8FAFC] hover:text-[#2F5FAA]"
              >
                Presentations
              </button>

              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={goToPresentations}
                  className="rounded-2xl border border-[#2F5FAA] bg-white px-4 py-3 text-center text-sm font-semibold text-[#2F5FAA] transition-all duration-300 hover:bg-[#F4F8FF]"
                >
                  Explore Presentations
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;