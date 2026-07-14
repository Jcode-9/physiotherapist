interface StatProps {
    value: string,
    label: string
}

export default function Stat({value, label}: StatProps) {
  return (
    <div className="text-center">
        <p className='text-3xl font-bold text-slate-800'>{value}</p>
        <p className='text-sm text-slate-500'>{label}</p>
    </div>
  );
};
