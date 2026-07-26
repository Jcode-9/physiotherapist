import { servicesData } from "@/data/services";
import { styles } from "@/lib/constants";
import SectionHeading from "../ui/SectionHeading";
import ServiceDetailsCard from "../ui/ServiceDetailsCard";

export default function ServiceDetails() {
    return (
        <>
            <section id="detailed-services" className={styles.section}>
                <div className={`${styles.container} flex flex-col gap-16`}>
                    <SectionHeading
                        align="center"
                        badge={servicesData.badge}
                        title={servicesData.title}
                        description={servicesData.description}
                    />

                    {
                        servicesData.services.map((service, index) => (
                            <ServiceDetailsCard key={service.id} service={service} variant={index % 2 === 0 ? "left" : "right"}></ServiceDetailsCard>
                        ))}
                </div>
            </section>
        </>
    )
}