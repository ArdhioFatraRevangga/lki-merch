import { Link } from 'react-router-dom';
import logoWa from '../assets/wa-hitam.png';
import logoIg from '../assets/ig-hitam.png';
import logoShoope from '../assets/shoope.png'
import logoTiktok from '../assets/tiktok.png'
import logoLegacy from '../assets/legacy-hitam.png'; 

export default function Services() {
  return (
    <section className="px-8 my-12">
      {/* Judul dengan garis hiasan */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="flex-1 border-t border-gray-400"></div>
        <span className="text-xs uppercase tracking-widest text-gray-600 font-semibold">Layanan Kami</span>
        <div className="flex-1 border-t border-gray-400"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Tombol Aksi Kiri (Jaini Purva) */}
        <div className="flex flex-col gap-3 w-full md:w-1/3">
          <Link 
            to="/how-to-order" 
            className="bg-black text-white py-3 px-6 rounded-lg font-jaini text-2xl tracking-wide hover:bg-gray-800 transition text-center shadow block"
          >
            How to order
          </Link>
          <button className="bg-black text-white py-3 px-6 rounded-lg font-jaini text-2xl tracking-wide hover:bg-gray-800 transition text-center shadow w-full">
            Konfirmasi Pembayaran
          </button>
        </div>

        {/* Logo & Sosmed Kanan */}
        <div className="flex flex-col items-center w-full md:w-1/3 text-center">
          <img 
            src={logoLegacy} 
            alt="Legacy Keeps Inspiring" 
            className="h-16 w-auto object-contain mb-2" 
          />
          
          {/* Teks Find Us (Jacques Francois Shadow) */}
          <p className="text-xl tracking-widest text-gray-800 mb-4 font-jacques">
            Find Us
          </p>
          
          <div className="flex gap-4 items-center">
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/lkimerch?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-75 transition"
            >
              <img src={logoIg} alt="Instagram" className="w-6 h-6 object-contain" />
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/628133300078" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-75 transition"
            >
              <img src={logoWa} alt="WhatsApp" className="w-6 h-6 object-contain" />
            </a>

            {/* Shopee */}
            <a 
              href="https://shopee.co.id/toko_kamu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-75 transition"
            >
              <img src={logoShoope} alt="Shopee" className="w-6 h-6 object-contain" />
            </a>

            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@lki.merch?is_from_webapp=1&sender_device=pc" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-75 transition"
            >
              <img src={logoTiktok} alt="Tiktok" className="w-6 h-6 object-contain" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}