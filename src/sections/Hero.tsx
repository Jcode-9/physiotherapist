import Image from "next/image";
import { styles } from "@/lib/constants";
import { heroData } from "@/data/hero";

import Button from "@/components/ui/Button";
import Stat from "@/components/ui/Stat";

export default function Hero() {
  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.container} grid grid-cols-2 gap-12 items-center`}>
        {/* Left column */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <p className="bg-blue-600 text-white rounded-full px-4 py-1 w-fit text-sm font-medium">
            {heroData.badge}
          </p>

          {/* Heading */}
          <h1 className={styles.heading}>
            {heroData.heading}
          </h1>

          {/* Description */}
          <p className="text-slate-600 leading-7 max-w-lg">
            {heroData.description}
          </p>

          {/* CTA */}
          <div className="flex gap-4">
            <Button>
              {heroData.buttons.primary}
            </Button>

            <Button variant="secondary">
              {heroData.buttons.secondary}
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 pt-4">
            {heroData.stats.map((stat) => (
              <Stat
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>

        {/* Right column */}
        <div>
          <div className="relative h-[550px] rounded-2xl bg-slate-200 shadow overflow-hidden">
            <Image loading="eager" src="/images/physio2.jpg" fill alt="Hero" className="object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
}