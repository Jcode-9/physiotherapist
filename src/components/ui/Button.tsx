import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
}

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "border bg-white text-slate-800 hover:bg-slate-200",
} as const;

const baseStyles =
  "inline-flex items-center justify-center rounded-md px-5 py-2 font-medium cursor-pointer transition-all duration-300";

export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}: ButtonProps) {
  const styles = `${variants[variant]} ${baseStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}