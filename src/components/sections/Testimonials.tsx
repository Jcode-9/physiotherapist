import { styles } from "@/lib/constants";
import SectionHeading from "../ui/SectionHeading";
import { testimonialsData } from "@/data/testimonials";
import TestimonialCard from "../ui/TestimonialCard";

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} flex flex-col gap-16`}>
        <SectionHeading align="center" badge={testimonialsData.badge} title={testimonialsData.title} description={testimonialsData.description}></SectionHeading>
        <div className="
          flex
          gap-6
          overflow-x-auto
          snap-x
          snap-mandatory
          pb-4
      ">
          {testimonialsData.testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  )
}