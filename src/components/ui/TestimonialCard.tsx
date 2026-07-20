import Card from "./Card";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <Card className="min-w-[320px] snap-center lg:min-w-100">
    <p className="mb-3 text-lg">
        {"⭐".repeat(testimonial.rating)}
    </p>

    <blockquote className="mb-6 leading-7 italic text-slate-600">
        "{testimonial.content}"
    </blockquote>

    <div className="mt-auto border-t border-slate-200 pt-4">
        <h3 className="text-lg font-semibold text-slate-800">
        {testimonial.name}
        </h3>

        <p className="text-sm text-slate-500">
        {testimonial.role}
        </p>
    </div>
    </Card>
  );
}