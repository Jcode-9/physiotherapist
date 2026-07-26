import { styles } from "@/lib/constants";
import SectionHeading from "../ui/SectionHeading";
import { servicesData } from "@/data/services";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={`${styles.container} flex flex-col gap-16`}>
        <SectionHeading align="center" badge={servicesData.badge} title={servicesData.title} description={servicesData.description}></SectionHeading>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.services.slice(0, 3).map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title}>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-slate-800">
                  {service.title}
                </h3>
                <p className="mb-8 leading-7 text-slate-600">
                  {service.shortDescription}
                </p>
                <Link href={`#${service.id}`}>
                  <Button variant="secondary">Dowiedz się więcej →</Button>
                </Link>
              </Card>
            );
          })}
        </div>
        <div className="mt-2 flex justify-center lg:mt-6">

          <Button className="px-8 py-3 text-base sm:px-10 sm:text-lg">
            <Link href="#detailed-services">
              Zobacz wszystkie usługi →
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}