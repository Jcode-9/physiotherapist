import { ServicesData } from "@/types/ServicesData";
import {
  Stethoscope,
  Hand,
  Dumbbell,
  Activity,
  HeartPulse,
  PersonStanding,
} from "lucide-react";

export const servicesData: ServicesData = {
  badge: "Usługi",

  title: "Kompleksowa opieka dopasowana do Twoich potrzeb",

  description:
    "Pomagam wrócić do pełnej sprawności poprzez indywidualnie dobrane metody terapii.",

  services: [
    {
      id: "consultation",
      icon: Stethoscope,
      title: "Konsultacja fizjoterapeutyczna",

      shortDescription:
        "Kompleksowa ocena stanu zdrowia i przygotowanie indywidualnego planu terapii.",

      description:
        "Pierwsza wizyta obejmuje szczegółowy wywiad, ocenę postawy, badanie funkcjonalne oraz analizę dolegliwości. Na podstawie wyników przygotowywany jest indywidualny plan terapii dostosowany do potrzeb pacjenta.",

      image: "/images/services/consultation.jpg",

      duration: "60 minut",

      price: "200 zł",

      benefits: [
        "Dokładna diagnoza problemu",
        "Indywidualny plan leczenia",
        "Zalecenia do ćwiczeń w domu",
      ],
    },

    {
      id: "manual-therapy",
      icon: Hand,
      title: "Terapia manualna",

      shortDescription:
        "Skuteczne leczenie bólu oraz poprawa ruchomości stawów i tkanek.",

      description:
        "Terapia manualna wykorzystuje specjalistyczne techniki mobilizacji stawów i tkanek miękkich, aby zmniejszyć ból, poprawić zakres ruchu oraz przywrócić prawidłową funkcję narządu ruchu.",

      image: "/images/services/manual-therapy.jpg",

      duration: "50 minut",

      price: "180 zł",

      benefits: [
        "Zmniejszenie bólu",
        "Poprawa ruchomości stawów",
        "Szybszy powrót do sprawności",
      ],
    },

    {
      id: "sports-rehabilitation",
      icon: Dumbbell,
      title: "Rehabilitacja sportowa",

      shortDescription:
        "Powrót do pełnej sprawności po urazach i przeciążeniach sportowych.",

      description:
        "Program rehabilitacji obejmuje terapię manualną, ćwiczenia funkcjonalne oraz trening przygotowujący do bezpiecznego powrotu do aktywności fizycznej.",

      image: "/images/services/sports-rehabilitation.jpg",

      duration: "60 minut",

      price: "220 zł",

      benefits: [
        "Bezpieczny powrót do sportu",
        "Zmniejszenie ryzyka ponownych kontuzji",
        "Poprawa wydolności i siły",
      ],
    },

    {
      id: "posture-correction",
      icon: PersonStanding,
      title: "Korekcja wad postawy",

      shortDescription:
        "Terapia poprawiająca postawę ciała i eliminująca przeciążenia.",

      description:
        "Ćwiczenia oraz terapia manualna pomagają skorygować nieprawidłowe wzorce ruchowe, poprawić postawę oraz zmniejszyć dolegliwości wynikające z siedzącego trybu życia.",

      image: "/images/services/posture-correction.jpg",

      duration: "50 minut",

      price: "170 zł",

      benefits: [
        "Poprawa postawy",
        "Zmniejszenie bólu pleców",
        "Lepsza ergonomia codziennych czynności",
      ],
    },

    {
      id: "spine-therapy",
      icon: Activity,
      title: "Terapia kręgosłupa",

      shortDescription:
        "Leczenie bólu odcinka szyjnego, piersiowego i lędźwiowego.",

      description:
        "Indywidualnie dobrana terapia obejmuje techniki manualne, ćwiczenia stabilizacyjne oraz edukację pacjenta w zakresie profilaktyki nawrotów bólu.",

      image: "/images/services/spine-therapy.jpg",

      duration: "60 minut",

      price: "190 zł",

      benefits: [
        "Redukcja bólu",
        "Poprawa stabilizacji",
        "Lepsza jakość życia",
      ],
    },
    {
      id: "pain-therapy",
      icon: HeartPulse,
      title: "Terapia przeciwbólowa",

      shortDescription:
        "Nowoczesne metody zmniejszania przewlekłego i ostrego bólu.",

      description:
        "Połączenie terapii manualnej, ćwiczeń oraz technik rozluźniania tkanek pozwala skutecznie ograniczyć dolegliwości bólowe i poprawić komfort codziennego funkcjonowania.",

      image: "/images/services/pain-therapy.jpg",

      duration: "45 minut",

      price: "170 zł",

      benefits: [
        "Szybka redukcja bólu",
        "Rozluźnienie napiętych mięśni",
        "Poprawa komfortu życia",
      ]
    }
  ],
};