import logoWa from '../assets/wa-hitam.png';
import logoIg from '../assets/ig-hitam.png';
import logoLegacy from '../assets/legacy-hitam.png'; // 1. Import logo legacy

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
        {/* Tombol Aksi Kiri */}
        <div className="flex flex-col gap-3 w-full md:w-1/3">
          <button className="bg-black text-white py-3 px-6 rounded-lg font-medium text-sm tracking-wide hover:bg-gray-800 transition text-center shadow">
            How to order
          </button>
          <button className="bg-black text-white py-3 px-6 rounded-lg font-medium text-sm tracking-wide hover:bg-gray-800 transition text-center shadow">
            Konfirmasi Pembayaran
          </button>
        </div>

        {/* Logo & Sosmed Kanan */}
        <div className="flex flex-col items-center w-full md:w-1/3 text-center">
          
          {/* 2. Ganti teks H2 dengan tag <img> untuk logo Legacy */}
          <img 
            src={logoLegacy} 
            alt="Legacy Keeps Inspiring" 
            className="h-16 w-auto object-contain mb-2" 
          />
          
          <p className="text-xs tracking-widest text-gray-500 mb-4">Find Us</p>
          
          {/* Ikon Medsos */}
          <div className="flex gap-4 items-center">
            <a href="#" className="hover:opacity-75 transition">
              <img src={logoIg} alt="Instagram" className="w-6 h-6 object-contain" />
            </a>
            <a href="#" className="hover:opacity-75 transition">
              <img src={logoWa} alt="WhatsApp" className="w-6 h-6 object-contain" />
            </a>
            {/* <span className="text-sm font-bold tracking-wider cursor-pointer hover:text-gray-600 mt-1">Shopee</span>
            <span className="text-sm font-bold tracking-wider cursor-pointer hover:text-gray-600 mt-1">TikTok</span> */}
          </div>
        </div>
      </div>
    </section>
  );
}