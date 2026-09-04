"use client";

import { useState } from "react";
import { styles } from "@/lib/constants";
import Accordion from "../ui/Accordion";
import { faqData } from "@/data/faq";
import SectionHeading from "../ui/SectionHeading";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className={styles.section}>
      <div className={`${styles.container} flex flex-col gap-16`}>
        <SectionHeading
          align="center"
          badge={faqData.badge}
          title={faqData.title}
          description={faqData.description}
        />

        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
          {faqData.questions.map((faq, index) => (
            <Accordion
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              open={openIndex === index}
              onToggle={() =>
                setOpenIndex(
                  openIndex === index ? null : index
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}