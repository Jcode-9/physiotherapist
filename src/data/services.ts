import {
  Stethoscope,
  Dumbbell,
  Activity,
} from "lucide-react";

export const servicesData = {
  badge: "Usługi",

  title: "Kompleksowa opieka dopasowana do Twoich potrzeb",

  description:
    "Pomagam wrócić do pełnej sprawności poprzez indywidualnie dobrane metody terapii.",

  services: [
    {
      icon: Stethoscope,
      title: "Fizjoterapia ortopedyczna",
      description:
        "Leczenie bólu kręgosłupa, stawów i urazów narządu ruchu.",
    },
    {
      icon: Activity,
      title: "Fizjoterapia sportowa",
      description:
        "Powrót do aktywności po kontuzjach i przeciążeniach.",
    },
    {
      icon: Dumbbell,
      title: "Trening funkcjonalny",
      description:
        "Ćwiczenia poprawiające siłę, mobilność i stabilizację.",
    },
  ],
};