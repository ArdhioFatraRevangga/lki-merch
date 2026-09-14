export default function InstagramFeed() {
  return (
    <section className="px-8 my-12">
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="flex-1 border-t border-gray-400"></div>
        <span className="text-xs uppercase tracking-widest text-gray-600 font-semibold">Follow Our Instagram</span>
        <div className="flex-1 border-t border-gray-400"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {[...Array(10)].map((_, index) => (
          <div 
            key={index} 
            className="bg-gray-200 h-44 rounded-md flex items-center justify-center text-gray-400 text-xs shadow-inner hover:bg-gray-300 transition cursor-pointer"
          >
            Foto Produk {index + 1}
          </div>
        ))}
      </div>
    </section>
  );
}