import { NavLink } from 'react-router-dom';
import logoLki from '../assets/logo-lkimerch-putih.png';
import logoWa from '../assets/wa.png';
import logoIg from '../assets/ig.png';

export default function Navbar() {
  const navLinkStyle = ({ isActive }) => 
    isActive 
      ? "text-black font-semibold underline decoration-2 underline-offset-4" 
      : "text-gray-600 hover:text-gray-400 transition-colors";

  return (
    <div>
      {/* TopBar Hitam */}
      <header className="bg-black text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logoLki} alt="LKI Merch Logo" className="h-8 w-auto object-contain" />
        </div>

        <div className="flex items-center gap-4 text-sm font-medium">
          <a href="#" className="hover:opacity-80 transition">
            <img src={logoIg} alt="Instagram" className="w-5 h-5 object-contain" />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <img src={logoWa} alt="WhatsApp" className="w-5 h-5 object-contain" />
          </a>
        </div>
      </header>

      {/* Navigation Bar Putih (Dikembalikan ukurannya ke text-sm) */}
      <nav className="border-b border-gray-200 py-3 px-8 flex justify-end gap-8 text-sm tracking-wide font-medium">
        <NavLink to="/" className={navLinkStyle}>Home</NavLink>
        <NavLink to="/about" className={navLinkStyle}>About</NavLink>
        <NavLink to="/contact" className={navLinkStyle}>Contact Us</NavLink>
      </nav>
    </div>
  );
}