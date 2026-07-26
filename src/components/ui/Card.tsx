interface CardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Card({ children, className = "", id = "" }: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-200
        hover:shadow-xl
        ${className}
      `}
      id={id}
    >
      {children}
    </div>
  );
}