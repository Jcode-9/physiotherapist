import Image from "next/image";
import { styles } from "@/lib/constants";
import { heroData } from "@/data/hero";
import Button from "@/components/ui/Button";
import Stat from "@/components/ui/Stat";
import Badge from "../ui/Badge";

export default function Hero() {
  return (
    <section className={`${styles.section} min-h-[calc(100vh)] flex items-center`}>
      <div className={`${styles.container} grid grid-cols-2 gap-12 items-center`}>
        {/* Left column */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <Badge>
            {heroData.badge}
          </Badge>

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
            <Image priority src="/images/physio2.jpg" fill alt="Fizjoterapeuta podczas terapii z pacjentem" className="object-cover"/>
            <div className="bg-slate-400/80 backdrop-blur-xs px-6 py-5 rounded-3xl absolute bottom-2 right-2 text-right">
              <p className="text-2xl">⭐⭐⭐⭐⭐</p>
              <p className="text-3xl text-white">4.9/5</p>
              <p className="text-lg text-white">Średnia ocena Google</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}