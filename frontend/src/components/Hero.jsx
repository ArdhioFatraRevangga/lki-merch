import { useState } from 'react';
import heroVideo from '../assets/videobanner.mp4';
import bannerSosmed from '../assets/banner-sosmed.png';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { type: 'video', src: heroVideo },
    { type: 'image', src: bannerSosmed },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="my-6"> 
      <div className="relative bg-black text-white h-[500px] flex items-center justify-center shadow-md overflow-hidden group w-full">
        
        {/* PANAH KIRI (Dipastikan z-index tinggi agar tidak tertimpa gambar) */}
        <button 
          onClick={prevSlide}
          className="absolute z-20 left-6 md:left-10 text-4xl font-bold text-gray-300 hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-all cursor-pointer outline-none"
        >
          &#10094;
        </button>
        
        {/* Konten Tengah (Video/Gambar) */}
        <div className="text-center flex flex-col items-center z-10 w-full h-full justify-center">
          {slides[currentIndex].type === 'video' ? (
            <video 
              src={slides[currentIndex].src} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="h-32 md:h-48 w-auto object-contain pointer-events-none"
            />
          ) : (
            <img 
              src={slides[currentIndex].src} 
              alt={`Banner ${currentIndex + 1}`} 
              className="w-full h-full object-cover" 
            />
          )}
        </div>

        {/* PANAH KANAN (Outline biru saat di-klik dihilangkan) */}
        <button 
          onClick={nextSlide}
          className="absolute z-20 right-6 md:right-10 text-4xl font-bold text-gray-300 hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-all cursor-pointer outline-none"
        >
          &#10095;
        </button>
        
        {/* Indikator Titik (Dots) */}
        <div className="absolute bottom-4 flex gap-2 z-20">
          {slides.map((_, index) => (
            <div 
              key={index} 
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                currentIndex === index ? 'bg-white w-6' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}