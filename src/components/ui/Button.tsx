interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
}
const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-white border text-slate-800 hover:bg-slate-200",
    } as const;
const baseStyles = " rounded-md px-5 py-2 font-medium transition-all cursor-pointer transition-all duration-300 ";
export default function Button({
    children, 
    variant = "primary",
    className = ""
}: ButtonProps) {
  return (
     <button className={`${variants[variant]} +${baseStyles} +${className}`}>
        {children}
     </button>
  );
};
