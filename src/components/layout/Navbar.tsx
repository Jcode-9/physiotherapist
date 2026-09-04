"use client";

import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Obsługa pokazywania / ukrywania navbaru podczas scrollowania
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Zawsze pokazuj navbar na górze strony
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scroll w dół
        setIsVisible(false);
      } else {
        // Scroll w górę
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Zamknij menu po przejściu na desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        bg-white/90
        backdrop-blur-md
        shadow-md
        transition-transform
        duration-300
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* =========================================
          GŁÓWNY NAVBAR
         ========================================= */}
      <div
        className="
          flex
          h-20
          items-center
          justify-between
          bg-white
          px-6
          lg:px-8
          max-w-7xl
          mx-auto
        "
      >
        {/* LOGO */}
        <h1 className="text-3xl font-bold tracking-tight text-slate-800">
          <a href="#top">
            Physio<span className="text-blue-600">Pro</span>
          </a>
        </h1>

        {/* =========================================
            HAMBURGER
            Widoczny poniżej 1024px
           ========================================= */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isMenuOpen}
          className="
            flex
            items-center
            justify-center
            lg:hidden
          "
        >
          {isMenuOpen ? (
            <X className="h-8 w-8 text-slate-800" />
          ) : (
            <Menu className="h-8 w-8 text-slate-800" />
          )}
        </button>

        {/* =========================================
            NORMALNE MENU
            Widoczne od 1024px
           ========================================= */}
        <ul
          className="
            hidden
            items-center
            gap-7
            lg:flex
          "
        >
          <li>
            <a
              href="#about"
              className="transition-colors hover:text-blue-600"
            >
              O mnie
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="transition-colors hover:text-blue-600"
            >
              Usługi
            </a>
          </li>

          <li>
            <a
              href="#pricing"
              className="transition-colors hover:text-blue-600"
            >
              Cennik
            </a>
          </li>

          <li>
            <a
              href="#testimonials"
              className="transition-colors hover:text-blue-600"
            >
              Opinie
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="transition-colors hover:text-blue-600"
            >
              Kontakt
            </a>
          </li>
        </ul>

        {/* =========================================
            CTA DESKTOP
            Widoczny od 1024px
           ========================================= */}
        <div className="hidden lg:block">
          <Button href="#contact">Umów wizytę</Button>
        </div>
      </div>

      {/* =========================================
          MENU MOBILE
          Widoczne tylko poniżej 1024px
         ========================================= */}
      <div
        className={`
          overflow-hidden
          bg-white
          transition-all
          duration-300
          lg:hidden
          ${isMenuOpen ? "max-h-[500px]" : "max-h-0"}
        `}
      >
        <div className="border-t border-slate-200">
          <div className="flex flex-col px-8 py-6">
            {/* O MNIE */}
            <a
              href="#about"
              className="
                py-3
                text-slate-800
                transition-colors
                hover:text-blue-600
              "
              onClick={() => setIsMenuOpen(false)}
            >
              O mnie
            </a>

            {/* USŁUGI */}
            <a
              href="#services"
              className="
                border-t
                border-slate-200
                py-3
                text-slate-800
                transition-colors
                hover:text-blue-600
              "
              onClick={() => setIsMenuOpen(false)}
            >
              Usługi
            </a>

            {/* CENNIK */}
            <a
              href="#pricing"
              className="
                border-t
                border-slate-200
                py-3
                text-slate-800
                transition-colors
                hover:text-blue-600
              "
              onClick={() => setIsMenuOpen(false)}
            >
              Cennik
            </a>

            {/* OPINIE */}
            <a
              href="#testimonials"
              className="
                border-t
                border-slate-200
                py-3
                text-slate-800
                transition-colors
                hover:text-blue-600
              "
              onClick={() => setIsMenuOpen(false)}
            >
              Opinie
            </a>

            {/* KONTAKT */}
            <a
              href="#contact"
              className="
                border-t
                border-slate-200
                py-3
                text-slate-800
                transition-colors
                hover:text-blue-600
              "
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </a>

            {/* CTA MOBILE */}
            <div className="mt-6">
              <Button href="#contact">Umów wizytę</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}