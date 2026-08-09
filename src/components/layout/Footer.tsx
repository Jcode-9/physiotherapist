import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { contactData } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo / opis */}
          <div>
            <Link
              href="/"
              className="inline-block text-3xl font-bold tracking-tight text-white"
            >
              Physio<span className="text-blue-500">Pro</span>
            </Link>

            <p className="mt-5 max-w-xs leading-7 text-slate-400">
              Profesjonalna fizjoterapia i indywidualne podejście do każdego
              pacjenta. Pomagam wrócić do pełnej sprawności bez bólu i
              ograniczeń.
            </p>

            {/* Social media */}
            <div className="mt-6 flex gap-3">
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 transition-colors hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 transition-colors hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 transition-colors hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Nawigacja */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Nawigacja
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                href="#about"
                className="transition-colors hover:text-blue-400"
              >
                O mnie
              </Link>

              <Link
                href="#services"
                className="transition-colors hover:text-blue-400"
              >
                Usługi
              </Link>

              <Link
                href="#pricing"
                className="transition-colors hover:text-blue-400"
              >
                Cennik
              </Link>

              <Link
                href="#testimonials"
                className="transition-colors hover:text-blue-400"
              >
                Opinie
              </Link>

              <Link
                href="#contact"
                className="transition-colors hover:text-blue-400"
              >
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Kontakt
            </h3>

            <div className="mt-5 flex flex-col gap-4">
              <a
                href={`tel:${contactData.phone}`}
                className="flex items-start gap-3 transition-colors hover:text-blue-400"
              >
                <Phone className="mt-1 h-5 w-5 shrink-0 text-blue-500" />

                <span>{contactData.phone}</span>
              </a>

              <a
                href={`mailto:${contactData.email}`}
                className="flex items-start gap-3 transition-colors hover:text-blue-400"
              >
                <Mail className="mt-1 h-5 w-5 shrink-0 text-blue-500" />

                <span>{contactData.email}</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-500" />

                <div>
                  <p>{contactData.address.street}</p>
                  <p className="text-slate-400">
                    {contactData.address.city}
                  </p>
                  <p className="text-slate-400">
                    {contactData.address.country}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Godziny */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Godziny otwarcia
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {contactData.openingHours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between gap-4 border-b border-slate-800 pb-2 last:border-0"
                >
                  <span className="text-slate-400">
                    {item.day}
                  </span>

                  <span className="font-medium text-slate-200">
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dolna część */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>
              © 2026 PhysioPro. Wszelkie prawa zastrzeżone.
            </p>

            <Link
              href="#top"
              className="transition-colors hover:text-blue-400"
            >
              Wróć na górę ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}