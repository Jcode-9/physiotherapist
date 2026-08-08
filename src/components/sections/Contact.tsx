import { styles } from "@/lib/constants";
import SectionHeading from "../ui/SectionHeading";
import { contactData } from "@/data/contact";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={`${styles.container} flex flex-col gap-10 lg:gap-16`}>
        <SectionHeading
          align="center"
          badge={contactData.badge}
          title={contactData.title}
          description={contactData.description}
        />

        {/* Główna karta kontaktowa */}
        <div
          className="
            w-full
            rounded-3xl
            border
            border-blue-200
            bg-blue-50
            p-5
            shadow-sm
            sm:p-8
            lg:p-10
          "
        >
          <div className="grid w-full grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
            
            {/* Lewa strona - dane kontaktowe */}
            <div className="flex w-full flex-col justify-center gap-8">
              
              {/* Telefon */}
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white p-3 text-blue-600 shadow-sm">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Telefon
                  </p>

                  <p className="text-lg font-semibold text-slate-800">
                    {contactData.phone}
                  </p>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white p-3 text-blue-600 shadow-sm">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    E-mail
                  </p>

                  <p className="text-lg font-semibold text-slate-800">
                    {contactData.email}
                  </p>
                </div>
              </div>

              {/* Adres */}
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white p-3 text-blue-600 shadow-sm">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Adres
                  </p>

                  <p className="font-semibold text-slate-800">
                    {contactData.address.street}
                  </p>

                  <p className="text-slate-600">
                    {contactData.address.city},{" "}
                    {contactData.address.country}
                  </p>
                </div>
              </div>

              {/* Godziny otwarcia */}
              <div className="mt-2 rounded-2xl border border-blue-100 bg-white/70 p-5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-blue-100 p-2 text-blue-600">
                    <Clock3 className="h-5 w-5" />
                  </div>

                  <span className="font-semibold text-slate-800">
                    Godziny otwarcia
                  </span>
                </div>

                <div className="space-y-3">
                  {contactData.openingHours.map((item) => (
                    <div
                      key={item.day}
                      className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-slate-200
                        pb-2
                        last:border-0
                        last:pb-0
                      "
                    >
                      <span className="text-slate-600">
                        {item.day}
                      </span>

                      <span className="font-medium text-slate-800">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Prawa strona - formularz */}
            <div className="w-full rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-8">
              <form className="flex w-full flex-col gap-6">
                <Input
                  label="Imię"
                  placeholder="Jan Kowalski"
                />

                <Input
                  label="E-mail"
                  type="email"
                  placeholder="jan@email.com"
                />

                <Input
                  label="Telefon"
                  type="tel"
                  placeholder="+48 123 456 789"
                />

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-700"
                  >
                    Wiadomość
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Opisz krótko, w czym możemy Ci pomóc..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      px-4
                      py-3
                      text-slate-800
                      placeholder:text-slate-400
                      outline-none
                      transition-all
                      duration-200
                      focus:border-blue-500
                      focus:ring-4
                      focus:ring-blue-100
                    "
                  />
                </div>

                <Button
                  variant="primary"
                  className="w-full justify-center"
                >
                  Wyślij wiadomość
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}