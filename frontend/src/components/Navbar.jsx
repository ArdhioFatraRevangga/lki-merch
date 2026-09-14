import logoLki from '../assets/logo-lkimerch-putih.png';
import logoWa from '../assets/wa.png';
import logoIg from '../assets/ig.png'; // Pastikan import IG ditambahkan

export default function Navbar() {
  return (
    <div>
      {/* TopBar Hitam */}
      <header className="bg-black text-white px-6 py-4 flex justify-between items-center">
        {/* Logo LKI Kiri */}
        <div className="flex items-center">
          <img src={logoLki} alt="LKI Merch Logo" className="h-8 w-auto object-contain" />
        </div>

        {/* Ikon Medsos Kanan */}
        <div className="flex items-center gap-4 text-sm font-medium">
          <a href="#" className="hover:opacity-80 transition">
            <img src={logoIg} alt="Instagram" className="w-5 h-5 object-contain" />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <img src={logoWa} alt="WhatsApp" className="w-5 h-5 object-contain" />
          </a>
        </div>
      </header>

      {/* Navigation Bar Putih */}
      <nav className="border-b border-gray-200 py-3 px-8 flex justify-end gap-8 text-sm tracking-wide font-medium">
        <a href="#home" className="hover:text-gray-500 underline font-semibold">Home</a>
        <a href="#about" className="hover:text-gray-500 text-gray-600">About</a>
        <a href="#contact" className="hover:text-gray-500 text-gray-600">Contact Us</a>
      </nav>
    </div>
  );
}