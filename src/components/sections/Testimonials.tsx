import { styles } from "@/lib/constants";
import SectionHeading from "../ui/SectionHeading";
import { testimonialsData } from "@/data/testimonials";
import Card from "../ui/Card";
import TestimonialCard from "../ui/TestimonialCard";

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} flex flex-col gap-16`}>
        <SectionHeading align="center" badge={testimonialsData.badge} title={testimonialsData.title} description={testimonialsData.description}></SectionHeading>
        <div className="grid grid-cols-3 gap-8">
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