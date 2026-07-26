import { LucideIcon } from "lucide-react";

export interface Service {
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