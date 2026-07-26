import { styles } from "@/lib/constants";
import SectionHeading from "../ui/SectionHeading";
import { pricingData } from "@/data/pricing";
import { servicesData } from "@/data/services";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={`${styles.container} flex flex-col gap-10 lg:gap-16`}>
        <SectionHeading
          align="center"
          badge={pricingData.badge}
          title={pricingData.title}
          description={pricingData.description}
        />

        <Card className="overflow-hidden p-0">
          {/* Nagłówek */}
          <div className="hidden md:grid md:grid-cols-[1fr_140px_150px_180px] items-center bg-slate-50 px-6 lg:px-8 py-4 lg:py-5 text-sm font-semibold uppercase tracking-wide text-slate-500">
            <span>Usługa</span>
            <span className="text-center">Czas</span>
            <span className="text-center">Cena</span>
            <span />
          </div>

          {/* Wiersze */}
          {servicesData.services.map((service) => (
            <div
              key={service.id}
              className="
                group
                grid
                gap-3
                border-t
                border-slate-300
                px-2
                py-5
                transition-colors
                duration-300
                hover:bg-slate-200
                sm:px-6
                md:grid-cols-[1fr_140px_120px_180px]
                md:items-center
                md:gap-6
                lg:px-8
              "
            >
              {/* Nazwa */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500 md:hidden">
                  {service.duration}
                </p>
              </div>

              {/* Czas */}
              <div className="hidden text-center text-slate-600 md:block">
                {service.duration}
              </div>

              {/* Cena */}
              <div className="text-left text-xl font-bold text-blue-600 transition-transform duration-300 group-hover:scale-105 md:text-center">
                {service.price}
              </div>

              {/* Przycisk */}
              <div className="flex justify-start md:justify-end">
                <a
                  href={`#${service.id}`}
                  className="w-full md:w-auto"
                >
                  <Button
                    variant="secondary"
                    className="w-full md:w-auto"
                  >
                    Szczegóły
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
}