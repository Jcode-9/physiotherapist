import { styles } from "@/lib/constants";
import SectionHeading from "../ui/SectionHeading";
import { servicesData } from "@/data/services";
import Card from "../ui/Card";
import { Icon } from "lucide-react";
import { LucideIcon } from "lucide-react";
import Button from "../ui/Button";

export default function Services() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} flex flex-col gap-16`}>
        <SectionHeading align="center" badge={servicesData.badge} title={servicesData.title} description={servicesData.description}></SectionHeading>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.services.map((service) => {
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
                <a href={"#" + service.id}>
                  <Button variant="secondary">Dowiedz się więcej →</Button>
                </a>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}