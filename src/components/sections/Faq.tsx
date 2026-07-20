import { styles } from "@/lib/constants";
import Accordion from "../ui/Accordion";
import { faqData } from "@/data/faq";
import SectionHeading from "../ui/SectionHeading";

export default function Faq() {
  return ( 
    <section className={styles.section}>
      <div className={`${styles.container} flex flex-col gap-16`}>
        <SectionHeading
          align="center"
          badge={faqData.badge}
          title={faqData.title}
          description={faqData.description}
        />

        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          {faqData.questions.map((faq) => (
            <Accordion
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}