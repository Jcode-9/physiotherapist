import Image from "next/image";
import { styles } from "@/lib/constants";
import { heroData } from "@/data/hero";
import Button from "@/components/ui/Button";
import Stat from "@/components/ui/Stat";
import Badge from "../ui/Badge";

export default function Hero() {
  return (
    <section className={`${styles.section} min-h-[calc(100vh)] flex items-center`}>
      <div className={`${styles.container} grid grid-cols-1 items-center gap-12 lg:grid-cols-2`}>
        {/* Left column */}
        <div>
          {/* Badge */}
          <Badge>
            {heroData.badge}
          </Badge>
        <div className="flex flex-col gap-6">
          {/* Heading */}
          <h1 className={styles.heading}>
            {heroData.heading}
          </h1>

          {/* Description */}
          <p className={styles.subheading}>
            {heroData.description}
          </p>

          {/* CTA */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button>
              {heroData.buttons.primary}
            </Button>

            <Button variant="secondary">
              {heroData.buttons.secondary}
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-4">
            {heroData.stats.map((stat) => (
              <Stat
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
        </div>
        {/* Right column */}
        <div>
          <div className="relative h-[350px] overflow-hidden rounded-2xl bg-slate-200 shadow lg:h-[550px]">
            <Image priority src="/images/physio2.jpg" fill alt="Fizjoterapeuta podczas terapii z pacjentem" className="object-cover"/>
            <div className="bg-slate-400/80 backdrop-blur-xs px-4 py-3 lg:px-5 lg:py-4 rounded-3xl absolute bottom-2 right-2 text-right">
              <p className="text-xl lg:text-2xl">⭐⭐⭐⭐⭐</p>
              <p className="text-2xl lg:text-3xl text-white">4.9/5</p>
              <p className="text-md lg:text-lg text-white">Średnia ocena Google</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}