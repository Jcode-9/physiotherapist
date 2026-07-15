interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex w-fit items-center rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
      {children}
    </span>
  );
}