import { LucideIcon } from "lucide-react";
import Card from "./Card";
interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}
export default function FeatureCard({icon: Icon, title, description}: FeatureCardProps) {
    return(
        <Card>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                <Icon className="h-7 w-7 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-slate-800">
                {title}
            </h3>

            <p className="leading-7 text-slate-600">
                {description}
            </p>
        </Card>
    )
}