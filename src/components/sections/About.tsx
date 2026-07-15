import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import { aboutData } from "@/data/about";
import { styles } from "@/lib/constants";
export default function About() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} flex flex-col gap-16`}>
        <SectionHeading
          align="center"
          badge={aboutData.badge}
          title={aboutData.title}
          description={aboutData.description}
        />

        <div className="grid grid-cols-3 gap-8">
          {aboutData.features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}