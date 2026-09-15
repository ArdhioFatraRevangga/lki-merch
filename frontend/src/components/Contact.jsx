import logoWa from '../assets/wa.png';

export default function Contact() {
  return (
    <section className="w-full py-8">
      
      {/* Banner Hitam Judul "Kontak Kami" */}
      <div className="bg-black text-white text-center py-3 mb-12 text-sm md:text-base tracking-widest font-medium">
        Kontak Kami
      </div>

      {/* Container Utama Menu Kontak */}
      <div className="max-w-2xl mx-auto px-6 flex flex-col gap-10 text-center">
        
        {/* 1. Customer Service */}
        <div className="flex flex-col items-center">
          <div className="bg-black text-white px-8 py-2.5 rounded-lg font-medium text-sm md:text-base tracking-wide w-full max-w-md shadow">
            Customer Service
          </div>
          <p className="text-xs md:text-sm text-gray-600 mt-2 max-w-md leading-relaxed">
            Customer Support kami terkait pertanyaan atau informasi mengenai produk dan penjualan, (Order / pemesanan, Produk, dll)
          </p>
          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 bg-black text-white text-xs md:text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition shadow"
          >
            <img src={logoWa} alt="WhatsApp" className="w-4 h-4 object-contain filter invert" />
            HUBUNGI CUSTOMER SUPPORT KAMI
          </a>
        </div>

        {/* 2. Admin */}
        <div className="flex flex-col items-center">
          <div className="bg-black text-white px-8 py-2.5 rounded-lg font-medium text-sm md:text-base tracking-wide w-full max-w-md shadow">
            Admin
          </div>
          <p className="text-xs md:text-sm text-gray-600 mt-2 max-w-md leading-relaxed">
            Admin khusus untuk kalian yang ingin memberikan kritik, saran dan berbagai macam masukan, supaya kami agar menjadi lebih baik. (siap melayani kalian 24/7)
          </p>
          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 bg-black text-white text-xs md:text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition shadow"
          >
            <img src={logoWa} alt="WhatsApp" className="w-4 h-4 object-contain filter invert" />
            HUBUNGI CUSTOMER SUPPORT KAMI
          </a>
        </div>

        {/* 3. Email LKIMerchandise */}
        <div className="flex flex-col items-center">
          <div className="bg-black text-white px-8 py-2.5 rounded-lg font-medium text-sm md:text-base tracking-wide w-full max-w-md shadow">
            Email LKIMerchandise
          </div>
          <p className="text-xs md:text-sm text-gray-600 mt-2 max-w-md leading-relaxed">
            Kirimkan email kalian untuk penawaran kerja sama, Sponsorship dll.
          </p>
          <a 
            href="mailto:lkimerchandise@gmail.com"
            className="mt-3 inline-flex items-center gap-2 bg-black text-white text-xs md:text-sm px-5 py-2 rounded-md hover:bg-gray-800 transition shadow"
          >
            {/* Simbol Amplop Sederhana */}
            <span className="text-base">✉</span> 
            EMAIL LKIMERCHANDISE
          </a>
        </div>

      </div>

      {/* 4 Kotak Abu-abu Estetik di Bawah */}
      <div className="max-w-5xl mx-auto px-6 mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-200 h-36 rounded-xl shadow-inner animate-pulse"></div>
        <div className="bg-gray-200 h-36 rounded-xl shadow-inner animate-pulse"></div>
        <div className="bg-gray-200 h-36 rounded-xl shadow-inner animate-pulse"></div>
        <div className="bg-gray-200 h-36 rounded-xl shadow-inner animate-pulse"></div>
      </div>

    </section>
  );
}