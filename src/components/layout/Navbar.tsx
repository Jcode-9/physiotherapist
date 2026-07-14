import Button from "../ui/Button";
import Link from "next/link";
export default function Navbar() {
  return <>
  <nav className="w-full shadow-md/20">
    <div className="flex justify-between h-20 bg-white items-center px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight text-slate-800">
        <Link href="/">Physio<span className="text-blue-600">Pro</span></Link>
      </h1>
        <ul className="flex gap-9">
          <li><Link href="#" className="hover:text-blue-600 transition-colors">O mnie</Link></li>
          <li><Link href="#" className="hover:text-blue-600 transition-colors">Usługi</Link></li>
          <li><Link href="#" className="hover:text-blue-600 transition-colors">Cennik</Link></li>
          <li><Link href="#" className="hover:text-blue-600 transition-colors">Opinie</Link></li>
          <li><Link href="#" className="hover:text-blue-600 transition-colors">Kontakt</Link></li>
        </ul>
      <Button>Umów wizytę</Button>
    </div>
  </nav>
  </>;
}