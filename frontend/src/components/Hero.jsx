import heroVideo from '../assets/videobanner.mp4'; // 1. Import file videonya

export default function Hero() {
  return (
    <section className="px-8 my-6">
      <div className="relative bg-black text-white h-[400px] rounded-lg flex items-center justify-center shadow-md overflow-hidden">
        
        {/* Tombol Panah Kiri */}
        <button className="absolute z-10 left-6 text-3xl font-light text-gray-400 hover:text-white transition">
          &#10094;
        </button>
        
        {/* Konten Tengah (Video & Teks) */}
        <div className="text-center flex flex-col items-center z-10">
          {/* 2. Gunakan tag <video> dengan atribut autoplay */}
          <video 
            src={heroVideo} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="h-32 md:h-48 w-auto object-contain mb-2 pointer-events-none"
          />
          {/* <p className="text-xs tracking-widest text-gray-400 mt-2">
            LEGACY KEEPS INSPIRING
          </p> */}
        </div>

        {/* Tombol Panah Kanan */}
        <button className="absolute z-10 right-6 text-3xl font-light text-gray-400 hover:text-white transition">
          &#10095;
        </button>
        
      </div>
    </section>
  );
}