import Card from "./Card";
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import Button from "./Button";
import { Check } from "lucide-react";

interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string,
  duration: string,
  price: string,
  benefits: string[]
  icon: LucideIcon;
}

interface ServiceDetailsCardProps {
  service: Service;
  variant?: "left" | "right";
}

const variants = {
  left: "flex-col lg:flex-row",
  right: "flex-col lg:flex-row-reverse"
}

export default function ServiceDetailsCard({
  service, variant = "left"
}: ServiceDetailsCardProps) {
  const Icon = service.icon
  return (
    <Card
      id={service.id}
      className={`flex overflow-hidden p-0 ${variants[variant]}`}
    >
      <div className="relative min-h-[350px] w-full lg:w-1/3 overflow-hidden">
        <Image
          fill
          src={service.image}
          alt={service.title}
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105 rounded-2xl" 
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent rounded-2xl" />
      </div>
      <div className="flex w-full flex-col justify-between p-10 lg:w-2/3">
        <div>
          <div className="mb-6 flex items-center gap-4">
            <div className="rounded-2xl bg-blue-100 p-3 text-blue-600">
              <Icon className="h-7 w-7" />
            </div>

            <h2 className="text-3xl font-bold text-slate-900">
              {service.title}
            </h2>
          </div>

          <p className="mb-8 leading-8 text-slate-600">
            {service.description}
          </p>

          <div className="mb-8 space-y-3">
            {service.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-4 w-4 text-green-600" />
                </div>

                <span className="text-slate-700">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-slate-200 pt-6">
          <div className="flex gap-8">
            <div>
              <p className="text-sm text-slate-500">
                Czas trwania
              </p>

              <p className="text-lg font-semibold text-slate-800">
                {service.duration}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Cena
              </p>

              <p className="text-lg font-semibold text-blue-600">
                {service.price}
              </p>
            </div>
          </div>

          <Button className="justify-center">
            Umów wizytę
          </Button>
        </div>
      </div>
    </Card>
  );
}