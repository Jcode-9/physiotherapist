"use client";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Link from "next/link";

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
    <div className="flex justify-between h-20 bg-white items-center px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight text-slate-800">
        <Link href="/">Physio<span className="text-blue-600">Pro</span></Link>
      </h1>
        <ul className="flex gap-9">
          <li><Link href="#" className="hover:text-blue-600 transition-colors">O mnie</Link></li>
          <li><Link href="#" className="hover:text-blue-600 transition-colors">Usługi</Link></li>
          <li><Link href="#" className="hover:text-blue-600 transition-colors">Cennik</Link></li>
          <li><Link href="#" className="hover:text-blue-600 transition-colors">Opinie</Link></li>
          <li><Link href="#" className="hover:text-blue-600 transition-colors">Kontakt</Link></li>
        </ul>
      <Button>Umów wizytę</Button>
    </div>
  </nav>
  </>;
}