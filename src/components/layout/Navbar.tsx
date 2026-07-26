"use client";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Zawsze pokazuj navbar na samej górze strony
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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <>
    <nav className={`
    fixed
    top-0
    left-0
    right-0
    z-50
    bg-white/90
    backdrop-blur-md
    shadow-md/20
    transition-transform
    duration-300
    ${isVisible ? "translate-y-0" : "-translate-y-full"}
  `}>
      <div className="flex justify-between h-20 bg-white items-center px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-slate-800">
          <Link href="/">Physio<span className="text-blue-600">Pro</span></Link>
        </h1>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden"
        >
          {isMenuOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <Menu className="h-8 w-8" />
          )}
        </button>
        <ul className="hidden gap-9 lg:flex">
          <li><Link href="#about" className="hover:text-blue-600 transition-colors">O mnie</Link></li>
          <li><Link href="#services" className="hover:text-blue-600 transition-colors">Usługi</Link></li>
          <li><Link href="#pricing" className="hover:text-blue-600 transition-colors">Cennik</Link></li>
          <li><Link href="#testimonials" className="hover:text-blue-600 transition-colors">Opinie</Link></li>
          <li><Link href="#contact" className="hover:text-blue-600 transition-colors">Kontakt</Link></li>
        </ul>
        <div className="hidden lg:block">
          <Button>
            <Link href="#contact">Umów wizytę</Link>
          </Button>
        </div>
      </div>
      <div
        className={`
                overflow-hidden
                transition-all
                duration-300
                lg:hidden
                ${isMenuOpen
            ? "max-h-[500px]"
            : "max-h-0"
          }
            `}
      >
        <div className="border-t bg-white lg:hidden">
          <div className="flex flex-col px-8 py-6">

            <Link href="#about" className="py-3" onClick={() => setIsMenuOpen(false)}>
              O mnie
            </Link>

            <Link href="#services" className="py-3 border-t border-slate-200" onClick={() => setIsMenuOpen(false)}>
              Usługi
            </Link>

            <Link href="#pricing" className="py-3 border-t border-slate-200" onClick={() => setIsMenuOpen(false)}>
              Cennik
            </Link>

            <Link href="#testimonials" className="py-3 border-t border-slate-200" onClick={() => setIsMenuOpen(false)}>
              Opinie
            </Link>

            <Link href="#contact" className="py-3 border-t border-slate-200" onClick={() => setIsMenuOpen(false)}>
              Kontakt
            </Link>

            <div className="mt-6">
              <Button>
                <Link href="#contact">Umów wizytę</Link>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </nav>
  </>;
}