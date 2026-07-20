import { styles } from "@/lib/constants"
import Badge from "./Badge"
interface SectionHeadingProps {
    align?: "left" | "center",
    badge: string,
    title: string,
    description: string,
}
const variants = {
    left: "items-start text-left",
    center: "items-center text-center",
} as const;

export default function SectionHeading({align="left", badge, title, description} : SectionHeadingProps) {
    return(
        <div className={`${variants[align]} flex flex-col`}>
            <Badge>
                {badge}
            </Badge>
            <h2 className={`${styles.heading} pb-3`}>{title}</h2>
            <p className={styles.subheading}>{description}</p>
        </div>
    )
}