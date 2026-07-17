import { styles } from "@/lib/constants";
import SectionHeading from "../ui/SectionHeading";
import { testimonialsData } from "@/data/testimonials";
import Card from "../ui/Card";

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} flex flex-col gap-16`}>
        <SectionHeading align="center" badge={testimonialsData.badge} title={testimonialsData.title} description={testimonialsData.description}></SectionHeading>
        <div className="grid grid-cols-3 gap-8">
          {testimonialsData.testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <p className="mb-3 text-lg">⭐⭐⭐⭐⭐</p>
              <blockquote className="mb-6 leading-7 text-slate-600 italic">
                "{testimonial.content}"
              </blockquote>
              <div className="mt-auto border-t border-slate-200 pt-4">
                <h3 className="text-lg font-semibold text-slate-800">{testimonial.name}</h3>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}