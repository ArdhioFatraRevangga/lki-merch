export default function Hero() {
  return (
    <section className="px-8 my-6">
      <div className="relative bg-black text-white h-[400px] rounded-lg flex items-center justify-center shadow-md">
        <button className="absolute left-6 text-3xl font-light text-gray-400 hover:text-white transition">
          &#10094;
        </button>
        
        <div className="text-center">
          <h1 className="text-6xl font-black italic tracking-wider">LK</h1>
          <p className="text-xs tracking-widest text-gray-400 mt-2">LEGACY KEEPS INSPIRING</p>
        </div>

        <button className="absolute right-6 text-3xl font-light text-gray-400 hover:text-white transition">
          &#10095;
        </button>
      </div>
    </section>
  );
}